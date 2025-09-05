import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Star,
  Phone,
  Mail,
  Calendar,
  FileText,
  BarChart3,
  Lock,
  Activity,
  Stethoscope,
  Microscope,
  Pill
} from 'lucide-react';

const healthcareSolutions = [
  {
    title: 'AI-Powered Medical Diagnosis',
    description: 'Advanced machine learning models for accurate disease detection and diagnosis support',
    icon: Brain,
    features: [
      'Medical image analysis',
      'Symptom pattern recognition',
      'Diagnostic accuracy improvement',
      'Real-time decision support'
    ],
    benefits: [
      '95% diagnostic accuracy',
      '50% faster diagnosis',
      'Reduced misdiagnosis rates',
      'Improved patient outcomes'
    ]
  },
  {
    title: 'Electronic Health Records (EHR)',
    description: 'Secure, interoperable EHR systems for comprehensive patient data management',
    icon: FileText,
    features: [
      'Patient data integration',
      'Interoperability standards',
      'Real-time data access',
      'Automated documentation'
    ],
    benefits: [
      'Streamlined workflows',
      'Better care coordination',
      'Reduced administrative burden',
      'Improved data accuracy'
    ]
  },
  {
    title: 'Telemedicine Platform',
    description: 'Comprehensive telehealth solutions for remote patient care and monitoring',
    icon: Users,
    features: [
      'Video consultations',
      'Remote monitoring',
      'Patient portal',
      'Mobile accessibility'
    ],
    benefits: [
      'Increased access to care',
      'Reduced travel costs',
      'Better patient engagement',
      'Improved care continuity'
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'Data-driven insights for population health management and risk assessment',
    icon: BarChart3,
    features: [
      'Population health analytics',
      'Risk stratification',
      'Predictive modeling',
      'Outcome forecasting'
    ],
    benefits: [
      'Proactive care management',
      'Reduced readmissions',
      'Cost optimization',
      'Better resource allocation'
    ]
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'HIPAA-compliant security measures to protect sensitive patient data',
    icon: Shield,
    features: [
      'Data encryption',
      'Access controls',
      'Audit trails',
      'Compliance monitoring'
    ],
    benefits: [
      'HIPAA compliance',
      'Data breach prevention',
      'Patient privacy protection',
      'Regulatory compliance'
    ]
  },
  {
    title: 'Clinical Decision Support',
    description: 'AI-powered tools to assist healthcare providers in making informed decisions',
    icon: Stethoscope,
    features: [
      'Evidence-based recommendations',
      'Drug interaction checking',
      'Treatment protocols',
      'Clinical guidelines'
    ],
    benefits: [
      'Improved clinical outcomes',
      'Reduced medical errors',
      'Standardized care',
      'Enhanced patient safety'
    ]
  }
];

const complianceStandards = [
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    icon: Lock,
    requirements: [
      'Patient data encryption',
      'Access controls and audit logs',
      'Business Associate Agreements',
      'Risk assessments and mitigation'
    ]
  },
  {
    name: 'HITECH',
    description: 'Health Information Technology for Economic and Clinical Health',
    icon: Shield,
    requirements: [
      'Enhanced security measures',
      'Breach notification procedures',
      'Electronic health record standards',
      'Meaningful use compliance'
    ]
  },
  {
    name: 'SOC 2',
    description: 'Service Organization Control 2',
    icon: Award,
    requirements: [
      'Security controls',
      'Availability monitoring',
      'Processing integrity',
      'Confidentiality protection'
    ]
  },
  {
    name: 'FDA 21 CFR Part 11',
    description: 'Electronic Records and Signatures',
    icon: FileText,
    requirements: [
      'Electronic signature validation',
      'Audit trail maintenance',
      'System validation',
      'Data integrity controls'
    ]
  }
];

const caseStudies = [
  {
    title: 'AI-Powered Radiology Diagnosis',
    client: 'Regional Medical Center',
    challenge: 'High volume of radiology images requiring expert analysis',
    solution: 'Implemented AI-powered image analysis system',
    results: [
      '40% faster image analysis',
      '95% accuracy in detecting abnormalities',
      'Reduced radiologist workload by 30%',
      'Improved patient care quality'
    ],
    technologies: ['AI/ML', 'Computer Vision', 'Cloud Computing']
  },
  {
    title: 'Telemedicine Platform Implementation',
    client: 'Rural Healthcare Network',
    challenge: 'Limited access to specialists in remote areas',
    solution: 'Deployed comprehensive telemedicine platform',
    results: [
      '300% increase in specialist consultations',
      '50% reduction in patient travel time',
      'Improved patient satisfaction scores',
      'Cost savings of $2M annually'
    ],
    technologies: ['Video Conferencing', 'Mobile Apps', 'Cloud Infrastructure']
  },
  {
    title: 'EHR Integration and Migration',
    client: 'Multi-location Hospital System',
    challenge: 'Fragmented patient data across multiple systems',
    solution: 'Unified EHR system with seamless integration',
    results: [
      '100% data integration achieved',
      '60% reduction in data entry time',
      'Improved care coordination',
      'Enhanced patient safety'
    ],
    technologies: ['EHR Systems', 'API Integration', 'Data Migration']
  }
];

const stats = [
  { number: '500+', label: 'Healthcare Organizations Served' },
  { number: '2M+', label: 'Patient Records Secured' },
  { number: '99.9%', label: 'System Uptime' },
  { number: '100%', label: 'HIPAA Compliance' }
];

export default function HealthcarePage() {
  return (
    <>
      <Head>
        <title>Healthcare Solutions - Zion Tech Group | Medical Technology & AI</title>
        <meta name="description" content="Transform healthcare with our AI-powered medical solutions, EHR systems, telemedicine platforms, and HIPAA-compliant technology services." />
        <meta name="keywords" content="healthcare technology, medical AI, EHR systems, telemedicine, HIPAA compliance, healthcare software" />
        <meta property="og:title" content="Healthcare Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered healthcare technology solutions for modern medical practices." />
        <meta property="og:url" content="https://ziontechgroup.com/industries/healthcare" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare Technology Solutions
                <span className="block text-blue-400">Transforming Medical Care with AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Empower healthcare providers with cutting-edge AI, secure EHR systems, telemedicine platforms, and HIPAA-compliant solutions that improve patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Healthcare Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance & Security</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure all our healthcare solutions meet the highest compliance and security standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{standard.name}</h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{standard.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {standard.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from healthcare organizations we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Client:</h4>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get Healthcare Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}