import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Brain, Cloud, Users, Lock, Globe, Cpu, Atom, Database, BarChart3, Smartphone, Server, Network, Eye, Heart, ShoppingCart, MessageCircle, BookOpen, DollarSign, Gauge, HelpCircle, Target, Lightbulb, Leaf, Factory, Building, Clock, Phone, Mail, MapPin, TrendingUp, Bot } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI-powered content generation',
        'Basic SEO optimization',
        'Email support',
        '5 projects per month',
        'Standard templates',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      popular: false,
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Everything in Starter',
        'Advanced AI models',
        'Priority support',
        'Unlimited projects',
        'Custom templates',
        'Advanced analytics dashboard',
        'API access',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: true,
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced integrations',
        'Custom compliance',
        '24/7 phone support',
        'SLA guarantees',
        'Custom development'
      ],
      popular: false,
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Machine Learning',
      services: [
        { name: 'AI Content Generation', price: '$49/month', description: 'Automated content creation with AI' },
        { name: 'AI Business Intelligence', price: '$199/month', description: 'Advanced analytics and insights' },
        { name: 'AI Cybersecurity Platform', price: '$399/month', description: 'AI-powered threat detection' },
        { name: 'AI Healthcare Analytics', price: '$299/month', description: 'Healthcare data analysis platform' },
        { name: 'AI Supply Chain Optimization', price: '$249/month', description: 'Supply chain AI solutions' },
        { name: 'AI Customer Experience Analytics', price: '$179/month', description: 'Customer behavior analysis' }
      ]
    },
    {
      category: 'Quantum Computing',
      services: [
        { name: 'Quantum AI Platform', price: '$999/month', description: 'Hybrid quantum-classical computing' },
        { name: 'Quantum Neural Network', price: '$1,299/month', description: 'Advanced quantum ML platform' },
        { name: 'Quantum Computing Solutions', price: '$799/month', description: 'Quantum computing services' }
      ]
    },
    {
      category: 'IT & Infrastructure',
      services: [
        { name: 'Cloud DevOps Automation', price: '$199/month', description: 'Automated cloud infrastructure' },
        { name: 'IT Infrastructure Management', price: '$299/month', description: 'Complete IT infrastructure' },
        { name: 'Cybersecurity Solutions', price: '$249/month', description: 'Comprehensive security' },
        { name: 'Network Infrastructure', price: '$179/month', description: 'Network optimization' },
        { name: 'IT Onsite Services', price: '$150/hour', description: 'Onsite technical support' }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      services: [
        { name: 'Micro CRM Platform', price: '$29/month', description: 'Small business CRM solution' },
        { name: 'Employee Scheduling SaaS', price: '$39/month', description: 'Staff scheduling platform' },
        { name: 'Returns Management SaaS', price: '$49/month', description: 'E-commerce returns handling' },
        { name: 'Mobile Survey Tool', price: '$19/month', description: 'Mobile survey platform' },
        { name: 'AI Email Responder', price: '$79/month', description: 'Automated email responses' }
      ]
    },
    {
      category: 'Specialized Solutions',
      services: [
        { name: 'Healthcare Tech Platform', price: '$399/month', description: 'Healthcare technology solutions' },
        { name: 'Financial Trading AI', price: '$599/month', description: 'AI-powered trading platform' },
        { name: 'Green IT Solutions', price: '$199/month', description: 'Sustainable technology' },
        { name: 'Blockchain Enterprise', price: '$349/month', description: 'Enterprise blockchain solutions' },
        { name: 'IoT Edge Computing', price: '$279/month', description: 'Edge computing platform' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
          </motion.p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-2xl shadow-2xl ${
                plan.popular ? 'ring-4 ring-cyan-400 ring-opacity-50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/80 ml-1">{plan.period}</span>
                </div>
                <p className="text-white/80">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/90">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-slate-900 hover:bg-gray-100'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service-Specific Pricing */}
        <div className="space-y-12">
          {servicePricing.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                    className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700/70"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We offer custom development and enterprise solutions tailored to your specific needs. 
            Contact us for a personalized quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
