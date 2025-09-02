import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import {
  Cloud,
  Server,
  Shield,
  Zap,
  Database,
  Globe,
  Lock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Monitor,
  HardDrive,
  Network,
  Settings,
  Users,
  TrendingUp,
} from 'lucide-react';

export default function CloudServices() {
  const features = [
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description:
        'Auto-scaling cloud solutions that grow with your business needs',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level security with advanced threat protection and compliance',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description:
        'Optimized cloud architecture for maximum speed and reliability',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure, scalable database solutions with automated backups',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Worldwide cloud infrastructure for optimal performance everywhere',
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description:
        'Meet industry standards with SOC2, GDPR, and HIPAA compliance',
    },
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description:
        'Seamless migration of your existing infrastructure to the cloud',
      icon: Server,
      features: [
        'Assessment & Planning',
        'Data Migration',
        'Application Migration',
        'Performance Optimization',
      ],
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement robust, scalable cloud architectures',
      icon: Network,
      features: [
        'Microservices Design',
        'Load Balancing',
        'Auto-scaling',
        'Disaster Recovery',
      ],
    },
    {
      title: 'DevOps & CI/CD',
      description:
        'Automated deployment pipelines and infrastructure management',
      icon: Settings,
      features: [
        'Continuous Integration',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Alerting',
      ],
    },
    {
      title: 'Cloud Security',
      description:
        'Comprehensive security solutions for your cloud infrastructure',
      icon: Shield,
      features: [
        'Identity Management',
        'Network Security',
        'Data Encryption',
        'Compliance Monitoring',
      ],
    },
  ];

  const platforms = [
    { name: 'Amazon Web Services (AWS)', category: 'Cloud Platform' },
    { name: 'Microsoft Azure', category: 'Cloud Platform' },
    { name: 'Google Cloud Platform', category: 'Cloud Platform' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'Infrastructure as Code' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description:
        'Reduce infrastructure costs by up to 40% with optimized cloud resources',
    },
    {
      icon: Zap,
      title: 'Improved Performance',
      description:
        'Faster application performance with global CDN and edge computing',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description:
        'Advanced security features and compliance with industry standards',
    },
    {
      icon: Users,
      title: 'Better Collaboration',
      description:
        'Enable remote work and team collaboration with cloud-based tools',
    },
  ];

  return (
    <>
      <Head>
        <title>Cloud Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional cloud services including migration, architecture design, DevOps, and security. AWS, Azure, and Google Cloud expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https: //ziontechgroup.com/services/cloud-services"
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-blue-600">Cloud Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with scalable, secure, and
                cost-effective cloud solutions. Our expert team helps you
                migrate, optimize, and manage your cloud infrastructure.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Cloud Consultation
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive cloud solutions that drive efficiency,
                security, and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-200 hover: shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Cloud Services
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end cloud solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-fit mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Cloud Migration
              </h2>
              <p className="text-lg text-gray-600">
                Transform your business with cloud technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cloud Technologies We Use
              </h2>
              <p className="text-lg text-gray-600">
                Leading cloud platforms and tools for optimal performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg border border-gray-200 hover: border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {platform.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {platform.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Cloud Migration Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven methodology for successful cloud transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description:
                    'Analyze your current infrastructure and identify migration opportunities',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description:
                    'Develop a comprehensive cloud strategy and migration roadmap',
                },
                {
                  step: '03',
                  title: 'Migration',
                  description:
                    'Execute the migration with minimal downtime and maximum efficiency',
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description:
                    'Monitor, optimize, and continuously improve your cloud environment',
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your cloud strategy and create a migration plan
              that transforms your business.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Cloud Assessment
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
