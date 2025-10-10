'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
import SEOOptimizer from '../components/SEOOptimizer'
      icon: Heart,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated compliance', 'Audit trails', 'Risk management']
    },
    {
      icon: Zap,
      title: 'Patient Data Security',
      description: 'Bank-level security for patient data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring'];}
    },
    {
      icon: Clock,
      title: '24/7 System Monitoring',
      description: 'Continuous monitoring of healthcare systems with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'System health'];}
    },
    {
      icon: Users,
      title: 'Interoperability',
      description: 'Seamless integration with EHR systems, medical devices, and healthcare applications.',
      benefits: ['EHR integration', 'Device connectivity', 'Data exchange'];}
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity measures designed specifically for healthcare environments.',
      benefits: ['Threat detection', 'Incident response', 'Security training'];}
    },
    {
      icon: BarChart,
      title: 'Healthcare Analytics',
      description: 'Comprehensive analytics and reporting for healthcare operations and patient outcomes.',
      benefits: ['Patient insights', 'Operational metrics', 'Outcome tracking'];}
    }
  ]

  return (</div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section></div></div></div>
            Healthcare
              IT Solutions</$1></$1>
            Secure, compliant, and innovative IT solutions designed specifically for healthcare organizations.
            Protect patient data while improving operational efficiency.</$1></$1>
              Learn More</$1></$1></$1></$1>
{/* Features Section */}
      <section className="py-20 px-4"></section>
              Comprehensive IT solutions for all aspects of healthcare delivery and management.</$1></$1></div>
            {services.map((service, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>{service.icon}</div>{service.title}</h3>{service.description}</p></$1>
            ))}
          </div></$1></$1>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section></div></div>
              Why Choose Our Healthcare IT Solutions?</$1>
              Experience the benefits of modern healthcare technology with our proven solutions.</$1></$1></div>
            {benefits.map((benefit, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div></div></$1>{benefit}</h3></$1>
            ))}
          </div></$1></$1>
      {/* CTA Section */}
<section className="py-20 px-4"></section></$1>
              View Case Studies</$1></$1></$1></$1></$1>
  )
}