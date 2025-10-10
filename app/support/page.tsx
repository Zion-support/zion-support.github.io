'use client';




  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {

    },
    {
      category: 'Technical',
      question: 'What technical support do you provide?',
      answer: 'We offer 24/7 technical support for all our services, including AI solutions, cloud infrastructure, and custom software. Our support includes phone, email, and live chat options.'
    },
    {
      category: 'Billing',
      question: 'How does your pricing work?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer both project-based and subscription models. Contact us for a custom quote tailored to your requirements.'
    },
    {
      category: 'Technical',
      question: 'Do you provide training for your AI solutions?',
      answer: 'Yes! We provide comprehensive training for all our AI solutions, including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our tools.'
    },
    {
      category: 'General',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI and IT solutions are adaptable to various business needs.'
    },
    {
      category: 'Technical',
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures, comply with industry standards, and provide regular security audits and updates.'
    }
  ];


  const supportChannels = [
    {title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      contact: 'support@ziontechgroup.com'},
    {title: 'Phone Support',
      description: 'Speak directly with our technical team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST'},
    {title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website'}]

  const filteredFaqs = faqs.filter(faq =>)
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );


      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

                />
              </div>
            </div>


                />
              </div>
            </div>


                </div>
              ))}
            </div>

                    <p className="text-gray-300">{faq.answer</p>}</p>
                  </div>
                ))}
              </div>
            </h2>

                  Contact Support
                  <MessageCircle className="w-5 h-5" />
                </button>

                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
