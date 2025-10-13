 origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </div>

</section>

 origin/cursor/analyze-improve-and-deploy-application-1460
  );
};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature .icon className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description</p>}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature} </li>
 cursor/fix-errors-and-merge-to-main-e1a2
                  ))}
                </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we provide end-to-end cloud services that drive growth and efficiency.
 origin/cursor/analyze-improve-and-deploy-application-1247
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="h-8 w-8 text-white" /></CheckCircle>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                </div>
                <p className="text-white font-medium">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto"> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Flexible Pricing Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that best fits your business needs and budget.</p>
            </p>
          </div>

          <div className="grid md: grid-cols-3 gap-8">,</div>
            {pricing.map((plan, index) => (
              <div key={index}className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular;</span>
                    </span>
                  </div>
                )} <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price</div>} <span className="text-lg text-gray-300 font-normal">/{plan.period</span>}</span>
 cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                </div>
<section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p> origin/cursor/analyze-improve-and-deploy-application-0f9e
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
 origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
{/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you migrate, optimize, and secure your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link> origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-13a2
            </div>
 origin/cursor/analyze-improve-and-deploy-application-0f9e
 origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
</div>
      </section>
 cursor/fix-errors-and-merge-to-main-e1a2
            </button>
          </div>
        </div>
      </section>
    </div>

)
}
export default CloudServicesPage origin/cursor/analyze-improve-and-deploy-application-1247
  </button>
  </button>
  </h1>
  </div>
 cursor/fix-errors-and-merge-to-main-e1a2
 cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
 cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
