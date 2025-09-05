  },
  {
    title: 'Cloud Migration Checklist',
    description: 'Step-by-step checklist for migrating your infrastructure to the cloud successfully.',
    type: 'Checklist',
    category: 'Cloud',
    format: 'PDF',
    size: '1.2 MB',
    duration: '20 min read',
    downloads: '890',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/cloud-migration-checklist.pdf',
    popular: true
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your business from threats and attacks.',
    type: 'Whitepaper',
    category: 'Security',
    format: 'PDF',
    size: '3.1 MB',
    duration: '60 min read',
    downloads: '2,100',
    rating: 4.9,
    link: 'https://ziontechgroup.com/resources/cybersecurity-best-practices.pdf',
    popular: true
  },
  {
    title: 'Micro SaaS Development Video Series',
    description: '10-part video series covering everything from ideation to deployment of micro SaaS products.',
    type: 'Video Series',
    category: 'Development',
    format: 'Video',
    size: '2.5 GB',
    duration: '4 hours',
    downloads: '650',
    rating: 4.7,
    link: 'https://ziontechgroup.com/resources/micro-saas-development-series',
    popular: false
  },
  {
    title: 'API Design Standards',
    description: 'Comprehensive standards and best practices for designing robust and scalable APIs.',
    type: 'Standards',
    category: 'Development',
    format: 'PDF',
    size: '1.8 MB',
    duration: '35 min read',
    downloads: '720',
    rating: 4.5,
    link: 'https://ziontechgroup.com/resources/api-design-standards.pdf',
    popular: false
  },
  {
    title: 'Data Analytics Implementation',
    description: 'Guide to implementing data analytics solutions for business intelligence and insights.',
    type: 'Guide',
    category: 'Analytics',
    format: 'PDF',
    size: '2.2 MB',
    duration: '50 min read',
    downloads: '980',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/data-analytics-implementation.pdf',
    popular: true
  },
  {
    title: 'DevOps Transformation Webinar',
    description: 'Recorded webinar on transforming your development and operations processes.',
    type: 'Webinar',
    category: 'DevOps',
    format: 'Video',
    size: '1.8 GB',
    duration: '90 min',
    downloads: '420',
    rating: 4.4,
    link: 'https://ziontechgroup.com/resources/devops-transformation-webinar',
    popular: false
  },
  {
    title: 'IoT Security Framework',
    description: 'Comprehensive framework for securing IoT devices and networks in enterprise environments.',
    type: 'Framework',
    category: 'IoT',
    format: 'PDF',
    size: '2.8 MB',
    duration: '55 min read',
    downloads: '340',
    rating: 4.7,
    link: 'https://ziontechgroup.com/resources/iot-security-framework.pdf',
    popular: false
  },
  {
    title: 'Digital Transformation Roadmap',
    description: 'Strategic roadmap for digital transformation initiatives across different industries.',
    type: 'Roadmap',
    category: 'Strategy',
    format: 'PDF',
    size: '1.5 MB',
    duration: '30 min read',
    downloads: '1,100',
    rating: 4.8,
    link: 'https://ziontechgroup.com/resources/digital-transformation-roadmap.pdf',
    popular: true
  },
  {
    title: 'Machine Learning Model Deployment',
    description: 'Best practices for deploying and monitoring machine learning models in production.',
    type: 'Best Practices',
    category: 'AI',
    format: 'PDF',
    size: '2.0 MB',
    duration: '40 min read',
    downloads: '580',
    rating: 4.5,
    link: 'https://ziontechgroup.com/resources/ml-model-deployment.pdf',
    popular: false
  },
  {
    title: 'Cloud Cost Optimization Strategies',
    description: 'Proven strategies for optimizing cloud costs and improving resource utilization.',
    type: 'Strategies',
    category: 'Cloud',
    format: 'PDF',
    size: '1.3 MB',
    duration: '25 min read',
    downloads: '750',
    rating: 4.6,
    link: 'https://ziontechgroup.com/resources/cloud-cost-optimization.pdf',
    popular: false
  },
  {
    title: 'API Security Workshop',
    description: 'Interactive workshop materials for implementing comprehensive API security measures.',
    type: 'Workshop',
    category: 'Security',
    format: 'ZIP',
    size: '15 MB',
    duration: '2 hours',
    downloads: '290',
    rating: 4.9,
    link: 'https://ziontechgroup.com/resources/api-security-workshop.zip',
    popular: false
  }
];

const categories = ['All', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'DevOps', 'IoT', 'Strategy'];
const types = ['All', 'Guide', 'Checklist', 'Whitepaper', 'Video Series', 'Standards', 'Webinar', 'Framework', 'Roadmap', 'Best Practices', 'Strategies', 'Workshop'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const stats = [
    { number: '50+', label: 'Resources Available' },
    { number: '10,000+', label: 'Total Downloads' },
    { number: '4.7', label: 'Average Rating' },
    { number: '24/7', label: 'Access Available' }
  ];

import { FileText, BarChart3, MessageSquare, Settings, BookOpen, Video, Download, ExternalLink } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    color: "from-blue-500 to-blue-600",
    items: ["API Documentation", "Integration Guides", "Best Practices", "Troubleshooting"]
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and implementations",
    icon: BarChart3,
    href: "/case-studies",
    color: "from-green-500 to-green-600",
    items: ["Client Success Stories", "Implementation Examples", "ROI Analysis", "Lessons Learned"]
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and technical articles",
    icon: MessageSquare,
    href: "/blog",
    color: "from-purple-500 to-purple-600",
    items: ["Technology Trends", "Industry Insights", "Technical Tutorials", "Company News"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Settings,
    href: "/api-docs",
    color: "from-orange-500 to-orange-600",
    items: ["REST API", "GraphQL", "Webhooks", "SDKs"]
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides and hands-on tutorials",
    icon: BookOpen,
    href: "/tutorials",
    color: "from-indigo-500 to-indigo-600",
    items: ["Getting Started", "Advanced Topics", "Code Examples", "Video Tutorials"]
  },
  {
    title: "Webinars",
    description: "Live and recorded educational sessions",
    icon: Video,
    href: "/webinars",
    color: "from-pink-500 to-pink-600",
    items: ["Live Sessions", "Recorded Videos", "Q&A Sessions", "Expert Talks"]
  }
];

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
    </>
  );
}