import { CheckCircle, Phone, Mail, Link } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItConsulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      <main className="pt-20">"
        <section className="container mx-auto px-4 py-16 text-center">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">"
            It Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Strategic IT consulting and technology advisory services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link,
to="/contact""
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg""
            >
              <Phone className="w-5 h-5 mr-2" />"
              Get Free Consultation
            </Link>
            <a,
href="tel:+13024640950""
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""
            >
              <Phone className="w-4 h-4 mr-2" />"
              (302) 464-0950
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-4">"
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">"
              Contact us today for a free consultation and discover how our solutions can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link,
to="/contact""
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg""
              >
                <Phone className="w-5 h-5 mr-2" />"
                Get Free Consultation
              </Link>
              <a,
href="tel:+13024640950""
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center""
              >
                <Phone className="w-4 h-4 mr-2" />"
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>


            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"></div>"
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"></div>"
                  <div className="flex items-center mb-6"></div>"
                    <div className="p-3 bg-blue-100 rounded-xl mr-4"></div>"
                      <service.icon className="w-8 h-8 text-blue-600" />"
                    </div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>"
                      <p className="text-gray-600">{service.description}</p>"
                    </div>
                  </div>
                  
                  <div className="mb-6"></div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>"
                    <ul className="space-y-2"></ul>"
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>"
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />"

                          {feature}
                        </li>)
                      ))}
                    </ul>


                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>"
                    <ul className="space-y-2"></ul>"
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>"
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />"
                          {benefit}
                        </li>
                      ))}
                    </ul>


                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>"
                    <ul className="space-y-2"></ul>"
                      {service.benefits.map((benefit, idx) => (

                        <li key={idx} className="flex items-center"></li>"

                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />"
                          {benefit}
                        </li>
                      ))}

                    </ul>

                    <div className="text-center"></div>"
                      <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>"
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"></button>"
                        Get Started
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"></section>"
            <div className="max-w-4xl mx-auto text-center"></div>"

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>"
              <p className="text-xl text-gray-600 mb-8"></p>"
                Contact our experts for a free consultation and discover how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"></button>"
                  <Phone className="w-5 h-5 inline mr-2" />"

                  Call Us
                </button>
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"></button>"
                  <Mail className="w-5 h-5 inline mr-2" />"
                  Email Us
                </button>
              </div>
            </div>
          </section>


        </main>
        
        <Footer />
      </div>


    </>
  );
};

export default ItConsulting;
import React from 'react';
