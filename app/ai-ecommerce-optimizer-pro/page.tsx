import React from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiEcommerceOptimizerProPage: React.FC = () => {
  return (
    <>
      <Helmet >
        Content
      </Helmet>
        Content
      </Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description"
          content="Transform your e-commerce business with advanced AI optimization solutions that boost sales, improve conversion rates, and maximize your online store performance."
        />
        Content
      </meta>
        Content
      </meta>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        Content
      </div>
        Content
      </div>
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
        Content
      </div>
        Content
      </div>
          <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
            <h1 className="text-5xl font-bold text-white mb-6">
        Content
      </h1>
        Content
      </h1>
              AI E-commerce <span className="text-blue-600">Optimizer Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
              Transform your e-commerce business with advanced AI optimization
              solutions that boost sales, _improve conversion rates, and maximize
              your online store performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
              <Link to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
        Content
      </Link>
        Content
      </Link>
                Get Started
              </Link>
              <Link to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
        Content
      </Link>
        Content
      </Link>
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        Content
      </div>
        Content
      </div>
            {features.map((feature, index) => (
              <div key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        Content
      </div>
        Content
      </div>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
        Content
      </h3>
        Content
      </h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Optimization Features Section */}
          <div className="mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
        Content
      </h2>
        Content
      </h2>
              Optimization Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        Content
      </div>
        Content
      </div>
              {optimizationFeatures.map((category, index) => (<div key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        Content
      </div>
        Content
      </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
        Content
      </h3>
        Content
      </h3>
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
        Content
      </ul>
        Content
      </ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}
                        className="text-gray-300 flex items-center">
        Content
      </li>
        Content
      </li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
        Content
      </CheckCircle>
        Content
      </CheckCircle>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
        Content
      </h2>
        Content
      </h2>
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
              {pricingPlans.map((plan, index) => (
                <div key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}>
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
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Content
      </span>
        Content
      </span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
        Content
      </div>
        Content
      </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
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
                      <span className="text-lg text-gray-300">
        Content
      </span>
        Content
      </span>
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
        Content
      </ul>
        Content
      </ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}
                        className="text-gray-300 flex items-center">
        Content
      </li>
        Content
      </li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
        Content
      </CheckCircle>
        Content
      </CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
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

          {/* Testimonials Section */}
          <div className="mb-16">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
        Content
      </h2>
        Content
      </h2>
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
              {testimonials.map((testimonial, index) => (
                <div key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        Content
      </div>
        Content
      </div>
                  <div className="flex items-center mb-4">
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
                  <p className="text-gray-300 mb-4 italic">
        Content
      </p>
        Content
      </p>
                    "{testimonial.content}"
                  </p>
                  <div >
        Content
      </div>
        Content
      </div>
                    <p className="text-white font-semibold">
        Content
      </p>
        Content
      </p>
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
        Content
      </p>
        Content
      </p>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
        Content
      </div>
        Content
      </div>
            <h2 className="text-3xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
              Ready to Optimize Your E-commerce Store?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
        Content
      </p>
        Content
      </p>
              Contact us to learn more about our AI optimization solutions and
              how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
              <Link to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
        Content
      </Link>
        Content
      </Link>
                Contact Us
              </Link>
              <Link to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
        Content
      </Link>
        Content
      </Link>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AiEcommerceOptimizerProPage;
