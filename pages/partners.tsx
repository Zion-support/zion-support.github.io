import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Handshake, 
  Shield, 
  Cloud, 
  Brain, 
  Users, 
  Globe,
  Award,
  Zap,
  Cpu,
  Database,
  Lock,
  Rocket
} from 'lucide-react'

export default function Partners() {
  const title = 'Partners — Zion Tech Group'
  const description = 'Strategic partnerships with leading technology providers, cloud platforms, and cybersecurity experts to deliver comprehensive solutions.'
  
  const partnerCategories = [
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Strategic partnerships with leading cloud providers and infrastructure companies.',
      partners: [
        { name: 'AWS', description: 'Amazon Web Services', logo: '☁️', tier: 'Platinum' },
        { name: 'Microsoft Azure', description: 'Cloud computing platform', logo: '🔷', tier: 'Platinum' },
        { name: 'Google Cloud', description: 'Cloud infrastructure services', logo: '🔵', tier: 'Gold' },
        { name: 'DigitalOcean', description: 'Cloud infrastructure provider', logo: '🌊', tier: 'Silver' }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Partnerships with cutting-edge AI research and development organizations.',
      partners: [
        { name: 'OpenAI', description: 'Advanced AI research', logo: '🤖', tier: 'Gold' },
        { name: 'Anthropic', description: 'AI safety and research', logo: '🧠', tier: 'Gold' },
        { name: 'Hugging Face', description: 'Machine learning platform', logo: '🤗', tier: 'Silver' },
        { name: 'Databricks', description: 'Data and AI platform', logo: '📊', tier: 'Silver' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Collaborations with security experts and compliance organizations.',
      partners: [
        { name: 'CrowdStrike', description: 'Cybersecurity solutions', logo: '🦅', tier: 'Gold' },
        { name: 'Palo Alto Networks', description: 'Network security', logo: '🌲', tier: 'Gold' },
        { name: 'Rapid7', description: 'Security analytics', logo: '⚡', tier: 'Silver' },
        { name: 'Qualys', description: 'Cloud security platform', logo: '🛡️', tier: 'Silver' }
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Partnerships with data management and analytics solution providers.',
      partners: [
        { name: 'Snowflake', description: 'Data cloud platform', logo: '❄️', tier: 'Gold' },
        { name: 'Tableau', description: 'Data visualization', logo: '📈', tier: 'Silver' },
        { name: 'MongoDB', description: 'Database platform', logo: '🍃', tier: 'Silver' },
        { name: 'Elastic', description: 'Search and analytics', logo: '🔍', tier: 'Silver' }
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Access to cutting-edge technologies and expertise through our partner network.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions backed by industry-leading partners.'
    },
    {
      icon: Rocket,
      title: 'Faster Implementation',
      description: 'Accelerated delivery through proven partner integrations and best practices.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Solutions validated by our trusted partner ecosystem.'
    }
  ]

  const partnershipLevels = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with deep integration and joint go-to-market initiatives.',
      benefits: ['Priority support', 'Joint marketing', 'Custom integrations', 'Executive alignment'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with significant collaboration and mutual benefits.',
      benefits: ['Enhanced support', 'Co-marketing opportunities', 'Technical collaboration', 'Training access'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with basic collaboration and referral programs.',
      benefits: ['Standard support', 'Referral programs', 'Documentation access', 'Community access'],
      color: 'from-gray-400 to-gray-600'
    }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/partners/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners/" />
      </Head>
      
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Handshake className="w-20 h-20 mx-auto text-zion-cyan mb-4" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Strategic
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Partnerships
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            >
              We collaborate with industry leaders to deliver comprehensive, cutting-edge 
              technology solutions that drive business transformation.
            </motion.p>
          </div>
        </section>
        {/* Partnership Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver comprehensive solutions 
                that combine the best technologies and expertise in the industry.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>



                  <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit) => (
                        <li key={benefit} className="text-xs text-white/80 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {benefit}
                        </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      ))}


                    </ul>;
                  </div>;

                  <div className='flex items-center justify-between'>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                  <div className="flex items-center justify-between">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <a
                      href={partner && partner.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;
                      <ExternalLink className='w-3 h-3' />;
                    </a>;
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;

=======
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
<<<<<<< HEAD
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                      Learn More
=======
<<<<<<< HEAD
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>
=======
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                      Learn More
=======
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                    </button>
                  </div>
                </div>
              </motion.div>

            ))}

=======

            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Become a Partner CTA */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
=======

      {/* Become a Partner CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Partnership Inquiry
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Download Partnership Guide

              </button>
            </div>
          </div>
        </section>
        {/* Partner Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partner Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built strategic relationships across the technology landscape 
                to provide comprehensive solutions for our clients.
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {partnerCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <motion.div
                        key={partner.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: partnerIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-4 rounded-lg border hover:shadow-md transition-all duration-300"
                      >
                        <div className="text-4xl mb-3">{partner.logo}</div>
                        <h4 className="font-semibold mb-1">{partner.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          partner.tier === 'Platinum' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' :
                          partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {partner.tier}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


),
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) ) 
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) ) 


}</div> </div> </section> <motion.div initial= {
=======
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Partner with Us?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Partnership Inquiry;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Download Partnership Guide;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  ),;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion && motion.div> </li>) ) ;
}</ul> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion && motion.div> </span> </div> </div> </li>) ) ;
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

  duration: 0 && 0.8 

}viewport= {
  {
  once: true 

<<<<<<< HEAD
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;

=======
                  </p>;
                  <div className='mb - 4'>;
                    <h4 className='text - sm font - semibold text - white / 60 mb - 2 uppercase tracking - wider'>;
                      Benefits;
                    </h4>;
                    <ul className='space - y-1'>;
                      {partner.benefits.map (benefit => (
                        <li;
                          key={benefit}
                          className='text - xs text - white / 80 flex items - center';
                        >;
                          <div className='w - 1 h - 1 bg - cyan - 400 rounded - full mr - 2' />                          {benefit}
                        </li>))}
                    </ul>;
                  </div>;
                  <div className='flex items - center justify - between'>;
                    <a;
                      href={partner.website}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 flex items - center gap - 1';
                    >;
                      Visit Website;
                      <ExternalLink className='w - 3 h - 3' />;
                    </a>;
                    <button className='px - 4 py - 2 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - lg font - semibold text - white text - sm transition - all duration - 300 transform hover:scale - 105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Become a Partner CTA */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Partner with Us?;
            </h2>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Partnership Inquiry;
              </button>;
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                Download Partnership Guide;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;

    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
