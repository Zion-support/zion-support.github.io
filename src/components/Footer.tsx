import React from 'react';
import { Link  } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Zap, ArrowRight  } from 'lucide-react';
  ];
  ];
  ];
  // Removed specializedServices as it was unus ed
  ];
  ];
  ];
  ];
    <f ooter c las sNa me="b g-s late-900/95 b ack drop-b lur-md b ord er-t b ord er-c yan-400/20">
      <d iv c las sNa me="c o ntainer mx-a uto px-4 py-12">
        <d iv c las sNa me="g r id g rid-c ols-1 lg:g rid-c ols-5 g ap-8">
          {/* C omp any I nfo */}
          <d iv c las sNa me="l g:c ol-s pan-1">
            <d iv c las sNa me="f l ex i tems-c enter s pace-x-2 mb-4">
              <d iv c las sNa me="w-8 h-8 b g-g rad ient-to-br from-c yan-400 to-purple-600 rounded-lg flex i tems-c enter j ust ify-c enter">
                <Brain c las sNa me="w-5 h-5 t e xt-w hite" />
              </d iv>
              <s pan c las sNa me="t e xt-xl f ont-b old t ext-w hit-e n eon-t ext">Zion Tech Group</s pan>
            </d iv>
            <p c las sNa me="t e xt-g ray-300 mb-6 l ead ing-r ela xed">
              Lead ing provider of AI-powered e nterprise solutions, quantum computi ng, and digital transformation services.
            </p>
            <d iv c las sNa me="s p ace-y-3">
              <d iv c las sNa me="f l ex i tems-c enter s pace-x-3 t ext-g ra-y-300">
                <Phone c las sNa me="w-4 h-4 t e xt-c yan-400" />
                <a h ref="t el:+13024640950" c las sNa me="h over:t ext-c ya-n-400 tran sition-c olo rs">
                  +1 302 464 0950
                </a>
              </d iv>
              <d iv c las sNa me="f l ex i tems-c enter s pace-x-3 t ext-g ra-y-300">
                <Mail c las sNa me="w-4 h-4 t e xt-c yan-400" />
                <a h ref="m ail to:k leb er@z ion tec hgroup.com" c las sNa me="h over:t ext-c ya-n-400 tran sition-c olo rs">
                  k leb er@z ion tec hgroup.com
                </a>
              </d iv>
              <d iv c las sNa me="f l ex i tems-c enter s pace-x-3 t ext-g ra-y-300">
                <MapPin c las sNa me="w-4 h-4 t e xt-c yan-400" />
                <s pan>364 E Main St STE 1008, Middletown DE 19709</s pan>
              </d iv>
          </d iv>
          {/* Micro SAAS Services */}
          <d iv>
            <h3 c las sNa me="t e xt-c yan-400 f ont-s emi bold mb-4 flex i tems-c enter">
              <Zap c las sNa me="w-4 h-4 m r-2" />
              Micro SAAS
            </h3>
            <ul c las sNa me="s p ace-y-2">
                <li k ey={service.name}>
                  >
                    <s pan>{service.name}</s pan>
                    <ArrowRight c las sNa me="w-3 h-3 m l-1 g roup-h over:tran sla te-x-1 tran sition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            >
              View All Micro SAAS ->
            </a>
          </d iv>
          {/* AI & IT Services */}
          <d iv>
            <h3 c las sNa me="t e xt-c yan-400 f ont-s emi bold mb-4 flex i tems-c enter">
              <Brain c las sNa me="w-4 h-4 m r-2" />
              AI & IT Services
            </h3>
            <d iv c las sNa me="s p ace-y-4">
              <d iv>
                <h4 c las sNa me="t e xt-w hite f ont-m edi um mb-2">AI Services</h4>
                <ul c las sNa me="s p ace-y-1">
                    <li k ey={service.name}>
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </d iv>
              <d iv>
                <h4 c las sNa me="t e xt-w hite f ont-m edi um mb-2">IT Services</h4>
                <ul c las sNa me="s p ace-y-1">
                    <li k ey={service.name}>
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </d iv>
            >
              View All Services ->
            </a>
          </d iv>
          {/* Addi tional AI Services */}
          <d iv>
            <h3 c las sNa me="t e xt-c yan-400 f ont-s emi bold mb-4 flex i tems-c enter">
              <Zap c las sNa me="w-4 h-4 m r-2" />
              AI T ools
            </h3>
            <ul c las sNa me="s p ace-y-2">
                <li k ey={service.name}>
                  >
                    <s pan>{service.name}</s pan>
                    <ArrowRight c las sNa me="w-3 h-3 m l-1 g roup-h over:tran sla te-x-1 tran sition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </d iv>
          {/* C omp any & Support */}
          <d iv>
            <h3 c las sNa me="t e xt-c yan-400 f ont-s emi bold mb-4">C omp any</h3>
            <d iv c las sNa me="g r id g rid-c ols-2 g ap-4">
              <d iv>
                <h4 c las sNa me="t e xt-w hite f ont-m edi um mb-2">C omp any</h4>
                <ul c las sNa me="s p ace-y-1">
                    <li k ey={link.name}>
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </d iv>
              <d iv>
                <h4 c las sNa me="t e xt-w hite f ont-m edi um mb-2">Support</h4>
                <ul c las sNa me="s p ace-y-1">
                    <li k ey={link.name}>
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </d iv>
          </d iv>
        {/* B ott om S ection */}
        <d iv c las sNa me="b o rder-t b ord er-g ray-700 mt-8 pt-8">
          <d iv c las sNa me="f l ex flex-c ol md:flex-row j ust ify-b etw een i tems-c enter">
            <d iv c las sNa me="t e xt-g ray-400 t ext-s-m mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </d iv>
            <d iv c las sNa me="f l ex s pace-x-6">
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
