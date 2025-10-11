<<<<<<< HEAD
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {Cookie, Settings, Shield, Eye} from 'lucide-react'
const CookiesPage: React.FC = () => 
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    
      examples: ['Language preferences', 'User settings', 'Remember me']} ,
    
      examples: ['Page views', 'User behavior', 'Performance metrics']} ,
    
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion tracking']} ]
  return (
    <>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Cookie Policy
=======
'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: 'Expert Solutions',
      description: 'Professional page services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
<<<<<<< HEAD

      <Footer />
    </>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>

            <div className=">
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                  </div>

    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    
                      <li key={exampleIndex}>• {example}</li>
                    )
    </>
  )
                  </ul>
                </div>

      <Footer />
    </>
              ))}
            </div>

      <Footer />
    </>
          </div>

      <Footer />
    </>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>

            <div className=">
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3">
                    <span className="text-lg font-medium text-gray-900">
                  </div>

      <Footer />
    </>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Cookie Consent</h4>
                    <p className="text-gray-300">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                    </p>
                  </div>

      <Footer />
    </>
                </div>

      <Footer />
    </>
              </div>

      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Some cookies on our website are set by third-party services that appear on our pages. We don't control these cookies and you should check the third-party websites for more information about their cookies and how to manage them.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Google Analytics - for website analytics</li>
                  <li>• Social media platforms - for social sharing features</li>
                  <li>• Advertising networks - for targeted advertising</li>
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
<<<<<<< HEAD
};

export default CookiesPage;
</div>
</h3>
</button>
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
