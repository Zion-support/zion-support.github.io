import React, { use State, use Effect } from 'react';
import { Link } from 'react-router-dom';
import { Chevron Down, Phone, Menu, X, Brain, Cloud, Code, Users, Zap, ArrowRight, Database, Settings, Target, Message Square, Eye, Cpu3, File Text, Search, Bot, Palette, Camera, Music, Video, Shopping Cart, Credit Card, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

  const [is Menu Open, set Is Menu Open] = use State(false);
  const [is Services Open, set Is Services Open] = use State(false);
  // Removed unused state variables
  const [is Scrolled, set Is Scrolled] = use State(false);

      set Is Scrolled(window.scroll Y > 50);
    };

    window.add Event Listener('scroll', handle Scroll);
    return () => window.remove Event Listener('scroll', handle Scroll);
  }, []);

    set Is Menu Open(false);
    set Is Services Open(false);
  };

    set Is Menu Open(!is Menu Open);
      close All Menus();
    }
  };

    set Is Services Open(!is Services Open);
  };

  ];

  ];

  ];

  // Removed specialized Services as it was unused

    }`}>
      <d iv class Name="c ontainer mx-auto px-4">
        <d iv class Name="f lex items-center justify-between h-16">
          {/* Logo */}
          <a h ref="/" class Name="f lex items-center space-x-2" on Click={close All Menus}>
            <d iv class Name="w-8 h-8 b g-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <B rain class Name="w-5 h-5 t ext-white" />
            </d iv>
            <s pan class Name="t ext-xl font-bold text-white neon-text">Zion Tech Group</s pan>
          </a>

          {/* Desktop Navigation */}
          <d iv class Name="h idden lg:flex items-center space-x-8">
            <d iv class Name="r elative group">
              
              >
                <s pan>Services</s pan>
                <C hevron Down class Name={`w-4 h-4 transition-transform ${is Services Open ? 'rotate-180' : ''}`} />
              </b utton>
              
                <d iv class Name="a bsolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <d iv class Name="g rid grid-cols-3 gap-6">
                    <d iv>
                      <h3 c lass Name="t ext-cyan-400 font-semibold mb-3 flex items-center">
                        <Z ap class Name="w-4 h-4 m r-2" />
                        Micro S AA S
                      </h3>
                      <d iv class Name="s pace-y-2">
                          
                          >
                            <s ervice.icon class Name="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h3 c lass Name="t ext-cyan-400 font-semibold mb-3 flex items-center">
                        <B rain class Name="w-4 h-4 m r-2" />
                        A I Services
                      </h3>
                      <d iv class Name="s pace-y-2">
                          
                          >
                            <s ervice.icon class Name="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h3 c lass Name="t ext-cyan-400 font-semibold mb-3 flex items-center">
                        <S ettings class Name="w-4 h-4 m r-2" />
                        I T Services
                      </h3>
                      <d iv class Name="s pace-y-2">
                          
                          >
                            <s ervice.icon class Name="w-3 h-3" />
                            <s pan>{service.name}</s pan>
                          </L ink>
                        ))}
                      </d iv>
                  </d iv>
                  <d iv class Name="m t-4 pt-4 border-t border-gray-700">
                    <d iv class Name="g rid grid-cols-2 gap-4">
                      
                      >
                        <s pan>View All Services</s pan>
                        <A rrow Right class Name="w-4 h-4" />
                      </L ink>
                      
                      >
                        <s pan>Specialized Solutions</s pan>
                        <A rrow Right class Name="w-4 h-4" />
                      </L ink>
                    </d iv>
                </d iv>
              )}
            </d iv>

            <a h ref="/about" class Name="t ext-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a h ref="/blog" class Name="t ext-white hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a h ref="/case-studies" class Name="t ext-white hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a h ref="/pricing" class Name="t ext-white hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a h ref="/contact" class Name="t ext-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            
            <d iv class Name="f lex items-center space-x-4">
              
              >
                <P hone class Name="w-4 h-4" />
                <s pan class Name="h idden sm:inline">+1 302 464 0950</s pan>
              </a>
              
              >
                Get Started
              </a>
            </d iv>

          {/* Mobile Menu Button */}
          
          >
            {is Menu Open ? <X c lass Name="w-6 h-6" /> : <M enu class Name="w-6 h-6" />}
          </b utton>
        </d iv>

        {/* Mobile Menu */}
          <d iv class Name="l g:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <d iv class Name="p x-4 py-6 space-y-4">
              <d iv>
                
                >
                  <s pan>Services</s pan>
                  <C hevron Down class Name={`w-4 h-4 transition-transform ${is Services Open ? 'rotate-180' : ''}`} />
                </b utton>
                
                  <d iv class Name="m t-4 pl-4 space-y-3">
                    <d iv>
                      <h4 c lass Name="t ext-cyan-400 font-semibold mb-2">Micro S AA S</h4>
                      <d iv class Name="s pace-y-2">
                          
                          >
                            {service.name}
                          </a>
                        ))}
                      </d iv>
                    <d iv>
                      <h4 c lass Name="t ext-cyan-400 font-semibold mb-2">A I Services</h4>
                      <d iv class Name="s pace-y-2">
                          
                          >
                            {service.name}
                          </a>
                        ))}
                      </d iv>
                    
                    >
                      View All Services →
                    </a>
                  </d iv>
                )}
              </d iv>

              <a h ref="/about" class Name="b lock text-white hover:text-cyan-400 transition-colors" on Click={close All Menus}>
                About
              </a>
              <a h ref="/blog" class Name="b lock text-white hover:text-cyan-400 transition-colors" on Click={close All Menus}>
                Blog
              </a>
              <a h ref="/case-studies" class Name="b lock text-white hover:text-cyan-400 transition-colors" on Click={close All Menus}>
                Case Studies
              </a>
              <a h ref="/pricing" class Name="b lock text-white hover:text-cyan-400 transition-colors" on Click={close All Menus}>
                Pricing
              </a>
              <a h ref="/contact" class Name="b lock text-white hover:text-cyan-400 transition-colors" on Click={close All Menus}>
                Contact
              </a>
              
              <d iv class Name="p t-4 border-t border-gray-700">
                
                >
                  <P hone class Name="w-4 h-4" />
                  <s pan>+1 302 464 0950</s pan>
                </a>
                
                >
                  Get Started
                </a>
              </d iv>
          </d iv>
        )}
      </d iv>
    </n av>
  );
};

export default Navigation;
