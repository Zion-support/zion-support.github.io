<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SearchModal() {
  return (
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

import {X, ArrowRight} from 'lucide-react';
'use client';

interface SearchResult {title: string;,
=======
import React  from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight} from 'lucide-react';
interface SearchResult {
  title: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  description: string;,
  path: string;,
  category: string;,
  icon: React.ReactNode;}

interface SearchModalProps {isOpen: boolean;,
  onClose: () => void;}

const SearchModal: React.FC<SearchModalProps   /> = ({isOpen, onClose}) => {const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]   />([]);</SearchResult></SearchResult>
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const inputRef = useRef<HTMLInputElement   />(null);</HTMLInputElement></HTMLInputElement>
  // Mock search data - in a real app, this would come from an API;
  const searchData: SearchResult[] = [// AI Services;
    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: <Brain const className="w-4h-4"    />,</Brain></Brain>
    {title: 'AI Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI Voice Assistant', description: 'Voice-powered AI solutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3 d-generation', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    {title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <Brain className="w-5h-5ml-2"   />,</Brain></Brain>
    // IT Services;
    {title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'IT Services', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    {title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    {title: 'DevOps', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    {title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    {title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloud className="w-5h-5ml-2"   />,</Cloud></Cloud>
    {title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'IT Services', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    // 5 G Services;
    {title: '5 G Implementation', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <Zap className="w-5h-5ml-2"   />,</Zap></Zap>
    {title: '5 G Network Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <Zap className="w-5h-5ml-2"   />,</Zap></Zap>
    {title: '5 G IoT Solutions', description: 'Connect devices with 5 G IoT', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <Zap className="w-5h-5ml-2"   />,</Zap></Zap>
    {title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <Zap className="w-5h-5ml-2"   />,</Zap></Zap>
    // Micro SAAS;
    {title: 'AI Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    {title: 'AI Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    {title: 'AI Password Manager', description: 'Secure password management with AI', path: '/ai-password-manager', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    {title: 'AI Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    {title: 'AI Health Tracker', description: 'Personal health monitoring with AI', path: '/ai-health-tracker', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    {title: 'AI Smart Calendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'Micro SAAS', icon: <Cpu className="w-5h-5ml-2"   />,</Cpu></Cpu>
    // Company Pages;
    {title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>
    {title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <Shield className="w-5h-5ml-2"   />,</Shield></Shield>];
  useEffect(() => {if (isOpen && inputRef.current) {
      inputRef.current.focus();}
=======
  const inputRef = useRef<HTMLInputElement />(null);
  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // AI Services
    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Voice Assistant', description: 'Voice-powered AI solutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3 d-generation', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <Brain className="w-4 h-4" /> },

    // IT Services
    { title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'DevOps', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloud className="w-4 h-4" /> },
    { title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'IT Services', icon: <Shield className="w-4 h-4" /> },

    // 5 G Services
    { title: '5 G Implementation', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5 G Network Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5 G IoT Solutions', description: 'Connect devices with 5 G IoT', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <Zap className="w-4 h-4" /> },
    { title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <Zap className="w-4 h-4" /> },

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  }, [isOpen]);

  useEffect(() => {if (query.length > 0) {
      setIsLoading(true);
      // Simulate search delay;
      const timer = setTimeout(() => {
        const filteredResults = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setIsLoading(false);}, 150);

      return () => clearTimeout(timer);
    } else {setResults([]);}
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {if (e.key === 'Escape') {
      onClose();}
  };

  if (!isOpen) return null;

<<<<<<< HEAD
export default function SearchModal() {return (

=======
  return (
    <div className="fixed inset-0z-50overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center px-4 pt-16 pb-20 text-centersm:blocksm:p-0">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        {/* Backdrop */}
        <div;
          className="fixed inset-0 bg-black/50backdrop-blur-smtransition-opacity"
<<<<<<< HEAD
          onClick="{onClose}"
           /></div>
        {/* Modal */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
          onClick={onClose}
        / />
        {/* Modal */}
        <div className="relative inline-block w-full max-w-2 xl transform overflow-hidden rounded-2xll bg-slate-800 text-left align-bottom shadow-xl transition-allsm:my-8sm:align-middle">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          {/* Header */}
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Search className="w-5h-5ml-2"   /></Search>
              <h3 className="text-lgfont-semiboldtext-white"  >Search Services</h3>
            </div>
<<<<<<< HEAD
            <button;
              onClick="{onClose}"
              className="text-gray-400 hover:text-whitetransition-colorsp-1"
              aria-label="Close search"   /></button>
              <X className="w-5h-5ml-2"   /></X>
=======
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-whitetransition-colorsp-1"
              aria-label="Close search" />
              <X className="w-6h-6" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </button>
          </div>
          {/* Search Input */}
<<<<<<< HEAD
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <input;
=======
          <div className="p-6">
            <div className="relative">
              <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                ref="{inputRef}"
                type="text"
                value="{query}"
                onChange="{(e)" =   /> setQuery(e.target.value)}
                onKeyDown="{handleKeyDown}"
                placeholder="Search for services, solutions, or pages..."
                className="w-full px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              />
<<<<<<< HEAD
              <Search className="w-5h-5ml-2"   /></Search>
=======
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </div>
          {/* Results */}
<<<<<<< HEAD
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
          <div className="max-h-96overflow-y-auto">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            {isLoading ? (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <span className="ml-3text-gray-400"  >Searching...</span>
              </div>
  ) : query.length === 0 ? (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Search className="w-5h-5ml-2"   /></Search>
                <p className="text-gray-400">Start typing to search for services</p>
              </div>
  ) : results.length === 0 ? (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <p className="text-gray-400">No results found for "{query}"</p>
              </div>
  ) : (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <p className="w-5h-5ml-2">{results.length} result{results.length !== 1 ? 's' : ''} found;
                </p>
<<<<<<< HEAD
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
                <div className="space-y-2">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                  {results.map((result, index) => (
                    <Link;</Link></Link>
                      key="{index}"
                      to="{result.path}"
<<<<<<< HEAD
                      onClick="{onClose}"
                      className="flex items-center p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lgtransition-colorsgroup" /></Link>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{result.icon}
=======
                      onClick={onClose}
                      className="flex items-center p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lgtransition-colorsgroup" >
           
          <div className="flex-shrink-0 mr-4text-cyan-400group-hover:text-cyan-300"   />
        </Link>{result.icon}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                      </div>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                        <h4 className="w-5h-5ml-2"   />{result.title}
                        </h4>
<<<<<<< HEAD
                        <p className="w-5h-5ml-2">{result.description}
=======
                        <p className="text-smtext-gray-400mt-1">
              {result.description}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                        </p>
                        <span className="w-5h-5ml-2"   />{result.category}
                        </span>
                      </div>
                      <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
                    </Link>
<<<<<<< HEAD
  ))}
                </div>
  )}
          </div>
      </div>
  </div>
=======
                  ))}
                </div>
            )}
          </div>
      </div>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

export default SearchModal;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const SearchModal: React.FC<SearchModalProps> = () => {
  return (
    <div className="searchmodal">
      <h2>SearchModal</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default SearchModal;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
