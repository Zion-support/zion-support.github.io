import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, Cpu, Network, FileText, Clock, ArrowRight, Star, Users, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analysis and insights powered by machine learning algorithms',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-analytics',
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization']
    },
    {
      title: 'AI Automation',
      description: 'Streamline your workflows with intelligent automation solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-automation',
      features: ['Process automation', 'Smart workflows', 'Efficiency optimization']
    },
    {
      title: 'AI Security',
      description: 'Protect your business with AI-powered cybersecurity solutions',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      link: '/ai-cybersecurity',
      features: ['Threat detection', 'Anomaly analysis', 'Security monitoring']
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI writing tools',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-content-generation',
      features: ['Content creation', 'SEO optimization', 'Multi-language support']
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and support',
      icon: <Users className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-customer-service',
      features: ['24/7 support', 'Natural language processing', 'Sentiment analysis']
    },
    {
      title: 'AI Business Intelligence',
      description: 'Make data-driven decisions with AI-powered business insights',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-business-intelligence',
      features: ['Predictive analytics', 'Market insights', 'Performance optimization']
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'AI Solutions', icon: <Brain className="w-6 h-6" /> },
    { number: '10,000+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, automation, security, and content generation. Expert AI solutions for modern businesses."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI security, AI content generation, business intelligence"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Get Started
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <Link to={service.link} className="block">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI solutions to drive growth and innovation. 
              Start your AI transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Start Your AI Journey
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;
