import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  HomeIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AISmartHomeProPage: React.FC = () => {
  const features = [
    {
      icon: HomeIcon,
      title: 'AI-Powered Home Automation',
      description: 'Intelligent automation that learns your habits and preferences to create the perfect living environment automatically.',
      benefit: 'Save 30% on energy costs'
    },
    {
      icon: LightBulbIcon,
      title: 'Smart Lighting Control',
      description: 'Adaptive lighting that adjusts based on time of day, weather, and your activities for optimal comfort and energy efficiency.',
      benefit: 'Reduce lighting costs by 50%'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Security System',
      description: 'AI-powered security with facial recognition, anomaly detection, and automated emergency responses.',
      benefit: '99.9% security accuracy'
    },
    {
      icon: ChartBarIcon,
      title: 'Energy Management',
      description: 'Smart energy monitoring and optimization to reduce your carbon footprint and utility bills.',
      benefit: '40% reduction in energy usage'
    },
    {
      icon: UserGroupIcon,
      title: 'Voice Control Integration',
      description: 'Seamless voice control with natural language processing for all your smart home devices.',
      benefit: 'Control everything with your voice'
    },
    {
      icon: CogIcon,
      title: 'Predictive Maintenance',
      description: 'AI predicts when appliances need maintenance before they break down, saving you money and hassle.',
      benefit: 'Prevent 90% of appliance failures'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 149,
      period: 'month',
      description: 'Perfect for apartments and small homes',
      features: [
        'Up to 20 devices',
        'Basic AI automation',
        'Mobile app control',
        'Voice control',
        'Basic security',
        'Energy monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for medium-sized homes',
      features: [
        'Up to 50 devices',
        'Advanced AI features',
        'Full security suite',
        'Energy optimization',
        'Predictive maintenance',
        'Custom automations',
        '24/7 monitoring',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'For large homes and estates',
      features: [
        'Unlimited devices',
        'Premium AI models',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'Advanced analytics',
        'Multi-zone control',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const smartHomeStats = [
    { metric: '30%', label: 'Energy Savings', color: 'text-green-400' },
    { metric: '99.9%', label: 'Security Accuracy', color: 'text-blue-400' },
    { metric: '50%', label: 'Cost Reduction', color: 'text-purple-400' },
    { metric: '90%', label: 'Failure Prevention', color: 'text-cyan-400' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      company: 'Smart Home Enthusiast',
      content: 'AI Smart Home Pro has transformed our living experience. The energy savings alone paid for the system in the first year.',
      rating: 5,
      savings: '$2,400/year'
    },
    {
      name: 'David Thompson',
      role: 'Tech Executive',
      company: 'Innovation Labs',
      content: 'The AI automation is incredible. It learns our patterns and creates the perfect environment without us even thinking about it.',
      rating: 5,
      savings: '$1,800/year'
    },
    {
      name: 'Sarah Johnson',
      role: 'Family Manager',
      company: 'Busy Parent',
      content: 'The security features give me peace of mind, and the energy management has significantly reduced our utility bills.',
      rating: 5,
      savings: '$3,200/year'
    }
  ];

  const smartDevices = [
    'Smart Thermostats',
    'Intelligent Lighting',
    'Security Cameras',
    'Door Locks',
    'Window Sensors',
    'Motion Detectors',
    'Smoke Detectors',
    'Water Leak Sensors',
    'Smart Outlets',
    'Climate Control',
    'Entertainment Systems',
    'Garden Irrigation'
  ];

  return (
    <>
      <SEOHead
        title="AI Smart Home Pro - Intelligent Home Automation | Zion Tech Group"
        description="Transform your home with AI-powered automation, smart security, and energy management. Save 30% on energy costs and enjoy 99.9% security accuracy with intelligent home control."
        keywords="AI smart home, home automation, smart security, energy management, voice control, home AI, intelligent lighting, smart thermostats"
        canonicalUrl="https://ziontechgroup.com/ai-smart-home-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <HomeIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-300 text-sm font-medium">AI-Powered Home Automation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Smart Home Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your home with intelligent automation, smart security, and energy management. Save <span className="text-indigo-400 font-semibold">30% on energy costs</span> and enjoy <span className="text-purple-400 font-semibold">99.9% security accuracy</span> with AI-powered home control.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Smart Home Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {smartHomeStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Intelligent <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Home Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of home living with AI-powered automation and smart device integration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Devices Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Compatible <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Smart Devices</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Control and automate a wide range of smart home devices with our AI-powered platform
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {smartDevices.map((device, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CogIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{device}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Smart <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Home Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your smart home needs. All plans include our core AI features and device support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-xl shadow-indigo-500/20' 
                    : 'border-slate-700 hover:border-indigo-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Loved by <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Homeowners</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Smart Home Pro is transforming homes and saving money
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-lg font-bold text-green-400">{testimonial.savings}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-slate-800/30">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Make Your Home Smart Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of homeowners who have transformed their living experience with AI Smart Home Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISmartHomeProPage;