import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Wifi, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Shield,
  Globe,
  Smartphone,
  Server,
  FileText,
  Activity,
  DollarSign,
  Users,
  Eye,
  MousePointer,
  Filter,
  Settings,
  Database,
  Network,
  Key,
  Car,
  Lightbulb,
  Trash2,
  Droplets,
  Wind;
} from 'lucide-react';
'use client';






const AISmartCitySolutionsPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI algorithms analyze city data to optimize operations and services',
      benefits: ['Real-time insights', 'Predictive analytics', 'Automated decision making']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-400" />,
      title: '5G Infrastructure',
      description: 'Ultra-fast 5G networks enable real-time communication and data processing',
      benefits: ['Low latency', 'High bandwidth', 'Massive IoT connectivity']
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      title: 'IoT Integration',
      description: 'Connect and manage thousands of sensors and devices across the city',
      benefits: ['Sensor networks', 'Device management', 'Data collection']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Smart Analytics Dashboard',
      description: 'Comprehensive dashboard for monitoring and managing city operations',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Trend analysis']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Systems',
      description: 'Automate city services and infrastructure for improved efficiency',
      benefits: ['Traffic management', 'Energy optimization', 'Waste management']
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Cybersecurity',
      description: 'Protect critical city infrastructure with advanced security measures',
      benefits: ['Network security', 'Data protection', 'Threat monitoring']
    }
  ];

  const smartCityModules = [
    {
      module: 'Smart Traffic Management',
      icon: <Car className="w-6 h-6 text-cyan-400" />,
      description: 'AI-powered traffic optimization and congestion management',
      benefits: ['Traffic flow optimization', 'Accident prevention', 'Emission reduction']
    },
    {
      module: 'Smart Energy Grid',
      icon: <Lightbulb className="w-6 h-6 text-green-400" />,
      description: 'Intelligent energy distribution and consumption management',
      benefits: ['Load balancing', 'Renewable integration', 'Cost optimization']
    },
    {
      module: 'Smart Waste Management',
      icon: <Trash2 className="w-6 h-6 text-purple-400" />,
      description: 'Automated waste collection and recycling optimization',
      benefits: ['Route optimization', 'Fill level monitoring', 'Recycling tracking']
    },
    {
      module: 'Smart Water Management',
      icon: <Droplets className="w-6 h-6 text-orange-400" />,
      description: 'Intelligent water distribution and quality monitoring',
      benefits: ['Leak detection', 'Quality monitoring', 'Consumption tracking']
    },
    {
      module: 'Smart Air Quality',
      icon: <Wind className="w-6 h-6 text-red-400" />,
      description: 'Real-time air quality monitoring and pollution control',
      benefits: ['Pollution tracking', 'Health alerts', 'Emission monitoring']
    },
    {
      module: 'Smart Public Safety',
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      description: 'AI-powered surveillance and emergency response systems',
      benefits: ['Crime prevention', 'Emergency response', 'Public safety']
    }
  ];

  const pricingPlans = [
    {
      name: 'Pilot Program',
      price: '$50,000',
      period: '/project',
      description: 'Perfect for small cities and pilot implementations',
      features: [
        'Up to 1,000 sensors',
        'Basic AI analytics',
        'Single module implementation',
        '6-month support',
        'Training included',
        'Basic reporting'
      ],
      popular: false;
    },
    {
      name: 'City Implementation',
      price: '$250,000',
      period: '/project',
      description: 'Ideal for medium-sized cities and comprehensive deployments',
      features: [
        'Up to 10,000 sensors',
        'Advanced AI features',
        'Multiple modules',
        '12-month support',
        'Dedicated team',
        'Advanced analytics',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Metropolitan Solution',
      price: '$1,000,000',
      period: '/project',
      description: 'For large metropolitan areas and mega-cities',
      features: [
        'Unlimited sensors',
        'All AI features',
        'Complete city integration',
        '24/7 support',
        'Custom development',
        'White-label solution',
        'Advanced security'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'Mayor Sarah Williams',
      company: 'City of Techville',
      content: 'The AI Smart City Solutions have transformed our city operations. Traffic congestion is down 40%, energy consumption reduced by 25%, and citizen satisfaction has increased significantly.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Dr. Michael Chen',
      company: 'Urban Planning Director',
      content: 'The predictive analytics help us make data-driven decisions for city planning. We can now anticipate infrastructure needs and optimize resource allocation like never before.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'City Manager',
      content: 'The automated systems have reduced operational costs by 30% while improving service quality. Our citizens are happier and our city is more sustainable.',
      rating: 5,
      avatar: 'LR'
    }
  ];

  const stats = [
    { number: '40%', label: 'Reduction in Traffic Congestion', icon: <Car className="w-6 h-6" /> },
    { number: '25%', label: 'Energy Consumption Reduction', icon: <Lightbulb className="w-6 h-6" /> },
    { number: '30%', label: 'Operational Cost Savings', icon: <DollarSign className="w-6 h-6" /> },
    { number: '95%', label: 'Citizen Satisfaction Rate', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Smart City Solutions - Zion Tech Group | Intelligent Urban Infrastructure</title>
        <meta name="description" content="Transform your city with our AI-powered Smart City Solutions. Reduce traffic by 40%, save 25% energy, and improve citizen satisfaction with intelligent urban infrastructure." />
        <meta name="keywords" content="AI smart city, smart city solutions, urban infrastructure, IoT, 5G, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Smart City{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Solutions;
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your city with our AI-powered Smart City Solutions. Reduce traffic by 40%, 
            save 25% energy, and improve citizen satisfaction with intelligent urban infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get City Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link;
              to="/5g-implementation" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View 5G Services;
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Smart City Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Smart City Solutions provide comprehensive urban infrastructure management;
              with cutting-edge artificial intelligence and IoT technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Smart City Modules Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Smart City Modules</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive modules to transform every aspect of urban life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartCityModules.map((module, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {module.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{module.module}</h3>
                </div>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <div className="space-y-1">
                  {module.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-400">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Implementation</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible implementation options designed for cities of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link;
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What City Leaders Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join cities worldwide that have transformed their urban infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your City?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free city assessment and see how our AI Smart City Solutions;
              can revolutionize your urban infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Assessment;
                <Building2 className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More;
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
}