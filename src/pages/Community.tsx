import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Star, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Globe, 
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Community() {
  const communityStats = [
    { label: 'Active Members', value: '15,000+', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Discussions', value: '50,000+', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
    { label: 'Events Hosted', value: '200+', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { label: 'Countries', value: '45+', icon: Globe, color: 'from-orange-500 to-red-500' }
  ];

  const communityForums = [
    {
      title: 'AI & Machine Learning',
      description: 'Discuss AI technologies, share projects, and get help with ML implementations',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      topics: 1250,
      posts: 8900,
      members: 3200,
      href: '/community/ai-ml'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, DevOps practices, and deployment strategies',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      topics: 980,
      posts: 6700,
      members: 2800,
      href: '/community/cloud-devops'
    },
    {
      title: 'Cybersecurity',
      description: 'Security best practices, threat discussions, and compliance topics',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      topics: 750,
      posts: 5200,
      members: 2100,
      href: '/community/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'Business transformation strategies and technology adoption',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      topics: 620,
      posts: 4100,
      members: 1800,
      href: '/community/digital-transformation'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2025',
      description: 'Join industry leaders for insights on the future of AI in business',
      date: 'March 15-17, 2025',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: 500,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/events/ai-innovation-summit-2025'
    },
    {
      title: 'Cloud Security Workshop',
      description: 'Hands-on workshop on securing cloud infrastructure',
      date: 'March 22, 2025',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: 150,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/events/cloud-security-workshop'
    },
    {
      title: 'DevOps Best Practices Meetup',
      description: 'Local meetup for DevOps professionals to share experiences',
      date: 'March 28, 2025',
      location: 'New York, NY',
      type: 'Meetup',
      attendees: 75,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/events/devops-meetup-nyc'
    }
  ];

  const featuredDiscussions = [
    {
      title: 'Implementing Zero Trust Architecture in Enterprise',
      author: 'Sarah Chen',
      category: 'Cybersecurity',
      replies: 45,
      views: 1200,
      lastActivity: '2 hours ago',
      tags: ['Zero Trust', 'Enterprise', 'Security'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/community/discussions/zero-trust-enterprise'
    },
    {
      title: 'Best Practices for AI Model Deployment',
      author: 'Mike Rodriguez',
      category: 'AI & ML',
      replies: 32,
      views: 890,
      lastActivity: '5 hours ago',
      tags: ['AI', 'Deployment', 'Best Practices'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/community/discussions/ai-model-deployment'
    },
    {
      title: 'Cost Optimization Strategies for Multi-Cloud',
      author: 'Lisa Thompson',
      category: 'Cloud & DevOps',
      replies: 28,
      views: 650,
      lastActivity: '1 day ago',
      tags: ['Multi-Cloud', 'Cost Optimization', 'DevOps'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/community/discussions/multi-cloud-cost-optimization'
    }
  ];

  const communityResources = [
    {
      title: 'Community Guidelines',
      description: 'Learn about our community standards and participation rules',
      icon: BookOpen,
      href: '/community/guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Calendar',
      description: 'Browse upcoming community events and webinars',
      icon: Calendar,
      href: '/events',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Member Directory',
      description: 'Connect with other community members and experts',
      icon: Users,
      href: '/community/members',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Resource Library',
      description: 'Access shared resources, templates, and tools',
      icon: Download,
      href: '/community/resources',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and collaborate with experts in AI, cloud computing, cybersecurity, and digital transformation."
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with technology professionals, share knowledge, and stay updated on industry trends.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Community page coming soon. We're building a vibrant community platform.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Community;
