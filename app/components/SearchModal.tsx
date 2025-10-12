import React from 'react';
'use client';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  icon: React.ReactNode;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // AI Services
    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Voice Assistant', description: 'Voice-powered AI solutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI 3D Generation', description: 'Create 3D models with AI', path: '/ai-3d-generation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },

    // IT Services
    { title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'DevOps', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloud className="w-4 h-4" /> },
    { title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },

    // 5G Services
    { title: '5G Implementation', description: 'Deploy 5G networks and solutions', path: '/5g-implementation', category: '5G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5G Network Infrastructure', description: 'Build robust 5G network infrastructure', path: '/5g-network-infrastructure', category: '5G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5G IoT Solutions', description: 'Connect devices with 5G IoT', path: '/5g-iot-solutions', category: '5G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5G Edge Computing', description: 'Edge computing powered by 5G', path: '/5g-edge-computing', category: '5G Solutions', icon: <Zap className="w-4 h-4" /> },

    // Micro SAAS
    { title: 'AI Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },
    { title: 'AI Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },
    { title: 'AI Password Manager', description: 'Secure password management with AI', path: '/ai-password-manager', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },
    { title: 'AI Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },
    { title: 'AI Health Tracker', description: 'Personal health monitoring with AI', path: '/ai-health-tracker', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },
    { title: 'AI Smart Calendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'Micro SAAS', icon: <Cpu className="w-4 h-4" /> },

    // Company Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <Shield className="w-4 h-4" /> },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <Shield className="w-4 h-4" /> },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const filteredResults = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setIsLoading(false);
      }, 150);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center px-4 pt-16 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative inline-block w-full max-w-2xl transform overflow-hidden rounded-2xl bg-slate-800 text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Search className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Search Services</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for services, solutions, or pages..."
                className="w-full px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                <span className="ml-3 text-gray-400">Searching...</span>
              </div>
            ) : query.length === 0 ? (
              <div className="px-6 py-8 text-center">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Start typing to search for services</p>
              </div>
            ) : results.length === 0 ? (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-400">No results found for "{query}"</p>
              </div>
            ) : (
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-400 mb-4">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </p>
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      onClick={onClose}
                      className="flex items-center p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors group"
                    >
                      <div className="flex-shrink-0 mr-4 text-cyan-400 group-hover:text-cyan-300">
                        {result.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {result.description}
                        </p>
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-slate-600 text-gray-300 rounded">
                          {result.category}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;