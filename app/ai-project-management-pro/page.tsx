
'use client';
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f;
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Brain  } from "lucide-react";
              {[
                {
                  icon: <><Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Planning",
                  description: "Advanced machine learning algorithms help optimize project timelines and resource allocation."
                },
                {
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Tracking",
                  description: "Get instant insights into project progress and team performance with our comprehensive dashboard."
                },
                {icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your project data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
    <>div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <>div className="flexjustify-centermb-4" ></div>
        <meta property="og:type" content="website" /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" /></meta>
      </Helmet>

      <><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16" ></div>
        {/* Hero Section */}
        <section className="py-20" ></section>
          <div className="container mx-auto px-4 text-center" ></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" ></h1>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" ></span>
                AI Project Management Pro;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" ></p>
              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" ></div>
              <Link;></Link>
                to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group" ></Link>
              >
                Get Started;
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link><Link;></Link></>
                to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105" ></Link>
              >
                Learn More;
              </Link>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" ></section>
          <div className="container mx-auto px-4" ></div><div className="text-center mb-16" ></div></>
              <h2 className="text-4xl font-bold text-white mb-4" >Key Features</h2>
              <p className="text-xl text-gray-300" >Powerful AI capabilities for superior project management</p>
            </div>
            <>div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300" ></div><div className="mb-4" >{feature.icon}</div></>
                  <h3 className="text-xl font-semibold text-white mb-2" >{feature.title}</h3>
                  <p className="text-gray-300" >{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20" ></section>
          <>div className="container mx-auto px-4" ></div><div className="text-center mb-16" ></div></>
              <h2 className="text-4xl font-bold text-white mb-4" >Pricing Plans</h2>
              <p className="text-xl text-gray-300" >Choose the perfect plan for your team</p>
            </div>
            <>div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : 'border-slate-700'}`}></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" ></div>
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold" ></span>
                        Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6" ></div>
                    <h3 className="text-2xl font-bold text-white mb-2" >{plan.name}</h3>
                    <div className="flex items-baseline justify-center" ></div>
                      <span className="text-4xl font-bold text-white" >{plan.price}</span>
                      <span className="text-gray-400 ml-1" >{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2" >{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8" ></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" ></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link;
                    to="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'></Link>
                    }`}></Link>
                  >
                    Get Started;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" ></section>
          <div className="container mx-auto px-4" ></div><div className="text-center mb-16" ></div></>
              <h2 className="text-4xl font-bold text-white mb-4" >What Our Clients Say</h2>
              <p className="text-xl text-gray-300" >Real results from real teams</p>
            </div>
            <>div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6" ></div><div className="flex items-center mb-4" ></div></>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic" >"{testimonial.content}"</p>
                  <div></div>
                    <p className="font-semibold text-white" >{testimonial.name}</p>
                    <p className="text-cyan-400" >{testimonial.company}</p>
                  </div>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de;
            </div>
        </section></>

        {/* CTA Section */}
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div><Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" /></></>
                  Contact Us;
    <>/Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" /></>
                  View Services;
                </Link>
              </div>



    </div></div></div>
}))