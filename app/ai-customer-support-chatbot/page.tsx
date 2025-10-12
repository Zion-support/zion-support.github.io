<<<<<<< HEAD
import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const AiCustomerSupportChatbotPage: React.FC = () => {
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
import { ArrowRight, CheckCircle, Star, Brain, Clock, Target, BarChart3 } from 'lucide-react';

export default function AICustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Intelligent Routing',
      description: 'Automatically route complex queries to the right human agents when needed'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Analytics & Insights',
      description: 'Track customer satisfaction, response times, and identify improvement opportunities'
    }
  ]

  const chatbotFeatures = [
    {
      category: 'Conversation Management',
      items: ['Multi-language Support', 'Context Awareness', 'Sentiment Analysis', 'Conversation History', 'Quick Responses', 'Escalation Rules']
    },
    {
      category: 'Integration',
      items: ['Website Widget', 'Mobile Apps', 'Social Media', 'Email Integration', 'CRM Systems', 'Help Desk Tools']
    },
    {
      category: 'Customization',
      items: ['Brand Styling', 'Custom Responses', 'Knowledge Base', 'FAQ Management', 'Personality Settings', 'Response Templates']
    },
    {
      category: 'Analytics',
      items: ['Response Metrics', 'Customer Satisfaction', 'Resolution Rates', 'Popular Queries', 'Performance Reports', 'ROI Tracking']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Website integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced analytics',
        'Multi-channel support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Lisa Chen',
      company: 'E-commerce Store',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%.',
      rating: 5
    },
    {
      name: 'John Martinez',
      company: 'SaaS Company',
      content: 'The chatbot handles 80% of our support queries automatically. Our team can focus on complex issues.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Service Provider',
      content: '24/7 support without additional costs. Our customers love the instant responses and availability.',
      rating: 5
    }
  ]

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
  return (
    <>
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
=======
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI chatbot, customer support, automation, Zion Tech Group" />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
=======
        <title>Professional Services - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" />
        <meta property="og:description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
      </Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI chatbot, customer support, AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" / / />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" / / />
      </Helmet>
    </>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
<<<<<<< HEAD
    <>
        <section className="py-20" />
          <div className="container mx-autopx-4text-center">
<<<<<<< HEAD
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />AI Customer Support Chatbot
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
=======
        </div>
            <h1 className="text-5 xl md:text-6 xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">AI Customer Support Chatbot
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>
=======
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Customer Support Chatbot
              </span>
=======
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Services</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
<<<<<<< HEAD
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
=======
        </div>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
    </>
                Get Started
    <>
                <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
            </div>
        </section>
    </>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior customer support</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Features</h2>
              <p className="text-xl text-gray-300">Everything you need for effective customer support automation</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chatbotFeatures.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
=======
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our AI customer support chatbot solutions and how we can help your business.
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
        </div>
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </div>
              <h2 className="text-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
    </>
                Contact us to learn more about our solutions and how we can help your business.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AiCustomerSupportChatbotPage;
export default AiCustomerSupportChatbotPage;
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
=======
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
