import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Ai Solutions Solutions',
      description: 'Professional ai solutions services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai solutions implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your ai solutions needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Ai Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ai solutions solutions and services" />
        <meta name="keywords" content="ai, solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-bold text-whitemb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
              <p className="text-gray-300">
                Intelligent automation solutions to streamline your operations.
              </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and give you a competitive edge.
          </p>
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/demo"
              className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSolutionsPage;
