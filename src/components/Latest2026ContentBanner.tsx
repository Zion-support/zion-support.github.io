import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Cpu } from 'lucide-react';

interface Latest2026ContentBannerProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'featured';
  autoRotate?: boolean;
  rotationInterval?: number;
}

const Latest2026ContentBanner: React.FC<Latest2026ContentBannerProps> = ({
  className = '',
  variant = 'hero',
  autoRotate = true,
  rotationInterval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const featuredContent = [
    {
      id: 'ai-autonomous-infrastructure',
      title: 'AI Autonomous Infrastructure 2026',
      description: 'Self-healing systems with 99.9% uptime and zero-touch operations',
      icon: Cpu,
      color: 'from-purple-600 to-blue-600',
      bgColor: 'from-purple-50 to-blue-50',
      borderColor: 'border-purple-200',
      link: '/blog/ai-autonomous-infrastructure-2026',
      category: 'Infrastructure',
      readTime: '25 min',
      featured: true
    },
    {
      id: 'quantum-hybrid-computing',
      title: 'AI Quantum Hybrid Computing 2026',
      description: '1000x faster optimization with quantum-AI breakthrough capabilities',
      icon: Zap,
      color: 'from-purple-600 to-cyan-600',
      bgColor: 'from-purple-50 to-cyan-50',
      borderColor: 'border-purple-200',
      link: '/blog/ai-quantum-hybrid-computing-2026',
      category: 'Quantum AI',
      readTime: '30 min',
      featured: true
    },
    {
      id: 'zero-trust-security',
      title: 'AI Zero Trust Security 2026',
      description: 'Unbreakable defense with 99.9% threat detection and autonomous response',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      link: '/blog/ai-zero-trust-security-2026',
      category: 'Cybersecurity',
      readTime: '28 min',
      featured: true
    },
    {
      id: 'enterprise-transformation',
      title: 'AI Enterprise Transformation Success',
      description: '$25M ROI case study with 99.9% uptime and 90% cost reduction',
      icon: Sparkles,
      color: 'from-green-600 to-blue-600',
      bgColor: 'from-green-50 to-blue-50',
      borderColor: 'border-green-200',
      link: '/case-studies/ai-autonomous-enterprise-transformation-2026',
      category: 'Case Study',
      readTime: '15 min',
      featured: true
    }
  ];

  React.useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, featuredContent.length]);

  const currentContent = featuredContent[currentIndex];

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r ${currentContent.bgColor} border ${currentContent.borderColor} rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${currentContent.color} rounded-lg flex items-center justify-center`}>
              <currentContent.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-xs text-gray-500">{currentContent.readTime}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{currentContent.title}</h3>
              <p className="text-xs text-gray-600">{currentContent.description}</p>
            </div>
          </div>
          <Link
            to={currentContent.link}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Read →
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`bg-gradient-to-r ${currentContent.bgColor} border ${currentContent.borderColor} rounded-xl p-6 ${className}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${currentContent.color} rounded-lg flex items-center justify-center`}>
              <currentContent.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED 2026
                </span>
                <span className="text-xs text-gray-500">{currentContent.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{currentContent.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{currentContent.description}</p>
            </div>
          </div>
          <Link
            to={currentContent.link}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Article →
          </Link>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Category: {currentContent.category}</span>
            <span>•</span>
            <span>Published: Jan 20, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Hero variant
  return (
    <div className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-lg font-bold">🚀 BREAKTHROUGH 2026 CONTENT</span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover revolutionary AI technologies and real-world success stories that are transforming industries and delivering unprecedented results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <Link
              key={content.id}
              to={content.link}
              className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'bg-white/20 scale-105' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center`}>
                  <content.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                    NEW 2026
                  </span>
                  <span className="text-xs text-indigo-200">{content.readTime}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                {content.title}
              </h3>
              <p className="text-sm text-indigo-100 mb-4">
                {content.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-indigo-300">{content.category}</span>
                <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:text-yellow-200 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <Link
            to="/blog"
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Latest2026ContentBanner;