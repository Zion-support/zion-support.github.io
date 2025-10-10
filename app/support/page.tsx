'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react'
interface FAQ {
  question: string
  answer: string
  category: string
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'Getting Started'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular check-ins, system monitoring, and proactive maintenance. Our support team is always available to help you succeed.',
      category: 'Support'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing systems through APIs, webhooks, and custom connectors. Our team will help you set up integrations during implementation.',
      category: 'Integration'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'Training'
    },
    {
      question: 'What is your service level agreement?',
      answer: 'We offer different SLA tiers based on your needs. Our standard SLA includes 99.9% uptime, 4-hour response time for critical issues, and 24/7 monitoring. Enterprise clients can customize their SLA requirements.',
      category: 'Service Level'
    },
    {
      question: 'How do you handle data privacy?',
      answer: 'We take data privacy seriously and comply with all relevant regulations. Your data is encrypted in transit and at rest, and we never share your data with third parties without your explicit consent.',
      category: 'Data Management'
    },
    {
      question: 'Can you help with scaling our solutions?',
      answer: 'Absolutely! Our solutions are designed to scale with your business. We provide ongoing optimization and scaling support to ensure your systems can handle growth and increased demand.',
      category: 'Scaling'
    }
  ]
  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-blue-400'
    },
    {
      name: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Available',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-purple-400'
    }
  ]
  const categories = ['all', 'Getting Started', 'Support', 'Security', 'Integration', 'Training', 'Service Level', 'Data Management', 'Scaling']
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }
  return (
    <div> </div><Helmet> </Helmet><title>Support | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>

      {/* Hero Section */}
      <section> </section><div> </div><h1>Support
            </h1><span>Center
            </span></span>
          </h1>
          <p>Get help and support for our AI and IT solutions. We're here to help you succeed.
          </p></p>
          
          {/* Search Bar */}
          <div> </div><Search> </Search><input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          {/* Category Filter */}
          <div>{categories.map((category) => (
              </div><button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Contact Support</h2>
            <p>Choose the support channel that works best for you. We're here to help 24/7.
            </p></p>
          </div>
          
          <div>{supportChannels.map((channel, index) => (
              </div><div> </div><div> </div><div> </div><channel> </channel></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{channel.name}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className={`text-lg font-medium mb-2 ${channel.color}`}>{channel.contact}</p>
                <p className="text-sm text-gray-400">{channel.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and solutions.
            </p></p>
          </div>
          
          <div>{filteredFAQs.map((faq, index) => (
              </div><div> </div><button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <div> </div><span>{faq.category}
                    </span></span>
                    <div> </div><svg> </svg><path> </path></svg>
                    </div>
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div> </div><p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
            <p>Explore our documentation, guides, and other helpful resources.
            </p></p>
          </div>
          
          <div> </div><div> </div><div> </div><BookOpen> </BookOpen></div>
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation</button>
            </div>
            
            <div> </div><div> </div><Users> </Users></div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">Connect with other users and get help from the community.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">Join Community</button>
            </div>
            
            <div> </div><div> </div><Zap> </Zap></div>
              <h3 className="text-xl font-semibold text-white mb-4">Status Page</h3>
              <p className="text-gray-300 mb-6">Check the real-time status of our services and systems.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Status</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SupportPage