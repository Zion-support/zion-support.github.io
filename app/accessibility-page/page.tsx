'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight, Target, BarChart, Zap} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive solutions for users with visual impairments and color vision deficiencies.',
      benefits: ['Screen reader compatibility', 'High contrast modes', 'Color blind support', 'Text scaling']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Enhanced audio experiences for users with hearing impairments.',
      benefits: ['Closed captions', 'Sign language support', 'Audio descriptions', 'Visual alerts']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor disabilities and mobility challenges.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch access', 'Gesture recognition']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features designed to support users with cognitive and learning disabilities.',
      benefits: ['Simplified interfaces', 'Clear instructions', 'Consistent navigation', 'Error prevention']
    },
    {
      icon: Shield,
      title: 'Compliance & Standards',
      description: 'Full compliance with WCAG 2.1 AA standards and accessibility regulations.',
      benefits: ['WCAG 2.1 AA compliance', 'Section 508 compliance', 'ADA compliance', 'International standards']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, efficient accessibility features that don\'t compromise performance.',
      benefits: ['Optimized loading', 'Efficient rendering', 'Minimal overhead', 'Fast interactions']
    }
  ];

  const services = [
    {
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products for accessibility compliance.',
      icon: Target,
      benefits: ['Automated testing', 'Manual evaluation', 'User testing', 'Compliance reporting']
    },
    {
      title: 'Implementation Services',
      description: 'Professional implementation of accessibility features and improvements.',
      icon: BarChart,
      benefits: ['Code implementation', 'Design updates', 'Testing & validation', 'Training & support']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring and maintenance of accessibility features.',
      icon: CheckCircle,
      benefits: ['Regular audits', 'Feature updates', 'Performance monitoring', 'Compliance tracking']
    },
    {
      title: 'Training & Education',
      description: 'Comprehensive training for your team on accessibility best practices.',
      icon: Brain,
      benefits: ['Team training', 'Best practices', 'Tool training', 'Compliance education']
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    {
      title: 'Legal Compliance',
      description: 'Meet accessibility requirements and avoid legal issues.',
      icon: Shield;
    },
    {
      title: 'Broader Reach',
      description: 'Access your content and services to a wider audience.',
      icon: Target;
    },
    {
      title: 'Better UX',
      description: 'Improved user experience for all users, not just those with disabilities.',
      icon: CheckCircle;
    },
    {
      title: 'SEO Benefits',
      description: 'Accessibility improvements often lead to better search engine rankings.',
      icon: BarChart;
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." /></meta>
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, ADA compliance, web accessibility" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Accessibility</span> First;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our solutions work for all users.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p>
                    {feature.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Our Services
;
                Comprehensive accessibility services to make your digital products inclusive;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" /></service>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p>
                    {service.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Compliance Standards;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We ensure your products meet all major accessibility standards and regulations;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"></div>
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" /></Shield>
                  <h3 className="text-lg font-semibold text-white"></h3>
                    {standard}
                  </h3>
                </div>

          </div>
        </section>

        {/* Benefits Section */}

            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Why Accessibility Matters;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Beyond compliance, accessibility brings real business value;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /></benefit>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300"></p>
                    {benefit.description}

              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Make Your Products Accessible?
            </h2>
            <p className="text-xl text-gray-100 mb-8"></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                Start Your Accessibility Journey;
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Schedule Consultation;
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Footer>
    </div>
  );
};
