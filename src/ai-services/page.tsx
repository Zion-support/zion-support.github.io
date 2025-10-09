import React from 'react';
import { Brain, Zap, Shield, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting',
      icon: Brain,
      features: ['AI Readiness Assessment', 'Strategic Planning', 'Implementation Roadmap', 'ROI Analysis'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms for your business needs',
      icon: Zap,
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Enterprise-grade AI security and compliance solutions',
      icon: Shield,
      features: ['AI Security Audit', 'Compliance Framework', 'Risk Assessment', 'Security Monitoring'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'AI Analytics & Insights',
      description: 'Advanced analytics and business intelligence powered by AI',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $800/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
              <Link
                to="/contact"
                className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIServicesPage;