import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Phone, Mail, Book, Video, FileText, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Help: NextPage = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const helpCategories = [;
    {;
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      items: [;
        { title: 'Getting Started Guide', description: 'Learn the basics of our platform' },
        { title: 'API Documentation', description: 'Complete API reference and examples' },
        { title: 'Integration Guides', description: 'Step-by-step integration tutorials' },
        { title: 'Best Practices', description: 'Recommended approaches and patterns' }
      ];
},
    {;
      icon: Video,
      title: 'Video Tutorials',
      description: 'Visual learning resources and walkthroughs',
      items: [;
        { title: 'Platform Overview', description: 'Introduction to key features' },
        { title: 'Setup and Configuration', description: 'How to configure your account' },
        { title: 'Advanced Features', description: 'Power user tips and tricks' },
        { title: 'Troubleshooting', description: 'Common issues and solutions' }
      ];
},
    {;
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      items: [;
        { title: 'Frequently Asked Questions', description: 'Answers to common questions' },
        { title: 'Troubleshooting Articles', description: 'Solutions to common problems' },
        { title: 'Feature Explanations', description: 'Detailed feature documentation' },
        { title: 'Release Notes', description: 'Latest updates and changes' }
      ];
},
    {;
      icon: Users,
      title: 'Community',
      description: 'Connect with other users and experts',
      items: [;
        { title: 'Community Forum', description: 'Ask questions and share knowledge' },
        { title: 'User Groups', description: 'Join local user communities' },
        { title: 'Webinars', description: 'Live training sessions and demos' },
        { title: 'Case Studies', description: 'Real-world implementation examples' }
      ];
      ];
},
    {;
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      articles: 28,
      color: 'from-purple-500 to-purple-600';
},
    {;
      icon: MessageCircle,
      title: 'FAQ',
      description: 'Frequently asked questions and quick answers',
      articles: 67,
      color: 'from-orange-500 to-orange-600';
}
  ];
  const faqItems = [;
    {;
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.';
},
    {;
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in AI/ML, quantum computing, blockchain, cloud computing, micro SaaS development, and cybersecurity solutions. Our team has expertise across the full technology stack.';
},
    {;
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and technical support to ensure your systems continue to perform optimally.';
},
    {;
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-12 months. We provide detailed timelines during the planning phase.';
},
    {;
      question: 'Do you work with small businesses or only enterprises?',
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our solutions to meet the specific needs and budget of each client.';
},
    {;
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement industry-standard security measures including encryption, access controls, regular security audits, and compliance with data protection regulations like GDPR and CCPA.';
      ];
}
  ];
  const faqs = [;
    {;
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.';
},
    {;
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, Google Cloud, AI/ML frameworks, and many more. Our team stays current with the latest technologies.';
},
    {;
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes updates, monitoring, and technical support.';
},
    {;
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple websites might take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.';
},
    {;
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. We have solutions and pricing options that work for every budget and requirement.';
},
    {;
      question: 'What makes Zion Tech Group different?',
      answer: 'Our combination of cutting-edge technology expertise, personalized service, and proven track record sets us apart. We focus on delivering measurable results and long-term partnerships.';
}
  ];
  const contactMethods = [;
    {;
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      hours: 'Mon-Fri 9AM-6PM EST',
      color: 'from-blue-500 to-blue-600';
},
    {;
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      hours: '24/7 Response',
      color: 'from-green-500 to-green-600';
},
    {;
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-green-500';
},
    {;
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a support specialist',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      color: 'bg-blue-500';
},
    {;
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'bg-purple-500';
}
  ];
  const popularArticles = [;
    'How to set up your first project',
    'Understanding API authentication',
    'Troubleshooting connection issues',
    'Best practices for data security',
    'Integrating with third-party services',
    'Managing user permissions',
    'Backup and recovery procedures',
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

        {/* Support Options */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Support</h2>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                {supportOptions.map((option, index) => (;
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">;
                    <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}>;
                      <option.icon className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>;
                    <p className="text-gray-600 mb-4">{option.description}</p>;
                    <p className="text-sm text-gray-500 mb-6">{option.availability}</p>;
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">;
                      {option.action}
                    </button>;
                  </div>;
                ))}
              </div>;
            <div className="relative">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search for help articles, documentation, or FAQs...";
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";
              />;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Help Categories */}
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {helpCategories.map((category, index) => (;
              <motion.div;
                key={category.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>;
                  <category.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{category.title}</h3>;
                <p className="text-gray-600 text-sm text-center mb-4">{category.description}</p>;
                <div className="text-center">;
                  <span className="text-sm text-gray-500">{category.articles} articles</span>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-12";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>;
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
              Find quick answers to the most common questions about our services and solutions.;
            </p>;
          </motion.div>;

          <div className="max-w-4xl mx-auto">;
            <div className="space-y-6">;
              {faqItems.map((item, index) => (;
                <motion.div;
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6";
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >;
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-start">;
                    <HelpCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />;
                    {item.question}
                  </h3>;
                  <p className="text-gray-600 ml-8">{item.answer}</p>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Support Options */}
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-12";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>;
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
              Need more help? Our support team is here to assist you with any questions or issues.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {supportOptions.map((option, index) => (;
              <motion.div;
                key={option.title}
                className="bg-white rounded-lg shadow-lg p-8 text-center";
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}>;
                  <option.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{option.title}</h3>;
                <p className="text-gray-600 mb-4">{option.description}</p>;
                <div className="space-y-2">;
                  <div className="text-lg font-semibold text-gray-800">{option.contact}</div>;
                  <div className="text-sm text-gray-500">{option.hours}</div>;
                </div>;
              </motion.div>;
            ))}
            </div>;
          </div>;
        </div>;
      </section>;

        {/* Help Categories */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Self-Service Resources</h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {helpCategories.map((category, index) => (;
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">;
                    <div className="flex items-center mb-6">;
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">;
                        <category.icon className="w-6 h-6 text-blue-600" />;
                      </div>;
                      <div>;
                        <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>;
                        <p className="text-gray-600">{category.description}</p>;
                      </div>;
                    </div>;
                    <div className="space-y-3">;
                      {category.items.map((item, itemIndex) => (;
                        <div key={itemIndex} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">;
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>;
                          <div>;
                            <h4 className="font-medium text-gray-900">{item.title}</h4>;
                            <p className="text-sm text-gray-600">{item.description}</p>;
                          </div>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Popular Articles */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Articles</h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                {popularArticles.map((article, index) => (;
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">;
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>;
                    <span className="text-gray-900">{article}</span>;
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center text-white">;
              <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>;
              <p className="text-xl mb-8 text-blue-100">;
                Our support team is here to help you succeed. Contact us for personalized assistance.;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;
                <div className="text-center">;
                  <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />;
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>;
                  <p className="text-blue-100">+1 302 464 0950</p>;
                </div>;
                <div className="text-center">;
                  <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />;
                  <h3 className="text-lg font-semibold mb-2">Email</h3>;
                  <p className="text-blue-100">support@ziontechgroup.com</p>;
                </div>;
                <div className="text-center">;
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />;
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>;
                  <p className="text-blue-100">Available 24/7</p>;
                </div>;
              </div>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Contact Support;
                </a>;
                <a;
                  href="/faq";
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
                  View FAQ;
                </a>;
              </div>;
                </div>;
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">;
                  Contact Now;
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our support team is here to help you succeed. Get in touch with us through any of these channels.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">;
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Support</h3>;
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>;
              <p className="text-blue-600 font-semibold">+1 302 464 0950</p>;
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM EST</p>;
            </div>;

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
  );
};
export default Help;