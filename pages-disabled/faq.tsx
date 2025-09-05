import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import {}
  // TODO: Implement;
};
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search,
  Filter,
  MessageCircle,
  Phone,
  Mail;'
} from 'lucide-react;
const faqCategories = [']
  { id: 'general', name: 'General Questions', count: 15 },''
  { id: 'technical', name: 'Technical Support', count: 20 },''
  { id: 'billing', name: 'Billing & Pricing', count: 10 },''
  { id: 'api', name: 'API & Integration', count: 25 }'];
];

const faqs = {}
  general: []
    {'}
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI services, IT services, micro SaaS solutions, custom development, and consulting. Our services cover everything from artificial intelligence and machine learning to cloud infrastructure and cybersecurity."
    },
    {}
      question: "How long has Zion Tech Group been in business?",
      answer: "Zion Tech Group has been providing technology solutions for over 5 years. We've grown from a small startup to a trusted partner for businesses of all sizes, from startups to Fortune 500 companies.'
    },
    {}
      question: "Do you work with startups?",
      answer: "Yes! We have special packages and pricing designed specifically for startups. We understand the unique challenges startups face and offer flexible solutions that can grow with your business."
    },
    {}
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, financial services, e-commerce, manufacturing, education, and real estate. Our team has deep domain expertise across multiple sectors."
    },
    {}
      question: "Do you offer remote services?",
      answer: "Yes, we work with clients globally and offer remote services. Our team is distributed and we have experience working with clients across different time zones and locations."
    },
    {}
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {}
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 technical support for enterprise clients. Support terms are included in all our service agreements."
    },
    {}
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 Type II and ISO 27001."
    },
    {}
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and third-party applications. Our team has experience with a wide range of technologies and can work with your current infrastructure."
    },
    {}
      question: "What makes Zion Tech Group different?",
      answer: "We combine deep technical expertise with business acumen, offer flexible engagement models, provide comprehensive support, and focus on delivering real business value. Our team is committed to your success."
    }];
  ],
  technical: []
    {}
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, PostgreSQL, MongoDB, and more. We choose the best technology stack for each project's specific requirements.'
    },
    {}
      question: "Do you provide source code?",
      answer: "Yes, clients receive full ownership of source code and intellectual property for custom development projects. We also provide comprehensive documentation and knowledge transfer."
    },
    {}
      question: "How do you handle scalability?",
      answer: "We design solutions with scalability in mind from the start, using cloud-native architectures, microservices, load balancing, and auto-scaling capabilities to handle growth."
    },
    {}
      question: "What about mobile app development?",
      answer: "We develop both native iOS/Android apps and cross-platform solutions using React Native and Flutter. We can also create progressive web apps (PWAs) for broader compatibility."
    },
    {}
      question: "Do you offer AI and machine learning services?",
      answer: "Yes, we have a dedicated AI team that provides machine learning model development, natural language processing, computer vision, predictive analytics, and AI integration services."
    },
    {}
      question: "How do you ensure code quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and maintain high code quality standards throughout the development process."
    },
    {}
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration services, helping businesses move to AWS, Azure, or Google Cloud with minimal downtime and maximum efficiency."
    },
    {}
      question: "Do you provide API development?",
      answer: "Yes, we develop RESTful APIs, GraphQL APIs, and microservices. We also provide comprehensive API documentation and integration support."
    },
    {}
      question: "What about database design and optimization?",
      answer: "We provide database design, optimization, migration, and management services. Our team has expertise with both SQL and NoSQL databases."
    },
    {}
      question: "How do you handle testing and quality assurance?",
      answer: "We implement comprehensive testing strategies including unit testing, integration testing, performance testing, and user acceptance testing to ensure high-quality deliverables."
    }];
  ],
  billing: []
    {}
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, retainer agreements, and subscription-based services. We work with you to find the best pricing structure for your needs."
    },
    {}
      question: "Do you require upfront payment?",
      answer: "Payment terms vary by project size and type. For smaller projects, we may require partial upfront payment. For larger projects, we typically use milestone-based payments."
    },
    {}
      question: "Are there any hidden costs?",
      answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we communicate any changes or additional costs before they're incurred.'
    },
    {}
      question: "Do you offer discounts for long-term projects?",
      answer: "Yes, we offer volume discounts for long-term engagements and retainer agreements. We also provide special pricing for startups and non-profit organizations."
    },
    {}
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, credit cards, and digital payment platforms. We can also work with your preferred payment terms."
    },
    {}
      question: "Can I get a free consultation?",
      answer: "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary estimates. This helps both parties understand the scope and expectations."
    },
    {}
      question: "Do you provide detailed invoices?",
      answer: "Yes, we provide detailed invoices with itemized costs, time tracking, and project progress. Our billing is transparent and easy to understand."
    },
    {}
      question: "What happens if the project goes over budget?",
      answer: "We work hard to stay within budget and communicate any potential overruns early. Any additional costs must be approved by the client before work continues."
    },
    {}
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer various maintenance and support contracts ranging from basic support to comprehensive managed services with 24/7 monitoring."
    },
    {}
      question: "Can I change the scope of work?",
      answer: "Yes, scope changes are common in software projects. We handle change requests through a formal process and provide updated timelines and costs before proceeding."
    }];
  ],
  api: []
    {}
      question: "What APIs do you provide?",
      answer: "We provide various APIs including AI services APIs, data processing APIs, integration APIs, and custom APIs for specific business needs. All APIs are RESTful and well-documented."
    },
    {}
      question: "How do I get API access?",
      answer: "API access is provided through our developer portal where you can register, get API keys, and access comprehensive documentation and testing tools."
    },
    {}
      question: "What authentication methods do you support?",
      answer: "We support multiple authentication methods including API keys, OAuth 2.0, JWT tokens, and custom authentication schemes depending on your security requirements."
    },
    {}
      question: "Do you provide SDKs and libraries?",
      answer: "Yes, we provide SDKs for popular programming languages including Python, JavaScript, Java, C#, and PHP. We also offer code examples and integration guides."
    },
    {}
      question: "What are your API rate limits?",
      answer: "Rate limits vary by API and subscription tier. We offer different tiers from free developer accounts to enterprise-level unlimited access. Specific limits are detailed in our API documentation."
    },
    {}
      question: "How do you handle API versioning?",
      answer: "We use semantic versioning and maintain backward compatibility for at least 12 months. We provide migration guides and deprecation notices well in advance of any breaking changes."
    },
    {}
      question: "Do you provide webhooks?",
      answer: "Yes, we support webhooks for real-time notifications and event-driven integrations. You can configure webhooks for various events and receive instant notifications."
    },
    {}
      question: "What about API monitoring and analytics?",
      answer: "We provide comprehensive API monitoring, analytics dashboards, and usage reports. You can track API performance, usage patterns, and error rates in real-time."
    },
    {}
      question: "Can I test APIs before integration?",
      answer: "Yes, we provide sandbox environments and testing tools where you can test APIs with sample data before integrating them into your production systems."
    },
    {}
      question: "Do you offer API support?",
      answer: "Yes, we provide comprehensive API support including documentation, code examples, integration assistance, and technical support for API-related issues."
    }];
  ];
};

export default function FAQPage() {}
  const [activeCategory, setActiveCategory] = useState('general');'
  const [openItems, setOpenItems] = useState<number[]>([]);
</number>
    <MainLayout;'
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, pricing, technical support, and more."
    >
</MainLayout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="text-center max-w-4xl mx-auto"
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-12 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>"
              <div className="flex flex-col md:flex-row gap-4 mb-8">"
</div>"
                <div className="flex-1 relative">"
</div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
                  <input;"
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm};
                    onChange={(e) => setSearchTerm(e.target.value)};
</input>
                </div>"
                <div className="flex gap-2">"
</div>
                    <button;
                      key={category.id};
                      onClick={() => setActiveCategory(category.id)};
</button>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-12">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>"
              <div className="space-y-4">"
</div>
                  <motion.div;
                    key={index};
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.5, delay: index * 0.1 }};
                  >
</motion>
                    <button;
                      onClick={() => toggleItem(index)};
</button>"
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">"
</h3>
                      </h3>"
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />"
</ChevronUp>"
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />"
</ChevronDown>
                    </button>
                    <AnimatePresence>
</AnimatePresence>
                        <motion.div;
                          initial={{ height: 0, opacity: 0 }};
                          animate={{ height: 'auto', opacity: 1 }}'
                          exit={{ height: 0, opacity: 0 }};
                          transition={{ duration: 0.3 }}'
                          className="overflow-hidden"
                        >
</motion>"
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">"
</div>
                          </div>
                        </motion.div>
                      )};
                    </AnimatePresence>
                  </motion.div>
                ))};
              </div>"
                <div className="text-center py-12">"
</div>"
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
</HelpCircle>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
</p>
                  </p>
                </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto text-center">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
              >
</motion>"
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
                </h2>"
                <p className="text-lg text-gray-600 mb-8">"
</p>
                </p>
                "
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>"
                  <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
                    <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />"
</MessageCircle>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                    </h3>"
                    <p className="text-gray-600 text-sm mb-4">"
</p>
                    </p>"
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">"
</button>
                    </button>
                  </div>
                  "
                  <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
                    <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />"
</Phone>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                    </h3>"
                    <p className="text-gray-600 text-sm mb-4">"
</p>
                    </p>"
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-semibold">"
</a>
                    </a>
                  </div>
                  "
                  <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />"
</Mail>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                    </h3>"
                    <p className="text-gray-600 text-sm mb-4">"
</p>
                    </p>"
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-semibold">"
</a>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>"