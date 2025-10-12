import React from 'react';
import {Link} from 'react-router-dom';
import {X, ArrowRight} from 'lucide-react';
'use client';

interface Search Result {
  title: string;,
  description: string;,
  path: string;,
  category: string;,
  icon: React.React Node;
}

interface Search Modal Props {
  isOpen: boolean;,
  onClose: () => void;
}

const Search Modal: React.FC<Search Modal Props /> = ({ isOpen, onClose }) => {
  const [query, set Query] = use State('');
  const [results, set Results] = use State<Search Result[] />([]);
  const [is Loading, set Is Loading] = use State(false);
  const inputRef = use Ref<HTMLInput Element/>(null);
  // Mock search data - in a real app, this would come from an API
  const searchData: Search Result[] = [
    // AI Services
    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: <Brain constclassName ="w-4h-4" / /> },
    { title: 'AI Chatbot Builder', description: 'Build intelligent chatbots for your business', path: '/ai-chatbot-builder', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI Analytics Dashboard', description: 'Advanced analytics powered by AI', path: '/ai-analytics-dashboard', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI Email Assistant', description: 'Automate your email management', path: '/ai-email-assistant', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI Voice Assistant', description: 'Voice-powered AI solutions', path: '/ai-voice-assistant', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3 d-generation', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },
    { title: 'AI Drug Discovery Pro', description: 'Advanced AI for pharmaceutical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <Brainclass Name ="w-4h-4" / /> },

    // IT Services
    { title: 'Web Development', description: 'Custom web applications and websites', path: '/web-development', category: 'IT Services', icon: <Shieldclass Name ="w-4h-4" / /> },
    { title: 'Mobile Development', description: 'iOS and Android app development', path: '/mobile-development', category: 'IT Services', icon: <Shieldclass Name ="w-4h-4" / /> },
    { title: 'Dev Ops', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <Shieldclass Name ="w-4h-4" / /> },
    { title: 'Data Analytics', description: 'Transform data into actionable insights', path: '/data-analytics', category: 'IT Services', icon: <Shieldclass Name ="w-4h-4" / /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloudclass Name ="w-4h-4" / /> },
    { title: 'Cybersecurity', description: 'Protect your business from cyber threats', path: '/cybersecurity', category: 'IT Services', icon: <Shieldclass Name ="w-4h-4" / /> },

    // 5 G Services
    { title: '5 G Implementation', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementation', category: '5 G Solutions', icon: <Zapclass Name ="w-4h-4" / /> },
    { title: '5 G Network Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G Solutions', icon: <Zapclass Name ="w-4h-4" / /> },
    { title: '5 G IoT Solutions', description: 'Connect devices with 5 G IoT', path: '/5 g-iot-solutions', category: '5 G Solutions', icon: <Zapclass Name ="w-4h-4" / /> },
    { title: '5 G Edge Computing', description: 'Edge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G Solutions', icon: <Zapclass Name ="w-4h-4" / /> },

    // Micro SAAS
    { title: 'AI Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },
    { title: 'AI Expense Tracker', description: 'Smart expense tracking and analysis', path: '/ai-expense-tracker', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },
    { title: 'AI Password Manager', description: 'Secure password management with AI', path: '/ai-password-manager', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },
    { title: 'AI Invoice Generator', description: 'Automated invoice generation', path: '/ai-invoice-generator', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },
    { title: 'AI Health Tracker', description: 'Personal health monitoring with AI', path: '/ai-health-tracker', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },
    { title: 'AI Smart Calendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'Micro SAAS', icon: <Cpuclass Name ="w-4h-4" / /> },

    // Company Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company', icon: <Shieldclass Name ="w-4h-4" / /> },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company', icon: <Shieldclass Name ="w-4h-4" / /> },
  ];
  use Effect(() => {
    if (isOpen && inputRef.current) {
      input Ref.current.focus();
    }
  }, [is Open]);

  use Effect(() => {
    if (query.length > 0) {
      set Is Loading(true);
      // Simulate search delay
      consttimer = set Timeout(() => {
        const filteredResults = search Data.filter(item =>
          item.title.toLower Case().includes(query.toLower Case()) ||
          item.description.to Lower Case().includes(query.toLower Case()) ||
          item.category.to Lower Case().includes(query.toLower Case())
        );
        set Results(filteredResults);
        set Is Loading(false);
      }, 150);

      return () => clear Timeout(timer);
    } else {
      set Results([]);
    }
  }, [query]);

  const handle KeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      on Close();
    }
  };

  if (!isOpen) return null;

  return (
    <div className ="fixedinset-0z-50overflow-y-auto" />
      <div className ="flexmin-h-screenitems-startjustify-centerpx-4 pt-16 pb-20 text-centersm:blocksm:p-0" />
        {/* Backdrop */}
        <div className ="fixedinset-0 bg-black/50backdrop-blur-smtransition-opacity"
          onClick ="{onClose}"
        / />
        {/* Modal */}
        <div className ="relativeinline-blockw-fullmax-w-2 xltransform overflow-hiddenrounded-2 xlbg-slate-800 text-leftalign-bottomshadow-xltransition-allsm:my-8sm:align-middle" />
          {/* Header */}
          <div className ="flexitems-centerjustify-betweenp-6border-bborder-slate-700" />
            <div className ="flexitems-centerspace-x-3" />
              <Searchclass Name ="w-6h-6text-cyan-400" / />
              <h3className ="text-lgfont-semiboldtext-white"  >SearchServices</h3>
            </div>
            <buttononClick ="{onClose}"
              className="text-gray-400 hover:text-whitetransition-colorsp-1"
              aria-label="Closesearch" />
              <Xclass Name ="w-6h-6" / />
            </button>
          </div>

          {/* SearchInput */}
          <div className ="p-6" />
            <div className ="relative" />
              <inputref ="{inputRef}"
                type="text"
                value="{query}"
                onChange ="{(e)" = /> set Query(e.target.value)}
                on KeyDown ="{handle Key Down}"
                placeholder="Search for services, solutions, or pages..."
                className="w-full px-4 py-3 pl-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              />
              <Searchclass Name ="absolute left-4 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
            </div>
          </div>

          {/* Results */}
          <div className ="max-h-96overflow-y-auto" />
            {is Loading ? (
              <div className ="flexitems-centerjustify-centerpy-8" />
                <div className ="animate-spinrounded-fullh-8 w-8border-b-2border-cyan-400" /></div>
                <spanclassName ="ml-3text-gray-400"  >Searching...</span>
              </div>
            ) : query.length === 0 ? (
              <div className ="px-6py-8text-center" />
                <Searchclass Name ="w-12 h-12 text-gray-600mx-automb-4" / />
                <pclassName ="text-gray-400">Starttyping tosearch forservices</p>
              </div>
            ) : results.length === 0 ? (
              <div className ="px-6py-8text-center" />
                <pclassName ="text-gray-400">Noresults foundfor "{query}"</p>
              </div>
            ) : (
              <div className ="px-6pb-6" />
                <pclassName ="text-smtext-gray-400mb-4" />
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </p>
                <div className ="space-y-2" />
                  {results.map((result, index) => (
                    <Linkkey ="{index}"
                      to="{result.path}"
                      onClick ="{onClose}"
                      className="flexitems-centerp-4 bg-slate-700/50 hover:bg-slate-700 rounded-lgtransition-colorsgroup" />
                      <div className ="flex-shrink-0 mr-4text-cyan-400group-hover:text-cyan-300"  />{result.icon}
                      </div>
                      <div className ="flex-1min-w-0" />
                        <h4className ="text-whitefont-mediumgroup-hover:text-cyan-300transition-colors"  />{result.title}
                        </h4>
                        <pclassName ="text-smtext-gray-400mt-1" />
                          {result.description}
                        </p>
                        <spanclassName ="inline-blockmt-2 px-2 py-1 text-xsbg-slate-600text-gray-300rounded"  />{result.category}
                        </span>
                      </div>
                      <Arrow Rightclass Name="w-4 h-4 text-gray-400 group-hover:text-cyan-400group-hover:translate-x-1transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Search Modal;