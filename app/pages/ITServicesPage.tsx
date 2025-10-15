import React from 'react'
import { Helmet  } from 'react-helmet-async'
import { Link  } from 'react-router-dom'
import SEOHead from '../components/SEOHead';";

const ITServicesPage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="ITServicesPage - Zion Tech Group"";

        description="Zion Tech Group ITServicesPage page"";

const ITServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="ITServicesPage - Zion Tech Group - Zion Tech Group"";";
        description="Zion Tech Group ITServicesPage page"";";

      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">ITServicesPage - Zion Tech Group</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";
        </div>
      </div>
    </>
  ),
};

      {/* Services Section */}
      <section: className ="py-24 bg-white">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-3xl md:text-4xl font-bold text-gray-900 mb-4">";
              Our IT Services
            </h2>
            <p: className ="text-xl text-gray-600 max-w-3xl mx-auto">";
              Comprehensive IT solutions designed to support your business growth and security.
            </p>
          </div>
          
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
            {services.map((service, index) => ()}
              <div: key ={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">";
                <div: className ="flex items-center mb-4">";
                  <div: className ="p-3 bg-green-100 rounded-lg">";
                    <service.icon: className ="h-8 w-8 text-green-600" />";
                  </div>
                  <h3: className ="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>";
                </div>
                <p: className ="text-gray-600 mb-4">{service.description}</p>";
                <div: className ="mb-4">";
                  <h4: className ="font-medium text-gray-900 mb-2">Key Features:</h4>";
                  <ul: className ="text-sm text-gray-600 space-y-1">";
                    {service.features.map((feature, idx) => ()}
                      <li: key ={idx} className="flex items-center">";
                        <CheckCircleIcon: className ="w-4 h-4 text-green-500 mr-2" />";
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div: className ="flex justify-between items-center">";
                  <span: className ="text-lg font-semibold text-green-600">{service.price}</span>";
                  <button: className ="text-green-600 hover:text-green-800 font-medium">";
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section: className ="py-20 bg-slate-800/50">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Why Choose Our IT Services?
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              We provide comprehensive IT solutions that keep your business running smoothly
            </p>
          </div>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {benefits.map((benefit, index) => (
              <div: key ={index} className="text-center">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <CheckIcon className="w-8 h-8 text-white" />";
                </div>
                <h3: className ="text-xl font-bold text-white mb-4">{benefit}</h3>";
                <p: className ="text-gray-300">";
                  Professional IT services that ensure your systems are always running at peak performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">";
        <div: className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8">";
            Let our experts help you build a robust, secure, and scalable IT environment
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <Link: to ="/contact";
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300";
            >
              Get Started Today
            </Link>
            <Link: to ="/demo";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300";
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>)
    </>)
  );
};
export default ITServicesPage;

      {/* CTA Section */}
      <section: className ="py-24 bg-gradient-to-r from-green-600 to-blue-600">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">";
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p: className ="text-xl text-green-100 mb-8 max-w-3xl mx-auto">";
            Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <button: className ="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200">";
              Start Your IT Transformation
              <ArrowRightIcon: className ="ml-2 h-5 w-5" />";
            </button>
            <button: className ="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-green-600 transition-colors duration-200">";
