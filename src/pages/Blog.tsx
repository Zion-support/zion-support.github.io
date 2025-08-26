
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 4 },
    { id: 'business', name: 'Business & Strategy', count: 2 }
  ];

  const blogPosts = [
export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'The Future of AI: Autonomous Business Operations in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '2.4k',
      tags: ['AI', 'Automation', 'Business', 'Future'],
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Enterprise Adoption',
      excerpt: 'Understanding the practical applications of quantum computing and how businesses can start preparing for the quantum revolution.',
      category: 'quantum',
      author: 'Dr. James Kim',
      date: '2025-01-12',
      readTime: '12 min read',
      views: '1.8k',
      tags: ['Quantum Computing', 'Enterprise', 'Technology', 'Innovation'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Why zero-trust security architecture is becoming essential for modern enterprises and how to implement it effectively.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      views: '3.1k',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise', 'Security'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'DevOps Transformation: From Theory to Practice',
      excerpt: 'Real-world strategies for implementing DevOps practices and achieving faster, more reliable software delivery.',
      category: 'cloud',
      author: 'Emily Watson',
      date: '2025-01-08',
      readTime: '15 min read',
      views: '2.7k',
      tags: ['DevOps', 'Cloud', 'Automation', 'Software Development'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI-Powered Decision Making: Transforming Business Intelligence',
      excerpt: 'How artificial intelligence is enhancing business intelligence and enabling data-driven decision making at scale.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-05',
      readTime: '9 min read',
      views: '1.9k',
      tags: ['AI', 'Business Intelligence', 'Data', 'Decision Making'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Exploring the benefits of edge computing and how it\'s reshaping the future of IoT and real-time applications.',
      category: 'cloud',
      author: 'David Chen',
      date: '2025-01-03',
      readTime: '11 min read',
      views: '1.6k',
      tags: ['Edge Computing', 'IoT', 'Cloud', 'Real-time'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      excerpt: 'Practical applications of blockchain technology in enterprise environments and real-world use cases.',
      category: 'business',
      author: 'Alex Thompson',
      date: '2025-01-01',
      readTime: '13 min read',
      views: '2.2k',
      tags: ['Blockchain', 'Enterprise', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'How machine learning is transforming healthcare delivery and improving patient care and outcomes.',
      category: 'ai',
      author: 'Dr. Lisa Park',
      date: '2024-12-28',
      readTime: '14 min read',
      views: '3.5k',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Patient Care'],
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === 'all' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

}
