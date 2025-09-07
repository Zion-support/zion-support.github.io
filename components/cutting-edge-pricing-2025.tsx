
}
  {

  }
];



export default function CuttingEdgePricing2025() {


}


export default function CuttingEdgePricing2025() {;

}

const [selectedCategory, setSelectedCategory] = useState('all');'

const allServices = [;

...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ];


      }
    }
  };

const itemVariants = {
    }
    "hidden": { "y": 20, "opacity": 0
},
    "visible": {
      }
      "y": 0,
      "opacity": 1,
      "transition": {
}
"duration": 0.5
      }
    }
  };

return (;
    <>
      <Head>

      </Head>

      <Layout>


}
                animate={{ "opacity": 1, "scale": 1 
}
                transition={{ "duration": 1, "delay": 0.2 
}

              >;
Experience revolutionary technology at competitive prices. Our;
                cutting-edge services are designed to give you a competitive;
                advantage while maintaining affordability and value.;
              </motion.p>;
              {/* Hero Stats */}

                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Pricing Tiers Section */}

                        </li>
                      ))}
                    </ul>

                        </span>;
                      </div>;
                    </div>;
                    <ul className='space-y-4 mb-8>;
                      {tier.features.map((feature, featureIndex) => (<li key={featureIndex} className=flex items-start'>;
                          <Check className='w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0 />;
                          <span className=text-white/80'>{feature}</span>;
                        </li>;
                      ))}
                    </ul>;
                        </li>;
                      ))}
                    </ul>;
                    <a;
                      href={tier && tier.ctaLink}

                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Service Categories Section *
}


              >
                All Categories ({allServices.length})
              </button>
                }`}

                <button
}
key={category.name}
                  onClick={() => setSelectedCategory(category.name)}

            >
              {filteredServices.map((service, index) => (
                <motion.div
}
key={service.id}
                  variants={itemVariants}

                      {service.tags.slice(0, 3).map((tag, tagIndex) => (<span;
                          }
                          key={tagIndex}
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20;
                        >;
                          {service.description}

                          className=px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >

                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20''
                        >

                          {tag}
                        </span>;
                      ))}
                    </div>;

                    {/* Market Info */}
                    <div className=flex items-center justify-between text-sm text-white/60 mb-4'>

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4>


                        </span>;
                      ))}
                        </p>;
                      </div>;

                        </div>;
                      </div>;
                    </div>;
                    {/* Tags */}

                      {service.tags.slice (0, 3).map ((tag, tag_index) => (<span;
                          }
                          key={tag_index}

                      {service.tags.slice (0, 3).map ((tag, tag_index) => (<span;
                          }
                          key={tag_index}

                          {tag}
                        </span>))}
                    </div>;
                    {/* Market Info */}

                          /{service.pricing.starter.period}
                        </span>                      </div>;
                          /{service.pricing.starter.period}</span>                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className=flex items - center justify - between'>                      <span > Market: {service.market_size}</span>;
                      <span className=text - cyan - 400">{service.category}</span>;
                    </div>;
                    {/* Pricing */}
                    <div className="mb - 6>;
                      <h4 className=text - sm font - semibold text - cyan - 400 mb - 2 uppercase tracking - wider">;
                        Starting From;
                      </h4>;
                      <div className="text - 2xl font - bold text - white>;
                        ${service.pricing.starter.price}
                    {/* Pricing */}
                    <div className='mb-6>;
                      <h4 className=text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white>;
                        ${service && service.pricing.starter && starter.price}
                        <span className=text-sm font-normal text-white/60'>;
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;</span>;
                      </div>;
                    </div>;
                    {/* CTA */}

                      <a;
                        href={service.website}
                        className=inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium';
                      >;
                        Learn More;
                        <ExternalLink className='ml-1 w-4 h-4 />;
                      </a>;
                      <a;
                        href=/contact';
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105;
                      >;
                        Get Started;
                        <ArrowRight className=ml-2 w-4 h-4' />;
                      </a>;
                    </div>;
                  </div>;
                  <div className=p-6">
                    <div className="flex items-start justify-between mb-4>
                      <div className=flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300>
                          {service.name}
                        </h3>
                        <p className=text-white/70 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="ml-4>
                        <div className=w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400 />
                        </div>
                      </div>
                    </div>


                      </a>
                    </div>
                  </div>


              ))}
                  {/* Hover Effect Overlay */}
<div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none />
                </motion.div>



              ))}
            </motion.div>
          </div>
        </section>

              ))}
        {/* Contact CTA Section */}
        <section className=py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>;
        {/* Contact CTA Section */}<section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black>;
          <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black>;
          <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
        {/* Contact CTA Section */}

<section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>'
          <div className='max-w-4xl mx-auto text-center px-4 "sm":px-6 "lg":px-8'>'
            <motion.div,
initial={{ "opacity": 0, "y": 30 
}
              whileInView={{ "opacity": 1, "y": 0 }}


                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}

                    {contactInfo.email}
              
              <div className=flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact
                  className=inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className=inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5 />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className=grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center>
                  <div className=w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400 />
                  </div>
                  <div className=text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300>
                    {contactInfo.mobile}
                  </a>
                </div>

                  </div>
                  <div className=text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm>{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
                  </a>;
                </div>;
                <div className='flex flex-col items-center>;
                  <div className=w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <MapPin className='w-6 h-6 text-cyan-400 />;
                  </div>;
                  <div className=text-white font-semibold'>Address</div>;
                  <div className='text-white/70 text-sm>;
                    {contactInfo.address}</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>;

                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className=text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex flex-col items-center>;
                  <div className=w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <MapPin className='w-6 h-6 text-cyan-400 />;
                  </div>;
                  <div className=text-white font-semibold'>Address</div>;
                  <div className='text-white/70 text-sm>;
                    {contactInfo && contactInfo.address}
                  </div>                </div>                  </div>;
                  <div className=text-white font-semibold">Phone</div>;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300>;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className=flex flex-col items-center">;
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3>;
                    <Mail className=w-6 h-6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold>Email</div>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className=text-cyan-400 hover:text-cyan-300 transition-colors duration-300">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex flex-col items-center>;
                  <div className=w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">;
                    <MapPin className="w-6 h-6 text-cyan-400 />;
                  </div>;
                  <div className=text-white font-semibold">Address</div>;
                  <div className="text-white/70 text-sm>{contactInfo && contactInfo.address}</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>;
  ))}
}
  )}
                        <span className=text - sm font - normal text - white / 60">/{service.pricing.starter.period}</span>;
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className=flex items - center justify - between'>;
                      <a;
                        href={service.website}
                        className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 text - sm font - medium;
                      >;
                        Learn More;
                        <ExternalLink className=ml - 1 w - 4 h - 4' />;
                      </a>;
                      <a;
                        href='/contact;
                        className=inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
                      >;
                        Get Started;
                        <ArrowRight className='ml - 2 w - 4 h - 4 />                      </a>                      <a;
                        href={service.website}
                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 text - sm font - medium;
                      >;
                        Learn More;
                        <ExternalLink className=ml - 1 w - 4 h - 4" />;
                      </a>;
                      <a;
                        href="/contact;
                        className=inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
                      >;
                        Get Started;
                        <ArrowRight className="ml - 2 w - 4 h - 4 />;
                      </a>;
                    </div>;
                  </div>;
                  {/* Hover Effect Overlay */}
                  <div className=absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer - events - none' />                </motion.div>                  <div className=absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer - events - none" />;
                </motion.div>))}
            </motion.div>;
          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 bg - gradient - to - br from - black via - purple - 900 / 20 to - black>;
          <div className=max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - br from - black via - purple - 900 / 20 to - black>;
          <div className=max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 6>;
                Ready to Get Started?;
              </h2>;
              <p className=text - xl text - white / 80 mb - 8 leading - relaxed'>;
                Our team of experts is ready to help you choose the perfect plan;
                and get you started with our cutting - edge technology solutions.;
                Contact us today for a personalized consultation.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8>;
                <a;
                  href=/contact';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25;
                >;
                  Start Your Journey;
                  <ArrowRight className=ml - 2 w - 5 h - 5' />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105;
                >;
                  <Phone className=mr - 2 w - 5 h - 5' />                  Call Now                Ready to Get Started?;
              </h2>;
              <p className="text - xl text - white / 80 mb - 8 leading - relaxed>;
                Our team of experts is ready to help you choose the perfect plan and get you started with our;
                cutting - edge technology solutions. Contact us today for a personalized consultation.;
              </p>;
              <div className=flex flex - col sm:flex - row gap - 4 justify - center mb - 8">;
                <a;
                  href="/contact;
                  className=inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25";
                >;
                  Start Your Journey;
                  <ArrowRight className="ml - 2 w - 5 h - 5 />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className=inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105";
                >;
                  <Phone className="mr - 2 w - 5 h - 5 />;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - center>;
                <div className=flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3>;
                    <Phone className=w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold>Phone</div>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className=text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex flex - col items - center>;
                  <div className=w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <Mail className='w - 6 h - 6 text - cyan - 400 />;
                  </div>;
                  <div className=text - white font - semibold'>Email</div>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300;
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className=flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3>;
                    <MapPin className=w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold>Address</div>;
                  <div className=text - white / 70 text - sm'>;
                    {contact_info.address}
                  </div>                </div>                  </div>;
                  <div className=text - white font - semibold">Phone</div>;
                  <a href={`tel:${contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300>;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className=flex flex - col items - center">;
                  <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3>;
                    <Mail className=w - 6 h - 6 text - cyan - 400" />;
                  </div>;
                  <div className="text - white font - semibold>Email</div>;
                  <a href={`mailto:${contact_info.email}`} className=text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300">;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className="flex flex - col items - center>;
                  <div className=w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3">;
                    <MapPin className="w - 6 h - 6 text - cyan - 400 />;
                  </div>;
                  <div className=text - white font - semibold">Address</div>;
                  <div className="text - white / 70 text - sm">{contact_info.address}</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>);
}
    </>)})}
  )
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
