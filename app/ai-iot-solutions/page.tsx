'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Wifi, Zap, Shield, BarChart, Target, CheckCircle, ArrowRight, Star, Users, Globe, Database, Settings, Lock, TrendingUp, Cpu, Eye, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiIotSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Device Management',
      description: 'Intelligent IoT device management with predictive maintenance and automated optimization.',
      benefits: ['Predictive maintenance', 'Automated updates', 'Performance optimization', 'Remote diagnostics']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Advanced analytics and insights from IoT data streams with AI-powered pattern recognition.',
      benefits: ['Real-time insights', 'Pattern recognition', 'Anomaly detection', 'Predictive analytics']
    },
    {
      icon: Shield,
      title: 'IoT Security & Privacy',
      description: 'Comprehensive security solutions for IoT networks with AI-powered threat detection.',
      benefits: ['Threat detection', 'Data encryption', 'Privacy protection', 'Compliance management']
    },
    {
      icon: Zap,
      title: 'Edge AI Processing',
      description: 'AI processing at the edge for faster response times and reduced bandwidth requirements.',
      benefits: ['Low latency', 'Bandwidth optimization', 'Offline capabilities', 'Real-time decisions']
    }
  ];

  const solutions = [
    {
      title: 'Smart Manufacturing IoT',
      description: 'Complete IoT solution for smart manufacturing with AI-powered quality control and predictive maintenance.',
      icon: Settings,
      features: ['Predictive maintenance', 'Quality control', 'Production optimization', 'Energy management'],
      price: 'Starting at $15,000/month',
      marketPrice: '$30,000-80,000/month',
      benefits: ['30% efficiency increase', '50% maintenance cost reduction', '99.5% quality rate']
    },
    {
      title: 'Smart City Infrastructure',
      description: 'Comprehensive smart city IoT platform with traffic management, environmental monitoring, and citizen services.',
      icon: Globe,
      features: ['Traffic optimization', 'Environmental monitoring', 'Smart lighting', 'Waste management'],
      price: 'Starting at $50,000/month',
      marketPrice: '$100,000-300,000/month',
      benefits: ['40% traffic reduction', '25% energy savings', 'Improved citizen satisfaction']
    },
    {
      title: 'Healthcare IoT Monitoring',
      description: 'AI-powered healthcare IoT for patient monitoring, medical device management, and health analytics.',
      icon: Users,
      features: ['Patient monitoring', 'Medical device integration', 'Health analytics', 'Emergency alerts'],
      price: 'Starting at $20,000/month',
      marketPrice: '$40,000-120,000/month',
      benefits: ['Improved patient outcomes', 'Reduced readmissions', 'Real-time health insights']
    },
    {
      title: 'Agricultural IoT Platform',
      description: 'Smart farming solution with precision agriculture, crop monitoring, and automated irrigation.',
      icon: Target,
      features: ['Crop monitoring', 'Precision irrigation', 'Weather integration', 'Yield optimization'],
      price: 'Starting at $8,000/month',
      marketPrice: '$15,000-40,000/month',
      benefits: ['20% yield increase', '30% water savings', 'Reduced pesticide use']
    },
    {
      title: 'Retail IoT Analytics',
      description: 'Smart retail solution with customer behavior analysis, inventory optimization, and personalized experiences.',
      icon: Smartphone,
      features: ['Customer analytics', 'Inventory optimization', 'Personalized experiences', 'Loss prevention'],
      price: 'Starting at $12,000/month',
      marketPrice: '$25,000-60,000/month',
      benefits: ['25% sales increase', '15% inventory reduction', 'Enhanced customer experience']
    },
    {
      title: 'Energy Management IoT',
      description: 'Smart energy management with AI-powered optimization, renewable integration, and demand response.',
      icon: Zap,
      features: ['Energy optimization', 'Renewable integration', 'Demand response', 'Grid management'],
      price: 'Starting at $18,000/month',
      marketPrice: '$35,000-90,000/month',
      benefits: ['35% energy savings', '50% carbon reduction', 'Grid stability improvement']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Smart factories with predictive maintenance, quality control, and production optimization.',
      icon: Settings,
      stats: '40% efficiency improvement'
    },
    {
      title: 'Healthcare',
      description: 'Connected medical devices, patient monitoring, and AI-powered diagnostics.',
      icon: Users,
      stats: '60% faster diagnosis'
    },
    {
      title: 'Agriculture',
      description: 'Precision farming with IoT sensors, AI analytics, and automated systems.',
      icon: Target,
      stats: '30% yield increase'
    },
    {
      title: 'Smart Cities',
      description: 'Urban infrastructure optimization with traffic management and environmental monitoring.',
      icon: Globe,
      stats: '50% traffic reduction'
    },
    {
      title: 'Retail',
      description: 'Smart stores with customer analytics, inventory optimization, and personalized experiences.',
      icon: Smartphone,
      stats: '25% sales growth'
    },
    {
      title: 'Energy',
      description: 'Smart grids with renewable integration, demand response, and energy optimization.',
      icon: Zap,
      stats: '45% energy savings'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IoT solutions for smart manufacturing, cities, healthcare, and agriculture. Transform your business with intelligent connected devices." />
        <meta name="keywords" content="AI IoT, smart manufacturing, smart cities, healthcare IoT, agricultural IoT, edge computing, IoT analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI IoT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with AI-powered Internet of Things solutions. From smart manufacturing 
                to connected cities, our IoT platforms deliver intelligent automation and real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Explore IoT Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI IoT Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI IoT Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Proven Results:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-semibold">{solution.price}</span>
                      <span className="text-gray-400 text-sm line-through">{solution.marketPrice}</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <div className="text-2xl font-bold text-green-400">{industry.stats}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Connect with AI IoT?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with intelligent IoT solutions. Contact our IoT experts for a 
                consultation and discover how AI-powered connected devices can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Schedule IoT Demo
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Email Our IoT Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiIotSolutionsPage;