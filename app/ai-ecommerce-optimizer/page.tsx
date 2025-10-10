'use client';
import React from 'react';
import { BarChart, Target, Zap, TrendingUp, Users, Shield, Globe, CreditCard, Package, Star, CheckCircle, ArrowRight, Brain, Database, Search, Bot, Home, Navigation, Zap, Target, Shield, Users, Star, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEcommerceOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior, purchase patterns, and market trends to optimize your e-commerce strategy.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Customer segmentation', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'Smart Product Recommendations',
      description: 'Intelligent recommendation engine that increases conversion rates by suggesting relevant products to customers.',
      benefits: ['Personalized suggestions', 'Cross-selling optimization', 'Upselling strategies', 'Customer retention']
    },
    {
      icon: Zap,
      title: 'Automated Pricing Optimization',
      description: 'Dynamic pricing strategies that adjust product prices based on demand, competition, and market conditions.',
      benefits: ['Competitive pricing', 'Profit maximization', 'Demand forecasting', 'Price elasticity analysis']
    },
    {
      icon: Users,
      title: 'Customer Journey Optimization',
      description: 'AI-driven customer journey mapping and optimization to improve user experience and increase conversions.',
      benefits: ['Journey mapping', 'Funnel optimization', 'A/B testing', 'Conversion tracking']
    },
    {
      icon: Shield,
      title: 'Fraud Detection & Prevention',
      description: 'Advanced fraud detection system that protects your business from fraudulent transactions and chargebacks.',
      benefits: ['Real-time monitoring', 'Risk assessment', 'Chargeback prevention', 'Security alerts']
    },
    {
      icon: Globe,
      title: 'Multi-Channel Optimization',
      description: 'Seamless optimization across all sales channels including web, mobile, social media, and marketplaces.',
      benefits: ['Omnichannel strategy', 'Channel performance', 'Unified analytics', 'Cross-platform optimization']
    }
  ];

  const optimizationAreas = [
    {
      title: 'Product Catalog Management',
      description: 'AI-powered product categorization, tagging, and optimization for better searchability and discoverability.',
      icon: Package,
      metrics: ['40% faster product setup', '60% better search ranking', '35% increased visibility']
    },
    {
      title: 'Inventory Optimization',
      description: 'Smart inventory management with demand forecasting and automated reorder points.',
      icon: Database,
      metrics: ['50% reduction in stockouts', '30% lower inventory costs', '25% improved turnover']
    },
    {
      title: 'Search & Filter Enhancement',
      description: 'Intelligent search algorithms and dynamic filtering to help customers find products quickly.',
      icon: Search,
      metrics: ['45% faster product discovery', '55% improved search accuracy', '40% higher engagement']
    },
    {
      title: 'Checkout Process Optimization',
      description: 'Streamlined checkout experience with AI-powered form completion and payment optimization.',
      icon: CreditCard,
      metrics: ['35% reduction in cart abandonment', '50% faster checkout', '25% higher completion rate']
    },
    {
      title: 'Mobile Experience Enhancement',
      description: 'Mobile-first optimization with responsive design and touch-friendly interfaces.',
      icon: Mobile,
      metrics: ['60% better mobile performance', '45% increased mobile conversions', '30% faster load times']
    },
    {
      title: 'Customer Support Automation',
      description: 'AI-powered chatbots and automated support systems for 24/7 customer assistance.',
      icon: Bot,
      metrics: ['80% faster response times', '70% customer satisfaction', '50% reduced support costs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small e-commerce businesses',
      features: [
        'Up to 1,000 products',
        'Basic analytics dashboard',
        'Standard recommendations',
        'Email support',
        'Mobile optimization',
        'Basic fraud detection'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing online stores',
      features: [
        'Up to 10,000 products',
        'Advanced analytics & insights',
        'AI-powered recommendations',
        'Priority support',
        'Multi-channel optimization',
        'Advanced fraud detection',
        'A/B testing tools',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting',
        'API access',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechGear Store',
      role: 'E-commerce Director',
      content: 'AI E-commerce Optimizer increased our conversion rate by 45% and reduced cart abandonment by 35%. The AI recommendations are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Fashion Forward',
      role: 'CEO',
      content: 'The pricing optimization feature alone paid for itself in the first month. We saw a 30% increase in profit margins.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Home & Garden Plus',
      role: 'Marketing Manager',
      content: 'The customer journey optimization helped us understand our customers better and increased our average order value by 25%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="pt-24 pb-16 px-4">
       </section className="pt-24 pb-16 px-4"> </section className="pt-24 pb-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            </div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div><Brain className="w-4 h-4" />
             </Brain className="w-4 h-4" /> </Brain className="w-4 h-4" /><span>AI-Powered E-commerce Optimizat</span>i</span>o</span>n</span>
          <//span> <//span> </div>
           <//div> <//div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI E-commerc</h1 className="text-5xl md:text-6xl font-bold text-white mb-6">e</h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Optimiz</span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">e</span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">r</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your online store with AI-powered optimization. Increase conversions, reduce cart abandonmen</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">t</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,</p>
              and maximize revenue with intelligent automation and analytic<//p>s<//p>.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg">Get Started Tod</a href="/contact" className="cyber-button px-8 py-4 text-lg">a</a href="/contact" className="cyber-button px-8 py-4 text-lg">y</a>
               <//a> <//a><ArrowRight className="w-5 h-5 ml-2" />
             </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /><a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">View De</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">m</a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">o</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>

          {/* Key Metrics */}
         <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
           </div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"> </div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-cyan-400 mb-2">4</div className="text-3xl font-bold text-cyan-400 mb-2">5</div>%</div>
               <//div> <//div><div className="text-gray-300">Conversion Incre</div className="text-gray-300">a</div className="text-gray-300">s</div>e</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">3</div className="text-3xl font-bold text-purple-400 mb-2">5</div>%</div>
               <//div> <//div><div className="text-gray-300">Cart Abandonment Reduct</div className="text-gray-300">i</div className="text-gray-300">o</div>n</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-green-400 mb-2">3</div className="text-3xl font-bold text-green-400 mb-2">0</div>%</div>
               <//div> <//div><div className="text-gray-300">Revenue Gro</div className="text-gray-300">w</div className="text-gray-300">t</div>h</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-yellow-400 mb-2">5</div className="text-3xl font-bold text-yellow-400 mb-2">0</div>%</div>
               <//div> <//div><div className="text-gray-300">Faster Check</div className="text-gray-300">o</div className="text-gray-300">u</div>t</div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features for E-commerce Succes</h2 className="text-4xl font-bold text-white mb-6">s</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI-powered platform provides comprehensive optimization tools to maximize your online store's performance</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
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

      {/* Optimization Areas */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Comprehensive E-commerce Optimizatio</h2 className="text-4xl font-bold text-white mb-6">n</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Every aspect of your online store optimized with AI for maximum performance and customer satisfaction</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{optimizationAreas.map((area, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors">
               </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"> </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"><div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"> </div><area.icon className="w-6 h-6 text-purple-400" />
               </area.icon className="w-6 h-6 text-purple-400" /> </area.icon className="w-6 h-6 text-purple-400" /><h3 className="text-xl font-semibold text-white mb-3">{area.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{area.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><div className="space-y-2">{area.metrics.map((metric, idx) =</div className="space-y-2">></div className="space-y-2"> </div>(</div>
                   <//div> <//div><div key={idx} className="flex items-center text-sm text-green-400">
                    </div key={idx} className="flex items-center text-sm text-green-400"> </div key={idx} className="flex items-center text-sm text-green-400"> </div><TrendingUp className="w-4 h-4 mr-2" >{metri</TrendingUp className="w-4 h-4 mr-2" >c</TrendingUp className="w-4 h-4 mr-2" >}</TrendingUp>
                  <//TrendingUp> <//TrendingUp> </TrendingUp>
                  ))}
              <//TrendingUp> <//TrendingUp> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">Choose Your Optimization Pla</h2 className="text-4xl font-bold text-white mb-6">n</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to scale with your business growth</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => </div className="grid md:grid-cols-3 gap-8">(</div className="grid md:grid-cols-3 gap-8"><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
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

      {/* Testimonials */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="container mx-auto max-w-6xl">
         </div className="container mx-auto max-w-6xl"> </div className="container mx-auto max-w-6xl"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-6">What Our Customers Sa</h2 className="text-4xl font-bold text-white mb-6">y</h2 className="text-4xl font-bold text-white mb-6"><p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of successful e-commerce businesses using AI optimization</p className="text-xl text-gray-300 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 max-w-3xl mx-auto"><div className="grid md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) =</div className="grid md:grid-cols-3 gap-8">></div className="grid md:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
               </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6"> </div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6"><div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) =></div className="flex items-center mb-4"> </div className="flex items-center mb-4">(</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >}</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" ><p className="text-gray-300 mb-4 italic">"{testimonial.content</p className="text-gray-300 mb-4 italic">}</p className="text-gray-300 mb-4 italic">"</p>
               <//p> <//p><div>
                  </div><div className="font-semibold text-white">{testimonial.name</div className="font-semibold text-white">}</div className="font-semibold text-white"><div className="text-cyan-400 text-sm">{testimonial.ro</div className="text-cyan-400 text-sm">l</div className="text-cyan-400 text-sm">e</div>}</div>
               <//div> <//div><div className="text-gray-400 text-sm">{testimonial.compa</div className="text-gray-400 text-sm">n</div className="text-gray-400 text-sm">y</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="container mx-auto max-w-4xl text-center">
        </div className="container mx-auto max-w-4xl text-center"> </div className="container mx-auto max-w-4xl text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your E-commerce Stor</h2 className="text-4xl font-bold text-white mb-6">e</h2 className="text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Start your AI-powered optimization journey today and see immediate result</p className="text-xl text-gray-300 mb-8">s</p className="text-xl text-gray-300 mb-8">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Free Tri</a href="/contact" className="cyber-button px-8 py-4 text-lg">a</a href="/contact" className="cyber-button px-8 py-4 text-lg">l</a>
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

export default AIEcommerceOptimizerPage<//div>;<//div>