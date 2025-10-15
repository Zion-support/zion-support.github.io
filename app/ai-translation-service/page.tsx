import React from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiTranslationServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        Content
      </div>
        Content
      </div>
      <Helmet >
        Content
      </Helmet>
        Content
      </Helmet>
        <title>AI Translation Service | Zion Tech Group</title>
        <meta name="description"
          content="Professional AI-powered translation services with 100+ language support and enterprise-grade security."
        />
        Content
      </meta>
        Content
      </meta>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        Content
      </section>
        Content
      </section>
        <div className="max-w-7xl mx-auto text-center">
        Content
      </div>
        Content
      </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Content
      </h1>
        Content
      </h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        Content
      </span>
        Content
      </span>
              AI Translation
            </span>
            <br />
        Content
      </br>
        Content
      </br>
            <span className="text-white">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
            Break language barriers with our advanced AI translation technology.
            Fast, accurate, and secure translation for over 100 languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        Content
      </Link>
        Content
      </Link>
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
        Content
      </ArrowRight>
        Content
      </ArrowRight>
            </Link>
            <Link to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
        Content
      </Link>
        Content
      </Link>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        Content
      </section>
        Content
      </section>
        <div className="max-w-7xl mx-auto">
        Content
      </div>
        Content
      </div>
          <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
              Why Choose Our AI Translation Service?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
              Our AI-powered translation solutions deliver unmatched accuracy, _speed, and security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
            {features.map((feature, index) => (
              <div key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
        Content
      </div>
        Content
      </div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
        Content
      </div>
        Content
      </div>
                  <feature .icon className="h-6 w-6 text-white" />
        Content
      </feature>
        Content
      </feature>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
        Content
      </h3>
        Content
      </h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
        Content
      </p>
        Content
      </p>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        Content
      </section>
        Content
      </section>
        <div className="max-w-6xl mx-auto">
        Content
      </div>
        Content
      </div>
          <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
              Flexible Pricing Plans
            </h2>
            <p className="text-gray-300 text-lg">
        Content
      </p>
        Content
      </p>
              Choose the plan that fits your translation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
            {pricingPlans.map((plan, index) => (
              <div key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? "border-cyan-400" : ""}`}>
        Content
      </div>
        Content
      </div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        Content
      </div>
        Content
      </div>
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
        Content
      </span>
        Content
      </span>
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">
        Content
      </h3>
        Content
      </h3>
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
        Content
      </div>
        Content
      </div>
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
        Content
      </ul>
        Content
      </ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}
                      className="flex items-center text-sm text-gray-300">
        Content
      </li>
        Content
      </li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
        Content
      </CheckCircle>
        Content
      </CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  }`}>
        Content
      </Link>
        Content
      </Link>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        Content
      </section>
        Content
      </section>
        <div className="max-w-7xl mx-auto">
        Content
      </div>
        Content
      </div>
          <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
              Join hundreds of companies already using our AI translation
              services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        Content
      </div>
        Content
      </div>
            {testimonials.map((testimonial, index) => (
              <div key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        Content
      </div>
        Content
      </div>
                <div className="flex mb-4">
        Content
      </div>
        Content
      </div>
                  {[...Array(testimonial.rating)].map(( i) => (
                    <Star key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
        Content
      </Star>
        Content
      </Star>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">
        Content
      </div>
        Content
      </div>
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-gray-500">
        Content
      </div>
        Content
      </div>
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        Content
      </section>
        Content
      </section>
        <div className="max-w-4xl mx-auto text-center">
        Content
      </div>
        Content
      </div>
          <h2 className="text-4xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
            Ready to Break Language Barriers?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
        Content
      </p>
        Content
      </p>
            Start translating your content with AI-powered precision today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        Content
      </Link>
        Content
      </Link>
              Start Your Free Trial
            </Link>
            <Link to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
        Content
      </Link>
        Content
      </Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AiTranslationServicePage;
