import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [;
    {
      icon: Book,;
      title: 'Documentation',;
      description: 'Comprehensive guides and technical documentation',;
      items: [;
        { title: 'Getting Started Guide', description: 'Learn the basics of our platform' },;
        { title: 'API Documentation', description: 'Complete API reference and examples' },;
        { title: 'Integration Guides', description: 'Step-by-step integration tutorials' },;
        { title: 'Best Practices', description: 'Recommended approaches and patterns' }
      ]},;
    {
      icon: Video,;
      title: 'Video Tutorials',;
      description: 'Visual learning resources and walkthroughs',;
      items: [;
        { title: 'Platform Overview', description: 'Introduction to key features' },;
        { title: 'Setup and Configuration', description: 'How to configure your account' },;
        { title: 'Advanced Features', description: 'Power user tips and tricks' },;
        { title: 'Troubleshooting', description: 'Common issues and solutions' }
      ]},;
    {
      icon: FileText,;
      title: 'Knowledge Base',;
      description: 'Searchable articles and FAQs',;
      items: [;
        { title: 'Frequently Asked Questions', description: 'Answers to common questions' },;
        { title: 'Troubleshooting Articles', description: 'Solutions to common problems' },;
        { title: 'Feature Explanations', description: 'Detailed feature documentation' },;
        { title: 'Release Notes', description: 'Latest updates and changes' }
      ]},;
    {
      icon: Users,;
      title: 'Community',;
      description: 'Connect with other users and experts',;
      items: [;
        { title: 'Community Forum', description: 'Ask questions and share knowledge' },;
        { title: 'User Groups', description: 'Join local user communities' },;
        { title: 'Webinars', description: 'Live training sessions and demos' },;
        { title: 'Case Studies', description: 'Real-world implementation examples' }
      ];
      ]},;
    {
      title: 'Video Tutorials',;
      description: 'Step-by-step video guides and walkthroughs',;
      articles: 28,;
      color: 'from-purple-500 to-purple-600'},;
    {
      icon: MessageCircle,;
      title: 'FAQ',;
      description: 'Frequently asked questions and quick answers',;
      articles: 67,;
      color: 'from-orange-500 to-orange-600'}
  ];

  const faqItems = [;
    {
      question: 'How do I get started with Zion Tech Group services?',;
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'},;
    {
      question: 'What technologies do you specialize in?',;
      answer: 'We specialize in AI/ML, quantum computing, blockchain, cloud computing, micro SaaS development, and cybersecurity solutions. Our team has expertise across the full technology stack.'},;
    {
      question: 'Do you provide ongoing support after project completion?',;
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and technical support to ensure your systems continue to perform optimally.'},;
    {
      question: 'What is your typical project timeline?',;
      answer: 'Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-12 months. We provide detailed timelines during the planning phase.'},;
    {
      question: 'Do you work with small businesses or only enterprises?',;
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our solutions to meet the specific needs and budget of each client.'},;
    {
      question: 'How do you ensure data security and privacy?',;
      answer: 'We implement industry-standard security measures including encryption, access controls, regular security audits, and compliance with data protection regulations like GDPR and CCPA.';
      ]}
  ];

  const faqs = [;
    {
      question: 'How do I get started with Zion Tech Group services?',;
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'},;
    {
      question: 'What technologies do you work with?',;
      answer: 'We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, Google Cloud, AI/ML frameworks, and many more. Our team stays current with the latest technologies.'},;
    {
      question: 'Do you provide ongoing support after project completion?',;
      answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes updates, monitoring, and technical support.'},;
    {
      question: 'How long does a typical project take?',;
      answer: 'Project timelines vary depending on complexity and scope. Simple websites might take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'},;
    {
      question: 'Do you work with small businesses?',;
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. We have solutions and pricing options that work for every budget and requirement.'},;
    {
      question: 'What makes Zion Tech Group different?',;
      answer: 'Our combination of cutting-edge technology expertise, personalized service, and proven track record sets us apart. We focus on delivering measurable results and long-term partnerships.'}
  ];

  const contactMethods = [;
    {
      icon: Phone,;
      title: 'Phone Support',;
      description: 'Call us for immediate assistance',;
      contact: '+1 302 464 0950',;
      hours: 'Mon-Fri 9AM-6PM EST',;
      color: 'from-blue-500 to-blue-600'},;
    {
      title: 'Email Support',;
      description: 'Send us an email and we\'ll respond within 24 hours',;
      contact: 'kleber@ziontechgroup.com',;
      hours: '24/7 Response',;
      color: 'from-green-500 to-green-600'},;
    {
      icon: MessageCircle,;
      title: 'Live Chat',;
      description: 'Get instant help from our support team',;
      availability: 'Available 24/7',;
      action: 'Start Chat',;
      color: 'bg-green-500'},;
    {
      icon: Phone,;
      title: 'Phone Support',;
      description: 'Speak directly with a support specialist',;
      availability: 'Mon-Fri 9AM-6PM EST',;
      action: 'Call Now',;
      color: 'bg-blue-500'},;
    {
      icon: Mail,;
      title: 'Email Support',;
      description: 'Send us a detailed message',;
      availability: 'Response within 24 hours',;
      action: 'Send Email',;
      color: 'bg-purple-500'}
  ];

  const popularArticles = [;
    'How to set up your first project',;
    'Understanding API authentication',;
    'Troubleshooting connection issues',;
    'Best practices for data security',;
    'Integrating with third-party services',;
    'Managing user permissions',;
    'Backup and recovery procedures',;
    'Performance optimization tips';
  ];

  return (;
    <MainLayout;
      title="Help Center - Zion Tech Group";
      description="Get help and support for Zion Tech Group's services. Find documentation, tutorials, and contact our support team.";
      keywords="help center, support, documentation, tutorials, FAQ, customer service">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>;
              <p className="text-xl text-gray-200 mb-8">;
                Find answers, get support, and learn how to make the most of our services.;
              </p>;

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search for help articles, guides, or FAQs...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400";
                  />;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

export default function Help() {
  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer:
        'We offer comprehensive technology solutions including AI development, cloud services, web development, mobile development, blockchain solutions, IoT platforms, and cybersecurity services.' }, {
      question: 'How do I get started with a project?',
      answer:
        "Contact us through our website, email, or phone to schedule a consultation. We'll discuss your requirements and provide a customized solution proposal." }, {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during consultation.' }, {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment.' }, {
      question: 'What technologies do you work with?',
      answer:
        'We work with modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, blockchain platforms, and mobile development frameworks.' }, {
      question: 'How do you ensure data security?',
      answer:
        'We implement industry-standard security measures including SSL encryption, secure data storage, regular security audits, and compliance with data protection regulations.' } ];
  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 24 hours',
      color: 'blue' }, {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      contact: '+1 (302) 464-0950',
      responseTime: 'Mon-Fri 9AM-6PM EST',
      color: 'green' }, {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat',
      contact: 'Available on website',
      responseTime: 'Real-time',
      color: 'purple' } ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs' }, {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and tutorials',
      link: '/tutorials' }, {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base' }, {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base' }, {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community' } ];
  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta
          name="description"
          content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md: text-6xl font-bold mb-6">
              Help &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}
                Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              We're here to help you succeed. Find answers, get support, and
              access resources to make the most of our services.
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
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-${channel.color}-100`}
                  >
                    <channel.icon
                      className={`w-8 h-8 text-${channel.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {channel.contact}
                  </p>
                  <p className="text-sm text-gray-500">
                    {channel.responseTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Helpful Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-blue-100">
                  Get in touch for project inquiries
                </p>
              </Link>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                <p className="text-sm text-blue-100">
                  Explore what we can do for you
                </p>
              </Link>

              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p className="text-sm text-blue-100">
                  Learn more about our team
                </p>
              </Link>

              <Link
                href="/careers"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white/20 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Careers</h3>
                <p className="text-sm text-blue-100">Join our growing team</p>
              </Link>
            </div>
          </div>
        </section>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">;
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>;
              <p className="text-gray-600 mb-4">Send us a detailed message</p>;
              <p className="text-green-600 font-semibold">support@ziontechgroup.com</p>;
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>;
            </div>;

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">;
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <Clock className="w-8 h-8 text-purple-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>;
              <p className="text-gray-600 mb-4">Chat with us in real-time</p>;
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">;
                Start Chat;
              </button>;
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default Help;