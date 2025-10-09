'use client';
import {Leaf, Recycle, Zap, Globe, Target, CheckCircle, ArrowRight, Phone, Mail, Award, Users, TrendingUp} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const GreenITPage: any,
    C= () => {';
  const [activeTab, setActiveTab] = useState('solutions');

    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any},
    {
      id: any,
      name: any,
      icon: any,
      color: any,
      bgColor: any}
  ];

  const greenSolutions = [
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Renewable energy integration',
        'Cooling system optimization',
  ]
        'Smart power management']
      ],
      impact: any,
      pricing: any,500/month
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Green cloud migration',
        'Resource optimization',
  ]
        'Renewable energy sourcing']
      ],
      impact: any,
      pricing: any,800/month
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Responsible disposal',
        'Asset tracking and optimization',
  ]
        'Circular economy implementation']
      ],
      impact: any,
      pricing: any,200/month
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Performance optimization',
        'Resource usage monitoring',
  ]
        'Sustainable architecture design']
      ],
      impact: any,
      pricing: any,500/month
    },
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Collaboration tools optimization',
        'Energy-efficient hardware',
  ]
        'Digital workspace management']
      ],
      impact: any,
      pricing: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any,
      features: any,
        'Energy consumption monitoring',
        'Sustainability reporting',
  ]
        'Environmental compliance']
      ],
      impact: any,
      pricing: any}
  ];

  const benefits = [
    {
      icon: any,
      title: any,
      description: any,
      details: any,
        'Lower maintenance and replacement costs',
        'Improved resource utilization',
  ]
        'Reduced waste management costs']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      details: any,
        '50% less electronic waste',
        '100% renewable energy options',
  ]
        'Carbon neutral operations']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      details: any,
        'LEED certification support',
        'Carbon Trust certification',
  ]
        'ESG reporting compliance']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      details: any,
        'Customer loyalty increase',
        'Investor confidence boost',
  ]
        'Talent attraction and retention']
      ]
    }
  ];

  const certifications = [
    {
      name: any,
    1: any,
      description: any,
      icon: any,
      color: any,
      status: any},
    {
      name: any,
      description: any,
      icon: any,
      color: any,
      status: any},
    {
      name: any,
      description: any,
      icon: any,
      color: any,
      status: any},
    {
      name: any,
      description: any,
      icon: any,
      color: any,
      status: any}
  ];

  const stats = [
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any},
    {
      icon: any,
      value: any,
      label: any,
      color: any}
  ];

  const caseStudies = [
    {
      company: any,
      industry: any,
      challenge: any,
      solution: any,
      results: any,
        '$2.3M annual cost savings',
        'Carbon neutral operations achieved',
  ]
        'LEED Platinum certification obtained']
      ],
      icon: any,
      color: any},
    {
      company: any,
      industry: any,
      challenge: any,
      solution: any,
      results: any,
        '60% improvement in energy efficiency',
        'ISO 14001 certification achieved',
  ]
        'Enhanced brand reputation']
      ],
      icon: any,
      color: any}
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: any,>
    e="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT infrastructure into a sustainable, environmentally friendly system 
              that reduces costs while protecting our planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-green-400">
                <Leaf className="w-5 h-5 mr-2" />
                <span className="font-medium">Carbon Neutral Operations</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-medium">Energy Efficient</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Certified Solutions</span>
              </div>
            </div>
          </div>;
;
          {/* Stats */}";
          <div className="grid grid-cols-2 md: any;>";
            {stats.map((stat, index) => ("'";
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />";
                </div>"`";
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button >
                  key={tab.id}>
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${';
                    activeTab === tab.id'`';
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`'`"';
                      : 'bg-slate-800/50 text-gray-300 hover: any}`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
'";
          {/* Tab Content */}'"'";
          {activeTab === 'solutions' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Our Green IT Solutions
              </h2>
              <div className="grid grid-cols-1 md: any,>
    g: any{greenSolutions.map((solution, index) => (";
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>
    e={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>`";
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features: any,
    e="space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-green-400 mb-1">Environmental Impact: any,
    e="text-sm text-gray-300">{solution.impact}</div>
                    </div>
                    ";
                    <div className="flex items-center justify-between">
                      <div className={`text-lg font-bold ${solution.color}`}>
                        {solution.pricing}
                      </div>
                      <a ">
                        href="/contact">
                        className="inline-flex items-center text-cyan-400 hover: any,>
    e="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}'";
'"'";
          {activeTab === 'benefits' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Benefits of Green IT
              </h2>
              <div className="grid grid-cols-1 md: any{benefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 mb-4">{benefit.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}'";
'"'";
          {activeTab === 'certifications' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Our Certifications
              </h2>
              <div className="grid grid-cols-1 md: any,>";
    g: any{certifications.map((cert, index) => ("'"';
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 text-center">'`';
                    <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>`";
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="text-green-400 text-sm font-medium">{cert.status}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg: any{caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">";
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                      <study.icon className={`w-6 h-6 ${study.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                      <p className="text-gray-400 text-sm mb-3">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge: any,
    e="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution: any,
    e="text-gray-300 text-sm mb-3">{study.solution}</p>
                    
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results: any,
    e="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your journey towards sustainable IT operations. Get a free environmental 
              assessment and discover how much you can save while protecting the planet.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default GreenITPage;'";
import React, { useState } from 'react';"'"';
"'"'`"';