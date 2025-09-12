import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, Star, TrendingUp, Filter, Search } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
  type: 'article' | 'case-study' | 'resource' | 'guide';
  status: 'new' | 'popular' | 'trending' | 'featured';
  publishDate: string;
  author: string;
  tags: string[];
}

const featuredContent: ContentItem[] = [
  {
<<<<<<< HEAD
    title: "AI Enterprise Automation Success Stories 2025: Real-World Transformations",
    description: "Discover how Fortune 500 companies achieved 300% productivity gains and $50M+ cost savings through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "90% efficiency gains"
  },
  {
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$2.5B revenue increase"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
  },
  {
    title: "AI Business Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.",
    href: "/blog/ai-business-automation-2025",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "300% productivity gain"
  },
  {
    title: "AI 2025 Revolutionary Breakthroughs: The Technologies Reshaping Our World",
    description: "Explore the groundbreaking AI technologies that will define 2025. From quantum AI to autonomous systems, discover the innovations transforming industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "Revolutionary breakthroughs"
  },
  {
    title: "AI Retail Transformation Success: $200M Revenue Boost Case Study 2025",
    description: "Discover how a global retail giant achieved unprecedented success through comprehensive AI transformation, resulting in $200M revenue increase and 150% customer satisfaction improvement.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$200M revenue boost"
  },
  {
    title: "AI Implementation Master Guide 2025: Complete 200-Page Playbook",
    description: "Master AI implementation with our comprehensive 200-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in any organization.",
    href: "/resources/ai-implementation-master-guide-2025",
=======
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "$2B revenue growth"
  },
  {
    title: "AI Startup Funding Revolution 2025: $100B Investment Boom",
    description: "Discover the AI startup funding revolution sweeping 2025. Learn how to secure funding, understand investor priorities, and capitalize on the $100B AI investment boom.",
    href: "/blog/ai-2025-startup-funding-revolution",
    category: "Startup Strategy",
    readTime: "18 min read",
    isNew: true,
    icon: "💰",
    stats: "$100B investment boom"
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isNew: true,
    icon: "🛡️",
    stats: "99.9% detection rate"
  },
  {
    title: "AI 2025 Comprehensive Implementation Playbook: Complete Guide",
    description: "Master AI implementation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in 2025.",
    href: "/resources/ai-2025-comprehensive-implementation-playbook",
>>>>>>> cursor/create-and-deploy-new-content-46f8
    category: "Master Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚",
<<<<<<< HEAD
    stats: "10,000+ downloads"
    icon: "🤖",
    stats: "40% productivity boost"
=======
    stats: "200+ pages guide"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  }
];

const trendingContent: ContentItem[] = [
  {
<<<<<<< HEAD
    title: "AI 2025 Revolutionary Breakthroughs: The Technologies Reshaping Our World",
    description: "Explore the groundbreaking AI technologies that will define 2025. From quantum AI to autonomous systems, discover the innovations transforming industries.",
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isTrending: true,
    icon: "🧠",
    stats: "Trending this week"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: Real-World Transformations",
    description: "Discover how Fortune 500 companies achieved 300% productivity gains and $50M+ cost savings through AI automation with real case studies.",
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isTrending: true,
    icon: "🏢",
    stats: "300% productivity gain"
  },
  {
    title: "AI Retail Transformation Success: $200M Revenue Boost Case Study 2025",
    description: "Discover how a global retail giant achieved unprecedented success through comprehensive AI transformation with $200M revenue increase.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    stats: "90% efficiency gains"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isTrending: true,
    icon: "🛍️",
    stats: "$200M revenue boost"
    stats: "$2.5B revenue increase"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isTrending: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isTrending: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
=======
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isTrending: true,
    icon: "🏢",
    stats: "Trending this week"
  },
  {
    title: "AI Startup Funding Revolution 2025: $100B Investment Boom",
    description: "Discover the AI startup funding revolution sweeping 2025. Learn how to secure funding, understand investor priorities, and capitalize on the $100B AI investment boom.",
    href: "/blog/ai-2025-startup-funding-revolution",
    category: "Startup Strategy",
    readTime: "18 min read",
    isTrending: true,
    icon: "💰",
    stats: "300% growth in funding"
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isTrending: true,
    icon: "🛡️",
    stats: "Zero security breaches"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  }
];

const latestContent: ContentItem[] = [
  {
<<<<<<< HEAD
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "90% efficiency gains"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$2.5B revenue increase"
=======
    title: "AI 2025 Comprehensive Implementation Playbook: Complete Guide",
    description: "Master AI implementation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in 2025.",
    href: "/resources/ai-2025-comprehensive-implementation-playbook",
    category: "Master Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚",
    stats: "200+ pages guide"
  },
  {
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "$2B revenue growth"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isNew: true,
<<<<<<< HEAD
    icon: "🏥",
    stats: "95% accuracy achieved"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
  },
  {
    title: "AI Productivity Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% in 2025.",
    href: "/blog/ai-productivity-automation-2025",
    category: "Productivity",
    readTime: "12 min read",
    isNew: true,
    icon: "🚀",
    stats: "40% productivity boost"
=======
    icon: "🛡️",
    stats: "99.9% detection rate"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  }
];

interface ContentCardProps {
  item: ContentItem;
  variant?: 'default' | 'featured' | 'compact';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, variant = 'default' }) => {
  const baseClasses = "group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl";
  
  const variantClasses = {
    default: "bg-white border border-gray-200 hover:border-blue-300",
    featured: "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-blue-400",
    compact: "bg-white border border-gray-200 hover:border-gray-300"
  };

  return (
    <Link href={item.href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="p-6">
        {/* Header with icon and badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <div className="flex gap-2">
            {item.isNew && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {item.isTrending && (
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                TRENDING
              </span>
            )}
          </div>
        </div>

        {/* Category and stats */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
            {item.category}
          </span>
          {item.stats && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {item.stats}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{item.readTime}</span>
            <span>•</span>
            <span>Jan 28, 2025</span>
          </div>
          <span className="text-blue-600 font-medium group-hover:underline text-sm">
            {item.category === 'Case Study' ? 'Read Case Study →' : 
             item.category === 'Master Guide' ? 'Download Guide →' : 'Read Article →'}
          </span>
        </div>
      </div>
    </Link>
  );
};

interface EnhancedContentShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showFilters?: boolean;
  maxItems?: number;
}

const EnhancedContentShowcase: React.FC<EnhancedContentShowcaseProps> = ({
  title = "Latest AI Insights & Success Stories",
  subtitle = "Discover cutting-edge AI content, case studies, and implementation guides",
  className = '',
  showFilters = true,
  maxItems = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems: ContentItem[] = [
    {
      title: 'The Generative AI Revolution: How 2025 is Transforming Every Industry',
      description: 'Explore how generative AI is revolutionizing industries in 2025, from healthcare to finance, with real-world applications and future predictions.',
      href: '/blog/ai-2025-generative-ai-revolution',
      icon: '🤖',
      readTime: '12 min read',
      category: 'AI Innovation',
      isNew: true,
      isTrending: true,
      type: 'article',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['generative AI', 'industry transformation', '2025 trends']
    },
    {
      title: 'AI Automation 2025: Complete Implementation Guide for Enterprise Success',
      description: 'Master AI automation implementation with our comprehensive 2025 guide. Learn best practices, avoid common pitfalls, and achieve 300% productivity gains.',
      href: '/blog/ai-automation-2025-complete-implementation-guide',
      icon: '⚡',
      readTime: '15 min read',
      category: 'AI Automation',
      isNew: true,
      isTrending: true,
      type: 'guide',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['automation', 'enterprise', 'implementation', 'productivity']
    },
    {
      title: 'AI Transformation Success: How a Manufacturing Giant Achieved 400% ROI',
      description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
      href: '/case-studies/ai-transformation-manufacturing-giant-2025',
      icon: '🏭',
      readTime: '10 min read',
      category: 'Case Study',
      isNew: true,
      isTrending: true,
      type: 'case-study',
      status: 'featured',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      tags: ['manufacturing', 'ROI', 'transformation', 'Fortune 500']
    },
    {
      title: 'AI Breakthrough Innovations of 2025',
      description: 'Discover the most groundbreaking AI innovations that are reshaping industries and creating new opportunities.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      readTime: '8 min read',
      category: 'AI Innovation',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      tags: ['innovation', 'breakthrough', 'technology']
    },
    {
      title: 'Fortune 500 AI Transformation Success',
      description: 'Learn how leading Fortune 500 companies are leveraging AI to drive unprecedented growth and efficiency.',
      href: '/case-studies/ai-transformation-fortune-500-2025',
      icon: '💼',
      readTime: '12 min read',
      category: 'Case Study',
      isNew: false,
      isTrending: false,
      type: 'case-study',
      status: 'popular',
      publishDate: '2025-01-12',
      author: 'Zion Tech Group',
      tags: ['Fortune 500', 'transformation', 'success']
    },
    {
      title: 'AI Healthcare Diagnosis Breakthrough',
      description: 'See how AI is revolutionizing healthcare diagnosis and treatment with unprecedented accuracy.',
      href: '/case-studies/ai-healthcare-diagnosis-breakthrough-2026',
      icon: '🏥',
      readTime: '14 min read',
      category: 'Healthcare AI',
      isNew: false,
      isTrending: true,
      type: 'case-study',
      status: 'trending',
      publishDate: '2025-01-10',
      author: 'Zion Tech Group',
      tags: ['healthcare', 'diagnosis', 'medical AI']
    },
    {
      title: 'AI Enterprise Integration Best Practices',
      description: 'Master the art of integrating AI solutions into existing enterprise systems with proven methodologies.',
      href: '/blog/ai-enterprise-integration-best-practices-2025',
      icon: '🔗',
      readTime: '11 min read',
      category: 'Enterprise AI',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2025-01-08',
      author: 'Zion Tech Group',
      tags: ['integration', 'enterprise', 'best practices']
    },
    {
      title: 'AI Cybersecurity Threat Detection 2025',
      description: 'Learn how AI is revolutionizing cybersecurity with advanced threat detection and prevention capabilities.',
      href: '/blog/ai-cybersecurity-threat-detection-2025',
      icon: '🔒',
      readTime: '9 min read',
      category: 'Cybersecurity',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-05',
      author: 'Zion Tech Group',
      tags: ['cybersecurity', 'threat detection', 'security']
    },
    {
      title: 'AI Data Engineering 2025: Complete Guide',
      description: 'Comprehensive guide to AI-powered data engineering practices and tools for modern enterprises.',
      href: '/blog/ai-data-engineering-2025',
      icon: '📊',
      readTime: '13 min read',
      category: 'Data Engineering',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2025-01-03',
      author: 'Zion Tech Group',
      tags: ['data engineering', 'AI tools', 'data science']
    },
    {
      title: 'AI Edge Computing IoT 2025',
      description: 'Explore the convergence of AI, edge computing, and IoT technologies in modern applications.',
      href: '/blog/ai-edge-computing-iot-2025',
      icon: '🌐',
      readTime: '10 min read',
      category: 'Edge Computing',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2025-01-01',
      author: 'Zion Tech Group',
      tags: ['edge computing', 'IoT', 'distributed AI']
    },
    {
      title: 'AI Ethics Responsible Innovation 2025',
      description: 'Navigate the ethical considerations of AI implementation with responsible innovation frameworks.',
      href: '/blog/ai-ethics-responsible-innovation-2025',
      icon: '⚖️',
      readTime: '16 min read',
      category: 'AI Ethics',
      isNew: false,
      isTrending: false,
      type: 'guide',
      status: 'popular',
      publishDate: '2024-12-28',
      author: 'Zion Tech Group',
      tags: ['ethics', 'responsible AI', 'governance']
    },
    {
      title: 'AI Multimodal Applications 2025',
      description: 'Discover how multimodal AI applications are transforming user experiences and business processes.',
      href: '/blog/ai-multimodal-applications-2025',
      icon: '🎭',
      readTime: '7 min read',
      category: 'Multimodal AI',
      isNew: false,
      isTrending: true,
      type: 'article',
      status: 'trending',
      publishDate: '2024-12-25',
      author: 'Zion Tech Group',
      tags: ['multimodal', 'applications', 'user experience']
    }
  ];

  const categories = ['all', 'AI Innovation', 'AI Automation', 'Case Study', 'Healthcare AI', 'Enterprise AI', 'Cybersecurity', 'Data Engineering', 'Edge Computing', 'AI Ethics', 'Multimodal AI'];
  const types = ['all', 'article', 'case-study', 'guide', 'resource'];

  const filteredContent = contentItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesType && matchesSearch;
    })
    .slice(0, maxItems);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Star className="w-4 h-4 text-green-500" />;
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-orange-500" />;
      case 'featured':
        return <Star className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'trending':
        return 'bg-orange-100 text-orange-800';
      case 'featured':
        return 'bg-blue-100 text-blue-800';
      case 'popular':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                {/* Image/Icon Header */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl">{item.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      <span className="ml-1 capitalize">{item.status}</span>
                    </span>
                    {item.isNew && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Star className="w-3 h-3 mr-1" />
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="text-sm text-blue-600 font-medium mb-2">{item.category}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;