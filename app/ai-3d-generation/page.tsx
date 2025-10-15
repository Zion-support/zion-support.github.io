import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageAi3dGenerationPage: React.FC = () => {
  const services = [
    {
      title: 'AI 3D Generation Strategy & Planning',
      description: 'Comprehensive ai 3d generation strategy development and implementation planning tailored to your business needs.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai 3d generation implementations for your specific requirements and use cases.',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock support and maintenance for all your ai 3d generation needs.',
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D generation solutions for creating stunning visual content and models." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, AI graphics, visual content creation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI-powered 3D generation solutions for creating stunning visual content and models.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAi3dGenerationPage;