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
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false)
  }


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
