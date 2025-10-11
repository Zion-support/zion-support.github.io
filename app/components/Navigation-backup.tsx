'use client';
import React, {useState, useEffect}from 'react';
import {Link}}from 'react-router-dom';
import {ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package}}from 'lucide-react';

const Navigation: React.FC = () => {,
    const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
        setIsOpen(false)
  }
    }

    const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  };
;
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll)}}, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

<<<<<<< HEAD
  const closeAllMenus = () => {setServicesOpen(false);
=======
  const closeAllMenus = () => {;
    setServicesOpen(false);
>>>>>>> origin/main
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false)
  }

    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },;
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology' };
  ];
  const itServices = const itServices = const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },;
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' };
  ];
  const microSaasServices = const microSaasServices = const microSaasServices = [
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification' },;
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination' };
  ];
  const emergingTech = const emergingTech = const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },;
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' };
  ];
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
                    ))}
                  </div>
                </div>
              )}
            </div>

            </Link>
          </div>

          {/* Contact Info */}
            </a>
          </div>

          {/* Mobile Menu Button */}
            </button>
          </div>
        </div>

<<<<<<< HEAD
        {/* Mobile Navigation */}{isOpen && (
=======
        {/* Mobile Navigation */},
<<<<<<< HEAD
    {isOpen && ()
                    {aiServices.slice(0, 8).map((service) => ()
                    ))}
                    <Link to="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus} /></Link>
=======
    {isOpen && (
>>>>>>> origin/main

          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            </div></div><div className="pt-4 space-y-4">
              </div></div><Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick=closeAllMenus}>

                Home;
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                </div></div><button;
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Brain className="w-4 h-4" />
                    <span>AI Services</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    aiServices.slice(0, 8).map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name})
                      </Link>)
                    ))}
                    <Link;
                      to="/ai-services" className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
