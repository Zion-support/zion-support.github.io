import * as React from 'react';
import Link from 'next/link';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Code,
  GitBranch,
  Container,
  Monitor,
  Settings,
  Users,
  Clock,
  Award
} from 'lucide-react';
import Layout from '../../components/Layout';

const services = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your applications and infrastructure to the cloud',
    icon: Cloud,
    features: [
      'Assessment and planning',
      'Zero-downtime migration',
      'Cost optimization',
      'Security compliance'
    ]
  },
  {
    title: 'DevOps Implementation',
    description: 'Implement modern DevOps practices for faster, more reliable deployments',
    icon: GitBranch,
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Automated testing',
      'Monitoring and alerting'
    ]
  },
  {
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications at scale',
    icon: Container,
    features: [
      'Kubernetes deployment',
      'Docker optimization',
      'Service mesh implementation',
      'Auto-scaling configuration'
    ]
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'Comprehensive monitoring and observability for your cloud infrastructure',
    icon: Monitor,
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Alert management',
      'Capacity planning'
    ]
  }
];

const technologies = [
  { name: 'AWS', description: 'Amazon Web Services' },
  { name: 'Azure', description: 'Microsoft Azure' },
  { name: 'Google Cloud', description: 'Google Cloud Platform' },
  { name: 'Kubernetes', description: 'Container Orchestration' },
  { name: 'Docker', description: 'Containerization' },
  { name: 'Terraform', description: 'Infrastructure as Code' },
  { name: 'Jenkins', description: 'CI/CD Automation' },
  { name: 'Prometheus', description: 'Monitoring & Alerting' }
];

const benefits = [
  {
    title: 'Faster Deployments',
    description: 'Reduce deployment time from hours to minutes with automated CI/CD pipelines',
    icon: Zap
  },
  {
    title: 'Improved Reliability',
    description: 'Achieve 99.9% uptime with robust monitoring and automated failover systems',
    icon: Shield
  },
  {
    title: 'Cost Optimization',
    description: 'Reduce infrastructure costs by up to 40% with right-sizing and automation',
    icon: Award
  },
  {
    title: 'Enhanced Security',
    description: 'Implement security best practices and compliance standards across your infrastructure',
    icon: Shield
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'Analyze your current infrastructure and create a comprehensive migration strategy'
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Design cloud-native architecture and select optimal technologies for your needs'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the migration with minimal downtime and maximum security'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Monitor performance and continuously optimize for cost and efficiency'
  }
];

export default function CloudDevOpsPage() {
  return (
    <Layout 
      title="Cloud & DevOps Services - Zion Tech Group" 
      description="Expert cloud migration, DevOps implementation, and infrastructure management services. Transform your operations with modern cloud technologies."
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
                <Cloud className="w-16 h-16 text-blue-400 mr-4" />
                <Server className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DevOps Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your infrastructure with modern cloud technologies and DevOps practices. 
                Achieve faster deployments, improved reliability, and cost optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive cloud and DevOps solutions designed to modernize your infrastructure 
                and accelerate your development lifecycle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
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
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
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
                Technologies We Work With
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We leverage the latest cloud and DevOps technologies to deliver 
                robust, scalable solutions for your business.
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
                Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of modern cloud infrastructure and DevOps practices 
                with our expert guidance and support.
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

        {/* Process Section */}
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
                Our Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful cloud migration 
                and DevOps implementation.
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-gray-300">Cloud Migrations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Achieved</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
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
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our cloud and DevOps experts help you modernize your infrastructure 
                and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}