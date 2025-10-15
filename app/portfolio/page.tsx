import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Users, 
  Calendar,
  Tag,
  ArrowRight,
  Filter,
  Search,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'micro-saas', name: 'Micro SAAS', count: 8 },
    { id: 'ai-services', name: 'AI Services', count: 6 },
    { id: 'it-services', name: 'IT Services', count: 10 }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support and SEO optimization.',
      category: 'micro-saas',
      image: '🤖',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      client: 'TechStart Inc.',
      duration: '3 months',
      team: '5 developers',
      results: {
        productivity: '+300%',
        cost: '-60%',
        satisfaction: '98%'
      },
      features: [
        'Multi-language content generation',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Content calendar',
        'Team collaboration'
      ],
      testimonial: {
        text: "Zion Tech Group transformed our content creation process. We now produce 10x more content with higher quality.",
        author: "Sarah Johnson",
        role: "CMO, TechStart Inc."
      },
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Enterprise AI Automation Platform',
      description: 'Comprehensive AI automation solution for enterprise processes with 95% accuracy rate.',
      category: 'ai-services',
      image: '⚡',
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'AWS'],
      client: 'Global Corp',
      duration: '6 months',
      team: '12 developers',
      results: {
        efficiency: '+400%',
        cost: '-75%',
        accuracy: '95%'
      },
      features: [
        'Process automation',
        'Natural language processing',
        'Workflow orchestration',
        'Real-time decision making',
        'Integration with 500+ tools',
        'Custom AI model training'
      ],
      testimonial: {
        text: "The AI automation platform revolutionized our operations. We've never seen such efficiency gains.",
        author: "Michael Chen",
        role: "CTO, Global Corp"
      },
      status: 'completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Cloud Migration & Security Suite',
      description: 'Complete cloud migration to AWS with enterprise-grade security and compliance.',
      category: 'it-services',
      image: '☁️',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      client: 'FinanceFirst',
      duration: '4 months',
      team: '8 developers',
      results: {
        uptime: '99.99%',
        cost: '-40%',
        security: '100%'
      },
      features: [
        'Zero-downtime migration',
        'Multi-cloud architecture',
        'Advanced security',
        'Cost optimization',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      testimonial: {
        text: "The migration was seamless and our security posture improved dramatically. Highly recommended!",
        author: "Emily Rodriguez",
        role: "CISO, FinanceFirst"
      },
      status: 'completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'AI-Powered E-commerce Platform',
      description: 'Modern e-commerce solution with AI recommendations and personalized shopping experience.',
      category: 'micro-saas',
      image: '🛒',
      technologies: ['React', 'Next.js', 'Python', 'PostgreSQL'],
      client: 'ShopSmart',
      duration: '5 months',
      team: '7 developers',
      results: {
        sales: '+250%',
        conversion: '+180%',
        satisfaction: '96%'
      },
      features: [
        'AI product recommendations',
        'Personalized shopping',
        'Advanced search',
        'Mobile-first design',
        'Payment integration',
        'Analytics dashboard'
      ],
      testimonial: {
        text: "Our sales increased by 250% after implementing the AI recommendations. Amazing results!",
        author: "David Kim",
        role: "CEO, ShopSmart"
      },
      status: 'completed',
      year: '2023'
    },
    {
      id: 5,
      title: 'Healthcare AI Analytics Platform',
      description: 'AI-powered healthcare analytics platform for patient data analysis and predictive insights.',
      category: 'ai-services',
      image: '🏥',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL'],
      client: 'MedTech Solutions',
      duration: '8 months',
      team: '10 developers',
      results: {
        accuracy: '94%',
        time: '-70%',
        compliance: '100%'
      },
      features: [
        'Patient data analysis',
        'Predictive diagnostics',
        'HIPAA compliance',
        'Real-time monitoring',
        'Custom ML models',
        'Secure data handling'
      ],
      testimonial: {
        text: "This platform has revolutionized our diagnostic capabilities. The accuracy is outstanding.",
        author: "Dr. Lisa Wang",
        role: "Chief Medical Officer, MedTech Solutions"
      },
      status: 'completed',
      year: '2023'
    },
    {
      id: 6,
      title: 'Mobile Banking App with Biometrics',
      description: 'Secure mobile banking application with advanced biometric authentication and AI fraud detection.',
      category: 'it-services',
      image: '📱',
      technologies: ['React Native', 'Node.js', 'Biometric APIs', 'MongoDB'],
      client: 'SecureBank',
      duration: '6 months',
      team: '9 developers',
      results: {
        security: '100%',
        adoption: '+300%',
        fraud: '-90%'
      },
      features: [
        'Biometric authentication',
        'AI fraud detection',
        'Real-time transactions',
        'Secure messaging',
        'Investment tracking',
        'Bill payment'
      ],
      testimonial: {
        text: "The security features are top-notch. Our customers love the biometric authentication.",
        author: "Robert Martinez",
        role: "Head of Digital Banking, SecureBank"
      },
      status: 'completed',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '24', label: 'Projects Completed', icon: Award },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group</title>
        <meta name="description" content="Explore our portfolio of successful AI and IT projects. See how we've helped 500+ clients transform their businesses with innovative technology solutions." />
        <meta name="keywords" content="portfolio, projects, case studies, ai projects, it projects, micro saas projects, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our successful projects and see how we've helped 500+ clients transform their businesses 
              with innovative AI and IT solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{project.year}</div>
                      <div className="text-sm text-green-400 font-semibold capitalize">{project.status}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Client Testimonial:</h4>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-gray-300 italic mb-3">"{project.testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="text-white font-semibold">{project.testimonial.author}</div>
                        <div className="text-gray-400">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </span>
                    </div>
                    <div className="text-blue-400 font-semibold">{project.client}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our portfolio of successful clients. Let's discuss how we can help transform your business 
              with innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;