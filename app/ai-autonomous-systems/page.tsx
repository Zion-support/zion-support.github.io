'use client';
import React from 'react';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock3, Navigation, TrendingDown, Zap, Target, Shield, Users, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI systems that make independent decisions based on real-time data analysis and learned patterns.',
      benefits: ['Real-time decisions', 'Pattern recognition', 'Adaptive learning', 'Risk assessment']
    },
    {
      icon: Settings,
      title: 'Self-Managing Systems',
      description: 'Systems that automatically configure, optimize, and maintain themselves without human intervention.',
      benefits: ['Auto-configuration', 'Self-optimization', 'Predictive maintenance', 'Resource management']
    },
    {
      icon: Zap,
      title: 'Adaptive Intelligence',
      description: 'AI that continuously learns and adapts to changing environments and requirements.',
      benefits: ['Continuous learning', 'Environment adaptation', 'Performance improvement', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Autonomous Security',
      description: 'Self-protecting systems that detect and respond to threats automatically.',
      benefits: ['Threat detection', 'Automatic response', 'Security updates', 'Incident handling']
    },
    {
      icon: Target,
      title: 'Goal-Oriented Behavior',
      description: 'Systems that work towards specific objectives while adapting to changing conditions.',
      benefits: ['Objective tracking', 'Dynamic planning', 'Resource allocation', 'Progress monitoring']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human operators.',
      benefits: ['Human oversight', 'Collaborative decision making', 'Transparency', 'Control interfaces']
    }
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: Car,
      useCases: ['Self-driving cars', 'Autonomous trucks', 'Delivery drones', 'Fleet management']
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and robotic systems for industrial automation.',
      icon: Factory,
      useCases: ['Robotic assembly', 'Quality control', 'Predictive maintenance', 'Supply chain automation']
    },
    {
      title: 'Smart Cities',
      description: 'Autonomous infrastructure management for traffic, energy, and public services.',
      icon: Building,
      useCases: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and diagnostic systems for patient care.',
      icon: Stethoscope,
      useCases: ['Medical diagnosis', 'Surgical robots', 'Patient monitoring', 'Drug delivery']
    },
    {
      title: 'Financial Trading',
      description: 'Autonomous trading systems and algorithmic investment management.',
      icon: TrendingUp,
      useCases: ['Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Fraud detection']
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous spacecraft and planetary rovers for space missions.',
      icon: Rocket,
      useCases: ['Planetary rovers', 'Satellite operations', 'Space station automation', 'Mission planning']
    }
  ];

  const capabilities = [
    {
      metric: '99.9%',
      description: 'Uptime for autonomous operations',
      icon: Shield
    },
    {
      metric: '50%',
      description: 'Reduction in operational costs',
      icon: TrendingDown
    },
    {
      metric: '24/7',
      description: 'Continuous autonomous operation',
      icon: Clock3
    },
    {
      metric: '10x',
      description: 'Faster response to changes',
      icon: Zap
    }
  ];

  const pricingPlans = [
    {
      name: 'Autonomous Starter',
      price: '$1,999/month',
      description: 'For small-scale autonomous systems',
      features: [
        'Basic autonomous algorithms',
        'Standard monitoring',
        'Email support',
        'Cloud deployment',
        'Basic analytics',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Autonomous Professional',
      price: '$4,999/month',
      description: 'For enterprise autonomous solutions',
      features: [
        'Advanced autonomous algorithms',
        'Real-time monitoring',
        'Priority support',
        'Hybrid deployment',
        'Advanced analytics',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Autonomous Enterprise',
      price: 'Custom',
      description: 'For large-scale autonomous operations',
      features: [
        'Custom autonomous systems',
        'On-premise deployment',
        'Dedicated support team',
        '24/7 monitoring',
        'White-label solutions',
        'Advanced security',
        'Custom reporting',
        'Full customization'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="pt-24 pb-16 px-4">
       </section className="pt-24 pb-16 px-4"> </section className="pt-24 pb-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            </div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div><Settings className="w-4 h-4" />
             </Settings className="w-4 h-4" /> </Settings className="w-4 h-4" /><span>Self-Managing AI Syst</span>e</span>m</span>s</span>
          <//span> <//span> </div>
           <//div> <//div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomou</h1 className="text-5xl md:text-6xl font-bold text-white mb-6">s</h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Syste</span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">m</span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">s</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build intelligent systems that operate independently, make decisions autonomously, and adapt to changi</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">n</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">g</p>
              environments without human interventio<//p>n<//p>.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg">Build Autonomous Syste</a href="/contact" className="cyber-button px-8 py-4 text-lg">m</a href="/contact" className="cyber-button px-8 py-4 text-lg">s</a>
               <//a> <//a><ArrowRight className="w-5 h-5 ml-2" />
             </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /><a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">View De</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">m</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">o</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>

          {/* Capabilities */}
         <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">{capabilities.map((capability, index) =</div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">></div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                </div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"> </div><capability.icon className="w-8 h-8 text-cyan-400" />
               </capability.icon className="w-8 h-8 text-cyan-400" /> </capability.icon className="w-8 h-8 text-cyan-400" /><div className="text-3xl font-bold text-cyan-400 mb-2">{capability.metr</div className="text-3xl font-bold text-cyan-400 mb-2">i</div className="text-3xl font-bold text-cyan-400 mb-2">c</div>}</div>
               <//div> <//div><div className="text-gray-300">{capability.descripti</div className="text-gray-300">o</div className="text-gray-300">n</div>}</div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Autonomous AI Capabilitie</h2 className="text-4xl font-bold text-white mb-6">s</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our autonomous systems platform provides the intelligence and capabilities needed f</p className="text-xl text-gray-300 max-w-3xl mx-auto">o</p className="text-xl text-gray-300 max-w-3xl mx-auto">r</p>
              truly independent operation<//p>.<//p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"><div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"> </div><feature.icon className="w-6 h-6 text-cyan-400" />
               </feature.icon className="w-6 h-6 text-cyan-400" /> </feature.icon className="w-6 h-6 text-cyan-400" /><h3 className="text-xl font-semibold text-white mb-3">{feature.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{feature.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-2">{feature.benefits.map((benefit, idx) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={idx} className="flex items-center text-sm text-gray-300">
                     </li key={idx} className="flex items-center text-sm text-gray-300"> </li key={idx} className="flex items-center text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefi</CheckCircle className="w-4 h-4 text-green-400 mr-2" >t</CheckCircle className="w-4 h-4 text-green-400 mr-2" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Applications Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Autonomous System Application</h2 className="text-4xl font-bold text-white mb-6">s</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how autonomous AI systems are transforming industries and enabling new possibilities</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors">
               </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"> </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"><div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"> </div><app.icon className="w-6 h-6 text-purple-400" />
               </app.icon className="w-6 h-6 text-purple-400" /> </app.icon className="w-6 h-6 text-purple-400" /><h3 className="text-xl font-semibold text-white mb-3">{app.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{app.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><div className="space-y-2">{app.useCases.map((useCase, idx) =</div className="space-y-2">></div className="space-y-2"> </div>(</div>
                   <//div> <//div><div key={idx} className="flex items-center text-sm text-purple-300">
                    </div key={idx} className="flex items-center text-sm text-purple-300"> </div key={idx} className="flex items-center text-sm text-purple-300"> </div><Target className="w-4 h-4 mr-2" >{useCas</Target className="w-4 h-4 mr-2" >e</Target className="w-4 h-4 mr-2" >}</Target>
                  <//Target> <//Target> </Target>
                  ))}
              <//Target> <//Target> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Autonomous Systems Plan</h2 className="text-4xl font-bold text-white mb-6">s</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the right plan for your autonomous system needs</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => </div className="grid md:grid-cols-3 gap-8">(</div className="grid md:grid-cols-3 gap-8"><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular &</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>&</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}> </div>(</div>
                 <//div> <//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popu</span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">l</span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">a</span>r</span>
                <//span> <//span> </div>
                )}
               <//div> <//div><div className="text-center mb-6">
                </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.pric</div className="text-4xl font-bold text-cyan-400 mb-2">e</div className="text-4xl font-bold text-cyan-400 mb-2">}</div><p className="text-gray-300">{plan.description</p className="text-gray-300">}</p className="text-gray-300"><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) =></ul className="space-y-3 mb-8"> </ul className="space-y-3 mb-8">(</ul>
                   <//ul> <//ul><li key={idx} className="flex items-center text-gray-300">
                     </li key={idx} className="flex items-center text-gray-300"> </li key={idx} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >{featur</CheckCircle className="w-5 h-5 text-green-400 mr-3" >e</CheckCircle className="w-5 h-5 text-green-400 mr-3" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
               <//CheckCircle> <//CheckCircle><a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>Get Start</a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>e</a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>d</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="container mx-auto max-w-4xl text-center">
        </div className="container mx-auto max-w-4xl text-center"> </div className="container mx-auto max-w-4xl text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous System</h2 className="text-4xl font-bold text-white mb-6">s</h2 className="text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Start building intelligent systems that operate independently and adapt to your need</p className="text-xl text-gray-300 mb-8">s</p className="text-xl text-gray-300 mb-8">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Buildi</a href="/contact" className="cyber-button px-8 py-4 text-lg">n</a href="/contact" className="cyber-button px-8 py-4 text-lg">g</a>
             <//a> <//a><ArrowRight className="w-5 h-5 ml-2" />
           </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /><a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule De</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">m</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">o</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default AIAutonomousSystemsPage<//div>;<//div>