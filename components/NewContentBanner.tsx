import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  isHot?: boolean;
  icon: string;
  stats?: string;
}

const hotContent: ContentItem[] = [
  {
    title: "AI Business Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.",
    href: "/blog/ai-business-automation-2025",
    category: "AI & Automation",
    readTime: "12 min read",
    isNew: true,
    isHot: true,
    icon: "🤖",
    stats: "40% productivity boost"
  },
  {
    title: "AI Startup Funding Playbook 2025: From Seed to Series A",
    description: "Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.",
    href: "/blog/ai-startup-funding-playbook-2025",
    category: "Startup Strategy",
    readTime: "22 min read",
    isNew: true,
    isHot: true,
    icon: "💰",
    stats: "$47B+ funding insights"
  },
  {
    title: "AI Financial Services Transformation: $50M Cost Savings Case Study",
    description: "Discover how a leading financial services company achieved $50M cost savings and 300% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-financial-services-transformation-2025",
    category: "Case Study",
    readTime: "18 min read",
    isNew: true,
    isHot: true,
    icon: "🏦",
    stats: "$50M savings achieved"
  },
  {
    title: "AI Implementation Master Guide 2025: Complete 150-Page Playbook",
    description: "Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.",
    href: "/resources/ai-implementation-master-guide-2025",
    category: "Master Guide",
    readTime: "150 pages",
    isNew: true,
    isHot: true,
    icon: "📚",
    stats: "500+ companies using this"
  }
];

interface NewContentBannerProps {
  variant?: 'default' | 'gradient' | 'minimal';
  showStats?: boolean;
  maxItems?: number;
}

const NewContentBanner: React.FC<NewContentBannerProps> = ({ 
  variant = 'default',
  showStats = true,
  maxItems = 4 
}) => {
  const content = hotContent.slice(0, maxItems);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden';
      case 'minimal':
        return 'bg-white border-2 border-blue-200 text-gray-900';
      default:
        return 'bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden';
    }
  };

  const getCardClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-white border-opacity-20';
      case 'minimal':
        return 'bg-gray-50 hover:bg-gray-100 border border-gray-200';
      default:
        return 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-white border-opacity-20';
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'text-white';
      case 'minimal':
        return 'text-gray-900';
      default:
        return 'text-white';
    }
  };

  return (
    <section className={`py-20 ${getVariantClasses()}`}>
      {variant !== 'minimal' && <div className="absolute inset-0 bg-black opacity-10"></div>}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${variant === 'minimal' ? 'bg-blue-100 text-blue-800' : 'bg-white bg-opacity-20'} rounded-full px-6 py-2 mb-6`}>
            <span className="text-sm font-medium">🔥 HOT THIS WEEK - JANUARY 2025</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${getTextClasses()}`}>
            🚀 Fresh AI & Business Content Just Dropped
          </h2>
          
          <p className={`text-xl md:text-2xl ${variant === 'minimal' ? 'text-gray-600' : 'opacity-90'} mb-8 max-w-4xl mx-auto leading-relaxed`}>
            Discover our latest expert insights, case studies, and resources. From AI predictions and automation trends 
            to retail transformation success stories, get the knowledge you need to succeed in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className={`${variant === 'minimal' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'} px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg`}
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className={`${variant === 'minimal' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' : 'border-2 border-white text-white hover:bg-white hover:text-blue-600'} px-10 py-4 rounded-lg font-semibold transition-colors text-lg`}
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, index) => (
            <Link key={item.href} href={item.href} className="group">
              <div className={`${getCardClasses()} p-6 rounded-xl transition-all duration-300`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  {item.isNew && (
                    <span className={`${variant === 'minimal' ? 'bg-green-100 text-green-800' : 'bg-white bg-opacity-20 text-white'} text-xs font-medium px-2 py-1 rounded-full`}>
                      NEW
                    </span>
                  )}
                  {item.isHot && (
                    <span className={`${variant === 'minimal' ? 'bg-orange-100 text-orange-800' : 'bg-white bg-opacity-20 text-white'} text-xs font-medium px-2 py-1 rounded-full`}>
                      HOT
                    </span>
                  )}
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${getTextClasses()}`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm ${variant === 'minimal' ? 'text-gray-600' : 'opacity-90'} mb-3 line-clamp-3`}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center text-xs ${variant === 'minimal' ? 'text-gray-500' : 'opacity-75'}`}>
                    <span>{item.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{item.category}</span>
                  </div>
                  {showStats && item.stats && (
                    <div className={`text-xs ${variant === 'minimal' ? 'text-blue-600' : 'opacity-75'}`}>
                      {item.stats}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className={`${variant === 'minimal' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'} px-8 py-3 rounded-lg font-semibold transition-colors inline-block mr-4`}
          >
            View All Articles
          </Link>
          <Link
            href="/resources"
            className={`${variant === 'minimal' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' : 'border-2 border-white text-white hover:bg-white hover:text-blue-600'} px-8 py-3 rounded-lg font-semibold transition-colors inline-block`}
          >
            Download Resources
          </Link>
        </div>
<<<<<<< HEAD
interface NewContentBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
}

const NewContentBanner: React.FC<NewContentBannerProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  gradientFrom,
  gradientTo,
  className = ''
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-47dd
      </div>
    </section>
  );
};

export default NewContentBanner;
<<<<<<< HEAD
export { hotContent };
export default NewContentBanner;
=======
export { hotContent };
>>>>>>> cursor/create-and-deploy-new-content-47dd
