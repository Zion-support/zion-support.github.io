import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZionSmartExpenseCategorizerProPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Zion Smart Expense Categorizer Pro Solutions',
      description: 'Professional zion smart expense categorizer pro services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored zion smart expense categorizer pro implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your zion smart expense categorizer pro needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Zion Smart Expense Categorizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional zion smart expense categorizer pro solutions and services" />
        <meta name="keywords" content="zion, smart, expense, categorizer, pro" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
        
          <div className="text-center">
            <h1 className="text-4 xl font-bold text-white mb-8">Zion smart expense categorizer pro</h1>
=======
            <h1 className="text-4xl font-bold text-white mb-8">Zion Smart Expense Categorizer Pro</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional zion smart expense categorizer pro solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> 
          </div> 
    </>
  );
};

export default ZionSmartExpenseCategorizerProPage;
