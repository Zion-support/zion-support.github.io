<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>index | Zion Tech Group</title>,
        <meta name="description" content="index - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">index</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Users,
  Clock,
  Star
} from 'lucide-react';
import Layout from '../../components/Layout';

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: FileText,
    href: '/docs',
    color: 'from-blue-600 to-blue-800',
    items: ['API Reference', 'Integration Guides', 'Code Examples', 'Best Practices']
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and implementations',
    icon: BarChart3,
    href: '/case-studies',
    color: 'from-green-600 to-green-800',
    items: ['Client Success Stories', 'ROI Analysis', 'Implementation Details', 'Lessons Learned']
  },
  {
    title: 'Blog',
    description: 'Latest insights and technology trends',
    icon: MessageSquare,
    href: '/blog',
    color: 'from-purple-600 to-purple-800',
    items: ['Technology Insights', 'Industry Trends', 'Best Practices', 'Expert Opinions']
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Settings,
    href: '/api-docs',
    color: 'from-orange-600 to-orange-800',
    items: ['REST API', 'GraphQL', 'SDKs', 'Webhooks']
  }
];

const additionalResources = [
  {
    title: 'Tutorials',
    description: 'Step-by-step learning guides',
    icon: BookOpen,
    href: '/tutorials',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    title: 'Guides',
    description: 'Comprehensive how-to guides',
    icon: Code,
    href: '/guides',
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: Users,
    href: '/faq',
    color: 'from-teal-600 to-teal-800'
  },
  {
    title: 'Support',
    description: 'Get help and support',
    icon: Clock,
    href: '/support',
    color: 'from-red-600 to-red-800'
  }
];

const featuredContent = [
  {
    title: 'Getting Started with Our API',
    type: 'Tutorial',
    description: 'Learn how to integrate with our platform in under 30 minutes',
    readTime: '15 min read',
    difficulty: 'Beginner',
    rating: 4.8
  },
  {
    title: 'Enterprise Security Best Practices',
    type: 'Guide',
    description: 'Comprehensive security guidelines for enterprise implementations',
    readTime: '25 min read',
    difficulty: 'Advanced',
    rating: 4.9
  },
  {
    title: 'AI Integration Case Study',
    type: 'Case Study',
    description: 'How we helped a Fortune 500 company implement AI solutions',
    readTime: '20 min read',
    difficulty: 'Intermediate',
    rating: 4.7
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>index | Zion Tech Group</title>
        <meta name="description" content="index - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">index</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default index;