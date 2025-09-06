<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
<<<<<<< HEAD
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    
    return this.props.children;
  }
}

import React from "react";
import Layout from "../components/Layout";

import React from 'react';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
    return this.props.children;
  }
}
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
export default function AIServices() {;
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              AI Services;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Transform your business with cutting-edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">;
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * AIServices - Function description
 */
function AIServices() {
  return (
    <Layout;
      title="AI Services - Zion Tech Group";
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              AI Services;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Transform your business with cutting - edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">;
              AI Services page is under construction.;
            </p>;
          </div>;
        </div>;
      </div>;
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  Brain,
  Bot,
  Eye,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  Award,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Cog,
  Shield,
  Zap,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
>>>>>>> main
  Star,
  Clock,
  Users,
  TrendingUp,
  Database,
  Network,
  Target,
  Rocket
} from 'lucide-react';
const aiServices = [
  {
<<<<<<< HEAD
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your business needs with advanced algorithms and real-time processing",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Processing", "Model Optimization"],
    pricing: "Starting at $3,000/month"
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions for automation and quality control",
    icon: Eye,
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "Natural Language Processing",
    description: "Intelligent text analysis and language understanding for chatbots and content processing",
    icon: MessageSquare,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"],
    pricing: "Starting at $2,200/month"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting to optimize business decisions and outcomes",
    icon: BarChart3,
    features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"],
    pricing: "Starting at $2,800/month"
  },
  {
    title: "AI Automation",
    description: "Intelligent process automation to streamline workflows and reduce manual tasks",
    icon: Zap,
    features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
    category: "Security",
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Security Monitoring"],
    pricing: "Starting at $3,200/month",
    setupTime: "2-4 weeks",
    targetUsers: "Enterprises, Security Teams, IT Departments"
    features: [
      'Threat detection and analysis',
      'Automated incident response',
      'Behavioral analytics',
      'Vulnerability assessment',
      'Security monitoring'
    ],
    price: '$4,000 - $15,000/month',
    benefits: [
      'Enhanced security posture',
      'Reduced false positives',
      'Faster threat response',
      'Compliance automation'
    ],
    marketPrice: '$7,000 - $25,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial Services, Healthcare, Government, Enterprise'
  },
  {
    id: 6,
    name: 'Conversational AI & Chatbots',
    description: 'Intelligent virtual assistants and customer service automation',
=======
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding for your business.',
>>>>>>> main
    icon: MessageSquare,
    features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation'],
    price: '$1,500/month',
    benefits: ['Better customer insights', 'Automated content', 'Multilingual support', 'Cost efficiency']
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis powered by cutting-edge AI technology.',
    icon: Eye,
    features: ['Object detection', 'Image classification', 'Video analysis', 'Custom models'],
    price: '$2,000/month',
    benefits: ['Automated visual analysis', 'Quality control', 'Security monitoring', 'Process optimization']
  },
  {
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational agents for customer service and support.',
    icon: Bot,
    features: ['24/7 availability', 'Natural conversations', 'Multi-language support', 'Integration ready'],
    price: '$800/month',
    benefits: ['Improved customer service', 'Reduced support costs', 'Scalable solutions', 'Better user experience']
  },
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models tailored to your specific business needs.',
    icon: Brain,
<<<<<<< HEAD
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Side effect prediction',
      'Drug repurposing analysis'
    ],
    price: '$4,500 - $20,000/month',
    benefits: [
      'Faster drug development',
      'Reduced R&D costs',
      'Improved success rates',
      'Personalized medicine'
    ],
    marketPrice: '$7,000 - $35,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical Companies, Research Labs, Biotech'
  },
  {
    id: 9,
    name: 'AI Climate & Environmental Solutions',
    description: 'Environmental monitoring and climate change mitigation using AI',
    icon: TrendingUp,
    features: [
      'Climate data analysis',
      'Environmental monitoring',
      'Carbon footprint optimization',
      'Renewable energy forecasting',
      'Sustainability reporting'
    ],
    price: '$2,200 - $7,000/month',
    benefits: [
      'Environmental compliance',
      'Cost savings on energy',
      'Sustainability goals achievement',
      'Risk mitigation'
    ],
    marketPrice: '$3,500 - $12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Energy Companies, Government, Environmental Organizations'
  },
  {
    id: 10,
    name: 'AI Space Technology & Research',
    description: 'Space exploration and satellite data analysis using advanced AI',
    icon: Rocket,
    features: [
      'Satellite data processing',
      'Space mission optimization',
      'Astronomical data analysis',
      'Space weather prediction',
      'Autonomous space systems'
    ],
    price: '$3,500 - $12,000/month',
    benefits: [
      'Enhanced space missions',
      'Improved data accuracy',
      'Cost-effective operations',
      'Scientific breakthroughs'
    ],
    marketPrice: '$5,500 - $20,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Space Agencies, Satellite Companies, Research Institutions'
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
    features: ['Predictive analytics', 'Custom algorithms', 'Data training', 'Model optimization'],
    price: '$3,000/month',
    benefits: ['Data-driven decisions', 'Predictive insights', 'Competitive advantage', 'Scalable intelligence']
>>>>>>> main
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
];
const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time"   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
];
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Layout from '../components/Layout';
import React from "react";
import Layout from "../components/Layout";
origin/automation-improvements-final

<<<<<<< HEAD
import React from "react";
import Layout from "../components/Layout";
origin/main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more."
    >

=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Services page is under construction.</p>


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                AI Services That Transform Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Harness the power of artificial intelligence to drive innovation and growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Portfolio
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function AIServices() {;
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              AI Services;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Transform your business with cutting-edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * AIServices - Function description
 */
function AIServices() {
  return (
    <Layout;
      title="AI Services - Zion Tech Group";
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              AI Services;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Transform your business with cutting - edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              AI Services page is under construction.;
            </p>;
          </div>;
        </div>;
      </div>;


<<<<<<< HEAD
<<<<<<< HEAD
=======
      description="Comprehensive AI solutions for modern businesses"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and cutting-edge quantum AI solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and
              services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              AI Services page is under construction.
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Services page is under construction.</p>
origin/automation-improvements-final
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                AI Services That Transform Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Harness the power of artificial intelligence to drive innovation and growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    whileHover={{ y: -5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </li>
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">{service.pricing}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </section>
        {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Excellence in Numbers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our track record speaks for itself with proven results and satisfied clients.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </section>
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness AI Power?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Start AI Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


}

<<<<<<< HEAD
=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText,
  Cog,
  Shield;
} from 'lucide-react';

const aiServices = [
  {
    title: "AI Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials",
    icon: FileText,
    category: "Content",
    features: ["Natural Language Processing", "SEO Optimization", "Multi-language Support", "Brand Voice Consistency"],
    pricing: "Starting at $299/month",
    setupTime: "1-2 weeks",
    targetUsers: "Content Teams, Marketing Agencies, Bloggers"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
    category: "Security",
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Security Monitoring"],
    pricing: "Starting at $3,200/month",
    setupTime: "2-4 weeks",
    targetUsers: "Enterprises, Security Teams, IT Departments"
  }
];

const stats = [
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Services
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </motion.button>
=======
export default function AIServicesPage() {
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including natural language processing, computer vision, chatbots, and machine learning models."
      keywords="AI services, machine learning, natural language processing, computer vision, chatbots, artificial intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From natural language processing to computer vision, we deliver AI that works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your AI needs and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 302 464 0950</span>
>>>>>>> main
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


}

=======

>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
    </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
}
}
    </Layout>);
}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
