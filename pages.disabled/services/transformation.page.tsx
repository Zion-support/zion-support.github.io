import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Rocket, Target, Users, Zap, CheckCircle, ArrowRight, Globe, Shield, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';
const DigitalTransformationPage: NextPage = () => {;
  const transformationServices = [;
    {;
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmap aligned with your business goals',
      features: ['Digital Assessment', 'Strategy Development', 'Technology Roadmap', 'Change Management'];
},
    {;
      icon: <Brain className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization',
      features: ['Workflow Analysis', 'RPA Implementation', 'Process Optimization', 'Performance Monitoring'];
},
    {;
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Modernize your infrastructure with secure and scalable cloud solutions',
      features: ['Infrastructure Assessment', 'Migration Planning', 'Cloud Deployment', 'Optimization'];
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with expert change management',
      features: ['Training Programs', 'Communication Strategy', 'Adoption Support', 'Performance Tracking'];
}
  ];
  const transformationAreas = [;
    {;
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital-first solutions',
      icon: <Users className="w-6 h-6" />;
},
    {;
      title: 'Operations',
      description: 'Optimize business processes with automation and analytics',
      icon: <Target className="w-6 h-6" />;
},
    {;
      title: 'Technology',
      description: 'Modernize your technology stack for better performance',
      icon: <Zap className="w-6 h-6" />;
},
    {;
      title: 'Data & Analytics',
      description: 'Leverage data for better decision-making and insights',
      icon: <TrendingUp className="w-6 h-6" />;
}
  ];
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 60%';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description: 'Drive new revenue streams and improve customer acquisition';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Better Customer Experience',
      description: 'Deliver seamless, personalized experiences across all touchpoints';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital capabilities';
}
  ];
  const process = [;
    {;
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current state and identify transformation opportunities';
},
    {;
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive digital transformation strategy';
},
    {;
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation initiatives with minimal disruption';
},
    {;
      step: '04',
      title: 'Optimization',
      description: 'Continuously optimize and scale digital capabilities';
}