import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrustedBySection } from '@/components/TrustedBySection';
import { QuoteFormSection } from '@/components/QuoteFormSection';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Network,
  HardDrive,
  Smartphone
} from 'lucide-react';

const cloudServices = [
  {
    id: 1,
    title: "Cloud Infrastructure Design & Migration",
    description: "Design and implement scalable cloud architectures with seamless migration from on-premises systems.",
    features: [
      "Multi-cloud strategy development",
      "Lift-and-shift migration planning",
      "Cloud-native architecture design",
      "Performance optimization",
      "Cost optimization strategies"
    ],
    price: 8500,
    currency: "$",
    duration: "8-12 weeks",
    icon: <Cloud className="w-8 h-8" />,
    category: "Cloud Architecture",
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve scalability and flexibility",
      "Enhanced disaster recovery",
      "Faster time to market"
    ]
  },
  {
    id: 2,
    title: "Multi-Cloud Strategy & Management",
    description: "Optimize performance and cost efficiency with strategic multi-cloud deployments across AWS, Azure, and GCP.",
    features: [
      "Multi-cloud architecture design",
      "Cloud provider selection",
      "Cost optimization across platforms",
      "Unified management dashboard",
      "Performance monitoring and optimization"
    ],
    price: 12000,
    currency: "$",
    duration: "12-16 weeks",
    icon: <Globe className="w-8 h-8" />,
    category: "Multi-Cloud",
    benefits: [
      "Avoid vendor lock-in",
      "Optimize costs across providers",
      "Improve reliability and uptime",
      "Leverage best-in-class services"
    ]
  },
  {
    id: 3,
    title: "Cloud Security & Compliance",
    description: "Secure your cloud infrastructure with enterprise-grade security measures and compliance frameworks.",
    features: [
      "Identity and access management (IAM)",
      "Data encryption and key management",
      "Security monitoring and alerting",
      "Compliance assessment and remediation",
      "Threat detection and response"
    ],
    price: 6800,
    currency: "$",
    duration: "6-10 weeks",
    icon: <Shield className="w-8 h-8" />,
    category: "Cloud Security",
    benefits: [
      "Meet industry compliance requirements",
      "Protect sensitive data",
      "Reduce security risks",
      "Build customer trust"
    ]
  },
  {
    id: 4,
    title: "DevOps & CI/CD Pipeline Setup",
    description: "Streamline software development with automated cloud-based CI/CD pipelines and DevOps practices.",
    features: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as Code (IaC)",
      "Automated testing and deployment",
      "Monitoring and logging setup",
      "DevOps team training and enablement"
    ],
    price: 7500,
    currency: "$",
    duration: "8-12 weeks",
    icon: <Zap className="w-8 h-8" />,
    category: "DevOps",
    benefits: [
      "Faster software delivery",
      "Improved code quality",
      "Reduced deployment risks",
      "Better team collaboration"
    ]
  },
  {
    id: 5,
    title: "Cloud Database & Storage Solutions",
    description: "Design and implement scalable database architectures and storage solutions for cloud environments.",
    features: [
      "Database architecture design",
      "Data migration and optimization",
      "Backup and disaster recovery",
      "Performance tuning and monitoring",
      "Scalability planning"
    ],
    price: 5500,
    currency: "$",
    duration: "6-8 weeks",
    icon: <Database className="w-8 h-8" />,
    category: "Data & Storage",
    benefits: [
      "Improved data performance",
      "Enhanced data security",
      "Better scalability",
      "Reduced maintenance overhead"
    ]
  },
  {
    id: 6,
    title: "Serverless Architecture & Functions",
    description: "Build scalable, cost-effective applications using serverless computing and function-as-a-service.",
    features: [
      "Serverless architecture design",
      "Function development and deployment",
      "API gateway configuration",
      "Event-driven architecture",
      "Cost optimization and monitoring"
    ],
    price: 4200,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Server className="w-8 h-8" />,
    category: "Serverless",
    benefits: [
      "Pay-per-use pricing model",
      "Automatic scaling",
      "Reduced operational overhead",
      "Faster development cycles"
    ]
  },
  {
    id: 7,
    title: "Cloud Monitoring & Observability",
    description: "Implement comprehensive monitoring, logging, and observability solutions for cloud environments.",
    features: [
      "Monitoring dashboard setup",
      "Log aggregation and analysis",
      "Performance metrics collection",
      "Alerting and notification systems",
      "Troubleshooting and debugging tools"
    ],
    price: 3800,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Server className="w-8 h-8" />,
    category: "Monitoring",
    benefits: [
      "Proactive issue detection",
      "Improved system reliability",
      "Better performance insights",
      "Reduced downtime"
    ]
  },
  {
    id: 8,
    title: "Edge Computing & CDN Optimization",
    description: "Deploy edge computing solutions and optimize content delivery for global applications.",
    features: [
      "Edge computing architecture design",
      "CDN configuration and optimization",
      "Global load balancing",
      "Performance optimization",
      "Geographic distribution planning"
    ],
    price: 4800,
    currency: "$",
    duration: "6-8 weeks",
    icon: <Network className="w-8 h-8" />,
    category: "Edge Computing",
    benefits: [
      "Improved global performance",
      "Reduced latency",
      "Better user experience",
      "Cost-effective global reach"
    ]
  }
];

const cloudPlatforms = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "IBM Cloud",
  "Oracle Cloud",
  "DigitalOcean",
  "Linode",
  "Vultr"
];

const cloudTechnologies = [
  "Kubernetes & Docker",
  "Terraform & Infrastructure as Code",
  "Jenkins & GitLab CI",
  "Prometheus & Grafana",
  "ELK Stack (Elasticsearch, Logstash, Kibana)",
  "Ansible & Chef",
  "AWS Lambda & Azure Functions",
  "Kubernetes Service Mesh"
];

const cloudServiceTypes = [
  "Compute & Virtual Machines",
  "Storage & Databases",
  "Networking & Load Balancing",
  "Security & Identity",
  "Monitoring & Logging",
  "AI & Machine Learning",
  "IoT & Edge Computing",
  "Serverless Computing"
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Network, 
  Monitor, 
  Zap, 
  Globe,
  Lock,
  BarChart3,
  Users,
  Building,
  Clock,
  CheckCircle,
  ArrowRight,
  Settings,
  PieChart,
  MessageSquare,
  FileText,
  Video,
  Camera,
  Rocket,
  TrendingUp,
  Target,
  Lightbulb,
  Code
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const CLOUD_SERVICES = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'End-to-end cloud migration services with strategic planning and execution',
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    features: ['Migration Assessment', 'Strategy Planning', 'Data Migration', 'Application Migration'],
    pricing: { starting: '$20,000', average: '$50,000', enterprise: '$120,000+' },
    category: 'Migration',
    badge: 'Foundation',
    link: '/services/cloud-migration',
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance'],
    timeline: '12-24 weeks'
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture Design',
    description: 'Scalable and secure cloud architecture solutions for enterprise applications',
    icon: <Building className="h-8 w-8 text-indigo-500" />,
    features: ['Architecture Design', 'Security Planning', 'Scalability Design', 'Performance Optimization'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Architecture',
    badge: 'Strategic',
    link: '/services/cloud-architecture',
    benefits: ['Optimized Performance', 'Enhanced Security', 'Cost Efficiency', 'Future Scalability'],
    timeline: '8-16 weeks'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    description: 'Comprehensive security solutions for cloud environments',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Security Assessment', 'Compliance Framework', 'Identity Management', 'Threat Detection'],
    pricing: { starting: '$12,000', average: '$28,000', enterprise: '$65,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/cloud-security',
    benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Mitigation', 'Customer Trust'],
    timeline: '6-12 weeks'
  },
  {
    id: 'cloud-optimization',
    title: 'Cloud Cost Optimization',
    description: 'Optimize cloud costs while maintaining performance and reliability',
    icon: <PieChart className="h-8 w-8 text-green-500" />,
    features: ['Cost Analysis', 'Resource Optimization', 'Reserved Instances', 'Monitoring & Alerts'],
    pricing: { starting: '$8,000', average: '$20,000', enterprise: '$45,000+' },
    category: 'Optimization',
    badge: 'Cost Effective',
    link: '/services/cloud-optimization',
    benefits: ['Reduced Cloud Costs', 'Better Resource Utilization', 'Improved ROI', 'Budget Control'],
    timeline: '4-8 weeks'
  },
  {
    id: 'cloud-monitoring',
    title: 'Cloud Monitoring & Management',
    description: '24/7 cloud infrastructure monitoring and proactive management',
    icon: <Monitor className="h-8 w-8 text-cyan-500" />,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Incident Response'],
    pricing: { starting: '$3,000', average: '$8,000', enterprise: '$20,000+' },
    category: 'Management',
    badge: 'Essential',
    link: '/services/cloud-monitoring',
    benefits: ['Proactive Issue Detection', 'Reduced Downtime', 'Better Performance', 'Peace of Mind'],
    timeline: '2-4 weeks'
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Strategy',
    description: 'Strategic multi-cloud solutions for vendor diversification and optimization',
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    features: ['Multi-cloud Assessment', 'Vendor Selection', 'Integration Strategy', 'Management Platform'],
    pricing: { starting: '$25,000', average: '$60,000', enterprise: '$150,000+' },
    category: 'Strategy',
    badge: 'Advanced',
    link: '/services/multi-cloud',
    benefits: ['Vendor Diversification', 'Best-in-class Services', 'Risk Mitigation', 'Cost Optimization'],
    timeline: '16-32 weeks'
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native Development',
    description: 'Modern cloud-native application development and deployment',
    icon: <Code className="h-8 w-8 text-orange-500" />,
    features: ['Microservices Architecture', 'Container Orchestration', 'DevOps Implementation', 'CI/CD Pipelines'],
    pricing: { starting: '$30,000', average: '$75,000', enterprise: '$180,000+' },
    category: 'Development',
    badge: 'Modern',
    link: '/services/cloud-native',
    benefits: ['Improved Scalability', 'Faster Deployment', 'Better Reliability', 'Reduced Costs'],
    timeline: '20-40 weeks'
  },
  {
    id: 'cloud-backup',
    title: 'Cloud Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions in the cloud',
    icon: <Database className="h-8 w-8 text-teal-500" />,
    features: ['Backup Strategy', 'Automated Backups', 'Disaster Recovery', 'Testing & Validation'],
    pricing: { starting: '$8,000', average: '$18,000', enterprise: '$45,000+' },
    category: 'Recovery',
    badge: 'Critical',
    link: '/services/cloud-backup',
    benefits: ['Business Continuity', 'Data Protection', 'Compliance', 'Peace of Mind'],
    timeline: '6-12 weeks'
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing Solutions',
    description: 'Edge computing solutions for low-latency and distributed applications',
    icon: <Network className="h-8 w-8 text-pink-500" />,
    features: ['Edge Strategy', 'Infrastructure Design', 'Application Deployment', 'Performance Optimization'],
    pricing: { starting: '$35,000', average: '$80,000', enterprise: '$200,000+' },
    category: 'Edge',
    badge: 'Innovative',
    link: '/services/edge-computing',
    benefits: ['Reduced Latency', 'Improved Performance', 'Better User Experience', 'Cost Optimization'],
    timeline: '24-48 weeks'
  },
  {
    id: 'serverless',
    title: 'Serverless Architecture',
    description: 'Serverless solutions for scalable and cost-effective applications',
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    features: ['Serverless Strategy', 'Function Design', 'Integration Services', 'Cost Optimization'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Serverless',
    badge: 'Efficient',
    link: '/services/serverless',
    benefits: ['Reduced Infrastructure Costs', 'Automatic Scaling', 'Faster Development', 'Better Reliability'],
    timeline: '8-16 weeks'
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting Services',
    description: 'Expert cloud consulting for strategic planning and implementation',
    icon: <Lightbulb className="h-8 w-8 text-emerald-500" />,
    features: ['Cloud Assessment', 'Strategy Development', 'Implementation Guidance', 'Best Practices'],
    pricing: { starting: '$150/hour', average: '$250/hour', enterprise: '$350/hour+' },
    category: 'Consulting',
    badge: 'Expert',
    link: '/services/cloud-consulting',
    benefits: ['Expert Guidance', 'Proven Methodologies', 'Risk Mitigation', 'Accelerated Results'],
    timeline: 'Ongoing'
  },
  {
    id: 'cloud-training',
    title: 'Cloud Training & Certification',
    description: 'Comprehensive training programs for cloud technologies and best practices',
    icon: <Users className="h-8 w-8 text-violet-500" />,
    features: ['Custom Training Programs', 'Certification Preparation', 'Hands-on Workshops', 'Ongoing Support'],
    pricing: { starting: '$5,000', average: '$12,000', enterprise: '$25,000+' },
    category: 'Training',
    badge: 'Educational',
    link: '/services/cloud-training',
    benefits: ['Improved Skills', 'Better Adoption', 'Reduced Support Needs', 'Increased Productivity'],
    timeline: '2-8 weeks'
  }
];

const CLOUD_PROVIDERS = [
  { name: 'AWS', logo: 'AWS', features: ['EC2', 'S3', 'Lambda', 'RDS'], color: 'bg-orange-500' },
  { name: 'Azure', logo: 'Azure', features: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database'], color: 'bg-blue-500' },
  { name: 'Google Cloud', logo: 'GCP', features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL'], color: 'bg-green-500' },
  { name: 'IBM Cloud', logo: 'IBM', features: ['Virtual Servers', 'Object Storage', 'Cloud Functions', 'Db2'], color: 'bg-blue-600' }
];

const CLOUD_BENEFITS = [
  {
    icon: <TrendingUp className="h-12 w-12 text-zion-cyan" />,
    title: 'Scalability',
    description: 'Scale resources up or down based on demand automatically'
  },
  {
    icon: <PieChart className="h-12 w-12 text-zion-purple" />,
    title: 'Cost Efficiency',
    description: 'Pay only for resources you use with no upfront infrastructure costs'
  },
  {
    icon: <Shield className="h-12 w-12 text-zion-cyan" />,
    title: 'Security',
    description: 'Enterprise-grade security with built-in compliance and governance'
  },
  {
    icon: <Globe className="h-12 w-12 text-zion-purple" />,
    title: 'Global Reach',
    description: 'Deploy applications globally with low-latency access worldwide'
  }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
];

export default function CloudServicesPage() {
  return (
<<<<<<< HEAD
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Cloud
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Solutions & Services
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with enterprise-grade cloud solutions designed to drive 
            innovation, reduce costs, and improve scalability. From migration to optimization, 
            we deliver cloud solutions that accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get Cloud Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Cloud Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our range of cloud services designed to address specific 
              business needs and accelerate your digital transformation journey.
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Cloud Services & Solutions - Zion Tech Group" 
        description="Comprehensive cloud services including migration, architecture, security, optimization, and management. Expert cloud solutions for businesses."
        keywords="cloud services, cloud migration, cloud architecture, cloud security, cloud optimization, multi-cloud, serverless, edge computing"
        canonical="https://ziontechgroup.com/cloud-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with comprehensive cloud solutions that drive innovation, 
            efficiency, and growth through modern cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get Cloud Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Cloud Assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Cloud Benefits */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Cloud Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLOUD_BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-cyan/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Providers */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Platform Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLOUD_PROVIDERS.map((provider, index) => (
              <div key={index} className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-purple/20 text-center">
                <div className={`w-16 h-16 ${provider.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{provider.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{provider.name}</h3>
                <ul className="space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/70">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Services Grid */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of cloud services designed to meet your business needs
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {cloudServices.map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-zion-blue-light pt-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-zion-cyan">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We work with all major cloud providers to deliver the best solutions 
              for your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Technologies */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Cloud Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge cloud technologies and tools to deliver 
              innovative solutions that drive business value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Service Types */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our comprehensive cloud services cover all aspects of modern 
              cloud computing and infrastructure management.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudServiceTypes.map((service, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardDrive className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZionTech for Cloud */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ZionTech Group for Cloud Solutions?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine deep cloud expertise with industry knowledge to deliver 
              solutions that accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Cloud Experts</h3>
              <p className="text-zion-slate-light">
                AWS, Azure, and GCP certified professionals with extensive 
                experience in enterprise cloud solutions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Success</h3>
              <p className="text-zion-slate-light">
                Successfully migrated 200+ businesses to the cloud with 
                average cost savings of 40% and improved performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock cloud monitoring and support to ensure 
                your infrastructure runs smoothly at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Pricing */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Cloud Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Competitive pricing for enterprise-grade cloud solutions with 
              flexible payment options and ROI guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Cloud Starter</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Basic cloud migration</li>
                <li>Single cloud platform</li>
                <li>Basic monitoring</li>
                <li>Email support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Cloud Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $8,500<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-white space-y-2 mb-8">
                <li>Full cloud migration</li>
                <li>Multi-cloud strategy</li>
                <li>Advanced monitoring</li>
                <li>Priority support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Cloud Enterprise</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Full cloud transformation</li>
                <li>Custom architecture</li>
                <li>24/7 monitoring</li>
                <li>Dedicated team</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our cloud experts today to discuss how we can help you 
            accelerate your digital transformation journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">
                +1 302 464 0950
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">
                kleber@ziontechgroup.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Request Cloud Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule Cloud Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <QuoteFormSection />
    </>
=======
            {CLOUD_SERVICES.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    {service.icon}
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan/80">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                      <div className="text-sm text-zion-cyan/70 space-y-1">
                        <p>Starting: {service.pricing.starting}</p>
                        <p>Average: {service.pricing.average}</p>
                        <p>Enterprise: {service.pricing.enterprise}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Timeline:</h4>
                      <p className="text-sm text-zion-cyan/70">{service.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      <Link to={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our cloud experts are ready to help you migrate, optimize, and manage your cloud infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Start Cloud Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
  );
}