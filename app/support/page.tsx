'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string});;)
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number></number>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'});;)
},
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
      category: 'support'});;)
},
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'implementation'});;)
},
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'});;)
},
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'});;)
},
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
      category: 'integration'});;)
},
    {
      question: 'What happens if we need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
      category: 'scaling'});;)
},
    {
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'});;)
}
  ];

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available',
      color: 'text-blue-400'});;)
},
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontech.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'});;)
},
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'});;)
},
    {
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
      icon: Zap,
      contact: '+1 (555) 911-TECH',
      availability: '24/7 Critical Support',
      color: 'text-red-400'});;)
}
  ];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index););)
};

  return (
    <>
      <Helmet></Helmet>
        <titl></titl>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat." />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk" />
      </Helmet>

      <div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Expert <spa></spa>Support</span>
            </h1>
            <p></p>
              Get the help you need, when you need it. Our expert support team is available 24/7 to assist with all your AI and IT solutions.
            </p>

            {/* Search Bar */}
            <div></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value);
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Quick Stats */}
            <div></div>
              <div></div>
                  <di></di>&lt; 2min</div>
                <di></di>Average Response Time</div>
              </div>
              <div></div>
                <di></di>98%</div>
                <di></di>Customer Satisfaction</div>
              </div>
              <div></div>
                <di></di>24/7</div>
                <di></di>Support Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Get Support</h2>
              <p></p>
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
            </div>

            <div></div>
              {supportChannels.map((channel, index) => (
                <div></div>
                  <div></div>
                    <channel.icon className="w-8 h-8" />
                  </div>
                  <h></h>{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section></section>
          <div></div>
            <h></h>Support Resources</h2>
            <div></div>
              {resources.map((resource, index) => (
                <div></div>
                  <div></div>
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h></h>{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a></a>
                    Access Resource →
                  </a>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 mb-8">Find answers to common questions</p>

              {/* Category Filter */}
              <div></div>
                {categories.map((category) => (
                  <button></button> setSelectedCategory(category);
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'});;)
}`}
                  >
                    {category === 'all' ? 'All Questions' : category.charAt(0).toUpperCase() + category.slice(1);
                  </button>
                ));
              </div>
            </div>

            <div></div>
              {filteredFAQs.map((faq, index) => (
                <div></div>
                  <button></button> toggleFAQ(index);
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h></h>{faq.question}</h3>
                    <div></div>
                      <HelpCircle className="w-6 h-6 text-purple-400" />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div></div>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  );
                </div>
              ));
            </div>

            {filteredFAQs.length === 0 && (
              <div></div>
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No questions found matching your search criteria.</p>
              </div>
            );
          </div>
        </section>

        {/* Resources Section */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Additional Resources</h2>
              <p></p>
                Explore our comprehensive documentation, tutorials, and community resources.
              </p>
            </div>

            <div></div>
              <div></div>
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h></h>Documentation</h3>
                <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
                <button></button>
                  View Docs
                </button>
              </div>

              <div></div>
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h></h>Community Forum</h3>
                <p className="text-gray-300 mb-6">Connect with other users and get help from the community.</p>
                <button></button>
                  Join Community
                </button>
              </div>

              <div></div>
                <Clock className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h></h>Status Page</h3>
                <p className="text-gray-300 mb-6">Check the real-time status of all our services and systems.</p>
                <button></button>
                  Check Status
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Still Need Help?</h2>
              <p></p>
                Can't find what you're looking for? Our expert team is here to help with any questions or issues.
              </p>
              <div></div>
                <button></button>
                  <Phone className="w-5 h-5" />
                  Call Support
                </button>
                <button></button>
                  <Mail className="w-5 h-5" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default SupportPage;