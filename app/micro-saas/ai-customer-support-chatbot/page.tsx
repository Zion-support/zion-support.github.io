import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bot} from 'lucide-react';

import { ArrowRight, MessageSquare, BarChart3, Users, Zap, CheckCircle, Clock, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

export default function AICustomerSupportChatbotPage() {
  const features = [
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understands context, intent, and sentiment with 98% accuracy'
    },
      icon: <MessageSquare className="w-6h-6text-emerald-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, social media, and messaging platforms'
    },
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into customer satisfaction, response times, and resolution rates'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Instant Responses',
      description: '24/7 availability with sub-second response times for immediate customer assistance'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Smart Escalation',
      description: 'Intelligently routes complex queries to human agents when needed'
    },
      icon: <Shield className="w-6h-6text-red-400" />,

      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'A/B testing',
        'Custom branding'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Amanda Foster',
      company: 'E-commerce Store',
      content: 'Reduced our support tickets by 70% and improved customer satisfaction by 40%. The chatbot handles 80% of queries perfectly.',
      rating: 5,
      avatar: 'AF'
    },
      name: 'James Rodriguez',
      company: 'SaaS Company',
      content: 'Our customers love the instant responses. The AI understands complex technical questions better than expected.',
      rating: 5,
      avatar: 'JR'
    },
      name: 'Sarah Kim',
      company: 'Healthcare Provider',
      content: 'The compliance features are excellent. We can provide 24/7 support while maintaining HIPAA compliance.',
      rating: 5,
      avatar: 'SK'
  ]

  const benefits = [

      icon: <Clock className="w-8h-8text-cyan-400" />,
      title: '70% Faster Resolution',
      description: 'Instant responses reduce average resolution time significantly'
    },
      icon: <TrendingUp className="w-8h-8text-emerald-400" />,
      title: '40% Higher Satisfaction',
      description: 'AI-powered personalization improves customer experience'
    },
      icon: <DollarSign className="w-8h-8text-purple-400" />,
      title: '60% Cost Reduction',
      description: 'Automated responses reduce support team workload'
    },
      icon: <Target className="w-8h-8text-orange-400" />,

      title: '98% Accuracy',
      description: 'Advanced NLP ensures accurate understanding and responses'
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Zendesk', icon: '🎫' },
    { name: 'Freshdesk', icon: '🆕' },
    { name: 'Intercom', icon: '💬' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Webflow', icon: '🌐' 
  ]

  const useCases = [
      title: 'FAQ Automation', 
      description: 'Answer common questions instantly with intelligent responses',
      icon: '❓',
      benefit: 'Reduce repetitive queries by 80%'
    },
      title: 'Order Support', 
      description: 'Help customers track orders, process returns, and handle billing',
      icon: '📦',
      benefit: 'Handle 90% of order-related queries'
    },
      title: 'Technical Support', 
      description: 'Provide step-by-step troubleshooting and technical guidance',
      icon: '🔧',
      benefit: 'Resolve 75% of technical issues automatically'
    },
      title: 'Lead Qualification', 
      description: 'Qualify leads and schedule demos with sales team',
      icon: '🎯',
      benefit: 'Increase qualified leads by 50%'
    },
      title: 'Appointment Booking', 
      description: 'Schedule appointments and manage calendar availability',
      icon: '📅',
      benefit: 'Reduce no-shows by 30%'
    },
      title: 'Complaint Handling', 
      description: 'De-escalate issues and route to appropriate departments',
      icon: '😤',
      benefit: 'Improve complaint resolution by 60%'
  ]

  return (

        <title>5G Data Analytics - Zion Tech Group</title>

      {/* Hero Section */
    
            <span>AI-Powered Customer Support</span>

            AI Customer Support
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Chatbot
          
            Transform your customer support with AI-powered chatbots that provide instant, intelligent responses. 
            Reduce support costs by 60% while improving customer satisfaction by 40%.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */

              <div className="text-3 xl font-boldtext-cyan-400mb-2">70%</div>
              <div className="text-gray-300text-sm">Faster Resolution</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">98%</div>
              <div className="text-gray-300text-sm">Accuracy Rate</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">60%</div>
              <div className="text-gray-300text-sm">Cost Reduction</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">30 K+</div>
              <div className="text-gray-300text-sm">Active Users</div>

      {/* Benefits Section */
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Chatbot?</span>

              Experience the future of customer support with cutting-edge AI technology that works for your business.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title
                  {benefit.description
    
            ))

      {/* Use Cases Section */
    
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Use Cases</span>

              Deploy AI chatbots across various customer support scenarios for maximum impact and efficiency.

 (
    
                  <div className="text-4xlmb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{useCase.title
                  {useCase.description
    
                <div className="text-cyan-400 text-smfont-semiboldtext-center">{useCase.benefit
            ))

      {/* Features Section */
    
              Advanced Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Support</span>

              Everything you need to provide exceptional customer support with AI-powered intelligence.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title
                  {feature.description
    
            ))

      {/* Integrations Section */
    
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>

              Connect with your existing tools and platforms for a unified customer support experience.

 (
    
                  <span className="text-3xl">{integration.icon}</span>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name
            ))

      {/* Pricing Section */
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your conversation volume and support needs. All plans include our core AI features.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

                  ))

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`

Get Started
    
            ))

      {/* Testimonials Section */
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">30,000+</span> Businesses

              See what our customers are saying about their success with our AI customer support chatbot.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))

      {/* CTA Section */
