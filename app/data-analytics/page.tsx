import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Database, Brain, Zap, Globe, DollarSign, Clock, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataAnalyticsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const analyticsServices = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions to consolidate all your business data in one secure location.',
      features: ['Data integration', 'ETL processes', 'Data quality management', 'Scalable storage'],
      pricing: 'Starting at $2,000/month',
      link: '/data-warehousing',
      popular: true,
      duration: '4-8 weeks'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models to forecast trends, customer behavior, and business outcomes.',
      features: ['Machine learning models', 'Trend forecasting', 'Risk assessment', 'Performance prediction'],
      pricing: 'Starting at $3,500/month',
      link: '/predictive-analytics',
      popular: true,
      duration: '6-12 weeks'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Custom Dashboards',
      description: 'Interactive dashboards and visualizations tailored to your business needs and KPIs.',
      features: ['Real-time visualization', 'Custom KPIs', 'Interactive charts', 'Mobile responsive'],
      pricing: 'Starting at $1,500',
      link: '/custom-dashboards',
      popular: false,
      duration: '2-4 weeks'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Live data processing and analysis to provide instant insights and decision support.',
      features: ['Stream processing', 'Real-time alerts', 'Live dashboards', 'Instant insights'],
      pricing: 'Starting at $2,500/month',
      link: '/real-time-analytics',
      popular: true,
      duration: '3-6 weeks'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models for classification, regression, clustering, and recommendation systems.',
      features: ['Custom algorithms', 'Model training', 'A/B testing', 'Performance optimization'],
      pricing: 'Starting at $4,000',
      link: '/machine-learning-models',
      popular: false,
      duration: '8-16 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions to transform raw data into actionable business insights.',
      features: ['Data mining', 'Report generation', 'Ad-hoc analysis', 'Executive summaries'],
      pricing: 'Starting at $2,200/month',
      link: '/business-intelligence',
      popular: true,
      duration: '4-8 weeks'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions based on comprehensive data analysis and insights',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Real-time Insights',
      description: 'Get instant access to critical business metrics and performance indicators',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and AI to uncover hidden patterns and trends in your data',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize business processes through data analysis',
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    }
  ];

  const stats = [
    { number: '95%', label: 'Data Accuracy', icon: <Database className="w-6 h-6 text-blue-400" /> },
    { number: '3x', label: 'Faster Insights', icon: <TrendingUp className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Data Sources', icon: <Globe className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime', icon: <Zap className="w-6 h-6 text-orange-400" /> }
  ];

  const testimonials = [
    {
      name: 'Jennifer Liu',
      role: 'VP of Operations, RetailMax',
      content: 'The predictive analytics solution helped us optimize our inventory management and reduce costs by 30%. The insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      role: 'CEO, FinTech Solutions',
      content: 'Their real-time analytics dashboard gives us instant visibility into our business performance. It\'s been a game-changer for our decision-making.',
      rating: 5
    },
    {
      name: 'Amanda Davis',
      role: 'Marketing Director, GrowthCorp',
      content: 'The custom ML models have significantly improved our customer segmentation and targeting. ROI has increased by 40% since implementation.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Helmet>
        <title>Data Analytics & Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics and business intelligence solutions including data warehousing, predictive analytics, custom dashboards, and machine learning models. Transform your data into actionable insights." />
        <meta name="keywords" content="data analytics, business intelligence, data warehousing, predictive analytics, machine learning, data visualization, real-time analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Data Analytics & BI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform"
              >
                Get Analytics Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Why Choose Our Analytics Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of data-driven decision making with our advanced analytics platform
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Analytics Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive data analytics solutions designed to unlock your business potential
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {analyticsServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-sm text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-[-2px] transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 delay-1700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Ready to Unlock Your Data's Potential?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our analytics solutions can transform your data into competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-white/25"
                  >
                    Get Analytics Assessment
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;