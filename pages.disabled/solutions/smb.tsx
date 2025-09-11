import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Store, Users, Zap, Target, CheckCircle, ArrowRight, DollarSign, Shield, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
const SMBPage: NextPage = () => {;
  const smbServices = [;
    {;
      icon: <Store className="w-8 h-8" />,
      title: 'Business Management',
      description: 'Streamline operations with integrated business management solutions',
      features: ['CRM Systems', 'Inventory Management', 'Financial Tracking', 'Customer Support'];
},
    {;
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Presence',
      description: 'Build a strong online presence with professional websites and marketing',
      features: ['Website Development', 'SEO Optimization', 'Social Media', 'Online Marketing'];
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Security',
      description: 'Protect your business with affordable cybersecurity solutions',
      features: ['Data Backup', 'Security Monitoring', 'Employee Training', 'Compliance'];
},
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation',
      description: 'Automate routine tasks to focus on growing your business',
      features: ['Workflow Automation', 'Email Marketing', 'Scheduling', 'Reporting'];
}
  ];
  const benefits = [;
    {;
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost-Effective',
      description: 'Affordable solutions designed specifically for small and medium businesses';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Personalized Support',
      description: 'Dedicated support team that understands your business needs';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business as you expand';
},
    {;
      icon: <Target className="w-8 h-8" />,
      title: 'Quick Implementation',
      description: 'Fast deployment to get you up and running quickly';
}
  ];
  const industries = [;
    {;
      title: 'Retail',
      description: 'Point-of-sale systems, inventory management, and customer analytics',
      icon: <Store className="w-6 h-6" />;
},
    {;
      title: 'Professional Services',
      description: 'Client management, project tracking, and billing automation',
      icon: <Users className="w-6 h-6" />;
},
    {;
      title: 'Healthcare',
      description: 'Patient management, appointment scheduling, and compliance',
      icon: <Shield className="w-6 h-6" />;
},
    {;
      title: 'Manufacturing',
      description: 'Production tracking, quality control, and supply chain management',
      icon: <Target className="w-6 h-6" />;
}