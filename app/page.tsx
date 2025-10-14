import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon'
} from '@heroicons/react/24/outline';
import FuturisticBackground from './components/FuturisticBackground;

const HomePage: React.FC = () => {
  const structuredData = {
    ';@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ChartBarIcon,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {'
          title: 'AI Solutions','
          description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.'
  },
      icon: CpuChipIcon,'
      href: '/ai-solutions'
    },
    {'
          title: 'Cybersecurity','
          description: 'Comprehensive security solutions to protect your business from threats and vulnerabilities.'
  },
      icon: ShieldCheckIcon,'
      href: '/cybersecurity'
    },
    {'
          title: 'Cloud Infrastructure','
          description: 'Scalable cloud solutions for modern businesses with high availability and performance.'
  },
      icon: CloudIcon,'
      href: '/cloud-infrastructure'
    },
    {'
          title: 'Micro SaaS Solutions','
          description: 'Custom micro SaaS applications tailored to your specific business needs.'
  },
      icon: GlobeAltIcon,'
      href: '/micro-saas-solutions'
    },
    {'
          title: '5G Solutions','
          description: 'Next-generation 5G technology implementation for ultra-fast connectivity.'
  },
      icon: SignalIcon,'
      href: '/5g-solutions'
    },
    {'
          title: 'IT Services','
          description: 'Complete IT infrastructure management and support services.'
  },
      icon: BriefcaseIcon,'
      href: '/it-solutions'
    }
  ];

  return (
    
    <PerformanceOptimizer />
      <EnhancedAccessibility />
        <div>
    <EnhancedSEO />
          <StructuredData />
          <StructuredData />
      {/* Main Content */}
      <main />
        {/* Hero Section */}
        <section />
        {/* Animated Background Elements */}
        <div>
    <div />
          <div />
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div />'
        <div />'
        <div />'
        <div>
    <div />
          <div>
    <h1>Zion Tech Group
            </h1></h1>
            <p />
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p />
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div>
    <Link />
                Get Started Today
                <ArrowRightIcon />
              </Link>
              <Link />
                Explore Services
                <ArrowRightIcon />
              </Link>
            </div>
        </div>
      </div>
      </section>

      {/* Services Section */}
      <section>
        <div>
    <div />
            <h2 />
              Our Core Services
            </h2>
            <p />
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div />
            {services.map((service, index) => (
              <div>
    <div />
                  <service />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p />
                  {service.description}
                </p>
                <Link />
                  Learn More <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div>
    <div />
            <h2 />
              Trusted by Businesses Worldwide
            </h2>
            <p />
              Our proven track record speaks for itself
            </p>
          </div>
          
          <div />
            {stats.map((stat, index) => (
              <div>
    <div />
                  {stat.number}
                </div>
                <div />
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Transform Your Business?
          </h2>
          <p />'
            Let's discuss how our technology solutions can drive your business forward
          </p>
          <div>
    <Link />
              Get Started Today
            </Link>
            <Link />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )};
};

export default HomePage;