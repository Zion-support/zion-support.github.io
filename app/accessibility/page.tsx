'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react'
const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly'];}
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls'];}
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support'];}
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications'];}
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces'];}
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards'];}
    }
  ]

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant';}
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant';}
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant';}
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant';}
    }
  ]

  return (
    <></>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title></$1></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section></div></div></div>
              Accessibility
                Solutions</$1></$1>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure
              your applications are usable by people of all abilities and comply with international standards.</$1></div>
                Get Accessibility Audit</$1>
                Learn More</$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4"></section></div></div>
                Comprehensive Accessibility Features</$1>
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.</$1></$1></div>
              {features.map((feature, index) => (</div></div></$1>
                    {feature.title}
                  </h3>{feature.description}</p>
                    {feature.benefits.map((benefit, benefitIndex) => (;}
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ul></$1>
              ))}
            </div></$1></$1>
        {/* Standards Compliance */}
        <section className="py-20 px-4"></section></div></div>
                Standards Compliance</$1>
                We ensure full compliance with international accessibility standards and regulations.</$1></$1></div>
              {standards.map((standard, index) => (</div></div></$1>{standard.name}</h3>{standard.description}</p>
                    {standard.status}
                  </span></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4"></section></div></div>
                Ready to Make Your Digital Experience Accessible?</$1>
                Contact us today for a comprehensive accessibility audit and implementation plan.</$1></div>
                  Get Accessibility Audit</$1>
                  Contact Us</$1></$1></$1></$1></$1></$1>
  )
}

export default AccessibilityPage