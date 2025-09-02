ursor/automate-test-fix-improve-and-merge-code-48f3

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  }

  const faqCategories = [
    {
ursor/automate-test-fix-improve-and-merge-code-48f3
        {
          question:
  'What services does Zion Tech Group offer?,'
          answer:, Zion Tech Group offers a comprehensive range of technology services including AI development, quantum computing solutions, blockchain infrastructure, micro SaaS applications, IT services, and digital transformation consulting. We help businesses modernize their operations and leverage cutting-edge technologies.''
        }, {
ursor/automate-test-fix-improve-and-merge-code-48f3
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
ursor/automate-test-fix-improve-and-merge-code-48f3
      keywords="FAQ, frequently asked questions, support, help, services, pricing, technical support"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about our services, pricing, and support. 
              Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover: bg-gray-50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold text-gray-900">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team is here to help. Contact us directly for personalized assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-700">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions via email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Help Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our additional resources for more information and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Help Center</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
                <a href="/help" className="text-blue-600 font-semibold hover:text-blue-700">
                  Visit Help Center →
                </a>
              </div>
              
              <div className="text-center p-6">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Technical documentation and APIs</p>
                <a href="/documentation" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Documentation →
                </a>
              </div>
              
              <div className="text-center p-6">
                <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 mb-4">Connect with other users</p>
                <a href="/community" className="text-blue-600 font-semibold hover:text-blue-700">
                  Join Community →
                </a>
              </div>
              
              <div className="text-center p-6">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Status Page</h3>
                <p className="text-gray-600 mb-4">Check system status and updates</p>
                <a href="/status" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Status →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FAQ;