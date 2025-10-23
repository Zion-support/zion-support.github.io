

  return (
    <>
      <Helmet>

            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Trusted Across Industries
              </h2>
              <p className="text-lg text-gray-300">
                Reduce churn for any business type
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">


                    {industry.icon}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-red-400 transition-colors">

                    {industry.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features for Customer Retention
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to predict, prevent, and reduce customer
                churn with AI intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                  <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">

                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">

                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Retention Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your customer
                base
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">

                      <span className="text-4xl font-bold text-red-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">

                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Customer Success Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are reducing churn with AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                  <div className="flex items-center mb-4">


                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">

                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">

                      {testimonial.avatar}
                    </div>
                    <div>

                      <div className="font-semibold text-white">

                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">

                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-12">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Reduce Customer Churn?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Customer
                Churn Predictor Pro to retain more customers and increase
                lifetime value. Start your free trial today and see the
                difference AI can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">


                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400">

                <p>
                  ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel
                  anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICustomerChurnPredictorProPage;
  );