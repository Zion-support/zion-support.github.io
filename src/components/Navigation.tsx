import React;, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown;, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
;
const Navigation: React.FC = () => {
  ;
const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
;
setIsScrolled(window.scrollY > 50);
}

    };
;
window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {;;
window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
}

    };
  }, []);
;
const closeAllMenus = () => {;;
setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
}

  };

  ];

              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">;
About
            </Link>

              </button>
              
                            <Link />
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Contact Info */}

          <div>
            <Link />
            <Link;
to="/blog";
className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium";
onClick={closeAllMenus}

            >;
Blog
            </Link>

            <Link;
to="/contact";
className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium";
onClick={closeAllMenus}

            >;
Contact
            </Link>

            {/* CTA Button */}

            <a;
href="tel:+13024640950";
className="cyber-button inline-flex items-center";
onClick={closeAllMenus}

            >
              <Phone />
              (302) 464-0950
            </a>
          </div>

            </button>
          </div>
        </div>

              <Link />
              <Link;
to="/about";
className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md";
onClick={closeAllMenus}

              >;
About
              </Link>

              {/* Mobile Services */}

              <div>
                <button
                          <Link />
  </button>
                  </div>
                </div>
              </div>

              <div>
                <a;
href="tel:+13024640950";
className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all";
onClick={closeAllMenus}

                >
                  <Phone />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
;
export default Navigation;
