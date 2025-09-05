import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building2, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  BarChart3,
  Lock,
  Globe
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Enterprise Clients' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    description: 'Enterprise-grade infrastructure that scales with your business needs.',
    icon: Cloud,
    features: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Global deployment']
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security measures to protect your enterprise data.',
    icon: Shield,
    features: ['End-to-end encryption', 'Access controls', 'Audit logging', 'Compliance']
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics and insights powered by artificial intelligence.',
    icon: Brain,
    features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Machine learning']
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support from our expert team.',
    icon: Users,
    features: ['Dedicated support', 'Priority response', 'On-site assistance', 'Training']
  }
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions for large-scale businesses" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed for large-scale enterprises and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <a className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}