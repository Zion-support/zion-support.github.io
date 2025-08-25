import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Fortune 500 Manufacturing Transformation",
      description: "How we helped a global manufacturing company achieve 40% efficiency improvement with AI-powered automation",
      industry: "Manufacturing",
      icon: Factory,
      results: ["40% efficiency boost", "30% cost reduction", "99.9% uptime"],
      challenge: "Complex legacy systems and manual processes slowing down production",
      solution: "AI-powered automation platform with predictive maintenance",
      impact: "Transformed from traditional manufacturing to Industry 4.0 leader"
    },
    {
      title: "Healthcare AI Implementation",
      description: "Revolutionizing patient care with AI-powered diagnostic tools and automated workflows",
      industry: "Healthcare",
      icon: Hospital,
      results: ["50% faster diagnosis", "90% accuracy improvement", "24/7 availability"],
      challenge: "Long wait times and diagnostic errors affecting patient outcomes",
      solution: "AI diagnostic assistant with automated patient monitoring",
      impact: "Improved patient outcomes and reduced healthcare costs"
    },
    {
      title: "Financial Services Security",
      description: "Bank-grade security implementation with SOC2 compliance automation",
      industry: "Financial Services",
      icon: Shield,
      results: ["99.9% security uptime", "SOC2 compliance", "Zero security breaches"],
      challenge: "Complex compliance requirements and evolving security threats",
      solution: "Automated SOC2 compliance platform with AI threat detection",
      impact: "Achieved industry-leading security posture and compliance"
    },
    {
      title: "Retail Digital Transformation",
      description: "Omnichannel retail transformation with AI-powered customer insights",
      industry: "Retail",
      icon: ShoppingCart,
      results: ["35% sales increase", "60% customer satisfaction", "Real-time analytics"],
      challenge: "Disconnected customer experiences across channels",
      solution: "AI-powered omnichannel platform with predictive analytics",
      impact: "Became market leader in digital retail innovation"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory, count: "25+ projects" },
    { name: "Healthcare", icon: Hospital, count: "15+ projects" },
    { name: "Financial Services", icon: Shield, count: "20+ projects" },
    { name: "Retail", icon: ShoppingCart, count: "18+ projects" },
    { name: "Technology", icon: Cpu, count: "30+ projects" },
    { name: "Energy", icon: Zap, count: "12+ projects" }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Successful Projects", description: "Delivered across industries" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction", description: "Exceeding expectations" },
    { icon: Award, value: "50+", label: "Industry Awards", description: "Recognition for excellence" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global project delivery" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "Case Studies - Zion Tech Group",
          description: "Explore real-world success stories and case studies from our AI-powered technology solutions. See how we've transformed businesses across industries with cutting-edge technology.",
          keywords: ["case studies", "success stories", "AI implementation", "digital transformation", "business transformation", "technology solutions", "client results"],
          type: "website",
          url: "https://ziontechgroup.com/case-studies"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Discover how our AI-powered solutions have transformed businesses across industries. Real results, real impact, real success stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real transformation. See how our solutions have delivered measurable impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <study.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {study.industry}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300 mb-4">{study.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Impact</h4>
                      <p className="text-gray-300 text-sm">{study.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for unique business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <industry.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-cyan-300">{industry.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;