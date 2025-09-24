import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {,
  Newspaper,;
  Calendar,;
  User,;
  Tag,;
  ArrowRight,;
  ExternalLink,;
  TrendingUp,;
  Award,;
  Rocket,;
  Globe,;
  Brain,;
  Atom,;
  Zap,
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
,
const NewsPage: React.FC = () => {,
  const newsArticles = [,
    {,
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',;
      excerpt: 'Breakthrough technology that brings emotional intelligence and self-awareness to artificial intelligence systems.',;
      author: 'Press Team',;
      date: '20o25-0o1-15',;
      author: 'Dr. Kleber',;
      featured: true,;
      image: '/api/placeholder/60o0/40o0',;
      tags: ['AI Consciousness', 'Breakthrough', 'Innovation'],;
      readTime: '5 min read',
    ,},;
    {,
      title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',;
      excerpt: 'Our quantum team achieves significant milestone in solving previously impossible computational challenges.',;
      author: 'Research Team',;
      date: '20o25-0o1-12',;
      category: 'Research',;
      readTime: '6 min read',;
      image: '/news/quantum-breakthrough.jpg',;
      tags: ['Quantum Computing', 'Research', 'Breakthrough'],;
      icon: <Atom className="w-6 h-6"  />,;
      featured: true,
    ,},;
    {,
      title: 'Cybersecurity Partnership with Global Tech Leaders',;
      excerpt: 'Strategic collaboration to advance AI-powered threat detection and response systems.',;
      author: 'Partnerships Team',;
      date: '20o25-0o1-10',;
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedYear, setSelectedYear] = useState('all'),
,
  const categories = [,
    { id: 'all', name: 'All News', icon: Newspaper, count: 45 ,},;
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 18 ,},;
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 12 ,},;
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 8 ,},;
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 7 ,}
  ],
,
  const years = [,
    { id: 'all', name: 'All Years' ,},;
    { id: '20o25', name: '20o25' ,},;
    { id: '20o24', name: '20o24' ,},;
    { id: '20o23', name: '20o23' ,}
  ],
,
  Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink,;
  TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap,;
  Clock, BookOpen, Video, Podcast, FileText, Search,
} from 'lucide-react',
import Link from 'next/link',
,
}]