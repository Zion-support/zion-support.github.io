import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Clock,
  Shield,
  Brain
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  pricing: string;
  link: string;
  badge: string;
  badgeColor: string;
  stats: {
    label: string;
    value: string;
    color: string;
  }[];
}

const ServiceShowcase: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services: Service[] = [
    {
      id: 'workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Transform your business operations with intelligent process automation that reduces manual tasks by 80% and improves efficiency by 60%.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Smart Process Recognition',
        'Visual Workflow Designer',
        'Smart Triggers & Events',
        'Performance Monitoring',
        'API Integrations',
        'Custom Templates'
      ],
      benefits: [
        'Reduce manual tasks by 80%',
        'Improve efficiency by 60%',
        'Cut operational costs by 40%',
        'Eliminate human errors',
        'Scale processes effortlessly',
        '24/7 automated operations'
      ],
      pricing: 'Starting at $99/month',
      link: '/services/ai-workflow-automation',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-green-500',
      stats: [
        { label: 'Time Saved', value: '80%', color: 'text-green-400' },
        { label: 'Cost Reduction', value: '$50K+', color: 'text-green-400' },
        { label: 'ROI Timeline', value: '3 Months', color: 'text-green-400' }
      ]
    },
    {
      id: 'virtual-assistant',
      title: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support and business operations that increase conversions by 40% and reduce response time by 90%.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Natural Language Processing',
        'Multi-Channel Support',
        '24/7 Availability',
        'Personalized Interactions',
        'CRM Integration',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase conversions by 40%',
        'Save 30+ hours/week',
        '95% customer satisfaction',
        'Handle multiple languages',
        'Continuous learning'
      ],
      pricing: 'Starting at $79/month',
      link: '/services/ai-virtual-assistant',
      badge: 'TRENDING',
      badgeColor: 'bg-blue-500',
      stats: [
        { label: 'Response Time', value: '90% Faster', color: 'text-blue-400' },
        { label: 'Satisfaction', value: '95%', color: 'text-blue-400' },
        { label: 'Conversions', value: '+40%', color: 'text-blue-400' }
      ]
    },
    {
      id: 'data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with machine learning that helps make 60% better decisions and reduces risks by 70%.',
      icon: <Target className="w-8 h-8" />,
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Integration',
        'Automated Insights',
        'Custom Reports',
        'Alert Systems'
      ],
      benefits: [
        'Improve decisions by 60%',
        'Increase retention by 45%',
        'Reduce risks by 70%',
        'Real-time insights',
        'Automated reporting',
        'Predictive modeling'
      ],
      pricing: 'Starting at $149/month',
      link: '/services/ai-data-analytics',
      badge: 'NEW',
      badgeColor: 'bg-purple-500',
      stats: [
        { label: 'Better Decisions', value: '60%', color: 'text-purple-400' },
        { label: 'Risk Reduction', value: '70%', color: 'text-purple-400' },
        { label: 'Retention Boost', value: '+45%', color: 'text-purple-400' }
      ]
    }
  ];

  const currentService = services[activeService];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. 
            Join 500+ companies already achieving exceptional results.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeService === index
                  ? 'bg-white text-zion-blue shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className={`absolute -top-3 -right-3 ${currentService.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse`}>
                {currentService.badge}
              </div>
              <div className={`bg-gradient-to-r from-${currentService.badgeColor.split('-')[1]}-500/20 to-${currentService.badgeColor.split('-')[1]}-400/20 w-20 h-20 rounded-lg flex items-center justify-center mb-6 border border-${currentService.badgeColor.split('-')[1]}-400/30 shadow-lg`}>
                <div className={`text-${currentService.badgeColor.split('-')[1]}-400`}>
                  {currentService.icon}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentService.title}
              </h3>
              <p className="text-xl text-zion-slate-light mb-6">
                {currentService.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentService.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={currentService.link}
                  className="bg-gradient-to-r from-zion-blue to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Key Features
              </h4>
              <ul className="space-y-3">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Proven Benefits
              </h4>
              <ul className="space-y-3">
                {currentService.benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-400/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {currentService.pricing}
                </div>
                <div className="text-green-400 font-semibold mb-2">
                  🎯 50% OFF First 3 Months
                </div>
                <div className="text-zion-slate-light text-sm">
                  Free trial • No setup fees • Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Explore All AI Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${service.badgeColor.split('-')[1]}-500/20 w-12 h-12 rounded-lg flex items-center justify-center border border-${service.badgeColor.split('-')[1]}-400/30`}>
                    <div className={`text-${service.badgeColor.split('-')[1]}-400`}>
                      {service.icon}
                    </div>
                  </div>
                  <span className={`${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {service.badge}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-zion-slate-light mb-4">
                  {service.description}
                </p>
                <div className="text-white font-bold mb-4">
                  {service.pricing}
                </div>
                <Link
                  to={service.link}
                  className="text-zion-cyan hover:text-zion-blue-light font-semibold flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
