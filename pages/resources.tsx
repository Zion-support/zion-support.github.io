import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Globe, ArrowRight,
  Brain, Atom, Shield, Rocket, Users, Target
} from 'lucide-react';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Blog',
      description: 'Technology insights, industry updates, and thought leadership articles',
      href: '/blog',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 'cloud-optimization-whitepaper',
      title: 'Cloud Infrastructure Optimization Whitepaper',
      description: 'Learn the best practices for optimizing cloud infrastructure and reducing costs with autonomous systems.',
      type: 'Whitepaper',
      category: 'Cloud Computing',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      featured: false
    },
    {
      id: 'content-generation-case-study',
      title: 'Content Generation ROI Case Study',
      description: 'Real-world examples of how AI-powered content generation delivers measurable business results.',
      type: 'Case Study',
      category: 'Content Marketing',
      downloadUrl: '#',
      fileSize: '1.2 MB',
      featured: false
    },
    {
      id: 'security-automation-checklist',
      title: 'Security Automation Implementation Checklist',
      description: 'A step-by-step checklist for implementing automated security systems in your organization.',
      type: 'Checklist',
      category: 'Cybersecurity',
      downloadUrl: '#',
      fileSize: '0.8 MB',
      featured: false
    },
    {
      id: 'performance-monitoring-guide',
      title: 'Performance Monitoring Best Practices',
      description: 'Essential guidelines for setting up effective performance monitoring with AI-driven insights.',
      type: 'Guide',
      category: 'Performance',
      downloadUrl: '#',
      fileSize: '1.5 MB',
      featured: false
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator',
      description: 'Interactive tool to calculate the return on investment for your automation projects.',
      type: 'Tool',
      category: 'Business Strategy',
      downloadUrl: '#',
      fileSize: '0.5 MB',
      featured: false
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Evolution Guide',
      description: 'Comprehensive guide to understanding and implementing AI consciousness',
      category: 'AI & Machine Learning',
      href: '/ai-consciousness-evolution-2043',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles and applications',
      category: 'Quantum Technology',
      href: '/quantum-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices for modern organizations',
      category: 'Security',
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Resources - Zion Tech Group Knowledge Hub"
        description="Access comprehensive resources including blog posts, documentation, webinars, and case studies from Zion Tech Group."
        keywords={["resources", "blog", "documentation", "webinars", "case studies", "knowledge hub"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access comprehensive knowledge, insights, and resources to accelerate your 
              technology journey with Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete collection of guides, tools, and insights
            </p>
          </div>
        </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group hover:border-blue-400/30 overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                  {resource.image}
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-3 ${resource.color}`}>
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {resource.category}
                    </span>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Need More Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for personalized resources and guidance
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Join Discord
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
