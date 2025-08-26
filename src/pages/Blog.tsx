=======
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { BlogPost } from "@/types/blog";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from "lucide-react";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
=======
import { motion } from 'framer-motion';
import { 
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
=======
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Code,
  Network,
  Atom,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Database,
  Server,
  Cpu,
  Lock,
  Eye,
export default function Blog() {
=======
  Heart,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Blog: React.FC = () => {
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
=======
    { id: 'all', name: 'All Posts', count: 45, icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', count: 12, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8, icon: Shield },
    { id: 'infrastructure', name: 'IT Infrastructure', count: 7, icon: Cloud },
    { id: 'industry', name: 'Industry Insights', count: 10, icon: TrendingUp }
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
  Search,
  Filter,
  BookOpen,
  Brain,
  Shield,
  Cpu,
  Network,
  TrendingUp
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 8 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Network, count: 7 }
=======
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: 3 },
    { id: 'development', name: 'Development', icon: Code, count: 2 }
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
  ];

  const tags = [
    { id: 'all', name: 'All Tags', count: 45 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', count: 18 },
    { id: 'machine-learning', name: 'Machine Learning', count: 15 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 8 },
    { id: 'cloud-computing', name: 'Cloud Computing', count: 10 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 9 },
    { id: 'enterprise-solutions', name: 'Enterprise Solutions', count: 11 }
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud Migration',
    'Digital Transformation', 'Business Intelligence', 'Automation', 'Innovation',
    'Technology Trends', 'Enterprise Solutions', 'Startups', 'Healthcare', 'Finance'
  ];
=======
import React from 'react';
import { 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a

export default function Blog() {
  const blogPosts = [
=======
export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
    {
      id: 1,
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
=======
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping enterprise technology landscapes...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.4k",
      category: "ai",
      tags: ["AI", "Enterprise", "Trends", "2024"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What Businesses Need to Know",
      excerpt: "Recent advances in quantum computing are opening new possibilities for solving complex business problems...",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      views: "1.8k",
      category: "innovation",
      tags: ["Quantum Computing", "Innovation", "Technology"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Security Best Practices for 2024",
      excerpt: "As cloud adoption continues to grow, security becomes paramount. Learn the essential practices...",
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "6 min read",
      views: "3.1k",
      category: "security",
      tags: ["Cloud Security", "Best Practices", "2024"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Discover how automation can transform your development workflow and improve deployment efficiency...",
      author: "Lisa Wang",
      date: "2024-01-08",
      readTime: "10 min read",
      views: "2.2k",
      category: "cloud",
      tags: ["DevOps", "Automation", "CI/CD"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Data Privacy in the Age of AI: A Comprehensive Guide",
      excerpt: "Understanding the intersection of artificial intelligence and data privacy regulations...",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "15 min read",
      views: "1.9k",
      category: "ai",
      tags: ["Data Privacy", "AI", "Compliance", "GDPR"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Edge Computing: The Next Frontier in IoT",
      excerpt: "How edge computing is revolutionizing Internet of Things applications and real-time processing...",
      author: "Emma Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      views: "1.6k",
      category: "tech",
      tags: ["Edge Computing", "IoT", "Real-time Processing"],
      image: "/api/placeholder/400/250"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
      title: "The Future of AI: Autonomous Systems in 2025 and Beyond",
      excerpt: "Explore how autonomous AI systems are revolutionizing industries and what this means for the future of business automation and decision-making.",
      content: "Artificial Intelligence has evolved from simple rule-based systems to sophisticated autonomous agents that can learn, adapt, and make decisions independently. In 2025, we're witnessing a paradigm shift where AI systems don't just assist humans but operate autonomously across complex business environments...",
      author: "Dr. Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai-ml",
      tags: ["AI", "Autonomous Systems", "Future Tech", "Business Automation"],
      featured: true,
      views: "12.5k",
      likes: 342,
      comments: 89,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Breaking the Limits of Classical Computing",
      excerpt: "Discover how quantum neural networks are solving problems that were previously impossible for classical computers, opening new frontiers in AI research.",
      content: "Quantum computing represents one of the most significant technological breakthroughs of our time. When combined with neural network architectures, it creates a powerful new paradigm for solving complex optimization problems...",
      author: "Prof. Michael Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "quantum",
      tags: ["Quantum Computing", "Neural Networks", "AI Research", "Optimization"],
      featured: true,
      views: "9.8k",
      likes: 287,
      comments: 67,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: Streamlining Security Audits",
      excerpt: "Learn how automated compliance tools are reducing audit time by 80% while improving security posture and reducing human error.",
      content: "Security compliance is a critical concern for organizations handling sensitive data. Traditional manual compliance processes are not only time-consuming but also prone to human error...",
      author: "Alex Thompson",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      featured: false,
      views: "7.2k",
      likes: 156,
      comments: 34,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity",
      excerpt: "Explore how 5G technology is enabling new business models and revolutionizing enterprise connectivity with ultra-low latency and massive bandwidth.",
      content: "The rollout of 5G networks represents a fundamental shift in how businesses connect and operate. With speeds up to 100 times faster than 4G and latency as low as 1 millisecond...",
      author: "Dr. Emily Watson",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "infrastructure",
      tags: ["5G", "Enterprise", "Connectivity", "Network Infrastructure"],
      featured: false,
      views: "6.8k",
      likes: 134,
      comments: 28,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      excerpt: "Discover how AI is transforming business intelligence, enabling real-time insights and predictive analytics that drive better decision-making.",
      content: "Business intelligence has evolved significantly over the past decade. What once required weeks of manual data processing and analysis can now be accomplished in real-time...",
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-05",
      readTime: "9 min read",
      category: "ai-ml",
      tags: ["Business Intelligence", "AI", "Analytics", "Decision Making"],
      featured: false,
      views: "5.9k",
      likes: 98,
      comments: 23,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "The Rise of Autonomous DevOps: Self-Healing Infrastructure",
      excerpt: "Learn how autonomous DevOps platforms are reducing deployment failures by 95% and accelerating time-to-market for software products.",
      content: "DevOps has revolutionized software development and deployment, but traditional approaches still require significant human intervention. Autonomous DevOps platforms are changing this paradigm...",
      author: "Lisa Chen",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      publishDate: "2025-01-03",
      readTime: "11 min read",
      category: "infrastructure",
      tags: ["DevOps", "Automation", "Infrastructure", "Software Development"],
      featured: false,
      views: "4.7k",
      likes: 76,
      comments: 19,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
      title: "The Future of AI: Autonomous Systems in Enterprise",
      excerpt: "Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of enterprise technology.",
      content: "Artificial Intelligence has evolved far beyond simple automation. Today's AI systems are capable of autonomous decision-making, continuous learning, and complex problem-solving that was once the exclusive domain of human experts. In this comprehensive guide, we explore how autonomous AI systems are transforming enterprise operations across industries...",
      author: "Dr. Sarah Chen",
      authorAvatar: "/avatars/sarah-chen.jpg",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai-ml",
      tags: ["artificial-intelligence", "autonomous-systems", "enterprise-solutions"],
      featured: true,
      image: "/blog/ai-autonomous-systems.jpg"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Through Classical Limitations",
      excerpt: "Explore the revolutionary potential of quantum computing and how it's solving problems that classical computers cannot handle.",
      content: "Quantum computing represents a paradigm shift in computational power. By leveraging the principles of quantum mechanics, quantum computers can process information in ways that classical computers simply cannot match. This breakthrough technology is opening new possibilities in cryptography, drug discovery, optimization problems, and more...",
      author: "Dr. Michael Rodriguez",
      authorAvatar: "/avatars/michael-rodriguez.jpg",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "quantum",
      tags: ["quantum-computing", "technology", "innovation"],
      featured: true,
      image: "/blog/quantum-computing.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: New Threats and Defenses",
      excerpt: "Learn about the evolving cybersecurity landscape and how AI is both a threat and a solution in protecting digital assets.",
      content: "As AI technology advances, so do the capabilities of cyber attackers. However, AI is also becoming our most powerful weapon in the fight against cyber threats. This article examines the dual nature of AI in cybersecurity, exploring both the risks and opportunities it presents...",
      author: "Alex Thompson",
      authorAvatar: "/avatars/alex-thompson.jpg",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "cybersecurity",
      tags: ["cybersecurity", "artificial-intelligence", "threat-detection"],
      featured: false,
      image: "/blog/ai-cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Building Scalable IT Infrastructure for Modern Enterprises",
      excerpt: "Discover the key principles and technologies for creating robust, scalable IT infrastructure that grows with your business.",
      content: "Modern enterprises require IT infrastructure that can scale seamlessly with business growth while maintaining performance and reliability. This comprehensive guide covers the essential components of scalable infrastructure, from cloud-native architectures to microservices and containerization...",
      author: "Jennifer Lee",
      authorAvatar: "/avatars/jennifer-lee.jpg",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "infrastructure",
      tags: ["it-infrastructure", "cloud-computing", "scalability"],
      featured: false,
      image: "/blog/it-infrastructure.jpg"
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "See how machine learning algorithms are revolutionizing healthcare delivery and improving patient outcomes worldwide.",
      content: "Healthcare is experiencing a technological renaissance thanks to machine learning. From diagnostic imaging to drug discovery, ML algorithms are helping medical professionals make better decisions and provide more personalized care. This article explores the current state and future potential of ML in healthcare...",
      author: "Dr. Emily Watson",
      authorAvatar: "/avatars/emily-watson.jpg",
      publishDate: "2025-01-05",
      readTime: "11 min read",
      category: "ai-ml",
      tags: ["machine-learning", "healthcare", "medical-technology"],
      featured: false,
      image: "/blog/ml-healthcare.jpg"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Processing Data Where It Matters",
      excerpt: "Understand how edge computing is changing the way we process and analyze data in real-time applications.",
      content: "Edge computing is revolutionizing how we handle data by bringing computation closer to where data is generated. This approach reduces latency, improves performance, and enables real-time processing for applications like autonomous vehicles, IoT devices, and smart cities...",
      author: "David Kim",
      authorAvatar: "/avatars/david-kim.jpg",
      publishDate: "2025-01-03",
      readTime: "9 min read",
      category: "infrastructure",
      tags: ["edge-computing", "iot", "real-time-processing"],
      featured: false,
      image: "/blog/edge-computing.jpg"
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
=======
      title: 'The Future of AI Consciousness: Breaking New Grounds in 2025',
      excerpt: 'Explore the latest breakthroughs in AI consciousness research and how Zion Tech Group is pioneering new approaches to understanding artificial intelligence.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI Consciousness', 'Research', 'Innovation', '2025'],
      featured: true,
      image: '/api/placeholder/600/400',
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Protecting Enterprises in the Digital Age',
      excerpt: 'Learn about implementing zero-trust security principles to protect your organization from modern cyber threats and data breaches.',
      author: 'Emily Watson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Zero-Trust', 'Security', 'Enterprise', 'Cybersecurity'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1923,
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: 'Quantum Computing Revolution: What Businesses Need to Know',
      excerpt: 'Discover how quantum computing is transforming industries and what steps your business should take to prepare for the quantum future.',
      author: 'Dr. James Kim',
      authorRole: 'Chief Research Officer',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      category: 'emerging-tech',
      tags: ['Quantum Computing', 'Business Strategy', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1654,
      likes: 72,
      comments: 18
    },
    {
      id: 4,
      title: 'Cloud-Native Development: Building Scalable Applications for the Future',
      excerpt: 'Master the principles of cloud-native development and learn how to build applications that scale automatically and handle modern workloads.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Cloud-Native', 'Development', 'Scalability', 'Microservices'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1432,
      likes: 65,
      comments: 12
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      excerpt: 'See how artificial intelligence is revolutionizing business intelligence and helping companies make data-driven decisions faster than ever.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      category: 'ai',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Data Science'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1876,
      likes: 94,
      comments: 21
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Accelerating Software Delivery in 2025',
      excerpt: 'Learn the latest DevOps practices and tools that are helping development teams deliver software faster and more reliably.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'cloud',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Software Delivery'],
      featured: false,
      image: '/api/placeholder/600/400',
      views: 1234,
      likes: 58,
      comments: 9
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
=======
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    return matchesSearch && matchesCategory;
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
  });
=======
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions.',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '🔒'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Guide for Small Businesses',
      excerpt: 'Practical steps for small and medium businesses to embrace digital transformation and stay competitive.',
      author: 'Lisa Park',
      date: '2024-12-28',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: '🚀'
    },
    {
      id: 5,
      title: 'The Rise of Micro SAAS: Democratizing Technology',
      excerpt: 'How micro SAAS solutions are making enterprise-grade technology accessible to businesses of all sizes.',
      author: 'Alex Thompson',
      date: '2024-12-20',
      category: 'Micro SAAS',
      readTime: '4 min read',
      image: '💻'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure: Building for Scale and Security',
      excerpt: 'Best practices for designing and implementing scalable, secure cloud infrastructure solutions.',
      author: 'David Wilson',
      date: '2024-12-15',
      category: 'Cloud & Infrastructure',
      readTime: '9 min read',
      image: '☁️'
    }
  ];


  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
=======
  const formatDate = (dateString) => {
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  BookOpen,
  Brain,
  Zap,
  Shield,
  Cpu,
  Network,
  Globe,
  TrendingUp,
  Star,
  Eye,
  Heart,
  Share2,
  Filter,
  ChevronDown
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen, count: 156, color: 'from-gray-500 to-slate-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 45, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Zap, count: 23, color: 'from-blue-500 to-cyan-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 38, color: 'from-red-500 to-orange-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: 29, color: 'from-green-500 to-emerald-500' },
    { id: '5g', name: '5G & Networks', icon: Network, count: 18, color: 'from-indigo-500 to-blue-500' },
    { id: 'industry', name: 'Industry Insights', icon: Globe, count: 33, color: 'from-yellow-500 to-orange-500' },
    { id: 'trends', name: 'Tech Trends', icon: TrendingUp, count: 28, color: 'from-pink-500 to-rose-500' }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Future of AI: Quantum-Enhanced Machine Learning in 2025",
      excerpt: "Discover how quantum computing is revolutionizing artificial intelligence, enabling breakthroughs in drug discovery, financial modeling, and autonomous systems that were previously impossible.",
      author: "Dr. Sarah Chen",
      authorAvatar: "SC",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Quantum Computing", "Machine Learning", "Future Tech"],
      image: "/api/placeholder/600/400",
      views: "12.5k",
      likes: 847,
      featured: true
    },
    {
      id: 2,
      title: "SOC2 Compliance Automation: A Complete Guide for Enterprises",
      excerpt: "Learn how automated compliance management can reduce audit time by 80% while improving security posture and reducing human error in regulatory reporting.",
      author: "Michael Rodriguez",
      authorAvatar: "MR",
      publishDate: "2025-01-12",
      readTime: "12 min read",
      category: "cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      image: "/api/placeholder/600/400",
      views: "8.9k",
      likes: 623,
      featured: true
    },
    {
      id: 3,
      title: "5G Enterprise Networks: Transforming Business Connectivity",
      excerpt: "Explore how 5G technology is enabling new business models, from autonomous factories to real-time healthcare monitoring, and learn what it takes to implement enterprise-grade 5G solutions.",
      author: "Lisa Thompson",
      authorAvatar: "LT",
      publishDate: "2025-01-10",
      readTime: "10 min read",
      category: "5g",
      tags: ["5G", "Enterprise", "Connectivity", "IoT"],
      image: "/api/placeholder/600/400",
      views: "7.2k",
      likes: 445,
      featured: true
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Building Autonomous Business Operations: A Step-by-Step Guide",
      excerpt: "Transform your business processes with AI-powered automation. Learn the key steps to implement autonomous operations that can reduce costs by 40% and improve efficiency by 60%.",
      author: "David Kim",
      authorAvatar: "DK",
      publishDate: "2025-01-08",
      readTime: "15 min read",
      category: "ai",
      tags: ["AI", "Automation", "Business Operations", "Digital Transformation"],
      image: "/api/placeholder/400/250",
      views: "5.8k",
      likes: 312
    },
    {
      id: 5,
      title: "Quantum Neural Networks: The Next Frontier in AI",
      excerpt: "Dive deep into quantum neural networks and discover how they're solving complex problems in cryptography, optimization, and scientific research that classical computers cannot handle.",
      author: "Dr. Elena Petrov",
      authorAvatar: "EP",
      publishDate: "2025-01-06",
      readTime: "18 min read",
      category: "quantum",
      tags: ["Quantum Computing", "Neural Networks", "AI", "Research"],
      image: "/api/placeholder/400/250",
      views: "4.6k",
      likes: 289
    },
    {
      id: 6,
      title: "Micro SAAS Solutions: Scaling Your Business with Custom Software",
      excerpt: "Discover how micro SAAS solutions can help small and medium businesses compete with enterprise-level technology while maintaining flexibility and cost-effectiveness.",
      author: "Alex Johnson",
      authorAvatar: "AJ",
      publishDate: "2025-01-04",
      readTime: "11 min read",
      category: "industry",
      tags: ["SAAS", "Business", "Software", "Scaling"],
      image: "/api/placeholder/400/250",
      views: "3.9k",
      likes: 201
    },
    {
      id: 7,
      title: "Edge Computing in IoT: Reducing Latency for Real-Time Applications",
      excerpt: "Learn how edge computing is revolutionizing IoT applications by bringing computation closer to data sources, enabling real-time decision making in autonomous vehicles and smart cities.",
      author: "Rachel Green",
      authorAvatar: "RG",
      publishDate: "2025-01-02",
      readTime: "9 min read",
      category: "infrastructure",
      tags: ["Edge Computing", "IoT", "Real-Time", "Infrastructure"],
      image: "/api/placeholder/400/250",
      views: "3.2k",
      likes: 178
    },
    {
      id: 8,
      title: "AI-Powered IT Asset Management: Maximizing ROI on Technology Investments",
      excerpt: "Discover how AI can transform your IT asset management, from predictive maintenance to cost optimization, helping you get more value from your technology investments.",
      author: "Carlos Mendez",
      authorAvatar: "CM",
      publishDate: "2024-12-30",
      readTime: "13 min read",
      category: "ai",
      tags: ["AI", "IT Management", "Asset Management", "ROI"],
      image: "/api/placeholder/400/250",
      views: "2.8k",
      likes: 156
    },
    {
      id: 9,
      title: "The Rise of Quantum-Safe Cryptography: Preparing for the Future",
      excerpt: "As quantum computers become more powerful, traditional encryption methods are at risk. Learn about quantum-safe cryptography and how to future-proof your security infrastructure.",
      author: "Dr. James Wilson",
      authorAvatar: "JW",
      publishDate: "2024-12-28",
      readTime: "16 min read",
      category: "cybersecurity",
      tags: ["Quantum", "Cryptography", "Security", "Future-Proofing"],
      image: "/api/placeholder/400/250",
      views: "2.5k",
      likes: 134
    }
  ];

  const allArticles = [...featuredArticles, ...recentArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = filteredArticles.sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views.localeCompare(a.views, undefined, { numeric: true });
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

=======
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & Innovation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
              and the latest technology trends shaping the future of business.
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
=======
    <>
      <SEO 
        title="Blog - AI & Tech Insights" 
        description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." 
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT"
        canonical="https://ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
            </div>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            </div>
=======
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center space-x-3 mb-8">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <post.icon className="h-5 w-5 text-zion-cyan" />
                    </div>
                    <span className="text-zion-cyan text-sm font-medium">{post.category}</span>
                    <span className="text-zion-slate-light text-sm">• Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
=======
            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300">
                Must-read insights from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/50">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        {categories.find(c => c.id === post.category)?.name}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-semibold">{post.author}</p>
                          <p className="text-gray-400 text-sm">Author</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                    <span className="text-zion-cyan text-sm font-medium">{featuredPost.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

=======

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-zion-cyan hover:text-white transition-colors font-medium text-sm group-hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedTag === tag.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {tag.name}
                  <span className="ml-1 text-xs opacity-75">({tag.count})</span>
                </button>
              ))}
=======
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">156</span> Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">45</span> AI Topics
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">50k+</span> Readers
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-300">Must-read insights from our expert team</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400/50" />
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishDate)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {article.likes}
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sort and Filter Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Sort by:</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'latest', label: 'Latest' },
                { id: 'popular', label: 'Most Popular' },
                { id: 'trending', label: 'Trending' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    sortBy === option.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-300">Stay updated with our newest insights and analysis</p>
          </motion.div>

            ))}
          </div>
        </div>
      </section>

                    </Link>
                  </div>
                </motion.article>
              ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
            </div>
          )}
          
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
          </div>
          <p className="text-zion-slate-light text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
=======
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest insights, updates, and exclusive content delivered to your inbox
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-zion-slate-light text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
        </div>
      </section>

          </div>
        </div>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Latest Articles
            </h2>
            <div className="text-gray-400">
              {filteredPosts.length} of {blogPosts.length} articles
            </div>
=======
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                          {getCategoryName(post.category)}
                        </span>
                        {post.featured && (
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
=======
      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>
      </section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
              Subscribe
            </button>
          </div>
        </div>
      </section>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======

      {/* Newsletter CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum technology, and enterprise solutions delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
=======
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
    </div>
  );
    </div>
  );
};

export default Blog;
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-48a5
=======
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
};

export default Blog;
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
