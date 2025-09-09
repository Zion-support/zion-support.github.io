:pages-disabled/faq.tsx
        {
          question:
  'What services does Zion Tech Group offer?,
          answer:,
  Zion Tech Group offers a comprehensive range of technology services including AI development, quantum computing solutions, blockchain infrastructure, micro SaaS applications, IT services, and digital transformation consulting. We help businesses modernize their operations and leverage cutting-edge technologies.'
        }, {
:pages-disabled/faq.tsx
        }
      ]
    }
  ];
};

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
:pages-disabled/faq.tsx
      keywords="FAQ, frequently asked questions, support, help, services, pricing, technical support"
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
                    )})}
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
    </MainLayout>
  )};

export default FAQ;