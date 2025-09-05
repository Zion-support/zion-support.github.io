<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Users, Shield, CheckCircle, ArrowRight, Phone, Mail, BarChart3, Lock, Globe, Server, Database, Target } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Cloud, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  DollarSign,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> pr-11913

const transformationAreas = [
  {
<<<<<<< HEAD
    icon: RefreshCw,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline business processes',
    benefits: ['Reduced manual work', 'Improved accuracy', 'Faster processing', 'Cost savings']
  },
  {
    icon: Zap,
    title: 'Cloud Migration',
    description: 'Move your infrastructure to the cloud for better scalability and efficiency',
    benefits: ['Scalable infrastructure', 'Reduced costs', 'Better security', 'Global accessibility']
  },
  {
    icon: Users,
    title: 'Digital Workplace',
    description: 'Modernize your workplace with digital tools and collaboration platforms',
    benefits: ['Remote work capabilities', 'Improved collaboration', 'Enhanced productivity', 'Better communication']
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights for better decision making',
    benefits: ['Real-time insights', 'Predictive analytics', 'Better forecasting', 'Data-driven decisions']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Implement comprehensive security measures for the digital age',
    benefits: ['Enhanced security', 'Compliance assurance', 'Risk mitigation', 'Data protection']
  },
  {
    icon: Globe,
    title: 'Customer Experience',
    description: 'Improve customer interactions through digital channels and platforms',
    benefits: ['Better customer service', 'Omnichannel experience', 'Personalization', 'Increased satisfaction']
  }
];

const industries = [
  {
    name: 'Manufacturing',
    description: 'Industry 4.0 and smart manufacturing solutions',
    icon: '🏭',
    challenges: ['Legacy systems', 'Supply chain optimization', 'Quality control', 'Predictive maintenance']
  },
  {
    name: 'Healthcare',
    description: 'Digital health and patient care transformation',
    icon: '🏥',
    challenges: ['Patient data management', 'Telemedicine', 'Interoperability', 'Regulatory compliance']
  },
  {
    name: 'Financial Services',
    description: 'Fintech and digital banking solutions',
    icon: '🏦',
    challenges: ['Digital payments', 'Regulatory compliance', 'Customer experience', 'Risk management']
  },
  {
    name: 'Retail',
    description: 'E-commerce and omnichannel retail transformation',
    icon: '🛒',
    challenges: ['Online presence', 'Inventory management', 'Customer analytics', 'Supply chain']
  },
  {
    name: 'Education',
    description: 'EdTech and digital learning platforms',
    icon: '🎓',
    challenges: ['Remote learning', 'Student engagement', 'Assessment tools', 'Learning analytics']
  },
  {
    name: 'Government',
    description: 'Digital government and citizen services',
    icon: '🏛️',
    challenges: ['Citizen services', 'Data security', 'Legacy modernization', 'Transparency']
  }
];

const methodology = [
  {
    phase: 'Assessment',
    description: 'Comprehensive analysis of current state and digital readiness',
    duration: '2-4 weeks',
    activities: ['Current state audit', 'Gap analysis', 'Technology assessment', 'Stakeholder interviews']
  },
  {
    phase: 'Strategy',
    description: 'Develop a comprehensive digital transformation roadmap',
    duration: '2-3 weeks',
    activities: ['Vision definition', 'Roadmap creation', 'Resource planning', 'Success metrics']
  },
  {
    phase: 'Implementation',
    description: 'Execute the transformation plan with agile methodology',
    duration: '3-12 months',
    activities: ['Pilot programs', 'System integration', 'Change management', 'Training programs']
  },
  {
    phase: 'Optimization',
    description: 'Continuous improvement and optimization of digital solutions',
    duration: 'Ongoing',
    activities: ['Performance monitoring', 'User feedback', 'Process refinement', 'Technology updates']
  }
];

const benefits = [
  {
    metric: '40%',
    description: 'Average cost reduction through process automation',
    icon: Target
  },
  {
    metric: '60%',
    description: 'Improvement in operational efficiency',
    icon: Zap
  },
  {
    metric: '85%',
    description: 'Increase in customer satisfaction scores',
    icon: Users
  },
  {
    metric: '50%',
    description: 'Faster time-to-market for new products',
    icon: Globe
  }
];

const caseStudies = [
  {
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Legacy systems and manual processes limiting growth',
    solution: 'Complete digital transformation with IoT and AI integration',
    result: '35% cost reduction, 50% faster production, 99% quality improvement'
  },
  {
    company: 'Regional Healthcare System',
    industry: 'Healthcare',
    challenge: 'Fragmented systems and poor patient data management',
    solution: 'Unified digital platform with telemedicine capabilities',
    result: '40% improved patient outcomes, 60% reduced wait times'
  }
];

export default function DigitalTransformationPage() {
  return (
    <MainLayout
      title="Digital Transformation - Zion Tech Group"
      description="Complete digital transformation services for businesses. Modernize your operations, processes, and technology to stay competitive in the digital age."
      keywords="digital transformation, business modernization, process automation, cloud migration, digital workplace"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
=======
    title: 'Cloud Migration',
    description: 'Move your infrastructure to the cloud for better scalability and cost efficiency',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Cost Optimization'],
    pricing: 'Starting at $2,500/month',
    timeline: '3-12 weeks'
  },
  {
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency',
    icon: Zap,
    features: ['RPA Implementation', 'Workflow Automation', 'API Integration', 'Custom Solutions'],
    pricing: 'Starting at $1,800/month',
    timeline: '2-8 weeks'
  },
  {
    title: 'Digital Culture & Training',
    description: 'Build digital-first culture and train your team for the future',
    icon: Users,
    features: ['Change Management', 'Digital Training', 'Adoption Strategies'],
    pricing: 'Starting at $1,500/month',
    timeline: '2-8 weeks'
  }
];

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Streamline operations and reduce manual work by up to 60%',
    icon: TrendingUp,
    percentage: '60%'
  },
  {
    title: 'Cost Reduction',
    description: 'Lower operational costs through automation and optimization',
    icon: DollarSign,
    percentage: '40%'
  },
  {
    title: 'Better Security',
    description: 'Enhanced security posture with modern digital practices',
    icon: Shield,
    percentage: '95%'
  }
];

export default function DigitalTransformation() {
  return (
    <Layout>
      <Head>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services and solutions." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
>>>>>>> pr-11913
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Digital Transformation That{' '}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Drives Growth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business for the digital age. We help organizations modernize their 
                operations, processes, and technology to stay competitive and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Transformation
                </Link>
                <Link href="#areas" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Areas
                </Link>
              </div>
=======
                Digital Transformation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge technology and digital solutions.
              </p>
>>>>>>> pr-11913
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Transformation Areas Section */}
        <section id="areas" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Digital Transformation Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help organizations transform across all key areas of their business 
                to achieve digital excellence.
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Digital Transformation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end digital transformation services to modernize your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Pricing:</span>
                        <span className="font-medium">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Timeline:</span>
                        <span className="font-medium">{service.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformation Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the measurable impact of digital transformation on your business.
>>>>>>> pr-11913
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
>>>>>>> pr-11913
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-teal-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
=======
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">{benefit.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
>>>>>>> pr-11913
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have deep experience across multiple industries, understanding the unique 
                challenges and opportunities in each sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-teal-500 mr-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Transformation Methodology
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology that ensures successful digital transformation 
                with minimal disruption to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-teal-600 font-semibold">Duration: {phase.duration}</span>
                  </div>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-teal-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proven Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our digital transformation initiatives deliver measurable results that 
                drive business growth and competitive advantage.
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
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-4xl font-bold text-teal-600 mb-2">
                      {benefit.metric}
                    </div>
                    <div className="text-gray-600">{benefit.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped organizations transform their operations and achieve 
                remarkable results through digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <p className="text-teal-600 font-semibold">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                      <p className="text-green-600 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your digital transformation goals and create a roadmap for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-teal-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-teal-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Transformation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}