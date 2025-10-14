import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiSolutions() {
  return (
    <>
      <Helmet>
        <title>Ai Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ai solutions services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai solutions services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      {/* AI Services Grid */})
)
            {aiServices.map((service, index) => {;
const Icon = service.icon;"
              return (""
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark"></div>""
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}></div>`""
                    <Icon className="w-8 h-8 text-white" />"
                  </div>"
""
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>""
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    { service.description }

                  </p>
"
                  {/* Pricing */}""
                  <div className="mb-6"></div>"""
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>"
                  </div>

                  {/* Features */})
)"
                      {service.features.map((feature, featureIndex) => (""
                        <li key={featureIndex} className="flex items-center text-gray-300">"""
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />"""
                          <span className="text-sm">{feature}</span>")
                        </li>)
                      ))
                    </ul>
                  </div>

                  {/* Benefits */}

                        </span>
                      ))
                    </div>
                  </div>

                  {/* Use Cases */}

                        </span>
                      ))
                    </div>
                  </div>"
""
                  <div className="flex gap-2"></div>
                    <Link"
                      to={ service.href }""
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"
"
                    >""
                      Learn More <ArrowRightIcon className="w-4 h-4" />"
                    </Link>"
                    <Link""
                      to="/contact""""
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold""
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}

              Why Choose Our AI Solutions?"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Built with cutting-edge technology and designed for enterprise-scale performance
            </p>"
          </div>""
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"></div>"""
            <div className="text-center"></div>"""
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <CpuChipIcon className="w-10 h-10 text-white" />""
              </div>""
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Algorithms</h3>"""
              <p className="text-gray-300">"
                State-of-the-art AI algorithms and models trained on massive datasets for superior performance.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <ClockIcon className="w-10 h-10 text-white" />""
              </div>""
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>"""
              <p className="text-gray-300">"
                Lightning-fast AI processing with sub-second response times for real-time applications.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <ShieldCheckIcon className="w-10 h-10 text-white" />""
              </div>""
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>"""
              <p className="text-gray-300">"
                Bank-level security with encryption, compliance, and privacy protection built-in.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <CogIcon className="w-10 h-10 text-white" />""
              </div>""
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>"""
              <p className="text-gray-300">"
                Tailored AI solutions designed specifically for your business needs and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}

              Our AI Implementation Process"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              A proven methodology for successful AI implementation and deployment
            </p>"
          </div>""
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"></div>"""
            <div className="text-center"></div>"""
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <span className="text-white font-bold text-xl">1</span>""
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>"""
              <p className="text-gray-300">"
                We analyze your business processes, data, and requirements to identify AI opportunities.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <span className="text-white font-bold text-xl">2</span>""
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>"""
              <p className="text-gray-300">"
                We design custom AI solutions tailored to your specific needs and business objectives.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <span className="text-white font-bold text-xl">3</span>""
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">Development & Training</h3>"""
              <p className="text-gray-300">"
                Our AI experts develop and train models using your data for optimal performance.
              </p>"
            </div>""
            <div className="text-center"></div>"""
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>"""
                <span className="text-white font-bold text-xl">4</span>""
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>"""
              <p className="text-gray-300">"
                We deploy your AI solution and provide ongoing support, monitoring, and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

              Let's discuss how our AI solutions can transform your business and drive innovation'"
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>""
              <Link""
                to="/contact""""
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2""
              >"
                Get Free AI Consultation""
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>"
              <Link""
                to="/demo""""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2""
              >"
                Schedule AI Demo""
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>"
            </div>""
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300"></div>"""
              <div className="flex items-center gap-3"></div>"""
                <PhoneIcon className="w-6 h-6 text-purple-400" />"
                <span>+1-302-464-0950</span>"
              </div>""
              <div className="flex items-center gap-3"></div>"""
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>

      </section></>

      </section>
    </>
  );";
export default AISolutionsPage;""
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and predictive analytics." />"""
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting" />"
      </Helmet>"
""
      <div className="min-h-screen bg-slate-900"></div>"
        { /* Hero Section */ }""
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center"></div>""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">

              AI Solutions"
            </h1>""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"""
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"
                Get Started"
              </button>""
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">"
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}

              Our AI Solutions"
            </h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>""
              {aiServices.map((service, index) => (""
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"></div>""
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}></div>`""
                    <service.icon className="w-6 h-6 text-white" />""
                  </div>""
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>"""
                  <p className="text-gray-300 mb-4">{service.description}</p>"""
                  <div className="mb-4"></div>"""
                    <p className="text-purple-400 font-semibold">{service.price}</p>"
                  </div>
                  <Link 
"
                    to={ service.href }""
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
"
                  >""
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />"
                  </Link>)
                </div>)
              ))
            </div>
          </div>
        </section>

        {/* Features Section */}

              Why Choose Our AI Solutions?"
            </h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>""
              {features.map((feature, index) => (""
                <div key={index} className="text-center"></div>"""
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4"></div>"""
                    <feature.icon className="w-8 h-8 text-white" />""
                  </div>""
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"""
                  <p className="text-gray-300">{feature.description}</p>")
                </div>)
              ))
            </div>
          </div>
        </section>

        {/* CTA Section */}
'
              Let's discuss how our AI solutions can help you achieve your goals.'"
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"""
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"
                Schedule Consultation"
              </button>""
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">"
                View Portfolio
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
;
export default HomePage;"
"
}}}}}}}}}
"'
