
import { Cloud, Shield, TrendingUp, Server, Zap, BarChart3,  } from "lucide-react";
import Layout from "../layout";

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Cloud Management",
      description:
        "Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with automated compliance monitoring and threat detection",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Cost Optimization",
      description:
        "Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing",
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: "24/7 Monitoring",
      description:
        "Proactive monitoring with automated scaling, performance optimization, and incident response",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Auto-Scaling",
      description:
        "Automatically scale resources based on demand to ensure optimal performance and cost efficiency",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: "Analytics & Insights",
      description:
        "Advanced analytics to optimize infrastructure performance and make data-driven decisions",
    },
  ];

  const managementFeatures = [
    {
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to ensure optimal performance and cost efficiency'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting with comprehensive dashboards and automated incident response'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics & Insights',
      description: 'Advanced analytics to optimize infrastructure performance and make data-driven decisions'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure using code for consistency and reliability',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'GitOps']
    },
    {
      title: 'Monitoring & Alerting',
      description: 'Comprehensive monitoring and alerting for all cloud resources',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Automated Alerts', 'Performance Analytics']
    },
    {
      title: 'Disaster Recovery',
      description: 'Robust disaster recovery solutions to ensure business continuity',
      features: ['Backup Strategies', 'Recovery Planning', 'Testing', 'Compliance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 cloud accounts',
        'Basic monitoring',
        'Email support',
        'Standard integrations',
        'Cost optimization reports',
        'Standard templates',
        'Monthly reports'
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing enterprises',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 cloud accounts',
        'Advanced monitoring',
        'Priority support',
        'Custom integrations',
        'Automated scaling',
        'Security compliance',
        'Custom configurations',
        'Weekly reports',
        'API access'
      name: 'Lisa Martinez',
      company: 'E-commerce Platform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'HIPAA compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5
    }
  ];

  const enterpriseFeatures = [
    'Unlimited servers',
        'Custom monitoring',
        'Dedicated support',
        'White-label options',
        'Real-time reports',
        'Custom integrations'
