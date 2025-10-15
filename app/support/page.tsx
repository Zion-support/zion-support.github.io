import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';import { MessageSquare, Phone, Mail, CheckCircle, Send, AlertCircle, FileText, Video } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: '',
    category: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportChannels = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send detailed messages and get comprehensive responses',
      availability: '24/7',
      responseTime: '< 2 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: 'View Docs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', description: 'General questions, feature requests' },
    { value: 'medium', label: 'Medium', description: 'Minor issues, configuration help' },
    { value: 'high', label: 'High', description: 'Service degradation, performance issues' },
    { value: 'critical', label: 'Critical', description: 'Service down, security issues' }
  ];

  const categories = [
    'Technical Support',
    'Billing & Account',
    'API Issues',
    'Feature Request',
    'Bug Report',
    'Security Issue',
    'General Inquiry'
  ];

  const faqs = [
    {
      question: 'How do I report a technical issue?',
      answer: 'You can report technical issues through our support portal, live chat, or by calling our support line. Please provide as much detail as possible including error messages, steps to reproduce, and your system information.'
    },
    {
      question: 'What information should I include in my support request?',
      answer: 'Include your account details, a clear description of the issue, steps to reproduce it, any error messages, and your system/browser information. Screenshots or screen recordings are also helpful.'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'Response times vary by priority: Critical issues get immediate attention, High priority within 2 hours, Medium priority within 4 hours, and Low priority within 24 hours during business days.'
    },
    {
      question: 'Can I get help with custom integrations?',
      answer: 'Yes! Our technical team can help with custom integrations, API implementations, and advanced configurations. Contact us to discuss your specific requirements.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Basic support is included with all plans. Premium support features and dedicated account management are available for Professional and Enterprise plans.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        priority: '',
        category: '',
        description: ''
      });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support for Zion Tech Group&apos;s AI and IT services. Contact our expert team via chat, phone, or email for immediate assistance." />
        <meta name="keywords" content="support, technical support, help desk, customer service, troubleshooting, assistance" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get expert technical support and assistance" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <MessageSquare className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                Support
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Get expert help and support for all our AI and IT services. We&apos;re here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{channel.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400 font-semibold">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-cyan-400 font-semibold">{channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${channel.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}>
                    {channel.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Request Form */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Submit a Support Request</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Fill out the form below and our team will get back to you as soon as possible
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                    <p className="text-gray-300">Thank you for contacting us. We&apos;ll get back to you within the specified response time.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-semibold mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Brief description of your issue"
                        />
                      </div>
                      <div>
                        <label htmlFor="priority" className="block text-white font-semibold mb-2">Priority Level *</label>
                        <select
                          id="priority"
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select priority</option>
                          {priorityLevels.map((priority) => (
                            <option key={priority.value} value={priority.value} className="bg-slate-800">
                              {priority.label} - {priority.description}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-white font-semibold mb-2">Category *</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category} className="bg-slate-800">{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-white font-semibold mb-2">Description *</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                        placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any other relevant details..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Quick answers to common support questions
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Additional Resources</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  More ways to get help and find answers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                  <p className="text-gray-300 mb-6">Comprehensive guides and API references</p>
                  <a href="/docs" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Browse Docs →
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <Video className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
                  <p className="text-gray-300 mb-6">Step-by-step video guides and tutorials</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Watch Videos →
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <AlertCircle className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
                  <p className="text-gray-300 mb-6">Check real-time service status and uptime</p>
                  <a href="/status" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    View Status →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Emergency Support</h2>
                <p className="text-xl text-white/90 mb-8">
                  For critical issues affecting your production systems, contact our emergency support line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+13024640950" 
                    className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Line: +1 302 464 0950
                  </a>
                  <a 
                    href="mailto:emergency@ziontechgroup.com" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    emergency@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;