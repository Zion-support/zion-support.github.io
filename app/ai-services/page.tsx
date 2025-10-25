'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, BarChart, Users, Settings, Shield, Clock, CheckCircle, ArrowRight, Star, Award, TrendingUp, Cpu, Database, Cloud, Code, Smartphone, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, Truck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'analytics',
      title: 'AI Analytics Platform',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: BarChart,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Machine learning models',
        'Data visualization'
      ],
      benefits: [
        'Increase efficiency by 300%',
        'Reduce manual analysis time',
        'Improve decision making',
        'Identify trends and patterns'
      ]
    },
    {
      id: 'automation',
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI workflows.',
      icon: Settings,
      features: [
        'Process automation',
        'Smart routing',
        'Exception handling',
        'Integration capabilities',
        'Custom workflows',
        'Performance monitoring'
      ],
      benefits: [
        'Reduce operational costs',
        'Eliminate human errors',
        'Scale operations efficiently',
        'Improve consistency'
      ]
    },
    {
      id: 'support',
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent AI-powered support solutions.',
      icon: Users,
      features: [
        '24/7 availability',
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Reduce response time',
        'Lower support costs',
        'Scale support operations'
      ]
    },
    {
      id: 'visualization',
      title: 'AI Data Visualization',
      description: 'Create stunning, interactive visualizations powered by artificial intelligence.',
      icon: Target,
      features: [
        'Interactive dashboards',
        'Real-time updates',
        'Custom visualizations',
        'Mobile responsive',
        'Export capabilities',
        'Collaboration tools'
      ],
      benefits: [
        'Better data understanding',
        'Faster insights',
        'Improved communication',
        'Enhanced decision making'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'AI-powered medical diagnosis and patient care solutions',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      name: 'Finance',
      icon: CreditCard,
      description: 'Fraud detection and risk management AI systems',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Predictive maintenance and quality control AI',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Personalized recommendations and inventory management',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Personalized learning and assessment AI tools',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Transportation',
      icon: Truck,
      description: 'Route optimization and autonomous vehicle AI',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'AI Projects Delivered' },
    { icon: Award, value: '99.9%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Clock, value: '24/7', label: 'AI Support' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning and deep learning models'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security to protect your data and AI models'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native solutions that scale with your business'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored AI solutions designed for your specific needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Transform your business with our comprehensive AI services including analytics, automation, customer support, and data visualization solutions."
        keywords={["AI services","artificial intelligence","machine learning","AI analytics","AI automation","AI consulting"]}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From analytics to automation, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact our AI experts to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;