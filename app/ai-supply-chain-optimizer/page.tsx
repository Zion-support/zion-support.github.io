import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AISupplyChainOptimizerPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'AI-powered algorithms continuously optimize your supply chain for maximum efficiency'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced predictive analytics to identify and mitigate supply chain risks'
    },
    {
<<<<<<< HEAD
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Real-time optimization',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'API access',
        'Custom reporting'
      ],
      popular: false
=======
      icon: Globe,
      title: 'Global Visibility',
      description: 'End-to-end visibility across your entire supply chain network'
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
<<<<<<< HEAD
      company: 'TechCorp Industries',
      role: 'Supply Chain Director',
      content: 'The AI optimization reduced our logistics costs by 35% and improved delivery times significantly.',
=======
      role: 'Supply Chain Director',
      company: 'TechCorp Inc.',
      content: 'This AI solution transformed our supply chain efficiency by 40% in just 3 months.',
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
      rating: 5
    },
    {
      name: 'Michael Chen',
<<<<<<< HEAD
      company: 'Global Logistics Ltd',
      role: 'Operations Manager',
      content: 'Outstanding predictive capabilities. We can now anticipate demand fluctuations with incredible accuracy.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Manufacturing Solutions',
      role: 'VP of Operations',
      content: 'The automated inventory management has eliminated stockouts while reducing excess inventory by 40%.',
=======
      role: 'Operations Manager',
      company: 'Global Logistics Ltd.',
      content: 'The predictive analytics helped us avoid major disruptions and save millions.',
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization, predictive analytics, and automated inventory management." />
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {' '}Supply Chain Optimization
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with intelligent AI solutions that predict demand, optimize routes, 
                and automate inventory management for maximum efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Intelligent Supply Chain Features
                </h2>
                <p className="text-gray-300 text-lg">
                  Powered by advanced AI to optimize every aspect of your supply chain
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Flexible Pricing Plans
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the plan that scales with your business
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'border-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Flexible Pricing Plans
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the plan that scales with your business
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
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
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      href="/contact" 
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-gray-300 text-lg">
                  See how companies are transforming their supply chains
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Join hundreds of companies optimizing their supply chains
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index}>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join industry leaders who are already transforming their supply chains with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Your Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </section>
<<<<<<< HEAD
<<<<<<< HEAD

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 mb-8">
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
=======
        <title>AI Supply Chain Optimizer | Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization solutions. Real-time analytics, risk management, and global visibility." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Supply Chain
            </span>
            <br />
            <span className="text-white">Optimizer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your supply chain with cutting-edge AI technology. Optimize operations, 
            reduce costs, and improve efficiency with our advanced solutions.
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
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
          </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2d8f
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Supply Chain Optimizer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-09f3
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies already optimizing their supply chains with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join industry leaders who are already transforming their supply chains with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizerPage;
