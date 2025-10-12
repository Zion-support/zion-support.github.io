import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Brain, Cloud, Shield, Code, BarChart, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, Globe, Database, Smartphone, Cpu, Lock, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, CheckCircle, ExternalLink } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics.',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Data visualization'],
      price: '$99/month',
      icon: BarChart,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      features: ['24/7 support', 'Multi-language', 'Custom training', 'Analytics'],
      price: '$49/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection system.',
      features: ['Threat detection', 'Real-time alerts', 'Compliance reports', 'Incident response'],
      price: '$199/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for businesses.',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Version control'],
      price: '$79/month',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      features: ['AI writing', 'Content planning', 'SEO optimization', 'Brand consistency'],
      price: '$129/month',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Zion CRM Intelligence',
      description: 'Smart CRM solution with AI-driven customer insights and automation.',
      features: ['Lead scoring', 'Sales forecasting', 'Automation', 'Integration'],
      price: '$149/month',
      icon: Users,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance with instant deployment'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive compliance measures'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows'
    },
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of Micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, business software" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, AI-driven micro software solutions designed to streamline your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                </a>
                <a 
                  href="/contact"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of specialized business tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <a 
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Try Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of our Micro SAAS solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </a>
                  <a 
                    href="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasServicesPage;
