import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  ArrowRight,
  CheckCircle,
  Search,
  Download,
  ExternalLink,
  Users,
  Settings,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const categories = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic setup instructions",
    icon: BookOpen,
    color: "from-blue-600 to-blue-800",
    links: [
      { title: "Quick Start Guide", href: "/docs/getting-started", type: "guide" },
      { title: "Installation", href: "/docs/installation", type: "guide" },
      { title: "Configuration", href: "/docs/configuration", type: "guide" },
      { title: "First Steps", href: "/docs/first-steps", type: "tutorial" }
    ]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and endpoints",
    icon: Code,
    color: "from-green-600 to-green-800",
    links: [
      { title: "Authentication", href: "/api-docs/auth", type: "api" },
      { title: "Core APIs", href: "/api-docs/core", type: "api" },
      { title: "Webhooks", href: "/api-docs/webhooks", type: "api" },
      { title: "SDKs", href: "/api-docs/sdks", type: "sdk" }
    ]
  },
  {
    title: "Tutorials",
    description: "Step-by-step tutorials and walkthroughs",
    icon: Video,
    color: "from-purple-600 to-purple-800",
    links: [
      { title: "Building Your First App", href: "/tutorials/first-app", type: "tutorial" },
      { title: "Advanced Features", href: "/tutorials/advanced", type: "tutorial" },
      { title: "Integration Examples", href: "/tutorials/integrations", type: "tutorial" },
      { title: "Best Practices", href: "/tutorials/best-practices", type: "guide" }
    ]
  },
  {
    title: "Guides",
    description: "Comprehensive guides and how-to articles",
    icon: FileText,
    color: "from-orange-600 to-orange-800",
    links: [
      { title: "Security Guide", href: "/guides/security", type: "guide" },
      { title: "Performance Optimization", href: "/guides/performance", type: "guide" },
      { title: "Deployment Guide", href: "/guides/deployment", type: "guide" },
      { title: "Troubleshooting", href: "/guides/troubleshooting", type: "guide" }
    ]
  }
];

const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in minutes",
    href: "/docs/getting-started",
    views: "12.5K",
    type: "guide"
  },
  {
    title: "API Authentication",
    description: "Learn how to authenticate with our APIs",
    href: "/api-docs/auth",
    views: "8.2K",
    type: "api"
  },
  {
    title: "Building Your First App",
    description: "Complete tutorial for beginners",
    href: "/tutorials/first-app",
    views: "15.3K",
    type: "tutorial"
  },
  {
    title: "Security Best Practices",
    description: "Keep your applications secure",
    href: "/guides/security",
    views: "6.7K",
    type: "guide"
  }
];

const resources = [
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages",
    icon: Code,
    count: "8 SDKs"
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code snippets and examples",
    icon: FileText,
    count: "50+ Examples"
  },
  {
    title: "Video Tutorials",
    description: "Watch our step-by-step video guides",
    icon: Video,
    count: "25+ Videos"
  },
  {
    title: "Community Forum",
    description: "Get help from our developer community",
    icon: Users,
    count: "2K+ Members"
  }
];

export default function DocumentationPage() {
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
  );
};

export default index;
