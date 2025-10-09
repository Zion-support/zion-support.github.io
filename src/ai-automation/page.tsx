import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Settings, Zap, Clock, Users, TrendingUp, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with AI',
      benefits: ['Workflow optimization', 'Task automation', 'Process efficiency']
    },
    {
      icon: Settings,
      title: 'Smart Configuration',
      description: 'Intelligent system configuration and management',
      benefits: ['Auto-configuration', 'Dynamic settings', 'Adaptive systems']
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security monitoring and response',
      benefits: ['Threat detection', 'Automated responses', 'Security alerts']
    },
    {
      icon: Clock,
      title: 'Scheduling',
      description: 'Intelligent task scheduling and resource management',
      benefits: ['Smart scheduling', 'Resource optimization', 'Time management']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Automated user provisioning and access control',
      benefits: ['User provisioning', 'Access management', 'Role automation']
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Automated performance tracking and optimization',
      benefits: ['Real-time monitoring', 'Performance alerts', 'Auto-optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline processes, reduce costs, and improve efficiency." />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Streamline your business with intelligent automation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business operations with our advanced AI automation platform.
            Reduce manual work, eliminate errors, and accelerate growth through intelligent process automation.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-cyan-300 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose AI Automation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Increased Efficiency</h3>
                <p className="text-gray-300">Automate repetitive tasks and focus on strategic initiatives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reduced Errors</h3>
                <p className="text-gray-300">Eliminate human errors with intelligent automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Operations</h3>
                <p className="text-gray-300">Keep your business running around the clock</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your automation journey today and transform your business operations with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAutomationPage;