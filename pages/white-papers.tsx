
const whitePapers = [;
  {}
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide","
    description: "Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.","
    author: "Dr. Sarah Chen","
    date: "2024-01-15","
    category: "Artificial Intelligence","
    readTime: "45 min read","
    downloadCount: "2,341","
    featured: true,
    pdfUrl: "/whitepapers/ai-enterprise-guide.pdf""
  },
  {}
    id: 2,
    title: "Cloud Security Best Practices for Modern Businesses","
    description: "A detailed analysis of cloud security challenges and proven strategies to protect your organization's data and infrastructure.","
    author: "Michael Rodriguez","
    date: "2024-01-10","
    category: "Cybersecurity","
    readTime: "30 min read","
    downloadCount: "1,876","
    featured: false,
    pdfUrl: "/whitepapers/cloud-security-best-practices.pdf""
  },
  {}
    id: 3,
    title: "Quantum Computing: The Next Frontier in Technology","
    description: "Understanding quantum computing's potential impact on various industries and how to prepare for the quantum revolution.","
    author: "Dr. Alex Thompson","
    date: "2024-01-05","
    category: "Quantum Computing","
    readTime: "60 min read","
    downloadCount: "1,234","
    featured: false,
    pdfUrl: "/whitepapers/quantum-computing-frontier.pdf""
  },
  {}
    id: 4,
    title: "Digital Transformation Strategies for Healthcare","
    description: "How healthcare organizations can leverage technology to improve patient outcomes and operational efficiency.","
    author: "Jennifer Lee","
    date: "2023-12-28","
    category: "Healthcare Technology","
    readTime: "40 min read","
    downloadCount: "987","
    featured: false,
    pdfUrl: "/whitepapers/healthcare-digital-transformation.pdf""
  },
  {}
    id: 5,
    title: "The Economics of Micro SaaS: Building Profitable Solutions","
    description: "A comprehensive guide to building, launching, and scaling micro SaaS applications for sustainable business growth.","
    author: "David Kim","
    date: "2023-12-20","
    category: "SaaS","
    readTime: "35 min read","
    downloadCount: "1,567","
    featured: false,
    pdfUrl: "/whitepapers/micro-saas-economics.pdf""
  },
  {}
    id: 6,
    title: "Data Privacy in the Age of AI: Compliance and Best Practices","
    description: "Navigating the complex landscape of data privacy regulations while implementing AI solutions effectively.","
    author: "Emma Wilson","
    date: "2023-12-15","
    category: "Data Privacy","
    readTime: "50 min read","
    downloadCount: "1,123","
    featured: false,
    pdfUrl: "/whitepapers/data-privacy-ai-compliance.pdf""
import { FileText, Download, Calendar, Eye } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Layout from '../components/Layout';

const whitePaperCategories = [
  { name: 'AI & Machine Learning', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Cybersecurity', count: 6, color: 'bg-red-100 text-red-800' },
  { name: 'Cloud Computing', count: 5, color: 'bg-green-100 text-green-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-purple-100 text-purple-800' },
  { name: 'Digital Transformation', count: 4, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Industry Insights', count: 9, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredPapers = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: A Comprehensive Guide to Implementation',
    excerpt: 'Explore how artificial intelligence is transforming enterprise operations and learn best practices for successful AI implementation.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '25 min read',
    pages: 45,
    downloads: 1250,
    featured: true,
    tags: ['AI', 'Enterprise', 'Implementation', 'Future Tech'],
    downloadUrl: '/whitepapers/ai-enterprise-guide.pdf'
  },
  {
    id: 2,
    title: 'Cybersecurity in the Age of Quantum Computing: Preparing for the Future',
    excerpt: 'Understand the implications of quantum computing on cybersecurity and learn how to prepare your organization for the quantum era.',
    category: 'Cybersecurity',
    author: 'Michael Rodriguez',
    date: '2025-01-10',
    readTime: '30 min read',
    pages: 52,
    downloads: 980,
    featured: true,
    tags: ['Cybersecurity', 'Quantum Computing', 'Future Security'],
    downloadUrl: '/whitepapers/quantum-cybersecurity.pdf'
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies: A Step-by-Step Guide for Enterprise',
    excerpt: 'Comprehensive guide to planning and executing successful cloud migration projects with real-world case studies.',
    category: 'Cloud Computing',
    author: 'Lisa Wang',
    date: '2025-01-05',
    readTime: '35 min read',
    pages: 60,
    downloads: 2100,
    featured: true,
    tags: ['Cloud Migration', 'Enterprise', 'Strategy'],
    downloadUrl: '/whitepapers/cloud-migration-guide.pdf'
  }
];

const recentPapers = [
  {
    id: 4,
    title: 'Data Analytics for Healthcare: Improving Patient Outcomes',
    excerpt: 'How healthcare organizations can leverage data analytics to improve patient care and operational efficiency.',
    category: 'Data Analytics',
    author: 'Dr. James Wilson',
    date: '2025-01-03',
    readTime: '20 min read',
    pages: 32,
    downloads: 750,
    tags: ['Healthcare', 'Data Analytics', 'Patient Care']
  },
  {
    id: 5,
    title: 'Digital Transformation in Manufacturing: Industry 4.0 Implementation',
    excerpt: 'A comprehensive look at how manufacturers can embrace Industry 4.0 technologies for competitive advantage.',
    category: 'Digital Transformation',
    author: 'Maria Garcia',
    date: '2024-12-28',
    readTime: '28 min read',
    pages: 48,
    downloads: 890,
    tags: ['Manufacturing', 'Industry 4.0', 'Digital Transformation']
  },
  {
    id: 6,
    title: 'The State of FinTech: Trends and Opportunities in 2025',
    excerpt: 'Analysis of current FinTech trends and emerging opportunities in the financial technology sector.',
    category: 'Industry Insights',
    author: 'David Kim',
    date: '2024-12-20',
    readTime: '22 min read',
    pages: 38,
    downloads: 1100,
    tags: ['FinTech', 'Trends', 'Financial Technology']
  },
  {
    id: 7,
    title: 'IoT Security Best Practices: Protecting Connected Devices',
    excerpt: 'Essential security measures for protecting Internet of Things devices and networks.',
    category: 'Cybersecurity',
    author: 'Emily Johnson',
    date: '2024-12-15',
    readTime: '18 min read',
    pages: 28,
    downloads: 650,
    tags: ['IoT', 'Security', 'Connected Devices']
  }
];

const stats = [
  { number: '25+', label: 'White Papers' },
  { number: '10K+', label: 'Downloads' },
  { number: '15+', label: 'Industry Experts' },
  { number: '95%', label: 'Reader Satisfaction' }
    title: 'Cybersecurity Best Practices 2024',
    description: 'Latest cybersecurity trends and protection strategies for modern businesses.',
    category: 'Cybersecurity',
    downloadCount: 1500,
    publishDate: '2024-01-05',
    downloadLink: '/downloads/cybersecurity-best-practices.pdf'
  }
;];

    <Layout
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                In-depth research and insights on the latest technology trends and industry developments
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Categories</h2>
              <p className="text-lg text-gray-600">Browse white papers by topic</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {whitePaperCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                    {category.name}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-500">papers</div>
              </Link>
    </Layout>
