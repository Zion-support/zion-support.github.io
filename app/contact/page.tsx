import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import EnhancedContactForm from '../../src/components/EnhancedContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  Building,
  Globe,
  Shield,
  Brain,
  Zap,
  Cloud,
  Database,
  Code,
  BarChart,
  Users,
  Award,
  Target,
  Star,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Cpu,
  Database as DatabaseIcon,
  Smartphone,
  Lock
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (302) 464-0950",
      description: "Call us anytime",
      action: "tel:+13024640950"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us an email",
      action: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008",
      description: "Middletown, DE 19709",
      action: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      description: "We're here to help",
      action: null
    }
  ];

  const offices = [
    {
      city: 'Middletown, DE',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      timezone: 'Eastern Time'
    },
    {
      city: 'San Francisco, CA',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      timezone: 'Pacific Time'
    },
    {
      city: 'London, UK',
      address: '456 Innovation Lane, London EC1A 4HD',
      phone: '+44 20 7946 0958',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      timezone: 'Greenwich Mean Time'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprise organizations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <SEOOptimizer
        title="Contact Zion Tech Group - AI & IT Solutions"
        description="Get in touch with our AI and IT experts. Contact us for consultations, project inquiries, and enterprise solutions. Call (302) 464-0950 or email kleber@ziontechgroup.com"
        keywords="contact us, AI consulting, IT services, enterprise solutions, consultation"
      >{/* Hero Section */}</SEOOptimizer>
      </SEOOptimizer><section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Get In Touch</span><h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">Let's Build the</h1>
              <span className="block holographic-text cyber-text">Future Together</span><p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">Ready to transform your business with AI and cutting-edge technology?</p>
              Our experts are here to help you achieve your goals.</p>
            </p>

            <div className="flex flex-wrap justify-center gap-6"></div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{contactMethods.map((method, index) => (</div>
              <div key={index} className="quantum-card p-6 text-center space-y-4"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
                  <method.icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{method.title}</h3>
                <div className="space-y-2"></div>
                  <div className="text-cyan-400 font-medium">{method.value}</div><div className="text-gray-300 text-sm">{method.description}</div>
                  {method.action && (
                    <a
                      href={method.action}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 mr-1" >{method.action.startsWith('tel:') ? 'Call Now' :</ArrowRight>
                       method.action.startsWith('mailto:') ? 'Send Email' : 'View on Map'}</ArrowRight>
                    </ArrowRight>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
        <div className="container mx-auto px-4"></section>
          <EnhancedContactForm />
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Global Offices</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We're here to serve you wherever you are in the world</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{offices.map((office, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Mail className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{office.hours}</span><div className="text-cyan-400 text-sm font-medium">{office.timezone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our services and process</p>
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;