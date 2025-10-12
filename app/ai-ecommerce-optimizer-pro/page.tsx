

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms analyze customer behavior and optimize your e-commerce platform in real-time'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Performance Enhancement',
      description: 'Boost conversion rates, reduce cart abandonment, and increase average order value with intelligent recommendations'
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with PCI DSS compliance and advanced fraud detection'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior, sales performance, and optimization opportunities'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimization, machine learning, Zion Tech Group" />

        <meta property="og:title" content="AI E-commerce Optimizer Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-optimizer-pro" />

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI E-commerce Optimizer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your e-commerce platform with cutting-edge AI technology. 
              Boost sales, improve customer experience, and maximize your revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View All Services

              </Link>
            </div>
        </div>
      </section>

        {/* Features Section */}

                  icon: <Zap className="w-5 h-5ml-2" />,

                  title: "Real-time Analytics",
                  description: "Get instant insi ghts into customer behavior and sales performance with our comprehensive dashboard."
                },
                {

                  icon: <Shield className="w-5 h-5ml-2" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
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
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Choose Your Plan
              </h2>
              <p className="w-5 h-5ml-2">Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      {plan.price}
                      <span className="w-5 h-5ml-2" />{plan.period}</span>
                    </div>
                    <p className="w-5 h-5ml-2">{plan.description}</p>
                  </div>
                  
                  <ul className="w-5 h-5ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />

                        {feature}
                      </li>
                    ))}
                  </ul>

                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your E-commerce?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered solutions to boost their online sales.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

          </div>
        </section>
      </div>

    </>
  );

=======
}

>>>>>>> main
