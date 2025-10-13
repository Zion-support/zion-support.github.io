import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Hand, Play, Pause, Calendar, Network } from 'lucide-react';
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

export default function DemoPage() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

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
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Demo</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive demo solutions designed to meet your business needs.
          </p>
          
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
    </div>
  );
}
