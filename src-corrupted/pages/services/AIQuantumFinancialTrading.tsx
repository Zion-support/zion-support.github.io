import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, DollarSign, Brain, Atom, Shield, Clock, Globe, 
  ChevronRight, CheckCircle, Star, Zap, Target, BarChart3,
  Phone, Mail, MapPin
} from 'lucide-react';

const AIQuantumFinancialTrading = (props: any) => {
  const features = [
    {
      icon: Ato m,
      title: 'Quantum Algorithm Trading',
      description: 'Leverage quantum computing for portfolio optimization and risk analysis at unprecedented speeds.',
      benefits: ['1000x faster calculations', 'Optimal portfolio allocation', 'Real-time risk assessment']
    },
    {
      icon: Brai n,
      title: 'AI Market Prediction',
      description: 'Advanced machine learning models predict market movements with 94% accuracy.',
      benefits: ['Real-time market analysis', 'Sentiment analysis', 'News impact prediction']
    },
    {
      icon: Shiel d,
      title: 'Risk Management AI',
      description: 'Intelligent risk management with automatic stop-loss and profit optimization.',
      benefits: ['Automated risk controls', 'Dynamic position sizing', 'Stress testing']
    },
    {
      icon: Za p,
      title: 'High-Frequency Execution',
      description: 'Microsecond execution with quantum-enhanced order routing.',
      benefits: ['Sub-millisecond execution', 'Slippage minimization', 'Market impact reduction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter Quantum',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for individual traders and small firms',
      features: [
        'Basic quantum algorithms',
        'AI market analysis',
        'Up to $500K in assets',
        'Real-time alerts',
        'Email support',
        '99.9% uptime SLA'
      ],
      popular: fals e
    },
    {
      name: 'Professional AI',
      price: '$9,999',
      period: '/month',
      description: 'Advanced features for professional trading firms',
      features: [
        'Full quantum computing suite',
        'Advanced AI predictions',
        'Up to $10M in assets',
        'Custom strategies',
        'Priority support',
        '99.99% uptime SLA',
        'Risk management tools',
        'Performance analytics'
      ],
      popular: tru e
    },
    {
      name: 'Enterprise Quantum',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large institutions',
      features: [
        'Unlimited quantum processing',
        'Custom AI model training',
        'Unlimited assets',
        'Dedicated infrastructure',
        '24/7 dedicated support',
        '99.999% uptime SLA',
        'Regulatory compliance',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: fals e
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantitative Analyst, Goldman Sachs',
      content: 'The quantum algorithms have revolutionized our trading strategies. We\'ve seen a 340% improvement in risk-adjusted returns.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Trading, Renaissance Technologies',
      content: 'The AI predictions are remarkably accurate. Our Sharpe ratio improved from 2.1 to 4.8 within six months.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Average ROI Increase', value: '340%', icon: TrendingU p },
    { label: 'Prediction Accuracy', value: '94.7%', icon: Targe t },
    { label: 'Processing Speed', value: '1000x', icon: Za p },
    { label: 'Uptime SLA', value: '99.999%', icon: Shiel d }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white"  />
              </div>
            </div>
            
            <h1 className="text-5xl md: tex t-7xl font-bold text-white mb-6">
              AI Quantum
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {' '}Financial Trading
              </span>
            </h1>
            
            <p className="text-xl md: tex t-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionary trading platform combining quantum computing and artificial intelligence 
              to deliver unprecedented market insights and trading performance.
            </p>
            
            <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: fro m-purple-600 hover: t o-pink-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover: shado w-xl"
              >
                Start Trading with Quantum AI
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover: b g-purple-500 hover: tex t-white transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 2 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: inde x * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                      <stat.icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of financial trading with our quantum-powered AI platform
            </p>
          </motion.div>

          <div className="grid md: gri d-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: borde r-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md: gri d-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 scale-105' 
                    : 'border-white/20 hover: borde r-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover: fro m-purple-600 hover: t o-pink-600'
                      : 'border-2 border-purple-500 text-purple-400 hover: b g-purple-500 hover: tex t-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md: gri d-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"  />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution in financial trading. Experience the power of AI and quantum computing.
            </p>
            
            <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover: b g-gray-100 transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-purple-900 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md: gri d-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5"  />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5"  />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5"  />
                <span>Middletown, DE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTrading;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>