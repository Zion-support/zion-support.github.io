import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete Guide to AI Automation',
      description: 'A comprehensive guide covering everything you need to know about implementing AI automation in your business.',
      type: 'Guide',
      category: 'AI & Automation',
      downloadUrl: '#',
      fileSize: '2.3 MB',
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

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Content Marketing', 'Cybersecurity', 'Performance', 'Business Strategy'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive library of guides, whitepapers, case studies, and tools to help you implement autonomous technology solutions." />
        <meta property="og:title" content="Resources" />
        <meta property="og:description" content="Comprehensive library of guides and tools for autonomous technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of guides, whitepapers, case studies, and tools
          </p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resource
            </h2>
            <p className="text-xl text-gray-600">
              Our most comprehensive guide to AI automation
            </p>
          </div>

          {resources.filter(resource => resource.featured).map(resource => (
            <Card key={resource.id} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {resource.type}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {resource.fileSize}
                  </div>
                </div>
                <CardTitle className="text-3xl text-gray-900">{resource.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Free download • No registration required
                  </div>
                  <Button variant="gradient" size="lg">
                    Download Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
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

      {/* Additional Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              More ways to learn and grow with autonomous technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="text-center group hover:border-blue-400/30"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-5xl mb-6 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                  {tool.image}
                </div>
                <CardTitle className="text-xl text-gray-900">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive technical documentation for all our autonomous systems and APIs.
                </p>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl text-gray-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Step-by-step video tutorials covering implementation and best practices.
                </p>
                <Button variant="outline" className="w-full">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Getting Started with AI Automation',
                duration: '15:32',
                thumbnail: '🎬',
                category: 'Beginner'
              },
              {
                title: 'Advanced Cloud Infrastructure Setup',
                duration: '28:45',
                thumbnail: '☁️',
                category: 'Advanced'
              },
              {
                title: 'Security Best Practices for AI Systems',
                duration: '22:18',
                thumbnail: '🔒',
                category: 'Intermediate'
              }
            ].map((video, index) => (
              <Card
                key={index}
                className="group hover:border-blue-400/30 overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className="text-8xl text-center py-8 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    {video.thumbnail}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our community of developers and technology professionals.
                </p>
                <Button variant="outline" className="w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with experts, share experiences, and get support from our community of AI and automation professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '💬', title: 'Discord Community', description: 'Join discussions and get real-time help' },
                { icon: '📧', title: 'Email Support', description: 'Get expert guidance via email' },
                { icon: '📚', title: 'Documentation', description: 'Comprehensive guides and references' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                className="group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-200"
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
