import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Wifi, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
const IoTPage: React.FC = () => {
    const iotServices = const iotServices = const iotServices = [
    {

        <title>IoT Services - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50"></div></div></div>
        {/* Hero Section */}</div>
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
          <div className="absolute inset-0 bg-black opacity-30"></div></div></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-teal-800/50"></div></div></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div></div></div>
            <div className="text-center"></div></div></div>
              <h1>
                IoT Solutions</h1></h1></h1>
              </h1>
              <p>
                Connect, monitor, and optimize your world with intelligent Internet of Things solutions;
              </p></p></p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div></div>
                <button>
                  Explore IoT Solutions;
                </button></button></button>
                <button>
                  Schedule IoT Consultation,
                </button></button></button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div></div></div>
            <div className="text-center mb-12"></div></div></div>
              <h2>
                Why Choose Our IoT Services?,
              </h2></h2></h2>
              <p>
                End-to-end IoT solutions with proven expertise in connectivity, security, and analytics;
              </p></p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div></div>
              <div className="text-center"></div></div></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div></div></div>
                  <Wifi />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity Experts</h3></h3></h3>
                <p className="text-gray-600">Multi-protocol IoT connectivity solutions</p></p></p>
              </div>
              <div className="text-center"></div></div></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div></div></div>
                  <Shield />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3></h3></h3>
                <p className="text-gray-600">Comprehensive IoT security and data protection</p></p></p>
              </div>
              <div className="text-center"></div></div></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div></div></div>
                  <Zap />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3></h3></h3>
                <p className="text-gray-600">Low-latency processing at the edge</p></p></p>
              </div>
              <div className="text-center"></div></div></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div></div></div>
                  <Target />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3></h3></h3>
                <p className="text-gray-600">Tailored IoT solutions for your specific needs</p></p></p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}{
    categories.map(category => ()}

          <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div></div></div>
              <div className="text-center mb-12"></div></div></div>
                <h2>
                  {category} Solutions;
                </h2></h2></h2>)
                <p>)
                  Specialized {category.toLowerCase()} solutions powered by IoT technology;
                </p></p></p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                {
    iotServices;
                  .filter(service => service.category === category),
                  .map((service, index) => ()
    service.features.map((feature, featureIndex) => ()
                  .map((service, index) => (</div>
  }
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div></div></div>
                      <div className="text-4xl mb-4">{service.icon}</div></div></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3></h3></h3>
                      <p className="text-gray-600 mb-4">{service.description}</p></p></p>
                      <div className="mb-4"></div></div></div>
                        <div className="flex items-center justify-between mb-2"></div></div></div>
                          <span className="text-2xl font-bold text-green-600">{service.price}</span></span></span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span></span></span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold"></div></div></div>
                          Save up to 40% vs market rates</div>
                        </div>
                      </div>
                      <div className="mb-4"></div></div></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul>)
                          {)
    service.features.map((feature, featureIndex) => (
  }
                            <li>
                              <CheckCircle>

                              {feature})
                            </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                          ))}

                        </ul>
                      </div>
                      <div className="mb-4" / /></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2" / /></div>
                          {
    service.technologies.map((tech, techIndex) => ()
                      <div className="mb-4"></div></div></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div></div></div>
                          {
    service.technologies.map((tech, techIndex) => (</div>
  }
                            <span>

                              {tech})
                            </span></span></span>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                          ))}

                        </div>
                      </div>
                      <div className="mb-6" / /></div>
                      <div className="mb-6"></div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul></ul>
                          {
    service.benefits.map((benefit, benefitIndex) => ()
    service.benefits.map((benefit, benefitIndex) => (
  }
                            <li>
                              <Star>

                              {benefit})
                            </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                          ))}

                        </ul>
                      </div>
                      <button></button>
                        Get IoT Quote
                      </button>
                      <button>
                        Get IoT Quote;
                      </button></button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    </div>

                  ))}
              </div>
            </div>
          </section>
        ))}
{/* IoT Capabilities Showcase */} <section className="py-20 px-4">
        ))},
    {/* IoT Capabilities Showcase */}
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8" / /></div>
            <div className="text-center mb-12" / /></div>
              <h2></h2>
                Our IoT Capabilities
              </h2>
              <p></p>
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div></div></div>
            <div className="text-center mb-12"></div></div></div>
              <h2>
                Our IoT Capabilities;
              </h2></h2></h2>
              <p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                Comprehensive IoT technologies and methodologies for connected solutions,
              </p></p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg" / /></div>
                <Wifi></Wifi>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity</h3>
                <p className="text-gray-600">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg" / /></div>
                <Shield></Shield>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">End-to-end security with device authentication and data encryption</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg" / /></div>
                <Cpu></Cpu>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Low-latency processing and real-time decision making at the edge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg" / /></div>
                <Target></Target>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Comprehensive device lifecycle management and monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg" / /></div>
                <Sparkles></Sparkles>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for predictive analytics and insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg" / /></div>
                <BarChart></BarChart>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Real-time dashboards and analytics for IoT data insights</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div></div></div>
                <Wifi>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectivity</h3></h3></h3>
                <p className="text-gray-600">Multi-protocol connectivity including WiFi, LoRaWAN, NB-IoT, and 5G</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg"></div></div></div>
                <Shield>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3></h3></h3>
                <p className="text-gray-600">End-to-end security with device authentication and data encryption</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div></div></div>
                <Cpu>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3></h3></h3>
                <p className="text-gray-600">Low-latency processing and real-time decision making at the edge</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div></div></div>
                <Target>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3></h3></h3>
                <p className="text-gray-600">Comprehensive device lifecycle management and monitoring</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div></div></div>
                <Sparkles>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3></h3></h3>
                <p className="text-gray-600">Machine learning and AI for predictive analytics and insights</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div></div></div>
                <BarChart>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3></h3></h3>
                <p className="text-gray-600">Real-time dashboards and analytics for IoT data insights</p></p></p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center" / /></div>
            <h2></h2>
              Ready to Connect Your World?
            </h2>
            <p></p>
              Contact our IoT experts for a free consultation and custom IoT strategy development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
              <a></a>
                📞 +1 302 464 0950
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div></div></div>
            <h2>
              Ready to Connect Your World?
            </h2></h2></h2>
            <p>
              Contact our IoT experts for a free consultation and custom IoT strategy development;
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></div>
              <a>
                📞 +1 302 464 0950;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </a>
              <a></a>
                ✉️ kleber@ziontechgroup.com,
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200" / /></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <div className="mt-8 text-sm text-green-200"></div></div></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p></p></p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTPage;
