import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Rocket, Zap, Target, Users, CheckCircle, ArrowRight, DollarSign, Shield, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
const StartupPage: NextPage = () => {;
  const startupServices = [;
    {;
      icon: <Rocket className="w-8 h-8" />,
      title: 'MVP Development',
      description: 'Build and launch your minimum viable product quickly and cost-effectively',
      features: ['Rapid Prototyping', 'Agile Development', 'User Testing', 'Iterative Improvement'];
},
    {;
      icon: <Globe className="w-8 h-8" />,
      title: 'Scalable Architecture',
      description: 'Build for scale from day one with cloud-native, scalable solutions',
      features: ['Microservices', 'Cloud Infrastructure', 'Auto-scaling', 'Performance Optimization'];
},
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Technical Co-Founding',
      description: 'Partner with experienced technical leaders to accelerate your startup',
      features: ['Technical Strategy', 'Team Building', 'Architecture Design', 'Mentorship'];
},
    {;
      icon: <Target className="w-8 h-8" />,
      title: 'Growth Acceleration',
      description: 'Scale your technology as your startup grows and evolves',
      features: ['Performance Monitoring', 'Feature Development', 'Infrastructure Scaling', 'Team Expansion'];
}
  ];
  const benefits = [;
    {;
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost-Effective',
      description: 'Startup-friendly pricing and flexible payment options';
},
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Time-to-Market',
      description: 'Launch your product quickly with our rapid development approach';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Guidance',
      description: 'Access to experienced entrepreneurs and technical advisors';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Technology that grows with your startup from MVP to IPO';
}
  ];
  const stages = [;
    {;
      title: 'Idea Validation',
      description: 'Validate your concept with market research and technical feasibility analysis',
      icon: <Target className="w-6 h-6" />;
},
    {;
      title: 'MVP Development',
      description: 'Build and launch your minimum viable product to test market fit',
      icon: <Rocket className="w-6 h-6" />;
},
    {;
      title: 'Product-Market Fit',
      description: 'Iterate and improve based on user feedback and market response',
      icon: <Users className="w-6 h-6" />;
},
    {;
      title: 'Scale & Growth',
      description: 'Scale your technology and team to support rapid growth',
      icon: <TrendingUp className="w-6 h-6" />;
}