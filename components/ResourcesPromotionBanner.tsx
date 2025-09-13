import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Star, 
  Users, 
  ArrowRight, 
  X, 
  BookOpen, 
  Video, 
  Code,
  Database,
  Shield,
  Zap
} from 'lucide-react';

const ResourcesPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentResource, setCurrentResource] = useState(0);

  const featuredResources = [
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide 2025',
      description: '200-page comprehensive guide covering everything from AI strategy to deployment',
      type: 'PDF Guide',
      downloads: '25,000+',
      rating: 4.9,
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      cta: 'Download Free'
    },
    {
      id: 'ai-fundamentals-course',
      title: 'AI Fundamentals: Complete Course',
      description: '50+ video lessons covering AI fundamentals, machine learning, and deep learning',
      type: 'Video Course',
      downloads: '45,000+',
      rating: 4.9,
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      cta: 'Start Learning'
    },
    {
      id: 'ai-model-templates',
      title: 'AI Model Templates Collection',
      description: '100+ pre-built AI model templates for common use cases and industries',
      type: 'Code Library',
      downloads: '35,000+',
      rating: 4.8,
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      cta: 'Get Templates'
    },
    {
      id: 'multimodal-dataset',
      title: 'Multimodal AI Dataset Collection',
      description: 'Comprehensive collection of text, image, audio, and video datasets',
      type: 'Dataset Collection',
      downloads: '8,200+',
      rating: 4.9,
      icon: Database,
      color: 'from-orange-500 to-red-500',
      cta: 'Access Data'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResource((prev) => (prev + 1) % featuredResources.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = featuredResources[currentResource];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className={`p-3 rounded-xl bg-gradient-to-r ${current.color} flex-shrink-0`}>
                <current.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">
                    FEATURED RESOURCE
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{current.rating}</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Download className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{current.downloads}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {current.title}
                </h3>

                <p className="text-gray-300 mb-3 text-sm">
                  {current.description}
                </p>

                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                  <span className="px-2 py-1 bg-white/10 rounded">{current.type}</span>
                  <span>•</span>
                  <span>Free Download</span>
                  <span>•</span>
                  <span>Updated Weekly</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/resources/${current.id}`}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${current.color} text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm`}
                  >
                    {current.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  
                  <Link
                    to="/resources"
                    className="inline-flex items-center px-4 py-2 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all hover:bg-white/20 text-sm"
                  >
                    Browse All Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Indicators */}
          <div className="flex flex-col space-y-1">
            {featuredResources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentResource(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentResource 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to resource ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-4000 ease-linear"
            style={{ 
              width: `${((currentResource + 1) / featuredResources.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPromotionBanner;