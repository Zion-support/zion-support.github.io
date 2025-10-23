'use client';
import React from 'react';
const AICybersecurityPage: React.FC = () => {
  const features = [
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
import {Lock, CheckCircle, Phone, Mail} from 'lucide-react';;
constAICybersecurityPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '9 9.9% accuracy']
   },
    {icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal do wntime']
   },
    {icon: Eye,
      title: 'Continuous Monitoring',
      description: '2 4/7 monitoring of your entire infrastructure with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['2 4/7 surveillance', 'Behavioral analysis', 'Anomaly detection']
   },
    {icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with threat intelligence, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence', 'Risk scoring', 'Compliance reports']
   },
    {icon: Zap,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning', 'Risk prioritization', 'Patch management']
   },
    {icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with identity verification, device trust, and least privilege access controls.',
      benefits: ['Identity verification', 'Device trust', 'Least privilege']
   }
  ];
  constpricingPlans= [
    {name: 'Essential',
      price: '$79 9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50endpoints',
        'Basic threat detection',
        'Email security',
        '2 4/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$1,99 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500endpoints',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$4,99 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Full security suite',
        'Dedicated SOC team',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'Penetration testing',
        'SLA guarantee'
      ],
      popular: false
   }
  ];
  conststats= [
    {number: '9 9.9%', label: 'Threat Detection'},
    {number: '2 4/7', label: 'Monitoring'},
    {number: '6 0%', label: 'Faster Response'},
    {number: '10 0%', label: 'Compliance'}
  ];
  constthreats= [
    {title: 'Ransomware Protection',
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
   },
    {title: 'Phishing Detection',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
   },
    {title: 'Insider Threat Detection',
      description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.',
      icon: Users
   },
    {title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
   }
  ];
  return (
  <><SEOOptimizertitle="AI Cybersecurity Solutions - ZionTechGroup"
        description="Advanced AI-powered cybersecurity with99.9% threat detection,24/7 monitoring, and automated response. Protect your business from evolvingcyberthreats."
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AIsecurity']}
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Cybersecurity Solutions
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">Protect your business with AI-powered security
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Our AI-powered cybersecurity platform provides advanced threat detection, 
                automated response, and24/7 monitoring to protect your business from evolving cyber threats.
            </p><divclassName="flex flex-colsm:flex-row gap-4 justify-center items-centermb-16"><ahref="tel:+13024640950"
                 className="cyber-button flexitems-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flexitems-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>GetSecurityAudit</spa></a></di>{/* Stats */}
            <divclassName="grid grid-cols-2 md:grid-cols-4 gap-8mb-16">{stats.map((statindex) => (
               <divkey={index}className="cyber-cardp-6text-center"><divclassName="text-3 xlmd:text-4 xl font-boldtext-cyan-400mb-2neon-text">{stat.number}
                  </di><divclassName="text-gray-300font-medium">{stat.label}</di></di>))}
            </di></di></sectio>{/* FeaturesSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Advanced Security Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitidx) => (
                   <likey={idx}className="flex items-center space-x-2 text-smtext-cyan-400"><CheckCircleclassName="w-4h-4" /><spa n>{benefit}</spa></l>))}
                </u></di>))}
          </di></sectio>{/* ThreatsSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Protect Against All Threats
          </h><divclassName="grid grid-cols-1md:grid-cols-2gap-8">{threats.map((threatindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><threat.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{threat.title}</h><pclassName="text-gray-300">{threat.description}</p></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Simple, Transparent Pricing
          </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
             <divkey={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">Most Popular
                    </spa></di>)}
                <divclassName="text-centermb-6"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-400mb-4">{plan.description}</p><divclassName="flexitems-baselinejustify-center"><spanclassName="text-4 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-400ml-1">{plan.period}</spa></di></di><ulclassName="space-y-3mb-8">{plan.features.map((featureidx) => (
                   <likey={idx}className="flexitems-centerspace-x-3"><CheckCircleclassName="w-5 h-5 text-cyan-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></l>))}
                </u><ahref="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular
                        ? 'bg-cyan-400text-slate-900 hover:bg-cyan-30 0'
                         : 'bg-slate-700text-whitehover:bg-slate-60 0'
                  }`}
                  >Get Protected
                </a></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to Secure Your Business?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join 3000+ companies already protected by our AI cybersecurity platform
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>GetSecurityAudit</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};
export default AICybersecurityPage;
