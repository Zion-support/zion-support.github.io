import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {ArrowRight, CheckCircle, Star, Users, Award, Shield, Brain, Cloud, Code, Smartphone, FileText, MessageCircle, Link as LinkIcon, Workflow, CheckCircle} from 'lucide-react';

  const [isVisible, setIsVisible] = useState(false);

    setIsVisible(true);
  }, []);

  const stats = [{number: '500+', label: 'Projects Completed', icon: CheckCircle},
    {number: '50+', label: 'Happy Clients', icon: Users},
    {number: '99%', label: 'Client Satisfaction', icon: Star},
    {number: '24/7', label: 'Support Available', icon: Award},];

  const features = [icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'];

  const aiServices = [title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      price: '$199/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content scheduling'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
      title: 'AI Customer Support',
      description: '24/7 intelligent customer service with natural language processing',
      price: '$399/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      price: '$249/month',
      features: ['Process mapping', 'Automated workflows', 'Integration APIs', 'Performance monitoring'],
      icon: Workflow,
      color: 'from-orange-500 to-red-500'
  ];

  const itServices = [title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
  ];

  const microSaasProducts = [title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI insights',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking'],
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
  ];

  return (
    <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>

              Advanced AI & IT Solutions
              Transform your business with cutting-edge artificial intelligence, cloud infrastructure,
              and cybersecurity solutions tailored to your needs.
                Get Started
                Learn More

  );
}

