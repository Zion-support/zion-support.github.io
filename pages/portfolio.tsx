import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Portfolio: NextPage = () => {
  const projects = [
    {
      title: "E-Commerce AI Platform",
      description: "Revolutionary AI-powered e-commerce platform that increased conversion rates by 250% through personalized recommendations and dynamic pricing.",
      client: "RetailTech Solutions",
      industry: "E-Commerce",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
      results: [
        "250% increase in conversion rates",
        "40% reduction in cart abandonment",
        "60% improvement in customer satisfaction"
      ],
      image: "🛒",
      featured: true,
      duration: "6 months"
    },
    {
      title: "Blockchain Supply Chain System",
      description: "End-to-end blockchain solution for pharmaceutical supply chain ensuring complete traceability and compliance with FDA regulations.",
      client: "PharmaCorp International",
      industry: "Pharmaceuticals",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      results: [
        "100% supply chain transparency",
        "50% reduction in counterfeit products",
        "30% faster compliance reporting"
      ],
      image: "💊",
      featured: true,
      duration: "8 months"
    },
    {
      title: "IoT Manufacturing Dashboard",
      description: "Real-time IoT monitoring system for manufacturing plants with predictive maintenance and quality control automation.",
      client: "ManufacturingCo",
      industry: "Manufacturing",
      technologies: ["React", "Python", "MQTT", "InfluxDB", "Grafana"],
      results: [
        "35% reduction in downtime",
        "25% improvement in product quality",
        "20% decrease in maintenance costs"
      ],
      image: "🏭",
      featured: false,
      duration: "4 months"
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Complete cloud migration strategy for a financial services company with 99.99% uptime and 40% cost reduction.",
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Prometheus"],
      results: [
        "99.99% uptime achieved",
        "40% reduction in infrastructure costs",
        "50% faster deployment times"
      ],
      image: "🏦",
      featured: true,
      duration: "5 months"
    },
    {
      title: "Mobile Banking App",
      description: "Cross-platform mobile banking application with biometric authentication and real-time transaction monitoring.",
      client: "SecureBank",
      industry: "Fintech",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "JWT"],
      results: [
        "4.8/5 app store rating",
        "200% increase in mobile transactions",
        "Zero security incidents"
      ],
      image: "📱",
      featured: false,
      duration: "7 months"
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Machine learning platform for healthcare providers to predict patient outcomes and optimize treatment plans.",
      client: "MedTech Solutions",
      industry: "Healthcare",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
      results: [
        "85% accuracy in outcome prediction",
        "30% improvement in treatment success rates",
        "25% reduction in readmission rates"
      ],
      image: "🏥",
      featured: false,
      duration: "9 months"
    },
    {
      title: "Cybersecurity Monitoring System",
      description: "Advanced threat detection and response system with AI-powered security analytics for enterprise networks.",
      client: "TechCorp Global",
      industry: "Technology",
      technologies: ["Python", "Elasticsearch", "Kibana", "Kafka", "Docker"],
      results: [
        "90% reduction in security incidents",
        "Real-time threat detection",
        "Automated incident response"
      ],
      image: "🔒",
      featured: false,
      duration: "6 months"
    },
    {
      title: "Smart City IoT Platform",
      description: "Comprehensive IoT platform for smart city management including traffic, energy, and environmental monitoring.",
      client: "City of Innovation",
      industry: "Smart Cities",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana"],
      results: [
        "20% reduction in energy consumption",
        "15% improvement in traffic flow",
        "Real-time environmental monitoring"
      ],
      image: "🏙️",
      featured: false,
      duration: "12 months"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Portfolio - Zion Tech Solutions</title>
        <meta name="description" content="Explore our portfolio of successful technology projects. From AI-powered platforms to blockchain solutions, see how we've helped businesses transform their digital presence." />
        <meta name="keywords" content="portfolio, technology projects, AI solutions, blockchain, cloud migration, mobile apps, case studies, success stories" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover how we've helped businesses across various industries transform their digital presence 
            with cutting-edge technology solutions. Each project represents our commitment to excellence and innovation.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-300 text-sm font-medium">
                  Client: {project.client}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{project.image}</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-300 text-xs flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-xs font-medium">{project.client}</span>
                  <span className="text-gray-400 text-xs">{project.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses that have transformed their digital presence with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/blog" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Read Case Studies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;