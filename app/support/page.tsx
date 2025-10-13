<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');'
;
const faqs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'How do I get started with your AI solutions?','
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.','
      category: 'general''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What support do you provide after implementation?','
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.','
      category: 'Support''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'How secure are your solutions?','
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards.','
      category: 'Security''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Can I integrate with my existing systems?','
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing infrastructure and third-party applications.','
      category: 'Integration''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What is your response time for support requests?','
      answer: 'We guarantee response times of under 1 hour for critical issues and 4 hours for general inquiries during business hours.','
      category: 'Support''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you offer training for my team?','
      answer: 'Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions.','
      category: 'Training''
    }
  ];
;
const supportChannels = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Phone,
      title: 'Phone Support','
      description: 'Call us for immediate assistance','
      contact: '+1 (555) 123-4567','
      hours: '24/7 Available''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Technical','
      question: 'What technical support do you provide?','
      answer: 'We provide 24/7 technical support for all our services. Our support team includes certified engineers who can help with implementation, troubleshooting, and optimization.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Billing','
      question: 'What payment methods do you accept?','
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise clients. All payments are processed securely through our encrypted payment system.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Technical','
      question: 'Do you offer training for your solutions?','
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions. Training is included with all our service plans.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'General','
      question: 'Can I customize your solutions for my specific needs?','
      answer: 'Absolutely! All our solutions are designed to be customizable. Our team works closely with you to tailor solutions that meet your specific business requirements and objectives.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      category: 'Technical','
      question: 'What is your uptime guarantee?','
      answer: 'We guarantee 99.9% uptime for all our services. We have redundant systems and monitoring in place to ensure maximum availability and quick recovery from any issues.''
    }
  ];
;
const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];'
;
const filteredFAQs = faqs.filter(faq => {;
const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;'
    return matchesSearch && matchesCategory;
  });
;
const faqs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'How do I get started with your AI services?','
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What is your typical project timeline?','
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you provide ongoing support?','
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What technologies do you work with?','
      answer: 'We work with all major cloud platforms (AWS, Azure, GCP), AI frameworks (TensorFlow, PyTorch), and modern development stacks.''
    }
  ];
  const supportChannels = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Email Support','
      description: 'Get help via email within 24 hours','
      icon: Mail,
      contact: 'support@ziontechgroup.com','
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Phone Support','
      description: 'Speak directly with our technical team','
      icon: Phone,
      contact: '+1 (555) 123-4567','
      availability: 'Mon-Fri 9AM-6PM EST''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Live Chat','
      description: 'Get instant help through our chat system','
      icon: MessageCircle,
      contact: 'Available on website','
    }
  ];
const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  // TODO: Add parameters
)
    <div className="min-h-screen pt-20">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
<span className="text-cyan-400">Support</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Get help and support for our AI and IT solutions.
          </p></div>
</div>
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Mail,
      title: 'Email Support','
      hours: '24/7''
>>>>>>> origin/main
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: MessageCircle,
      title: 'Live Chat','
      availability: '24/7''
    }
  ];
const resources = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: BookOpen,
      title: 'Documentation','
      description: 'Comprehensive guides and API documentation','
      link: '/docs''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Video,
      title: 'Video Tutorials','
      description: 'Step-by-step video guides for all features','
      link: '/tutorials''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Community Forum','
      description: 'Connect with other users and experts','
      icon: <Users className="w-5 h-5" />,"
      link: '/community''
    }
  ]

    <>
</>
<Helmet>
<title>Support - Zion Tech Group | Technical Support & Help</title>
<meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />"
<meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" /></Helmet>"
<Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">"
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />"
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />'"
<div className="relative max-w-7xl mx-auto text-center">"
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">"
            How Can We
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">"
              Help You?
            </span></h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">"
            Our dedicated support team is here to help you succeed with our AI and IT solutions.
            Find answers, get assistance, and access resources.
          </p></div>
</section>

      {/* Search Section */}
      <section className="py-16 px-4">"
<div className="max-w-4xl mx-auto">"
<div className="text-center mb-12">"
<h2 className="text-3xl font-bold text-white mb-4">Search for Help</h2>"
<p className="text-gray-300">Find answers to common questions and solutions</p></div>"
<div className="relative">"
<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
<input
              type="text""
              placeholder="Search for help, questions, or topics...""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
            />
</div></div>
</section>

      {/* Contact Support */}
      <section className="py-16 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>"
<p className="text-xl text-gray-300">Get in touch with our support team</p></div>"
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            {supportChannels.map((channel, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">"
<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
<channel.icon className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>"
<p className="text-gray-300 mb-4">{channel.description}</p>"
<p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>"
<p className="text-sm text-gray-400">{channel.hours}</p></div>"
            ))}
          </div></div>
</section>

      {/* FAQ Section */}
      <section className="py-20 px-4">"
<div className="max-w-4xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>"
<p className="text-xl text-gray-300">Find answers to common questions</p></div>"
<div className="space-y-6">"
            {filteredFaqs.map((faq, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">"
<div className="flex items-start justify-between">"
<div className="flex-1">"
<div className="flex items-center mb-2">"
<span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full mr-3">"
                        {faq.category}
                      </span></div>
<h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>"
<p className="text-gray-300">{faq.answer}</p></div>"
</div></div>
            ))}

  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span> Center"
            </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              We're here to help! Get the support you need with our comprehensive help center and dedicated support team.'
            </p></div>
</div></section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-4xl mx-auto">"
<div className="cyber-card">"
<div className="text-center mb-8">"
<h2 className="text-2xl font-bold text-white mb-4">How can we help you?</h2>"
<p className="text-gray-300">Search our knowledge base or contact our support team</p></div>"
<div className="flex flex-col sm:flex-row gap-4 mb-6">"
<div className="flex-1 relative">"
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
<input
                  type="text""
                  placeholder="Search for help...""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500""
                />
</div>
<select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500""
              >
<option value="all">All Categories</option>"
<option value="General">General</option>"
<option value="Technical">Technical</option>"
<option value="Billing">Billing</option></select>"
</div>
>>>>>>> origin/main
          </div></div>
</section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Get in Touch
            </h2>
<p className="text-xl text-gray-300">"
              Choose the support channel that works best for you.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            {supportChannels.map((channel, index) => (
  // TODO: Add parameters
)
              <div key={index} className="cyber-card text-center">"
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
<channel.icon className="w-8 h-8 text-white" /></div>"
              ))}
            </div></div>
</div></section>
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-12">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
                Get in Touch
              </h2>
<p className="text-gray-300 max-w-3xl mx-auto">"
                Choose your preferred way to contact our support team
              </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
              {supportChannels.map((channel, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">"
<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
<channel.icon className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>"
<p className="text-gray-300 mb-4">{channel.description}</p>"
<p className="text-cyan-400 font-medium">{channel.contact}</p>"
<p className="text-sm text-gray-400 mt-2">{channel.availability}</p></div>"
              ))}
            </div>
          ))
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4"></section>"
<div className="max-w-4xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>"
<p className="text-xl text-gray-300">Find answers to common questions</p></div>"
<div className="space-y-6">"
              {faqs.map((faq, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
<h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>"
<p className="text-gray-300">{faq.answer}</p></div>"
              ))}
            ))
          </div></div>
</section></div>
>>>>>>> origin/main
  );
};
;
export default SupportPage;
            </div></div>
</div></section>
<Footer /></div>
  );
}
>>>>>>> origin/main
>>>>>>> cursor/delete-records-a75e
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions powered by the latest technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your business",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation for immediate results",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Advanced  solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Customer support by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help and support for all your needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation and guides for all our services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Join our community forum for discussions and tips.
              </p>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
}
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
