import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Calendar, Building, Globe, Cloud, DollarSign, Target, Star, CheckCircle, Target, Cloud, DollarSign, Calendar, MessageSquare } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function AIClimateSolutionsProPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive AI-powered carbon footprint tracking and reduction strategies for organizations',
      icon: Leaf,
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ],
      image: '/images/ai-climate-solutions/carbon-footprint.webp'
    },
    {
      title: 'Weather Prediction & Modeling',
      description: 'Advanced weather forecasting with AI-powered climate modeling and extreme weather prediction',
      icon: Cloud,
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ],
      image: '/images/ai-climate-solutions/weather-prediction.webp'
    },
    {
      title: 'Sustainability Planning',
      description: 'AI-driven sustainability roadmaps and environmental impact optimization strategies',
      icon: Target,
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
      ],
      image: '/images/ai-climate-solutions/sustainability-planning.webp'
    },
    {
      title: 'Emission Tracking & Monitoring',
      description: 'Real-time emission monitoring and automated compliance reporting for environmental regulations',
      icon: Activity,
      benefits: [
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Regulatory alert system'
      ],
      image: '/images/ai-climate-solutions/emission-tracking.webp'
    }
  ];

  const capabilities = [
    {
      category: 'Environmental Monitoring',
      items: [
        'Air quality monitoring',
        'Water quality assessment',
        'Soil health analysis',
        'Biodiversity tracking',
        'Pollution source identification',
        'Environmental impact assessment'
      ]
    },
    {
      category: 'Climate Analytics',
      items: [
        'Temperature trend analysis',
        'Precipitation modeling',
        'Sea level rise prediction',
        'Extreme weather forecasting',
        'Climate risk assessment',
        'Seasonal pattern analysis'
      ]
    },
    {
      category: 'Sustainability Management',
      items: [
        'Carbon footprint calculation',
        'Energy efficiency optimization',
        'Waste reduction strategies',
        'Renewable energy planning',
        'Green building certification',
        'Sustainable supply chain'
      ]
    },
    {
      category: 'Compliance & Reporting',
      items: [
        'Environmental regulation tracking',
        'Automated compliance reporting',
        'Audit preparation',
        'Risk assessment',
        'Documentation management',
        'Stakeholder reporting'
      ]
    }
  ];

  const pricing = {
    monthly: 3200,
    yearly: 32000,
    features: [
      'Unlimited environmental monitoring',
      'Advanced AI climate models',
      'Real-time data processing',
      '24/7 technical support',
      'Custom model training',
      'API access',
      'Data export/import',
      'White-label options'
    ],
    addOns: [
      {
        name: 'Custom Climate Models',
        price: 1500,
        description: 'Train AI models on your specific climate data'
      },
      {
        name: 'Dedicated Support',
        price: 800,
        description: 'Dedicated environmental specialist'
      },
      {
        name: 'On-premise Deployment',
        price: 3000,
        description: 'Deploy on your infrastructure'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'VP of Sustainability',
      company: 'GreenTech Solutions',
      content: 'AI Climate Solutions Pro helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Environmental Director',
      company: 'EcoCorp International',
      content: 'The weather prediction accuracy is incredible. We achieved 95% accuracy in forecasting extreme weather events, helping us prepare better for climate risks.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Sustainability Officer',
      company: 'ClimateFirst Industries',
      content: 'The sustainability planning feature helped us create a comprehensive roadmap to net-zero emissions. This is exactly what we needed for our climate goals.',
      rating: 5,
      avatar: 'SR'
    }
  ];

  const stats = [
    { number: '40%', label: 'Carbon Footprint Reduction', icon: Leaf },
    { number: '95%', label: 'Weather Prediction Accuracy', icon: Cloud },
    { number: '60%', label: 'Cost Savings', icon: DollarSign },
    { number: '100+', label: 'Environmental Clients', icon: Building }
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
            </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"> </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"> </div><Globe className="w-4 h-4 text-cyan-400" />
             </Globe className="w-4 h-4 text-cyan-400" /> </Globe className="w-4 h-4 text-cyan-400" /><span className="text-cyan-400 text-sm font-medium">AI Climate Solutions P</span className="text-cyan-400 text-sm font-medium">r</span className="text-cyan-400 text-sm font-medium">o</span><h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">AI-Powered Climate Solutio</h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">n</h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">s</h1><span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Saving Our Plan</span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">e</span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">t</span><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Combat climate change with intelligent environmental monitoring, carbon footprint optimizatio</p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">n</p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">,</p>
              and sustainability planning. Make data-driven decisions for a greener futur<//p>e<//p>.</p>

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
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Advanced Climate AI Capabilitie</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">s</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">Cutting-edge AI technology designed specifically for environmental monitoring and climate solution</p className="text-lg text-gray-300 max-w-3xl mx-auto">s</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">{features.map((feature, index) =</div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">></div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"> </div>(</div>
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
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Climate Solutions Platfor</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">m</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">End-to-end AI-powered solutions for environmental monitoring and climate actio</p className="text-lg text-gray-300 max-w-3xl mx-auto">n</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">{capabilities.map((capability, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> </div>(</div>
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
           <//h2> <//h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible pricing options for organizations committed to climate acti</p className="text-lg text-gray-300 max-w-3xl mx-auto">o</p className="text-lg text-gray-300 max-w-3xl mx-auto">n</p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-4xl mx-auto">
           </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="bg-slate-800/50 rounded-2xl p-8">
             </div className="bg-slate-800/50 rounded-2xl p-8"> </div className="bg-slate-800/50 rounded-2xl p-8"><div className="text-center mb-8">
              </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h3 className="text-3xl font-bold text-white mb-2">AI Climate Solutions Pr</h3 className="text-3xl font-bold text-white mb-2">o</h3 className="text-3xl font-bold text-white mb-2"><p className="text-gray-300 mb-6">Complete AI-powered climate solutions platfo</p className="text-gray-300 mb-6">r</p className="text-gray-300 mb-6">m</p>

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
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by Leading Environmental Organization</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">s</h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"><p className="text-lg text-gray-300 max-w-3xl mx-auto">See how our AI technology is transforming climate actio</p className="text-lg text-gray-300 max-w-3xl mx-auto">n</p className="text-lg text-gray-300 max-w-3xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{testimonials.map((testimonial, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">></div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div>(</div>
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
        </div className="container mx-auto px-4 text-center"> </div className="container mx-auto px-4 text-center"> </div><h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Take Climate Actio</h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">n</h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join leading organizations using AI to combat climate change and build a sustainable futur</p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">e</p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">.</p>

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