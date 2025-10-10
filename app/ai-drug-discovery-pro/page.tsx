import { CheckCircle, Star, Clock, Target, DollarSign, Calendar, MessageSquare, Beaker, Microscope, TestTube, Atom, Play, Search, Save, Clock, Calendar, Building, DollarSign, Target, Star, CheckCircle, Clock, Target, DollarSign, Calendar, MessageSquare } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function AIDrugDiscoveryProPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Molecular Modeling & Simulation',
      description: 'Advanced AI-powered molecular modeling with quantum-level accuracy for drug design and optimization',
      icon: Atom,
      benefits: [
        '99.7% accuracy in molecular predictions',
        '10 x faster than traditional methods',
        'Real-time molecular visualization',
        'Quantum-level precision modeling'
      ],
      image: '/images/ai-drug-discovery/molecular-modeling.webp'
    },
    {
      title: 'Drug Interaction Analysis',
      description: 'Comprehensive analysis of drug-drug interactions, side effects, and contraindications',
      icon: TestTube,
      benefits: [
        'Predict 95% of drug interactions',
        'Reduce adverse events by 80%',
        'Real-time safety monitoring',
        'Comprehensive drug database'
      ],
      image: '/images/ai-drug-discovery/drug-interactions.webp'
    },
    {
      title: 'Clinical Trial Optimization',
      description: 'AI-driven clinical trial design, patient selection, and outcome prediction',
      icon: Microscope,
      benefits: [
        '50% faster trial completion',
        '30% higher success rates',
        'Optimal patient selection',
        'Predictive outcome modeling'
      ],
      image: '/images/ai-drug-discovery/clinical-trials.webp'
    },
    {
      title: 'Patent Research & Analysis',
      description: 'Intelligent patent analysis and prior art research for drug development',
      icon: Search,
      benefits: [
        'Comprehensive patent database',
        'AI-powered prior art search',
        'Patent landscape analysis',
        'Freedom to operate analysis'
      ],
      image: '/images/ai-drug-discovery/patent-research.webp'
    }
  ];

  const capabilities = [
    {
      category: 'Molecular Design',
      items: [
        '3 D molecular structure prediction',
        'Drug-target binding affinity',
        'ADMET property prediction',
        'Lead compound optimization',
        'Structure-activity relationships',
        'Molecular dynamics simulation'
      ]
    },
    {
      category: 'Drug Discovery',
      items: [
        'Virtual screening libraries',
        'Hit identification & validation',
        'Lead optimization',
        'Drug repurposing analysis',
        'Natural product discovery',
        'Synthetic route planning'
      ]
    },
    {
      category: 'Safety & Efficacy',
      items: [
        'Toxicity prediction',
        'Side effect analysis',
        'Drug interaction screening',
        'Dosage optimization',
        'Biomarker identification',
        'Efficacy prediction'
      ]
    },
    {
      category: 'Clinical Development',
      items: [
        'Trial design optimization',
        'Patient stratification',
        'Endpoint prediction',
        'Risk assessment',
        'Regulatory compliance',
        'Market analysis'
      ]
    }
  ];

  const pricing = {
    monthly: 4500,
    yearly: 45000,
    features: [
      'Unlimited molecular modeling',
      'Advanced AI algorithms',
      'Real-time collaboration',
      '24/7 technical support',
      'Custom model training',
      'API access',
      'Data export/import',
      'White-label options'
    ],
    addOns: [
      {
        name: 'Custom Model Training',
        price: 2000,
        description: 'Train AI models on your specific data'
      },
      {
        name: 'Dedicated Support',
        price: 1000,
        description: 'Dedicated technical specialist'
      },
      {
        name: 'On-premise Deployment',
        price: 5000,
        description: 'Deploy on your infrastructure'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Head of R&D',
      company: 'PharmaCorp International',
      content: 'AI Drug Discovery Pro accelerated our drug development timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Scientific Officer',
      company: 'BioTech Solutions',
      content: 'The molecular modeling accuracy is incredible. We achieved 99.7% accuracy in predicting drug-target interactions, saving us millions in failed experiments.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'MediPharm Labs',
      content: 'The clinical trial optimization feature helped us reduce trial costs by 40% while improving success rates. This is game-changing technology.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const stats = [
    { number: '60%', label: 'Faster Drug Discovery', icon: Clock },
    { number: '99.7%', label: 'Prediction Accuracy', icon: Target },
    { number: '80%', label: 'Cost Reduction', icon: DollarSign },
    { number: '50+', label: 'Pharmaceutical Clients', icon: Building }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="relative py-20 lg:py-32 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Beaker className="w-4 h-4 text-cyan-400" /></Beake>
              <span className="text-cyan-400 text-sm font-medium"></span></<<<span>AI</span></<<span>Drug</span> Discovery Pro<h1 className="text-4 xl lg:text-6 xl font-bold text-white mb-6"></h1></<<<h1>AI</h1></h1>-Powered Drug Discovery<span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></span></<<<span>Revolutionizing</span></<<span>Medicine</span><p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed">Accelerate pharmaceutical research with AI-powered molecular analysis, drug interaction prediction,</p></<<<p>and</p></<<p>clinical</p> trial optimization. Discover new treatments 10 x faster.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              ></a>
                <Play className="w-5 h-5 mr-2" >Explore Features</Pla>
              </Play>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              ></a>
                <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
              </Calendar>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6 xl mx-auto">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <stat.icon className="w-10 h-10 text-white" /></sta>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-4 xl md:text-5 xl font-bold text-white mb-2"></div>{stat.number}<div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Advanced</h2></<<h2>AI</h2> Capabilities<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Cutting</p>-edge AI technology designed specifically for pharmaceutical research and drug development<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7 xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-2 xl p-8 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="flex items-center space-x-4 mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                    <feature.icon className="w-8 h-8 text-white" /></featur>
                  </div>
                  <div></div>
                    <h3 className="text-2 xl font-bold text-white mb-2"></h>{feature.title}<p className="text-gray-300"></p>{feature.description}<div className="space-y-3">{feature.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center space-x-3"></div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300">{benefit}</spa>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Comprehensive</h2></<<h2>Drug</h2> Discovery Platform<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>End</p>-to-end AI-powered solutions for every stage of drug development<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7 xl mx-auto">{capabilities.map((capability, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-xl font-bold text-white mb-4"></h>{capability.category}<ul className="space-y-3">{capability.items.map((item, itemIndex) => (</u>
                    <li key={itemIndex} className="flex items-start space-x-3"></l>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300 text-sm">{item}</spa>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Enterprise</h2></<<h2>Pricing</h2><p className="text-lg text-gray-300 max-w-3 xl mx-auto">Flexible pricing options for pharmaceutical companies of all sizes</p>
            </p>
          </div>

          <div className="max-w-4 xl mx-auto"></div>
            <div className="bg-slate-800/50 rounded-2 xl p-8"></div>
              <div className="text-center mb-8"></div>
                <h3 className="text-3 xl font-bold text-white mb-2"></h3></<<<h3>AI</h3></<<h3>Drug</h3> Discovery Pro<p className="text-gray-300 mb-6">Complete AI-powered drug discovery platform</p>

                <div className="flex items-baseline justify-center mb-6"></div>
                  <span className="text-5 xl font-bold text-white"></spa>${pricing.monthly.toLocaleString()}<span className="text-gray-400 ml-2"></spa>/month<div className="text-green-400 text-sm mb-8">Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual billing</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"></div>
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4><ul className="space-y-3">{pricing.features.map((feature, index) => (</u>
                      <li key={index} className="flex items-center space-x-3"></l>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                        <span className="text-gray-300">{feature}</spa>
                      </li>
                    ))}
                  </ul>
                </div>

                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Add-ons:</h4><ul className="space-y-3">{pricing.addOns.map((addon, index) => (</u>
                      <li key={index} className="flex items-center justify-between"></l>
                        <div></div>
                          <div className="text-white font-medium"></div>{addon.name}<div className="text-gray-400 text-sm"></div>{addon.description}<div className="text-cyan-400 font-bold">+${addon.price.toLocaleString()}/mo</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center"></div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                ></a>
                  <MessageSquare className="w-5 h-5 mr-2" >Get Started Today</MessageSquar>
                </MessageSquare>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Trusted</h2></<<h2>by</h2> Leading Pharmaceutical Companies<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>See</p></<<p>how</p> our AI technology is transforming drug discovery<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6 xl mx-auto">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4"></div>{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}</Star><p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"></div>
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</spa>
                  </div>
                  <div></div>
                    <div className="font-semibold text-white"></div>{testimonial.name}<div className="text-sm text-cyan-400"></div>{testimonial.role}<div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></sectio>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Revolutionize Drug Discovery?<p className="text-xl text-gray-200 mb-8 max-w-3 xl mx-auto">Join leading pharmaceutical companies using AI to accelerate drug development and improve patient outcomes.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></a>
              <MessageSquare className="w-5 h-5 mr-2" >Start Free Trial</MessageSquar>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
            </Calendar>
          </div>

          <div className="text-gray-200 text-sm"></div>
            <p></p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a>
            <p></p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a><p>📍 Address: {contactInfo.address}</p>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
}
