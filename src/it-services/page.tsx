import React from 'react';
import { Cloud, Database, Users, Server, Hard Drive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Award, File Text, Activity, Code, Target, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  ];

  // Removed unused categories and services variables

  // Removed unused benefits array

  ];

  // Removed unused benefits variable

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <N avigation />
      
      <m ain class Name="c ontainer mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <s ection class Name="t ext-center mb-16">
          <h1 c lass Name="t ext-4xl md:text-6xl font-bold text-white mb-6">
            <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              I T Services & Infrastructure
            </s pan>
          </h1>
          <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive I T solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
            
            >
              Get Free I T Assessment
            </a>
            
            >
              (302) 464-0950
            </a>
          </d iv>
        </s ection>

        {/* Main Services Grid */}
        <s ection class Name="m b-16">
          <h2 c lass Name="t ext-3xl font-bold text-white text-center mb-12">Core I T Services</h2>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <d iv key={index} class Name="c yber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <d iv class Name="t ext-cyan-400 mb-4">
                  {React.create Element(service.icon, { class Name: "w-8 h-8" })}
                </d iv>
                <h3 c lass Name="t ext-xl font-bold text-white mb-3">{service.title}</h3>
                <p c lass Name="t ext-gray-300 mb-4 text-sm">{service.description}</p>
                <d iv class Name="m b-4">
                  <h4 c lass Name="t ext-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <u l class Name="t ext-sm text-gray-400 space-y-1">
                      <l i key={idx} class Name="f lex items-center">
                        <C heck Circle class Name="w-3 h-3 t ext-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                </d iv>
                <d iv class Name="m b-4">
                  <h4 c lass Name="t ext-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <u l class Name="t ext-sm text-gray-400 space-y-1">
                      <l i key={idx} class Name="f lex items-center">
                        <S tar class Name="w-3 h-3 t ext-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </l i>
                    ))}
                  </u l>
                </d iv>
                <d iv class Name="m b-4">
                  <d iv class Name="t ext-2xl font-bold text-cyan-400 mb-2">{service.price}</d iv>
                <d iv class Name="m b-4">
                  <h4 c lass Name="t ext-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <d iv class Name="f lex flex-wrap gap-1">
                      <s pan key={idx} class Name="p x-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </s pan>
                    ))}
                  </d iv>
                <p c lass Name="t ext-gray-300 mb-4">{service.description}</p>
                <u l class Name="s pace-y-2 mb-6">
                    <l i key={feature Index} class Name="f lex items-center text-sm text-gray-400">
                      <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                      {feature}
                    </l i>
                  ))}
                </u l>
                <d iv class Name="t ext-center">
                  <d iv class Name="t ext-lg font-bold text-cyan-400 mb-2">{service.price}</d iv>
                  
                  >
                    Learn More <A rrow Right class Name="w-4 h-4 m l-1" />
                  </a>
                </d iv>
            ))}
          </d iv>
        </s ection>

        {/* Additional Services */}
        <s ection class Name="m b-16">
          <h2 c lass Name="t ext-3xl font-bold text-white text-center mb-12">Additional I T Services</h2>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <d iv key={index} class Name="b g-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <d iv class Name="f lex items-center mb-3">
                  {React.create Element(service.icon, { class Name: "w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 c lass Name="t ext-lg font-bold text-white">{service.title}</h3>
                </d iv>
                <p c lass Name="t ext-gray-300 text-sm mb-3">{service.description}</p>
                <d iv class Name="t ext-cyan-400 font-bold text-sm">{service.price}</d iv>
            ))}
          </d iv>
        </s ection>

        {/* Support Tiers */}
        <s ection class Name="m b-16">
          <h2 c lass Name="t ext-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-3 gap-8">
            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 c lass Name="t ext-xl font-bold text-white mb-4">Basic Support</h3>
              <d iv class Name="t ext-3xl font-bold text-cyan-400 mb-4">$199/month</d iv>
              <u l class Name="s pace-y-2 mb-6">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Business hours support
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Remote assistance
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Basic monitoring
                </l i>
              </u l>
              
              >
                Get Started
              </a>
            </d iv>
            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 c lass Name="t ext-xl font-bold text-white mb-4">Professional Support</h3>
              <d iv class Name="t ext-3xl font-bold text-cyan-400 mb-4">$499/month</d iv>
              <u l class Name="s pace-y-2 mb-6">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  24/7 support
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  On-site visits
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Advanced monitoring
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Priority response
                </l i>
              </u l>
              
              >
                Get Started
              </a>
            </d iv>
            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 c lass Name="t ext-xl font-bold text-white mb-4">Enterprise Support</h3>
              <d iv class Name="t ext-3xl font-bold text-cyan-400 mb-4">Custom</d iv>
              <u l class Name="s pace-y-2 mb-6">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Dedicated team
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Custom S LAs
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Proactive monitoring
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Strategic consulting
                </l i>
              </u l>
              
              >
                Contact Sales
              </a>
            </d iv>
        </s ection>

        {/* C TA Section */}
        <s ection class Name="t ext-center">
          <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 c lass Name="t ext-3xl font-bold text-white mb-4">Ready to Optimize Your I T Infrastructure?</h2>
            <p c lass Name="t ext-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free I T assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              
              >
                Get Free I T Assessment
              </a>
              
              >
                (302) 464-0950
              </a>
            </d iv>
          </s ection>
        </m ain>
        <F ooter />
      </d iv>
  );
};

export default I TServices Page;
