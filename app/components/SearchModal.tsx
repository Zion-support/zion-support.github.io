

'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight} from 'lucide-react';
'use client';

interface SearchResult {
  title: string;,
  description: string;,
  path: string;,
  category: string;,
  icon: React.ReactNode;

interface SearchModalProps {
  isOpen: boolean;,
 void;

const SearchModal: React.FC<SearchModalProps /> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[] />([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement />(null);
  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // AI Services

    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: <Brain const className="w-4h-4" / /> },
    { title: 'AI Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI Voice Assistant', description: 'Voice-powered AI solutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3 d-generation', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },
    { title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <Brain className="w-4h-4" / /> },

    // IT Services
    
    { title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'IT Services', icon: <Shield className="w-4h-4" / /> },
    { title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Shield className="w-4h-4" / /> },
    { title: 'DevOps', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <Shield className="w-4h-4" / /> },
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <Shield className="w-4h-4" / /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloud className="w-4h-4" / /> },
    { title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'IT Services', icon: <Shield className="w-4h-4" / /> },

    // 5 G Services
    
    { title: '5 G Implementation', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <Zap className="w-4h-4" / /> },
    { title: '5 G Network Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <Zap className="w-4h-4" / /> },
    { title: '5 G IoT Solutions', description: 'Connect devices with 5 G IoT', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <Zap className="w-4h-4" / /> },
    { title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <Zap className="w-4h-4" / /> },

    // Micro SAAS
    
    { title: 'AI Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },
    { title: 'AI Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },
    { title: 'AI Password Manager', description: 'Secure password management with AI', path: '/ai-password-manager', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },
    { title: 'AI Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },
    { title: 'AI Health Tracker', description: 'Personal health monitoring with AI', path: '/ai-health-tracker', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },
    { title: 'AI Smart Calendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'Micro SAAS', icon: <Cpu className="w-4h-4" / /> },

    // Company Pages
    
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <Shield className="w-4h-4" / /> },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <Shield className="w-4h-4" / /> },

  ];
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
  }, [isOpen]);

 0) {
      setIsLoading(true);
      // Simulate search delay

          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setIsLoading(false);
      }, 150);

 clearTimeout(timer);
    } else {
      setResults([]);
  }, [query]);

    if (e.key === 'Escape') {
      onClose();
  };

  if (!isOpen) return null;

  return (

        {/* Backdrop */}
        {/* Modal */}
          {/* Header */}
    
              <h3 className="text-lgfont-semiboldtext-white">Search Services</h3>

          {/* Search Input */}

                ref="{inputRef}"
                type="text"
                value="{query}"
 setQuery(e.target.value)}
                onKeyDown="{handleKeyDown}"
                placeholder="Search for services, solutions, or pages..."
                className="w-full px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"

          {/* Results */}
            {isLoading ? (
    
        </div></div>
                <span className="ml-3text-gray-400">Searching...</span>
            ) : query.length === 0 ? (
    
                <p className="text-gray-400">Start typing to search for services</p>
            ) : results.length === 0 ? (
    
                <p className="text-gray-400">No results found for "{query}"</p>
            ) : (
    
                  {results.length} result{results.length !== 1 ? 's' : ''} found

 (
                      <div className="flex-shrink-0 mr-4text-cyan-400group-hover:text-cyan-300">{result.icon}
                        <h4 className="text-white font-mediumgroup-hover:text-cyan-300transition-colors">{result.title}
                          {result.description}
    
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-slate-600text-gray-300rounded">{result.category}
                  ))}
    
            )}

  </div>);

};

export default SearchModal;

