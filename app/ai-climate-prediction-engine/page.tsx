import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Brain, 
  BarChart3, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Users,
  Sparkles,
  Target,
  TrendingUp,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Zap,
  Activity,
  Database,
  Search,
  Bell,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Leaf,
  Mountain,
  Waves,
  Snowflake
} from 'lucide-react';

const AIClimatePredictionEnginePage: React.FC = () => {
  const features = [
    {
      title: 'Advanced Weather Modeling',
      description: 'State-of-the-art machine learning models that predict weather patterns with 95%+ accuracy up to 14 days in advance.',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Climate Change Analysis',
      description: 'Long-term climate trend analysis and predictions using historical data and advanced AI algorithms.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Extreme Weather Alerts',
      description: 'Real-time alerts for hurricanes, tornadoes, floods, and other extreme weather events with precise location tracking.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Agricultural Forecasting',
      description: 'Specialized predictions for farmers including rainfall, temperature, and crop yield forecasts.',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'Solar and wind energy production forecasts to optimize renewable energy grid management.',
      icon: <Sun className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive environmental impact analysis for businesses and government agencies.',
      icon: <Mountain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '7-day weather forecasts',
        'Basic climate data',
        'Email alerts',
        'API access (1,000 calls/month)',
        'Email support',
        '1 user account'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for medium businesses and researchers',
      features: [
        '14-day weather forecasts',
        'Advanced climate modeling',
        'Real-time alerts',
        'API access (10,000 calls/month)',
        'Priority support',
        'Up to 5 user accounts',
        'Custom dashboards',
        'Data export'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations and government agencies',
      features: [
        '30-day weather forecasts',
        'Full climate prediction suite',
        'Custom AI models',
        'Unlimited API access',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'White-label options',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'National Weather Service',
      role: 'Senior Meteorologist',
      content: 'The AI Climate Prediction Engine has revolutionized our forecasting capabilities. The accuracy is unprecedented and has saved countless lives through better early warning systems.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Johnson',
      company: 'Green Energy Corp',
      role: 'Operations Director',
      content: 'The renewable energy optimization features have increased our solar and wind farm efficiency by 23%. The predictions are incredibly accurate.',
      rating: 5,
      avatar: 'MJ'
    },
    {
      name: 'Elena Rodriguez',
      company: 'Agricultural Research Institute',
      role: 'Climate Scientist',
      content: 'The agricultural forecasting has helped farmers optimize their planting and harvesting schedules. The crop yield predictions are remarkably precise.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '95.2%', label: 'Forecast Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '14 Days', label: 'Prediction Range', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Covered', icon: <Globe className="w-6 h-6" /> },
    { number: '1M+', label: 'Data Points Processed Daily', icon: <Database className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: 'Agriculture',
      description: 'Optimize crop planning and irrigation with precise weather and climate predictions.',
      icon: <Leaf className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Renewable Energy',
      description: 'Maximize solar and wind energy production with accurate weather forecasts.',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Disaster Management',
      description: 'Prepare for and respond to extreme weather events with early warning systems.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Urban Planning',
      description: 'Design climate-resilient cities with long-term climate projections.',
      icon: <Mountain className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Insurance',
      description: 'Assess climate risks and develop accurate pricing models for weather-related insurance.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Transportation',
      description: 'Optimize logistics and route planning with weather-aware decision making.',
      icon: <Waves className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Advanced Weather & Climate Forecasting | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered climate prediction engine with 95%+ accuracy. Advanced weather forecasting, climate modeling, and environmental impact assessment for businesses and researchers." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate modeling, environmental AI, weather analytics, climate change analysis, agricultural forecasting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">95%+ Forecast Accuracy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                AI Climate Prediction Engine
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize weather forecasting and climate modeling with our advanced AI-powered prediction engine. 
              Get 95%+ accurate forecasts up to 14 days in advance with real-time climate analysis and environmental insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>View Live Demo</span>
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Climate Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence and machine learning to predict weather patterns, 
                analyze climate trends, and provide actionable environmental insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Climate Prediction Engine serves diverse industries with specialized forecasting solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Climate Intelligence Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your forecasting needs and data requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20 shadow-2xl shadow-blue-500/10' 
                      : 'border-white/20 hover:border-blue-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Climate Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading scientists and organizations say about our AI Climate Prediction Engine
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Predict the Future of Climate
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the forefront of climate science and weather prediction. Start using our AI Climate Prediction Engine today 
              and make data-driven decisions for a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>Schedule Demo</span>
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIClimatePredictionEnginePage;