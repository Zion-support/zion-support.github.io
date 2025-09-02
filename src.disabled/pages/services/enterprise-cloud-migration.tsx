import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  DollarSign,
  ExternalLink,
  Play,
  Target,
  PieChart,
  Activity,
  Eye,
  Headphones,
  Mail,
  Phone,
  Settings,
  Clock,
  Users,
  BarChart3,
  Cpu,
  Network,
  Database,
  Lock,
  Monitor,
  HardDrive,
  Wifi
} from 'lucide-react';

export default function EnterpriseCloudMigration() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Strategy",
      description: "Comprehensive cloud migration strategy supporting AWS, Azure, GCP, and hybrid cloud environments with zero downtime."
    },
    {
      icon: Server,
      title: "Legacy System Modernization",
      description: "Transform legacy applications to cloud-native architectures with microservices and containerization."
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description: "Enterprise-grade security with compliance frameworks (SOC 2, ISO 27001, HIPAA) and zero-trust architecture."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Auto-scaling, load balancing, and performance tuning to ensure optimal cloud resource utilization."
    },
    {
      icon: Database,
      title: "Data Migration & Management",
      description: "Seamless data migration with real-time synchronization, backup strategies, and disaster recovery planning."
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring & Support",
      description: "Comprehensive monitoring, alerting, and 24/7 support with guaranteed SLA and incident response."
    }
  ];

  const pricingPlans = [
    {
      name: "Assessment & Planning",
      price: "$15,000",
      period: "one-time",
      description: "Comprehensive cloud readiness assessment",
      features: [
        "Cloud readiness assessment",
        "Cost optimization analysis",
        "Security & compliance review",
        "Migration roadmap & timeline",
        "Risk assessment & mitigation",
        "ROI projections"
      ],
      popular: false
    },
    {
      name: "Standard Migration",
      price: "$75,000",
      period: "project",
      description: "Complete cloud migration for mid-size organizations",
      features: [
        "Full application migration",
        "Data migration & synchronization",
        "Security implementation",
        "Performance optimization",
        "Staff training & documentation",
        "3 months post-migration support",
        "Monitoring & alerting setup"
      ],
      popular: true
    },
    {
      name: "Enterprise Migration",
      price: "$250,000+",
      period: "project",
      description: "Large-scale enterprise cloud transformation",
      features: [
        "Multi-cloud architecture design",
        "Legacy system modernization",
        "Advanced security & compliance",
        "Custom integration development",
        "Disaster recovery & backup",
        "12 months post-migration support",
        "Dedicated cloud architect",
        "SLA guarantee (99.9% uptime)"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce IT Costs by 40%",
      description: "Eliminate hardware costs, reduce maintenance overhead, and optimize cloud spending with our cost management strategies."
    },
    {
      icon: Zap,
      title: "Improve Performance by 60%",
      description: "Leverage cloud-native features like auto-scaling and CDN to deliver faster, more reliable applications."
    },
    {
      icon: Shield,
      title: "Enhanced Security & Compliance",
      description: "Implement enterprise-grade security with automated compliance monitoring and threat detection."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your infrastructure globally with multi-region deployment and edge computing capabilities."
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      challenge: "Legacy mainframe systems limiting scalability and innovation",
      solution: "Modernize core banking systems with cloud-native microservices and real-time data processing",
      result: "50% reduction in infrastructure costs, 99.99% uptime"
    },
    {
      industry: "Healthcare",
      challenge: "HIPAA compliance requirements and data security concerns",
      solution: "Secure cloud migration with end-to-end encryption and compliance automation",
      result: "40% faster patient data processing, 100% compliance"
    },
    {
      industry: "Manufacturing",
      challenge: "IoT data processing and real-time analytics needs",
      solution: "Edge-to-cloud architecture with real-time data streaming and AI analytics",
      result: "30% improvement in operational efficiency"
    },
    {
      industry: "Retail & E-commerce",
      challenge: "Seasonal traffic spikes and global expansion requirements",
      solution: "Auto-scaling cloud infrastructure with global CDN and multi-region deployment",
      result: "99.9% uptime during peak seasons, 60% faster page loads"
    }
  ];

  const technologies = [
    { name: "AWS", category: "Cloud Platform" },
    { name: "Microsoft Azure", category: "Cloud Platform" },
    { name: "Google Cloud", category: "Cloud Platform" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "Infrastructure as Code" },
    { name: "Ansible", category: "Configuration Management" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
    { name: "ELK Stack", category: "Logging" }
  ];

  const migrationPhases = [
    {
      phase: "1. Assessment & Planning",
      duration: "2-4 weeks",
      description: "Comprehensive analysis of current infrastructure, applications, and business requirements",
      deliverables: ["Cloud readiness report", "Migration strategy", "Cost analysis", "Risk assessment"]
    },
    {
      phase: "2. Design & Architecture",
      duration: "3-6 weeks",
      description: "Design cloud-native architecture and migration approach",
      deliverables: ["Architecture diagrams", "Security design", "Migration plan", "Testing strategy"]
    },
    {
      phase: "3. Migration Execution",
      duration: "8-16 weeks",
      description: "Execute migration with minimal downtime and comprehensive testing",
      deliverables: ["Migrated applications", "Data migration", "Security implementation", "Performance optimization"]
    },
    {
      phase: "4. Optimization & Support",
      duration: "3-12 months",
      description: "Continuous optimization, monitoring, and ongoing support",
      deliverables: ["Performance tuning", "Cost optimization", "24/7 monitoring", "Staff training"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert enterprise cloud migration services. AWS, Azure, GCP migration with zero downtime. Security-first approach with 24/7 support. Starting at $15,000." />
        <meta name="keywords" content="cloud migration, enterprise cloud, AWS migration, Azure migration, cloud consulting, infrastructure modernization" />
        <link rel="canonical" href="https://ziontechgroup.com/services/enterprise-cloud-migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Migration
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Cloud Migration</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with our expert cloud migration services. 
                Zero-downtime migration to AWS, Azure, or GCP with enterprise-grade security and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Migration Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our expert team delivers end-to-end cloud migration with zero downtime and maximum security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Phases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Proven methodology ensuring successful cloud migration with minimal risk
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationPhases.map((phase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                  <div className="mb-4">
                    <span className="text-blue-400 text-sm font-medium">Duration: {phase.duration}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Deliverables:</h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies & Platforms
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We work with leading cloud platforms and cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Impact
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See measurable results from your cloud migration investment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Success Stories
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how we've helped organizations across industries transform their infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{useCase.solution}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-green-400 mb-1">Result:</h4>
                    <p className="text-green-300 text-sm font-semibold">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Custom pricing based on your specific migration requirements and complexity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our cloud experts help you migrate to the cloud with zero downtime and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Migration Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}