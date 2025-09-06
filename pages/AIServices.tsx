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
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Database,
  Cpu,
  Network,
  Target,
  Rocket
} from 'lucide-react';

const aiServices = [
  {
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
  }
];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
          </p>
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
}