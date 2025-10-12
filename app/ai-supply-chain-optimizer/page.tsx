import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { Clock, Shield, Star, Target, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';

const AISupplyChainOptimizerPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Optimization',
      description: 'AI-powered algorithms continuously optimize your supply chain for maximum efficiency'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced predictive analytics to identify and mitigate supply chain risks'
    },
    {
      icon: Globe,
      title: 'Global Visibility',
      description: 'End-to-end visibility across your entire supply chain network'
    },
    {
      icon: Package,
      title: 'Automated Inventory',
      description: 'Intelligent inventory control with automated reordering and waste reduction'
    },
    {
      icon: Clock,
      title: 'Predictive Analytics',
      description: 'Forecast demand and optimize logistics with machine learning algorithms'
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Reduce operational costs through intelligent resource allocation'
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
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      role: 'Supply Chain Director',
      content: 'The AI optimization reduced our logistics costs by 35% and improved delivery times significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
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
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
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
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Powerful AI Features
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Leverage cutting-edge artificial intelligence to optimize every aspect of your supply chain
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your Plan
                </h2>
                <p className="text-gray-300 text-lg">
                  Flexible pricing options to fit your business needs
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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

          {/* Testimonials Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-gray-300 text-lg">
                  See how companies are transforming their supply chains
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">
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
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
        </div>
      </FuturisticBackground>
    </div>
  );
};

export default AISupplyChainOptimizerPage;