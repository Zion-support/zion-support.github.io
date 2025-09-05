
const serviceCategories = [;
  {}
    title: 'AI Services,',
const serviceCategories = [
  {
    title: 'AI Services',
    icon: Brain,
    description: 'Cutting-edge artificial intelligence solutions that transform your business,',
    href: '/ai-services,',
    color: 'from-blue-500 to-cyan-500,',
    services: [;
      'Machine Learning,',
      'Natural Language Processing',',
      'Computer Vision',',
      'AI Automation',',
      'Predictive Analytics',',
      'Custom AI Development'';
    ],
    stats: { projects: '150+, satisfaction: '98%' }',
  },
  {}
    title: 'IT Services,',
    icon: Network,
    description: 'Comprehensive information technology services for modern businesses,',
    href: '/it-services,',
    color: 'from-green-500 to-emerald-500,',
    services: [;
      'Cloud Migration,',
      'Infrastructure Management',',
      'System Integration',',
      'IT Consulting',',
      '24/7 Support',',
      'Network Security'';
    ],
    stats: { projects: '300+, satisfaction: '99%' }',
  },
  {}
    title: 'Micro SaaS,',
    icon: Cloud,
    description: 'Scalable software-as-a-service solutions for specific business needs,',
    href: '/micro-saas,',
    color: 'from-purple-500 to-pink-500,',
    services: [;
      'Custom SaaS Development,',
      'API Integration',',
      'Mobile Applications',',
      'Web Applications',',
      'Cloud Deployment',',
      'Maintenance & Support'';
    ],
    stats: { projects: '200+, satisfaction: '97%' }',
  },
  {}
    title: 'Cybersecurity,',
    icon: Shield,
    description: 'Advanced security solutions to protect your digital assets,',
    href: '/cybersecurity,',
    color: 'from-red-500 to-orange-500,',
    services: [;
      'Security Audits,',
      'Threat Detection',',
      'Data Protection',',
      'Compliance Management',',
      'Incident Response',',
      'Security Training'';
    ],
    stats: { projects: '100+, satisfaction: '100%' }',
  }
        {/* Service Categories */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                const IconComponent = category.icon;
                return (;
                  <motion.div);
                    key={category.title}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                        href={category.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform duration-300""
                      >;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2" />";
                      </Link>;
                    </div>;
                  </motion.div>;
                );
              })}
        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                const IconComponent = item.icon;
                return (;
                  <motion.div);
                    key={item.title}
                    className="text-center""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                      <IconComponent className="w-8 h-8 text-white" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>"
                    <p className="text-gray-600">{item.description}</p>"
                  </motion.div>;
                );
              })}
        {/* Testimonials */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >,
                  <div className="flex items-center mb-4">";
                    {[...Array(testimonial.rating)].map((_, i) => (,
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
                    ))}
                  </div>,
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>"
                  <div>;
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>"
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>"
                  </div>;
                </motion.div>;
              ))}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >,
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">";
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let's discuss how our technology services can help you achieve your goals and drive growth.';
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
                >;
                  Get Free Consultation;
                </Link>;
                <Link;
                  href="/sitemap"";
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"";
                >;
                  Explore All Services;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}