import * as React from 'react';
import Link from 'next/link';
import { 
  Building, 
  Shield, 
  Brain, 
  Database, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Activity,
  Lock,
  Cloud,
  Smartphone,
  BarChart3,
  Zap,
  Award,
  Clock,
  FileText,
  Scale
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'Digital Government Services',
    description: 'Comprehensive digital platforms for citizen services',
    icon: Globe,
    features: [
      'Online service portals',
      'Digital document management',
      'Citizen authentication',
      'Service request tracking'
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions for government data protection',
    icon: Shield,
    features: [
      'FISMA compliance',
      'Data encryption',
      'Access controls',
      'Security monitoring'
    ]
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning solutions for government data analysis',
    icon: Brain,
    features: [
      'Predictive analytics',
      'Fraud detection',
      'Resource optimization',
      'Policy impact analysis'
    ]
  },
  {
    title: 'Citizen Engagement Platform',
    description: 'Interactive platforms for citizen participation and feedback',
    icon: Users,
    features: [
      'Public consultation tools',
      'Feedback collection',
      'Community forums',
      'Transparency reporting'
    ]
  }
];

const challenges = [
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems and processes',
    icon: Building,
    solution: 'Comprehensive digital transformation strategies'
  },
  {
    title: 'Data Security',
    description: 'Protecting sensitive government and citizen data',
    icon: Lock,
    solution: 'Advanced security measures and compliance frameworks'
  },
  {
    title: 'Citizen Services',
    description: 'Delivering efficient and accessible public services',
    icon: Users,
    solution: 'User-centric digital service platforms'
  },
  {
    title: 'Transparency',
    description: 'Ensuring government transparency and accountability',
    icon: Scale,
    solution: 'Open data platforms and reporting systems'
  }
];

const benefits = [
  {
    title: 'Improved Efficiency',
    description: 'Streamlined operations and reduced processing times',
    icon: Zap
  },
  {
    title: 'Enhanced Security',
    description: 'Robust security measures for sensitive data',
    icon: Shield
  },
  {
    title: 'Better Citizen Experience',
    description: 'Accessible and user-friendly government services',
    icon: Users
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Comprehensive analytics for informed policy making',
    icon: BarChart3
  }
];

const technologies = [
  { name: 'Cloud', description: 'Secure Cloud Infrastructure' },
  { name: 'AI/ML', description: 'Artificial Intelligence' },
  { name: 'Blockchain', description: 'Secure Data Exchange' },
  { name: 'Mobile', description: 'Mobile Government Apps' },
  { name: 'Analytics', description: 'Government Analytics' },
  { name: 'Security', description: 'Cybersecurity Solutions' },
  { name: 'API', description: 'Open Government APIs' },
  { name: 'IoT', description: 'Smart City Technologies' }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'Analyze current systems and compliance requirements'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Create secure government solution architecture'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Deploy with rigorous security and compliance testing'
  },
  {
    step: '04',
    title: 'Monitoring & Support',
    description: 'Ongoing monitoring and compliance support'
  }
];

export default function GovernmentSolutionsPage() {
  return (
    <Layout 
      title="Government Solutions - Zion Tech Group" 
      description="Transform government services with our comprehensive technology solutions. Digital government platforms, cybersecurity, AI analytics, and citizen engagement."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-blue-400 mr-4" />
                <Scale className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Government{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform government services with cutting-edge technology solutions. 
                Enhance citizen experiences, ensure security, and improve transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="#solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our Government Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive technology solutions designed specifically for government agencies 
                to enhance citizen services and improve operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Government Challenges We Solve
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We understand the unique challenges facing government agencies 
                and provide targeted solutions to address them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{challenge.description}</p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <p className="text-blue-300 text-sm">
                        <strong>Our Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Benefits for Government Agencies
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience measurable improvements in service delivery, 
                security, and citizen satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Government Technologies
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with cutting-edge government technologies to ensure 
                security, compliance, and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Implementation Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful government 
                technology implementation with maximum security and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Government Agencies</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Government Services?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our government technology experts help you enhance citizen services 
                and improve operational efficiency with secure, compliant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Government Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}