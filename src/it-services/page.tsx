import React from 'react';
import { Cloud, Database, Users, Server, HardDrive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Award, FileText, Activity, Code, Target, Rocket  } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  ];

  // Removed unused categories and services variables;
  // Removed unused benefits array;
  ];

  // Removed unused benefits variable;
    <>div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ></div>
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16 pt-24" ></main>
        {/* Hero Section */}
        <section className="text-center mb-16" ></section>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" ></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" ></span>
              IT Services & Infrastructure;
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" ></p>
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" ></div>
            >
              Get Free IT Assessment;
            </a>
            
            >
              (302) 464-0950;
            </a>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="mb-16" ></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12" >Core IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ></div><div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300" ></div></>
                <>div className="text-cyan-400 mb-4" ></div>
                  {React.createElement(service.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3" >{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm" >{service.description}</p>
                <div className="mb-4" ></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2" >Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1" ></ul>
                      <li key={idx} className="flex items-center" ></li>
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div><div className="mb-4" ></div></>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2" >Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1" ></ul>
                      <li key={idx} className="flex items-center" ></li>
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" /></Star>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <>div className="mb-4" ></div><div className="text-2xl font-bold text-cyan-400 mb-2" >{service.price}</div></>
                <>div className="mb-4" ></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2" >Technologies:</h4>
                  <div className="flex flex-wrap gap-1" ></div>
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded" ></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                <p className="text-gray-300 mb-4" >{service.description}</p>
                <ul className="space-y-2 mb-6" ></ul>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400" ></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center" ></div><div className="text-lg font-bold text-cyan-400 mb-2" >{service.price}</div></>
                  
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
                  </a>
                </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16" ></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12" >Additional IT Services</h2>
          <>div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ></div><div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300" ></div></>
                <>div className="flex items-center mb-3" ></div>
                  {React.createElement(service.icon, { className: "w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 className="text-lg font-bold text-white" >{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3" >{service.description}</p>
                <div className="text-cyan-400 font-bold text-sm" >{service.price}</div>
            ))}
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-16" ></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12" >Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ></div><div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6" ></div></>
              <h3 className="text-xl font-bold text-white mb-4" >Basic Support</h3>
              <>div className="text-3xl font-bold text-cyan-400 mb-4" >$199/month</div>
              <ul className="space-y-2 mb-6" ></ul>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Business hours support;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Remote assistance;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Basic monitoring;
                </li>
              </ul>
              
              >
                Get Started;
              </a>
            </div><div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500" ></div></>
              <h3 className="text-xl font-bold text-white mb-4" >Professional Support</h3>
              <>div className="text-3xl font-bold text-cyan-400 mb-4" >$499/month</div>
              <ul className="space-y-2 mb-6" ></ul>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  24/7 support;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  On-site visits;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Advanced monitoring;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Priority response;
                </li>
              </ul>
              
              >
                Get Started;
              </a>
            </div><div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6" ></div></>
              <h3 className="text-xl font-bold text-white mb-4" >Enterprise Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4" >Custom</div>
              <ul className="space-y-2 mb-6" ></ul>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Dedicated team;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Custom SLAs;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Proactive monitoring;
                </li>
                <li className="flex items-center text-sm text-gray-300" ></li>
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                  Strategic consulting;
                </li>
              </ul>
              
              >
                Contact Sales;
              </a>
            </div>
        </section>

        {/* CTA Section */}
        <section className="text-center" ></section>
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8" ></div>
            <h2 className="text-3xl font-bold text-white mb-4" >Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto" ></p>
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" ></div>
              >
                Get Free IT Assessment;
              </a>
              
              >
                (302) 464-0950;
              </a>
            </div>
          </section>
        </main>
        <Footer /></Footer>
      </div>
  );
};

export default ITServicesPage;

          </div></div></div></div></div></div>