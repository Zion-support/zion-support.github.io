import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Code, Users, Zap, ArrowRight, Database, Settings, Target, MessageSquare, Eye, Cpu3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone  } from 'lucide-react';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables
  const [isScrolled, setIsScrolled] = useState(false);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
    }
  };
    setIsServicesOpen(!isServicesOpen);
  };
  ];
  ];
  ];
  // Removed specializedServices as it w as unused
    }`}>
      <d iv c las sName="c o ntainer mx-a uto px-4">
        <d iv c las sName="f l ex i tems-c enter j ust ify-b etw een h-16">
          {/* L ogo */}
          <a h ref="/" c las sName="f l ex i tems-c enter s pace-x-2" o nCl ick={closeAllMenus}>
            <d iv c las sName="w-8 h-8 b g-g rad ient-to-br from-c yan-400 to-purple-600 rounded-lg flex i tems-c enter j ust ify-c enter">
              <Brain c las sName="w-5 h-5 t ext-w hite" />
            </d iv>
            <s pan c las sName="t ext-xl f ont-b old t ext-w hit-e n eon-t ext">Zion Tech Group</s pan>
          </a>
          {/* D esk top N avi gat ion */}
          <d iv c las sName="h i dden lg:flex i tems-c enter s pace-x-8">
            <d iv c las sName="r e lat ive g roup">
              >
                <s pan>Services</s pan>
                <ChevronDown c las sName={`w-4 h-4 t ran sit ion-t ran sfo rm ${isServicesOpen ? 'rotate-180' : ''}`} />
              </butt on>
                <d iv c las sName="a b sol ute t op-f ull l eft-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-c yan-400/20 rounded-lg s hadow-xl p-6">
                  <d iv c las sName="g r id g rid-c ols-3 g ap-6">
                    <d iv>
                      <h3 c las sName="t ext-c yan-400 f ont-s emi bold mb-3 flex i tems-c enter">
                        <Zap c las sName="w-4 h-4 m r-2" />
                        Micro SAAS
                      </h3>
                      <d iv c las sName="s p ace-y-2">
                          >
                            <service.i con c las sName="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h3 c las sName="t ext-c yan-400 f ont-s emi bold mb-3 flex i tems-c enter">
                        <Brain c las sName="w-4 h-4 m r-2" />
                        AI Services
                      </h3>
                      <d iv c las sName="s p ace-y-2">
                          >
                            <service.i con c las sName="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h3 c las sName="t ext-c yan-400 f ont-s emi bold mb-3 flex i tems-c enter">
                        <Settings c las sName="w-4 h-4 m r-2" />
                        IT Services
                      </h3>
                      <d iv c las sName="s p ace-y-2">
                          >
                            <service.i con c las sName="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </Link>
                        ))}
                      </d iv>
                  </d iv>
                  <d iv c las sName="m t-4 pt-4 border-t border-g ray-700">
                    <d iv c las sName="g r id g rid-c ols-2 g ap-4">
                      >
                        <s pan>View All Services</s pan>
                        <ArrowRight c las sName="w-4 h-4" />
                      </Link>
                      >
                        <s pan>Specialized Solutions</s pan>
                        <ArrowRight c las sName="w-4 h-4" />
                      </Link>
                    </d iv>
                </d iv>
              )}
            </d iv>
            <a h ref="/a bout" c las sName="t ext-w hite h over:t ext-c ya-n-400 t ran sit ion-c olors">
              About
            </a>
            <a h ref="/b log" c las sName="t ext-w hite h over:t ext-c ya-n-400 t ran sit ion-c olors">
              Blog
            </a>
            <a h ref="/case-s tud ies" c las sName="t ext-w hite h over:t ext-c ya-n-400 t ran sit ion-c olors">
              Case Stud ies
            </a>
            <a h ref="/p ric ing" c las sName="t ext-w hite h over:t ext-c ya-n-400 t ran sit ion-c olors">
              Pric ing
            </a>
            <a h ref="/cont act" c las sName="t ext-w hite h over:t ext-c ya-n-400 t ran sit ion-c olors">
              Cont act
            </a>
            <d iv c las sName="f l ex i tems-c enter s pace-x-4">
              >
                <Phone c las sName="w-4 h-4" />
                <s pan c las sName="h i dden sm:i nli ne">+1 302 464 0950</s pan>
              </a>
              >
                Get Started
              </a>
            </d iv>
          {/* Mobile Menu Butt on */}
          >
            {isMenuOpen ? <X c las sName="w-6 h-6" /> : <Menu c las sName="w-6 h-6" />}
          </butt on>
        </d iv>
        {/* Mobile Menu */}
          <d iv c las sName="l g:h idd en bg-slate-900/95 backdrop-blur-md border-t border-c yan-400/20">
            <d iv c las sName="p x-4 py-6 s pace-y-4">
              <d iv>
                >
                  <s pan>Services</s pan>
                  <ChevronDown c las sName={`w-4 h-4 t ran sit ion-t ran sfo rm ${isServicesOpen ? 'rotate-180' : ''}`} />
                </butt on>
                  <d iv c las sName="m t-4 pl-4 s pace-y-3">
                    <d iv>
                      <h4 c las sName="t ext-c yan-400 f ont-s emi bold mb-2">Micro SAAS</h4>
                      <d iv c las sName="s p ace-y-2">
                          >
                            {service.name}
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h4 c las sName="t ext-c yan-400 f ont-s emi bold mb-2">AI Services</h4>
                      <d iv c las sName="s p ace-y-2">
                          >
                            {service.name}
                          </a>
                        ))}
                      </d iv>
                    >
                      View All Services ->
                    </a>
                  </d iv>
                )}
              </d iv>
              <a h ref="/a bout" c las sName="b l ock t ext-w hit-e h over:t ext-c ya-n-400 t ran sit ion-c olors" o nCl ick={closeAllMenus}>
                About
              </a>
              <a h ref="/b log" c las sName="b l ock t ext-w hit-e h over:t ext-c ya-n-400 t ran sit ion-c olors" o nCl ick={closeAllMenus}>
                Blog
              </a>
              <a h ref="/case-s tud ies" c las sName="b l ock t ext-w hit-e h over:t ext-c ya-n-400 t ran sit ion-c olors" o nCl ick={closeAllMenus}>
                Case Stud ies
              </a>
              <a h ref="/p ric ing" c las sName="b l ock t ext-w hit-e h over:t ext-c ya-n-400 t ran sit ion-c olors" o nCl ick={closeAllMenus}>
                Pric ing
              </a>
              <a h ref="/cont act" c las sName="b l ock t ext-w hit-e h over:t ext-c ya-n-400 t ran sit ion-c olors" o nCl ick={closeAllMenus}>
                Cont act
              </a>
              <d iv c las sName="p t-4 border-t border-g ray-700">
                >
                  <Phone c las sName="w-4 h-4" />
                  <s pan>+1 302 464 0950</s pan>
                </a>
                >
                  Get Started
                </a>
              </d iv>
          </d iv>
        )}
      </d iv>
    </nav>
  );
};
export default N avi gat ion;
