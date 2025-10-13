import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Globe, Users, CheckCircle, TrendingUp, Mail, BarChart3 } from "lucide-react";;

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for business intelligence",
      price: "$99/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Analytics Pro",
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      id: 2,
      name: "Zion AI Customer Insights",
      description: "AI-driven customer behavior analysis and insights",
      price: "$79/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Insights",
      href: "/zion-ai-customer-insights",
      popular: false
    },
    {
      id: 3,
      name: "Zion AI Email Analyzer",
      description: "Intelligent email analysis and optimization tool",
      price: "$59/month",
      features: ["Email sentiment analysis", "Spam detection", "Performance metrics", "A/B testing"],
      icon: <Mail className="w-8 h-8" />,
      title: "AI Email Analyzer",
      href: "/zion-ai-email-analyzer",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate complex business processes",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cost-Effective Solutions",
      description: "Get enterprise-level features at micro-SaaS pricing",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Global Accessibility",
      description: "Access your tools from anywhere in the world, anytime",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS applications designed for modern businesses. AI-powered tools for analytics, customer insights, and more." />
        <meta name="keywords" content="micro saas, ai analytics, customer insights, email analyzer, business tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SAAS applications designed for modern businesses. 
            AI-powered tools that deliver enterprise-level functionality at startup-friendly prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of specialized AI-powered tools designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-200 ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-gray-700'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={product.href}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed to provide maximum value with minimal complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with our micro SAAS solutions and scale as you grow. No long-term commitments, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;