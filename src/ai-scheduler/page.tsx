'use client';


const AISchedulerPage: React.FC = () => {
          return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div>
          <div>
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Scheduler</h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">Intelligent Meeting & Event Scheduling</p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">Never miss another meeting with our AI-powered scheduling assistant. Automatically find;
            the best meeting times, coordinate complex team schedules, and optimize your calendar
            for maximum productivity.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />Call: (302) 464-0950</a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Start Free Trial</Link>
          </div>
        </div>
        {/* Key Benefits */}
        <div>
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-white font-semibold mb-2">Hours Saved</div>
            <div className="text-gray-300 text-sm">Per week on scheduling tasks</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Accuracy</div>
            <div className="text-gray-300 text-sm">In meeting time predictions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Fewer No-shows</div>
            <div className="text-gray-300 text-sm">With smart reminders</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Conflict-Free</div>
            <div className="text-gray-300 text-sm">Scheduling guaranteed</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Smart Scheduling Features</h2>
          <div>
            {features.map((feature, index) => (
              <div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Works with Your Favorite Tools</h2>
          <div>
            {integrations.map((integration, index) => (
              <div>
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Simple, Transparent Pricing</h2>
          <div>
            {pricingPlans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>Most Popular</div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>Get Started</button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What Our Users Say</h2>
          <div>
            {testimonials.map((testimonial, index) => (
              <div>
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Your Schedule?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of professionals using AI Scheduler to eliminate scheduling headaches
            and maximize productivity.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />Call: (302) 464-0950</a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Start Free Trial</Link>
          </div>
        </section>
      </section>
    </div>);
}
export default AISchedulerPage