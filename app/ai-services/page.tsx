import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, BarChart3, Cpu, FileText, Users, TrendingUp, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const aiServices = [
    {
      name: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/ai-analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
      icon: <Cpu className="w-8 h-8" />,
      link: '/ai-automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools',
      icon: <FileText className="w-8 h-8" />,
      link: '/ai-content-generation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and support systems',
      icon: <Users className="w-8 h-8" />,
      link: '/ai-customer-service',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI Marketing',
      description: 'Optimize your marketing campaigns with AI-driven insights and automation',
      icon: <TrendingUp className="w-8 h-8" />,
      link: '/ai-marketing',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Project Management',
      description: 'Manage projects more efficiently with AI-powered planning and resource allocation',
      icon: <Clock className="w-8 h-8" />,
      link: '/ai-project-management',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Artificial Intelligence Solutions | Zion Tech Group"
        description="Discover our comprehensive AI services including analytics, automation, content generation, and more. Transform your business with cutting-edge artificial intelligence."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive AI services. From analytics to automation, 
            we provide cutting-edge artificial intelligence solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our AI experts help you identify the best opportunities for AI implementation in your business. 
            Get started with a free consultation today.
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
              href="/services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;