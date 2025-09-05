  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Award,
  Clock,
  Target,
  Zap,
import Head from 'next/head';
import Link from 'next/link';
  Shield,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';
    results: "60% reduction in support costs, 40% faster response times",
    category: "AI Solutions",
    duration: "3 months",
    teamSize: "8 developers",
    technologies: ["AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {
      costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%",
      roi: "300%"
    },
    testimonial: {
      quote: "The AI solution transformed our customer service operations. We've seen incredible improvements in efficiency and customer satisfaction.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience"
    }
  },
  {
    id: 2,
    title: "Cloud Infrastructure Migration",
    client: "Financial Services Company",
    industry: "Financial Services",
    challenge: "Legacy on-premise infrastructure causing scalability issues",
    solution: "Complete migration to AWS with microservices architecture",
    results: "99.9% uptime, 50% cost reduction, 3x faster deployment",
    category: "IT Services",
    duration: "6 months",
    teamSize: "12 engineers",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    featured: true,
    metrics: {
      uptime: "99.9%",
      costReduction: "50%",
      deploymentSpeed: "3x",
      scalability: "10x"
    },
    testimonial: {
      quote: "The cloud migration was seamless and exceeded our expectations. Our infrastructure is now more reliable and cost-effective.",
      author: "Michael Chen",
      role: "CTO"
    }
  },
  {
    id: 3,
    id: 4,
    title: "Micro SaaS Platform Development",
    client: "Startup Accelerator",
    industry: "Technology",
    challenge: "Need for scalable SaaS platform to support multiple startups",
    solution: "Multi-tenant SaaS platform with AI-powered features",
    results: "500+ active users, 99.9% uptime, $50K MRR",
    category: "Micro SaaS",
    duration: "4 months",
    teamSize: "6 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    metrics: {
      activeUsers: "500+",
      uptime: "99.9%",
      mrr: "$50K",
      growth: "400%"
    },
    testimonial: {
      quote: "The platform has been instrumental in our growth.",
      author: "Emily Rodriguez",
      role: "Founder & CEO"
    }
  },
  {
    id: 5,
    title: "Cybersecurity Implementation",
    client: "Government Agency",
    industry: "Government",
    challenge: "Strengthening cybersecurity posture and compliance",
    solution: "Comprehensive security framework with zero-trust architecture",
    results: "100% compliance, 90% reduction in security incidents",
    category: "IT Services",
    duration: "8 months",
    teamSize: "15 security experts",
    technologies: ["Zero Trust", "SIEM", "EDR", "Compliance"],
    featured: true,
    metrics: {
      compliance: "100%",
      incidentReduction: "90%",
      threatDetection: "95%",
      responseTime: "50%"
    },
    testimonial: {
      quote: "Our security posture has been significantly strengthened. The implementation was thorough and professional.",
      author: "David Wilson",
      role: "CISO"
    }
  },
  {
    id: 6,
    title: "Educational Technology Platform",
    client: "Online Learning Company",
    industry: "Education",
    challenge: "Scaling online learning platform to support 100K+ students",
    solution: "Cloud-native platform with AI-powered personalization",
    results: "100K+ students, 95% satisfaction rate, 50% increase in engagement",
    category: "Micro SaaS",
    duration: "5 months",
    teamSize: "10 developers",
    technologies: ["React", "AI/ML", "Video Streaming", "Analytics"],
    image: "/images/case-studies/education-platform.jpg",
    featured: false
  },
  {
    id: 4,
    technologies: ["Cybersecurity", "Zero-Trust", "Compliance"],
    duration: "8 months",
    team: "15 experts",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Manufacturing IoT Integration",
    client: "IndustrialCorp",
    industry: "Manufacturing",
    challenge: "Manual production monitoring and quality control",
    solution: "IoT-based smart manufacturing system with predictive analytics",
    results: [
      "25% increase in production efficiency",
      "30% reduction in defects",
      "Predictive maintenance implementation",
      "Real-time quality monitoring"
    ],
    technologies: ['Cybersecurity', 'SIEM', 'Machine Learning', 'Blockchain'],
    duration: '4 months',
    teamSize: '6 developers',
    image: '/case-studies/retail-security.jpg',
    icon: Shield
  { name: 'All', count: caseStudies.length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Finance', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Education', count: caseStudies.filter(cs => cs.industry === 'Education').length }
];

const categories = [
  { name: 'All', count: caseStudies.length },
  { name: 'AI Solutions', count: caseStudies.filter(cs => cs.category === 'AI Solutions').length },
  { name: "IT Services", count: 25, icon: Shield },
  { name: "Micro SaaS", count: 15, icon: Cloud }
];
  { name: "Healthcare", count: 12, icon: User },
  { name: "Finance", count: 8, icon: Building },
  { name: "Manufacturing", count: 6, icon: Globe },
  { name: "Retail", count: 10, icon: Target },
  { name: "Technology", count: 15, icon: Zap },
  { name: "Education", count: 7, icon: Award }
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses across industries achieve their technology goals."
      keywords="case studies, success stories, technology solutions, AI implementation, cloud migration, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve 
                remarkable results with our innovative technology solutions.
              </p>
        {/* Industries We Serve */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We have extensive experience across various industries, delivering 
                tailored solutions that meet specific sector requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">
                      {industry.count}+
                    </p>
                    <p className="text-gray-600 text-sm">
                      Projects Completed
                    </p>
                  </motion.div>
                );
              })}
        </section>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results. Contact our team to discuss 
                your project requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
    </Layout>
