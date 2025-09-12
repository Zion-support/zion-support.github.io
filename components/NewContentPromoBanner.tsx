import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Rocket, BookOpen } from 'lucide-react';

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'trending';
  className?: string;
}

export default function NewContentPromoBanner({ 
  variant = 'default', 
  className = '' 
}: NewContentPromoBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
          text: 'text-white',
          button: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-purple-600',
          text: 'text-white',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonSecondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  const newContent = [
    {
      title: "AI-Quantum Computing Breakthrough",
      description: "Revolutionary convergence unlocking unprecedented power",
      href: "/blog/ai-quantum-computing-breakthrough-2025",
      icon: "⚛️",
      category: "Quantum AI",
      isNew: true
    },
    {
      title: "AI Space Technology Revolution",
      description: "Transforming space exploration with autonomous missions",
      href: "/blog/ai-space-technology-revolution-2025",
      icon: "🚀",
      category: "Space AI",
      isNew: true
    },
    {
      title: "Manufacturing AI Success Story",
      description: "300% productivity increase and $50M savings",
      href: "/case-studies/ai-manufacturing-transformation-success-2025",
      icon: "🏭",
      category: "Manufacturing AI",
      isNew: true
    },
    {
      title: "AI Implementation Master Guide",
      description: "Complete roadmap for successful AI transformation",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Implementation Guide",
      isNew: true
    }
  ];

  return (
    <section className={`py-16 ${styles.container} ${className} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.text}`}>
            Revolutionary New Content
          </h2>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.text} opacity-90`}>
            Discover the latest breakthroughs in AI technology, quantum computing, space exploration, 
            and real-world transformation success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className={`${styles.button} px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl`}
            >
              <BookOpen className="inline w-5 h-5 mr-2" />
              Explore All Content
            </Link>
            <Link
              href="/resources"
              className={`${styles.buttonSecondary} px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg`}
            >
              <Zap className="inline w-5 h-5 mr-2" />
              Download Resources
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className="ml-2 text-xs font-bold bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className={`text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors ${styles.text}`}>
                  {item.title}
                </h3>
                <p className={`text-sm opacity-90 ${styles.text}`}>
                  {item.description}
                </p>
                <div className="flex items-center mt-4 text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                  <span className={styles.text}>Read More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className={`text-2xl font-bold mb-4 ${styles.text}`}>
              Ready to Transform Your Business with AI?
            </h3>
            <p className={`text-lg mb-6 opacity-90 ${styles.text}`}>
              Join thousands of companies already using our proven AI implementation strategies 
              to achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={`${styles.button} px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl`}
              >
                <Rocket className="inline w-5 h-5 mr-2" />
                Start Your AI Journey
              </Link>
              <Link
                href="/case-studies"
                className={`${styles.buttonSecondary} px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg`}
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}