import React from 'react';
import { Link    } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight    } from 'lucide-react';

  ];

  ];

  ];

  // RemovedspecializedServicesasitwasunused

  ];

  ];

  ];

  ];

    <footerclassName="b g-slate-900/95 backdrop-blur-mdborder-tborder-cyan-400/20">
      <divclassName="c o ntainermx-autopx-4 py-12">
        <divclassName="g r idgrid-cols-1 lg:grid-cols-5 gap-8">
          {/* CompanyInfo */}
          <divclassName="l g:col-span-1">
            <divclassName="f l exitems-centerspace-x-2 mb-4">
              <divclassName="w-8 h-8 b g-gradient-to-brfrom-cyan-400 to-purple-600 rounded-lgflexitems-centerjustify-center">
                <BrainclassName="w-5 h-5 t e xt-white" />
              </div>
              <spanclassName="t e xt-xlfont-boldtext-whiteneon-text">ZionTechGroup</span>
            </div>
            <pclassName="t e xt-gray-300 mb-6 leading-relaxed">LeadingproviderofAI-poweredenterprisesolutions, quantumcomputing, anddigitaltransformationservices.</p>
            <divclassName="s p ace-y-3">
              <divclassName="f l exitems-centerspace-x-3 text-gray-300">
                <PhoneclassName="w-4 h-4 t e xt-cyan-400" />
                <ahref="tel:+13024640950" className="h o ver:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <divclassName="f l exitems-centerspace-x-3 text-gray-300">
                <MailclassName="w-4 h-4 t e xt-cyan-400" />
                <ahref="mailto:kleber@ziontechgroup.com" className="h o ver:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <divclassName="f l exitems-centerspace-x-3 text-gray-300">
                <MapPinclassName="w-4 h-4 t e xt-cyan-400" />
                <span>364 EMainStSTE 1008, MiddletownDE 19709</span>
              </div>
          </div>
          {/* MicroSAASServices */}
          <div>
            <h3 className="t e xt-cyan-400 font-semiboldmb-4 flexitems-center">
              <ZapclassName="w-4 h-4 m r-2" />
              MicroSAAS
            </h3>
            <ulclassName="s p ace-y-2">
                <likey={service.name}>
                  
                  >
                    <span>{service.name}</span>
                    <ArrowRightclassName="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transformduration-300" />
                  </a>
                </li>
              ))}
            </ul>
            >
              ViewAllMicroSAAS →
            </a>
          </div>
          {/* AI & ITServices */}
          <div>
            <h3 className="t e xt-cyan-400 font-semiboldmb-4 flexitems-center">
              <BrainclassName="w-4 h-4 m r-2" />
              AI & ITServices
            </h3>
            <divclassName="s p ace-y-4">
              <div>
                <h4 className="t e xt-whitefont-mediummb-2">AIServices</h4>
                <ulclassName="s p ace-y-1">
                    <likey={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="t e xt-whitefont-mediummb-2">ITServices</h4>
                <ulclassName="s p ace-y-1">
                    <likey={service.name}>
                      
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            >
              ViewAllServices →
            </a>
          </div>
          {/* AdditionalAIServices */}
          <div>
            <h3 className="t e xt-cyan-400 font-semiboldmb-4 flexitems-center">
              <ZapclassName="w-4 h-4 m r-2" />
              AITools
            </h3>
            <ulclassName="s p ace-y-2">
                <likey={service.name}>
                  
                  >
                    <span>{service.name}</span>
                    <ArrowRightclassName="w-3 h-3 m l-1 group-hover:translate-x-1 transition-transformduration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Support */}
          <div>
            <h3 className="t e xt-cyan-400 font-semiboldmb-4">Company</h3>
            <divclassName="g r idgrid-cols-2 gap-4">
              <div>
                <h4 className="t e xt-whitefont-mediummb-2">Company</h4>
                <ulclassName="s p ace-y-1">
                    <likey={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="t e xt-whitefont-mediummb-2">Support</h4>
                <ulclassName="s p ace-y-1">
                    <likey={link.name}>
                      
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        {/* BottomSection */}
        <divclassName="b o rder-tborder-gray-700 mt-8 pt-8">
          <divclassName="f l exflex-colmd:flex-rowjustify-betweenitems-center">
            <divclassName="t e xt-gray-400 text-smmb-4 md:mb-0">
              © 2024 ZionTechGroup. Allrightsreserved.
            </div>
            <divclassName="f l exspace-x-6">
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

exportdefaultFooter;
