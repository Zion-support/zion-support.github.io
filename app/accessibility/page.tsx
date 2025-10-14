import {Helmet}}from 'react-helmet-async';
import {CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star}}from 'lucide-react';
const AccessibilityPage: React.FC  = () => {,
'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star  } from 'lucide-react';const AccessibilityPage: React.FC  = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly'];
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly'],
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    },
  ];];
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls'],
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support'],
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications'],
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces'],
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards'],
    },
  ]
const standards = [
    {name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',},
    {name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant',},
    {name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant',},
    {name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
            Accessibility
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              Solutions
            </span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
            Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure 
            your applications are usable by people of all abilities and comply with international standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"></button>
              Get Accessibility Audit
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Learn More
            </button>
                </div>
        </div>
                </section>
                {/* Features Section */}
                <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Comprehensive Accessibility Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our accessibility solutions cover all aspects of digital inclusion, ensuring your applications 
              work seamlessly for users with diverse needs and abilities.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {feature.title}
                </h3>
                </div>
                <p className="text-gray-300 mb-4"></p>
                {feature.description}
                </p>
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                {benefit}
                </li>
                  ))}
                </ul>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Standards Compliance */}
                <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Standards Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We ensure full compliance with international accessibility standards and regulations.
    <>
  </>
      <Helmet></Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
                </Helmet><title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation, digital accessibility" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                </div><section className="relative py-20 px-4 overflow-hidden"></section>
          </section>
                </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div>
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Accessibility </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              </div><button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" /></button>
                Learn More
              </button>
                </div>
          </div>
                </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Accessibility Features;</h2>
                </h2>
              <p className="text-xl text-gray-300">Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Accessibility
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure 
              your applications are usable by people of all abilities and comply with international standards.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">Get Accessibility Audit
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
        {/* Features Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-3xl font-bold text-white mb-4"></h2>
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
              </p>
                </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                {features.map((feature, index) => (
                </div><$2 />
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    </div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3>
                {feature.title}
                </h3>
                  <p className="text-gray-300 mb-6"></p>
                {feature.description</p>}
                </p>
                  <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        </li><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {benefit}
                </li>
                    ))}
                </ul>
                </div>
              ))}
                </div>
                </div>
        </section>
        
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Standards Compliance;</h2>
                </h2>
              <p className="text-xl text-gray-300">We ensure full compliance with international accessibility standards and regulations.</p>
                {/* Standards Compliance */}
                <section className="py-20 px-4 bg-white/5"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-3xl font-bold text-white mb-4"></h2>
                Standards Compliance
              </h2>
              <p className="text-xl text-gray-300" /></p>
                We ensure full compliance with international accessibility standards and regulations.
              </p>
                </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
                {standards.map((standard, index) => (
                </div><$2 />
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                    </div><CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h3>
                {standard.name}
                </h3>
                  <p className="text-gray-300 mb-4 text-sm"></p>
                {standard.description</p>}
                </p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                {standard.status</span>}
                </span>
                </div>
              ))}
                </div>
                </div>
        </section>
        
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Your Digital Experience Accessible?</h2>
                </h2>
              <p className="text-xl text-gray-300 mb-8">Contact us today for a comprehensive accessibility audit and implementation plan.</p>
                </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300">,</button>
                  Get Accessibility Audit;
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300">,</button>
                  Contact Us;
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Accessibility Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
                <$2 />
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"></h3>
                {feature.title}
                <p className="text-gray-300 mb-6"></p>
                {feature.description}
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => (;}
                <li key={benefitIndex} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                {benefit}
                    ))}
              ))}
        {/* Standards Compliance */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Standards Compliance
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We ensure full compliance with international accessibility standards and regulations.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {standards.map((standard, index) => (
                <$2 />
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                    <CheckCircle className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2"></h3>
                {standard.name}
                <p className="text-gray-300 mb-4 text-sm"></p>
                {standard.description}
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 text-sm rounded-full font-semibold"></span>
                {standard.status}
              ))}
        {/* CTA Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              </div><h2 className="text-3xl font-bold text-white mb-6"></h2>
                Ready to Make Your Digital Experience Accessible?
              </h2>
              <p className="text-xl text-gray-300 mb-8" /></p>
                Contact us today for a comprehensive accessibility audit and implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                </div><button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                  Get Accessibility Audit
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" /></button>
                  Contact Us
                </button>
                </div>
            ))}
                </div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Standards Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We ensure full compliance with international accessibility standards and regulations.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {standards.map((standard, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {standard.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3"></p>
                {standard.description}
                </p>
                <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs"></span>
                {standard.status}
                </span>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
                </section>
          <h2 className="text-4xl font-bold text-white mb-6"></h2>
            Ready to Make Your App Accessible?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Contact our accessibility experts to audit your application and implement inclusive design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Start Accessibility Audit
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Download Guide
            </button>
                </div>
        </div>
                </section>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
      </div>
    </>
  )
}
export default AccessibilityPage
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact us today for a comprehensive accessibility audit and implementation plan.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Accessibility Audit
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Us
  )
}
export default AccessibilityPage</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></button>
                </button></button>
                </button></p>
                </p></p>
                </p></p>
                </p></h1>
                </h2></h2>
                </h2></h3>
                </h3></ul>
                </li></section>
                </section></section>
                </section>
