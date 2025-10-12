import {useState, useEffect   } from 'react';
import {Link   } from 'react-router-dom';
import {Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi   } from 'lucide-react';
;
constNavigation: React.FC = () => {const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
;
  // HandlescrolleffectuseEffect(() => {
    consthandleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
  consttoggleMenu = () => {setIsOpen(!isOpen);
  };
;
  consttoggleServices = () => {setServicesOpen(!servicesOpen);
  };
;
  constaiServices = [{name: 'AIAnalytics & BI', url: '/ai-analytics', icon: <BrainclassName="w-4 h-4" /> },;
    {name: 'AIAutomation', url: '/ai-automation', icon: <ZapclassName="w-4 h-4" /> },;
    {name: 'AIChatbots', url: '/ai-chatbot-builder', icon: <GlobeclassName="w-4 h-4" /> },;
    {name: 'AIContentGeneration', url: '/ai-content-generator', icon: <CodeclassName="w-4 h-4" /> },;
    {name: 'AICybersecurity', url: '/ai-cybersecurity', icon: <WificlassName="w-4 h-4" /> },;
    {name: 'AIVoiceAssistant', url: '/ai-voice-assistant', icon: <SmartphoneclassName="w-4 h-4" /> }
  ];
;
  constitServices = [{name: 'CloudMigration', url: '/cloud-migration', icon: <CloudclassName="w-4 h-4" /> },;
    {name: 'DevOps & CI/CD', url: '/devops', icon: <CodeclassName="w-4 h-4" /> },;
    {name: 'Cybersecurity', url: '/cybersecurity', icon: <WificlassName="w-4 h-4" /> },;
    {name: 'DatabaseManagement', url: '/database', icon: <GlobeclassName="w-4 h-4" /> },;
    {name: 'APIDevelopment', url: '/api', icon: <CodeclassName="w-4 h-4" /> },;
    {name: 'MobileDevelopment', url: '/mobile-development', icon: <SmartphoneclassName="w-4 h-4" /> }
  ];
;
  return (;
    <navclassName={`fixedtop-0 left-0 right-0 z-50 transition-allduration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-mdshadow-lg' : 'bg-transparent';
    }`}>;
      <divclassName="m a x-w-7xlmx-autopx-4 sm: px-6 lg:px-8">;
        <divclassName="f l exitems-centerjustify-betweenh-16">;
          {/* Logo */}
          <Linkto="/" className="f l exitems-centergap-2">;
            <divclassName="w-8 h-8 b g-gradient-to-rfrom-blue-500 to-purple-500 rounded-lgflexitems-centerjustify-center">;
              <BrainclassName="w-5 h-5 t e xt-white" />;
            </div>;
            <spanclassName="t e xt-xlfont-boldtext-white">ZionTechGroup</span>;
          </Link>;
          {/* DesktopNavigation */}
          <divclassName="h i ddenmd: flexitems-centerspace-x-8">;
            <Linkto="/";
              className="t e xt-gray-300 hover:text-whitetransition-colorsduration-300">;
              Home;
            </Link>;
            <Linkto="/about";
              className="t e xt-gray-300 hover:text-whitetransition-colorsduration-300">;
              About;
            </Link>;
            {/* ServicesDropdown */}
            <divclassName="r e lative">;
              <buttononClick={toggleServices}
                className="f l exitems-centergap-1 text-gray-300 hover: text-whitetransition-colorsduration-300">;
                Services;
                <ChevronDownclassName={`w-4 h-4 transition-transformduration-300 ${servicesOpen ? 'rotate-180' : ''}`} />;
              </button>;
              {servicesOpen && (;
                <divclassName="a b solutetop-fullleft-0 mt-2 w-96 bg-whiterounded-lgshadow-xlborderborder-gray-200 py-4 z-50">;
                  <divclassName="p x-6 py-2">;
                    <h3 className="t e xt-smfont-semiboldtext-gray-900 mb-3 flexitems-centergap-2">;
                      <BrainclassName="w-4 h-4 t e xt-blue-500" />;
                      AIServices;
                    </h3>;
                    <divclassName="g r idgrid-cols-1 gap-2 mb-4">;
                      {aiServices.map((service, index) => (;
                        <Linkkey={index}
                          to={service.url}
                          className="f l exitems-centergap-3 px-3 py-2 text-smtext-gray-700 hover: bg-gray-100 rounded-lgtransition-colorsduration-200";
                          onClick={() => setServicesOpen(false)}
                        >;
                          {service.icon}
                          {service.name}
                        </Link>;
                      ))}
                    </div>;
                    <h3 className="t e xt-smfont-semiboldtext-gray-900 mb-3 flexitems-centergap-2">;
                      <CloudclassName="w-4 h-4 t e xt-green-500" />;
                      ITServices;
                    </h3>;
                    <divclassName="g r idgrid-cols-1 gap-2">;
                      {itServices.map((service, index) => (;
                        <Linkkey={index}
                          to={service.url}
                          className="f l exitems-centergap-3 px-3 py-2 text-smtext-gray-700 hover: bg-gray-100 rounded-lgtransition-colorsduration-200";
                          onClick={() => setServicesOpen(false)}
                        >;
                          {service.icon}
                          {service.name}
                        </Link>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              )}
            </div>;
            <Linkto="/contact";
              className="t e xt-gray-300 hover: text-whitetransition-colorsduration-300">;
              Contact;
            </Link>;
            <Linkto="/news";
              className="t e xt-gray-300 hover:text-whitetransition-colorsduration-300">;
              News;
            </Link>;
          </div>;
          {/* CTAButton */}
          <divclassName="h i ddenmd: flexitems-centergap-4">;
            <Linkto="/contact";
              className="b g-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-6 py-2 rounded-lgfont-mediumhover:from-blue-700 hover:to-purple-700 transition-allduration-300">;
              GetStarted;
            </Link>;
          </div>;
          {/* Mobilemenubutton */}
          <divclassName="m d: hidden">;
            <buttononClick={toggleMenu}
              className="t e xt-gray-300 hover: text-whitetransition-colorsduration-300">;
              {isOpen ? <XclassName="w-6 h-6" /> : <MenuclassName="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
        {/* MobileNavigation */}
        {isOpen && (;
          <divclassName="m d: hiddenbg-gray-900/95 backdrop-blur-mdborder-tborder-gray-800">;
            <divclassName="p x-2 pt-2 pb-3 space-y-1">;
              <Linkto="/";
                className="b l ockpx-3 py-2 text-gray-300 hover:text-whitetransition-colorsduration-300";
                onClick={() => setIsOpen(false)}
              >;
                Home;
              </Link>;
              <Linkto="/about";
                className="b l ockpx-3 py-2 text-gray-300 hover: text-whitetransition-colorsduration-300";
                onClick={() => setIsOpen(false)}
              >;
                About;
              </Link>;
              {/* MobileServices */}
              <divclassName="p x-3 py-2">;
                <divclassName="t e xt-gray-300 font-mediummb-2">AIServices</div>;
                <divclassName="m l-4 space-y-1">;
                  {aiServices.map((service, index) => (;
                    <Linkkey={index}
                      to={service.url}
                      className="b l ockpx-3 py-1 text-smtext-gray-400 hover: text-whitetransition-colorsduration-300";
                      onClick={() => setIsOpen(false)}
                    >;
                      {service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              <divclassName="p x-3 py-2">;
                <divclassName="t e xt-gray-300 font-mediummb-2">ITServices</div>;
                <divclassName="m l-4 space-y-1">;
                  {itServices.map((service, index) => (;
                    <Linkkey={index}
                      to={service.url}
                      className="b l ockpx-3 py-1 text-smtext-gray-400 hover: text-whitetransition-colorsduration-300";
                      onClick={() => setIsOpen(false)}
                    >;
                      {service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              <Linkto="/contact";
                className="b l ockpx-3 py-2 text-gray-300 hover: text-whitetransition-colorsduration-300";
                onClick={() => setIsOpen(false)}
              >;
                Contact;
              </Link>;
              <Linkto="/news";
                className="b l ockpx-3 py-2 text-gray-300 hover: text-whitetransition-colorsduration-300";
                onClick={() => setIsOpen(false)}
              >;
                News;
              </Link>;
              <divclassName="p x-3 py-2">;
                <Linkto="/contact";
                  className="b l ockw-fullbg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4 py-2 rounded-lgfont-mediumtext-centerhover: from-blue-700 hover:to-purple-700 transition-allduration-300";
                  onClick={() => setIsOpen(false)}
                >;
                  GetStarted;
                </Link>;
              </div>;
            </div>;
          </div>;
        )}
      </div>;
    </nav>;
  );
};
;
exportdefaultNavigation;
;
