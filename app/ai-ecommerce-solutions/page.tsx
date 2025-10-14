import React from "react";
import { Helmet    } from "react-helmet-async";

  return (
<>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16"></div>
    </>
    </>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
          </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p>Our AI e-commerce solutions deliver measurable improvements</p>
            </div>
          
          <div>{industryStats.map((stat, index) => (</div>
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
            ))}
          </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our E-commerce Solutions
            </h2>
            <p>Comprehensive AI-powered tools for every aspect of e-commerce</p>
            </div>
          
          <div>{ecommerceServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="mb-4">
                  <span>{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p>✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Boost Sales Now
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p>Advanced AI technology designed specifically for e-commerce success</p>
            </div>
          
          <div>{ecommerceFeatures.map((feature, index) => (</div>
              <div key={index} className="text-center">
                <div>{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</div>
            ))}
          </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p>Real results from our e-commerce clients</p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p>&ldquo;Zion Tech Group&apos;s AI e-commerce platform increased our online sales by 150% in just 6 months. The personalized recommendations are incredible!&rdquo;</p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, Fashion Forward</div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p>&ldquo;The AI inventory management system reduced our stockouts by 80% and saved us $500K annually. Highly recommended!&rdquo;</p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">Operations Director, TechGear</div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p>&ldquo;Their AI customer service automation reduced our support costs by 70% while improving customer satisfaction. Amazing results!&rdquo;</p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Customer Success Manager, HomeDecor Plus</div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your E-commerce?
          </h2>
          <p>Get a free e-commerce audit and discover how AI can boost your online sales</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#">
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</div>
        </section>
    </div>
  );
};

export default PagePage;
