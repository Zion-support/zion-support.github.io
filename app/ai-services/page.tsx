import React from 'react';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
const AiServicesPage: React.FC = () => {
  const services = [
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
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots and virtual assistants for customer support.',      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business from threats.',
      color: 'from-red-500 to-pink-500'    }
  ]
  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consulting, analytics, automation, and more." />      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services designed to drive innovation and growth.
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
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you unlock the full potential of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIServicesPage;
