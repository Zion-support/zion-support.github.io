import React from 'react';
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
interface Testimonial {
  id: string,
  name: string,
  title: string,
  company: string,
  content: string,
  rating: number,
  avatar: string,
  category: string}

const EnhancedTestimonialsSection: React.FC = $2;
      name: 'Dr. Sarah Chen',
      title: 'CTO',
      company: 'Quantum Dynamics Inc.',
      content: 'Zion Tech Group transformed our AI infrastructure completely. Their quantum cybersecurity solution prevented multiple sophisticated attacks and their AI business intelligence platform gave us insights we never had before. ROI exceeded 400% within 8 months.',
      rating: 5,
      avatar: 'SC',
      category: 'AI & Security'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'VP of Engineering',
      company: 'SpaceTech Ventures',
      content: 'Working with Zion Tech Group on our space technology platform was game-changing. Their edge computing orchestration and AI-powered mission planning reduced our satellite deployment time by 60% and increased mission success rate to 98%.',
      rating: 5,
      avatar: 'MR',
      category: 'Space Technology'
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      company: 'NeuralLink Research',
      content: 'Zion Tech Group\'s neural interface development tools are revolutionary. Their AI consciousness simulation platform accelerated our research by 3x and opened new possibilities we hadn\'t considered. The team\'s expertise is unmatched.',
      rating: 5,
      avatar: 'EW',
      category: 'Emerging Tech'
    },
    {
      id: '4',
      name: 'James Thompson',
      title: 'CEO',
      company: 'EdgeFlow Systems',
      content: 'The edge computing orchestration solution from Zion Tech Group transformed our IoT infrastructure. We saw 50% latency reduction and 40% cost savings while improving reliability. Their support team is incredibly responsive.',
      rating: 5,
      avatar: 'JT',
      category: 'Infrastructure'
    },
    {
      id: '5',
      name: 'Dr. Lisa Park',
      title: 'Chief Innovation Officer',
      company: 'FutureTech Labs',
      content: 'Zion Tech Group\'s quantum AI neural networks are cutting-edge. We\'ve achieved breakthroughs in consciousness simulation that seemed impossible. Their technology is truly ahead of its time.',
      rating: 5,
      avatar: 'LP',
      category: 'Quantum AI'
    },
    {
      id: '6',
      name: 'Robert Kim',
      title: 'Head of Digital Transformation',
      company: 'Global Innovations Corp',
      content: 'Implementing Zion Tech Group\'s AI business intelligence suite revolutionized our decision-making process. We now have real-time insights across all departments, leading to 35% faster market response and 28% cost optimization.',
      rating: 5,
      avatar: 'RK',
      category: 'AI & Analytics'
    }
  ],

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle},
    { number: '50+', label: 'Enterprise Clients', icon: Users},
    { number: '99.9%', label: 'Client Satisfaction', icon: Award},
    { number: '4.9/5', label: 'Average Rating', icon: Star}
  ],

  const renderStars = (rating: number) => {
    return Array.from({ length: 5}, (_, i) => (
      <Star
        key = $2;
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover why leading companies trust Zion Tech Group to transform their business with cutting-edge technology solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key = $2;
export default EnhancedTestimonialsSection,