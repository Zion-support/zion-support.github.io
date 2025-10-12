import React from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight} from 'lucide-react';
'use client';

interface SearchResu l t {
  title: string;,
  description: string;,
  path: string;,
  category: string;,
  icon: React.ReactNode;
}

interface SearchModalPro p s {
  isOpen: boolean;,
  onClose: () => void;
}

const SearchMod a l: React.FC<SearchModalPro p s /> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResu l t[] />([]);
  const [isLoading, setIsLoadi n g] = useState(false);
  constinputRef= useRef<HTMLInputEleme n t />(null);
  // Mock search data - in a real app, this would come from an API;
  const searchData: SearchResu l t[] = [
    // AI Services;
    { title: 'AI Content Generator', description: 'Create high-qualitycontentwith AI', path: '/ai-content-generator', category: 'AI Services', icon: <BrainconstclassName="w-4h-4"  /> ,},
    { title: 'AI Chatbot Builder', description: 'Build intellige n t chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Voice Assistant', description: 'Voice-poweredAIsolutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3d-generation', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutic a l research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <BrainclassName="w-5h-5ml-2" /> ,},

    // IT Services;
    { title: 'Web Developme n t', description: 'Custom web applicatio n s and websites', path: '/web-development', category: 'IT Services', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { title: 'Mobile Developme n t', description: 'iOS and Android app developme n t', path: '/mobile-development', category: 'IT Services', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { title: 'DevOps', description: 'Streamline your developme n t and operations', path: '/devops', category: 'IT Services', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { title: 'Cloud Services', description: 'Scalable cloud infrastructu r e solutions', path: '/cloud-services', category: 'IT Services', icon: <CloudclassName="w-5h-5ml-2" /> ,},
    { title: 'Cybersecuri t y', description: 'Protect your business from cyber threats', path: '/cybersecuri t y', category: 'IT Services', icon: <ShieldclassName="w-5h-5ml-2" /> ,},

    // 5 G Services;
    { title: '5 G Implementati o n', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <ZapclassName="w-5h-5ml-2" /> ,},
    { title: '5 G Network Infrastructu r e', description: 'Build robust 5 G network infrastructu r e', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <ZapclassName="w-5h-5ml-2" /> ,},
    { title: '5 G IoT Solutions', description: 'Connect devices with 5 G IoT', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <ZapclassName="w-5h-5ml-2" /> ,},
    { title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <ZapclassName="w-5h-5ml-2" /> ,},

    // Micro SAAS;
    { title: 'AI Task Manager', description: 'Intellige n t task management system', path: '/ai-task-manager', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Password Manager', description: 'Secure password management with AI', path: '/ai-password-manager', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Health Tracker', description: 'Personal health monitoring with AI', path: '/ai-health-tracker', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},
    { title: 'AI Smart Calendar', description: 'Intellige n t calendar management', path: '/ai-smart-calendar', category: 'Micro SAAS', icon: <CpuclassName="w-5h-5ml-2" /> ,},

    // Company Pages;
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
  ];
  useEffect(() => {)
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {)
    if (query.length > 0) {
      setIsLoadi n g(true);
      // Simulate search delay;
      consttimer= setTimeout(() => {)
        const filteredResults= searchData.filter(item =>)
          item.title.toLowerCa s e().includes(query.toLowerCa s e()) ||;
          item.description.toLowerCa s e().includes(query.toLowerCa s e()) ||;
          item.category.toLowerCa s e().includes(query.toLowerCa s e())
        );
        setResults(filteredResul t s);
        setIsLoadi n g(false);
      }, 150);

      return () => clearTimeo u t(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown= (e: React.KeyboardEve n t) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Backdrop */}
        <div>>
          className="fixedinset-0bg-black/50backdrop-blur-smtransition-opacity"
          onClick="{onClose}";
         />
        {/* Modal */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          {/* Header */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <SearchclassName="w-5h-5ml-2" />
              <h3 className="text-lgfont-semiboldtext-white"  >Search Services</h3>
            </div>
            <button;
              onClick="{onClose}";
              className="text-gray-400hover:text-whitetransition-colorsp-1"
              aria-label="Close search" />
              <XclassName="w-5h-5ml-2" />
            </button>
          </div>

          {/* Search Input */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <input;
                ref="{inputRef}";
                type="text"
                value="{query}";
                onChange="{(e)" = /> setQuery(e.target.value)}
                onKeyDown="{handleKeyDo w n}";
                placeholder="Search for services, solutions, or pages...";
                className="w-fullpx-4py-3pl-12bg-slate-700borderborder-slate-600rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-cyan-500focus:border-transparent"
              />
              <SearchclassName="w-5h-5ml-2" />
            </div>

          {/* Results */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {isLoading ? ()
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                <span className="ml-3text-gray-400"  >Searching...</span>
              </div>
            ) : query.length === 0 ? (
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <SearchclassName="w-5h-5ml-2" />
                <p className="text-gray-400">Start typing to search for services</p>
              </div>
            ) : results.length === 0 ? (
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <p className="text-gray-400">No results found for "{query}"</p>
              </div>
            ) : (
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <p className="w-5h-5ml-2">{results.length} result{results.length !== 1 ? 's' : ''} found;
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {results.map((result, index) => ())
                    <Link;
                      key="{index}";
                      to="{result.path}";
                      onClick="{onClose}";
                      className="flexitems-centerp-4bg-slate-700/50hover:bg-slate-700rounded-lgtransition-colorsgroup" />
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{result.icon}>
                      </div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <h4 className="w-5h-5ml-2" />{result.title}
                        </h4>
                        <p className="w-5h-5ml-2">{result.description}
                        </p>
                        <span className="w-5h-5ml-2" />{result.category}
                        </span>
                      </div>
                      <ArrowRight className="w-5h-5ml-2" />
                    </Link>
                  ))}
                </div>
            )}
          </div>
      </div>
  </div>);
};

export default SearchMod a l;