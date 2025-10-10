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
        '10x faster than traditional methods',
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
        '3D molecular structure prediction',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="relative py-20 lg:py-32 overflow-hidden">
       </section className="relative py-20 lg:py-32 overflow-hidden"> </section className="relative py-20 lg:py-32 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"><div className="container mx-auto px-4 relative z-10">
         </div className="container mx-auto px-4 relative z-10"> </div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
           </div className="max-w-4xl mx-auto text-center"> </div className="max-w-4xl mx-auto text-center"><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
            </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"> </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"> </div><Beaker className="w-4 h-4 text-cyan-400" />
             </Beaker className="w-4 h-4 text-cyan-400" /> </Beaker className="w-4 h-4 text-cyan-400" /><span className="text-cyan-400 text-sm font-medium">AI Drug Discovery P</span className="text-cyan-400 text-sm font-medium">r</span className="text-cyan-400 text-sm font-medium">o</span><h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">AI-Powered Drug Discove</h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">r</h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">y</h1><span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Revolutionizing Medici</span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">n</span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">e</span><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Accelerate pharmaceutical research with AI-powered molecular analysis, drug interaction predictio</p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">n</p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">,</p>
              and clinical trial optimization. Discover new treatments 10x faste<//p>r<//p>.</p>

           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> </div><a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
               </a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              > </a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              ><Play className="w-5 h-5 mr-2" >Explore Featur</Play className="w-5 h-5 mr-2" >e</Play className="w-5 h-5 mr-2" >s</Play>
            <//Play> <//Play> </Play>
             <//Play> <//Play><a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
               </a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              > </a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              ><Calendar className="w-5 h-5 mr-2" >Schedule De</Calendar className="w-5 h-5 mr-2" >m</Calendar className="w-5 h-5 mr-2" >o</Calendar>
            <//Calendar> <//Calendar> </Calendar>
          <//Calendar> <//Calendar> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Stats */}
     <//section> <//section><section className="py-20">
       </section className="py-20"> </section className="py-20"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">{stats.map((stat, index) =</div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">></div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"> </div>(</div>
             <//div> <//div><div key={index} className="text-center group">
               </div key={index} className="text-center group"> </div key={index} className="text-center group"><div className="relative mb-4">
                 </div className="relative mb-4"> </div className="relative mb-4"><div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  </div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> </div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> </div><stat.icon className="w-10 h-10 text-white" />
                </stat.icon className="w-10 h-10 text-white" /> </stat.icon className="w-10 h-10 text-white" /> </div>
                 <//div> <//div><div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"><div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.numb</div className="text-4xl md:text-5xl font-bold text-white mb-2">e</div className="text-4xl md:text-5xl font-bold text-white mb-2">r</div>}</div>
               <//div> <//div><div className="text-gray-400 font-medium">{stat.lab</div className="text-gray-400 font-medium">e</div className="text-gray-400 font-medium">l</div>}</div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features */}
     <//section> <//section><section id="features" className="py-20 bg-slate-800/50">
       </section id="features" className="py-20 bg-slate-800/50"> </section id="features" className="py-20 bg-slate-800/50"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Advanced AI Capabilitie</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">s</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">Cutting-edge AI technology designed specifically for pharmaceutical research and drug developmen</p className="text-lg text-gray-300 max-w-3xl mx-auto">t</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">{features.map((feature, index) =</div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">></div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300">
               </div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"> </div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"><div className="flex items-center space-x-4 mb-6">
                 </div className="flex items-center space-x-4 mb-6"> </div className="flex items-center space-x-4 mb-6"><div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  </div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"> </div><feature.icon className="w-8 h-8 text-white" />
                </feature.icon className="w-8 h-8 text-white" /> </feature.icon className="w-8 h-8 text-white" /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><h3 className="text-2xl font-bold text-white mb-2">{feature.title</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><p className="text-gray-300">{feature.description</p className="text-gray-300">}</p className="text-gray-300"><div className="space-y-3">{feature.benefits.map((benefit, benefitIndex) =</div className="space-y-3">></div className="space-y-3"> </div>(</div>
                   <//div> <//div><div key={benefitIndex} className="flex items-center space-x-3">
                    </div key={benefitIndex} className="flex items-center space-x-3"> </div key={benefitIndex} className="flex items-center space-x-3"> </div><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">{benef</span className="text-gray-300">i</span className="text-gray-300">t</span>}</span>
                  <//span> <//span> </div>
                  ))}
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Capabilities */}
     <//section> <//section><section className="py-20">
       </section className="py-20"> </section className="py-20"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Drug Discovery Platfor</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">m</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">End-to-end AI-powered solutions for every stage of drug developmen</p className="text-lg text-gray-300 max-w-3xl mx-auto">t</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{capabilities.map((capability, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 rounded-lg p-6">
              </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div><h3 className="text-xl font-bold text-white mb-4">{capability.category</h3 className="text-xl font-bold text-white mb-4">}</h3 className="text-xl font-bold text-white mb-4"><ul className="space-y-3">{capability.items.map((item, itemIndex) =></ul className="space-y-3"> </ul className="space-y-3">(</ul>
                   <//ul> <//ul><li key={itemIndex} className="flex items-start space-x-3">
                     </li key={itemIndex} className="flex items-start space-x-3"> </li key={itemIndex} className="flex items-start space-x-3"><CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                     </CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" /><span className="text-gray-300 text-sm">{it</span className="text-gray-300 text-sm">e</span className="text-gray-300 text-sm">m</span>}</span>
                  <//span> <//span> </li>
                  ))}
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing */}
     <//section> <//section><section className="py-20 bg-slate-800/50">
       </section className="py-20 bg-slate-800/50"> </section className="py-20 bg-slate-800/50"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Enterprise Prici</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">n</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">g</h2>
           <//h2> <//h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible pricing options for pharmaceutical companies of all siz</p className="text-lg text-gray-300 max-w-3xl mx-auto">e</p className="text-lg text-gray-300 max-w-3xl mx-auto">s</p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-4xl mx-auto">
           </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="bg-slate-800/50 rounded-2xl p-8">
             </div className="bg-slate-800/50 rounded-2xl p-8"> </div className="bg-slate-800/50 rounded-2xl p-8"><div className="text-center mb-8">
              </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h3 className="text-3xl font-bold text-white mb-2">AI Drug Discovery Pr</h3 className="text-3xl font-bold text-white mb-2">o</h3 className="text-3xl font-bold text-white mb-2"><p className="text-gray-300 mb-6">Complete AI-powered drug discovery platfo</p className="text-gray-300 mb-6">r</p className="text-gray-300 mb-6">m</p>

               <//p> <//p><div className="flex items-baseline justify-center mb-6">
                </div className="flex items-baseline justify-center mb-6"> </div className="flex items-baseline justify-center mb-6"> </div><span className="text-5xl font-bold text-white">${pricing.monthly.toLocaleString(</span className="text-5xl font-bold text-white">)</span className="text-5xl font-bold text-white">}</span><span className="text-gray-400 ml-2">/mon</span className="text-gray-400 ml-2">t</span className="text-gray-400 ml-2">h</span><div className="text-green-400 text-sm mb-8">Save ${(pricing.monthly * 12) - pricing.yearly} per year with annual bill</div className="text-green-400 text-sm mb-8">i</div className="text-green-400 text-sm mb-8">n</div>g</div>
              <//div> <//div> </div>
            <//div> <//div> </div>

             <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               </div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"><div>
                </div> </div> </div><h4 className="text-lg font-semibold text-white mb-4">What's included</h4 className="text-lg font-semibold text-white mb-4">:</h4 className="text-lg font-semibold text-white mb-4"><ul className="space-y-3">{pricing.features.map((feature, index) =></ul className="space-y-3"> </ul className="space-y-3">(</ul>
                     <//ul> <//ul><li key={index} className="flex items-center space-x-3">
                       </li key={index} className="flex items-center space-x-3"> </li key={index} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                       </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                    <//span> <//span> </li>
                    ))}
                <//li> <//li> </ul>
              <//ul> <//ul> </div>

               <//div> <//div><div>
                </div> </div> </div><h4 className="text-lg font-semibold text-white mb-4">Add-ons</h4 className="text-lg font-semibold text-white mb-4">:</h4 className="text-lg font-semibold text-white mb-4"><ul className="space-y-3">{pricing.addOns.map((addon, index) =></ul className="space-y-3"> </ul className="space-y-3">(</ul>
                     <//ul> <//ul><li key={index} className="flex items-center justify-between">
                       </li key={index} className="flex items-center justify-between"> </li key={index} className="flex items-center justify-between"><div>
                          </div><div className="text-white font-medium">{addon.name</div className="text-white font-medium">}</div className="text-white font-medium"><div className="text-gray-400 text-sm">{addon.description</div className="text-gray-400 text-sm">}</div className="text-gray-400 text-sm"><div className="text-cyan-400 font-bold">+${addon.price.toLocaleString()}</div className="text-cyan-400 font-bold">/</div className="text-cyan-400 font-bold">m</div>o</div>
                    <//div> <//div> </li>
                    ))}
                <//li> <//li> </ul>
              <//ul> <//ul> </div>
            <//div> <//div> </div>

             <//div> <//div><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                 </a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                > </a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                ><MessageSquare className="w-5 h-5 mr-2" >Get Started Tod</MessageSquare className="w-5 h-5 mr-2" >a</MessageSquare className="w-5 h-5 mr-2" >y</MessageSquare>
              <//MessageSquare> <//MessageSquare> </MessageSquare>
            <//MessageSquare> <//MessageSquare> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Testimonials */}
     <//section> <//section><section className="py-20">
       </section className="py-20"> </section className="py-20"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by Leading Pharmaceutical Companie</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">s</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">See how our AI technology is transforming drug discover</p className="text-lg text-gray-300 max-w-3xl mx-auto">y</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{testimonials.map((testimonial, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">></div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 rounded-lg p-6">
               </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div key={index} className="bg-slate-800/50 rounded-lg p-6"><div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) =></div className="flex items-center mb-4"> </div className="flex items-center mb-4">(</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >}</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" ><p className="text-gray-300 mb-6 italic">"{testimonial.content</p className="text-gray-300 mb-6 italic">}</p className="text-gray-300 mb-6 italic">"</p>
               <//p> <//p><div className="flex items-center">
                 </div className="flex items-center"> </div className="flex items-center"><div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  </div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"> </div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4"> </div><span className="text-white font-bold text-lg">{testimonial.avat</span className="text-white font-bold text-lg">a</span className="text-white font-bold text-lg">r</span>}</span>
                <//span> <//span> </div>
                 <//div> <//div><div>
                    </div><div className="font-semibold text-white">{testimonial.name</div className="font-semibold text-white">}</div className="font-semibold text-white"><div className="text-sm text-cyan-400">{testimonial.ro</div className="text-sm text-cyan-400">l</div className="text-sm text-cyan-400">e</div>}</div>
               <//div> <//div><div className="text-sm text-gray-400">{testimonial.compa</div className="text-sm text-gray-400">n</div className="text-sm text-gray-400">y</div>}</div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
       </section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"> </section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"><div className="container mx-auto px-4 text-center">
        </div className="container mx-auto px-4 text-center"> </div className="container mx-auto px-4 text-center"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Revolutionize Drug Discover</h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">y</h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join leading pharmaceutical companies using AI to accelerate drug development and improve patient outcome</p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">.</p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          </div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"> </div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"> </div><a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
             </a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            > </a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ><MessageSquare className="w-5 h-5 mr-2" >Start Free Tri</MessageSquare className="w-5 h-5 mr-2" >a</MessageSquare className="w-5 h-5 mr-2" >l</MessageSquare>
          <//MessageSquare> <//MessageSquare> </MessageSquare>
           <//MessageSquare> <//MessageSquare><a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
             </a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            > </a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ><Calendar className="w-5 h-5 mr-2" >Schedule De</Calendar className="w-5 h-5 mr-2" >m</Calendar className="w-5 h-5 mr-2" >o</Calendar>
          <//Calendar> <//Calendar> </Calendar>
        <//Calendar> <//Calendar> </div>

         <//div> <//div><div className="text-gray-200 text-sm">
          </div className="text-gray-200 text-sm"> </div className="text-gray-200 text-sm"> </div><p>📞 Call us:</p> </p><a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-09</a href="tel:+13024640950" className="text-white hover:text-cyan-200">5</a href="tel:+13024640950" className="text-white hover:text-cyan-200">0</a>
           <//a> <//a><p>✉️ Email:</p> </p><a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.co</a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">m</a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200"><p>📍 Address: {contactInfo.addres</p>s</p>}</p>
        <//p> <//p> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
}<//div>
<//div>