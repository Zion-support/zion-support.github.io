import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Code, 
  ArrowRight, 
  Search, 
  Filter,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Smartphone,
  Globe,
  Database,
  Settings
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Tools', 'Analytics', 'Automation', 'Productivity', 'Marketing', 'Development'];

  const products = [
    {
      id: 1,
      name: "AI Content Writer",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      icon: Brain,
      price: "$29",
      period: "/month",
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization', 'Multi-language support'],
      benefits: ['Save 80% time on content creation', 'Improve content quality', 'Increase engagement', 'Boost SEO rankings'],
      marketPrice: '$50-100/month',
      category: 'AI Tools',
      technologies: ['GPT-4', 'React', 'Node.js', 'OpenAI API', 'Tailwind CSS']
    },
    {
      id: 2,
      name: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization and insights.",
      icon: BarChart,
      price: "$49",
      period: "/month",
      features: ['Real-time analytics', 'Custom dashboards', 'Data export', 'Automated reports', 'Team collaboration'],
      benefits: ['Make data-driven decisions', 'Track performance', 'Identify trends', 'Improve ROI'],
      marketPrice: '$100-200/month',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js']
    },
    {
      id: 3,
      name: "Task Automation",
      description: "Automate repetitive tasks and workflows to increase productivity and efficiency.",
      icon: Zap,
      price: "$39",
      period: "/month",
      features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Custom triggers', 'Progress tracking'],
      benefits: ['Reduce manual work', 'Increase efficiency', 'Eliminate errors', 'Save time'],
      marketPrice: '$75-150/month',
      category: 'Automation',
      technologies: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Celery']
    },
    {
      id: 4,
      name: "Team Collaboration",
      description: "Streamline team communication and project management with integrated tools.",
      icon: Users,
      price: "$19",
      period: "/month",
      features: ['Team chat', 'File sharing', 'Project boards', 'Video calls', 'Document collaboration'],
      benefits: ['Improve communication', 'Increase productivity', 'Better project tracking', 'Enhanced teamwork'],
      marketPrice: '$30-60/month',
      category: 'Productivity',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC']
    },
    {
      id: 5,
      name: "Email Marketing",
      description: "Create and manage email campaigns with advanced automation and analytics.",
      icon: Globe,
      price: "$59",
      period: "/month",
      features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics', 'List management'],
      benefits: ['Increase open rates', 'Boost conversions', 'Automate campaigns', 'Track performance'],
      marketPrice: '$100-300/month',
      category: 'Marketing',
      technologies: ['React', 'Node.js', 'SendGrid', 'MongoDB', 'Redis']
    },
    {
      id: 6,
      name: "Code Review Assistant",
      description: "AI-powered code review tool that automatically analyzes and suggests improvements.",
      icon: Code,
      price: "$79",
      period: "/month",
      features: ['Automated code review', 'Security scanning', 'Performance analysis', 'Best practices', 'Team integration'],
      benefits: ['Improve code quality', 'Catch bugs early', 'Learn best practices', 'Speed up reviews'],
      marketPrice: '$150-400/month',
      category: 'Development',
      technologies: ['AI/ML', 'React', 'Python', 'GitHub API', 'Docker']
    },
    {
      id: 7,
      name: "Social Media Manager",
      description: "Schedule and manage social media posts across multiple platforms with AI optimization.",
      icon: Globe,
      price: "$39",
      period: "/month",
      features: ['Multi-platform posting', 'Content scheduling', 'Analytics', 'Hashtag optimization', 'Engagement tracking'],
      benefits: ['Save time on posting', 'Increase engagement', 'Optimize content', 'Track performance'],
      marketPrice: '$50-150/month',
      category: 'Marketing',
      technologies: ['React', 'Node.js', 'Social APIs', 'MongoDB', 'Redis']
    },
    {
      id: 8,
      name: "Database Manager",
      description: "Visual database management tool with query builder and performance monitoring.",
      icon: Database,
      price: "$69",
      period: "/month",
      features: ['Visual query builder', 'Performance monitoring', 'Backup management', 'Schema design', 'Team collaboration'],
      benefits: ['Simplify database management', 'Improve performance', 'Reduce errors', 'Save time'],
      marketPrice: '$100-250/month',
      category: 'Development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 9,
      name: "API Testing Tool",
      description: "Comprehensive API testing and documentation platform for developers.",
      icon: Settings,
      price: "$49",
      period: "/month",
      features: ['API testing', 'Documentation generation', 'Mock servers', 'Performance testing', 'Team sharing'],
      benefits: ['Improve API quality', 'Speed up development', 'Better documentation', 'Reduce bugs'],
      marketPrice: '$80-200/month',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Jest', 'MongoDB', 'Docker']
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Apps</title>
        <meta name="description" content="Discover our collection of micro SAAS applications. Ready-to-use tools for productivity, analytics, automation, and more. Start using immediately." />
        <meta name="keywords" content="micro saas, saas apps, productivity tools, business apps, ready-to-use software, micro services" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use micro SAAS applications that solve specific business problems. 
              No development time, no setup complexity - just instant productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                Explore Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-slate-900'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated collection of micro SAAS applications designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {product.price}{product.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={`/micro-saas/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using our micro SAAS solutions today and see immediate improvements in your workflow and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;