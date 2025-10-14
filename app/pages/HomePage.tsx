import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead;
import { 
  ArrowRightIcon, 

  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon,';
  BoltIcon'}'
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { services } from '../data/servicesData;
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  const features = [
    {
      icon: CpuChipIcon,'
          title: 'AI Solutions','
          description: 'Advanced artificial intelligence and machine learning solutions to transform your business operations.'
  },'
      href: '/ai-solutions;
    },
    {
      icon: ShieldCheckIcon,'
          title: 'Cybersecurity','
          description: 'Comprehensive security solutions to protect your digital assets and infrastructure.'
  },'
      href: '/cybersecurity;
    },
    {
      icon: CloudIcon,'
          title: 'Cloud Infrastructure','
          description: 'Scalable cloud solutions and infrastructure management for modern businesses.'
  },'
      href: '/cloud-solutions;
    },
    {
      icon: RocketLaunchIcon,'
          title: 'Digital Transformation','
          description: 'Complete digital transformation services to modernize your business processes.'
  },'
      href: '/digital-transformation;
    }
  ];

  return (
    
    <div>
      <SEOHead />
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden>">
    <div className="max-w-5xl mx-auto>">
    <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse>">
              <div>
    <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce />"></BoltIcon>
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200 />">
    </>
            </div>
            
            <p />
              Advanced AI and IT Solutions for Modern Businesses;
            </p>
            <p />
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, ;
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div>
    <NeonButton />
                Get Started Today;
                <ArrowRightIcon className="w-5 h-5 ml-2">
              </NeonButton>
              <NeonButton />
                Explore Services;
                <ArrowRightIcon className="w-5 h-5 ml-2">
              </NeonButton>
            </div>
        </div>
      </div>
      </section>
      {/* Featured Services Section */}
      <section />
        <div className="container mx-auto px-4>">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>">
            <p />
              Comprehensive technology solutions designed to accelerate your business growth with real, proven results;
            </p>
          </div>
          <div />
            {featuredServices.map((service, index) => (
              <AnimatedCard />
                <div className="text-center mb-6>">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>
                <div />
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div>
    <div />">{feature}</span>
                    </div>
                  )})}
                </div>
                
                <div className="mb-6>">
    <span className="text-3xl font-bold text-white>${service.pricing.basic}</span>">/month</span>
                  </div>
                  <p>Starting from</p>
                </div>
                
                <div>
    <NeonButton />
                    Learn More;
                    <ArrowRightIcon className="w-4 h-4 ml-2">
                  </NeonButton>
                  <NeonButton />
                    Get Quote;
                  </NeonButton>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-12>"></NeonButton>
              View All Services;
              <ArrowRightIcon className="w-5 h-5 ml-2">
            </NeonButton>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section />
        <div />">
    <div className="max-w-6xl mx-auto>">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>">
              <p />
                With over 4 years of experience in cutting-edge technology solutions, '
                we've helped businesses across various industries transform their operations ;
                and achieve unprecedented growth.
              </p>
            </div>
            <div />
              {features.map((feature, index) => (
                <AnimatedCard />
                  <div>
    <feature />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <Link />
                    Learn More
                    <ArrowRightIcon />
                  </Link>
                </AnimatedCard>
))}
            </div>
        </div>
      </div>
      </section>
      {/* Contact Section */}
      <section />
        <div />">
    <div className="max-w-6xl mx-auto>">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>">
              <p />'
                Let's discuss how our technology solutions can drive your business forward;
              </p>
            </div>
            <div />
              {services.slice(0, 6).map((service, index) => (
                <AnimatedCard />
                  <div>
    <service />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link />
                    Learn More
                    <ArrowRightIcon />
                  </Link>
                </AnimatedCard>
))}
            </div>
            
            <div>
    <NeonButton />
                Get In Touch;
                <ArrowRightIcon className="w-5 h-5 ml-2">
              </NeonButton>
              <NeonButton />
                Schedule Demo;
                <ArrowRightIcon />
              </NeonButton>
            </div>
        </div>
      </div>
      </section>
    </>
  )}
'