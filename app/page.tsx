import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';

function HomePage() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Advanced AI services for your business needs.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions and support.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '5G Solutions',
      description: 'Next-generation 5G network services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional AI, IT, and 5G solutions for your business" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI, IT, and 5G solutions for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;
