import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGConsultingPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "5G Strategy Development",
      description: "Comprehensive 5G strategy tailored to your business needs and industry requirements."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Network Security Assessment",
      description: "Thorough security evaluation and recommendations for 5G network implementation."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team Training & Support",
      description: "Expert training programs to prepare your team for 5G technology adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Consulting Services | Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology for competitive advantage."
        keywords="5G consulting, 5G strategy, network consulting, wireless technology"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with expert 5G consulting and strategic guidance
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Our 5G Consulting Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Embrace 5G Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts guide you through your 5G transformation journey
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Our 5G Experts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGConsultingPage;
