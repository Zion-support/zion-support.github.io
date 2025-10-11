'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const SupportPage: React.FC = () => {
  const faqs = [
    {
      question: 'How do I get started with your AI services ? ',
      answer : 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.'
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, ArrowRight, Clock, CheckCircle, Users, Shield } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number  | null>(null)

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or schedule a free consultation. We\'ll assess your needs and create a customized plan for your business.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We provide comprehensive support including email support, phone support, and dedicated account management for enterprise clients. Our support team is available 24/7 for critical issues.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our consultation.'
    },
    {
      question: 'Do you offer training?',
      answer: 'Yes! We provide comprehensive training for your team on all our solutions. This includes hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 2 hours during business hours. For critical issues, we provide immediate response and resolution within 4 hours.'
    },
    {
      question: 'Do you provide documentation and resources?',
      answer: 'Yes, we provide comprehensive documentation, API references, and video tutorials for all our solutions. Our knowledge base is regularly updated with the latest information and best practices.'
}
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      contact: 'Self-service',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ]
const PagePage: React.FC = () => {
  return (
<></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
</div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>

            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                </div>
<div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
))}
</div>
          </div>
        </section>

{/* Content Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-4xl mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services
            </p>
          </div>
<div className="space-y-6">
            {faqs.map((faq, index) => (
              </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <HelpCircle className="w-6 h-6 text-cyan-400 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
          </div>
        </div>
      </section>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      </div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-7xl mx-auto">
          </div>
<div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Help</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need with our comprehensive help resources and expert assistance.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-7xl mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you
            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
<div className="text-sm text-gray-400">{channel.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-black/20">
        </section>
<div className="max-w-7xl mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Support?
            </h2>
            <p className="text-xl text-gray-300">
              We provide exceptional support to ensure your success
            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              </div>
<div key={index} className="text-center">
                </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-4xl mx-auto">
          </div>
<div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services
            </p>
          </div>
<div className="space-y-4">
            {faqs.map((faq, index) => (
              </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover: bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  </div>
<div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        </section>
<div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Contact Support
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
      
<Footer />
</>
  )
}

export default PagePage;

export default SupportPage;
</div>
  )
}

export default SupportPage