import React from 'react'

import { Lock, CheckCircle, Star, Shield, Database, Eye, Helmet, Check, Globe, AlertTriangle } from 'lucide-react';
const CybersecurityPage: React.FC = () => {
  const securityServices = [
import {Lock, CheckCircle, Star, Eye, Database, Shield, Helmet, Globe, Globe} from 'lucide-react';;;
constCybersecurityPage: React.FC= () =>{constsecurityServices= [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.',
      icon: '🛡️',
      price: 'Starting at $4,50 0/month',
      features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence', 'Incident investigation'],
      benefits: ['Prevent99% of cyber attacks', 'Reduce response time by90%', 'Minimize security incidents'],
      marketPrice: '$8,00 0-2 5,00 0/month',
      category: 'Threat Detection',
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML Security']
   },
    {title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      icon: '🔐',
      price: 'Starting at $6,50 0/month',
      features: ['Identity verification', 'Micro-segmentation', 'Least privilege access', 'Continuous monitoring', 'Policy enforcement'],
      benefits: ['Eliminate lateral movement', 'Reduce attack surface', 'Ensure compliance'],
      marketPrice: '$1 2,00 0-4 0,00 0/month',
      category: 'Zero Trust',
      technologies: ['Identity Management', 'Network Segmentation', 'Policy Engines', 'Access Controls']
   },
    {title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing to identify vulnerabilities and assess security posture.',
      icon: '🔍',
      price: 'Starting at $3,50 0/assessment',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security testing', 'Compliance testing'],
      benefits: ['Identify security gaps', 'Prevent data breaches', 'Ensure compliance'],
      marketPrice: '$6,00 0-2 0,00 0/assessment',
      category: 'Security Testing',
      technologies: ['OWASP', 'NIST', 'OSSTMM', 'Custom Tools', 'Automated Scanners']
   },
    {title: 'Security Operations Center (SOC)',
      description: '2 4/7 security monitoring and incident response with dedicated security analysts.',
      icon: '🏢',
      price: 'Starting at $8,00 0/month',
      features: ['2 4/7 monitoring', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
      benefits: ['Round-the-clock protection', 'Faster incident response', 'Proactive threat hunting'],
      marketPrice: '$1 5,00 0-5 0,00 0/month',
      category: 'SOC Services',
      technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Incident Management']
   },
    {title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security for AWS, Azure, and Google Cloud with compliance monitoring.',
      icon: '☁️',
      price: 'Starting at $3,20 0/month',
      features: ['Cloud security posture', 'Identity & access management', 'Data encryption', 'Compliance monitoring', 'Threat detection'],
      benefits: ['Secure cloud environments', 'Ensure compliance', 'Prevent data breaches'],
      marketPrice: '$6,00 0-2 0,00 0/month',
      category: 'Cloud Security',
      technologies: ['CSPM', 'CWPP', 'CASB', 'Cloud IAM', 'Encryption']
   },
    {title: 'Data Protection & Privacy',
      description: 'Comprehensive data protection solutions including encryption, DLP, and privacy compliance.',
      icon: '🔒',
      price: 'Starting at $2,80 0/month',
      features: ['Data encryption', 'Data loss prevention', 'Privacy compliance', 'Data class ificatio n', 'Access controls'],
      benefits: ['Protect sensitive data', 'Ensure privacy compliance', 'Prevent data leaks'],
      marketPrice: '$5,00 0-1 8,00 0/month',
      category: 'Data Protection',
      technologies: ['DLP', 'Encryption', 'GDPR Tools', 'Data Classification', 'Privacy Management']
   },
    {title: 'Network Security & Firewall Management',
      description: 'Advanced network security with next-generation firewalls and intrusion prevention systems.',
      icon: '🌐',
      price: 'Starting at $2,50 0/month',
      features: ['Next-gen firewalls', 'Intrusion prevention', 'Network segmentation', 'VPN management', 'Traffic analysis'],
      benefits: ['Block malicious traffic', 'Prevent network attacks', 'Improve network performance'],
      marketPrice: '$4,50 0-1 5,00 0/month',
      category: 'Network Security',
      technologies: ['NGFW', 'IPS', 'VPN', 'SD-WAN', 'Network Monitoring']
   },
    {title: 'Email Security & Phishing Protection',
      description: 'Advanced email security solutions to prevent phishing, malware, and email-based attacks.',
      icon: '📧',
      price: 'Starting at $1,80 0/month',
      features: ['Phishing protection', 'Malware scanning', 'Email encryption', 'Spam filtering', 'User training'],
      benefits: ['Prevent email attacks', 'Reduce phishing success', 'Protect sensitive communications'],
      marketPrice: '$3,50 0-1 2,00 0/month',
      category: 'Email Security',
      technologies: ['Email Gateways', 'Sandboxing', 'AI Detection', 'User Training', 'Encryption']
   },
    {title: 'Mobile Security Solutions',
      description: 'Comprehensive mobile device security with MDM, app security, and threat protection.',
      icon: '📱',
      price: 'Starting at $2,20 0/month',
      features: ['Mobile device management', 'App security', 'Threat protection', 'Compliance monitoring', 'Remote wipe'],
      benefits: ['Secure mobile devices', 'Prevent mobile threats', 'Ensure compliance'],
      marketPrice: '$4,00 0-1 5,00 0/month',
      category: 'Mobile Security',
      technologies: ['MDM', 'EMM', 'App Security', 'Threat Detection', 'Compliance Tools']
   },
    {title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      icon: '📋',
      price: 'Starting at $3,50 0/month',
      features: ['Compliance assessment', 'Risk management', 'Policy development', 'Audit support', 'Training programs'],
      benefits: ['Ensure compliance', 'Reduce regulatory risks', 'Avoid penalties'],
      marketPrice: '$6,50 0-2 5,00 0/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Risk Assessment', 'Compliance Tools', 'Audit Management']
   },
    {title: 'Security Awareness Training',
      description: 'Comprehensive security awareness training programs to educate employees about cyber threats.',
      icon: '🎓',
      price: 'Starting at $1,50 0/month',
      features: ['Interactive training modules', 'Phishing simulations', 'Security assessments', 'Progress tracking', 'Custom content'],
      benefits: ['Reduce human error', 'Improve security culture', 'Prevent social engineering'],
      marketPrice: '$2,50 0-8,00 0/month',
      category: 'Security Training',
      technologies: ['LMS', 'Phishing Simulators', 'Interactive Content', 'Assessment Tools']
   },
    {title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics services for security breaches and investigations.',
      icon: '🚨',
      price: 'Starting at $5,00 0/incident',
      features: ['Rapid response', 'Digital forensics', 'Evidence collection', 'Incident analysis', 'Recovery planning'],
      benefits: ['Minimize breach impact', 'Preserve evidence', 'Accelerate recovery'],
      marketPrice: '$1 0,00 0-5 0,00 0/incident',
      category: 'Incident Response',
      technologies: ['Forensic Tools', 'Incident Management', 'Evidence Collection', 'Recovery Tools']
   }
  ];
  constcategories= [...new Set(securityServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>Cybersecurity Services - ZionTechGroup</titl><metaname="description"content="Advanced cybersecurity services including threat detection, penetration testing, zero trust security, and comprehensive securitysolutions." /><metaname="keywords"content="cybersecurity services, threat detection, penetration testing, zero trust, security consulting, SOCservices" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-red-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-red-600to-orange-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Cybersecurity Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-red-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-red-100max-w-3xlmx-auto">Protect your business with advanced cybersecurity solutions and expert threat protection
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-red-600px-8 py-3 rounded-lg font-semiboldhover:bg-red-50transition-colors"></className="bg-white text-red-600px-8 py-3 rounded-lg font-semiboldhover:bg-red-50transition-colors">Get Security Assessment
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-red-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-red-600transition-colors">Schedule Consultation
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Cybersecurity Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Expert security professionals delivering comprehensive protection against evolving cyber threats
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-red-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-red-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">AdvancedProtection</h><pclassName="text-gray-600">Cutting-edge security technologies and AI-poweredthreatdetection</p></di><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><EyeclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">24/7Monitoring</h><pclassName="text-gray-600">Round-the-clock security monitoring andincidentresponse</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><LockclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ComplianceReady</h><pclassName="text-gray-600">Ensure compliance with GDPR, HIPAA, SOX, andotherregulations</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><AlertTriangleclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RapidResponse</h><pclassName="text-gray-600">Quick incident response and recovery to minimizebusinessimpact</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} services for comprehensive security protection
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{securityServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-red-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to50% vs market rates
                      </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-red-100text-red-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-red-100text-red-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-red-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-red-700transition-colors"></spa></className="w-full bg-red-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-red-700transition-colors">Get Security Consultation
                    </butto></di>))}
            </di></di></sectio>))}
        {/* Cybersecurity CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Cybersecurity Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive security solutions covering all aspects of cyber protection
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-red-50to-orange-100rounded-lg"><ShieldclassName="w-12h-1 2text-red-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ThreatDetection</h><pclassName="text-gray-600">AI-powered threat detection andresponsesystems</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-cyan-100rounded-lg"><LockclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ZeroTrust</h><pclassName="text-gray-600">Comprehensive zero trustsecurityarchitecture</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><EyeclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">SOCServices</h><pclassName="text-gray-600">2 4/7 security operationscentermonitoring</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><DatabaseclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">DataProtection</h><pclassName="text-gray-600">Comprehensive data protection andprivacysolutions</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><GlobeclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">CloudSecurity</h><pclassName="text-gray-600">Advanced cloud security andcompliancesolutions</p></di><divclassName="text-center p-6 bg-gradient-to-br from-indigo-50to-blue-100rounded-lg"><AlertTriangleclassName="w-12h-1 2text-indigo-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">IncidentResponse</h><pclassName="text-gray-600">Rapid incident response anddigitalforensics</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-red-600to-orange-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Secure Your Business?
          </h><spanclassName="text-xl mb-8text-red-100"></spa></className="text-xl mb-8text-red-100">Contact our cybersecurity experts for a free security assessment and custom protection strategy
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-red-600px-8 py-3 rounded-lg font-semiboldhover:bg-red-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-red-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="mt-8 text-smtext-red-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default CybersecurityPage;
