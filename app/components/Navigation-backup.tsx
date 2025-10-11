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
    const handleResize = const handleResize = const handleResize = () => {
      if (window.innerWidth >= 1024) {

    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false)
  }

  // Service data
  const aiServices = const aiServices = const aiServices = [


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
              <div></div>
                <button onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                  <span className="flex items-center space-x-2" /></span>
                    <Cloud className="w-4 h-4" / /></Cloud>
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {itServicesOpen && ()
                    {itServices.map((service) => ()
              <div>
                </div></div><button;
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Cloud className="w-4 h-4" />
                    <span>IT Services</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    itServices.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name})
                      </Link>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div></div>
                <button onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                  <span className="flex items-center space-x-2" /></span>
                    <Cpu className="w-4 h-4" / /></Cpu>
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {microSaasOpen && ()
                    {microSaasServices.slice(0, 8).map((service) => ()
                    ))}
                    <Link to="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus} /></Link>
              <div>
                </div></div><button;
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    microSaasServices.slice(0, 8).map((service) => (
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
                      to="/micro-saas" className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

          <div className="lg:hidden" /></div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2" /></div>
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Home
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                IT Services
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Micro SaaS
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                About
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Case Studies
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Blog
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2" /></div>
                <a href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
                  <Phone className="w-4 h-4" / /></Phone>
                  <span>(302) 464-0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
                  <Mail className="w-4 h-4" / /></Mail>
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400" /></div>
                  <MapPin className="w-4 h-4" / /></MapPin>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>

          <div className="lg:hidden" /></div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10" /></div>
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Home
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                IT Services
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Micro SaaS
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                About
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-3 mt-3" /></div>
                <a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium" /></a>
                  <Phone className="w-4 h-4 mr-2" / /></Phone>
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium" /></a>
                  <Mail className="w-4 h-4 mr-2" / /></Mail>
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center text-gray-400 px-3 py-2 text-sm" /></div>
                  <MapPin className="w-4 h-4 mr-2" / /></MapPin>
                  364 E Main St STE 1008<br / /></br>
                  Middletown DE 19709

          <div className="lg:hidden">
            </div></div><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              </div></div><Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About;
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies;
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog;
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing;
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">

              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About;
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services;
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing;
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog;
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>

                Contact;
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                </div></div><a;
                  href="tel:+13024640950" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span></span></span>
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span></span></span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  </div></div><MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span></span></span>

          <div className="lg:hidden">
            </div></div><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              </div></div><Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About;
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog;
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact;
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-3 mt-3">
                </div></div><a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950;
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com;
                </a>
                <div className="flex items-center text-gray-400 px-3 py-2 text-sm">
                  </div></div><MapPin className="w-4 h-4 mr-2" />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
