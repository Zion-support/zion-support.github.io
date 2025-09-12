import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon, ClockIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  const featuredContent = [
    {
      title: "AI Edge Computing Revolution 2025: Bringing Intelligence to the Edge",
      description: "Discover how edge AI is transforming industries with real-time processing, reduced latency, and enhanced privacy.",
      href: "/blog/ai-2025-edge-computing-revolution",
      icon: "📱",
      category: "Edge Computing",
      readTime: "22 min read",
      featured: true
    },
    {
      title: "Ethical AI Framework 2025: Building Responsible AI Systems",
      description: "Comprehensive framework for developing ethical AI systems. Learn about bias mitigation, transparency, and fairness.",
      href: "/blog/ai-2025-ethical-ai-framework",
      icon: "⚖️",
      category: "AI Ethics",
      readTime: "28 min read",
      featured: true
    },
    {
      title: "AI Healthcare Diagnostic Revolution: 95% Accuracy Case Study",
      description: "How a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times using AI.",
      href: "/case-studies/ai-2025-healthcare-diagnostic-revolution",
      icon: "🏥",
      category: "Case Study",
      readTime: "18 min read",
      featured: true
    },
    {
      title: "AI Financial Services Transformation: $50M ROI Case Study",
      description: "How a major financial institution achieved $50M ROI and 40% improvement in fraud detection using AI.",
      href: "/case-studies/ai-2025-financial-services-transformation",
      icon: "💰",
      category: "Case Study",
      readTime: "20 min read",
      featured: true
    }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-solutions'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and scale micro SaaS applications that solve specific business problems with modern technology stacks.',
      icon: '💻',
      features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'Cloud Deployment'],
      href: '/services/micro-saas'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '⚙️',
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
      href: '/services/it-services'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
      href: '/services/cloud-services'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Future with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                AI & Technology
              </span>
            </h1>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl">
              Enterprise-grade AI solutions, micro SaaS development, and IT services that help you build faster, scale smarter, and innovate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Explore Our Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest AI Insights & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our comprehensive library of AI resources, real-world case studies, and expert insights that drive business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredContent.map((content, index) => (
              <Link
                key={content.href}
                href={content.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <div className="flex items-center space-x-2">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-600">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {content.readTime}
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/content-showcase"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              View All Content
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-8">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-indigo-200">
              Our solutions deliver measurable results across industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$50M+</div>
              <div className="text-indigo-200">Client ROI Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions, micro SaaS development, and IT services can accelerate your digital transformation and drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/content-showcase"
              className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Explore Our Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}