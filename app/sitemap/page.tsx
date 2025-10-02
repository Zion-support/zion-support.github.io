import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Code,
  Cloud,
  Shield,
  Network,
  Server,
  BarChart3,
  Settings,
  Zap,
  Monitor,
  Search,
  MessageSquare,
  CheckCircle,
  DollarSign,
  Users,
  Database,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Rocket,
  Cpu,
  FileText,
  Camera,
  Mic,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  Wrench,
  Layers,
  GitBranch,
  Container,
  Key,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Activity,
  Coins,
  Thermometer,
  Gauge,
  Truck,
  Bug,
  UserCheck,
  FileShield,
  LineChart,
  Scatter
} from 'lucide-react';

export default function SitemapPage() {
  const title = 'Sitemap — Zion Tech Group';
  const description = 'Complete sitemap of Zion Tech Group services, solutions, and resources. Find all our AI, blockchain, IoT, cybersecurity, and data analytics services.';

  const serviceCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'blue',
      services: [
        { name: 'AI & Machine Learning', link: '/services/ai-services', icon: Brain },
        { name: 'Micro SaaS Solutions', link: '/services/micro-saas', icon: Rocket },
        { name: 'IT Services & Infrastructure', link: '/services/it-services', icon: Server }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      color: 'purple',
      services: [
        { name: 'Blockchain Solutions', link: '/services/blockchain-solutions', icon: Coins },
        { name: 'IoT Solutions', link: '/services/iot-solutions', icon: Cpu },
        { name: 'Cybersecurity Solutions', link: '/services/cybersecurity-solutions', icon: Shield },
        { name: 'Data Analytics & BI', link: '/services/data-analytics', icon: BarChart3 }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      color: 'green',
      services: [
        { name: 'Manufacturing AI Platform', link: '/services/manufacturing-ai-platform', icon: Settings },
        { name: 'Supply Chain Intelligence', link: '/services/supply-chain-intelligence', icon: Network },
        { name: 'Autonomous Operations', link: '/services/ai-autonomous-operations', icon: Zap }
      ]
    }
  ];

  const mainPages = [
    { name: 'Home', link: '/', icon: Home },
    { name: 'About Us', link: '/about', icon: Users },
    { name: 'Services Overview', link: '/services', icon: Settings },
    { name: 'Contact', link: '/contact', icon: Phone },
    { name: 'Enterprise Solutions', link: '/enterprise', icon: Building },
    { name: 'Case Studies', link: '/case-studies', icon: FileText },
    { name: 'Blog', link: '/blog', icon: FileText },
    { name: 'Guides', link: '/guides', icon: Book },
    { name: 'Privacy Policy', link: '/privacy', icon: Lock },
    { name: 'Terms of Service', link: '/terms', icon: FileText },
    { name: 'Security', link: '/security', icon: Shield }
  ];

  const blogCategories = [
    'AI 2026 Breakthroughs',
    'AI 2027 Quantum Solutions',
    'Autonomous Business Systems',
    'Manufacturing Transformation',
    'Cybersecurity Trends',
    'Data Analytics Insights',
    'Blockchain Innovations',
    'IoT Solutions',
    'Case Studies',
    'Implementation Guides'
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="sitemap, services, AI, blockchain, IoT, cybersecurity, data analytics, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/sitemap" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sitemap
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site structure.
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Main Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mainPages.map((page, index) => (
                <Link key={index} href={page.link} className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-colors group">
                  <div className="flex items-center">
                    <page.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                    <span className="text-gray-900 group-hover:text-blue-600 font-medium">{page.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, categoryIndex) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-6">
                      <div className={`${colors} rounded-lg p-3 mr-4`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <Link key={serviceIndex} href={service.link} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                          <service.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                          <span className="text-gray-900 group-hover:text-blue-600">{service.name}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {blogCategories.map((category, index) => (
                <Link key={index} href="/blog" className="bg-gray-50 hover:bg-purple-50 rounded-lg p-4 transition-colors group text-center">
                  <span className="text-gray-900 group-hover:text-purple-600 font-medium">{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Get Started</h3>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-800">Schedule Consultation</Link>
                  <Link href="/services" className="block text-blue-600 hover:text-blue-800">Browse Services</Link>
                  <Link href="/case-studies" className="block text-blue-600 hover:text-blue-800">View Case Studies</Link>
                  <Link href="/about" className="block text-blue-600 hover:text-blue-800">About Our Team</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                <div className="space-y-2">
                  <Link href="/guides" className="block text-blue-600 hover:text-blue-800">Implementation Guides</Link>
                  <Link href="/blog" className="block text-blue-600 hover:text-blue-800">Latest Blog Posts</Link>
                  <Link href="/case-studies" className="block text-blue-600 hover:text-blue-800">Success Stories</Link>
                  <Link href="/enterprise" className="block text-blue-600 hover:text-blue-800">Enterprise Solutions</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-blue-600 hover:text-blue-800">Contact Support</Link>
                  <Link href="/security" className="block text-blue-600 hover:text-blue-800">Security Information</Link>
                  <Link href="/privacy" className="block text-blue-600 hover:text-blue-800">Privacy Policy</Link>
                  <Link href="/terms" className="block text-blue-600 hover:text-blue-800">Terms of Service</Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-600 mr-2" />
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-600 mr-2" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-600 mr-2 mt-0.5" />
                    <div className="text-blue-600 hover:text-blue-800">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is here to help you find the right solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}