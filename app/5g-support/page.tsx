import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGSupportPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support from our expert 5G engineers and specialists."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Remote Monitoring",
      description: "Proactive remote monitoring and maintenance to prevent issues before they impact your business."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Dedicated Account Manager",
      description: "Personalized support with a dedicated account manager who understands your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Support Services | Zion Tech Group"
        description="Comprehensive 5G support services with 24/7 technical assistance and proactive monitoring."
        keywords="5G support, technical support, 24/7 support, 5G maintenance, remote monitoring"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-yellow-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Support Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Get comprehensive support for your 5G network with our expert technical team
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Support
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
              Our 5G Support Services
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
      <section className="bg-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need 5G Support?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Our expert team is ready to help you with all your 5G network needs
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-amber-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Support Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGSupportPage;
