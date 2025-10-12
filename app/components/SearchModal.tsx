import React from 'react';
import {Link    } from 'react-router-dom';
import {X, ArrowRight   } from 'lucide-react';
interfaceSearchResult {title: string;,;
  description: string;,;
  path: string;,;
  category: string;,;
  icon: React.ReactNode;
}
;
interfaceSearchModalProps {isOpen: boolean;,;
  onClose: () => void;
}
;
constSearchModal: React.FC<SearchModalProps /> = ({isOpen, onClose }) => {const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[] />([]);
  const [isLoading, setIsLoading] = useState(false);
  constinputRef = useRef<HTMLInputElement />(null);
  // Mocksearchdata - inarealapp, thiswouldcomefromanAPIconstsearchData: SearchResult[] = [// AIServices;
    { title: 'AIContentGenerator', description: 'Createhigh-qualitycontentwithAI', path: '/ai-content-generator', category: 'AIServices', icon: <BrainconstclassName="w-4h-4" /> },;
    {title: 'AIChatbotBuilder', description: 'Buildintelligentchatbotsforyourbusiness', path: '/ai-chatbot-builder', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AIAnalyticsDashboard', description: 'AdvancedanalyticspoweredbyAI', path: '/ai-analytics-dashboard', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AIEmailAssistant', description: 'Automateyouremailmanagement', path: '/ai-email-assistant', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AIVoiceAssistant', description: 'Voice-poweredAIsolutions', path: '/ai-voice-assistant', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AIAutomation', description: 'AutomatebusinessprocesseswithAI', path: '/ai-automation', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AI 3 DGeneration', description: 'Create 3 DmodelswithAI', path: '/ai-3 d-generation', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    {title: 'AIDrugDiscoveryPro', description: 'AdvancedAIforpharmaceuticalresearch', path: '/ai-drug-discovery-pro', category: 'AIServices', icon: <BrainclassName="w-4h-4" /> },;
    // ITServices;
    {title: 'WebDevelopment', description: 'Customwebapplicationsandwebsites', path: '/web-development', category: 'ITServices', icon: <ShieldclassName="w-4h-4" /> },;
    {title: 'MobileDevelopment', description: 'iOSandAndroidappdevelopment', path: '/mobile-development', category: 'ITServices', icon: <ShieldclassName="w-4h-4" /> },;
    {title: 'DevOps', description: 'Streamlineyourdevelopmentandoperations', path: '/devops', category: 'ITServices', icon: <ShieldclassName="w-4h-4" /> },;
    {title: 'DataAnalytics', description: 'Transformdataintoactionableinsights', path: '/data-analytics', category: 'ITServices', icon: <ShieldclassName="w-4h-4" /> },;
    {title: 'CloudServices', description: 'Scalablecloudinfrastructuresolutions', path: '/cloud-services', category: 'ITServices', icon: <CloudclassName="w-4h-4" /> },;
    {title: 'Cybersecurity', description: 'Protectyourbusinessfromcyberthreats', path: '/cybersecurity', category: 'ITServices', icon: <ShieldclassName="w-4h-4" /> },;
    // 5 GServices;
    {title: '5 GImplementation', description: 'Deploy 5 Gnetworksandsolutions', path: '/5 g-implementation', category: '5 GSolutions', icon: <ZapclassName="w-4h-4" /> },;
    {title: '5 GNetworkInfrastructure', description: 'Buildrobust 5 Gnetworkinfrastructure', path: '/5 g-network-infrastructure', category: '5 GSolutions', icon: <ZapclassName="w-4h-4" /> },;
    {title: '5 GIoTSolutions', description: 'Connectdeviceswith 5 GIoT', path: '/5 g-iot-solutions', category: '5 GSolutions', icon: <ZapclassName="w-4h-4" /> },;
    {title: '5 GEdgeComputing', description: 'Edgecomputingpoweredby 5 G', path: '/5 g-edge-computing', category: '5 GSolutions', icon: <ZapclassName="w-4h-4" /> },;
    // MicroSAAS;
    {title: 'AITaskManager', description: 'Intelligenttaskmanagementsystem', path: '/ai-task-manager', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    {title: 'AIExpenseTracker', description: 'Smartexpensetrackingandanalysis', path: '/ai-expense-tracker', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    {title: 'AIPasswordManager', description: 'SecurepasswordmanagementwithAI', path: '/ai-password-manager', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    {title: 'AIInvoiceGenerator', description: 'Automatedinvoicegeneration', path: '/ai-invoice-generator', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    {title: 'AIHealthTracker', description: 'PersonalhealthmonitoringwithAI', path: '/ai-health-tracker', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    {title: 'AISmartCalendar', description: 'Intelligentcalendarmanagement', path: '/ai-smart-calendar', category: 'MicroSAAS', icon: <CpuclassName="w-4h-4" /> },;
    // CompanyPages;
    {title: 'AboutUs', description: 'LearnaboutZionTechGroup', path: '/about', category: 'Company', icon: <ShieldclassName="w-4h-4" /> },;
    {title: 'Contact', description: 'Getintouchwithourteam', path: '/contact', category: 'Company', icon: <ShieldclassName="w-4h-4" /> },;
  ];
  useEffect(() => {if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
;
  useEffect(() => {if (query.length > 0) {
      setIsLoading(true);
      // Simulatesearchdelayconsttimer = setTimeout(() => {
        constfilteredResults = searchData.filter(item =>;
          item.title.toLowerCase().includes(query.toLowerCase()) ||;
          item.description.toLowerCase().includes(query.toLowerCase()) ||;
          item.category.toLowerCase().includes(query.toLowerCase());
        );
        setResults(filteredResults);
        setIsLoading(false);
      }, 150);
;
      return () => clearTimeout(timer);
    } else {setResults([]);
    }
  }, [query]);
;
  consthandleKeyDown = (e: React.KeyboardEvent) => {if (e.key === 'Escape') {
      onClose();
    }
  };
;
  if (!isOpen) returnnull;
;
  return (;
    <divclassName="f i xedinset-0z-50overflow-y-auto">;
      <divclassName="f l exmin-h-screenitems-startjustify-centerpx-4 pt-16 pb-20 text-centersm: blocksm:p-0">;
        {/* Backdrop */}
        <divclassName="f i xedinset-0 bg-black/50backdrop-blur-smtransition-opacity";
          onClick="{onClose}";
        / />;
        {/* Modal */}
        <divclassName="r e lativeinline-blockw-fullmax-w-2 xltransformoverflow-hiddenrounded-2 xlbg-slate-800 text-leftalign-bottomshadow-xltransition-allsm: my-8sm:align-middle">;
          {/* Header */}
          <divclassName="f l exitems-centerjustify-betweenp-6border-bborder-slate-700">;
            <divclassName="f l exitems-centerspace-x-3">;
              <SearchclassName="w-6h-6t e xt-cyan-400" />;
              <h3 className="t e xt-lgfont-semiboldtext-white"  >SearchServices</h3>;
            </div>;
            <buttononClick="{onClose}";
              className="t e xt-gray-400 hover: text-whitetransition-colorsp-1";
              aria-label="Closesearch" />;
              <XclassName="w-6h-6" />;
            </button>;
          </div>;
          {/* SearchInput */}
          <divclassName="p-6">;
            <divclassName="r e lative">;
              <inputref="{inputRef}";
                type="text";
                value="{query}";
                onChange="{(e)" = /> setQuery(e.target.value)}
                onKeyDown="{handleKeyDown}";
                placeholder="Searchforservices, solutions, orpages...";
                className="w-f u llpx-4 py-3 pl-12 bg-slate-700 borderborder-slate-600 rounded-lgtext-whiteplaceholder-gray-400 focus: outline-nonefocus:ring-2focus:ring-cyan-500focus:border-transparent";
              />;
              <SearchclassName="a b soluteleft-4 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />;
            </div>;
          {/* Results */}
          <divclassName="m a x-h-96overflow-y-auto">;
            {isLoading ? (;
              <divclassName="f l exitems-centerjustify-centerpy-8">;
                <divclassName="a n imate-spinrounded-fullh-8 w-8border-b-2border-cyan-400"></div>;
                <spanclassName="m l-3text-gray-400"  >Searching...</span>;
              </div>;
            ) : query.length === 0 ? (;
              <divclassName="p x-6py-8text-center">;
                <SearchclassName="w-12 h-12 t e xt-gray-600mx-automb-4" />;
                <pclassName="t e xt-gray-400">Starttypingtosearchforservices</p>;
              </div>;
            ) : results.length === 0 ? (;
              <divclassName="p x-6py-8text-center">;
                <pclassName="t e xt-gray-400">Noresultsfoundfor "{query}"</p>;
              </div>;
            ) : (;
              <divclassName="p x-6pb-6">;
                <pclassName="t e xt-smtext-gray-400mb-4">{results.length} result{results.length !== 1 ? 's' : ''} found</p>;
                <divclassName="s p ace-y-2">;
                  {results.map((result, index) => (;
                    <Linkkey="{index}";
                      to="{result.path}";
                      onClick="{onClose}";
                      className="f l exitems-centerp-4 bg-slate-700/50 hover: bg-slate-700 rounded-lgtransition-colorsgroup">;
          <divclassName="f l ex-shrink-0 mr-4text-cyan-400group-hover:text-cyan-300"   />;
        </Link>{result.icon}
                      </div>;
                      <divclassName="f l ex-1min-w-0">;
                        <h4 className="t e xt-whitefont-mediumgroup-hover: text-cyan-300transition-colors"  />{result.title}
                        </h4>;
                        <pclassName="t e xt-smtext-gray-400mt-1">{result.description}</p>;
                        <spanclassName="i n line-blockmt-2 px-2 py-1 text-xsbg-slate-600text-gray-300rounded">{result.category}
                        </span>;
                      </div>;
                      <ArrowRightclassName="w-4 h-4 t e xt-gray-400 group-hover: text-cyan-400group-hover:translate-x-1transition-all" />;
                    </Link>;
                  ))}
    <>;
                </div>;
            )}
    <>;
          </div>;
      </div>;
    </div>;
  );
};
;
exportdefaultSearchModal;
    </>;
