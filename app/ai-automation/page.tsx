import React from 'react';
import { CheckCircle, ArrowRight, Zap, Settings, Workflow, Clock, DollarSign, Star, Users, BarChart3, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIAutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-6 h-6 text-blue-500" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management'
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: 'Custom Integrations',
      description: 'Connect your existing tools and systems seamlessly'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Monitor and optimize your automated processes in real-time'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance monitoring'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['5 workflows', 'Basic integrations', 'Email support', 'Standard templates'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['25 workflows', 'Advanced integrations', 'Priority support', 'Custom templates', 'Analytics dashboard'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited workflows', 'All integrations', '24/7 support', 'Custom development', 'Advanced analytics'],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'Reduce manual work by up to 80% with intelligent automation',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reduce Costs',
      description: 'Lower operational costs through efficient process automation',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Improve Accuracy',
      description: 'Eliminate human errors with consistent automated processes',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scale Easily',
      description: 'Grow your automation capabilities as your business expands',
      icon: <Globe className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechFlow Inc.',
      content: 'AI Automation transformed our operations. We saved 20 hours per week and reduced errors by 95%.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'DataCorp Solutions',
      content: 'The workflow automation is incredible. Setup was easy and the results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'Outstanding support and powerful features. Our team productivity increased significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Automate your business processes with our intelligent AI automation suite. Reduce manual work, improve efficiency, and scale your operations." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, intelligent automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Automation Suite
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automate your business processes with intelligent AI-powered automation. 
              Reduce manual work, improve efficiency, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with intelligent automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your automation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start your automation journey today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}