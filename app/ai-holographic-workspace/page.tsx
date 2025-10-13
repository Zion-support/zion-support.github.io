import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award, Cloud, Code, Database, Mail, Clock, DollarSign, Globe, FileText, MessageSquare, TrendingUp, Target, Settings, Brain, Eye, Heart, Layers, Mic, Video, Image, Calculator, Box, Grid3X3, Layers3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIHolographicWorkspacePage = () => {
  const features = [
    {
      id: 'holographic-display',
      title: '3D Holographic Display',
      description: 'Crystal-clear 3D holographic projections with 4K resolution and 360-degree viewing angles.',
      icon: Monitor,
      features: ['4K Holographic Resolution', '360° Viewing Angles', 'Real-time Rendering', 'Depth Perception'],
      price: 'Starting at $399/month',
      category: 'Display Technology',
      rating: 4.9,
      reviews: 743,
      featured: true
    },
    {
      id: 'gesture-control',
      title: 'AI Gesture Control',
      description: 'Intuitive gesture recognition system that responds to natural hand movements and eye tracking.',
      icon: Eye,
      features: ['Hand Gesture Recognition', 'Eye Tracking', 'Voice Commands', 'Natural Interaction'],
      price: 'Starting at $199/month',
      category: 'Control Interface',
      rating: 4.8,
      reviews: 892,
      featured: true
    },
    {
      id: 'collaborative-workspace',
      title: 'Multi-User Collaboration',
      description: 'Seamless real-time collaboration with multiple users in shared holographic environments.',
      icon: Users,
      features: ['Real-time Collaboration', 'Shared Workspaces', 'Multi-user Support', 'Synchronized Views'],
      price: 'Starting at $299/month',
      category: 'Collaboration',
      rating: 4.9,
      reviews: 1156,
      featured: true
    },
    {
      id: 'data-visualization',
      title: '3D Data Visualization',
      description: 'Transform complex data into interactive 3D holographic visualizations and models.',
      icon: BarChart3,
      features: ['3D Data Models', 'Interactive Visualization', 'Real-time Updates', 'Immersive Analytics'],
      price: 'Starting at $249/month',
      category: 'Data Visualization',
      rating: 4.7,
      reviews: 567,
      featured: true
    },
    {
      id: 'virtual-meetings',
      title: 'Holographic Meetings',
      description: 'Conduct meetings in virtual holographic environments with lifelike avatars and spatial audio.',
      icon: MessageSquare,
      features: ['Lifelike Avatars', 'Spatial Audio', 'Virtual Environments', 'Meeting Recording'],
      price: 'Starting at $179/month',
      category: 'Communication',
      rating: 4.8,
      reviews: 1234,
      featured: false
    },
    {
      id: 'design-tools',
      title: '3D Design Tools',
      description: 'Advanced 3D modeling and design tools with holographic manipulation and real-time preview.',
      icon: Box,
      features: ['3D Modeling', 'Holographic Manipulation', 'Real-time Preview', 'Design Collaboration'],
      price: 'Starting at $349/month',
      category: 'Design',
      rating: 4.9,
      reviews: 678,
      featured: false
    }
  ];

  const capabilities = [
    {
      title: 'Spatial Computing',
      description: 'Interact with digital content in 3D space using natural gestures and movements',
      icon: <Grid3X3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mixed Reality',
      description: 'Blend holographic content with real-world environments for enhanced productivity',
      icon: <Layers3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Integration',
      description: 'Intelligent assistance and automation within the holographic workspace',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Sync',
      description: 'Seamless synchronization across devices and team members',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: "Active Workspaces", value: "5,000+", icon: Monitor },
    { label: "User Satisfaction", value: "98%", icon: Star },
    { label: "Productivity Boost", value: "300%", icon: Zap },
    { label: "Uptime", value: "99.9%", icon: Shield }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "Architecture Studio Pro",
      role: "Lead Architect",
      content: "The AI Holographic Workspace has revolutionized our design process. We can now visualize and manipulate 3D models in real-time, making our designs more innovative and efficient.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "James Wilson",
      company: "Global Tech Corp",
      role: "CTO",
      content: "Our remote teams are now more connected than ever. The holographic meetings feel like we're all in the same room, and the collaboration tools are incredibly intuitive.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Sarah Chen",
      company: "Data Analytics Inc",
      role: "Data Scientist",
      content: "The 3D data visualization capabilities are game-changing. We can now explore complex datasets in ways that were impossible with traditional 2D interfaces.",
      rating: 5,
      avatar: "SC"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Holographic Workspace - Zion Tech Group | Immersive 3D Collaboration Platform"
        description="Revolutionary AI-powered holographic workspace for immersive 3D collaboration, data visualization, and remote meetings. Experience the future of work."
        keywords="holographic workspace, 3D collaboration, mixed reality, spatial computing, virtual meetings, 3D visualization, immersive technology"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Holographic Workspace
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Step into the future of work with our revolutionary AI-powered holographic workspace. 
              Experience immersive 3D collaboration, data visualization, and remote meetings like never before.
            </p>
            <FuturisticButton
              href="#features"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              Explore Holographic Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <FuturisticCard key={index} className="text-center p-6">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Holographic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary technologies that transform how we work, collaborate, and visualize data
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center`}>
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-300">
                  {capability.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Holographic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive suite of holographic tools for modern professionals
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <FuturisticCard key={feature.id} className="p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {feature.featured && (
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{feature.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{feature.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({feature.reviews})</span>
                    </div>
                  </div>
                  <Link
                    to={`/${feature.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Holographic Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how organizations are transforming their workflows with holographic technology
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enter the Holographic Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your workspace and unlock new possibilities with AI-powered holographic technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                Start Holographic Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                Schedule Holographic Demo
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIHolographicWorkspacePage;
