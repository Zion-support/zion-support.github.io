import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight } from 'lucide-react';

  ];

  ];

  ];

  // Removed specialized Services as it was unused

  ];

  ];

  ];

  ];

    <f ooter class Name="b g-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <d iv class Name="c ontainer mx-auto px-4 py-12">
        <d iv class Name="g rid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <d iv class Name="l g:col-span-1">
            <d iv class Name="f lex items-center space-x-2 mb-4">
              <d iv class Name="w-8 h-8 b g-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <B rain class Name="w-5 h-5 t ext-white" />
              </d iv>
              <s pan class Name="t ext-xl font-bold text-white neon-text">Zion Tech Group</s pan>
            </d iv>
            <p c lass Name="t ext-gray-300 mb-6 leading-relaxed">
              Leading provider of A I-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <d iv class Name="s pace-y-3">
              <d iv class Name="f lex items-center space-x-3 text-gray-300">
                <P hone class Name="w-4 h-4 t ext-cyan-400" />
                <a h ref="tel:+13024640950" class Name="h over:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </d iv>
              <d iv class Name="f lex items-center space-x-3 text-gray-300">
                <M ail class Name="w-4 h-4 t ext-cyan-400" />
                <a h ref="mailto:kleber@ziontechgroup.com" class Name="h over:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </d iv>
              <d iv class Name="f lex items-center space-x-3 text-gray-300">
                <M ap Pin class Name="w-4 h-4 t ext-cyan-400" />
                <s pan>364 E Main St S TE 1008, Middletown D E 19709</s pan>
              </d iv>
          </d iv>

          {/* Micro S AA S Services */}
          <d iv>
            <h3 c lass Name="t ext-cyan-400 font-semibold mb-4 flex items-center">
              <Z ap class Name="w-4 h-4 m r-2" />
              Micro S AA S
            </h3>
            <u l class Name="s pace-y-2">
                <l i key={service.name}>
                  
                  >
                    <s pan>{service.name}</s pan>
                    <A rrow Right class Name="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </l i>
              ))}
            </u l>
            
            >
              View All Micro S AA S →
            </a>
          </d iv>

          {/* A I & I T Services */}
          <d iv>
            <h3 c lass Name="t ext-cyan-400 font-semibold mb-4 flex items-center">
              <B rain class Name="w-4 h-4 m r-2" />
              A I & I T Services
            </h3>
            <d iv class Name="s pace-y-4">
              <d iv>
                <h4 c lass Name="t ext-white font-medium mb-2">A I Services</h4>
                <u l class Name="s pace-y-1">
                    <l i key={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </l i>
                  ))}
                </u l>
              </d iv>
              <d iv>
                <h4 c lass Name="t ext-white font-medium mb-2">I T Services</h4>
                <u l class Name="s pace-y-1">
                    <l i key={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </l i>
                  ))}
                </u l>
              </d iv>
            
            >
              View All Services →
            </a>
          </d iv>

          {/* Additional A I Services */}
          <d iv>
            <h3 c lass Name="t ext-cyan-400 font-semibold mb-4 flex items-center">
              <Z ap class Name="w-4 h-4 m r-2" />
              A I Tools
            </h3>
            <u l class Name="s pace-y-2">
                <l i key={service.name}>
                  
                  >
                    <s pan>{service.name}</s pan>
                    <A rrow Right class Name="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </L ink>
                </l i>
              ))}
            </u l>
          </d iv>

          {/* Company & Support */}
          <d iv>
            <h3 c lass Name="t ext-cyan-400 font-semibold mb-4">Company</h3>
            <d iv class Name="g rid grid-cols-2 gap-4">
              <d iv>
                <h4 c lass Name="t ext-white font-medium mb-2">Company</h4>
                <u l class Name="s pace-y-1">
                    <l i key={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </l i>
                  ))}
                </u l>
              </d iv>
              <d iv>
                <h4 c lass Name="t ext-white font-medium mb-2">Support</h4>
                <u l class Name="s pace-y-1">
                    <l i key={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </l i>
                  ))}
                </u l>
              </d iv>
          </d iv>

        {/* Bottom Section */}
        <d iv class Name="b order-t border-gray-700 mt-8 pt-8">
          <d iv class Name="f lex flex-col md:flex-row justify-between items-center">
            <d iv class Name="t ext-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </d iv>
            <d iv class Name="f lex space-x-6">
                
                >
                  {link.name}
                </a>
              ))}
            </d iv>
            </d iv>
          </d iv>
        </d iv>
      </d iv>
    </f ooter>
  );
};

export default Footer;
