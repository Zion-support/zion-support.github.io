import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Smartphone, 
  Globe, 
  BarChart3,
  Users,
  Award,
  Rocket,
  CheckCircle
} from 'lucide-react';

const NewFeaturesShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide deep insights into your business performance and predict future trends.",
      color: "from-purple-500 to-pink-500",
      stats: "95% accuracy rate"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols to protect your most sensitive data and operations.",
      color: "from-blue-500 to-cyan-500",
      stats: "99.9% uptime guarantee"
    },
    {
      icon: Rocket,
      title: "Lightning Performance",
      description: "Optimized infrastructure that delivers blazing-fast response times and seamless user experiences.",
      color: "from-green-500 to-emerald-500",
      stats: "50% faster loading"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Real-time collaboration tools that enable your team to work together seamlessly from anywhere in the world.",
      color: "from-orange-500 to-red-500",
      stats: "10,000+ active users"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our digital infrastructure completely. The ROI was evident within the first month.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "Their AI solutions helped us automate 80% of our processes. The team's expertise is unmatched.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, FutureSystems",
      content: "The security and performance improvements have been game-changing for our business operations.",
      avatar: "👩‍🔬"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "Basic AI Analytics",
        "Standard Security",
        "Email Support",
        "Up to 5 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      features: [
        "Advanced AI Analytics",
        "Enhanced Security",
        "Priority Support",
        "Up to 25 users",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Full AI Suite",
        "Military-Grade Security",
        "Dedicated Support",
        "Unlimited Users",
        "Custom Development"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              New Features Available Now
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Technology</span>
              is Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience cutting-edge AI, blockchain, and cloud solutions that will revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful capabilities that set us apart from the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-blue-600">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients have to say about their transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options to fit your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  tier.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-600">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewFeaturesShowcase;