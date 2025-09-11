import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Cloud, Server, Shield, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Database, Globe, Lock, Settings } from 'lucide-react';
import Link from 'next/link';
const CloudServicesPage: NextPage = () => {;
  const cloudServices = [;
    {;
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Post-Migration Support'];
},
    {;
      icon: <Server className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your business needs',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery'];
},
    {;
      icon: <Settings className="w-8 h-8" />,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with DevOps best practices',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing'];
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data',
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance'];
}
  ];
  const platforms = [;
    {;
      name: 'Amazon Web Services',
      logo: '/platforms/aws.png',
      description: 'Comprehensive cloud computing platform with extensive services',
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront'];
},
    {;
      name: 'Microsoft Azure',
      logo: '/platforms/azure.png',
      description: 'Enterprise-grade cloud platform with hybrid capabilities',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'Storage', 'CDN'];
},
    {;
      name: 'Google Cloud Platform',
      logo: '/platforms/gcp.png',
      description: 'Advanced cloud platform with AI and machine learning capabilities',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes', 'AI Platform'];
}
  ];
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand, paying only for what you use';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Enterprise-grade security with advanced threat protection and compliance';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 40% with optimized cloud solutions';
},
    {;
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Deploy applications globally with low latency and high availability';
}
  ];
  const process = [;
    {;
      step: '01',
      title: 'Assessment',
      description: 'Evaluate your current infrastructure and identify migration opportunities';
},
    {;
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive cloud strategy tailored to your business goals';
},
    {;
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with minimal disruption to your operations';
},
    {;
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize your cloud infrastructure for performance and cost';
}