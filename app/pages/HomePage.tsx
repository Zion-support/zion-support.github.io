import React from 'react';
';import {Link} from'react-router-dom';
;import SEOHead from ../components/SEOHead';
';import {}
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
    SparklesIcon,
    BoltIcon
} from'@heroicons/react/24/outline';'import FuturisticBackground from '../components/FuturisticBackground';
'import NeonButton from'../components/NeonButton';'import AnimatedCard from '../components/AnimatedCard';
import {services} from '../data/servicesData';export default function HomePage() {return null;}
  const structuredData={};
    "@context": "https://schema.org",""    "@type": "Organization",""    "name": "Zion Tech Group",""    "description": "Advanced AI and IT Solutions",""    "url": "https://ziontechgroup.com",""    "logo": "https://ziontechgroup.com/logo.png",""    "contactPoint": {}""      "@type": "ContactPoint",""      "telephone": "+1-555-0123",""      "contactType": "customer service"
"    }
  };
  return <React.Fragment>
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions""        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."""        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"""        structuredData="{structuredData}"
"      />
      
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">"
"        </section>
        </section>
        </section>
        </section>
        <div className="relative z-10 container mx-auto px-4 text-center">"
"        </div>
          <div className="max-w-5xl mx-auto">"
"        </div>
            {/* Animated Title */}
            <div className="mb-8">"
"        </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">"
"        </h1>
        </h1>
                Zion Tech Group
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">"
"        </div>
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />"
"                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100" />"
"                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200" />"
"              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">"
"        </p>
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">"
"        </p>
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">"
"        </div>
              <NeonButton to="/contact" variant="primary" size="lg">"
"        </NeonButton>
        </NeonButton>
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />"
"              </NeonButton>
              <NeonButton to="/services" variant="secondary" size="lg">"
"        </NeonButton>
        </NeonButton>
                Explore Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />"
"              </NeonButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 relative">"
"        </section>
        </section>
        </section>
        </section>
        <div className="container mx-auto px-4">"
"        </div>
          <div className="text-center mb-16">"
"        </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">"
"        </h2>
        </h2>
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">"
"        </p>
              Comprehensive technology solutions designed to accelerate your business growth with real, proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">"
"        </div>
            {featuredServices.map((service, index) => ()}
              <AnimatedCard key={service.id} glowColor={service.glowColor} className="group">"
"        </AnimatedCard>
        </AnimatedCard>
                <div className="text-center mb-6">"
"        </div>
                  <div className="text-6xl mb-4">{service.icon}</div>"
"                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>"
"                  <p className="text-gray-300 mb-4 leading-relaxed">{service.shortDescription}</p>"
"                </div>
                
                <div className="space-y-3 mb-6">"
"        </div>
                    {service.features.slice(0, 4).map((feature, featureIndex) => ()}
                    <div key={featureIndex} className="flex items-center text-gray-300">"
"        </div>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"></div>"
"                      <span className="text-sm">{feature}</span>"
"                    </div>
                  ))}
                </div>
                
                <div className="mb-6">"
"        </div>
                  <div className="text-center">"
"        </div>
                    <span className="text-3xl font-bold text-white">${service.pricing.basic}</span>"
"                    <span className="text-gray-400 text-sm ml-2">/month</span>"
"                  </div>
                  <p className="text-gray-400 text-sm text-center mt-1">Starting from</p>"
"                </div>
                
                <div className="flex flex-col gap-3">"
"        </div>
                  <NeonButton to={service.href} variant="primary" size="sm">"
"        </NeonButton>
        </NeonButton>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />"
"                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="sm">"
"        </NeonButton>
        </NeonButton>
                    Get Quote
                  </NeonButton>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-12">"
"        </div>
            <NeonButton to="/services" variant="primary" size="lg">"
"        </NeonButton>
        </NeonButton>
              View All Services
              <ArrowRightIcon className="w-5 h-5 ml-2" />"
"            </NeonButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">"
"        </section>
        </section>
        </section>
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900"/50 to-slate-900"></div>""        <div className="container mx-auto px-4 relative z-10">""        </div>
          <div className="max-w-6xl mx-auto">""        </div>
            <div className="text-center mb-16">""        </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""        </h2>
        </h2>
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">""        </p>
                With over 4 years of experience in cutting-edge technology solutions, "''                we've helped businesses across various industries transform their operations"'                and achieve unprecedented growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">""        </div>
              <AnimatedCard glowColor="purple" className="text-center">""        </AnimatedCard>
        </AnimatedCard>
                <div className="text-6xl font-bold text-purple-400 mb-4 animate-pulse">50+</div>""                <div className="text-xl text-gray-300 mb-2">Projects Completed</div>""                <div className="text-gray-400 text-sm">Successfully delivered across various industries</div>""              </AnimatedCard>
              <AnimatedCard glowColor="cyan" className="text-center">""        </AnimatedCard>
        </AnimatedCard>
                <div className="text-6xl font-bold text-cyan-400 mb-4 animate-pulse">25+</div>""                <div className="text-xl text-gray-300 mb-2">Happy Clients</div>""                <div className="text-gray-400 text-sm">Satisfied customers worldwide</div>""              </AnimatedCard>
              <AnimatedCard glowColor="green" className="text-center">""        </AnimatedCard>
        </AnimatedCard>
                <div className="text-6xl font-bold text-green-400 mb-4 animate-pulse">99%</div>""                <div className="text-xl text-gray-300 mb-2">Success Rate</div>""                <div className="text-gray-400 text-sm">Projects delivered on time and within budget</div>""              </AnimatedCard>
            </div>
            
            <div className="text-center">""        </div>
              <NeonButton to="/about" variant="primary" size="lg">""        </NeonButton>
        </NeonButton>
                Learn More About Us
                <ArrowRightIcon className="w-5 h-5 ml-2" />""              </NeonButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">""        </section>
        </section>
        </section>
        </section>
        <div className="absolute inset-0 bg-slate-900"></div>""        <div className="container mx-auto px-4 relative z-10">""        </div>
          <div className="max-w-6xl mx-auto">""        </div>
            <div className="text-center mb-16">""        </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""        </h2>
        </h2>
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">""''                Let's discuss how our technology solutions can drive your business forward"'              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">"
"        </div>
              <AnimatedCard glowColor="purple" className="text-center">"
"        </AnimatedCard>
        </AnimatedCard>
                <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />"
"                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>"
"                <p className="text-gray-300 text-lg">+1-302-464-0950</p>"
"                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>"
"              </AnimatedCard>
              <AnimatedCard glowColor="cyan" className="text-center">"
"        </AnimatedCard>
        </AnimatedCard>
                <EnvelopeIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
"                <h3 className="text-xl font-bold text-white mb-2">Email</h3>"
"                <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>"
"                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>"
"              </AnimatedCard>
              <AnimatedCard glowColor="green" className="text-center">"
"        </AnimatedCard>
        </AnimatedCard>
                <MapPinIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />"
"                <h3 className="text-xl font-bold text-white mb-2">Address</h3>"
"                <p className="text-gray-300 text-lg">Middletown, DE</p>"
"                <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008</p>"
"              </AnimatedCard>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">"
"        </div>
              <NeonButton to="/contact" variant="primary" size="lg">"
"        </NeonButton>
        </NeonButton>
                Get In Touch
                <ArrowRightIcon className="w-5 h-5 ml-2" />"
"              </NeonButton>
              <NeonButton to="/demo" variant="secondary" size="lg">"
"        </NeonButton>
        </NeonButton>
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />"
"              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )}
