import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Award, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Cpu,
  Database
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global Financial Services",
      industry: "Financial Services",
      challenge: "Complex legacy systems and compliance requirements",
      solution: "AI-powered digital transformation and SOC2 compliance automation",
      results: [
        "40% reduction in operational costs",
        "100% SOC2 compliance achievement",
        "60% faster time-to-market for new products"
      ],
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: "Patient data security and HIPAA compliance",
      solution: "Advanced cybersecurity suite with AI-powered threat detection",
      results: [
        "99.9% security incident prevention",
        "50% reduction in security response time",
        "Full HIPAA compliance certification"
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Supply chain inefficiencies and quality control",
      solution: "AI-powered supply chain optimization and predictive maintenance",
      results: [
        "30% improvement in supply chain efficiency",
        "25% reduction in equipment downtime",
        "20% increase in product quality"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      company: "E-commerce Platform",
      industry: "Retail",
      challenge: "Customer experience and operational scalability",
      solution: "AI-powered customer analytics and autonomous operations",
      results: [
        "35% increase in customer satisfaction",
        "45% improvement in conversion rates",
        "24/7 autonomous customer support"
      ],
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Cloud Infrastructure Provider",
      industry: "Technology",
      challenge: "Multi-cloud management and cost optimization",
      solution: "Intelligent cloud orchestration and cost management",
      results: [
        "50% reduction in cloud costs",
        "99.99% uptime achievement",
        "Automated scaling and optimization"
      ],
      icon: Database,
      color: "from-indigo-500 to-blue-500"
    },
    {
      company: "Research Institution",
      industry: "Education",
      challenge: "Research data management and collaboration",
      solution: "AI-powered research platform and collaborative tools",
      results: [
        "3x faster research completion",
        "Enhanced collaboration capabilities",
        "Automated data analysis and insights"
      ],
      icon: Users,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions have given us a competitive edge we never thought possible.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Services"
    },
    {
      quote: "The cybersecurity implementation exceeded our expectations. We've achieved unprecedented security levels while maintaining operational efficiency.",
      author: "Michael Chen",
      title: "Security Director",
      company: "Healthcare Technology Provider"
    },
    {
      quote: "Our supply chain optimization has revolutionized our manufacturing process. The AI insights are invaluable for strategic decision-making.",
      author: "David Rodriguez",
      title: "Operations Manager",
      company: "Manufacturing Corporation"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Technology",
    "Education",
    "Government",
    "Energy",
    "Transportation",
    "Media & Entertainment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how organizations across industries have transformed their operations 
              with Zion Tech Group's AI-powered solutions. Real results, real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real-world examples of how our AI solutions have delivered 
              measurable results for organizations like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-3`}>
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                    <p className="text-sm text-gray-400">{study.industry}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to work across all industries, 
              delivering measurable results regardless of your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the organizations that have already transformed their operations with 
            Zion Tech Group's AI-powered solutions. Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;