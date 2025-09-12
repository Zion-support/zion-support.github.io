import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from './SEO';
import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './LoadingSpinner';
import PerformanceMonitor from './PerformanceMonitor';
import AccessibilityEnhancer from './AccessibilityEnhancer';
import UltraContentPromotionBanner from './UltraContentPromotionBanner';
import EnhancedContentShowcase from './EnhancedContentShowcase';
import NewContentBanner from './NewContentBanner';
import NewContentPromoBanner from './NewContentPromoBanner';
import DynamicContentCarousel from './DynamicContentCarousel';
import ContentDiscoverySection from './ContentDiscoverySection';
import EnhancedNewsletter from './EnhancedNewsletter';
import EnhancedNewsletterSignup from './EnhancedNewsletterSignup';
import SuccessMetrics, { defaultMetrics, contentMetrics } from './SuccessMetrics';
import Card from './ui/Card';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import PerformanceMetrics from './PerformanceMetrics';
import TechnologyStack from './TechnologyStack';

// Lazy load heavy components
const ROICalculator = lazy(() => import('./ROICalculator'));
const StructuredData = lazy(() => import('./StructuredData'));

export default function EnhancedHomepage2025() {
  const featuredContent = [
    {
      title: "AI Advanced Automation 2025: Complete Enterprise Implementation Guide",
      description: "Master advanced AI automation with our comprehensive guide. Learn enterprise strategies, implementation frameworks, and real-world case studies for maximum ROI.",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      category: "AI Automation",
      readTime: "25 min read",
      isNew: true,
      featured: true
    },
    {
      title: "AI Cybersecurity Threats 2025: Complete Defense Strategy",
      description: "Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "22 min read",
      isNew: true,
      featured: true
    },
    {
      title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
      description: "Discover how a Fortune 500 manufacturing company achieved $200M savings and 40% cost reduction with autonomous AI systems.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Case Study",
      type: "Success Story",
      isNew: true,
      featured: true
    },
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      isNew: true,
      featured: true
    },
    {
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      category: "AI Innovations",
      readTime: "25 min read",
      isTrending: true
    },
    {
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era with comprehensive reskilling strategies, training programs, and change management approaches.",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      category: "Workforce",
      readTime: "18 min read",
      isNew: true
    }
  ];

  const trendingContent = [
    {
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations with our comprehensive compliance guide and best practices.",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: "🔒",
      category: "Privacy",
      readTime: "22 min read",
      isTrending: true
    },
    {
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining high performance.",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "Sustainability",
      readTime: "20 min read",
      isNew: true
    },
    {
      title: "AI Customer Support Automation 2025: Complete Implementation",
      description: "Transform your customer support with AI automation. Learn proven strategies to reduce response times and improve satisfaction.",
      href: "/blog/ai-customer-support-automation-2025",
      icon: "🎧",
      category: "Customer Service",
      readTime: "9 min read",
      isPopular: true
    },
    {
      title: "LLM Guardrails in Production 2025: Safety Without Blocking Delivery",
      description: "Implement effective guardrails for Large Language Models in production environments without hindering innovation.",
      href: "/blog/llm-guardrails-in-production-2025",
      icon: "🛡️",
      category: "AI Safety",
      readTime: "8 min read",
      isTrending: true
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* Mega Content Drop Banner */}
        <section className="py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 25+ New AI Resources Just Released!
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our biggest content update yet: Advanced AI Automation, Cybersecurity Threats, 
                Healthcare AI Success Stories, and the complete 200+ page AI Implementation Master Guide 2026. 
                Everything you need to succeed with AI in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/content-showcase"
                  className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
                >
                  🎯 Explore All New Content
                </Link>
                <Link
                  href="/resources/ai-implementation-master-guide-2026"
                  className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
                >
                  📚 Download Master Guide
                </Link>
              </div>
              
              {/* Featured Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <Link href="/blog/ai-2025-advanced-automation" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🤖</div>
                    <h3 className="text-sm font-semibold mb-1">AI Advanced Automation 2025</h3>
                    <p className="text-xs opacity-90">Complete implementation guide</p>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2025-cybersecurity-threats" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🛡️</div>
                    <h3 className="text-sm font-semibold mb-1">AI Cybersecurity Threats</h3>
                    <p className="text-xs opacity-90">Complete defense guide</p>
                  </div>
                </Link>
                
                <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💰</div>
                    <h3 className="text-sm font-semibold mb-1">$200M Manufacturing Success</h3>
                    <p className="text-xs opacity-90">Real case study</p>
                  </div>
                </Link>
                
                <Link href="/resources/ai-implementation-master-guide-2026" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📖</div>
                    <h3 className="text-sm font-semibold mb-1">Master Guide 2026</h3>
                    <p className="text-xs opacity-90">200+ pages free</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Banner */}
        <UltraContentPromotionBanner
          title="✨ Featured New Content"
          subtitle="🔥 JUST PUBLISHED - JANUARY 2025"
          description="Our most comprehensive and impactful content covering the latest AI trends, implementation strategies, and real-world success stories."
          content={featuredContent}
          variant="featured"
          maxItems={6}
          className="py-20"
        />

        {/* Trending Content Banner */}
        <UltraContentPromotionBanner
          title="📈 Trending This Week"
          subtitle="🔥 HOT RIGHT NOW"
          description="The most popular and trending content that our community is reading and sharing this week."
          content={trendingContent}
          variant="trending"
          maxItems={4}
          className="py-20"
        />

        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100' aria-labelledby="hero-heading">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 id="hero-heading" className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Zion Tech Group
              </h1>
              <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
                Transforming businesses through cutting-edge technology solutions.
                From AI and blockchain to cloud infrastructure and micro SaaS
                platforms.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/services'
                  className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
                >
                  Explore Services
                </Link>
                <Link
                  href='/contact'
                  className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Content Showcase */}
        <EnhancedContentShowcase />

        {/* Dynamic Content Carousel */}
        <DynamicContentCarousel />

        {/* New Content Promotional Banner */}
        <NewContentPromoBanner variant="featured" maxItems={3} />

        {/* New Content Banner - Top */}
        <NewContentBanner variant="default" maxItems={4} />

        {/* Services Section */}
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Our Services
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <Card
                title='Micro SaaS'
                href='/services/micro-saas'
                description='End-to-end product engineering with billing, auth, analytics and growth.'
                icon='🚀'
              />
              <Card
                title='AI Services'
                href='/services/ai-services'
                description='LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.'
                icon='🤖'
              />
              <Card
                title='Edge Computing'
                href='/services/edge-computing'
                description='Real-time processing, IoT integration, and distributed infrastructure solutions.'
                icon='⚡'
              />
              <Card
                title='IT Services'
                href='/services/it-services'
                description='Cloud migration, DevOps, SRE, security hardening and cost optimization.'
                icon='⚙️'
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                We combine technical expertise with business acumen to deliver
                solutions that drive real results.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <FeatureCard
                title='Fast Delivery'
                description='Rapid prototyping and deployment with modern tools and practices.'
              />
              <FeatureCard
                title='Scalable Architecture'
                description='Built for growth with cloud-native, microservices architecture.'
              />
              <FeatureCard
                title='24/7 Support'
                description='Round-the-clock monitoring and support for your critical systems.'
              />
              <FeatureCard
                title='Cost Effective'
                description='Optimized solutions that reduce operational costs and improve efficiency.'
              />
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className='py-16 bg-gradient-to-r from-green-50 to-blue-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Proven Results for Our Clients
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Real businesses achieving real results with our technology solutions
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <TestimonialCard
                company="TechStart Inc."
                industry="SaaS"
                result="300% increase in customer satisfaction"
                description="AI automation reduced support response time from 4 hours to 2 minutes"
                savings="$50K monthly savings"
              />
              <TestimonialCard
                company="RetailMax"
                industry="E-commerce"
                result="90% reduction in manual tasks"
                description="Automated inventory management and order processing systems"
                savings="$75K annual cost reduction"
              />
              <TestimonialCard
                company="ConsultPro"
                industry="Professional Services"
                result="40% increase in proposal win rate"
                description="AI-powered proposal generation and client management"
                savings="20 hours saved per week"
              />
            </div>
          </div>
        </section>

        {/* Content Discovery Section */}
        <ContentDiscoverySection />

        {/* Newsletter Signup Section */}
        <section className='py-16 bg-gray-900 text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                📧 Stay Ahead with AI Insights
              </h2>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-8'>
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
              </p>
              <div className='max-w-md mx-auto flex gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                  Subscribe
                </button>
              </div>
              <p className='text-sm text-gray-400 mt-4'>
                No spam. Unsubscribe anytime. Read our privacy policy.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <Suspense fallback={<LoadingSpinner size="md" text="Loading metrics..." />}>
          <PerformanceMetrics />
        </Suspense>

        {/* Technology Stack Section */}
        <Suspense fallback={<LoadingSpinner size="md" text="Loading tech stack..." />}>
          <TechnologyStack />
        </Suspense>

        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." />}>
          <StructuredData 
            type="Organization" 
            data={{
              name: "Zion Tech Group",
              description: "Transforming businesses through cutting-edge technology solutions",
              url: "https://zion.app",
              logo: "https://zion.app/images/zion-tech-group-logo.png",
              sameAs: [
                "https://twitter.com/ZionTechGroup",
                "https://linkedin.com/company/zion-tech-group"
              ]
            }} 
          />
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://zion.app",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://zion.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}