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
        "Custom Model Development",
        "Real-time Processing",
        "Advanced Analytics",
        "Scalable Architecture"
      ]
    },
    {
      title: "Natural Language Processing",
      description: "Transform text and speech data into actionable insights with our advanced NLP solutions.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
        "Voice Recognition"
      ]
    },
    {
      title: "Computer Vision",
      description: "Extract meaningful information from images and videos using cutting-edge computer vision technology.",
      icon: EyeIcon,
      features: [
        "Image Recognition",
        "Object Detection",
        "Video Analysis",
        "Pattern Recognition"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors using historical data and machine learning algorithms.",
      icon: DocumentTextIcon,
      features: [
        "Trend Forecasting",
        "Risk Assessment",
        "Demand Prediction",
        "Performance Optimization"
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

