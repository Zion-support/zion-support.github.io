import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Shield, TrendingUp, Server, Zap, BarChart3 } from 'lucide-react'
import Layout from '../layout'

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to ensure optimal performance and cost efficiency'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting with comprehensive dashboards and automated incident response'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics & Insights',
      description: 'Advanced analytics to optimize infrastructure performance and make data-driven decisions'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 cloud accounts',
        'Basic monitoring',
        'Email support',
        'Standard integrations',
        'Cost optimization reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 50 cloud accounts',
        'Advanced monitoring',
        'Priority support',
        'Custom integrations',
        'Automated scaling',
        'Security compliance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited cloud accounts',
        'Custom dashboards',
        'Dedicated support',
        'White-label solution',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Liu',
      company: 'TechCorp Solutions',
      content: 'Our cloud costs dropped by 35% in the first quarter. The optimization recommendations are spot-on.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Global Enterprises',
      content: 'The multi-cloud management is seamless. We can now manage all our cloud resources from one dashboard.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'StartupScale Inc',
      content: 'Auto-scaling saved us during traffic spikes. The system handled 10x normal load without any issues.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Optimize your cloud infrastructure with intelligent management, automated scaling, 
            and cost optimization across all major cloud platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
              Start Free Trial
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Cloud Management
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Everything you need to manage and optimize your cloud infrastructure
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Flexible Pricing Plans
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Choose the plan that scales with your infrastructure needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-cyan-400' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Cloud className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Cloud Leaders
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See how companies are optimizing their cloud infrastructure
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8">
            Join industry leaders who are already maximizing their cloud efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}