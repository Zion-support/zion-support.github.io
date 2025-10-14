import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGScalabilityPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Horizontal Scaling",
      description: "Design 5G networks that can scale horizontally to handle growing user demands and traffic."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Auto-Scaling",
      description: "Intelligent auto-scaling solutions that automatically adjust resources based on real-time demand."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Future Growth Planning",
      description: "Strategic planning to ensure your 5G infrastructure can accommodate future growth and expansion."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Scalability Services | Zion Tech Group"
        description="Expert 5G scalability solutions to ensure your network can grow and adapt to increasing demands."
        keywords="5G scalability, network scaling, auto-scaling, 5G growth, capacity planning"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Scalability Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-rose-100">
              Build 5G networks that scale seamlessly with your business growth
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Scale Your Network
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
              Our 5G Scalability Solutions
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
      <section className="bg-rose-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your 5G?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Let us design a 5G network that grows with your business needs
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-rose-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Plan for Growth
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGScalabilityPage;
