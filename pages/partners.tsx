
import React from 'react';'
import Head from 'next / head';
'
import { motion } from 'framer-motion';

import {}
  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Clock,
  TrendingUp,
';
} from 'lucide-react';'
import EnhancedNavigation from '../components / EnhancedNavigation';'
import EnhancedFooter from '../components / EnhancedFooter';
export default /**;
 * PartnersPage - Function description;
 */
function PartnersPage() {}
  const partners = [;
    {}
  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
'
      name: 'Microsoft Azure','
      category: 'Cloud Infrastructure',
      description:;'
        'Strategic partnership for enterprise cloud solutions and AI services','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://azure.microsoft.com','
      partnership: 'Technology Alliance',
      benefits: [;'
        'Joint go - to - market','
        'Technical integration','
        'Co - selling opportunities',
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {"
      name: "NVIDIA","
      category: "AI & Computing","
      description: "Collaboration on GPU-accelerated AI and quantum computing solutions","
      logo: "/api/placeholder/200/100","
      website: "https://nvidia.com","
      partnership: "Technology Partner","
      benefits: ["Hardware optimization", "Joint R&D", "Market expansion"],
      icon: Brain,"
      color: "from-green-500 to-emerald-500"
    },
    {"
      name: "IBM Quantum","
      category: "Quantum Computing","
      description: "Partnership for quantum computing research and enterprise solutions","
      logo: "/api/placeholder/200/100","
      website: "https://quantum-computing.ibm.com","
      partnership: "Research Partner","
      benefits: ["Quantum access", "Joint research", "Enterprise deployment"],
      icon: Atom,"
      color: "from-purple-500 to-pink-500"
    },
    {"
      name: "Cisco","
      category: "Cybersecurity","
      description: "Strategic alliance for network security and threat detection solutions","
      logo: "/api/placeholder/200/100","
      website: "https://cisco.com","
      partnership: "Security Alliance","
      benefits: ["Network integration", "Security solutions", "Global reach"],
      icon: Shield,"
      color: "from-red-500 to-orange-500"
    },
    {"
      name: "AWS","
      category: "Cloud Services","
      description: "Partnership for scalable cloud infrastructure and AI services","
      logo: "/api/placeholder/200/100","
      website: "https://aws.amazon.com","
      partnership: "Technology Partner","
      benefits: ["Cloud infrastructure", "AI services", "Global expansion"],
      icon: Rocket,"
      color: "from-yellow-500 to-orange-500"
    },
    {"
      name: "Intel","
      category: "Hardware & AI","
      description: "Collaboration on AI-optimized hardware and edge computing solutions","
      logo: "/api/placeholder/200/100","
      website: "https://intel.com","
      partnership: "Technology Partner","
      benefits: ["Hardware optimization", "Edge computing", "Performance tuning"],
      icon: Brain,'
      color: 'from-indigo-500 to-purple-500',;
    },  ];
"
      color: "from-indigo-500 to-purple-500"
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const partnershipTypes = []
    {"
      title: "Technology Alliance","
      description: "Deep technical integration and joint product development","
      benefits: ["Shared technology roadmap", "Joint R&D", "Co-innovation"],
      icon: Handshake,"
      color: "from-blue-500 to-cyan-500"
    },
    {'
      name: 'NVIDIA','
      category: 'AI & Computing',
      description:;'
        'Collaboration on GPU - accelerated AI and quantum computing solutions','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://nvidia.com','
      partnership: 'Technology Partner','
      benefits: ['Hardware optimization', 'Joint R & D', 'Market expansion'],
      icon: Brain,'
      color: 'from - green - 500 to - emerald - 500',
    },
    {'
      name: 'IBM Quantum','
      category: 'Quantum Computing',
      description:;'
        'Partnership for quantum computing research and enterprise solutions','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://quantum - computing.ibm.com','
      partnership: 'Research Partner','
      benefits: ['Quantum access', 'Joint research', 'Enterprise deployment'],
      icon: Atom,'
      color: 'from - purple - 500 to - pink - 500',
    },
    {'
      name: 'Cisco','
      category: 'Cybersecurity',
      description:;'
        'Strategic alliance for network security and threat detection solutions','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://cisco.com','
      partnership: 'Security Alliance','
      benefits: ['Network integration', 'Security solutions', 'Global reach'],
      icon: Shield,'
      color: 'from - red - 500 to - orange - 500',
    },
    {'
      name: 'AWS','
      category: 'Cloud Services',
      description:;'
        'Partnership for scalable cloud infrastructure and AI services','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://aws.amazon.com','
      partnership: 'Technology Partner','
      benefits: ['Cloud infrastructure', 'AI services', 'Global expansion'],
      icon: Rocket,'
      color: 'from - yellow - 500 to - orange - 500',
    },
    {'
      name: 'Intel','
      category: 'Hardware & AI',
      description:;'
        'Collaboration on AI - optimized hardware and edge computing solutions','
      logo: '/api / placeholder / 200 / 100','
      website: 'https://intel.com','
      partnership: 'Technology Partner',
      benefits: [;'
        'Hardware optimization','
        'Edge computing','
        'Performance tuning',
      ],
      icon: Brain,'
      color: 'from - indigo - 500 to - purple - 500',
    },  ];
;
  const partnership_types = [;
    {'
      title: 'Technology Alliance','
      description: 'Deep technical integration and joint product development','
      benefits: ['Shared technology roadmap', 'Joint R & D', 'Co - innovation'],
      icon: Handshake,'
      color: 'from - blue - 500 to - cyan - 500',
    },
    {'
      title: 'Go - to - Market','
      description: 'Joint sales and marketing initiatives for mutual growth',
      benefits: [;'
        'Co - selling opportunities','
        'Joint marketing','
        'Revenue sharing',
      ],
      icon: Rocket,'
      color: 'from - purple - 500 to - pink - 500',
    },
    {'
      title: 'Research Partnership','
      description: 'Collaborative research in emerging technologies','
      benefits: ['Joint publications', 'Shared IP', 'Academic collaboration'],
      icon: Brain,'
      color: 'from - emerald - 500 to - teal - 500',
    },
    {'
      title: 'Channel Partnership',
      description:;'
        'Distribution and reseller partnerships for market expansion',
      benefits: [;'
        'Channel enablement','
        'Training programs','
        'Support collaboration',
      ],
      icon: Users,

      {/* Hero Section */}'
      <section className='relative pt-32 pb-20 px-6'>;'
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

          >"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Strategic Partners;
            </h1>

            </p>'
            <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Become a Partner'
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>


            transition={{ duration: 0 && 0.8 }}'
            className='mb-8'>;'
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Strategic Partners;
            </h1>;'
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion && motion.div>;
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}'
            className='mb-12'>;'
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;'
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > Partners - Zion Tech Group</title>;
        <meta;'
          name='description';'
          content='Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators.';
        />;'
        <meta property='og:title' content='Partners - Zion Tech Group' />;
        <meta;'
          property='og:description';'
          content='Strategic partnerships and collaboration opportunities.';
        />;'
        <link rel='canonical' href='https://ziontechgroup.com / partners' />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}'
      <section className='relative pt - 32 pb - 20 px - 6'>;'
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}'
            className='mb - 8';
          >;'
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6'>;
              Strategic Partners;
            </h1>;'
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
'
            className='mb-12'
          >'
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              Join our ecosystem of technology leaders, innovators, and industry;
              experts to create transformative solutions that shape the future;
              of computing.
"
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building the future of technology through strategic partnerships and collaboration;
            </p>'
            <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Become a Partner'
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}'
            className='mb-8'>;'
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Strategic Partners;
            </h1>;'
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion && motion.div>;
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}'
            className='mb-12'>;'
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;'
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > Partners - Zion Tech Group</title>;
        <meta;'
          name='description';'
          content='Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators.';
        />;'
        <meta property='og:title' content='Partners - Zion Tech Group' />;
        <meta;'
          property='og:description';'
          content='Strategic partnerships and collaboration opportunities.';
        />;'
        <link rel='canonical' href='https://ziontechgroup.com / partners' />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}'
      <section className='relative pt - 32 pb - 20 px - 6'>;'
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}'
            className='mb - 8';
          >;'
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6'>;
              Strategic Partners;
            </h1>;'
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}'
            className='mb - 12';
          >;'
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
              Join our ecosystem of technology leaders, innovators, and industry;
              experts to create transformative solutions that shape the future;
              of computing.;
            </p>;
"
            className="mb-12"
          >"
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">


              to create transformative solutions that shape the future of computing.
            </p>"
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Become a Partner"
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>


              >"
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">"
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
"
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>"
                <div className="text-white/70">{stat.label}</div>
              </motion.div>


            ))}

          </div>;
        </div>;
      </section>;



            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >"
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>"
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer various partnership models to meet your business objectives and growth goals;
            </p>
          </motion.div>


              <motion.div;
'
            className='text-center mb-16'>;'
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Partnership Types;
            </h2>;'
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              We offer various partnership models to meet your business;
              objectives and growth goals;
            </p>;
          </motion && motion.div>;
'
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes && partnershipTypes.map((type, index) => (;
              <motion&& motion.div;
                key={type && type.title}




                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>"
                  <type.icon className="w-8 h-8 text-white" />
                </div>



                  ))}
                </ul>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;


      {/* Current Partners */}'
      <section className='py-20 px-6'>;'
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div;
      {/* Current Partners */}"
      <section className="py-20 px-6">"
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >"
            <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>"
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Leading technology companies and organizations that trust us to deliver innovative solutions;
            </p>
          </motion.div>


              <motion.div;
'
            className='text-center mb-16'>;'
            <h2 className='text-4xl font-bold text-white mb-6'>Our Partners</h2>;'
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Leading technology companies and organizations that trust us to;
              deliver innovative solutions;
            </p>;
          </motion && motion.div>;
'
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners && partners.map((partner, index) => (;
              <motion&& motion.div;
                key={partner && partner.name}




                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


              >"
                <div className="p-6">"
                  <div className="flex items-center gap-3 mb-4">`
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>"
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>

"
                  <div className="flex items-center justify-between">




                    <a;
                      href={partner && partner.website}'
                      target='_blank''
                      rel='noopener noreferrer''
                      className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;'
                      <ExternalLink className='w-3 h-3' />;
                    </a>;'
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;




                    <a;
                      href={partner.website  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
                      target="_blank""
                      rel="noopener noreferrer""
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website"
                      <ExternalLink className="w-3 h-3" />

                      Learn More'
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>
                  </div>
                </div>
              </motion.div>

      {/* Become a Partner CTA */}'
      <section className='py-20 px-6'>;'
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div;
      {/* Become a Partner CTA */}"
      <section className="py-20 px-6">"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 30 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


          >
"
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>"
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>

                Download Partnership Guide;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
)"
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) )
}</ul> </motion.div>) )"
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) )"
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) )


),"
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) "
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) ) "
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;'
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Partner with Us?;
            </h2>;'
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;'
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Partnership Inquiry;
              </button>;'
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Download Partnership Guide;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  ),;"
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion && motion.div> </li>) ) ;
}</ul> </motion && motion.div>) ) ;"
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion && motion.div> </span> </div> </div> </li>) ) ;"
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {}
}</div> </div> </section> <motion.div initial= {}
  {}
  opacity: 0, y: 30;
}whileInView= {}
  {}
  opacity: 1, y: 0;
}transition= {}
  {}
          >;'
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Partner with Us?;
            </h2>;'
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;'
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;'
              <button className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Partnership Inquiry;
              </button>;'
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                Download Partnership Guide;


              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;

    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


'
import React from 'react';'
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {}
  return (
    <MainLayout "
      title="Page - Zion Tech Group""
      description="Zion Tech Group page"
    >"
      <div className="min-h-screen bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 py-20">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

'"`