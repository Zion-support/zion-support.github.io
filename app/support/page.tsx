'use client';

import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. Our team is also available to help you get set up.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer comprehensive support including email support, live chat, phone support for enterprise customers, and extensive documentation and tutorials.'
    },
    {
      question: 'Can I integrate your AI solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom integrations. Our team can help with the integration process.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with industry standards, and undergo regular security audits to ensure your data is protected.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes! We work with enterprise customers to develop custom AI solutions tailored to their specific needs and requirements.'
    }
  ];

  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send us an email',
      link: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      action: 'Call us now',
      link: 'tel:+15551234567'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      action: 'Start chatting',
      link: '/chat'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'System Status',
      description: 'Check system status and uptime',
      action: 'View status',
      link: '/status'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>

    <>
      <Helmet>
  
        <title>Support - Get Help | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <h1>
  
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help You?</span>
            </h1>
            <p>
  
              Find answers to your questions, get technical support, or contact our team directly.
            </p>
            
            {/* Search Bar */}
            <div>
  
              <div>
  
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div>
  
                  <svg>
  
                    <path>
  
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Get Support
            </h2>
            
            <div>
  
              {supportOptions.map((option, index) => (
                <a>
  
                  <div>
  
                    {option.icon}
                  </div>
                  <h3>
  
                    {option.title}
                  </h3>
                  <p>
  
                    {option.description}
                  </p>
                  <span>
  
                    {option.action} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Frequently Asked Questions
            </h2>
            
            <div>
  
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div>
  
                    <h3>
  
                      {faq.question}
                    </h3>
                    <p>
  
                      {faq.answer}
                    </p>
                  </div>
                ))
              ) : (
                <div>
  
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Still Need Help?
            </h2>
            <p>
  
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div>
  
              <a>
  
                <Mail>
  
                Contact Support
              </a>
              <a>
  
                <Phone>
  
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;