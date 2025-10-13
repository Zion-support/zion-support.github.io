import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pause } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Network } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Play } from 'lucide-react';
import { Hand } from 'lucide-react';
import { Cloud } from 'lucide-react';

import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Maximize, ArrowRight, CheckCircle, Star, Calendar, Users, Award } from 'lucide-react';

export default function Page() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { number: "500+", label: "Demos Available" },
    { number: "50K+", label: "Users Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const benefits = [
    {
      icon: <Play className="w-8 h-8 text-cyan-400" />,
      title: "Interactive Demos",
      description: "Hands-on experience with our solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Expert Guidance",
      description: "Learn from our experienced team"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Proven Results",
      description: "See real-world success stories"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Data-Driven",
      description: "Make informed decisions with data"
    }
  ];

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.',
      duration: '3:45',
      category: 'AI Analytics',
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Interactive Dashboards', 'Automated Reporting'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent chatbot in action with natural language processing, sentiment analysis, and seamless human handoff.',
      duration: '2:30',
      category: 'AI Customer Service',
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-language Support', 'Human Handoff'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Watch our AI create high-quality content including blog posts, social media content, and marketing materials with SEO optimization.',
      duration: '4:15',
      category: 'AI Content',
      features: ['SEO Optimization', 'Brand Voice Training', 'Multi-format Output', 'Content Calendar'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Defense',
      description: 'See our advanced threat detection system in action with real-time monitoring, automated response, and compliance reporting.',
      duration: '3:20',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Automated Response', 'Real-time Monitoring', 'Compliance Reports'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: '5g-solutions',
      title: '5G Network Solutions',
      description: 'Explore our 5G network infrastructure solutions with ultra-low latency, massive IoT connectivity, and edge computing capabilities.',
      duration: '5:00',
      category: '5G Technology',
      features: ['Ultra-low Latency', 'IoT Connectivity', 'Edge Computing', 'Smart City Solutions'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Discover our comprehensive cloud solutions with automated scaling, backup, disaster recovery, and cost optimization.',
      duration: '4:30',
      category: 'Cloud Services',
      features: ['Auto-scaling', 'Disaster Recovery', 'Cost Optimization', 'Multi-cloud Support'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsPlaying(false);
  };

  const handlePrevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Live Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Live Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our AI and IT solutions with interactive demos and see the power of our technology.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Demos</h2>
          <p className="text-gray-300 mb-8">
            Click through our interactive demos to see how our solutions can transform your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {demo.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <button
                  onClick={() => setCurrentDemo(index)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Try Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}