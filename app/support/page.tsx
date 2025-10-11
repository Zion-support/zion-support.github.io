'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
<<<<<<< HEAD
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> main

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate',
      contact: '+1 302 464 0950',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
<<<<<<< HEAD
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',
    }
  ];
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
=======
      description: 'Get instant help through our live chat system',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    };
  ];

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: FileText,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI services, IT solutions, and Micro SaaS tools. Our AI services include chatbots, analytics, computer vision, and automation. IT services cover cloud infrastructure, cybersecurity, DevOps, and custom development. Micro SaaS tools provide ready-to-use business applications.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! Contact us for a free consultation where we assess your needs and recommend the best solutions. You can call us at (302) 464-0950, email kleber@ziontechgroup.com, or fill out our contact form.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free consultations for all potential clients. During the consultation, we assess your current setup, discuss your goals, and provide recommendations for AI and IT solutions that can help your business grow.'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: MessageSquare,
      questions: [
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity. Simple chatbots can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed timelines during the consultation phase.'
        },
        {
          question: 'Do I need technical expertise to use your AI tools?',
          answer: 'No! Our AI solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure your team can effectively use and manage the AI tools.'
        },
        {
          question: 'Can AI solutions integrate with my existing systems?',
          answer: 'Yes, our AI solutions are designed to integrate seamlessly with existing business systems including CRM, ERP, databases, and other enterprise applications. We handle all integration work as part of our service.'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Headphones,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your specific needs and budget.'
        },
        {
          question: 'Do you provide 24/7 IT support?',
          answer: 'Yes, we offer 24/7 emergency support for critical issues. Our standard support hours are Monday-Friday 9AM-6PM EST, with emergency support available around the clock for urgent technical problems.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable.'
        }
      ],
    };
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: Search,
      link: '/knowledge-base'
    },
    {
      title: 'Status Page',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      link: '/status';
    };
  ];

  const filteredCategories = faqCategories.filter();
>>>>>>> main
  );

  const filteredQuestions = filteredCategories.flatMap()
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  );

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div><section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need to make the most of your AI and IT solutions.
              </p>
              
              <div className="max-w-md mx-auto relative mb-8">
                </div><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="mb-12">
              </div><div className="relative max-w-2xl mx-auto">
                </div><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {supportChannels.map((channel, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div><channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center">
                    </div><Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                </div>
              ))}
            </div>

                    <p className="text-gray-300">{faq.answer}</p>
=======
  return() {supportChannels.map((channel, index) => ()
                      {channel.contact.startsWith('+') || channel.contact.includes('@') ? ()
                          href={channel.contact.startsWith('+') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        ></a>
                          {channel.contact}
                        </a>
                      ) : ()
                      )}
                    </div>
>>>>>>> main
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              </div><h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our technical team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Contact Support
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Schedule Call
                </button>
=======
            {/* FAQ Section */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              {/* Search and Filter */}
              <div className="mb-8" /></div>
                <div className="flex flex-col md:flex-row gap-4 mb-6" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {faqCategories.map()
                    ))}
                  </select>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6" /></div>
                {filteredQuestions.map((faq, index) => ()
                ))}
>>>>>>> main
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
                {resources.map((resource, index) => ()
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Still Need Help?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Phone className="w-5 h-5" / /></Phone>
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Mail className="w-5 h-5" / /></Mail>
                    <span>Email Support</span>
                  </a>
                </div>
        </section>
      </main>
      <Footer />
    </>
  );
      </main>
      
      <Footer /></Footer>
    </>
  );
};

export default SupportPage;
