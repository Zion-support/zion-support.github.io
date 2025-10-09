import React from 'react';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      title: 'Customer Service Automation',
      description: 'Enhance customer experience with AI-powered support',
      icon: Users,
      features: ['Chatbots', 'Ticket routing', 'Response templates', 'Sentiment analysis']
    },
    {
      title: 'Data Analysis Automation',
      description: 'Automate data collection, processing, and insights generation',
      icon: TrendingUp,
      features: ['Data extraction', 'Pattern recognition', 'Predictive analytics', 'Automated reporting']
    }
  ];
  const benefits = [
    'Increased Efficiency',
    'Reduced Errors',
    'Cost Savings',
    '24/7 Operation',
    'Scalable Solutions'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Automation Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation solutions that work around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </section>
          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Automation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our AI automation solutions transform your operations</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAutomationPage;
