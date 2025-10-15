<<<<<<< HEAD

ursor/fix-errors-and-merge-to-main-234b
>>>>>>> main
=======
};
const page = React.lazy(() => import('./page'));''
export default page;
=======

        {/* Pricing Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>
          <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricing.map((plan, index) => ()}
                <divkey={index},>
      className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${},
      plan.popular 
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/20'
                  } hover:border-white/40 transition-all duration-300 hover:scale-105`};
                ></div
>
                  {plan.popular && ()}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                        Most Popular
                      </span>
                    </div>
                  )};
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => ()}
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))};
                  </ul>
                  
                  <>
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${},
      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`};
                  ></>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Testimonials */};
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Join thousands of businesses using Zion Analytics Pro to drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => ()}
                <divkey={index},>
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                ></div
>
                  <div className="flex items-center mb-4">
        <div className="flex items-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      {testimonial.avatar};
                    </div>
                    <div className="ml-4"></div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3"></div>
                    {[...Array(testimonial.rating)].map(( i) => ()}
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))};
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Start your free 14-day trial today. No credit card required. 
              See how Zion Analytics Pro can transform your business intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <>
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              ></>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
              <>
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              ></>
                <DollarSign className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Pricing
              </>
            </div>

            <div className="mt-8 text-sm text-gray-400"></div>
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <pclassName="mt-2">

    </>
  ),
};

>>>>>>> main
>>>>>>> main
