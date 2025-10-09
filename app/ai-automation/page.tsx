import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Process Automation',
      description: 'Streamline repetitive tasks with intelligent automation',
      icon: Zap,
      features: ['Task scheduling', 'Data processing', 'Report generation', 'Email automation']
    },
    {
      title: 'Workflow Optimization',
      description: 'Optimize business processes for maximum efficiency',
      icon: Settings,
      features: ['Process mapping', 'Bottleneck identification', 'Performance metrics', 'Continuous improvement']
    },
    {
      title: 'Document Processing',
      description: 'Automate document handling and data extraction',
      icon: Clock,
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Automated routing']
    },
    {
      title: 'Customer Service Automation',
      description: 'Enhance customer experience with AI-powered support',
      icon: Users,
      features: ['Chatbot integration', 'Ticket routing', 'Response automation', 'Sentiment analysis']
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly connect and synchronize data across systems',
      icon: TrendingUp,
      features: ['API integration', 'Real-time sync', 'Data validation', 'Error handling']
    },
    {
      title: 'Security Automation',
      description: 'Protect your business with automated security measures',
      icon: Shield,
      features: ['Threat detection', 'Access control', 'Compliance monitoring', 'Incident response']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Automate up to 80% of repetitive tasks, freeing your team for strategic work'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Keep your business running around the clock with automated processes'
    },
    {
      icon: Shield,
      title: 'Reduced Errors',
      description: 'Minimize human error with intelligent automation and validation'
    },
    {
      icon: Star,
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through efficient automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline processes, reduce costs, and increase efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions that work 24/7 to drive efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation services designed to streamline your business processes and maximize efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI automation with measurable results and proven ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI automation can transform your operations and drive significant cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIAutomationPage;