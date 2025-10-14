import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead
import { 
  ArrowRightIcon, 

  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,'
  EnvelopeIcon,;';}
  MapPinIcon,';}
  RocketLaunchIcon,';}
  SparklesIcon,'}
  BoltIcon'}'
} from '@heroicons/react/24/outline'
import FuturisticBackground from '../components/FuturisticBackground'
import NeonButton from '../components/NeonButton'
import AnimatedCard from '../components/AnimatedCard'
import { services } from '../data/servicesData;'
    "@context": "https: "//schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https: "//ziontechgroup.com",
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",
    "potentialAction": {}
      "@type": "SearchAction",}
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  const features = [
    {
      icon: CpuChipIcon,'}
      title: 'AI Solutions','}
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business operations.','}
      href: '/ai-solutions];'}
    },
    {
      icon: ShieldCheckIcon,'}
      title: 'Cybersecurity','}
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.','}
      href: '/cybersecurity;'}
    },
    {
      icon: CloudIcon,'}
      title: 'Cloud Infrastructure','}
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.','}
      href: '/cloud-solutions;'}
    },
    {
      icon: RocketLaunchIcon,'}
      title: 'Digital Transformation','}
      description: 'Complete digital transformation services to modernize your business processes.','}
      href: '/digital-transformation;'}]
    }]
  ]
  return (
    <></>
      <SEOHead>FuturisticBackground</SEOHead>
      <FuturisticBackground></FuturisticBackground>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden>"
        <div>div</div>
      <div>"
            {/* Animated Title */}
            <div>h1</div>
      <h1>
                Zion Tech Group)
              </h1>
              <div>SparklesIcon</div>
      <SparklesIcon>
                <BoltIcon>RocketLaunchIcon</BoltIcon>
      <RocketLaunchIcon>
              </div>
    </>
            </div>
            
            <p className="text-2xl" md: "text-3xl text-gray-300 mb-8 leading-relaxed font-light></p>
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p></p>
              Empowering businesses with cutting-edge artificial intelligence", cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div>NeonButton</div>
      <NeonButton></NeonButton>
                Get Started Today
                <ArrowRightIcon className="w-5" h-5 ml-2 /></ArrowRightIcon>
              </NeonButton>
              <NeonButton to=/services variant=secondary size=lg></NeonButton>
                Explore Services
                <ArrowRightIcon className="w-5" h-5 ml-2 /></ArrowRightIcon>
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services Section */"}
      <section>div</section>
      <div>"
          <div>h2</div>
      <h2>
              Our Featured Services
            </h2>
            <p className="text-xl" text-gray-300 max-w-4xl mx-auto leading-relaxed></p>
              Comprehensive technology solutions designed to accelerate your business growth with real", proven results
            </p>
          </div>)
          <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto></div>)
            {featuredServices.map((service", index) => (}
              <AnimatedCard>div</AnimatedCard>
      <div>"
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>)
                <div className="space-y-3 mb-6"></div>)
                  {service.features.slice(0, 4).map((feature, featureIndex) => (}
                    <div></div>"
                      <span className="text-sm">{feature}</span>)
                    </div>)
                  )})}
                </div>
                
                <div className="mb-6>"
                  <div>span</div>
      <span>${service.pricing.basic}</span>"
                    <span className="text-gray-400 text-sm ml-2">/month</span>
                  </div>
                  <p>Starting from</p>
                </div>
                
                <div>NeonButton</div>
      <NeonButton></NeonButton>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" /></ArrowRightIcon>
                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="sm"></NeonButton>
                    Get Quote
                  </NeonButton>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-12>"
            <NeonButton to="/services" variant="primary" size="lg"></NeonButton>
              View All Services
              <ArrowRightIcon className="w-5 h-5 ml-2" /></ArrowRightIcon>
            </NeonButton>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section>div</section>
      <div></div>"
        <div>div</div>
      <div>"
            <div>h2</div>
      <h2>
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl" text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto></p>
                With over 4 years of experience in cutting-edge technology solutions", '
                we've helped businesses across various industries transform their operations 
                and achieve unprecedented growth.
              </p>
            </div>
            <div className="grid md: "grid-cols-2 lg:grid-cols-4 gap-8></div>
              {features.map((feature, index) => (}
                <AnimatedCard>div</AnimatedCard>
      <div>feature</div>
      <feature>
                  </div>
                  <h3 className="text-xl" font-semibold text-white mb-3>{feature.title"}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <Link)
                    to="{feature.href);"
                    className="text-blue-400 hover: "text-blue-300 font-semibold flex items-center
                  ></Link>
                    Learn More"}
                    <ArrowRightIcon className="w-4 h-4 ml-1" /></ArrowRightIcon>}
                  </Link>})
                </AnimatedCard>})
))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section>div</section>
      <div></div>"
        <div>div</div>
      <div>"
            <div>h2</div>
      <h2>
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl" text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed></p>'
                Let's discuss how our technology solutions can drive your business forward
              </p>
            </div>
            <div className="grid" md: "grid-cols-2 lg:grid-cols-3 gap-8></div>
              {services.slice(0", 6).map((service, index) => (}
                <AnimatedCard>div</AnimatedCard>
      <div>service</div>
      <service>
                  </div>
                  <h3 className="text-xl" font-semibold text-white mb-3>{service.title"}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link)
                    to="{service.href);"
                    className="text-blue-400 hover: "text-blue-300 font-semibold flex items-center
                  ></Link>
                    Learn More"}
                    <ArrowRightIcon className="w-4 h-4 ml-1" /></ArrowRightIcon>}
                  </Link>})
                </AnimatedCard>})
))}
            </div>
            
            <div>NeonButton</div>
      <NeonButton></NeonButton>
                Get In Touch
                <ArrowRightIcon className="w-5" h-5 ml-2 /></ArrowRightIcon>
              </NeonButton>
              <NeonButton to=/demo variant=secondary size=lg></NeonButton>
                Schedule Demo
                <ArrowRightIcon className="w-5" h-5 ml-2 /></ArrowRightIcon>
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )"}
'