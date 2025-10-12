import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight } from 'lucide-react';

  ];

  ];

  ];

  // Removed specializedServices as it was unused

  ];

  ];

  ];

  ];

    <footer className="b g-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="containe r mx-auto px-4 py-12">
        <div className="gri d grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="l g:col-span-1">
            <div className="fle x items-center space-x-2 mb-4">
              <div className="w-8 h-8 b g-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 tex t-white" />
              </div>
              <span className="tex t-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="tex t-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="spac e-y-3">
              <div className="fle x items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 tex t-cyan-400" />
                <a href="tel:+13024640950" className="hove r:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="fle x items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 tex t-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hove r:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="fle x items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 tex t-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="tex t-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 m r-2" />
              Micro SAAS
            </h3>
            <ul className="spac e-y-2">
                <li key={service.name}>
                  
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            
            >
              View All Micro SAAS →
            </a>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="tex t-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 m r-2" />
              AI & IT Services
            </h3>
            <div className="spac e-y-4">
              <div>
                <h4 className="tex t-white font-medium mb-2">AI Services</h4>
                <ul className="spac e-y-1">
                    <li key={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="tex t-white font-medium mb-2">IT Services</h4>
                <ul className="spac e-y-1">
                    <li key={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            
            >
              View All Services →
            </a>
          </div>

          {/* Additional AI Services */}
          <div>
            <h3 className="tex t-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 m r-2" />
              AI Tools
            </h3>
            <ul className="spac e-y-2">
                <li key={service.name}>
                  
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="tex t-cyan-400 font-semibold mb-4">Company</h3>
            <div className="gri d grid-cols-2 gap-4">
              <div>
                <h4 className="tex t-white font-medium mb-2">Company</h4>
                <ul className="spac e-y-1">
                    <li key={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="tex t-white font-medium mb-2">Support</h4>
                <ul className="spac e-y-1">
                    <li key={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

        {/* Bottom Section */}
        <div className="borde r-t border-gray-700 mt-8 pt-8">
          <div className="fle x flex-col md:flex-row justify-between items-center">
            <div className="tex t-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="fle x space-x-6">
                
                >
                  {link.name}
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
