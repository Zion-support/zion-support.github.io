                  ))}
                </ul>
                <div className="text-center"></div></div>
                  <div className="text-lg font-bold text-indigo-400 mb-3"></div></div>{service.price}</div>
                  <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>

const ItServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20"&gt;</div&gt;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"&gt;</div&gt;
        <div className="text-center"&gt;</div&gt;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"&gt;</h1&gt;
            <span className="text-cyan-400"&gt;</span&gt;IT Services</span&gt;
          </h1&gt;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"&gt;</p&gt;
            Complete technology infrastructure solutions for your business.
          </p&gt;
        </div&gt;
      </div&gt;
    </div&gt;
  );
};
'use client'
import React from 'react'
import Navigation from '../components/Navigation'import Footer from '../components/Footer'
import {  Server, Shield, Cloud, Code, CheckCircle, ArrowRight  } from 'lucide-react'{/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"></div></div>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white"></h3></h3>{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6"></p></p>{service.description}</p>
                <ul className="space-y-2"></ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Our expert team is ready to help you with all your IT needs.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage
