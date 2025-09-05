import React from 'react';
  ExternalLink,
  Home,
  Settings,
  Users,
  FileText,
    ]
  }
];

      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
      keywords="sitemap, website map, navigation, pages, services, resources"
    >
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#site-structure"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Sitemap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quick Access
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Jump to the most popular sections of our website
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Services", url: "/services", icon: Settings },
                    { name: "Contact", url: "/contact", icon: Phone },
                    { name: "Case Studies", url: "/case-studies", icon: BarChart3 },
                    { name: "Blog", url: "/blog", icon: MessageSquare }
                  ].map((link, index) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                    >
                      <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {link.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Can't find what you're looking for? We're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/search"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Website
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}