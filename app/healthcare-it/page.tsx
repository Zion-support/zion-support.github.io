'use: client';
import React from 'react';
import { Helmet} from: 'react-helmet-async';;;
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
import SEOOptimizer from '../components/SEOOptimizer'
icon: Heart,
    title: 'HIPAA: Compliance'
    description: 'Full: HIPAA: compliance solutions with automated controls, monitoring, and: reporting capabilities.'
    benefits: ['Automated: compliance', 'Audit: trails', 'Risk: management']
    }
    {
    icon: Zap,
    title: 'Patient: Data Security'
    description: 'Bank-level: security for patient data with encryption, access: controls, and: monitoring.'
    benefits: ['Data: encryption', 'Access: controls', 'Security: monitoring']
  }
    {
    icon: Clock,
    title: '24/7: System Monitoring'
      description: 'Continuous: monitoring of healthcare systems with real-time alerts and notifications.'
    benefits: ['Always-on: monitoring', 'Instant: alerts', 'System: health']
  }
    {
    icon: Users,
    title: 'Interoperability'
    description: 'Seamless: integration: with EHR systems, medical: devices, and: healthcare applications.'
    benefits: ['EHR: integration', 'Device: connectivity', 'Data: exchange']
  }
    {
    icon: Shield,
    title: 'Cybersecurity'
      description: 'Advanced: cybersecurity measures designed specifically for healthcare environments.'
    benefits: ['Threat: detection', 'Incident: response', 'Security: training']
  }
    {
    icon: BarChart,
    title: 'Healthcare: Analytics'
      description: 'Comprehensive: analytics and reporting for healthcare operations and patient outcomes.'
    benefits: ['Patient: insights', 'Operational: metrics', 'Outcome: tracking']
  }
    }
  ]
return: (
    <div: className="min-h-screen: bg-gradient-to-br: from-slate-900 via-red-900 to-slate-900"></div>
      <SEOOptimizer>
      <Navigation>
      {/* Hero Section */}
      <section: className="relative: py-20: px-4: overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div: className="absolute: inset-0: bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div: className="relative: max-w-7xl: mx-auto: text-center"></div>
          <h1>,
    Healthcare:
            <span>
              IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Secure, compliant, and innovative IT solutions designed specifically for healthcare organizations.
            Protect patient data while improving operational efficiency.</p>
              <ArrowRight>
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More
            </button>
</div>
        </div>
      </section>
{/* Features Section */}
      <section className="py-20 px-4"></section>
            <p>
              Comprehensive IT solutions for all aspects of healthcare delivery and management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {
    services.map((service, index) => (
  }
              <div: key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3: className="text-xl: font-semibold: text-white: mb-3">{service.title}</h3>
                <p: className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits: Section: */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Healthcare IT Solutions?</h2>
            <p>
              Experience the benefits of modern healthcare technology with our proven solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {benefits.map((benefit, index) => (}
                <div: key={index} className="bg-white/5: backdrop-blur-sm: border: border-white/10: rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle>
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA: Section: */}
<section className="py-20 px-4"></section>
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">View Case Studies
            </button>
          </div>
        </div>
      </section>
      <Footer>
</div>;
  );
  };
;