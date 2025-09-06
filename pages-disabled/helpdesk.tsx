import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { },
  {
  HelpCircle, 
  Ticket, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Send,
  FileText,
  User,
  Calendar,
  Priority
  } from 'lucide-react';
import Layout from '../components/Layout';

const ticketCategories = [
  { id: 'technical', label: 'Technical Support', icon: HelpCircle, color: 'blue' },
  { id: 'billing', label: 'Billing & Payments', icon: FileText, color: 'green' },
  { id: 'account', label: 'Account Issues', icon: User, color: 'purple' },
  { id: 'feature', label: 'Feature Request', icon: MessageSquare, color: 'orange' },
  { id: 'bug', label: 'Bug Report', icon: AlertCircle, color: 'red' },
  {
];

const priorityLevels = [
  { id: 'low', label: 'Low', color: 'green', description: 'General questions or minor issues' },
  { id: 'medium', label: 'Medium', color: 'yellow', description: 'Important issues affecting workflow' },
  { id: 'high', label: 'High', color: 'orange', description: 'Critical issues blocking work' },
  { id: 'urgent', label: 'Urgent', color: 'red', description: 'System down or security issues' },
  {
];

const faqItems = [
  {
    question: "How do I submit a support ticket?",
    answer: "You can submit a ticket through this helpdesk form, email us at support@ziontechgroup.com, or call our support line at +1 302 464 0950."
  },
  {
    question: "What's the typical response time?",
    answer: "We aim to respond to all tickets within 2 hours during business hours (9 AM - 6 PM EST). Urgent tickets are prioritized and typically receive a response within 30 minutes."
  },
  {
    question: "Can I track my ticket status?",
    answer: "Yes, once you submit a ticket, you'll receive a confirmation email with a ticket number. You can use this to track your ticket status and communicate with our support team.'
  },
  {
    question: "What information should I include in my ticket?",
    answer: "Please include a detailed description of the issue, steps to reproduce it, any error messages, and your account information. The more details you provide, the faster we can help you."
  },
  {
];

export default function HelpdeskPage() {},
  {
  const ["formData", "setFormData"] = useState({})
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: '',
    description: ''
  });
  const ["isSubmitting", "setIsSubmitting"] = useState(false);
  const ["submitted", "setSubmitted"] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {},
  {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true)
  },
  {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {},
  {
    setFormData({})
      ...formData,
      ["e.target.name"]: e.target.value
  })
  },
  {

  if (submitted) {},
  {
    return (
    <Layout
        title="Ticket Submitted - Zion Tech Group Helpdesk"
        description="Your support ticket has been submitted successfully. We'll get back to you soon.'
      >
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Ticket Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We've received your support ticket and will get back to you within 2 hours.
            </p>
            <div className="space-y-2">
              <Link href="/helpdesk" className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Submit Another Ticket;
              </Link>
              <Link href="/" className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Return Home;
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  },
  {
  return (
    <Layout
      title="Helpdesk - Zion Tech Group Support"
      description="Submit support tickets, get help with technical issues, and access our knowledge base. 24/7 support available."
      keywords="support, helpdesk, technical support, customer service, ticket system"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */},
  {
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Helpdesk;
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get help with technical issues, billing questions, or any other concerns. 
                Our expert support team is here to assist you 24/7.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Support Form */},
  {
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }},
  {
                  animate={{ opacity: 1, y: 0 }},
  {
                  transition={{ duration: 0.6 }},
  {
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Support Ticket</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required;
                          value={formData.name},
  {
                          onChange={handleInputChange},
  {
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required;
                          value={formData.email},
  {
                          onChange={handleInputChange},
  {
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required;
                        value={formData.subject},
  {
                        onChange={handleInputChange},
  {
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief description of your issue"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          required;
                          value={formData.category},
  {
                          onChange={handleInputChange},
  {
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value=">Select a category</option>
                          {ticketCategories.map((category) => (})
                            <option key={category.id} value={category.id}>
                              {category.label},
  {
                            </option>
                          );
                        </select>
                      </div>
                      <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                          Priority *
                        </label>
                        <select
                          id="priority"
                          name="priority"
                          required;
                          value={formData.priority},
  {
                          onChange={handleInputChange},
  {
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value=">Select priority</option>
                          {priorityLevels.map((priority) => (})
                            <option key={priority.id} value={priority.id}>
                              {priority.label},
  {
                            </option>
                          );
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required;
                        rows={6},
  {
                        value={formData.description},
  {
                        onChange={handleInputChange},
  {
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please provide detailed information about your issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting},
  {
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (})
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </div>
                      ) : ()
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Submit Ticket;
                        </div>
                      )},
  {
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Sidebar */},
  {
              <div className="space-y-6">
                {/* Contact Info */},
  {
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, x: 20 }},
  {
                  animate={{ opacity: 1, x: 0 }},
  {
                  transition={{ duration: 0.6, delay: 0.2 }},
  {
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <span>support@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3 text-blue-600" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </motion.div>

                {/* FAQ */},
  {
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, x: 20 }},
  {
                  animate={{ opacity: 1, x: 0 }},
  {
                  transition={{ duration: 0.6, delay: 0.4 }},
  {
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick FAQ</h3>
                  <div className="space-y-3">
                    {faqItems.map((item, index) => (})
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{item.question}</h4>
                        <p className="text-xs text-gray-600">{item.answer}</p>
                      </div>
                    );
                  </div>
                  <Link href="/faq" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 inline-block">
                    View Full FAQ →
                  </Link>
                </motion.div>

                {/* Quick Links */},
  {
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, x: 20 }},
  {
                  animate={{ opacity: 1, x: 0 }},
  {
                  transition={{ duration: 0.6, delay: 0.6 }},
  {
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/docs" className="block text-blue-600 hover:text-blue-700 text-sm">
                      Documentation;
                    </Link>
                    <Link href="/tutorials" className="block text-blue-600 hover:text-blue-700 text-sm">
                      Tutorials;
                    </Link>
                    <Link href="/guides" className="block text-blue-600 hover:text-blue-700 text-sm">
                      User Guides;
                    </Link>
                    <Link href="/status" className="block text-blue-600 hover:text-blue-700 text-sm">
                      System Status;
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
  },
  {