import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageSquare, Phone, Mail, Calendar, Clock, CheckCircle, Zap, BookOpen, ExternalLink, FileText, Video, Download } from 'lucide-react';const SupportPage: React.FC = () => {};
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', count: 45 };
    { id: 'getting-started', name: 'Getting Started', count: 12 };
    { id: 'technical', name: 'Technical Issues', count: 15 };
    { id: 'billing', name: 'Billing & Plans', count: 8 };
    { id: 'api', name: 'API & Integration', count: 10 };
  ];

  const faqs = [
    {};
      id: 1;
      question: 'How do I get started with your AI solutions?';
      answer: 'Getting started is easy! Simply contact our team through the contact form or schedule a demo. We\'ll guide you through the setup process and provide comprehensive training.','
      category: 'getting-started';
      helpful: 24
    };
    {};
      id: 2;
      question: 'What programming languages do you support?';
      answer: 'We support all major programming languages including Python, JavaScript, Java, C#, PHP, and more. Our solutions are designed to integrate seamlessly with your existing tech stack.';
      category: 'technical';
      helpful: 18
    };
    {};
      id: 3;
      question: 'How does billing work for your services?';
      answer: 'We offer flexible billing options including monthly and yearly plans. Enterprise clients can also opt for custom billing arrangements. All pricing is transparent with no hidden fees.';
      category: 'billing';
      helpful: 22
    };
    {};
      id: 4;
      question: 'Do you provide API documentation?';
      answer: 'Yes! We provide comprehensive API documentation, SDKs, and code examples for all our services. Our developer portal includes interactive API testing tools.';
      category: 'api';
      helpful: 16
    };
    {};
      id: 5;
      question: 'What kind of support do you offer?';
      answer: 'We offer multiple support channels including email, phone, live chat, and dedicated support portals. Response times vary by plan, with 24/7 support available for enterprise clients.';
      category: 'getting-started';
      helpful: 20
    };
    {};
      id: 6;
      question: 'Can I integrate your solutions with my existing systems?';
      answer: 'Absolutely! Our solutions are designed for easy integration with existing systems. We provide APIs, webhooks, and custom integration services to ensure seamless connectivity.';
      category: 'api';
      helpful: 14
    };
  ];

  const supportChannels = [
    {};
      icon: MessageSquare;
      title: 'Live Chat';
      description: 'Get instant help from our support team';
      availability: '24/7';
      responseTime: 'Immediate';
      color: 'from-cyan-500 to-blue-600'
    };
    {};
      icon: Phone;
      title: 'Phone Support';
      description: 'Speak directly with our technical experts';
      availability: 'Mon-Fri 9AM-6PM EST';
      responseTime: 'Immediate';
      color: 'from-green-500 to-emerald-600'
    };
    {};
      icon: Mail;
      title: 'Email Support';
      description: 'Send us detailed questions and get comprehensive answers';
      availability: '24/7';
      responseTime: 'Within 4 hours';
      color: 'from-purple-500 to-pink-600'
    };
    {};
      icon: Calendar;
      title: 'Schedule Call';
      description: 'Book a dedicated session with our experts';
      availability: 'Mon-Fri 9AM-6PM EST';
      responseTime: 'Scheduled';
      color: 'from-orange-500 to-red-600'
    };
  ];

  const resources = [
    {};
      title: 'Documentation';
      description: 'Comprehensive guides and API references';
      icon: BookOpen;
      type: 'Documentation';
      items: 25
    };
    {};
      title: 'Video Tutorials';
      description: 'Step-by-step video guides and walkthroughs';
      icon: Video;
      type: 'Videos';
      items: 15
    };
    {};
      title: 'Knowledge Base';
      description: 'Searchable articles and troubleshooting guides';
      icon: FileText;
      type: 'Articles';
      items: 50
    };
    {};
      title: 'Download Center';
      description: 'SDKs, tools, and resources for developers';
      icon: Download;
      type: 'Downloads';
      items: 12
    };
  ];

  const filteredFaqs = faqs.filter(faq => {};
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (<>
      <Helmet></Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, documentation, and contact our expert support team." />'
        <meta name="keywords" content="support, _help, _documentation, _FAQ, _technical support, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center max-w-4xl mx-auto"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              How Can We
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                {' '}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Get the support you need to succeed with our AI and IT solutions. 
              Our expert team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></Link
>
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></Link
>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search */};
      <section className="py-12 bg-slate-800"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-2xl mx-auto"></div>
            <div className="relative"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, _FAQs, and documentation..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the support channel that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {supportChannels.map((channel, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"></div>
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}></div>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6"></div>
                  <div className="flex items-center justify-center text-gray-400 text-sm"></div>
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability};
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm"></div>
                    <Zap className="w-4 h-4 mr-2" />
                    {channel.responseTime};
                  </div>
                </div>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"></button>
                  Get Help
                </button>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Resources */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Access our comprehensive library of resources and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {resources.map((resource, index) => (
              <Link
                key={index};
                to="/resources"
                className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              ></Link
>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"></div>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"></h3>
                  {resource.title};
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors"></div>
                  <span className="mr-2">{resource.items} {resource.type}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))};
          </div>
        </div>
      </section>

      {/* FAQ Section */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Category Filter */};
          <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
            {supportCategories.map((category) => (<button
                key={category.id};
                onClick={() => setSelectedCategory(category.id)};`
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${};
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'`
                }`};
              >
                {category.name};
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"></span>
                  {category.count};
                </span>
              </button>
            ))};
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6"></div>
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                  <div className="flex items-center justify-between"></div>
                    <div className="flex items-center text-gray-400 text-sm"></div>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {faq.helpful} people found this helpful
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"></button>
                      Was this helpful?
                    </button>
                  </div>
                </div>
              ))};
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12"></div>
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )};
          </div>
        </div>
      </section>

      {/* Contact Support CTA */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4"></div>
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              ></Link
>
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
              ></a
>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
`