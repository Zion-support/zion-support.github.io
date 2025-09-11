import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Database, BarChart3, TrendingUp, Zap, CheckCircle, ArrowRight, Users, Globe, Brain, Target } from 'lucide-react';
import Link from 'next/link';
const DataAnalyticsPage: NextPage = () => {;
  const dataServices = [;
    {;
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for scalable analytics',
      features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time Processing', 'Data Quality Management'];
},
    {;
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with powerful BI solutions',
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'Self-Service Analytics'];
},
    {;
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Ops',
      description: 'Deploy and manage ML models at scale with MLOps best practices',
      features: ['Model Training', 'Model Deployment', 'A/B Testing', 'Model Monitoring'];
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Leverage advanced analytics to predict future trends and behaviors',
      features: ['Forecasting', 'Customer Analytics', 'Risk Assessment', 'Performance Optimization'];
}
  ];
  const industries = [;
    {;
      title: 'E-commerce',
      description: 'Customer behavior analysis, inventory optimization, and sales forecasting',
      icon: <Target className="w-6 h-6" />;
},
    {;
      title: 'Healthcare',
      description: 'Patient outcomes analysis, treatment optimization, and operational efficiency',
      icon: <Users className="w-6 h-6" />;
},
    {;
      title: 'Finance',
      description: 'Risk modeling, fraud detection, and algorithmic trading strategies',
      icon: <TrendingUp className="w-6 h-6" />;
},
    {;
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: <Globe className="w-6 h-6" />;
}
  ];
  const technologies = [;
    {;
      name: 'Apache Spark',
      description: 'Large-scale data processing and analytics',
      category: 'Data Processing';
},
    {;
      name: 'TensorFlow',
      description: 'Machine learning and deep learning framework',
      category: 'Machine Learning';
},
    {;
      name: 'Tableau',
      description: 'Business intelligence and data visualization',
      category: 'Visualization';
},
    {;
      name: 'Snowflake',
      description: 'Cloud data warehouse platform',
      category: 'Data Warehouse';
},
    {;
      name: 'Kubernetes',
      description: 'Container orchestration for ML workloads',
      category: 'Infrastructure';
},
    {;
      name: 'Apache Kafka',
      description: 'Real-time data streaming platform',
      category: 'Streaming';
}
  ];
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Faster Insights',
      description: 'Get actionable insights from your data in real-time with our advanced analytics solutions';
},
    {;
      icon: <Target className="w-8 h-8" />,
      title: 'Better Decisions',
      description: 'Make data-driven decisions with comprehensive analytics and predictive modeling';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Increased Revenue',
      description: 'Identify new opportunities and optimize operations to drive business growth';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Enhanced Customer Experience',
      description: 'Understand your customers better and deliver personalized experiences';
}