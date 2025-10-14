import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTestingPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Performance Testing",
      description: "Comprehensive 5G network performance testing to ensure optimal speed and reliability."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Security Testing",
      description: "Thorough security testing to identify vulnerabilities and ensure robust protection."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Load Testing",
      description: "Advanced load testing to verify your 5G network can handle peak traffic demands."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Testing Services | Zion Tech Group"
        description="Comprehensive 5G testing services including performance, security, and load testing for optimal network quality."
        keywords="5G testing, performance testing, security testing, load testing, network quality"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Testing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100">
              Ensure your 5G network meets the highest standards with our comprehensive testing services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Testing
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
              Our 5G Testing Solutions
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
      <section className="bg-sky-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need 5G Testing?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let us ensure your 5G network performs at its best with our expert testing services
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-sky-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Testing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGTestingPage;
