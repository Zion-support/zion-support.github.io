import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGConsultingPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Strategic Planning",
      description: "Comprehensive 5G strategy development and implementation roadmap"
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Advanced security analysis for 5G network infrastructure"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Access to our team of 5G technology specialists"
    },
    {
      icon: ArrowRight,
      title: "Implementation Support",
      description: "End-to-end guidance for 5G network deployment"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services for strategic planning, security assessment, and implementation support. Transform your business with cutting-edge 5G technology."
        keywords="5G consulting, 5G strategy, 5G implementation, 5G security, network consulting"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              5G Consulting Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Expert guidance for your 5G transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center border-2 border-purple-500 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your 5G Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you plan and implement your 5G strategy
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiveGConsultingPage;
