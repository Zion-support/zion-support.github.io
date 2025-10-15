import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Cloud,
  Thermometer,
  Wind,
  Droplets,
  Sun,
  Moon,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Globe,
  Zap,
  Smartphone,
  Database,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Activity
} from 'lucide-react';

const AIClimatePredictionEnginePage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: 'Weather Forecasting',
      description: 'Advanced AI models predict weather patterns with 95% accuracy up to 14 days ahead',
      benefits: ['Hyperlocal predictions', 'Real-time updates', 'Severe weather alerts']
    },
    {
      icon: <Thermometer className="w-6 h-6 text-red-400" />,
      title: 'Climate Analytics',
      description: 'Long-term climate trend analysis and seasonal pattern recognition',
      benefits: ['Historical data analysis', 'Trend identification', 'Climate risk assessment']
    },
    {
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      title: 'Renewable Energy Optimization',
      description: 'Predict optimal conditions for solar, wind, and hydro energy generation',
      benefits: ['Energy production forecasts', 'Grid optimization', 'Cost savings']
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: 'Precipitation Modeling',
      description: 'Accurate rainfall and snowfall predictions for agriculture and water management',
      benefits: ['Crop planning', 'Flood prevention', 'Water resource management']
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: 'Agricultural Intelligence',
      description: 'AI-powered insights for crop planning, irrigation, and pest management',
      benefits: ['Yield optimization', 'Resource efficiency', 'Risk mitigation']
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      title: 'Environmental Monitoring',
      description: 'Real-time air quality, pollution, and environmental health tracking',
      benefits: ['Health alerts', 'Compliance monitoring', 'Sustainability metrics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$79',
      period: '/month',
      description: 'Perfect for small farms and local businesses',
      features: [
        '7-day weather forecasts',
        'Basic climate data',
        'Email alerts',
        'Mobile app access',
        'API access (1,000 calls/month)',
        'Standard support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for agricultural operations and energy companies',
      features: [
        '14-day weather forecasts',
        'Advanced climate analytics',
        'Custom alerts & notifications',
        'Multi-user access (10 users)',
        'API access (10,000 calls/month)',
        'Priority support',
        'Custom integrations',
        'Historical data access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and government agencies',
      features: [
        '30-day weather forecasts',
        'Full climate intelligence suite',
        'Real-time monitoring dashboards',
        'Unlimited users',
        'Unlimited API access',
        '24/7 dedicated support',
        'Custom model training',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Agriculture',
      description: 'Optimize crop planning and irrigation with precise weather predictions',
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      benefits: ['Increase crop yields by 25%', 'Reduce water usage by 30%', 'Minimize weather-related losses']
    },
    {
      title: 'Renewable Energy',
      description: 'Maximize energy production from solar and wind sources',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      benefits: ['Optimize energy generation', 'Reduce operational costs', 'Improve grid stability']
    },
    {
      title: 'Logistics & Transportation',
      description: 'Plan routes and operations based on weather conditions',
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      benefits: ['Reduce delays by 40%', 'Lower fuel costs', 'Improve safety']
    },
    {
      title: 'Insurance',
      description: 'Assess climate risks and optimize policy pricing',
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      benefits: ['Accurate risk assessment', 'Better pricing models', 'Reduced claims']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      company: 'GreenFields Agriculture',
      role: 'Chief Agronomist',
      content: 'The climate prediction engine has revolutionized our farming operations. We\'ve increased our crop yields by 30% while reducing water usage significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      company: 'SolarTech Energy',
      role: 'Operations Director',
      content: 'The renewable energy optimization features help us maximize our solar farm efficiency. We\'ve seen a 20% increase in energy production.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      company: 'Climate Research Institute',
      role: 'Research Director',
      content: 'The accuracy of the climate models is exceptional. It\'s become an essential tool for our research and policy recommendations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const dataSources = [
    { name: 'NOAA', description: 'National Oceanic and Atmospheric Administration' },
    { name: 'NASA', description: 'National Aeronautics and Space Administration' },
    { name: 'ECMWF', description: 'European Centre for Medium-Range Weather Forecasts' },
    { name: 'JMA', description: 'Japan Meteorological Agency' },
    { name: 'BOM', description: 'Bureau of Meteorology Australia' },
    { name: 'Environment Canada', description: 'Canadian Weather Service' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Advanced Weather & Climate Intelligence | Zion Tech Group</title>
        <meta name="description" content="Harness the power of AI for accurate weather forecasting, climate analytics, and renewable energy optimization. Transform your operations with our climate prediction engine." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate analytics, renewable energy optimization, agricultural intelligence, environmental monitoring" />
        <meta property="og:title" content="AI Climate Prediction Engine - Advanced Weather & Climate Intelligence" />
        <meta property="og:description" content="Harness the power of AI for accurate weather forecasting, climate analytics, and renewable energy optimization." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-climate-prediction-engine" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              AI-Powered Climate Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Prediction Engine
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Predict weather patterns, optimize renewable energy, and make data-driven decisions 
              with our advanced AI climate prediction engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">14</div>
                <div className="text-gray-300 text-sm">Days Forecast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Climate Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI climate prediction engine combines machine learning, satellite data, and atmospheric modeling 
              to deliver unparalleled weather and climate insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our climate prediction engine serves diverse industries with tailored solutions for their specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-left">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI models are trained on data from the world's most reliable meteorological organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{source.name.charAt(0)}</span>
                </div>
                <div className="text-gray-300 font-medium text-sm mb-1">{source.name}</div>
                <div className="text-gray-400 text-xs">{source.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your climate intelligence needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations worldwide are using our climate prediction engine to drive success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness Climate Intelligence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join leading organizations using our AI climate prediction engine to make smarter decisions 
            and optimize their operations with accurate weather and climate data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIClimatePredictionEnginePage;