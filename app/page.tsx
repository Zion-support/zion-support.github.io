import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Brain, Zap, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Lightning Fast Performance',
      description: 'Optimized systems and infrastructure that deliver exceptional speed and reliability for all your business needs',
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards to protect your data and ensure business continuity',
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business, from startup to enterprise, with flexible pricing and unlimited scalability',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    }
  ];

  const services = [
    'AI Development',
    'Machine Learning',
    'Data Analytics',
    'Cloud Solutions',
    'Cybersecurity',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
        <main className="pt-24 pb-16 px-4" id="main-content">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Transform Your Business with AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Started
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Learn More
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose ZionTechGroup?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <div className="cyber-card p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 neon-text">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-white text-lg">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="cyber-card p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI solutions to drive growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button px-8 py-4 text-lg inline-flex items-center space-x-2">
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="cyber-button-outline px-8 py-4 text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      <Footer />
    </div>
  );
};

export default Page;