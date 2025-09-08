import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Server, Database, Shield, Zap, Users } from 'lucide-react';

export default function CloudDevOps() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance.',
      features: ['AWS Migration', 'Azure Migration', 'GCP Migration', 'Hybrid Cloud Solutions']
    }, {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern IaC tools.',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Kubernetes']
    }, {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster and reliable releases.',
      features: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps']
    }, {
      icon: Zap,
      title: 'CI/CD Pipeline Automation',
      description: 'Streamlined deployment pipelines with automated testing, quality gates, and rollback capabilities.',
      features: ['Automated testing', 'Quality gates', 'Blue-green deployments', 'Rollback automation']
    },
    {
      icon: Users,
      title: 'Team Training & Support',
      description: 'Comprehensive training programs to upskill your team in modern DevOps practices and tools.',
      features: ['Hands-on training', 'Best practices', 'Tool certification', 'Ongoing support']
    }
  ];

  const technologies = [
    { name: 'AWS', description: 'Amazon Web Services' }, { name: 'Azure', description: 'Microsoft Azure' }, { name: 'GCP', description: 'Google Cloud Platform' }, { name: 'Docker', description: 'Containerization' }, { name: 'Kubernetes', description: 'Container Orchestration' }, { name: 'Terraform', description: 'Infrastructure as Code' }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime', icon: Clock }, { number: '50%', label: 'Cost Reduction', icon: Zap }, { number: '10x', label: 'Faster Deployments', icon: GitBranch }, { number: '24/7', label: 'Monitoring', icon: Server }
  ];

  return (
    <>
      <Head>
        <title>Cloud DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud DevOps services including migration, infrastructure automation, CI/CD pipelines, and security. Transform your development workflow with Zion Tech Group." />
        <meta name="keywords" content="cloud migration, DevOps, infrastructure as code, CI/CD, cloud security, AWS, Azure, GCP" />
        <link rel="canonical" href={`${contact.site}/cloud-devops`} />
        <meta property="og: title" content="Cloud DevOps Services - Zion Tech Group" />
        <meta property="og:description" content="Expert cloud DevOps services including migration, infrastructure automation, CI/CD pipelines, and security." />
        <meta property="og: url" content={`${contact.site}/cloud-devops`} />
        <meta property="og: type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud DevOps Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Accelerate your digital transformation with expert cloud migration, infrastructure automation, and DevOps practices.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive DevOps Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to continuous deployment, we provide end-to-end DevOps services to modernize your infrastructure.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover: shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts help you build a robust, scalable, and secure cloud infrastructure.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-blue-600 hover:text-white transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to DevOps automation, we provide end-to-end solutions for modern infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest cloud and DevOps technologies to deliver scalable and reliable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your infrastructure with our cloud and DevOps expertise. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )}