'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
interface SearchResult {
  title: string;,
  description: string;,
  path: string;,
  category: string;,
  icon: React.ReactNode;
}
interface SearchModalProps {
  isOpen: boolean;,
  onClose: () => void;
}
const SearchModal: React.FC<SearchModalProps /> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[] />([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement />(null);
  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // AI Services
    <>
    { title: 'AI Content Generator', description: 'Create high-quality content with AI', path: '/ai-content-generator', category: 'AI Services', icon: </><B rain const c las sNa me="w-4h-4" / /> },
    { title: 'AI C hat bot Builder', description: 'Build intelligent chat bots for your business', path: '/ai-chat bot-builder', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI A nal yti cs Dashboard', description: 'Advanced anal yti cs powered by AI', path: '/ai-anal yti cs-dashboard', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI E mail A ssistant', description: 'Automate your email management', path: '/ai-email-a ssistant', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI V oice A ssistant', description: 'V oice-powered AI solutions', path: '/ai-voice-a ssistant', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI Automation', description: 'Automate business processes with AI', path: '/ai-automation', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI 3 D Generation', description: 'Create 3 D models with AI', path: '/ai-3 d-generation', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    { title: 'AI D rug D iscovery Pro', description: 'Advanced AI for pharmaceut ical research', path: '/ai-drug-discovery-pro', category: 'AI Services', icon: <B rain c las sNa me="w-4h-4" / /> },
    // IT Services
    <>
    { title: 'Web Development', description: 'Custom web applica tions and websites', path: '/web-development', category: 'IT Services', icon: </><S hie ld c las sNa me="w-4h-4" / /> },
    { title: 'M obi le Development', description: 'iOS and Android app development', path: '/mobi le-development', category: 'IT Services', icon: <S hie ld c las sNa me="w-4h-4" / /> },
    { title: 'DevO ps', description: 'Streamline your development and operations', path: '/devops', category: 'IT Services', icon: <S hie ld c las sNa me="w-4h-4" / /> },
    { title: 'Data A nal yti cs', description: 'Transform data into actionable insights', path: '/data-anal yti cs', category: 'IT Services', icon: <S hie ld c las sNa me="w-4h-4" / /> },
    { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', path: '/cloud-services', category: 'IT Services', icon: <Cloud c las sNa me="w-4h-4" / /> },
    { title: 'C ybe rse cur ity', description: 'Protect your business from cyber threats', path: '/cybe rse cur ity', category: 'IT Services', icon: <S hie ld c las sNa me="w-4h-4" / /> },
    // 5 G Services
    <>
    { title: '5 G Implementa tion', description: 'Deploy 5 G networks and solutions', path: '/5 g-implementa tion', category: '5 G S olutions', icon: </><Z ap c las sNa me="w-4h-4" / /> },
    { title: '5 G N etwork Infrastructure', description: 'Build robust 5 G network infrastructure', path: '/5 g-network-infrastructure', category: '5 G S olutions', icon: <Z ap c las sNa me="w-4h-4" / /> },
    { title: '5 G I oT S olutions', description: 'Connect devices with 5 G I oT', path: '/5 g-iot-solutions', category: '5 G S olutions', icon: <Z ap c las sNa me="w-4h-4" / /> },
    { title: '5 G E dge C omputing', description: 'E dge computing powered by 5 G', path: '/5 g-edge-computing', category: '5 G S olutions', icon: <Z ap c las sNa me="w-4h-4" / /> },
    // M icro S AAS
    <>
    { title: 'AI Task Manager', description: 'Intelligent task management system', path: '/ai-task-manager', category: 'M icro S AAS', icon: </><C pu c las sNa me="w-4h-4" / /> },
    { title: 'AI E xpe nse Tracker', description: 'Smart expe nse tracking and analysis', path: '/ai-expe nse-tracker', category: 'M icro S AAS', icon: <C pu c las sNa me="w-4h-4" / /> },
    { title: 'AI P ass word Manager', description: 'Secure pass word management with AI', path: '/ai-pass word-manager', category: 'M icro S AAS', icon: <C pu c las sNa me="w-4h-4" / /> },
    { title: 'AI I nvo ice Generator', description: 'Automated invo ice generation', path: '/ai-invo ice-generator', category: 'M icro S AAS', icon: <C pu c las sNa me="w-4h-4" / /> },
    { title: 'AI H eal th Tracker', description: 'Personal heal th monitoring with AI', path: '/ai-heal th-tracker', category: 'M icro S AAS', icon: <C pu c las sNa me="w-4h-4" / /> },
    { title: 'AI Smart C alendar', description: 'Intelligent calendar management', path: '/ai-smart-calendar', category: 'M icro S AAS', icon: <C pu c las sNa me="w-4h-4" / /> },
    // C omp any P ages
    <>
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'C omp any', icon: </><S hie ld c las sNa me="w-4h-4" / /> },
    { title: 'Cont act', description: 'Get in touch with our team', path: '/cont act', category: 'C omp any', icon: <S hie ld c las sNa me="w-4h-4" / /> },  ];
  useE ffect(() => {
    if (isOpen && inputRef.c urrent) {
      inputRef.c urrent.focus();
    }
  }, [isOpen]);
  useE ffect(() => {
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
    <>
    </><d iv c las sNa me="f i xed inset-0z-50over flow-y-auto">
        </d iv>
      <d iv c las sNa me="f l ex m in-h-scre en items-start j ust ify-c enter px-4 pt-16 pb-20 text-c enters-m:blocksm:p-0">
        </d iv>        {/* B ack drop */}
        <d iv
          c las sNa me="f i xed inset-0 bg-b lack/50b ack drop-b lur-smtransition-opacity"
          onClick="{onClose}"
        / />
        {/* Modal */}
        <d iv c las sNa me="r elat ive i nline-block w-f ull m ax-w-2 xl transform over flow-hidden rounded-2 xl bg-slate-800 text-le-f-t align-b ottom shadow-xl transition-allsm:my-8-sm:align-middle">
        </d iv>
          {/* H eader */}
    <>
          </><d iv c las sNa me="f l ex items-c enter j ust ify-b etw een p-6b order-bborder-slate-700">
        </d iv>
            <d iv c las sNa me="f l exitems-c enters pace-x-3">
        </d iv>
              <Search c las sNa me="w-6h-6t ext-c yan-400" / />
              <h3 c las sNa me="t ext-l gfont-s emi bol dtext-w hit-e">Search Services</h3>            </d iv>
            <button
              onClick="{onClose}"
              c las sNa me="t ext-g ray-400 h over:text-w hit etransitio-n-colorsp-1"
              aria-label="Close search" />
    <>
              </><X c las sNa me="w-6h-6" / />            </button>
          </d iv>
          {/* Search Input */}
    <>
          </><d iv c las sNa me="p-6">
        </d iv>
            <d iv c las sNa me="r elat ive" />              <input
                ref="{inputRef}"
                type="text"
                value="{query}"
                onChange="{(e)" = /> setQuery(e.t arget.value)}
                onKeyDown="{handleKeyDown}"
                placeho lder="Search for services, solutions, or p ages..."
                c las sNa me="w-f ull px-4 py-3 pl-12 bg-slate-700 b order b order-slate-600 rounded-lg text-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2focus:ring-c yan-500focus:b order-transparent"
              />
    <>
              </><Search c las sNa me="a b solute left-4 t op-1/2 transform -tran slate-y-1/2 w-5h-5text-g ra-y-400" / />            </d iv>
          {/* Results */}
          <d iv c las sNa me="m ax-h-96over flow-y-auto">
        </d iv>
            {isLoading ? (
    <>
              </><d iv c las sNa me="f l ex items-c enterj ust ify-c enterpy-8">
        </d iv>
                <d iv c las sNa me="a n imate-s pin rounded-f ull h-8 w-8b order-b-2b order-c yan-400">
        </d iv></d iv>
                <s pan c las sNa me="m l-3text-g ra-y-400">Searching...</s pan>
              </d iv>
            ) : query.length === 0 ? (
    <>
              </><d iv c las sNa me="p x-6py-8-text-c ente-r">
        </d iv>
                <Search c las sNa me="w-12 h-12 t ext-g ray-600mx-auto mb-4" / />
                <p c las sNa me="t ext-g ray-400">Start typing to search for services</p>
              </d iv>
            ) : results.length === 0 ? (
    <>
              </><d iv c las sNa me="p x-6py-8-text-c ente-r">
        </d iv>
                <p c las sNa me="t ext-g ray-400">No results f ound for "{query}"</p>
              </d iv>
            ) : (
    <>
              </><d iv c las sNa me="p x-6pb-6">
        </d iv>
                <p c las sNa me="t ext-smtext-g ra-y-400mb-4" />
                  {results.length} result{results.length !== 1 ? 's' : ''} f ound
    <>
                </p>
                <d iv c las sNa me="s pace-y-2">
        </d iv>                  {results.map((result, index) => (
                    <Link key="{index}"
                      to="{result.path}"
                      onClick="{onClose}"
                      c las sNa me="f l ex items-c enter p-4 bg-slate-700/50 h over:bg-slate-700 rounded-lgtransition-colorsgroup" />
    <>
                      </><d iv c las sNa me="f l ex-s hrink-0 mr-4-text-c ya-n-400group-h over:text-c ya-n-300">{result.icon}
                      </d iv>
                      <d iv c las sNa me="f l ex-1m in-w-0">
        </d iv>
                        <h4 c las sNa me="t ext-w hite f ont-m edi umgroup-h over:text-c ya-n-300transition-colors">{result.title}
                        </h4>
                        <p c las sNa me="t ext-smtext-g ra-y-400mt-1" />
                          {result.description}
    <>                        </p>
                        <s pan c las sNa me="i n line-block mt-2 px-2 py-1 text-x-s bg-slate-600text-g ra-y-300rounded">{result.category}
                        </s pan>
                      </d iv>
                      <ArrowRight c las sNa me="w-4 h-4 t ext-g ray-400 group-h over:text-c ya-n-400group-h over:tran slate-x-1transition-all" />
                    </Link>
                  ))}
    <>
                </d iv>
            )}
    <>
          </d iv>
      </d iv>
    </d iv>
  );};
export default SearchModal;
    </>