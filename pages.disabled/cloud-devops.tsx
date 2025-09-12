import React from 'react' 
import Head from 'next/head' 
import Link from 'next/link' 
import Navigation from '../../src/components/Navigation' 
import Footer from '../../src/components/Footer' 
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Code,
  GitBranch,
  Monitor,
  Lock,
  Globe,
  BarChart3,
  Users,
  Clock,
  Award } from 'lucide-react' 

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description:
        'Scalable cloud solutions on AWS, Azure, and Google Cloud Platform' }, {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description:
        'Automated deployment pipelines for faster, reliable releases' }, {
      icon: Monitor,
      title: 'Monitoring & Logging',
      description:
        'Comprehensive monitoring and logging solutions for optimal performance' }, {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance frameworks' }, {
      icon: Database,
      title: 'Database Management',
      description: 'Optimized database solutions and migration services' }, {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Infrastructure optimization for maximum efficiency and cost savings' } ] 

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: [
        'Assessment & Planning',
        'Data Migration',
        'Application Modernization',
        'Post-Migration Support' ] }, {
      title: 'DevOps Implementation',
      description:
        'Complete DevOps transformation with modern tools and practices',
      features: [
        'CI/CD Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Alerting' ] }, {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud architectures',
      features: [
        'Architecture Design',
        'Security Implementation',
        'Cost Optimization',
        'Disaster Recovery' ] }, {
      title: 'Managed Services',
      description:
        '24/7 managed cloud and DevOps services for your infrastructure',
      features: [
        '24/7 Monitoring',
        'Incident Response',
        'Performance Tuning',
        'Security Updates' ] } ] 

  const technologies = [
    { name: 'AWS', category: 'Cloud Platforms' }, { name: 'Azure', category: 'Cloud Platforms' }, { name: 'Google Cloud', category: 'Cloud Platforms' }, { name: 'Docker', category: 'Containerization' }, { name: 'Kubernetes', category: 'Orchestration' }, { name: 'Terraform', category: 'Infrastructure as Code' }, { name: 'Jenkins', category: 'CI/CD' }, { name: 'GitLab CI', category: 'CI/CD' }, { name: 'GitHub Actions', category: 'CI/CD' }, { name: 'Prometheus', category: 'Monitoring' }, { name: 'Grafana', category: 'Monitoring' }, { name: 'ELK Stack', category: 'Logging' } ] 

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' }, { number: '50%', label: 'Cost Reduction' }, { number: '10x', label: 'Faster Deployments' }, { number: '24/7', label: 'Support Available' } ] 

  return (
    <>
      <Head>
        <title>Cloud & DevOps Services | Zion Tech Group</title>
        <meta
          name="description"
          content="Expert cloud migration, DevOps implementation, and infrastructure management services. Transform your operations with scalable cloud solutions."
        />
        <meta
          name="keywords"
          content="cloud services, devops, aws, azure, kubernetes, docker, ci/cd, infrastructure"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/services/cloud-devops"
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your infrastructure with our expert cloud migration and
              DevOps services. Scale efficiently, deploy faster, and maintain
              99.9% uptime with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Solutions
              </Link>
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
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud migration to DevOps transformation, we provide
              end-to-end solutions to modernize your infrastructure and
              accelerate your development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of cloud and DevOps services
              designed to meet your specific business needs and technical
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver robust,
              scalable, and secure cloud and DevOps solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-600">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let our cloud and DevOps experts help you modernize your
            infrastructure, accelerate deployments, and achieve operational
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )}
  ) 
} 