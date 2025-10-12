'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

        {/* Hero Section */}
        <section className="relative overflow-hiddenpt-20pb-16" />

                    <div className="{`inline-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon className="h-6w-6text-white" />
                    </div>
                    <h3 className="text-xl font-semiboldtext-white mb-3"   />{feature.title}</h3>
                    <p className="text-gray-300">
              {feature.description}</p>
                  </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="text-centermb-16">
              <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key="{index}"
                  className="{`relative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>

                  )}
                  <div className="text-centermb-8">
                    <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="text-gray-400mb-4">
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center">
                      <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="text-gray-400ml-1"   />{plan.period}</span>
                    </div>
                  <ul className="space-y-4mb-8" />

                    {plan.features.map((feature, idx) => (
                      <li key="{idx}" className="flex items-center text-gray-300" />
                        <CheckCircle className="h-5 w-5 text-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>

                    ))}
                  </ul>
                  <Link to="/contact"
                    className="{`w-full" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} >
          Get Started
                    
          <ArrowRight className="ml-2h-4w-4"  />
        </Link>
                </div>

              ))}
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20bg-gray-900/50" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="text-centermb-16">
              <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-gray-800 rounded-xl p-6borderborder-gray-700" />
                  <div className="flex items-centermb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-semiboldmr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                      <div className="text-smtext-gray-400"   />{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="flexmb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="h-4 w-4text-yellow-400fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300italic">
              "{testimonial.content}"</p>
                </div>

              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-brfrom-gray-900to-purple-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6lg:px-8text-center">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Start Free Trial
                
          <ArrowRight className="ml-2h-5w-5"  />
        </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default ZionAnalyticsProPage;
