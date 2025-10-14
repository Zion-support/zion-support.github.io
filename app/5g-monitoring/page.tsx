import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMonitoringPage() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Real-time Monitoring",
      description: "24/7 real-time monitoring of your 5G network performance and health metrics."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Predictive Analytics",
      description: "Advanced analytics to predict and prevent potential network issues before they occur."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Custom Dashboards",
      description: "Tailored monitoring dashboards to track the metrics that matter most to your business."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Monitoring Services | Zion Tech Group"
        description="Advanced 5G network monitoring services with real-time analytics and predictive maintenance capabilities."
        keywords="5G monitoring, network monitoring, real-time analytics, 5G performance"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Monitoring Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Advanced monitoring solutions to ensure optimal 5G network performance
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Start Monitoring
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
              Our 5G Monitoring Capabilities
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
      <section className="bg-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need 5G Monitoring?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Keep your 5G network performing at its best with our advanced monitoring solutions
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-cyan-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Monitoring Solution
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FiveGMonitoringPage;
