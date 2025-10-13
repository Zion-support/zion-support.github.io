import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const EmailMarketingPlatformPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Email Marketing Platform - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Professional email marketing platform services and solutions. Expert implementation and support for your business needs." />
        <meta name="keywords" content="email marketing platform, professional services, business solutions, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
=======
import { ArrowRight, CheckCircle, Mail, BarChart3, Users, Target, Zap, Shield, Cloud, Settings, Send, TrendingUp } from 'lucide-react';

const EmailMarketingPlatformPage = () => {
  const features = [
    {
      title: "Email Campaign Management",
      description: "Create, design, and send professional email campaigns with our intuitive drag-and-drop editor",
      icon: <Mail className="w-8 h-8" />,
      benefits: ["Drag & drop editor", "Email templates", "A/B testing", "Automated campaigns"]
    },
    {
      title: "Contact Management",
      description: "Organize and segment your email lists for targeted and personalized campaigns",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Contact segmentation", "List management", "Import/export", "Custom fields"]
    },
    {
      title: "Analytics & Reporting",
      description: "Track email performance with detailed analytics and comprehensive reporting",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Open rates", "Click tracking", "Conversion metrics", "Custom reports"]
    },
    {
      title: "Automation Workflows",
      description: "Set up automated email sequences and nurture campaigns for better engagement",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Drip campaigns", "Behavioral triggers", "Welcome series", "Re-engagement"]
    },
    {
      title: "Deliverability Optimization",
      description: "Ensure your emails reach the inbox with advanced deliverability tools and monitoring",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Spam testing", "Domain authentication", "Reputation monitoring", "Compliance tools"]
    },
    {
      title: "Integration Hub",
      description: "Connect with your favorite tools and platforms for seamless workflow integration",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["CRM integration", "E-commerce sync", "API connections", "Webhook support"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 contacts",
        "Unlimited emails",
        "Basic templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced automation",
        "A/B testing",
        "Priority support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Email Marketing Platform - Zion Tech Group | Email Campaign Management & Automation</title>
        <meta name="description" content="Powerful email marketing platform with campaign management, automation workflows, analytics, and deliverability optimization. Grow your business with email marketing." />
        <meta name="keywords" content="email marketing, email campaigns, marketing automation, email analytics, email deliverability, marketing platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              Email Marketing Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<< HEAD
            Professional email marketing platform services and solutions. Expert implementation and support for your business needs.
=======
            Grow your business with powerful email marketing campaigns, automation workflows, and advanced analytics. 
            Reach your audience effectively with our comprehensive email marketing solution.
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
<<<<<<< HEAD
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
=======
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert email marketing platform solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Email Marketing Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize your email marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
<<<<<<< HEAD
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
=======
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and email marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                  plan.popular 
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your email marketing platform requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
=======
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how our email marketing platform can help you grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Micro SAAS
            </Link>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default EmailMarketingPlatformPage;
=======
export default EmailMarketingPlatformPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
