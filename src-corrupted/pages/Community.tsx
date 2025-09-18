import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Calendar, BookOpen, Video, 
  Star, TrendingUp, Award, Globe, ArrowRight, 
  Search, Filter, Clock, MapPin, UserPlus, Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Community = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchQuery, setSearchQuery] = useState<any>('');

  const communityCategories = [
    {
      id: 'ai-community',
      title: 'AI & Machine Learning',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      members: '2.5k',
      topics: '1.2k',
      description: 'Discuss AI trends, share models, and collaborate on ML projects'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      members: '1.8k',
      topics: '890',
      description: 'Cloud infrastructure, CI/CD, and deployment strategies'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Star,
      color: 'from-red-500 to-orange-500',
      members: '1.2k',
      topics: '650',
      description: 'Security best practices, threat intelligence, and compliance'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      members: '1.5k',
      topics: '720',
      description: 'Data science, business intelligence, and analytics tools'
    },
    {
      id: 'startup-ecosystem',
      title: 'Startup Ecosystem',
      icon: UserPlus,
      color: 'from-yellow-500 to-orange-500',
      members: '3.1k',
      topics: '1.5k',
      description: 'Startup advice, funding, and entrepreneurial insights'
    },
    {
      id: 'general-tech',
      title: 'General Technology',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      members: '2.8k',
      topics: '1.8k',
      description: 'General tech discussions, industry news, and innovation'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2024',
      date: 'March 15-16, 2024',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Virtual + New York City',
      type: 'Conference',
      attendees: '500+',
      description: 'Join industry leaders for two days of AI innovation, networking, and insights.',
      registration: 'Open',
      featured: true
    },
    {
      title: 'Cloud Architecture Workshop',
      date: 'March 22, 2024',
      time: '2:00 PM - 5:00 PM EST',
      location: 'Virtual',
      type: 'Workshop',
      attendees: '100',
      description: 'Learn best practices for designing scalable cloud architectures.',
      registration: 'Open',
      featured: false
    },
    {
      title: 'Cybersecurity Roundtable',
      date: 'March 28, 2024',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual',
      type: 'Roundtable',
      attendees: '50',
      description: 'Expert discussion on emerging cybersecurity threats and solutions.',
      registration: 'Limited',
      featured: false
    },
    {
      title: 'Startup Pitch Competition',
      date: 'April 5, 2024',
      time: '6:00 PM - 9:00 PM EST',
      location: 'San Francisco + Virtual',
      type: 'Competition',
      attendees: '200+',
      description: 'Watch innovative startups pitch their ideas to investors and experts.',
      registration: 'Open',
      featured: true
    }
  ];

  const recentDiscussions = [
    {
      title: 'Best practices for implementing AI in healthcare',
      author: 'Dr. Sarah Chen',
      category: 'AI & Machine Learning',
      replies: 24,
      views: '1.2k',
      lastActivity: '2 hours ago',
      tags: ['AI', 'Healthcare', 'Best Practices']
    },
    {
      title: 'Cloud cost optimization strategies for startups',
      author: 'Mike Rodriguez',
      category: 'Cloud & DevOps',
      replies: 18,
      views: '890',
      lastActivity: '5 hours ago',
      tags: ['Cloud', 'Cost Optimization', 'Startups']
    },
    {
      title: 'Zero-trust security architecture implementation',
      author: 'Alex Thompson',
      category: 'Cybersecurity',
      replies: 31,
      views: '1.5k',
      lastActivity: '1 day ago',
      tags: ['Security', 'Zero Trust', 'Architecture']
    },
    {
      title: 'Data pipeline optimization techniques',
      author: 'Lisa Wang',
      category: 'Data & Analytics',
      replies: 15,
      views: '720',
      lastActivity: '2 days ago',
      tags: ['Data', 'Pipelines', 'Optimization']
    },
    {
      title: 'Building a successful tech startup team',
      author: 'David Kim',
      category: 'Startup Ecosystem',
      replies: 42,
      views: '2.1k',
      lastActivity: '3 days ago',
      tags: ['Startup', 'Team Building', 'Leadership']
    }
  ];

  const communityStats = [
    { label: 'Total Members', value: '12.5k+', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Discussions', value: '6.8k+', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
    { label: 'Events Hosted', value: '150+', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { label: 'Resources Shared', value: '2.3k+', icon: BookOpen, color: 'from-orange-500 to-red-500' }
  ];

  const resources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and best practices',
      icon: BookOpen,
      href: '/community/guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Calendar',
      description: 'Browse upcoming events and register for sessions',
      icon: Calendar,
      href: '/community/events',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Resource Library',
      description: 'Access shared resources, templates, and tools',
      icon: BookOpen,
      href: '/community/resources',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals for guidance',
      icon: Star,
      href: '/community/mentorship',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filteredCategories = communityCategories.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.id === selectedCategory;
  });

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Community - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Community</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
