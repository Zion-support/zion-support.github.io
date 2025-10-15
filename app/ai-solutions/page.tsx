import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom model development",
        "Real-time data processing",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Deep learning algorithms"
      ]
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands context and provides human-like responses.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language understanding",
        "Multi-language support",
        "Integration with existing systems",
        "24/7 customer support",
        "Learning capabilities",
        "Analytics and reporting"
      ]
    },
    {
      title: "Document Processing",
      description: "Automated document analysis, extraction, and processing using advanced AI techniques.",
      icon: DocumentTextIcon,
      features: [
        "OCR and text extraction",
        "Document classification",
        "Data validation",
        "Automated workflows",
        "Compliance checking",
        "Batch processing"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics and visualization.",
      icon: LightBulbIcon,
      features: [
        "Data visualization",
        "Predictive modeling",
        "Trend analysis",
        "Custom dashboards",
        "Real-time reporting",
        "Automated insights"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes to save time and resources.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Better Decision Making",
      description: "Get data-driven insights and recommendations to make informed business decisions.",
      icon: <LightBulbIcon className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization.",
      icon: <DocumentTextIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Scalable Solutions",
      description: "AI solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-purple-500" />
    }
  ];


