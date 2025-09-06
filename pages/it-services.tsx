<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
<<<<<<< HEAD
    return () => clearTimeout(timer);
=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return () => clearTimeout(timer)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
    site: 'https://ziontechgroup.com',
=======
    site: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    site: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const categories = [
    { id: 'all', name: 'All IT Services', count: 100 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },
    { id: 'security', name: 'Cybersecurity', count: 20 },
    { id: 'devops', name: 'DevOps & Automation', count: 15 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },
    { id: 'quantum', name: 'Quantum Computing', count: 10 },
<<<<<<< HEAD
<<<<<<< HEAD
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 },
=======
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const services = [
    {
      id: 1,
      name: 'Quantum Computing Consulting',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
=======
      description: 'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'quantum',
      features: ['Quantum Algorithm DesignHardware SelectionPerformance OptimizationSecurity Implementation'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Exponential SpeedupAdvanced CryptographyOptimization SolutionsFuture-Proof Technology']
    };
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: ['Smart Contract DevelopmentDApp CreationDeFi IntegrationNFT Platforms'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Decentralized SolutionsEnhanced SecurityTransparencyInnovation']
    };
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated development, security, and operations with automated security testing and deployment.';
      category: 'devops',
      features: ['CI/CD PipelinesSecurity ScanningAutomated TestingInfrastructure as Code'],
      price: '$199/month',
      popular: false,
      benefits: ['Faster DeploymentEnhanced SecurityReduced RiskAutomated Compliance']
    };
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description: 'Comprehensive data management and analytics platform for enterprise-scale operations.',
      category: 'enterprise',
      features: ['Data WarehousingReal-time AnalyticsData GovernanceMachine Learning Integration'],
      price: '$299/month',
      popular: true,
      benefits: ['Data-Driven InsightsScalable ArchitectureCompliance ReadyAdvanced Analytics']
    };
    {
      id: 5,
      name: 'High-Performance Computing Solutions',
      description: 'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: ['GPU ComputingParallel ProcessingDistributed ComputingPerformance Monitoring'],
      price: '$399/month',
      popular: false,
      benefits: ['Massive Processing PowerScalable ResourcesCost OptimizationAdvanced Capabilities']
    };
    {
      id: 6,
      name: 'Cloud Migration Services',
      description: 'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: ['Assessment & PlanningData MigrationApplication ModernizationPerformance Optimization'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Reduced CostsEnhanced ScalabilityImproved SecurityBetter Performance']
    };
    {
      id: 7,
      name: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: ['Terraform AutomationConfiguration ManagementVersion ControlEnvironment Provisioning'],
      price: '$149/month',
      popular: false,
      benefits: ['Consistent EnvironmentsFaster ProvisioningVersion ControlReduced Errors']
    };
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: ['Automated BackupsMulti-site ReplicationRecovery TestingRTO/RPO Optimization'],
      price: '$179/month',
      popular: true,
      benefits: ['Business ContinuityData ProtectionMinimal DowntimeCompliance Ready']
    };
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: ['Vulnerability AssessmentPenetration TestingCompliance AuditingSecurity Recommendations'],
      price: '$249/month',
      popular: false,
      benefits: ['Risk IdentificationCompliance AssuranceSecurity HardeningThreat Mitigation']
    };
    {
      id: 10,
      name: 'API Development & Integration',
      description: 'Custom API development and third-party integration services for seamless connectivity.',
      category: 'enterprise',
      features: ['RESTful APIsGraphQL ServicesThird-party IntegrationAPI Documentation'],
      price: '$129/month',
      popular: true,
      benefits: ['System IntegrationImproved EfficiencyScalable ArchitectureDeveloper Experience']
    };
    {
      id: 11,
      name: 'Microservices Architecture',
      description: 'Design and implementation of microservices-based applications for scalable systems.',
      category: 'enterprise',
      features: ['Service DesignContainer OrchestrationService MeshMonitoring & Logging'],
      price: '$199/month',
      popular: false,
      benefits: ['Scalable ArchitectureIndependent DeploymentTechnology DiversityFault Isolation']
    };
    {
      id: 12,
      name: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for low-latency applications and IoT systems.',
      category: 'cloud',
      features: ['Edge DeploymentIoT IntegrationReal-time ProcessingBandwidth Optimization'],
      price: '$159/month',
      popular: true,
      benefits: ['Reduced LatencyBandwidth SavingsOffline CapabilityEnhanced Performance']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
<<<<<<< HEAD
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
=======
      description: 'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
      category: 'quantum',
      features: ['Quantum Algorithm DesignHardware SelectionPerformance OptimizationSecurity Implementation'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Exponential SpeedupAdvanced CryptographyOptimization SolutionsFuture-Proof Technology']
    };
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: ['Smart Contract DevelopmentDApp CreationDeFi IntegrationNFT Platforms'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Decentralized SolutionsEnhanced SecurityTransparencyInnovation']
    };
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated development, security, and operations with automated security testing and deployment.',
    category: 'devops',
      features: ['CI/CD PipelinesSecurity ScanningAutomated TestingInfrastructure as Code'],
      price: '$199/month',
      popular: false,
      benefits: ['Faster DeploymentEnhanced SecurityReduced RiskAutomated Compliance']
    };
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description: 'Comprehensive data management and analytics platform for enterprise-scale operations.',
      category: 'enterprise',
      features: ['Data WarehousingReal-time AnalyticsData GovernanceMachine Learning Integration'],
      price: '$299/month',
      popular: true,
      benefits: ['Data-Driven InsightsScalable ArchitectureCompliance ReadyAdvanced Analytics']
    };
    {
      id: 5,
      name: 'High-Performance Computing Solutions',
      description: 'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: ['GPU ComputingParallel ProcessingDistributed ComputingPerformance Monitoring'],
      price: '$399/month',
      popular: false,
      benefits: ['Massive Processing PowerScalable ResourcesCost OptimizationAdvanced Capabilities']
    };
    {
      id: 6,
      name: 'Cloud Migration Services',
      description: 'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: ['Assessment & PlanningData MigrationApplication ModernizationPerformance Optimization'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Reduced CostsEnhanced ScalabilityImproved SecurityBetter Performance']
    };
    {
      id: 7,
      name: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: ['Terraform AutomationConfiguration ManagementVersion ControlEnvironment Provisioning'],
      price: '$149/month',
      popular: false,
      benefits: ['Consistent EnvironmentsFaster ProvisioningVersion ControlReduced Errors']
    };
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: ['Automated BackupsMulti-site ReplicationRecovery TestingRTO/RPO Optimization'],
      price: '$179/month',
      popular: true,
      benefits: ['Business ContinuityData ProtectionMinimal DowntimeCompliance Ready']
    };
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: ['Vulnerability AssessmentPenetration TestingCompliance AuditingSecurity Recommendations'],
      price: '$249/month',
      popular: false,
      benefits: ['Risk IdentificationCompliance AssuranceSecurity HardeningThreat Mitigation']
    };
    {
      id: 10,
      name: 'API Development & Integration',
      description: 'Custom API development and third-party integration services for seamless connectivity.',
      category: 'enterprise',
      features: ['RESTful APIsGraphQL ServicesThird-party IntegrationAPI Documentation'],
      price: '$129/month',
      popular: true,
      benefits: ['System IntegrationImproved EfficiencyScalable ArchitectureDeveloper Experience']
    };
    {
      id: 11,
      name: 'Microservices Architecture',
      description: 'Design and implementation of microservices-based applications for scalable systems.',
      category: 'enterprise',
      features: ['Service DesignContainer OrchestrationService MeshMonitoring & Logging'],
      price: '$199/month',
      popular: false,
      benefits: ['Scalable ArchitectureIndependent DeploymentTechnology DiversityFault Isolation']
    };
    {
      id: 12,
      name: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for low-latency applications and IoT systems.',
      category: 'cloud',
      features: ['Edge DeploymentIoT IntegrationReal-time ProcessingBandwidth Optimization'],
      price: '$159/month',
      popular: true,
      benefits: ['Reduced LatencyBandwidth SavingsOffline CapabilityEnhanced Performance']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                100+ Comprehensive IT Solutions
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Transform your business with our enterprise-grade IT services.
                From cloud infrastructure to quantum computing, we provide
                cutting-edge technology solutions that scale with your business
                and drive innovation.
=======
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
=======
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure 
                to quantum computing, we provide cutting-edge technology solutions that scale with your 
                business and drive innovation.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </div>
          </section>

          {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredServices.map((service, index) => (
                  <div
=======
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
=======
                      <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>
=======
                      <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Benefits:
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'
                          >
=======
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>
=======
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
=======
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Our Technology Stack
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
                  <p className="text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-slate-400">Zero-trust architecture and advanced threat protection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>
                  <p className="text-slate-400">CI/CD pipelines and infrastructure automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
<<<<<<< HEAD
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>
=======
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Technology Stack
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
                  <p className="text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-slate-400">Zero-trust architecture and advanced threat protection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>
                  <p className="text-slate-400">CI/CD pipelines and infrastructure automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>
                  <p className="text-slate-400">Smart contracts and decentralized applications</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>
                  <p className="text-slate-400">Smart contracts and decentralized applications</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
=======
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our IT experts to discuss how our comprehensive technology solutions 
                can modernize your infrastructure and accelerate your digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  Get IT Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
<<<<<<< HEAD
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
=======
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our IT experts to discuss how our comprehensive technology solutions 
                can modernize your infrastructure and accelerate your digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  Get IT Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Email Us
                </a>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to enhance your business operations and security.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                    {service.marketPrice && (
                      <span className="text-gray-500 ml-2">(Market: {service.marketPrice})</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );

=======
            </div>
=======
            </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
