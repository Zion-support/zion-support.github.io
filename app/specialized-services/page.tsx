'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {
    const features = const features = const features = [
    {        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Advanced specialized services for modern businesses including AI solutions, automation, and digital transformation." />
        <meta name="keywords" content="specialized services, AI solutions, automation, digital transformation, business optimization" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div></div>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto text-center">
            </div></div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Specialized Services;
            </h1></h1></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced specialized services designed to transform your business with cutting-edge technology and expert solutions.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started;
              </button></button></button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo;
              </button></button></button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2></h2></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized solutions deliver unmatched performance, security, and scalability.
              </p></p></p>
            </div>)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">)
              {features.map((feature, index) => (
                </div></div><div key=index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  </div></div><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    </div></div><feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3></h3></h3>
                  <p className="text-gray-300">{feature.description}</p></p></p>)
                </div>)
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>                Experience the power of our specialized solutions for your business.
              </p></p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" /></div>
              {benefits.map((benefit, index) => ()              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8" /></p>
                Contact our experts to discuss your specialized service needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" /></button>
                  <Phone className="mr-2 h-5 w-5" / /></Phone>
                  Call Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" /></button>
                  <Mail className="mr-2 h-5 w-5" / /></Mail>
                  Email Us                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer / /></Footer>
    </>
  ),
};

export default SpecializedServicesPage;
