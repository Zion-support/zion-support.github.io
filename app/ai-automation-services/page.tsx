import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, TrendingUp, Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: "Intelligent Process Automation",
    description: "AI-powered automation that learns and adapts to your business processes, reducing manual work by up to 80%.",
    benefits: ["80% reduction in manual tasks", "Self-learning algorithms", "Adaptive workflows"]
  },
  {
    icon: Zap,
    title: "Real-time Decision Making",
    description: "Make faster, data-driven decisions with AI that processes information in real-time and provides instant insights.",
    benefits: ["Real-time data processing", "Instant insights", "Automated decision triggers"]
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Anticipate trends and optimize performance with advanced predictive models that forecast business outcomes.",
    benefits: ["95% prediction accuracy", "Trend forecasting", "Performance optimization"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features ensure your AI automation is protected against threats while maintaining compliance.",
    benefits: ["End-to-end encryption", "Compliance ready", "Threat monitoring"]
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      "Up to 5 automation workflows",
      "Basic AI analytics",
      "Email support",
      "Standard integrations",
      "Monthly reporting"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing businesses that need advanced automation",
    features: [
      "Up to 25 automation workflows",
      "Advanced AI analytics",
      "Priority support",
      "Custom integrations",
      "Real-time reporting",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Unlimited automation workflows",
      "Custom AI models",
      "Dedicated support",
      "White-label options",
      "Custom reporting",
      "On-premise deployment"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechCorp",
    content: "Zion Tech Group's AI automation transformed our operations. We achieved 300% ROI in just 6 months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "Operations Director",
    company: "Manufacturing Solutions",
    content: "The predictive analytics helped us reduce downtime by 60% and increase efficiency by 45%.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    title: "CEO",
    company: "StartupXYZ",
    content: "Their AI automation saved us 40 hours per week and improved our customer satisfaction by 80%.",
    rating: 5
  }
];

export default function AIAutomationServicesPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI Automation Services - Transform Your Business with Intelligent Automation"
        description="Revolutionize your business operations with our AI-powered automation services. Reduce costs by 60%, increase productivity by 300%, and achieve ROI within 3 months."
        keywords="AI automation, business process automation, intelligent automation, AI consulting, enterprise automation, workflow automation"
        url="/ai-automation-services"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-semibold">AI AUTOMATION SERVICES</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Transform Your Business with
                  <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"> Intelligent AI Automation</span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Reduce operational costs by 60%, increase productivity by 300%, and achieve ROI within 3 months 
                  with our cutting-edge AI automation solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  
                  <Link
                    href="/case-studies"
                    className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    View Case Studies
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Quick ROI Calculator</h3>
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">60%</div>
                      <div className="text-sm text-gray-200">Cost Reduction</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-green-400 mb-1">300%</div>
                      <div className="text-sm text-gray-200">Productivity Increase</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-400 mb-1">3 Months</div>
                      <div className="text-sm text-gray-200">Average ROI Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive AI automation platform provides everything you need to transform your business operations.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your AI Automation Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business needs.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 mt-4">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of businesses already transforming with our AI automation solutions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get started with AI automation today and see the difference in just 30 days. 
                Our experts are ready to help you achieve extraordinary results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your AI Transformation
                </Link>
                
                <Link
                  href="/case-studies"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}