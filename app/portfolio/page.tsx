import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Zap,
  Brain,
  Cpu,
  Cloud,
  Shield,
  Globe,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Portfolio — Zion Tech Group AI & IT Solutions Showcase',
  description: 'Explore our portfolio of successful AI implementations, enterprise transformations, and cutting-edge technology solutions delivering proven ROI.',
  keywords: 'zion tech group portfolio, AI solutions showcase, enterprise technology portfolio, AI implementation case studies',
  openGraph: {
    title: 'Portfolio — Zion Tech Group AI & IT Solutions Showcase',
    description: 'Explore our portfolio of successful AI implementations, enterprise transformations, and cutting-edge technology solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com/portfolio',
    images: [
      {
        url: '/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Portfolio - AI Solutions Showcase',
      },
    ],
  },
};

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Fortune 500 AI Transformation",
      category: "Enterprise AI",
      description: "Delivered 1000x performance improvements and $150M ROI through quantum-enhanced AI implementation.",
      technologies: ["Quantum AI", "Autonomous Systems", "Enterprise Integration"],
      results: ["1000x Performance", "$150M ROI", "95% Automation"],
      image: "/portfolio/fortune-500.jpg",
      link: "/case-studies/fortune-500-ai-transformation"
    },
    {
      title: "Autonomous Enterprise Platform",
      category: "Business Automation",
      description: "Built self-managing AI systems achieving 95% automation across enterprise operations.",
      technologies: ["Neural Networks", "Process Automation", "Real-time Analytics"],
      results: ["95% Automation", "60% Cost Reduction", "24/7 Operations"],
      image: "/portfolio/autonomous-enterprise.jpg",
      link: "/case-studies/autonomous-enterprise-2-billion-success"
    },
    {
      title: "Quantum Neural Superintelligence",
      category: "Advanced AI",
      description: "Developed next-generation quantum neural architectures for unprecedented computational power.",
      technologies: ["Quantum Computing", "Neural Networks", "Superintelligence"],
      results: ["1000x Speed", "Advanced Reasoning", "Breakthrough Performance"],
      image: "/portfolio/quantum-neural.jpg",
      link: "/case-studies/ai-2026-quantum-neural-superintelligence-25-billion-success"
    },
    {
      title: "Healthcare AI Diagnostics",
      category: "Healthcare Technology",
      description: "Revolutionary AI-powered diagnostic platform improving patient outcomes and operational efficiency.",
      technologies: ["Medical AI", "Image Processing", "Predictive Analytics"],
      results: ["99% Accuracy", "50% Faster Diagnosis", "Improved Outcomes"],
      image: "/portfolio/healthcare-ai.jpg",
      link: "/services/healthcare-ai-diagnostics-platform"
    },
    {
      title: "Financial Intelligence Platform",
      category: "FinTech Solutions",
      description: "Advanced AI platform for real-time financial analysis and automated trading strategies.",
      technologies: ["Financial AI", "Real-time Processing", "Risk Management"],
      results: ["Real-time Analysis", "Automated Trading", "Risk Reduction"],
      image: "/portfolio/fintech-ai.jpg",
      link: "/services/ai-financial-analysis-platform"
    },
    {
      title: "Manufacturing AI Optimization",
      category: "Industrial AI",
      description: "Intelligent manufacturing systems optimizing production and predictive maintenance.",
      technologies: ["IoT Integration", "Predictive Maintenance", "Quality Control"],
      results: ["30% Efficiency", "Predictive Maintenance", "Quality Improvement"],
      image: "/portfolio/manufacturing-ai.jpg",
      link: "/services/manufacturing-ai-platform"
    }
  ];

  const categories = [
    "All Projects",
    "Enterprise AI",
    "Business Automation", 
    "Advanced AI",
    "Healthcare Technology",
    "FinTech Solutions",
    "Industrial AI"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Revolutionary AI implementations and enterprise transformations delivering 
              unprecedented results for Fortune 500 companies and leading organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Results:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.results.map((result, resultIndex) => (
                        <span key={resultIndex} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable results across all our implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$2.5T+</div>
              <div className="text-blue-100">Total ROI Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000x</div>
              <div className="text-blue-100">Average Performance Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies powering our revolutionary solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Quantum AI", icon: Cpu },
              { name: "Neural Networks", icon: Brain },
              { name: "Cloud Computing", icon: Cloud },
              { name: "Blockchain", icon: Shield },
              { name: "IoT Solutions", icon: Globe },
              { name: "Automation", icon: Zap }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create your next breakthrough project together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}