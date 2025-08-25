
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
<<<<<<< HEAD
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Zap,
  Building,
  Users,
  Globe,
  Star,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'business', name: 'Business & Strategy', icon: Building, count: 7 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 6 },
    { id: 'development', name: 'Development', icon: Code, count: 4 }
=======
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter, TrendingUp, Brain, Atom, Shield, Cloud, Rocket, Lightbulb, Globe, Database, Code, Target, Zap, Star, BookOpen, MessageSquare, Heart, Share2 } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', count: 24, icon: Globe },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Technology', count: 4, icon: Atom },
    { name: 'Cybersecurity', count: 5, icon: Shield },
    { name: 'Cloud & DevOps', count: 3, icon: Cloud },
    { name: 'Digital Transformation', count: 4, icon: Rocket }
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Database
} from 'lucide-react';

=======
  ChevronDown,
  Filter,
  BookOpen,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Network,
  Star,
  Eye,
  MessageCircle,
  Share2
} from 'lucide-react';

>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 3 },
    { id: 'tech', name: 'Technology', icon: Cpu, count: 2 }
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
    { id: 'all', name: 'All Posts', count: 45, icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', count: 12, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8, icon: Shield },
    { id: 'infrastructure', name: 'IT Infrastructure', count: 7, icon: Cloud },
    { id: 'industry', name: 'Industry Insights', count: 10, icon: TrendingUp }
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'The Future of AI: Autonomous Business Systems in 2024',
      excerpt: 'Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      content: 'Artificial Intelligence has evolved from simple automation to complex autonomous systems that can make decisions, learn from experience, and operate independently...',
      author: 'Dr. Sarah Chen',
      authorTitle: 'AI Research Director',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['AI', 'Autonomous Systems', 'Business Intelligence'],
      featured: true,
      views: 15420,
      likes: 892,
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Classical Limitations',
      excerpt: 'Explore how quantum computing is solving problems that were previously impossible for classical computers.',
      content: 'Quantum computing represents a paradigm shift in computational power, leveraging quantum mechanical phenomena to process information...',
      author: 'Prof. Michael Rodriguez',
      authorTitle: 'Quantum Technology Lead',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      featured: true,
      views: 12850,
      likes: 756,
      image: '/images/blog/quantum-computing.jpg'
=======
      title: 'The Future of AI: Autonomous Business Systems in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what to expect in the coming year.',
      author: 'Kleber',
      date: '2025-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding the fundamentals of quantum computing and its potential applications in enterprise environments.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      category: 'Quantum Technology',
      readTime: '7 min read',
      image: '⚛️'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
<<<<<<< HEAD
      excerpt: 'Learn about emerging cybersecurity challenges and how AI is being used to both attack and defend digital systems.',
      content: 'As AI systems become more sophisticated, they present both new security challenges and innovative defense mechanisms...',
      author: 'Alex Thompson',
      authorTitle: 'Cybersecurity Expert',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threat Detection'],
      featured: false,
      views: 9870,
      likes: 634,
      image: '/images/blog/cybersecurity-ai.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprise Success',
      excerpt: 'A comprehensive guide to planning and executing successful cloud migration projects for large organizations.',
      content: 'Cloud migration is more than just moving data and applications—it\'s a strategic transformation that requires careful planning...',
      author: 'Jennifer Park',
      authorTitle: 'Cloud Solutions Architect',
      publishDate: '2024-01-08',
      readTime: '15 min read',
      category: 'cloud',
      tags: ['Cloud Migration', 'Enterprise', 'Digital Transformation'],
      featured: false,
      views: 8760,
      likes: 521,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: Beyond Technology Implementation',
      excerpt: 'Understanding the human and organizational aspects of successful digital transformation initiatives.',
      content: 'While technology is crucial for digital transformation, the human element—change management, culture, and leadership—is equally important...',
      author: 'David Kim',
      authorTitle: 'Digital Transformation Consultant',
      publishDate: '2024-01-05',
      readTime: '11 min read',
      category: 'business',
      tags: ['Digital Transformation', 'Change Management', 'Leadership'],
      featured: false,
      views: 7650,
      likes: 445,
      image: '/images/blog/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'How edge computing is enabling real-time processing and reducing latency in IoT deployments.',
      content: 'Edge computing brings computation and data storage closer to the data source, enabling faster processing and real-time insights...',
      author: 'Lisa Wang',
      authorTitle: 'IoT Solutions Engineer',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      category: 'innovation',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      featured: false,
      views: 6540,
      likes: 398,
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 7,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'Exploring how ML algorithms are transforming healthcare delivery and improving patient care.',
      content: 'Machine learning is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and predictive analytics...',
      author: 'Dr. Robert Johnson',
      authorTitle: 'Healthcare Technology Specialist',
      publishDate: '2024-01-01',
      readTime: '14 min read',
      category: 'ai-ml',
      tags: ['Machine Learning', 'Healthcare', 'Patient Care'],
      featured: false,
      views: 5980,
      likes: 367,
      image: '/images/blog/ml-healthcare.jpg'
    },
    {
      id: 8,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Best practices for designing and implementing microservices that can scale with your business.',
      content: 'Microservices architecture offers flexibility and scalability, but requires careful design and implementation to avoid common pitfalls...',
      author: 'Mark Davis',
      authorTitle: 'Senior Software Architect',
      publishDate: '2023-12-30',
      readTime: '13 min read',
      category: 'development',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      featured: false,
      views: 5430,
      likes: 312,
      image: '/images/blog/microservices.jpg'
=======
      title: "The Future of AI: Autonomous Business Systems in 2025",
      excerpt: "Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of enterprise technology.",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-12-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["AI", "Autonomous Systems", "Business Intelligence", "Future Tech"],
      featured: true,
      views: 15420,
      likes: 892,
      comments: 156,
      image: "/images/blog/ai-future-2025.jpg",
      icon: Brain
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Breaking the Classical Computing Barrier",
      excerpt: "Exploring the revolutionary potential of quantum neural networks and their applications in solving previously intractable problems.",
      author: "Prof. Michael Rodriguez",
      authorRole: "Quantum Computing Specialist",
      publishDate: "2024-12-12",
      readTime: "12 min read",
      category: "Quantum Technology",
      tags: ["Quantum Computing", "Neural Networks", "AI", "Innovation"],
      featured: true,
      views: 12850,
      likes: 745,
      comments: 98,
      image: "/images/blog/quantum-neural-networks.jpg",
      icon: Atom
    },
    {
      id: 3,
      title: "SOC2 Compliance Automation: A Complete Guide for 2025",
      excerpt: "Learn how to automate your SOC2 compliance process and reduce manual effort while improving accuracy and security.",
      author: "Lisa Thompson",
      authorRole: "Security Compliance Expert",
      publishDate: "2024-12-10",
      readTime: "10 min read",
      category: "Cybersecurity",
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      featured: false,
      views: 9870,
      likes: 523,
      comments: 87,
      image: "/images/blog/soc2-compliance-guide.jpg",
      icon: Shield
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Transforming Business Connectivity",
      excerpt: "How 5G technology is enabling new business models and creating opportunities for innovation across industries.",
      author: "David Park",
      authorRole: "Network Infrastructure Lead",
      publishDate: "2024-12-08",
      readTime: "6 min read",
      category: "Digital Transformation",
      tags: ["5G", "Enterprise", "Connectivity", "Innovation"],
      featured: false,
      views: 7560,
      likes: 412,
      comments: 65,
      image: "/images/blog/5g-enterprise-solutions.jpg",
      icon: Cloud
    },
    {
      id: 5,
      title: "AI Content Generation: Revolutionizing Creative Industries",
      excerpt: "The impact of AI-powered content generation on marketing, media, and creative industries worldwide.",
      author: "Emma Wilson",
      authorRole: "Content Strategy Director",
      publishDate: "2024-12-05",
      readTime: "7 min read",
      category: "AI & Machine Learning",
      tags: ["AI Content", "Creative AI", "Marketing", "Media"],
      featured: false,
      views: 11230,
      likes: 678,
      comments: 134,
      image: "/images/blog/ai-content-generation.jpg",
      icon: Lightbulb
    },
    {
      id: 6,
      title: "Blockchain in Enterprise: Beyond Cryptocurrency",
      excerpt: "Exploring real-world enterprise applications of blockchain technology and their business value.",
      author: "Alex Kumar",
      authorRole: "Blockchain Solutions Architect",
      publishDate: "2024-12-03",
      readTime: "9 min read",
      category: "Digital Transformation",
      tags: ["Blockchain", "Enterprise", "Innovation", "Technology"],
      featured: false,
      views: 8930,
      likes: 445,
      comments: 78,
      image: "/images/blog/blockchain-enterprise.jpg",
      icon: Code
    },
    {
      id: 7,
      title: "The Rise of Autonomous DevOps: AI-Powered Development",
      excerpt: "How autonomous DevOps platforms are transforming software development and deployment processes.",
      author: "Rachel Green",
      authorRole: "DevOps Engineering Manager",
      publishDate: "2024-11-30",
      readTime: "11 min read",
      category: "Cloud & DevOps",
      tags: ["DevOps", "AI", "Automation", "Software Development"],
      featured: false,
      views: 10240,
      likes: 567,
      comments: 89,
      image: "/images/blog/autonomous-devops.jpg",
      icon: Cloud
    },
    {
      id: 8,
      title: "IoT Data Analytics: Unlocking Business Intelligence",
      excerpt: "Leveraging IoT data analytics to gain actionable insights and drive business transformation.",
      author: "Mark Johnson",
      authorRole: "IoT Solutions Specialist",
      publishDate: "2024-11-28",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      tags: ["IoT", "Data Analytics", "Business Intelligence", "Smart Cities"],
      featured: false,
      views: 8760,
      likes: 423,
      comments: 67,
      image: "/images/blog/iot-data-analytics.jpg",
      icon: Database
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
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
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return searchMatch && categoryMatch && tagMatch;
=======
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
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

  const categories = [
    'All Posts',
    'AI & Technology',
    'Quantum Technology',
    'Cybersecurity',
    'Digital Transformation',
    'Micro SAAS',
    'Cloud & Infrastructure'
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a

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
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay ahead of the curve with expert insights on AI, quantum technology, cybersecurity, 
              and the latest trends shaping the future of business and technology.
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & Innovation
              <span className="text-gradient block">Blog</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, 
              and the latest technology trends shaping the future of business.
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
<<<<<<< HEAD
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
=======
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-white border-zion-cyan'
                      : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
            </div>

<<<<<<< HEAD
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & Innovation
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum technology, cybersecurity, 
              and the latest innovations shaping the future of business and technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, insights, and trends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
<<<<<<< HEAD
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
=======
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/30 hover:bg-gray-800/70'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedTag === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                All Tags
              </button>
              {tags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Insights, updates, and thought leadership on AI, quantum computing, 
            cybersecurity, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
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
<<<<<<< HEAD
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-zion-cyan hover:text-white transition-colors font-medium group-hover:underline flex items-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zion Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, trends, and expert analysis on AI, cloud computing, cybersecurity, 
            and the latest technology innovations shaping the future of business.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{post.category.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 flex items-center justify-center">
                    <div className="text-gray-500 text-center p-8">
                      <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4"></div>
                      <p>Featured Image</p>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Regular Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          <div className="flex items-center space-x-2 text-zion-slate-light">
            <Filter className="h-5 w-5" />
            <span>{filteredPosts.length} articles found</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <post.icon className="h-4 w-4 text-zion-cyan" />
                  </div>
                  <span className="text-zion-cyan text-sm font-medium">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-zion-slate-light">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
=======
      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Latest Articles
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {post.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
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
<<<<<<< HEAD
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 text-center max-w-4xl mx-auto">
          <BookOpen className="h-16 w-16 text-zion-cyan mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-zion-slate-light mb-8 text-lg">
            Get the latest articles, research, and technology insights delivered directly to your inbox.
=======
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with our latest articles and industry analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest AI, quantum technology, and cybersecurity insights delivered to your inbox.
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
<<<<<<< HEAD
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            />
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30">
              Subscribe
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
          </div>
          <p className="text-zion-slate-light text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                          Featured
                        </span>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                          {getCategoryName(post.category)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
=======
      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
        </section>
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
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Newsletter Signup */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
<<<<<<< HEAD
            Get the latest insights delivered to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
=======
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
<<<<<<< HEAD
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
=======
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              Subscribe
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how our AI and technology solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </section>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
    </div>
  );
}

