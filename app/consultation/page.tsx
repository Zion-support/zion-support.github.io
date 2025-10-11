import React from 'react';
import { CheckCircle, Clock, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const packages = [
    {
      name: 'Basic Consultation',
      price: '$500',
      duration: '2 hours',
      features: [
        'Initial assessment',
        'Technology review',
        'Basic recommendations',
        'Follow-up email'
      ],
      popular: false
    },
    {
      name: 'Standard Consultation',
      price: '$1,500',
      duration: '1 day',
      features: [
        'Comprehensive analysis',
        'Detailed technology roadmap',
        'Implementation plan',
        '30-day support',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Premium Consultation',
      price: '$3,000',
      duration: '3 days',
      features: [
        'Full business analysis',
        'Custom technology strategy',
        'Implementation support',
        '90-day support',
        'Dedicated consultant',
        'Monthly check-ins'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Expert technology consultation services for your business." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert advice and guidance to transform your business with the right technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                pkg.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-600">
                Our expert consultants have years of experience helping businesses succeed with technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Certified professionals with industry expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick turnaround times for all consultations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Value Pricing</h3>
                <p className="text-gray-600 text-sm">Competitive rates with guaranteed results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600 text-sm">Track record of successful implementations</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConsultationPage;