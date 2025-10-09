

const AISocialMediaManagerPage: React.FC = () => {
          return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div>
          <div>
            <div>
              <Share2 className="w-4 h-4 mr-2" />AI-Powered Social Media Management</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Social Media Manager</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Automate your social media presence with AI that creates, schedules, and optimizes
              content across all platforms to maximize engagement and grow your audience.
            </p>
            <div>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">Watch Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Platforms, One Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Manage all your social media accounts from a single, intelligent dashboard</p>
          </div>
          <div>
            {platforms.map((platform, index) => (
              <div>
                <div>
                  <span className="text-3xl">{platform.icon}</span>
                </div>
                <h3 className={`font-semibold ${platform.color}`}>
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Leverage cutting-edge AI technology to streamline your social media management</p>
          </div>
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of brands who have transformed their social media presence</p>
          </div>
          <div>
            {benefits.map((benefit, index) => (
              <div>
                <div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Social Media?
            </h3>
            <p className="text-gray-300 mb-6">Start your free trial today and experience the power of AI-driven social media management</p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your social media needs</p>
          </div>
          <div>
            {pricing.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>Most Popular</div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'border-2 border-slate-600 text-white hover:border-pink-400 hover:text-pink-400'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of brands already using AI Social Media Manager to grow their presence</p>
          <div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">Start Free Trial</button>
            <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>);
}
export default AISocialMediaManagerPage