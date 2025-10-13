import React from 'react';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      href: '/ai-analytics'
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
      icon: <Zap className="w-8 h-8" />,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling'],
      href: '/ai-automation'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Make data-driven decisions with our comprehensive BI platform',
      icon: <Brain className="w-8 h-8" />,
      features: ['Data Visualization', 'KPI Tracking', 'Strategic Planning'],
      href: '/ai-business-intelligence'
    },
    {
      title: 'AI Content Generation',
      description: 'Create engaging content at scale with our AI-powered content tools',
      icon: <Globe className="w-8 h-8" />,
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support'],
      href: '/ai-content-generation'
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent support solutions',
      icon: <Users className="w-8 h-8" />,
      features: ['Chatbots', 'Sentiment Analysis', '24/7 Support'],
      href: '/ai-customer-service'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Risk Assessment', 'Incident Response'],
      href: '/ai-cybersecurity'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '10,000+', label: 'Hours Saved', icon: <Zap className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, and cybersecurity solutions."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation, AI cybersecurity"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI-Powered Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence. 
            From analytics to automation, we provide comprehensive AI solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Schedule a Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={service.href}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Learn More
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your AI Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Schedule a Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
