import React from "react";

const Page = () => {
  return (

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      <Helmet >
        <title>Zion AI Analytics Pro | Advanced Business Intelligence Platform | Zion Tech Group</title><meta
          name="description"
          content="Transform your business with Zion AI Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive modeling, and automated insights. Starting from $299/month."
        />
        <meta
          name="keywords"
          content="AI analytics, business intelligence, predictive analytics, data visualization, dashboard, machine learning, business insights, data analysis"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-analytics-pro"
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
          <div className="max-w-7xl mx-auto"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6"
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2"
                  <span className="text-cyan-400 text-sm font-medium"
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                    Zion AI Analytics Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                  Transform your business with advanced AI-powered business intelligence. Get real-time insights, 
                  predictive analytics, and automated reporting that drives growth and efficiency.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8"
                  <Link to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  </Link>
                  <Link to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform"
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6"
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group"
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1"
                      <div className="text-gray-300 text-sm"
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative"
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  <div className="text-center mb-6"
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center"
                      <BarChart3 className="w-10 h-10 text-white"
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2"
                    <p className="text-gray-300"
                  </div>
                  
                  <div className="space-y-4"
                    <div className="flex items-center text-gray-300"
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3"
                      <span>Real-time dashboards</span>
                    </div>
                    <div className="flex items-center text-gray-300"
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3"
                      <span>Predictive analytics</span>
                    </div>
                    <div className="flex items-center text-gray-300"
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3"
                      <span>Automated reporting</span>
                    </div>
                    <div className="flex items-center text-gray-300"
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3"
                      <span>100+ integrations</span>
                    </div>
                  </div>
                  
                  <div className="mt-6"
                    <Link to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Everything you need to transform your data into actionable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed"
                    {feature.description}
                  </p>
                  <div className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300"
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Choose the plan that fits your business needs. All plans include our core AI analytics features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/25'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"
                    <h3 className="text-2xl font-bold text-white mb-2"
                    <p className="text-gray-300 text-sm mb-4"
                    <div className="flex items-baseline justify-center"
                      <span className="text-4xl font-bold text-cyan-400"
                      <span className="text-gray-300 ml-1"
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8"
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300"
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact"
                    className={`
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                See what our clients say about Zion AI Analytics Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4"
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current""))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">{testimonial.content}
                  <div className="flex items-center"
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3"
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white"
                      <div className="text-sm text-gray-400"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
          <div className="max-w-4xl mx-auto text-center"
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
                Ready to Transform Your Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8"
                Join thousands of businesses already using Zion AI Analytics Pro to drive growth and make data-driven decisions.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                <div className="text-center"
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"
                    <Mail className="w-6 h-6 text-white"
                  </div>
                  <h3 className="text-white font-semibold mb-2"
                  <p className="text-cyan-400"
                </div>
                <div className="text-center"
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"
                    <Phone className="w-6 h-6 text-white"
                  </div>
                  <h3 className="text-white font-semibold mb-2"
                  <p className="text-cyan-400"
                </div>
                <div className="text-center"
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"
                    <Globe className="w-6 h-6 text-white"
                  </div>
                  <h3 className="text-white font-semibold mb-2"
                  <p className="text-cyan-400 text-sm"
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <Link to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                </Link>
                <Link to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden"
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
        <div className="max-w-7xl mx-auto text-center"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6"
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2"
            <span className="text-cyan-400 text-sm font-medium"
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              Zion AI Analytics Pro
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.;
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
        <meta name="description" content="Professional services by Zion Tech Group."
}
  );
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Page</h2>
      <p className="text-gray-300">
        This is a placeholder component for Page.
      </p>
    </div>
  );
};

export default Page;
