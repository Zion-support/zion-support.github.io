import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Server, 
  Settings, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Brain, 
  Code, 
  Rocket, 
  Sparkles, 
  Award, 
  Clock, 
  MessageSquare,
  Database,
  Lock,
  FileText,
  Calendar,
  Globe,
  Cpu,
  Zap,
  BarChart,
  Target,
  Wrench,
  Hammer,
  Wifi,
  HardDrive,
  Monitor,
  Smartphone,
  Laptop,
  Printer,
  Router,
  Key,
  Eye,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Save,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Setup',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
      features: ['Zero Downtime Migration', 'Cost Optimization', 'Security First', '24/7 Support'],
      href: '/cloud-migration',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Shield,
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats',
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response'],
      href: '/cybersecurity',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Server,
      title: 'IT Infrastructure Design',
      description: 'Scalable and reliable infrastructure solutions for modern businesses',
      features: ['Scalable Architecture', 'High Availability', 'Performance Optimization', 'Disaster Recovery'],
      href: '/it-infrastructure',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Clock,
      title: '24/7 IT Support',
      description: 'Round-the-clock technical support and monitoring for your systems',
      features: ['Expert Support', 'Fast Response', 'Proactive Monitoring', 'Remote Assistance'],
      href: '/it-support',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your business needs',
      features: ['Custom Applications', 'API Development', 'Integration Services', 'Maintenance'],
      href: '/custom-development',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with DevOps practices',
      features: ['Automated Deployment', 'Continuous Integration', 'Infrastructure as Code', 'Monitoring'],
      href: '/devops-cicd',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for peak performance and security',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      href: '/database-management',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: Wifi,
      title: 'Network Design & Security',
      description: 'Secure and efficient network infrastructure for your organization',
      features: ['Network Architecture', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
      href: '/network-design',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Technologies Supported' },
    { number: '100+', label: 'Projects Completed' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      role: 'IT Director',
      content: 'Zion Tech Group\'s IT services have been exceptional. Their cloud migration was seamless and their 24/7 support is outstanding.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'DataFlow Systems',
      role: 'CTO',
      content: 'The cybersecurity solutions provided by Zion Tech Group have significantly improved our security posture. Highly recommended.',
      rating: 5
    },
    {
      name: 'David Johnson',
      company: 'InnovateLabs',
      role: 'VP of Technology',
      content: 'Their custom development team delivered exactly what we needed. The quality and attention to detail is impressive.',
      rating: 5
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud },
    { name: 'Azure', icon: Cloud },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Docker', icon: Code },
    { name: 'Kubernetes', icon: Settings },
    { name: 'Terraform', icon: Wrench },
    { name: 'Jenkins', icon: Settings },
    { name: 'GitLab', icon: Code },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Redis', icon: Database },
    { name: 'Elasticsearch', icon: Search }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern businesses. From cloud migration to cybersecurity, 
              we provide the technology foundation your business needs to succeed.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Free IT Consultation
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact IT Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-gray-300 text-lg">Complete IT solutions for every business need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technologies We Work With</h2>
            <p className="text-gray-300 text-lg">Cutting-edge technologies for modern IT solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <tech.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-300">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our IT Clients Say</h2>
            <p className="text-gray-300 text-lg">Success stories from businesses with reliable IT infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how our IT services can improve your business operations. 
            Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Free IT Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact IT Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;