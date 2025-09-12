import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Users,
  Award,
  Globe,
  Target,
  Rocket,
  Lock,
  Cpu,
  Network,
  Monitor,
  Building,
  MessageSquare,
  Calendar,
  DollarSign,
  Clock,
  ThumbsUp,
  Lightbulb,
  Settings,
  Database,
  Code,
  Smartphone,
  Wifi,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Technology Services",
    "services": [
      "AI Services",
      "IT Solutions", 
      "Micro SaaS Development",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Digital Transformation"
    ]
  };

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '200+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '20+', label: 'Years Experience', icon: Award }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: Brain,
      href: "/services/ai-services",
      count: "40+ Solutions",
      pricing: "Starting at $1,800/month",
      marketPrice: "$2,500-500,000/month",
      benefits: ["40-95% accuracy improvement", "60-90% automation", "15-90% ROI increase"],
      setupTime: "2-40 weeks",
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: "IT Services", 
      description: "40+ comprehensive IT services from cloud infrastructure to cybersecurity, DevOps, managed services, compliance, edge computing, quantum-ready infrastructure, 5G implementation, sustainable IT, zero-trust security, and enterprise digital transformation",
      icon: Server,
      href: "/services/it-services",
      count: "40+ Services",
      pricing: "Starting at $800/month",
      marketPrice: "$1,500-200,000/month",
      benefits: ["99.9% uptime", "30-50% cost reduction", "24/7 support"],
      setupTime: "1-24 weeks",
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support']
    },
    {
      title: "Micro SaaS",
      description: "50+ innovative micro SaaS solutions for modern businesses across all industries including AI-powered tools, automation platforms, subscription management, smart contracts, digital twins, edge computing, and specialized business applications with real-time pricing and instant deployment",
      icon: Cloud,
      href: "/services/micro-saas",
      count: "50+ Solutions",
      pricing: "Starting at $800/month",
      marketPrice: "$1,500-50,000/month",
      benefits: ["80% efficiency improvement", "60-90% cost savings", "10x faster deployment"],
      setupTime: "1-12 weeks",
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling']
    }
  ];

  const features = [
    { icon: Zap, title: 'Fast Delivery', description: 'Rapid development and deployment with agile methodologies' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security and compliance standards' },
    { icon: Users, title: 'Expert Team', description: 'Dedicated professionals with years of experience' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients worldwide with local expertise' },
    { icon: Target, title: 'Proven Results', description: 'Track record of successful projects and satisfied clients' },
    { icon: DollarSign, title: 'Competitive Pricing', description: 'Transparent pricing with no hidden costs or surprises' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 300% and reduced costs by 50%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "Founder",
      content: "Their micro SaaS solutions are game-changers. We deployed 5 different tools in just 3 months and saw immediate ROI.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Global Dynamics",
      role: "IT Director",
      content: "The cybersecurity implementation was flawless. We now have enterprise-grade security at a fraction of the cost.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Service Automation",
      company: "E-commerce Giant",
      results: "95% reduction in response time, 80% cost savings",
      description: "Implemented AI chatbot and automation system handling 10,000+ daily inquiries",
      image: "🤖",
      category: "AI Services"
    },
    {
      title: "Cloud Migration & Infrastructure Optimization",
      company: "Financial Services",
      results: "60% cost reduction, 99.9% uptime achieved",
      description: "Migrated entire infrastructure to cloud with zero downtime and enhanced security",
      image: "☁️",
      category: "IT Services"
    },
    {
      title: "Custom Micro SaaS Platform",
      company: "Healthcare Provider",
      results: "300% efficiency improvement, $2M+ in savings",
      description: "Built comprehensive patient management and analytics platform",
      image: "💊",
      category: "Micro SaaS"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "🧠"
    },
    {
      title: "Micro SaaS: The New Era of Software Development",
      excerpt: "Learn why micro SaaS solutions are becoming the preferred choice for modern businesses and how to get started.",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Business Strategy",
      image: "📱"
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential security measures every business should implement to protect against evolving cyber threats.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Security",
      image: "🔒"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>
        <meta name="description" content="Transform your business with cutting-edge AI services, comprehensive IT solutions, and innovative micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, digital transformation, business automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group delivers 130+ comprehensive AI services, IT solutions, and innovative micro SAAS platforms 
                to accelerate your digital transformation and drive business growth. From cutting-edge AI and quantum computing 
                to edge computing, 5G networks, and sustainable IT solutions, we provide the technology foundation for tomorrow's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>500+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-400" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 mr-2" />
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, 
                edge computing, 5G implementation, sustainable IT, and enterprise digital transformation. Our 130+ services cover every aspect of 
                modern technology needs with competitive pricing, real market analysis, and proven results that drive 
                measurable business growth and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.count}
                      </span>
                      {service.benefits && service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        {service.marketPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {service.marketPrice}
                          </span>
                        )}
                      </div>
                      {service.marketPrice && (
                        <div className="text-xs text-green-600 font-medium">
                          Save up to 40% vs market rate
                        </div>
                      )}
                    </div>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients. See how we've helped businesses transform their operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{study.image}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{study.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-green-800">Results:</div>
                    <div className="text-sm text-green-700">{study.results}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest articles on technology trends, best practices, and industry insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="text-3xl mb-4">{post.image}</div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call Now: +1 302 464 0950
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}