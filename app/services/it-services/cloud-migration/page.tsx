// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Smartphone,
  Heart,
  Building,
  CreditCard,
  Globe,
  MessageSquare,
  TrendingUp,
  Settings,
  Bell,
  Video,
  Camera,
  Mic,
  Eye,
  Lock,
  Activity,
  PieChart,
  Award,
  Rocket,
  Brain,
  Code,
  Network,
  Monitor,
  Users,
  Cpu,
  AlertTriangle,
  CheckSquare,
  Search,
  Clock,
  Layers,
  GitBranch,
  Container,
  Key,
  Wrench
} from 'lucide-react';

export default function CloudMigrationPage() {
  const title = 'Cloud Migration Services — Zion Tech Group';
  const description = 'Expert cloud migration services for AWS, Azure, and GCP. Seamless infrastructure migration with zero downtime and cost optimization.';

  const features = [
    {
      name: 'Zero-Downtime Migration',
      description: 'Seamless migration without business interruption',
      icon: Zap,
      details: [
        'Blue-green deployment strategies',
        'Database replication and synchronization',
        'Load balancer configuration',
        'Rollback procedures and disaster recovery'
      ]
    },
    {
      name: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud strategy across AWS, Azure, and GCP',
      icon: Cloud,
      details: [
        'Cloud provider evaluation and selection',
        'Hybrid cloud architecture design',
        'Multi-cloud cost optimization',
        'Cloud-agnostic application design'
      ]
    },
    {
      name: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      icon: Code,
      details: [
        'Terraform and CloudFormation templates',
        'Infrastructure version control',
        'Automated deployment pipelines',
        'Configuration management with Ansible'
      ]
    },
    {
      name: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance implementation',
      icon: Shield,
      details: [
        'Identity and access management (IAM)',
        'Network security and VPC configuration',
        'Data encryption and key management',
        'Compliance auditing and reporting'
      ]
    },
    {
      name: 'Cost Optimization',
      description: 'Intelligent cost management and optimization strategies',
      icon: TrendingUp,
      details: [
        'Right-sizing recommendations',
        'Reserved instance planning',
        'Spot instance utilization',
        'Cost monitoring and alerting'
      ]
    },
    {
      name: 'Performance Monitoring',
      description: 'Comprehensive monitoring and observability setup',
      icon: BarChart3,
      details: [
        'Application performance monitoring (APM)',
        'Infrastructure monitoring and alerting',
        'Log aggregation and analysis',
        'Custom dashboards and reporting'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Assessment & Planning',
      price: '$2,500',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud readiness assessment',
        'Migration strategy and roadmap',
        'Cost estimation and ROI analysis',
        'Security and compliance review',
        'Risk assessment and mitigation plan'
      ],
      marketPrice: '$4,000',
      savings: '38%'
    },
    {
      name: 'Small Business Migration',
      price: '$8,500',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Up to 10 servers migration',
        'Database migration and optimization',
        'Application refactoring',
        'Security implementation',
        'Performance optimization',
        '30 days post-migration support',
        'Training and documentation'
      ],
      marketPrice: '$15,000',
      savings: '43%'
    },
    {
      name: 'Enterprise Migration',
      price: '$25,000',
      description: 'Large-scale enterprise migration with advanced features',
      features: [
        'Unlimited servers and applications',
        'Complex multi-tier architecture migration',
        'Custom cloud architecture design',
        'Advanced security and compliance',
        'High availability and disaster recovery',
        '90 days post-migration support',
        'Dedicated migration team',
        'Custom training and documentation'
      ],
      marketPrice: '$45,000',
      savings: '44%'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Infrastructure Costs by 40%',
      description: 'Optimized cloud resources and right-sizing reduce operational expenses',
      icon: TrendingUp
    },
    {
      title: 'Improve Scalability',
      description: 'Auto-scaling capabilities handle traffic spikes and growth seamlessly',
      icon: Zap
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security features protect your data and applications',
      icon: Shield
    },
    {
      title: 'Zero Downtime',
      description: 'Seamless migration process ensures continuous business operations',
      icon: CheckCircle
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      icon: Cloud,
      features: [
        'EC2, RDS, S3, Lambda services',
        'Auto Scaling Groups',
        'CloudFormation templates',
        'AWS Security Hub integration'
      ],
      certifications: 'AWS Certified Solutions Architect'
    },
    {
      name: 'Microsoft Azure',
      icon: Server,
      features: [
        'Virtual Machines, SQL Database, Blob Storage',
        'Azure Resource Manager',
        'ARM templates',
        'Azure Security Center'
      ],
      certifications: 'Azure Solutions Architect Expert'
    },
    {
      name: 'Google Cloud Platform (GCP)',
      icon: Database,
      features: [
        'Compute Engine, Cloud SQL, Cloud Storage',
        'Kubernetes Engine (GKE)',
        'Deployment Manager',
        'Cloud Security Command Center'
      ],
      certifications: 'Google Cloud Professional Architect'
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Analyze current infrastructure and create migration strategy',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Design & Architecture',
      description: 'Design target cloud architecture and security framework',
      duration: '1-2 weeks'
    },
    {
      step: '3',
      title: 'Pilot Migration',
      description: 'Migrate non-critical workloads to validate approach',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Full Migration',
      description: 'Migrate all applications and data with zero downtime',
      duration: '2-4 weeks'
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Optimize performance, costs, and security post-migration',
      duration: '1-2 weeks'
    }
  ];

  const caseStudies = [
    {
      client: 'TechCorp Solutions',
      industry: 'Software Development',
      servers: '25 servers migrated',
      results: [
        '45% reduction in infrastructure costs',
        '99.9% uptime during migration',
        'Zero data loss or security incidents',
        'ROI achieved in 8 months'
      ]
    },
    {
      client: 'Manufacturing Plus',
      industry: 'Manufacturing',
      servers: '50 servers migrated',
      results: [
        '60% improvement in application performance',
        '50% reduction in infrastructure costs',
        'Zero business disruption',
        'Enhanced disaster recovery capabilities'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, infrastructure migration, cloud consulting" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/it-services/cloud-migration" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services/cloud-migration" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Migration
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert cloud migration services for AWS, Azure, and GCP. Seamless infrastructure migration 
              with zero downtime, cost optimization, and enhanced security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Migration Quote
              </Link>
              <Link to="#pricing" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Cloud Providers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Multi-Cloud Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <provider.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{provider.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-blue-600 font-semibold">
                    {provider.certifications}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Migration Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Proven Migration Process
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="text-xs text-blue-600 font-semibold">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comprehensive Migration Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transparent Pricing with Market-Beating Rates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-sm border-2 ${
                  tier.name === 'Small Business Migration' ? 'border-blue-500 relative' : 'border-gray-100'
                }`}>
                  {tier.name === 'Small Business Migration' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-sm text-gray-500 line-through">{tier.marketPrice}</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {tier.savings}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    tier.name === 'Small Business Migration'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Success Stories from Industry Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.client}</h3>
                  <p className="text-gray-600 mb-4">{study.industry} • {study.servers}</p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses that have successfully migrated to the cloud with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Migration Quote
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}