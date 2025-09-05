<<<<<<< HEAD
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
;
export default function ITServices() {;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  ;
  useEffect(() => {;
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
;
  const contact:ContactInfo = {;
    phone:'+1 302 464 0950',;
    email:'kleber@ziontechgroup.com',;
    address:'364 E Main St STE 1008 Middletown DE 19709',;
    site:'https://ziontechgroup.com';
  };
;
  const categories = [;
    { id:'all', name:'All IT Services', count:100 },;
    { id:'cloud', name:'Cloud & Infrastructure', count:25 },;
    { id:'security', name:'Cybersecurity', count:20 },;
    { id:'devops', name:'DevOps & Automation', count:15 },;
    { id:'blockchain', name:'Blockchain & Web3', count:15 },;
    { id:'quantum', name:'Quantum Computing', count:10 },;
    { id:'enterprise', name:'Enterprise Solutions', count:15 }
  ];
;
  const services = [;
    {;
      id:1,;
      name:'Quantum Computing Consulting',;
      description:'Expert guidance on quantum computing implementation and optimization for enterprise applications.',;
      category:'quantum',;
      features:['Quantum Algorithm Design', 'Hardware Selection', 'Performance Optimization', 'Security Implementation'],;
      price:'Custom Pricing',;
      popular:true,;
      benefits:['Exponential Speedup', 'Advanced Cryptography', 'Optimization Solutions', 'Future-Proof Technology'];
    },;
    {;
      id:2,;
      name:'Blockchain & Web3 Solutions',;
      description:'Comprehensive blockchain development and Web3 integration services for modern businesses.',;
      category:'blockchain',;
      features:['Smart Contract Development', 'DApp Creation', 'DeFi Integration', 'NFT Platforms'],;
      price:'Custom Pricing',;
      popular:true,;
      benefits:['Decentralized Solutions', 'Enhanced Security', 'Transparency', 'Innovation'];
    },;
    {;
      id:3,;
      name:'DevSecOps & Security Automation',;
      description:'Integrated development, security, and operations with automated security testing and deployment.',;
      category:'devops',;
      features:['CI/CD Pipelines', 'Security Scanning', 'Automated Testing', 'Infrastructure as Code'],;
      price:'$199/month',;
      popular:false,;
      benefits:['Faster Deployment', 'Enhanced Security', 'Reduced Risk', 'Automated Compliance'];
    },;
    {;
      id:4,;
      name:'Enterprise Data Platform',;
      description:'Comprehensive data management and analytics platform for enterprise-scale operations.',;
      category:'enterprise',;
      features:['Data Warehousing', 'Real-time Analytics', 'Data Governance', 'Machine Learning Integration'],;
      price:'$299/month',;
      popular:true,;
      benefits:['Data-Driven Insights', 'Scalable Architecture', 'Compliance Ready', 'Advanced Analytics'];
    },;
    {;
      id:5,;
      name:'High-Performance Computing Solutions',;
      description:'Optimized computing infrastructure for demanding computational workloads and research.',;
      category:'cloud',;
      features:['GPU Computing', 'Parallel Processing', 'Distributed Computing', 'Performance Monitoring'],;
      price:'$399/month',;
      popular:false,;
      benefits:['Massive Processing Power', 'Scalable Resources', 'Cost Optimization', 'Advanced Capabilities'];
    },;
    {;
      id:6,;
      name:'Cloud Migration Services',;
      description:'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',;
      category:'cloud',;
      features:['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization'],;
      price:'Custom Pricing',;
      popular:true,;
      benefits:['Reduced Costs', 'Enhanced Scalability', 'Improved Security', 'Better Performance'];
    },;
    {;
      id:7,;
      name:'Infrastructure as Code',;
      description:'Automated infrastructure provisioning and management using modern DevOps practices.',;
      category:'devops',;
      features:['Terraform Automation', 'Configuration Management', 'Version Control', 'Environment Provisioning'],;
      price:'$149/month',;
      popular:false,;
      benefits:['Consistent Environments', 'Faster Provisioning', 'Version Control', 'Reduced Errors'];
    },;
    {;
      id:8,;
      name:'Disaster Recovery Solutions',;
      description:'Comprehensive backup and disaster recovery strategies to ensure business continuity.',;
      category:'security',;
      features:['Automated Backups', 'Multi-site Replication', 'Recovery Testing', 'RTO/RPO Optimization'],;
      price:'$179/month',;
      popular:true,;
      benefits:['Business Continuity', 'Data Protection', 'Minimal Downtime', 'Compliance Ready'];
    },;
    {;
      id:9,;
      name:'Cybersecurity Assessment',;
      description:'Comprehensive security evaluation and penetration testing for enterprise systems.',;
      category:'security',;
      features:['Vulnerability Assessment', 'Penetration Testing', 'Compliance Auditing', 'Security Recommendations'],;
      price:'$249/month',;
      popular:false,;
      benefits:['Risk Identification', 'Compliance Assurance', 'Security Hardening', 'Threat Mitigation'];
    },;
    {;
      id:10,;
      name:'API Development & Integration',;
      description:'Custom API development and third-party integration services for seamless connectivity.',;
      category:'enterprise',;
      features:['RESTful APIs', 'GraphQL Services', 'Third-party Integration', 'API Documentation'],;
      price:'$129/month',;
      popular:true,;
      benefits:['System Integration', 'Improved Efficiency', 'Scalable Architecture', 'Developer Experience'];
    },;
    {;
      id:11,;
      name:'Microservices Architecture',;
      description:'Design and implementation of microservices-based applications for scalable systems.',;
      category:'enterprise',;
      features:['Service Design', 'Container Orchestration', 'Service Mesh', 'Monitoring & Logging'],;
      price:'$199/month',;
      popular:false,;
      benefits:['Scalable Architecture', 'Independent Deployment', 'Technology Diversity', 'Fault Isolation'];
    },;
    {;
      id:12,;
      name:'Edge Computing Solutions',;
      description:'Distributed computing infrastructure for low-latency applications and IoT systems.',;
      category:'cloud',;
      features:['Edge Deployment', 'IoT Integration', 'Real-time Processing', 'Bandwidth Optimization'],;
      price:'$159/month',;
      popular:true,;
      benefits:['Reduced Latency', 'Bandwidth Savings', 'Offline Capability', 'Enhanced Performance'];
    }
  ];
;
  const filteredServices = selectedCategory === 'all' ;
    ? services ;
    :services.filter(service => service.category === selectedCategory);
;
  return (;
    <>;
      <Head>;
        <title>IT Services - Zion Tech Group</title>;
        <meta name="description" content="Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting." />;
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure" />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        <meta name="robots" content="index, follow" />;
        <link rel="canonical" href={`${contact.site}/it-services`} />;
      </Head>;
      ;
      <ErrorBoundary level="page">;
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">;
            <div className="max-w-4xl mx-auto">;
              <h1 ;
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}
              >;
                IT Services;
              </h1>;
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
                100+ Comprehensive IT Solutions;
              </p>;
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
                Transform your business with our enterprise-grade IT services. From cloud infrastructure ;
                to quantum computing, we provide cutting-edge technology solutions that scale with your ;
                business and drive innovation.;
              </p>;
            </div>;
          </section>;
;
          {/* Category Filter */}
          <section className="py-8 px-4">;
            <div className="max-w-6xl mx-auto">;
              <div className="flex flex-wrap justify-center gap-4 mb-8">;
                {categories.map((category) => (;
                  <button;
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-green-600 text-white';
                        :'bg-slate-800 text-slate-300 hover:bg-slate-700';
                    }`}
                  >;
                    {category.name} ({category.count});
                  </button>;
=======
import Link from 'next/link',
import Head from 'next/head',
import { useState, useEffect } from 'react',
import { ContactInfo } from '../types',
import ErrorBoundary from '../components/ErrorBoundary',
export default function ITServices() {
  const [isLoaded, setIsLoaded] = useState(false),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100),
    return () => clearTimeout(timer)
  }, []),

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  },

  const categories = [
    { id: 'all', name: 'All IT Services', count: 100 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 25 },
    { id: 'security', name: 'Cybersecurity', count: 20 },
    { id: 'devops', name: 'DevOps & Automation', count: 15 },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 15 },
    { id: 'quantum', name: 'Quantum Computing', count: 10 },
    { id: 'enterprise', name: 'Enterprise Solutions', count: 15 }
  ],

  const services = [
    {
      id: 1,
      name: 'Quantum Computing Consulting',
      description: 'Expert guidance on quantum computing implementation and optimization for enterprise applications.',
      category: 'quantum',
      features: ['Quantum Algorithm DesignHardware SelectionPerformance OptimizationSecurity Implementation'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Exponential SpeedupAdvanced CryptographyOptimization SolutionsFuture-Proof Technology']
    },
    {
      id: 2,
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services for modern businesses.',
      category: 'blockchain',
      features: ['Smart Contract DevelopmentDApp CreationDeFi IntegrationNFT Platforms'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Decentralized SolutionsEnhanced SecurityTransparencyInnovation']
    },
    {
      id: 3,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated development, security, and operations with automated security testing and deployment.',
      category: 'devops',
      features: ['CI/CD PipelinesSecurity ScanningAutomated TestingInfrastructure as Code'],
      price: '$199/month',
      popular: false,
      benefits: ['Faster DeploymentEnhanced SecurityReduced RiskAutomated Compliance']
    },
    {
      id: 4,
      name: 'Enterprise Data Platform',
      description: 'Comprehensive data management and analytics platform for enterprise-scale operations.',
      category: 'enterprise',
      features: ['Data WarehousingReal-time AnalyticsData GovernanceMachine Learning Integration'],
      price: '$299/month',
      popular: true,
      benefits: ['Data-Driven InsightsScalable ArchitectureCompliance ReadyAdvanced Analytics']
    },
    {
      id: 5,
      name: 'High-Performance Computing Solutions',
      description: 'Optimized computing infrastructure for demanding computational workloads and research.',
      category: 'cloud',
      features: ['GPU ComputingParallel ProcessingDistributed ComputingPerformance Monitoring'],
      price: '$399/month',
      popular: false,
      benefits: ['Massive Processing PowerScalable ResourcesCost OptimizationAdvanced Capabilities']
    },
    {
      id: 6,
      name: 'Cloud Migration Services',
      description: 'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.',
      category: 'cloud',
      features: ['Assessment & PlanningData MigrationApplication ModernizationPerformance Optimization'],
      price: 'Custom Pricing',
      popular: true,
      benefits: ['Reduced CostsEnhanced ScalabilityImproved SecurityBetter Performance']
    },
    {
      id: 7,
      name: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using modern DevOps practices.',
      category: 'devops',
      features: ['Terraform AutomationConfiguration ManagementVersion ControlEnvironment Provisioning'],
      price: '$149/month',
      popular: false,
      benefits: ['Consistent EnvironmentsFaster ProvisioningVersion ControlReduced Errors']
    },
    {
      id: 8,
      name: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery strategies to ensure business continuity.',
      category: 'security',
      features: ['Automated BackupsMulti-site ReplicationRecovery TestingRTO/RPO Optimization'],
      price: '$179/month',
      popular: true,
      benefits: ['Business ContinuityData ProtectionMinimal DowntimeCompliance Ready']
    },
    {
      id: 9,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and penetration testing for enterprise systems.',
      category: 'security',
      features: ['Vulnerability AssessmentPenetration TestingCompliance AuditingSecurity Recommendations'],
      price: '$249/month',
      popular: false,
      benefits: ['Risk IdentificationCompliance AssuranceSecurity HardeningThreat Mitigation']
    },
    {
      id: 10,
      name: 'API Development & Integration',
      description: 'Custom API development and third-party integration services for seamless connectivity.',
      category: 'enterprise',
      features: ['RESTful APIsGraphQL ServicesThird-party IntegrationAPI Documentation'],
      price: '$129/month',
      popular: true,
      benefits: ['System IntegrationImproved EfficiencyScalable ArchitectureDeveloper Experience']
    },
    {
      id: 11,
      name: 'Microservices Architecture',
      description: 'Design and implementation of microservices-based applications for scalable systems.',
      category: 'enterprise',
      features: ['Service DesignContainer OrchestrationService MeshMonitoring & Logging'],
      price: '$199/month',
      popular: false,
      benefits: ['Scalable ArchitectureIndependent DeploymentTechnology DiversityFault Isolation']
    },
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
  ],
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory),

  return (_<>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <link rel=&quot;canonical&quot; href={`${contact.site}/it-services`} />
      </Head>
      
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4 text-center&quot; role=&quot;banner&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>              <h1,
className={_`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
              <p className={_`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Comprehensive IT Solutions
              </p>
              <p className={_`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Transform your business with our enterprise-grade IT services. From cloud infrastructure,
to quantum computing, we provide cutting-edge technology solutions that scale with your,
business and drive innovation.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className=&quot;py-8 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;>
                {categories.map((category) => (
                  <button                    key={category.id}
                    onClick={_() => setSelectedCategory(category.id)}
                    className={_`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {category.name} ({category.count})
                  </button>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
              </div>;
            </div>;
          </section>;
;
          {/* Services Grid */}
<<<<<<< HEAD
          <section className="py-16 px-4" role="main">;
            <div className="max-w-7xl mx-auto">;
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {filteredServices.map((service, index) => (;
                  <div ;
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay:`${index * 100}ms` }}
                  >;
                    {service.popular && (;
                      <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">;
                        Popular;
                      </div>;
                    )}
                    ;
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>;
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>;
                    ;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>;
                      <ul className="text-slate-400 text-sm space-y-1">;
                        {service.features.map((feature, featureIndex) => (;
                          <li key={featureIndex} className="flex items-center">;
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>;
                            {feature}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>;
                      <div className="flex flex-wrap gap-1">;
                        {service.benefits.map((benefit, benefitIndex) => (;
                          <span key={benefitIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">;
                            {benefit}
                          </span>;
                        ))}
                      </div>;
                    </div>;
                    ;
                    <div className="flex items-center justify-between mb-4">;
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>;
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('-', ' ')}</span>;
                    </div>;
                    ;
                    <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">;
                      Learn More;
                    </button>;
                  </div>;
=======
          <section className=&quot;py-16 px-4&quot; role=&quot;main&quot;>
            <div className=&quot;max-w-7xl mx-auto&quot;>
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {filteredServices.map((service, index) => (                  <div,
key={service.id}
                    className={_`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={_{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className=&quot;absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full&quot;>                        Popular
                      </div>
                    )}
                    
                    <h3 className=&quot;text-xl font-bold mb-3&quot;>{service.name}</h3>
                    <p className=&quot;text-slate-300 mb-4 text-sm&quot;>{service.description}</p>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Key Features:</h4>
                      <ul className=&quot;text-slate-400 text-sm space-y-1&quot;>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-center&quot;>
                            <span className=&quot;w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0&quot;></span>
                            {feature}                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Benefits:</h4>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className=&quot;text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded&quot;>
                            {benefit}                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('-', _' ')}</span>
                    </div>
                    
                    <button className=&quot;w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors&quot;>
                      Learn More
                    </button>
                  </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
              </div>;
            </div>;
          </section>;
;
          {/* Technology Stack Section */}
<<<<<<< HEAD
          <section className="py-16 px-4 bg-slate-900/40">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">;
                Our Technology Stack;
              </h2>;
              ;
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>;
                  <p className="text-slate-400">AWS, Azure, GCP, and hybrid cloud solutions</p>;
                </div>;
                ;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Security</h3>;
                  <p className="text-slate-400">Zero-trust architecture and advanced threat protection</p>;
                </div>;
                ;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>;
                  <p className="text-slate-400">CI/CD pipelines and infrastructure automation</p>;
                </div>;
                ;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>;
                  <p className="text-slate-400">Smart contracts and decentralized applications</p>;
                </div>;
              </div>;
            </div>;
          </section>;
;
          {/* CTA Section */}
          <section className="py-16 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl md:text-4xl font-bold mb-8">;
                Ready to Transform Your IT Infrastructure?;
              </h2>;
              <p className="text-lg text-slate-300 mb-8">;
                Contact our IT experts to discuss how our comprehensive technology solutions ;
                can modernize your infrastructure and accelerate your digital transformation.;
              </p>;
              ;
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
                <Link ;
                  href="/contact" ;
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors";
                >;
                  Get IT Consultation;
                </Link>;
                <a ;
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} ;
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors";
                >;
                  Call {contact.phone}
                </a>;
                <a ;
                  href={`mailto:${contact.email}`} ;
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors";
                >;
                  Email Us;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
=======
          <section className=&quot;py-16 px-4 bg-slate-900/40&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
                Our Technology Stack
              </h2>
              
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Cloud Platforms</h3>
                  <p className=&quot;text-slate-400&quot;>AWS, Azure, GCP, and hybrid cloud solutions</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Security</h3>
                  <p className=&quot;text-slate-400&quot;>Zero-trust architecture and advanced threat protection</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot; />
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>DevOps</h3>
                  <p className=&quot;text-slate-400&quot;>CI/CD pipelines and infrastructure automation</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Blockchain</h3>
                  <p className=&quot;text-slate-400&quot;>Smart contracts and decentralized applications</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className=&quot;py-16 px-4&quot;>
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-8&quot;>                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className=&quot;text-lg text-slate-300 mb-8&quot;>
                Contact our IT experts to discuss how our comprehensive technology solutions,
can modernize your infrastructure and accelerate your digital transformation.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
                <Link,
href=&quot;/contact&quot; 
                  className=&quot;px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Get IT Consultation
                </Link>
                <a,
href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className=&quot;px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Call {contact.phone}
                </Link>
                <a,
href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"                  href={_`tel:${contact.phone.replace(/[^\d+]/g, _'')}`} 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a,
href={_`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}