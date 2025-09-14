"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Play
  BookOpen
  Brain
  Zap
  Award,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ExternalLink,
  Download,
  Share2
} from 'lucide-react';

const UltimateContentShowcaseBanner2025 = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isPlayingsetIsPlaying] = useState(true);

  const contentFeatures = [
    {
      title: 'AI Tools Showcase',
      description: 'Discover 24+ cutting-edge AI tools transforming industries',
      icon: Brain,
      color: 'blue',
      stats: '24 Tools',
      link: '#ai-tools'
    },
    {
      title: 'Interactive Case Studies',
      description: 'Real success stories with measurable business impact',
      icon: Award,
      color: 'green',
      stats: '12 Studies',
      link: '#case-studies'
    },
    {
      title: 'AI Learning Hub',
      description: 'Master AI with expert-led courses and hands-on projects',
      icon: BookOpen,
      color: 'purple',
      stats: '48 Courses',
      link: '#learning-hub'
    },
    {
      title: 'Live Tech Demos',
      description: 'Interactive demonstrations of AI solutions in action',
      icon: Play,
      color: 'orange',
      stats: 'Live Now',
      link: '#demos'
    }
  ];

  const testimonials = [
    {
      text: "The AI tools showcase helped us identify the perfect solution for our automation needs. Game-changing!",
      author: "Sarah Chen",
      position: "CTOTechCorp",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      text: "The case studies provided incredible insights. We achieved 300% ROI in just 6 months!",
      author: "Michael Rodriguez",
      position: "CEOInnovateLabs",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      text: "The learning hub is phenomenal. Our team is now AI-certified and driving real results.",
      author: "Jennifer Park",
      position: "VP EngineeringDataFlow",
      avatar: "/api/placeholder/60/60",
      rating: 5
    }
  ];

  const stats = [
    { number: '50K+'label: 'Active Learners'icon: Users },
    { number: '95%'label: 'Success Rate'icon: TrendingUp },
    { number: '4.9/5'label: 'Average Rating'icon: Star },
    { number: '24/7'label: 'Expert Support'icon: Zap }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentFeatures.length);
      }4000);
      return () => clearInterval(interval);
    }
  }[isPlayingcontentFeatures.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ultimate AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Showcase 2025
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore revolutionary AI toolsinteractive case studiescomprehensive learning resources
            and live demonstrations - all in one powerful platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center text-lg">
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Features Carousel */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              What's New in 2025
            </h2>
            <p className="text-blue-200">
              Discover our latest content and features
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentFeatures.map((featureindex) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className={`w-16 h-16 bg-${feature.color}-500/20 rounded-2xl flex items-center justify-center mb-6`}>
                            <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-blue-100 text-lg mb-6">
                            {feature.description}
                          </p>
                          <div className="flex items-center space-x-4">
                            <span className="px-4 py-2 bg-white/20 text-white rounded-lg font-medium">
                              {feature.stats}
                            </span>
                            <button className="text-white hover:text-blue-300 transition-colors flex items-center">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4 mx-auto">
                                <Play className="w-10 h-10 text-white" />
                              </div>
                              <p className="text-white font-medium">Interactive Preview</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentFeatures.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Play className={`w-5 h-5 text-white ${isPlaying ? 'opacity-50' : ''}`} />
            </button>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-blue-200">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0y: 20 }}
                whileInView={{ opacity: 1y: 0 }}
                transition={{ duration: 0.5delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-blue-200">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Braintitle: 'AI Tools'description: '24+ cutting-edge tools'color: 'blue' },
            { icon: Awardtitle: 'Case Studies'description: 'Real success stories'color: 'green' },
            { icon: BookOpentitle: 'Learning Hub'description: '48 expert courses'color: 'purple' },
            { icon: Playtitle: 'Live Demos'description: 'Interactive showcases'color: 'orange' }
          ].map((featureindex) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors"
            >
              <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-200 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Everything?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get instant access to all our AI toolscase studieslearning resources
              and interactive demos. Start your AI transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Guide
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcaseBanner2025;