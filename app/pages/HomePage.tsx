import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  ArrowRightIcon,
ShieldCheckIcon
  CloudIcon,
CpuChipIcon
  ChartBarIcon,
GlobeAltIcon
  PhoneIcon,
EnvelopeIcon
  MapPinIcon,
RocketLaunchIcon
  SparklesIcon,
BoltIcon;'}
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { services } from '../data/servicesData';
    "@context": "https: //schema.org",
    "@type": "WebSite"
    "name": "Zion Tech Group"
    "url": "https: //ziontechgroup.com",
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation."
    "potentialAction": {
      "@type": "SearchAction"
      "target": "https: //ziontechgroup.com/search?q={search_term_string}"
      "query-input": "required name=search_term_string"
    }
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business operations.',
      href: '',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      href: '',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      href: '',
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',;
      href: '';,
                we've helped businesses across various industries transform their operations ;
                and achieve unprecedented growth.
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8" />,
              {features.map((feature, index) => (
                <AnimatedCard key={index} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-800/70 transition-all duration-300" />,
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4" /></div>
                    <feature.icon className="w-6 h-6 text-white" / /></feature>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <Link,
to={feature.href}
                    className="text-blue-400 hover: text-blue-300 font-semibold flex items-center",
                   /></Link>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" / /></ArrowRightIcon>
                  </Link>
                </AnimatedCard>
))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 relative" /></section>
        <div className="absolute inset-0 bg-slate-900 />"
        <div className="container mx-auto px-4 relative z-10" /></div>
          <div className="max-w-6 xl mx-auto>"
            <div className="text-center mb-16" /></div>
              <h2 className="text-5 xl md: text-6 xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent>",
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed" /></p>
                Let's discuss how our technology solutions can drive your business forward;
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8" />,
              {services.slice(0, 6).map((service, index) => (
                <AnimatedCard key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover: bg-white/20 transition-all duration-300" />,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4" /></div>
                    <service.icon className="w-6 h-6 text-white" / /></service>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link,
to={service.href}
                    className="text-blue-400 hover: text-blue-300 font-semibold flex items-center",
                   /></Link>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" / /></ArrowRightIcon>
                  </Link>
                </AnimatedCard>
))}
            </div>
            <div className="flex flex-col sm: flex-row gap-6 justify-center" />,
              <NeonButton to="/contact" variant="primary" size="lg" /></NeonButton>
                Get In Touch;
                <ArrowRightIcon className="w-5 h-5 ml-2 />"
              </NeonButton>
              <NeonButton to="/demo" variant="secondary" size="lg" /></NeonButton>
                Schedule Demo;
                <ArrowRightIcon className="w-5 h-5 ml-2" / /></ArrowRightIcon>
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )}
