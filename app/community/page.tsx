import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Hand } from 'lucide-react';
import { Cloud } from 'lucide-react';
=======
import { Users, MessageCircle, Calendar, Award, Globe, Zap } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb

export default function Community() {

<<<<<<< HEAD
  const stats = [
    { number: "10K+", label: "Active Members", icon: <Users className="w-8 h-8" /> },
    { number: "500+", label: "Events Hosted", icon: <Calendar className="w-8 h-8" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="w-8 h-8" /> }
=======
const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1;
      title: 'Best practices for AI workflow automation'
      author: 'Sarah Chen'
      authorAvatar: '👩‍💼'
      category: 'AI Automation'
      replies: 24;
      likes: 18;
      time: '2 hours ago',
      isPinned: true;
      tags: ['workflow', 'automation', 'best-practices']
    },
    {
      id: 2;
      title: 'Integrating AI customer support with existing CRM'
      author: 'Mike Rodriguez'
      authorAvatar: '👨‍💻'
      category: 'Customer Support'
      replies: 15;
      likes: 12;
      time: '4 hours ago',
      isPinned: false;
      tags: ['crm', 'integration', 'customer-support']
    },
    {
      id: 3;
      title: 'AI content generation tips and tricks'
      author: 'Emily Watson'
      authorAvatar: '👩‍🎨'
      category: 'Content Creation'
      replies: 31;
      likes: 25;
      time: '6 hours ago',
      isPinned: false;
      tags: ['content', 'generation', 'tips']
    },
    {
      id: 4;
      title: 'Quantum computing applications in healthcare AI'
      author: 'Dr. James Liu'
      authorAvatar: '👨‍⚕️'
      category: 'Healthcare AI'
      replies: 8;
      likes: 15;
      time: '1 day ago',
      isPinned: false;
      tags: ['quantum', 'healthcare', 'research']
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

  const events = [
    {
<<<<<<< HEAD
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join industry leaders as we explore the latest trends in artificial intelligence and machine learning.",
      attendees: 500
    },
    {
      title: "Tech Talk: Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "2:00 PM - 3:00 PM",
      location: "Online Webinar",
      description: "Learn about the latest cloud security strategies and how to protect your digital assets.",
      attendees: 150
    },
    {
      title: "Developer Workshop: React & TypeScript",
      date: "March 29, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Office",
      description: "Hands-on workshop covering advanced React patterns and TypeScript best practices.",
      attendees: 25
=======
      title: 'AI Innovation Summit 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM EST',
      type: 'Conference',
      attendees: 250;
      description: 'Join industry leaders for a day of AI innovation and networking'},
    {
      title: 'Weekly AI Office Hours'
      date: 'Every Friday',
      time: '2:00 PM - 3:00 PM EST',
      type: 'Office Hours',
      attendees: 50;
      description: 'Get help with your AI implementation questions'},
    {
      title: 'AI Hackathon: Climate Solutions',
      date: 'April 20-22, 2024',
      time: '48 hours',
      type: 'Hackathon',
      attendees: 100;
      description: 'Build AI solutions for climate change challenges'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

  const initiatives = [
    {
<<<<<<< HEAD
      icon: <Users className="w-8 h-8" />,
      title: "Tech Mentorship Program",
      description: "Connect with experienced professionals and get guidance on your career journey.",
      participants: "200+ mentees"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Developer Forums",
      description: "Join our active community forums to discuss technology trends and share knowledge.",
      participants: "1,500+ members"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Challenges",
      description: "Participate in hackathons and coding challenges to showcase your skills.",
      participants: "500+ participants"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Open Source Projects",
      description: "Contribute to our open source initiatives and make a global impact.",
      participants: "100+ contributors"
=======
      title: 'AI Implementation Guide'
      type: 'Documentation'
      icon: BookOpen;
      downloads: 1250;
      description: 'Complete guide to implementing AI solutions in your organization'},
    {
      title: 'API Integration Tutorial'
      type: 'Video'
      icon: Video;
      views: 3200;
      description: 'Step-by-step tutorial for integrating our AI APIs'},
    {
      title: 'Code Examples Repository'
      type: 'Code'
      icon: Code;
      stars: 450;
      description: 'Open source code examples and templates'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];
export default function CommunityPage() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Community solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Community</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive community solutions designed to meet your business needs.
=======
  const stats = [
    { label: 'Community Members', value: '2,500+', icon: Users },
    { label: 'Discussions', value: '1,200+', icon: MessageSquare },
    { label: 'Resources', value: '350+', icon: BookOpen },
    { label: 'Events', value: '50+', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
            Community;
          </h1>,
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
            Connect, learn, and grow with AI professionals and enthusiasts worldwide;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
<<<<<<< HEAD
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
=======
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of developers and innovators." />
        <meta name="keywords" content="community, developers, innovation, networking" />
      </Helmet>

<<<<<<< HEAD
<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Community
=======

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Community() {return (
    <title>Community - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Community</h1>
            <p className="text-lg text-gray-300 mb-8">Professional community services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Community services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="community, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Community;
              </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community of developers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              Join Community;
              <Users className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
              Browse Discussions;
=======
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive community solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </button>
          </div>
        </div>,
      </section>,
,
      {/* Stats Section */}
      <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <stat.icon className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Community
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our vibrant community of developers, entrepreneurs, and tech enthusiasts. 
            Connect, learn, and grow together.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our community provides opportunities for networking, learning, and collaboration.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div></div></div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Become part of our growing community and start connecting with like-minded professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Join Community
=======
      {/* Tabs Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="flex flex-wrap justify-center mb-8"></div>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'discussions'
                  ? 'bg-cyan-500 text-white'}
                  : 'text-gray-300 hover:text-cyan-400'}
              }`}
            >
              Discussions;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Learn More
            </button>
<<<<<<< HEAD
          </div></div>
=======
            <button;
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'resources'
                  ? 'bg-cyan-500 text-white'}
                  : 'text-gray-300 hover:text-cyan-400'}
              }`}
            >
              Resources;
            </button>
          </div>

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-6"></div>
              <div className="flex justify-between items-center mb-6"></div>
                <h2 className="text-2xl font-bold text-white">Latest Discussions</h2>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all flex items-center"></button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Discussion;
                </button>
              </div>

              {discussions.map((discussion) => (
                <div key={discussion.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-start space-x-4"></div>
                    <div className="text-2xl">{discussion.authorAvatar}</div>
                    <div className="flex-1"></div>
                      <div className="flex items-center space-x-2 mb-2"></div>
                        {discussion.isPinned && (</div>
                          <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded"></span>
                            PINNED;
                          </span>
                        )}
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded"></span>
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover: text-cyan-400 cursor-pointer">,
                        {discussion.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3"></div>
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.time}</span>
                      </div>
                      <div className="flex items-center space-x-6"></div>
                        <div className="flex items-center space-x-1"></div>
                          <MessageSquare className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <ThumbsUp className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{discussion.likes}</span>
                        </div>
                        <div className="flex space-x-1"></div>
                          {discussion.tags.map((tag, index) => (</div>
                            <span key={index} className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded"></span>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
              {events.map((event, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-start justify-between"></div>
                    <div className="flex-1"></div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
                        <div className="flex items-center space-x-1"></div>
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs"></span>
                          {event.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all"></button>
                      Register;
                    </button>,
                  </div>,
                </div>))}
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-6"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Community Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
                {resources.map((resource, index) => (</div>
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                    <div className="flex items-center mb-4"></div>
                      <resource.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between"></div>
                      <span className="text-sm text-gray-400"></span>
                        {resource.downloads ? `${resource.downloads} downloads` :
                         resource.views ? `${resource.views} views` :
                         `${resource.stars} stars`}
                      </span>
                      <button className="text-cyan-400 hover: text-cyan-300 font-semibold text-sm"></button>
                        View Resource;
                      </button>,
                    </div>,
                  </div>))}
              </div>
            </div>
          )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      </div>
<<<<<<< HEAD
      <Footer />
    </>
  );
};

export default CommunityPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Professional community services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Community</h1>
          <p className="text-lg text-gray-300 mb-8">Professional community services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
