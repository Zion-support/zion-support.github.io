import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Brain, Zap, Target, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Cpu, Database, Eye, MessageSquare } from 'lucide-react';
import Link from 'next/link';
const AISolutionsPage: NextPage = () => {;
  const aiServices = [;
    {;
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your business needs',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing'];
},
    {;
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Classification', 'Language Translation'];
},
    {;
      icon: <Eye className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and insights',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging'];
},
    {;
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline business processes',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Smart Scheduling'];
}
  ];
  const industries = [;
    {;
      title: 'Healthcare',
      description: 'AI-powered diagnostic tools, patient monitoring, and treatment optimization',
      icon: <Shield className="w-6 h-6" />;
},
    {;
      title: 'Finance',
      description: 'Fraud detection, risk assessment, and algorithmic trading solutions',
      icon: <TrendingUp className="w-6 h-6" />;
},
    {;
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: <Target className="w-6 h-6" />;
},
    {;
      title: 'Retail',
      description: 'Personalized recommendations, inventory management, and customer insights',
      icon: <Users className="w-6 h-6" />;
}
  ];
  const process = [;
    {;
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities for maximum impact.';
},
    {;
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design custom AI solutions tailored to your specific requirements.';
},
    {;
      step: '03',
      title: 'Development & Training',
      description: 'We develop and train AI models using your data and industry best practices.';
},
    {;
      step: '04',
      title: 'Deployment & Optimization',
      description: 'We deploy your AI solution and continuously optimize for better performance.';
}
  ];
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 40%';
},
    {;
      icon: <Target className="w-8 h-8" />,
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights for more accurate and timely business decisions';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized experiences and faster response times to your customers';
}