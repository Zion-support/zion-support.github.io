<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, Users, Clock, CheckCircle } from 'lucide-react';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { 
  Search, HelpCircle, 
  MessageCircle, Phone, 
  Mail, BookOpen, 
  Video, FileText, 
  ChevronDown, ChevronRight,
  CheckCircle, ExternalLink
} from 'lucide-react';
>>>>>>> main

<<<<<<< HEAD
const Help: NextPage = () => {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive technology solutions including AI development, cloud services, web development, mobile development, blockchain solutions, IoT platforms, and cybersecurity services."
    },
    {
      question: "How do I get started with a project?", answer: "Contact us through our website, email, or phone to schedule a consultation. We'll discuss your requirements and provide a customized solution proposal."
    }, {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?", answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment."
    }, {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, blockchain platforms, and mobile development frameworks."
    },
    {
      question: "How do you ensure data security?", answer: "We implement industry-standard security measures including SSL encryption, secure data storage, regular security audits, and compliance with data protection regulations."
    }
  ];

  const supportChannels = [
    {
      icon: Mail, title: "Email Support",
      description: "Get help via email with detailed responses", contact: "kleber@ziontechgroup.com",
      responseTime: "Within 24 hours", color: "blue"
    },
    {
      icon: Phone, title: "Phone Support",
      description: "Speak directly with our technical team", contact: "+1 (302) 464-0950", responseTime: "Mon-Fri 9AM-6PM EST",
      color: "green"
    }, {
      icon: MessageCircle,
      title: "Live Chat", description: "Get instant help through our live chat",
      contact: "Available on website", responseTime: "Real-time",
      color: "purple"
    }
  ];

  const resources = [
    {
      icon: BookOpen, title: "Documentation",
      description: "Comprehensive guides and API documentation", link: "/docs"
    },
    {
      icon: Video, title: "Video Tutorials",
      description: "Step-by-step video guides and tutorials", link: "/tutorials"
    },
    {
      icon: FileText, title: "Knowledge Base",
      description: "Searchable articles and troubleshooting guides", link: "/knowledge-base"
    },
    {
      icon: Users, title: "Community Forum",
      description: "Connect with other users and get peer support", link: "/community"
    }
  ];

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Help &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Support</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            We&apos;re here to help you succeed. Find answers, get support, and access resources to make the most of our services.'
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
=======
export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
<<<<<<< HEAD
    {
      title: 'Getting Started', icon: BookOpen,
=======
  {
      title: 'Getting Started',
      icon: BookOpen,
>>>>>>> main
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?', answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a free consultation to understand your needs and provide a customized solution.'
        },
        {
          question: 'What services do you offer?', answer: 'We offer comprehensive technology services including AI development, IT services, web development, cloud services, and micro SaaS solutions. Visit our services page for detailed information.'
        },
        {
          question: 'Do you provide free consultations?', answer: 'Yes! We offer free initial consultations to discuss your project requirements and provide recommendations. This helps us understand your needs and you understand our capabilities.'
        }
      ]
    }, {
      title: 'Technical Support',
      icon: HelpCircle, questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We provide comprehensive technical support including 24/7 monitoring, troubleshooting, maintenance, and updates. Our support team is available via phone, email, and chat.'
        },
        {
          question: 'How quickly do you respond to support requests?', answer: 'We respond to critical issues within 1 hour and non-critical issues within 4 hours during business hours. Emergency support is available 24/7 for enterprise clients.'
        },
        {
          question: 'Do you provide training for new systems?', answer: 'Yes, we provide comprehensive training for all systems we implement. This includes user training, administrator training, and documentation to ensure smooth adoption.'
        }
      ]
    }, {
      title: 'Billing & Pricing',
      icon: FileText, questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. Pricing depends on the scope and complexity of your project.'
        }, {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can discuss payment terms that work best for your budget and project timeline.'
        },
        {
          question: 'Are there any hidden fees?', answer: 'No hidden fees! We provide transparent pricing with detailed estimates before starting any project. All costs are clearly outlined in our proposals.'
        }
      ]
    }, {
      title: 'Project Management',
      icon: MessageCircle, questions: [
        {
          question: 'How do you manage projects?',
          answer: 'We use agile project management methodologies with regular check-ins, progress reports, and milestone reviews. You\'ll have a dedicated project manager and direct access to the development team.'
        }, {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase.'
        },
        {
          question: 'Can I track project progress?', answer: 'Yes! We provide regular progress updates, milestone reports, and access to project management tools where you can track progress in real-time.'
        }
      ]
    }
  ];

  const quickLinks = [
<<<<<<< HEAD
    { title: 'Contact Support', href: '/contact', icon: MessageCircle }, { title: 'Documentation', href: '/docs', icon: BookOpen },
    { title: 'Video Tutorials', href: '/training', icon: Video }, { title: 'API Reference', href: '/api', icon: FileText },
=======
  { title: 'Contact Support', href: '/contact', icon: MessageCircle },
    { title: 'Documentation', href: '/docs', icon: BookOpen },
    { title: 'Video Tutorials', href: '/training', icon: Video },
    { title: 'API Reference', href: '/api', icon: FileText },
>>>>>>> main
    { title: 'Status Page', href: '/status', icon: CheckCircle }
  ];

  const contactMethods = [
<<<<<<< HEAD
    {
      icon: Phone, title: 'Phone Support',
      description: 'Call us for immediate assistance', contact: '+1 302 464 0950',
=======
  {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
>>>>>>> main
      href: 'tel:+13024640950'
    }, {
      icon: Mail,
      title: 'Email Support', description: 'Send us a detailed message',
      contact: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MessageCircle, title: 'Live Chat',
      description: 'Chat with our support team', contact: 'Available 9 AM - 6 PM EST',
      href: '/contact'
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, contact support, and access documentation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/help" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Help & <span className="text-blue-600">Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to your questions, get technical support, and access helpful resources. 
                We&apos;re here to help you succeed with our technology solutions.'
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 text-center hover: shadow-lg transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-${channel.color}-100`}>
                  <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-lg font-medium text-gray-900 mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-500">{channel.responseTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Helpful Resources</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.link} className="bg-white border border-gray-200 rounded-lg p-6 hover: shadow-lg transition-shadow group">
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                    {faq.question}
=======
        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600">Access helpful resources and support channels</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover: bg-blue-50 hover:border-blue-200 border border-transparent transition-all group"
                >
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.title}
>>>>>>> main
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-lg text-gray-600">Get in touch with our support team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="bg-white rounded-lg p-8 text-center hover: shadow-lg transition-shadow border border-gray-200"
                >
                  <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-blue-600 font-medium">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to common questions</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover: bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    {expandedCategory === category.title ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedCategory === category.title && (
                    <div className="mt-4 space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-blue-100">Get in touch for project inquiries</p>
            </Link>

            <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Services</h3>
              <p className="text-sm text-blue-100">Explore what we can do for you</p>
            </Link>

            <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-blue-100">Learn more about our team</p>
            </Link>

            <Link href="/careers" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Careers</h3>
              <p className="text-sm text-blue-100">Join our growing team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is ready to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Email Support
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
=======
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </Link>
              <Link href="/docs" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
<<<<<<< HEAD
</>
=======
    </>
>>>>>>> main
>>>>>>> main
  );
}