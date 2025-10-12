import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface GenericServicePageProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';
  color: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI':
        return 'from-blue-500 to-purple-600';
      case 'IT':
        return 'from-green-500 to-blue-600';
      case 'MicroSAAS':
        return 'from-pink-500 to-rose-600';
      case 'Emerging':
        return 'from-yellow-500 to-orange-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{description}</p>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                {category} Solutions
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600">What makes our {title.toLowerCase()} solution stand out</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600">The benefits of working with Zion Tech Group</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {pricing && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
                <p className="text-lg text-gray-600">Transparent pricing for our {title.toLowerCase()} solution</p>
              </div>
              
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starting From</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">{pricing}</div>
                <p className="text-gray-600 mb-8">Custom pricing available for enterprise solutions</p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Contact us today to learn more about our {title.toLowerCase()} solutions
            </p>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GenericServicePage;