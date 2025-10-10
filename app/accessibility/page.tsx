'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';
const AccessibilityPage: React.FC = () => {
    const features = [
    {
      icon: Eye,;
      title: 'Visual Accessibility',;
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',;
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']
  }
    },;
    {
    icon: MousePointer,;
      title: 'Motor Accessibility',;
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',;
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
  }
    },;
    {
    icon: Volume2,;
      title: 'Audio Accessibility',;
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',;
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
  }
    },;
    {
    icon: Shield,;
      title: 'Security & Privacy',;
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',;
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications']
  }
    },;
    {
    icon: Users,;
      title: 'Inclusive Design',;
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',;
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
  }
    },;
    {
    icon: Globe,;
      title: 'Global Standards',;
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',;
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
  }
    }
  ];
const standards = [
    {
    name: 'WCAG 2.1 AA',;
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',;
      status: 'Fully Compliant'
  }
    },;
    {
    name: 'Section 508',;
      description: 'US federal accessibility standards for electronic and information technology',;
      status: 'Fully Compliant'
  }
    },;
    {
    name: 'ADA',;
      description: 'Americans with Disabilities Act compliance for digital accessibility',;
      status: 'Fully Compliant'
  }
    },;
    {
    name: 'EN 301 549',;
      description: 'European accessibility standard for ICT products and services',;
      status: 'Fully Compliant'
  }
    }
  ];
return (
    <></>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta>
        <meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>
              Accessibility;
              <span>
                Solutions;
              </span>
            </h1>
            <p>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure;
              your applications are usable by people of all abilities and comply with international standards.;
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>
                Get Accessibility Audit
              </button>
              <button>
                Learn More,
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>
                Comprehensive Accessibility Features;
              </h2>
              <p>
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {
    features.map((feature, index) => (;
                <div
  }
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300 group",
                ></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature>
                  </div>
                  <h3>

                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul>
                    {
    feature.benefits.map((benefit, benefitIndex) => (
  }
                      <li>
                        <CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Standards Compliance */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>
                Standards Compliance;
              </h2>
              <p>
                We ensure full compliance with international accessibility standards and regulations.;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {
    standards.map((standard, index) => (;
                <div
  }
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center";
                ></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                    <CheckCircle>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{standard.description}</p>
                  <span>

                    {standard.status}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>
                Ready to Make Your Digital Experience Accessible?;
              </h2>
              <p>
                Contact us today for a comprehensive accessibility audit and implementation plan.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button>
                  Get Accessibility Audit;
                </button>
                <button>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ),
}
export default AccessibilityPage;

