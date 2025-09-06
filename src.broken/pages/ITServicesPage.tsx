<<<<<<< HEAD
import React from 'react',
import { 
  Server,
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Star,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Monitor,
  Lock,
  Users,
  BarChart3
} from 'lucide-react',

export default function ITServicesPage() {
  const itServices = [
    {
      name: &quot;Cloud Migration & Optimization&quot;,
      description: &quot;End-to-end cloud migration services with strategic planning, cost optimization, and performance tuning for maximum ROI.&quot;,
      icon: <Cloud className=&quot;w-12 h-12 text-blue-500&quot; />,
      features: [
        &quot;Multi-cloud strategy development&quot;,
        &quot;Cost optimization and monitoring&quot;,
        &quot;Security compliance implementation&quot;,
        &quot;Performance tuning and optimization&quot;,
        &quot;24/7 monitoring and alerting&quot;,
        &quot;Disaster recovery planning&quot;,
        &quot;Data migration and validation&quot;,
        &quot;Team training and documentation&quot;
      ],
      pricing: {
        small: &quot;From $2,500&quot;,
        medium: &quot;From $5,000&quot;,
        enterprise: &quot;From $15,000&quot;
      },
      marketPrice: &quot;$5,000-15,000&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Mid-size companies&quot;, &quot;Startups&quot;, &quot;Healthcare&quot;, &quot;Financial services&quot;],
      benefits: [
        &quot;Reduced infrastructure costs&quot;,
        &quot;Improved scalability&quot;,
        &quot;Enhanced security posture&quot;,
        &quot;Better performance&quot;,
        &quot;Operational efficiency&quot;
      ],
      website: &quot;https://ziontechgroup.com/cloud-migration&quot;
    },
    {
      name: &quot;DevOps Automation Platform&quot;,
      description: &quot;Complete CI/CD pipeline automation with infrastructure as code, monitoring solutions, and security integration.&quot;,
      icon: <Code className=&quot;w-12 h-12 text-green-500&quot; />,
      features: [
        &quot;CI/CD pipeline automation&quot;,
        &quot;Infrastructure as Code (IaC)&quot;,
        &quot;Container orchestration&quot;,
        &quot;Monitoring and alerting&quot;,
        &quot;Security scanning integration&quot;,
        &quot;Auto-scaling capabilities&quot;,
        &quot;Configuration management&quot;,
        &quot;Performance optimization&quot;
      ],
      pricing: {
        starter: &quot;$599/month&quot;,
        professional: &quot;$1,199/month&quot;,
        enterprise: &quot;$2,499/month&quot;
      },
      marketPrice: &quot;$800-1500/month&quot;,
      useCases: [&quot;Development teams&quot;, &quot;Tech companies&quot;, &quot;Enterprises&quot;, &quot;Startups&quot;, &quot;DevOps teams&quot;],
      benefits: [
        &quot;Faster deployment cycles&quot;,
        &quot;Reduced manual errors&quot;,
        &quot;Improved collaboration&quot;,
        &quot;Better resource utilization&quot;,
        &quot;Enhanced security&quot;
      ],
      website: &quot;https://ziontechgroup.com/devops-automation&quot;
    },
    {
      name: &quot;Cybersecurity Assessment & Implementation&quot;,
      description: &quot;Comprehensive security audits, penetration testing, and security infrastructure deployment with compliance frameworks.&quot;,
      icon: <Shield className=&quot;w-12 h-12 text-red-500&quot; />,
      features: [
        &quot;Security audits and assessments&quot;,
        &quot;Penetration testing&quot;,
        &quot;Compliance framework implementation&quot;,
        &quot;Incident response planning&quot;,
        &quot;Security awareness training&quot;,
        &quot;Vulnerability management&quot;,
        &quot;Security monitoring setup&quot;,
        &quot;Compliance reporting&quot;
      ],
      pricing: {
        basic: &quot;From $3,500&quot;,
        comprehensive: &quot;From $7,500&quot;,
        enterprise: &quot;From $20,000&quot;
      },
      marketPrice: &quot;$7,000-20,000&quot;,
      useCases: [&quot;Financial services&quot;, &quot;Healthcare&quot;, &quot;Government&quot;, &quot;Enterprises&quot;, &quot;E-commerce&quot;],
      benefits: [
        &quot;Reduced security risks&quot;,
        &quot;Compliance assurance&quot;,
        &quot;Improved incident response&quot;,
        &quot;Enhanced customer trust&quot;,
        &quot;Cost-effective security&quot;
      ],
      website: &quot;https://ziontechgroup.com/cybersecurity&quot;
    },
    {
      name: &quot;Network Infrastructure Design&quot;,
      description: &quot;Scalable network architecture design with high availability, security, and performance optimization.&quot;,
      icon: <Network className=&quot;w-12 h-12 text-purple-500&quot; />,
      features: [
        &quot;Network architecture design&quot;,
        &quot;High availability setup&quot;,
        &quot;Security implementation&quot;,
        &quot;Performance optimization&quot;,
        &quot;Load balancing configuration&quot;,
        &quot;Network monitoring&quot;,
        &quot;Documentation and training&quot;,
        &quot;Ongoing support&quot;
      ],
      pricing: {
        small: &quot;From $4,000&quot;,
        medium: &quot;From $8,000&quot;,
        enterprise: &quot;From $25,000&quot;
      },
      marketPrice: &quot;$8,000-30,000&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Data centers&quot;, &quot;Cloud providers&quot;, &quot;Educational institutions&quot;, &quot;Healthcare&quot;],
      benefits: [
        &quot;Improved network performance&quot;,
        &quot;Enhanced security&quot;,
        &quot;Better scalability&quot;,
        &quot;Reduced downtime&quot;,
        &quot;Operational efficiency&quot;
      ],
      website: &quot;https://ziontechgroup.com/network-infrastructure&quot;
    },
    {
      name: &quot;Database Design & Optimization&quot;,
      description: &quot;Database architecture design, performance tuning, and migration services for optimal data management.&quot;,
      icon: <Database className=&quot;w-12 h-12 text-orange-500&quot; />,
      features: [
        &quot;Database architecture design&quot;,
        &quot;Performance tuning and optimization&quot;,
        &quot;Data migration services&quot;,
        &quot;Backup and recovery setup&quot;,
        &quot;Security implementation&quot;,
        &quot;Monitoring and alerting&quot;,
        &quot;Scalability planning&quot;,
        &quot;Maintenance procedures&quot;
      ],
      pricing: {
        consultation: &quot;From $1,500&quot;,
        implementation: &quot;From $5,000&quot;,
        enterprise: &quot;From $15,000&quot;
      },
      marketPrice: &quot;$3,000-20,000&quot;,
      useCases: [&quot;E-commerce platforms&quot;, &quot;SaaS companies&quot;, &quot;Enterprises&quot;, &quot;Financial services&quot;, &quot;Healthcare&quot;],
      benefits: [
        &quot;Improved data performance&quot;,
        &quot;Enhanced data security&quot;,
        &quot;Better scalability&quot;,
        &quot;Reduced maintenance costs&quot;,
        &quot;Improved reliability&quot;
      ],
      website: &quot;https://ziontechgroup.com/database-services&quot;
    },
    {
      name: &quot;IT Infrastructure Management&quot;,
      description: &quot;Comprehensive IT infrastructure management with proactive monitoring, maintenance, and optimization services.&quot;,
      icon: <Server className=&quot;w-12 h-12 text-indigo-500&quot; />,
      features: [
        &quot;24/7 infrastructure monitoring&quot;,
        &quot;Proactive maintenance&quot;,
        &quot;Performance optimization&quot;,
        &quot;Security updates&quot;,
        &quot;Backup management&quot;,
        &quot;Disaster recovery&quot;,
        &quot;Capacity planning&quot;,
        &quot;Vendor management&quot;
      ],
      pricing: {
        basic: &quot;$799/month&quot;,
        professional: &quot;$1,599/month&quot;,
        enterprise: &quot;$3,199/month&quot;
      },
      marketPrice: &quot;$1,200-3,500/month&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Mid-size companies&quot;, &quot;Healthcare&quot;, &quot;Financial services&quot;, &quot;Educational institutions&quot;],
      benefits: [
        &quot;Reduced downtime&quot;,
        &quot;Lower operational costs&quot;,
        &quot;Improved performance&quot;,
        &quot;Enhanced security&quot;,
        &quot;Peace of mind&quot;
      ],
      website: &quot;https://ziontechgroup.com/infrastructure-management&quot;
    }
  ],

  const additionalServices = [
    {
      name: &quot;API Development & Integration&quot;,
      description: &quot;Custom API development and third-party system integration services.&quot;,
      pricing: &quot;From $2,500&quot;,
      icon: <Code className=&quot;w-8 h-8 text-blue-400&quot; />
    },
    {
      name: &quot;Data Backup & Recovery&quot;,
      description: &quot;Comprehensive backup solutions and disaster recovery planning.&quot;,
      pricing: &quot;From $299/month&quot;,
      icon: <Database className=&quot;w-8 h-8 text-green-400&quot; />
    },
    {
      name: &quot;Performance Monitoring&quot;,
      description: &quot;Real-time performance monitoring and optimization services.&quot;,
      pricing: &quot;From $199/month&quot;,
      icon: <Monitor className=&quot;w-8 h-8 text-purple-400&quot; />
    },
    {
      name: &quot;IT Consulting&quot;,
      description: &quot;Strategic IT consulting and technology roadmap planning.&quot;,
      pricing: &quot;From $150/hour&quot;,
      icon: <Users className=&quot;w-8 h-8 text-orange-400&quot; />
    }
  ],

  const stats = [
<<<<<<< HEAD
    { label: "Infrastructure Deployed", value: "200+" },
    { label: "Security Audits", value: "150+" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Client Satisfaction", value: "97%" }
  ],
=======
    { label: &quot;Infrastructure Deployed&quot;, value: &quot;200+&quot; },
    { label: &quot;Security Audits&quot;, value: &quot;150+&quot; },
    { label: &quot;Uptime Guarantee&quot;, value: &quot;99.9%&quot; },
    { label: &quot;Client Satisfaction&quot;, value: &quot;97%&quot; }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white&quot;>
      {/* Hero Section */}
      <div className=&quot;relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;flex justify-center mb-6&quot;>
              <Server className=&quot;w-20 h-20 text-blue-400&quot; />
            </div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
              IT Infrastructure & DevOps Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Enterprise-grade IT solutions that drive operational excellence, security, and scalability. From cloud migration to cybersecurity, we build robust technology foundations.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
              >
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                <span>Call Now: +1 302 464 0950</span>
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Inquiry&quot;
                className=&quot;inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors&quot;
              >
                <Mail className=&quot;w-5 h-5 mr-2&quot; />
                <span>Get IT Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-blue-400 mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-gray-300 text-sm&quot;>{stat.label}</div>
            </div>
=======
import React from 'react',;
import {;
  Server,;
  Cloud,;
  Shield,;
  Code,;
  Database,;
  Network,;
  Cpu,;
  Zap,;
  CheckCircle,;
  Star,;
  ExternalLink,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  Linkedin,;
  Twitter,;
  Github,;
  Monitor,;
  Lock,;
  Users,;
  BarChart3;
} from 'lucide-react',;
export default function ITServicesPage() {;
  const itServices = [;
    {;
      name: "Cloud Migration & Optimization",;
      description: "End-to-end cloud migration services with strategic planning, cost optimization, and performance tuning for maximum ROI.",;
      icon: <Cloud className="w-12 h-12 text-blue-500" />,;
      features: [;
        "Multi-cloud strategy development",;
        "Cost optimization and monitoring",;
        "Security compliance implementation",;
        "Performance tuning and optimization",;
        "24/7 monitoring and alerting",;
        "Disaster recovery planning",;
        "Data migration and validation",;
        "Team training and documentation";
      ],;
      pricing: {;
        small: "From $2,500",;
        medium: "From $5,000",;
        enterprise: "From $15,000";
      },;
      marketPrice: "$5,000-15,000",;
      useCases: ["Enterprises", "Mid-size companies", "Startups", "Healthcare", "Financial services"],;
      benefits: [;
        "Reduced infrastructure costs",;
        "Improved scalability",;
        "Enhanced security posture",;
        "Better performance",;
        "Operational efficiency";
      ],;
      website: "https://ziontechgroup.com/cloud-migration";
    },;
    {;
      name: "DevOps Automation Platform",;
      description: "Complete CI/CD pipeline automation with infrastructure as code, monitoring solutions, and security integration.",;
      icon: <Code className="w-12 h-12 text-green-500" />,;
      features: [;
        "CI/CD pipeline automation",;
        "Infrastructure as Code (IaC)",;
        "Container orchestration",;
        "Monitoring and alerting",;
        "Security scanning integration",;
        "Auto-scaling capabilities",;
        "Configuration management",;
        "Performance optimization";
      ],;
      pricing: {;
        starter: "$599/month",;
        professional: "$1,199/month",;
        enterprise: "$2,499/month";
      },;
      marketPrice: "$800-1500/month",;
      useCases: ["Development teams", "Tech companies", "Enterprises", "Startups", "DevOps teams"],;
      benefits: [;
        "Faster deployment cycles",;
        "Reduced manual errors",;
        "Improved collaboration",;
        "Better resource utilization",;
        "Enhanced security";
      ],;
      website: "https://ziontechgroup.com/devops-automation";
    },;
    {;
      name: "Cybersecurity Assessment & Implementation",;
      description: "Comprehensive security audits, penetration testing, and security infrastructure deployment with compliance frameworks.",;
      icon: <Shield className="w-12 h-12 text-red-500" />,;
      features: [;
        "Security audits and assessments",;
        "Penetration testing",;
        "Compliance framework implementation",;
        "Incident response planning",;
        "Security awareness training",;
        "Vulnerability management",;
        "Security monitoring setup",;
        "Compliance reporting";
      ],;
      pricing: {;
        basic: "From $3,500",;
        comprehensive: "From $7,500",;
        enterprise: "From $20,000";
      },;
      marketPrice: "$7,000-20,000",;
      useCases: ["Financial services", "Healthcare", "Government", "Enterprises", "E-commerce"],;
      benefits: [;
        "Reduced security risks",;
        "Compliance assurance",;
        "Improved incident response",;
        "Enhanced customer trust",;
        "Cost-effective security";
      ],;
      website: "https://ziontechgroup.com/cybersecurity";
    },;
    {;
      name: "Network Infrastructure Design",;
      description: "Scalable network architecture design with high availability, security, and performance optimization.",;
      icon: <Network className="w-12 h-12 text-purple-500" />,;
      features: [;
        "Network architecture design",;
        "High availability setup",;
        "Security implementation",;
        "Performance optimization",;
        "Load balancing configuration",;
        "Network monitoring",;
        "Documentation and training",;
        "Ongoing support";
      ],;
      pricing: {;
        small: "From $4,000",;
        medium: "From $8,000",;
        enterprise: "From $25,000";
      },;
      marketPrice: "$8,000-30,000",;
      useCases: ["Enterprises", "Data centers", "Cloud providers", "Educational institutions", "Healthcare"],;
      benefits: [;
        "Improved network performance",;
        "Enhanced security",;
        "Better scalability",;
        "Reduced downtime",;
        "Operational efficiency";
      ],;
      website: "https://ziontechgroup.com/network-infrastructure";
    },;
    {;
      name: "Database Design & Optimization",;
      description: "Database architecture design, performance tuning, and migration services for optimal data management.",;
      icon: <Database className="w-12 h-12 text-orange-500" />,;
      features: [;
        "Database architecture design",;
        "Performance tuning and optimization",;
        "Data migration services",;
        "Backup and recovery setup",;
        "Security implementation",;
        "Monitoring and alerting",;
        "Scalability planning",;
        "Maintenance procedures";
      ],;
      pricing: {;
        consultation: "From $1,500",;
        implementation: "From $5,000",;
        enterprise: "From $15,000";
      },;
      marketPrice: "$3,000-20,000",;
      useCases: ["E-commerce platforms", "SaaS companies", "Enterprises", "Financial services", "Healthcare"],;
      benefits: [;
        "Improved data performance",;
        "Enhanced data security",;
        "Better scalability",;
        "Reduced maintenance costs",;
        "Improved reliability";
      ],;
      website: "https://ziontechgroup.com/database-services";
    },;
    {;
      name: "IT Infrastructure Management",;
      description: "Comprehensive IT infrastructure management with proactive monitoring, maintenance, and optimization services.",;
      icon: <Server className="w-12 h-12 text-indigo-500" />,;
      features: [;
        "24/7 infrastructure monitoring",;
        "Proactive maintenance",;
        "Performance optimization",;
        "Security updates",;
        "Backup management",;
        "Disaster recovery",;
        "Capacity planning",;
        "Vendor management";
      ],;
      pricing: {;
        basic: "$799/month",;
        professional: "$1,599/month",;
        enterprise: "$3,199/month";
      },;
      marketPrice: "$1,200-3,500/month",;
      useCases: ["Enterprises", "Mid-size companies", "Healthcare", "Financial services", "Educational institutions"],;
      benefits: [;
        "Reduced downtime",;
        "Lower operational costs",;
        "Improved performance",;
        "Enhanced security",;
        "Peace of mind";
      ],;
      website: "https://ziontechgroup.com/infrastructure-management";
    }
  ],;
  const additionalServices = [;
    {;
      name: "API Development & Integration",;
      description: "Custom API development and third-party system integration services.",;
      pricing: "From $2,500",;
      icon: <Code className="w-8 h-8 text-blue-400" />;
    },;
    {;
      name: "Data Backup & Recovery",;
      description: "Comprehensive backup solutions and disaster recovery planning.",;
      pricing: "From $299/month",;
      icon: <Database className="w-8 h-8 text-green-400" />;
    },;
    {;
      name: "Performance Monitoring",;
      description: "Real-time performance monitoring and optimization services.",;
      pricing: "From $199/month",;
      icon: <Monitor className="w-8 h-8 text-purple-400" />;
    },;
    {;
      name: "IT Consulting",;
      description: "Strategic IT consulting and technology roadmap planning.",;
      pricing: "From $150/hour",;
      icon: <Users className="w-8 h-8 text-orange-400" />;
    }
  ],;
  const stats = [;
    { label: "Infrastructure Deployed", value: "200+" },;
    { label: "Security Audits", value: "150+" },;
    { label: "Uptime Guarantee", value: "99.9%" };
    { label: "Client Satisfaction", value: "97%" }
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <div className="flex justify-center mb-6">;
              <Server className="w-20 h-20 text-blue-400" />;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">;
              IT Infrastructure & DevOps Services;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Enterprise-grade IT solutions that drive operational excellence, security, and scalability. From cloud migration to cybersecurity, we build robust technology foundations.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <a;
                href="tel:+13024640950";
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                <span>Call Now: +1 302 464 0950</span>;
              </a>;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Inquiry";
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                <span>Get IT Consultation</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
          {stats.map((stat, index) => (;
            <div key={index} className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>;
              <div className="text-gray-300 text-sm">{stat.label}</div>;
            </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      </div>;
      {/* IT Services Grid */}
<<<<<<< HEAD
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Our IT Service Portfolio
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Comprehensive IT solutions designed to modernize infrastructure, enhance security, and drive operational efficiency.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
          {itServices.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-center gap-4&quot;>
                  {service.icon}
                  <h3 className=&quot;text-2xl font-bold text-white&quot;>{service.name}</h3>
                </div>
                
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
                
                <div className=&quot;space-y-4&quot;>
                  <div>
                    <h4 className=&quot;text-lg font-semibold text-blue-400 mb-3&quot;>Key Features:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center gap-2 text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Our IT Service Portfolio;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Comprehensive IT solutions designed to modernize infrastructure, enhance security, and drive operational efficiency.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
          {itServices.map((service, index) => (;
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">;
              <div className="space-y-6">;
                <div className="flex items-center gap-4">;
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>;
                </div>;
                <p className="text-gray-300 leading-relaxed">{service.description}</p>;
                <div className="space-y-4">;
                  <div>;
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>;
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">;
                      {service.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          {feature}
                        </li>;
                      ))}
<<<<<<< HEAD
                    </ul>
                  </div>

                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                    <div>
                      <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Pricing:</h4>
                      <div className=&quot;space-y-1&quot;>
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className=&quot;flex justify-between text-sm&quot;>
                            <span className=&quot;text-gray-400 capitalize&quot;>{plan}:</span>
                            <span className=&quot;text-green-400 font-semibold&quot;>{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className=&quot;mt-2 text-xs text-gray-400&quot;>
                        Market price: <span className=&quot;line-through&quot;>{service.marketPrice}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Best For:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className=&quot;text-xs text-gray-300&quot;>• {useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Key Benefits:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-1&quot;>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=&quot;text-xs text-gray-300&quot;>• {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className=&quot;pt-4 border-t border-white/20&quot;>
                    <div className=&quot;flex gap-3&quot;>
                      <a 
                        href={service.website}
                        className=&quot;flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors&quot;
                      >
                        <span>Learn More</span>
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                      <a 
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className=&quot;inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-medium transition-colors&quot;
                      >
                        <span>Get Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
                    </ul>;
                  </div>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                    <div>;
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing:</h4>;
                      <div className="space-y-1">;
                        {Object.entries(service.pricing).map(([plan, price]) => (;
                          <div key={plan} className="flex justify-between text-sm">;
                            <span className="text-gray-400 capitalize">{plan}:</span>;
                            <span className="text-green-400 font-semibold">{price}</span>;
                          </div>;
                        ))}
                      </div>;
                      <div className="mt-2 text-xs text-gray-400">;
                        Market price: <span className="line-through">{service.marketPrice}</span>;
                      </div>;
                    </div>;
                    <div>;
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>;
                      <ul className="space-y-1">;
                        {service.useCases.map((useCase, useCaseIndex) => (;
                          <li key={useCaseIndex} className="text-xs text-gray-300">• {useCase}</li>;
                        ))}
                      </ul>;
                    </div>;
                  </div>;
                  <div>;
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>;
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">;
                      {service.benefits.map((benefit, benefitIndex) => (;
                        <li key={benefitIndex} className="text-xs text-gray-300">• {benefit}</li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="pt-4 border-t border-white/20">;
                    <div className="flex gap-3">;
                      <a;
                        href={service.website}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors";
                      >;
                        <span>Learn More</span>;
                        <ExternalLink className="w-4 h-4" />;
                      </a>;
                      <a;
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-medium transition-colors";
                      >;
                        <span>Get Quote</span>;
                      </a>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      </div>;
      {/* Additional Services */}
<<<<<<< HEAD
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Additional IT Services
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Specialized IT services to complement your technology infrastructure and support your business growth.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {additionalServices.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300&quot;>
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;flex justify-center&quot;>
                  {service.icon}
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>{service.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{service.description}</p>
                <div className=&quot;text-blue-400 font-semibold&quot;>{service.pricing}</div>
                <a 
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className=&quot;inline-block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors text-center&quot;
                >
                  Get Quote
                </Link>
              </div>
            </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Additional IT Services;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Specialized IT services to complement your technology infrastructure and support your business growth.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {additionalServices.map((service, index) => (;
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">;
              <div className="text-center space-y-4">;
                <div className="flex justify-center">;
                  {service.icon}
                </div>;
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>;
                <p className="text-gray-300 text-sm">{service.description}</p>;
                <div className="text-blue-400 font-semibold">{service.pricing}</div>;
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className="inline-block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors text-center";
                >;
                  Get Quote;
                </a>;
              </div>;
            </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      </div>;
      {/* Why Choose Zion Tech Group */}
<<<<<<< HEAD
      <div className=&quot;bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-12&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
              Why Choose Zion Tech Group for IT Solutions?
            </h2>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Zap className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>Proven Expertise</h3>
                <p className=&quot;text-gray-300&quot;>
                  Years of experience in enterprise IT infrastructure, cloud technologies, and cybersecurity.
                </p>
              </div>
              
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Shield className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>Security First</h3>
                <p className=&quot;text-gray-300&quot;>
                  Security-first approach with industry best practices and compliance frameworks.
                </p>
              </div>
              
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Star className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>24/7 Support</h3>
                <p className=&quot;text-gray-300&quot;>
                  Round-the-clock monitoring, support, and maintenance for your critical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & CTA Section */}
      <div className=&quot;bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-8&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Let's discuss how our IT solutions can enhance your operational efficiency, security posture, and business scalability.
            </p>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;>
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Phone className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Call Us</h3>
                <p className=&quot;text-gray-300&quot;>+1 302 464 0950</p>
                <p className=&quot;text-sm text-gray-400&quot;>Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Mail className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Email Us</h3>
                <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com</p>
                <p className=&quot;text-sm text-gray-400&quot;>Response within 2 hours</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <MapPin className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Visit Us</h3>
                <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008</p>
                <p className=&quot;text-sm text-gray-400&quot;>Middletown, DE 19709</p>
              </div>
            </div>

            <div className=&quot;pt-8&quot;>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Consultation%20-%20Zion%20Tech%20Group&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                <span>Start Your IT Transformation</span>
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="bg-gray-900 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
=======
      <footer className=&quot;bg-gray-900 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;space-y-4&quot;>
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Zion Tech Group</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Enterprise-grade IT solutions that drive operational excellence and business growth.
              </p>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>IT Services</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/cloud-migration&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Cloud Migration</Link></li>
                <li><a href=&quot;/devops-automation&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>DevOps Automation</Link></li>
                <li><a href=&quot;/cybersecurity&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Cybersecurity</Link></li>
                <li><a href=&quot;/network-infrastructure&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Network Design</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Company</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/about&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>About Us</Link></li>
                <li><a href=&quot;/contact&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Contact</Link></li>
                <li><a href=&quot;/careers&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Careers</Link></li>
                <li><a href=&quot;/blog&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Blog</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Connect</h4>
              <div className=&quot;flex space-x-4&quot;>
                <a href=&quot;https://linkedin.com/company/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Linkedin className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://twitter.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Twitter className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://github.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Github className=&quot;w-5 h-5&quot; />
                </Link>
              </div>
            </div>
          </div>
          
          <div className=&quot;border-t border-white/20 mt-8 pt-8 text-center&quot;>
            <p className=&quot;text-gray-400 text-sm&quot;>
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href=&quot;/privacy&quot; className=&quot;hover:text-blue-400 transition-colors ml-2&quot;>Privacy Policy</Link> | 
              <a href=&quot;/terms&quot; className=&quot;hover:text-blue-400 transition-colors ml-2&quot;>Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
=======
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center space-y-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white">;
              Why Choose Zion Tech Group for IT Solutions?;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <div className="text-center space-y-4">;
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">;
                  <Zap className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white">Proven Expertise</h3>;
                <p className="text-gray-300">;
                  Years of experience in enterprise IT infrastructure, cloud technologies, and cybersecurity.;
                </p>;
              </div>;
              <div className="text-center space-y-4">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">;
                  <Shield className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white">Security First</h3>;
                <p className="text-gray-300">;
                  Security-first approach with industry best practices and compliance frameworks.;
                </p>;
              </div>;
              <div className="text-center space-y-4">;
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">;
                  <Star className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white">24/7 Support</h3>;
                <p className="text-gray-300">;
                  Round-the-clock monitoring, support, and maintenance for your critical infrastructure.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Contact & CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center space-y-8">;
            <h2 className="text-3xl md:text-4xl font-bold text-white">;
              Ready to Modernize Your IT Infrastructure?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Let's discuss how our IT solutions can enhance your operational efficiency, security posture, and business scalability.;
            </p>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center space-y-3">;
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">;
                  <Phone className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">Call Us</h3>;
                <p className="text-gray-300">+1 302 464 0950</p>;
                <p className="text-sm text-gray-400">Available Mon-Fri 9AM-6PM EST</p>;
              </div>;
              <div className="text-center space-y-3">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">;
                  <Mail className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">Email Us</h3>;
                <p className="text-gray-300">kleber@ziontechgroup.com</p>;
                <p className="text-sm text-gray-400">Response within 2 hours</p>;
              </div>;
              <div className="text-center space-y-3">;
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">;
                  <MapPin className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>;
                <p className="text-gray-300">364 E Main St STE 1008</p>;
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>;
              </div>;
            </div>;
            <div className="pt-8">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Consultation%20-%20Zion%20Tech%20Group";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105";
              >;
                <span>Start Your IT Transformation</span>;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
            <div className="space-y-4">;
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>;
              <p className="text-gray-400 text-sm">;
                Enterprise-grade IT solutions that drive operational excellence and business growth.;
              </p>;
            </div>;
            <div className="space-y-4">;
              <h4 className="text-md font-semibold text-white">IT Services</h4>;
              <ul className="space-y-2 text-sm text-gray-400">;
                <li><a href="/cloud-migration" className="hover:text-blue-400 transition-colors">Cloud Migration</a></li>;
                <li><a href="/devops-automation" className="hover:text-blue-400 transition-colors">DevOps Automation</a></li>;
                <li><a href="/cybersecurity" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>;
                <li><a href="/network-infrastructure" className="hover:text-blue-400 transition-colors">Network Design</a></li>;
              </ul>;
            </div>;
            <div className="space-y-4">;
              <h4 className="text-md font-semibold text-white">Company</h4>;
              <ul className="space-y-2 text-sm text-gray-400">;
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>;
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>;
                <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>;
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>;
              </ul>;
            </div>;
            <div className="space-y-4">;
              <h4 className="text-md font-semibold text-white">Connect</h4>;
              <div className="flex space-x-4">;
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                  <Linkedin className="w-5 h-5" />;
                </a>;
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                  <Twitter className="w-5 h-5" />;
                </a>;
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">;
                  <Github className="w-5 h-5" />;
                </a>;
              </div>;
            </div>;
          </div>;
          <div className="border-t border-white/20 mt-8 pt-8 text-center">;
            <p className="text-gray-400 text-sm">;
              © 2024 Zion Tech Group. All rights reserved. |;
              <a href="/privacy" className="hover:text-blue-400 transition-colors ml-2">Privacy Policy</a> |;
              <a href="/terms" className="hover:text-blue-400 transition-colors ml-2">Terms of Service</a>;
            </p>;
          </div>;
        </div>;
      </footer>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}