'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
const [searchTerm, setSearchTerm] = useState('')
const [selectedCategory, setSelectedCategory] = useState('all')
const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
const faqs: FAQ[] = [
{
question: 'How do I get started with your AI solutions?',
answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire setup process.',
category: 'Getting Started'
},
{
question: 'What support options are available?',
answer: 'We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Our support team is available 24/7 for Enterprise customers and during business hours for other plans.',
category: 'Support'
},
{
question: 'How secure is my data?',
answer: 'Data security is our top priority. We use enterprise-grade encryption, comply with industry standards like SOC 2 and GDPR, and implement strict access controls. Your data is never shared with third parties without your explicit consent.',
category: 'Security'
},
{
question: 'Do you offer training for our team?',
answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
category: 'training'
},
{
question: 'What security measures do you have in place?',
answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
category: 'security'
},
{
question: 'Can you integrate with our existing systems?',
answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
category: 'integration'
},
{
question: 'What happens if we need to scale up?',
answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
category: 'scaling'
},
{
question: 'Do you provide custom development?',
answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
category: 'development'
}
]
const supportChannels = [
{
name: 'Phone Support',
description: 'Speak directly with our technical experts',
icon: Phone,
title: 'Phone Support',
description: 'Speak directly with our technical experts',
contact: '(302) 464-0950',
availability: 'Mon-Fri: 9AM-6PM EST'
},
{
icon: Mail,
title: 'Email Support',
description: 'Send us your questions and we\'ll respond quickly',
contact: 'support@ziontechgroup.com',
availability: '24/7'
contact: '+1 (555) 123-4567',
availability: '24/7 Available',
color: 'text-blue-400'
},
{
name: 'Email Support',
description: 'Get detailed responses to your questions',
icon: Mail,
contact: 'support@ziontech.com',
availability: 'Response within 2 hours',
color: 'text-green-400'
},
{
name: 'Live Chat',
description: 'Instant help when you need it most',
icon: MessageCircle,
availability: 'Mon-Fri: 9AM-6PM EST'
}
]
const faqs = [
{
question: 'How do I get started with your AI solutions?',
answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you choose the right AI solution for your business needs.'
},
{
question: 'What kind of support do you provide?',
answer: 'We provide comprehensive support including technical assistance, training, documentation, and ongoing maintenance for all our solutions.'
},
{
question: 'How quickly can you respond to support requests?',
answer: 'We typically respond to support requests within 24 hours, with priority support available for enterprise customers.'
},
{
question: 'Do you offer training for your solutions?',
answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions.'
}
]
const filteredFaqs = faqs.filter(faq =>
faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
faq.category.toLowerCase().includes(searchTerm.toLowerCase())
)
contact: 'Available on website',
availability: 'Mon-Fri 9AM-6PM EST',
color: 'text-purple-400'
},
{
name: 'Emergency Support',
description: 'Critical issues resolved quickly',
icon: Zap,
contact: '+1 (555) 911-TECH',
availability: '24/7 Critical Support',
color: 'text-red-400'
}
]
const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development']
question: 'Can I integrate with my existing systems?',
answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing systems through APIs, webhooks, and custom connectors. Our team will help you set up integrations during implementation.',
category: 'Integration'
},
{
question: 'What is your uptime guarantee?',
answer: 'We guarantee 99.9% uptime for all our services. Enterprise customers receive 99.99% uptime with SLA-backed guarantees and compensation for any downtime.',
category: 'Service Level'
},
{
question: 'How do you handle data backups?',
answer: 'We implement automated daily backups with 30-day retention, plus real-time replication across multiple data centers. All backups are encrypted and tested regularly to ensure data integrity.',
category: 'Data Management'
}
]
const categories = ['all', 'Getting Started', 'Support', 'Security', 'Integration', 'Service Level', 'Data Management']
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
    <React.Fragment>
      <Helmet>
<title>Support | Zion Tech Group</title>
<meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
<meta name="keywords" content="support, help, FAQ, customer service, technical support, AI solutions" />
      </Helmet>
      <Navigation />
<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Hero Section */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Support Center
</
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Get help and support for our AI and IT solutions. We're here to help you succeed.
</p>
{/* Search Bar */}
<div className="max-w-2xl mx-auto relative mb-8">
<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<input
type="text"
placeholder="Search for help..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
</div>
{/* Quick Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">&lt; 2min</div>
<div className="text-gray-400">Average Response Time</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">98%</div>
<div className="text-gray-400">Customer Satisfaction</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">24/7</div>
<div className="text-gray-400">Support Availability</div>
</div>
</div>
</div>
</section>
{/* Search Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="relative">
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
<input
type="text"
placeholder="Search for help..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
</div>
</div>
</section>
{/* Support Channels */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
Contact Support
</
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Choose your preferred way to get in touch with our support team.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{supportChannels.map((channel, index) => (
<div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-center mb-4">
{channel.icon}
</div>
{/* Support Channels */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Choose the support channel that works best for you. All channels are monitored by our expert team.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{supportChannels.map((channel, index) => (
<div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
<div className={`w-16 h-16 ${channel.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
<channel.icon className="w-8 h-8" />
</div>
<h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
<p className="text-gray-300 mb-4">{channel.description}</p>
<p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
<p className="text-sm text-gray-400">{channel.availability}</p>
</div>
))}
</div>
<h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
<p className="text-xl text-gray-300 mb-8">Find answers to common questions</p>
{/* Category Filter */}
<div className="flex flex-wrap justify-center gap-4 mb-8">
{categories.map((category) => (
<button
key={category}
onClick={() => setSelectedCategory(category)}
className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
selectedCategory === category
? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
: 'bg-white/10 text-gray-300 hover:bg-white/20'
}`}
>
{category === 'all' ? 'All Questions' : category.charAt(0).toUpperCase() + category.slice(1)}
</button>
))}
</div>
</div>
<div className="space-y-4">
{filteredFAQs.map((faq, index) => (
<div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
<button
onClick={() => toggleFAQ(index)}
className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
<h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
<div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
<HelpCircle className="w-6 h-6 text-purple-400" />
</div>
</button>
{expandedFAQ === index && (
<div className="px-6 pb-6">
<p className="text-gray-300 leading-relaxed">{faq.answer}</p>
</div>
)}
</div>
))}
</div>
{filteredFAQs.length === 0 && (
<div className="text-center py-12">
<BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
<p className="text-gray-400 text-lg">No questions found matching your search criteria.</p>
</div>
)}
</div>
</section>
{/* Resources Section */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
Explore our comprehensive documentation, tutorials, and community resources.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
<BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
<h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
<p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
<button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
View Docs
</
</div>
<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
<Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
<h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
<p className="text-gray-300 mb-6">Connect with other users and get help from the community.</p>
<button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
Join Community
</
</div>
<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
<Clock className="w-16 h-16 text-purple-400 mx-auto mb-6" />
<h3 className="text-xl font-bold text-white mb-4">Status Page</h3>
<p className="text-gray-300 mb-6">Check the real-time status of all our services and systems.</p>
<button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
Check Status
</
</div>
</div>
</div>
</section>
<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
<h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-6">
{faqs.map((faq, index) => (
<div key={index} className="border-b border-white/10 pb-6">
<h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
<p className="text-gray-300">{faq.answer}</p>
</div>
))}
{/* Contact CTA */}
<section className="py-16 px-4">
<div className="max-w-4xl mx-auto text-center">
<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
<h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
<p className="text-xl text-gray-300 mb-8">
Can't find what you're looking for? Our expert team is here to help with any questions or issues.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
<Phone className="w-5 h-5" />
Call Support
</
<button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
<Mail className="w-5 h-5" />
Email Support
</
</div>
</div>
</div>
</section>
</div>
    </React.Fragment>
  )
}
export default SupportPage
</button>
</button>
</div>
</button>
</button>
</button>
</div>
</h2>
</div>
</section>
</h1>
</main>
</number>
<h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{supportChannels.map((channel, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
<div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<channel.icon className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
<p className="text-gray-300 mb-4">{channel.description}</p>
<p className="text-purple-400 font-medium mb-2">{channel.contact}</p>
<p className="text-gray-400 text-sm">{channel.availability}</p>
</div>
))}
</div>
</div>
</section>
{/* FAQ Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
{filteredFaqs.map((faq, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
<h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
<p className="text-gray-300">{faq.answer}</p>
<span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mt-3">
{faq.category}
</span>
</div>
))}
</div>
</div>
</section>
</main>
      <Footer />
    </React.Fragment>
  )
}
export default SupportPage

export default SupportPage;