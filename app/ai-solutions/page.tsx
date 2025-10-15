
export default AiSolutionsPage
import React from 'react'
import { Helmet  } from 'react-helmet-async'
import { Link  } from 'react-router-dom'

      {/* Use Cases Section */}
      <section: className ="py-20 bg-slate-800">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              AI Solutions for Every Business Need
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              From customer service to data analysis, our AI solutions are designed to solve real business challenges.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">";
            {useCases.map((useCase, index) => ()}
              <div: key ={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">";
                <div: className ="mb-4 group-hover:scale-110 transition-transform">";
                  {useCase.icon}
                </div>
                <h3: className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">";
                  {useCase.title}
                </h3>
                <p: className ="text-gray-300 mb-4">";
                  {useCase.description}
                </p>
                <ul: className ="space-y-2">";
                  {useCase.benefits.map((benefit, benefitIndex) => ()}
                    <li: key ={benefitIndex} className="flex items-center text-sm text-gray-300">";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";
                      {benefit}
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section: className ="py-20 bg-slate-900">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Our AI Solutions
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Choose from our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {aiServices.map((service, index) => ()}
              <divkey={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group relative ${>}
                service.popular ? 'ring-2 ring-cyan-500' : ''";
              }`}>
                {service.popular && ()}
                  <div: className ="absolute -top-3 left-1/2 transform -translate-x-1/2">";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div: className ="mb-6">";
                  <div: className ="flex items-center justify-between mb-4">";
                    <div: className ="group-hover:scale-110 transition-transform">";
                      {service.icon}
                  <h3: className ="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">";
                    {service.name}
                  </h3>
                  <div: className ="flex items-center space-x-2 mb-3">";
                    <span: className ="text-3xl font-bold text-cyan-400">{service.price}</span>";
                    <span: className ="text-lg text-gray-400 line-through">{service.originalPrice}</span>";
                  </div>
                  <p: className ="text-gray-300 mb-4">";
                    {service.description}
                  </p>
                </div>

                <ul: className ="space-y-3 mb-8">";
                  {service.features.slice(0, 5).map((feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-sm text-gray-300">";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />";
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && ()}
                    <li: className ="text-sm text-cyan-400 font-medium">";
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div: className ="space-y-4">";
                  <>
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"";
                  >
                    Learn More
                  </>
                  <>
                    to="/contact"";
                    className="block w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"";
                  >
            ))}
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section: className ="py-20 bg-slate-800/50">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Industries We Serve
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              AI solutions tailored for various industries and business needs
            </p>
          </div>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {industries.map((industry, index) => (

      {/* Pricing Section */}
      <section: id ="pricing" className="py-20 bg-slate-800">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              AI Solutions Pricing
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Choose the perfect AI solution plan for your business. All plans include 14-day free trial.
            </p>
          </div>

          <div: className ="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">";
            {pricingTiers.map((tier, index) => ()}
              <divkey={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${>}
                tier.popular ? 'ring-2 ring-cyan-500 bg-slate-700/50' : ''";
              }`}>
                {tier.popular && ()}
                  <div: className ="text-center mb-4">";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div: className ="text-center mb-8">";
                  <h3: className ="text-2xl font-bold text-white mb-2">{tier.name}</h3>";
                  <div: className ="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>";
                  <p: className ="text-gray-300">{tier.description}</p>";
                </div>

                <ul: className ="space-y-4 mb-8">";
                  {tier.features.map((feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-gray-300">";
                      <CheckCircle: className ="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";
                      {feature}
                    </li>
                  ))}
                </ul>

                <>
                  to="/contact"";
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${}
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'";
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'";
                  }`}
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">";
        <div: className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
            Ready to Transform Your Business with AI?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8">";
            Let's discuss how our AI solutions can help you achieve your business goals'";
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <Link: to ="/contact";
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300";
            >
              Start Your AI Journey
            </Link>
            <Link: to ="/demo";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300";
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AISolutionsPage;

      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">";
        <div: className ="container mx-auto px-4 text-center">";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
            Ready to Harness the Power of AI?
          </h2>
          <p: className ="text-xl text-white/90 mb-8 max-w-3xl mx-auto">";
            Transform your business with our cutting-edge AI solutions. Start your free trial today and see the difference AI can make.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <>
              to="/contact"";
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"";
            >
              Start Free Trial
            </>
            <>
              to="/demo"";
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"";

import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const AiSolutionsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Ai Solutions - Zion Tech Group"";";
        description="Professional ai solutions solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Ai Solutions</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default AiSolutionsPage;'";'";";";

