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
        "Real-time processing",
        "Data preprocessing",
        "Model optimization",
        "Performance monitoring",
        "Continuous learning"
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text classification",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development",
        "Document processing",
        "Voice recognition"
      ]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, recognition, and processing.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "Video analysis",
        "Medical imaging",
        "Quality inspection"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting to help businesses make informed decisions.",
      icon: ChartBarIcon,
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Customer behavior analysis",
        "Market trends",
        "Performance prediction",
        "Anomaly detection"
      ]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Task scheduling",
        "Quality control",
        "Compliance monitoring"
      ]
    },
    {
      title: "AI Security",
      description: "Advanced security solutions powered by AI to protect against cyber threats and fraud.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Fraud prevention",
        "Access control",
        "Behavioral analysis",
        "Incident response",
        "Compliance monitoring"
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


