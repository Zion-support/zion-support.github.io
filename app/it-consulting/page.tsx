'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services for digital transformation, cloud migration, and cybersecurity solutions." />
      </Helmet>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">IT Consulting Services</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your business with expert IT consulting. We provide strategic guidance,</p>
                digital transformation, and technology solutions that drive growth and efficiency.</p>
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services;)
              </h1>)
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">)
                Transform your business with expert IT consulting. We provide strategic guidance),
                digital transformation, and technology solutions that drive growth and efficiency.
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Expert IT consulting services to help your business navigate digital transformation and technology challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4"></p>
                Strategic guidance to modernize your business processes and technology infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Technology Strategy</li>
                <li>• Process Optimization</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
              </ul>
            </div>
            <div className="grid md: grid-cols-2 gap-8 mb-16">,
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover: shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-6">,
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">,
                      <service.icon className="w-8 h-8 text-blue-600" />,
                    </div>,
                    <div>,
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6"></div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3><p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features: </h4>,
                    <ul className="space-y-2">,
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>,
                    <ul className="space-y-2">,
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" >{benefit}</ArrowRight>
                        </ArrowRight>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center"></div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div><button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
                    </button>
                  </div>
                </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: bg-blue-700 transition-colors"></button>
                      Get Started;
                    </button>,
                  </div>,
                </div>))}
            </div>

            {/* Benefits Section */}
            <section className="py-16 bg-white rounded-2xl shadow-lg mb-16"></section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting?</h2>
                <p className="text-xl text-gray-600">Proven benefits that drive business success</p>
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div className="text-center mb-12"></section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting?</h2><p className="text-xl text-gray-600">Proven benefits that drive business success</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3><p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"></section>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT?</h2><p className="text-xl mb-8">Contact our experts for a free consultation and discover how we can help your business.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950;
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us;
                </a>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>,
    </>,
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Seamless migration to cloud platforms with minimal disruption to your business.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Cloud Strategy Planning</li>
                <li>• Migration Execution</li>
                <li>• Cost Optimization</li>
                <li>• Security Implementation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive security assessments and implementation of best practices.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Security Audits</li>
                <li>• Risk Assessment</li>
                <li>• Compliance Planning</li>
                <li>• Incident Response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsultingPage;