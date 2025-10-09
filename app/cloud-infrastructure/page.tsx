'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  BarChart, 
  Cloud, 
  Server, 
  Database, 
  Globe,
  Lock,
  TrendingUp,
  Award,
  Play,
  Download,
  Phone,
  Mail,
  ExternalLink,
  Brain,
  Cpu,
  Settings,
  Monitor
} from 'lucide-react';
import { getServiceById } from '../../data/servicesData';

// Lazy load components
const Navigation = lazy(() => import('../../components/Navigation'));
const Footer = lazy(() => import('../../components/Footer'));

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = memo(({ icon, title, description }) => (
  <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
    <div className="text-3xl mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const CloudProviderCard: React.FC<{ 
  name: string; 
  description: string; 
  features: string[]; 
  icon: string;
  color: string;
}> = memo(({ name, description, features, icon, color }) => (
  <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-sm text-gray-400 flex items-center">
          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
));

CloudProviderCard.displayName = 'CloudProviderCard';

const CloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const service = getServiceById('cloud-infrastructure');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Multi-Cloud Architecture',
      description: 'Design and implement robust multi-cloud architectures that provide redundancy, cost optimization, and vendor independence.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using Terraform, Ansible, and other IaC tools for consistent deployments.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Monitor and optimize cloud resources for maximum performance, cost efficiency, and scalability.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management',
      description: 'Design and implement data storage, backup, and disaster recovery solutions for business continuity.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Deployment',
      description: 'Deploy applications across multiple regions and availability zones for optimal performance and reliability.'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud platform with over 200 services',
      features: ['EC2, S3, RDS', 'Lambda serverless', 'CloudFormation', 'Auto Scaling'],
      icon: '☁️',
      color: 'text-orange-400'
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-focused cloud platform with hybrid capabilities',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'DevOps'],
      icon: '🔷',
      color: 'text-blue-400'
    },
    {
      name: 'Google Cloud Platform (GCP)',
      description: 'AI and data-focused cloud platform with advanced analytics',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes'],
      icon: '🔵',
      color: 'text-green-400'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve performance by 60%',
    'Ensure 99.9% uptime',
    'Enhance security posture',
    'Scale infrastructure automatically',
    'Eliminate hardware maintenance'
  ];

  const useCases = [
    {
      title: 'Application Hosting',
      description: 'Host web applications, APIs, and microservices with high availability and auto-scaling.',
      icon: '🌐'
    },
    {
      title: 'Data Storage & Backup',
      description: 'Secure, scalable data storage with automated backup and disaster recovery.',
      icon: '💾'
    },
    {
      title: 'Development Environments',
      description: 'On-demand development and testing environments that scale with your team.',
      icon: '💻'
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Seamlessly integrate on-premises infrastructure with cloud services.',
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            {service.description}
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {service.detailedDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={service.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View Architecture Demo
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Uptime SLA</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">40%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">60%</div>
              <div className="text-sm text-gray-300">Performance Boost</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Monitoring</div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Supported Cloud Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <CloudProviderCard
                key={index}
                name={provider.name}
                description={provider.description}
                features={provider.features}
                icon={provider.icon}
                color={provider.color}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Comprehensive Cloud Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Cloud Infrastructure Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Process */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300 text-sm">Analyze current infrastructure and identify migration requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300 text-sm">Design cloud architecture and create detailed migration plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Migration</h3>
                <p className="text-gray-300 text-sm">Execute migration with minimal downtime and zero data loss</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300 text-sm">Monitor, optimize, and provide ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.pricing.tiers?.map((tier, index) => (
              <div key={index} className={`cyber-card p-8 relative ${index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    ${tier.price}<span className="text-lg text-gray-400">/{service.pricing.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  index === 1 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              All plans include 30-day free consultation • Custom solutions available • 24/7 support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={service.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who have successfully migrated to the cloud with our expert guidance. 
            Let us help you build a scalable, secure, and cost-effective cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={service.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default CloudInfrastructurePage;