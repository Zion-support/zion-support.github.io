import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTransformationPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Digital Transformation",
      description: "Complete digital transformation strategies to leverage 5G technology for business growth."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Process Optimization",
      description: "Streamline and optimize business processes using 5G-enabled automation and IoT solutions."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Change Management",
      description: "Comprehensive change management support to ensure smooth 5G transformation adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Transformation Services | Zion Tech Group"
        description="Expert 5G transformation services to modernize your business operations and leverage next-generation technology."
        keywords="5G transformation, digital transformation, process optimization, change management, 5G modernization"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fuchsia-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Transformation Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-fuchsia-100">
              Transform your business with the power of 5G technology and digital innovation
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Transformation
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
              Our 5G Transformation Approach
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
      <section className="bg-fuchsia-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for 5G Transformation?
          </h2>
          <p className="text-xl text-fuchsia-100 mb-8">
            Let us guide you through a complete 5G transformation journey
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-fuchsia-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Plan Your Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGTransformationPage;
