import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Portfolio: NextPage = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "A comprehensive e-commerce solution with AI-driven product recommendations, automated customer service, and predictive analytics.",
      image: "🛒",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
      category: "AI Development",
      client: "TechRetail Inc.",
      results: "300% increase in conversion rates, 40% reduction in customer service costs",
      href: "/portfolio/ai-ecommerce-platform"
    },
    {
      title: "Cloud Migration for Enterprise",
      description: "Complete migration of legacy systems to AWS cloud infrastructure with microservices architecture and automated scaling.",
      image: "☁️",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      category: "Cloud Architecture",
      client: "GlobalCorp",
      results: "60% cost reduction, 99.9% uptime, 5x faster deployment",
      href: "/portfolio/cloud-migration"
    },
    {
      title: "Mobile Banking Application",
      description: "Secure mobile banking app with biometric authentication, real-time transactions, and advanced fraud detection.",
      image: "🏦",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Blockchain"],
      category: "Mobile Development",
      client: "SecureBank",
      results: "1M+ downloads, 4.8/5 rating, 50% increase in user engagement",
      href: "/portfolio/mobile-banking"
    },
    {
      title: "IoT Fleet Management System",
      description: "Real-time fleet tracking and management system with predictive maintenance and route optimization.",
      image: "🚛",
      technologies: ["React", "Python", "IoT", "Machine Learning", "Azure"],
      category: "IoT Solutions",
      client: "LogisticsPro",
      results: "25% fuel savings, 30% reduction in maintenance costs",
      href: "/portfolio/iot-fleet-management"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive business intelligence dashboard with real-time data visualization and automated reporting.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "PostgreSQL"],
      category: "Data Analytics",
      client: "DataCorp",
      results: "80% faster decision making, 90% reduction in report generation time",
      href: "/portfolio/analytics-dashboard"
    },
    {
      title: "Blockchain Supply Chain Platform",
      description: "Transparent supply chain tracking using blockchain technology with smart contracts and automated compliance.",
      image: "⛓️",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      category: "Blockchain",
      client: "SupplyChain Solutions",
      results: "100% traceability, 70% reduction in fraud, 40% faster transactions",
      href: "/portfolio/blockchain-supply-chain"
    },
    {
      title: "Cybersecurity Monitoring System",
      description: "Advanced threat detection and response system with AI-powered anomaly detection and automated incident response.",
      image: "🔒",
      technologies: ["Python", "Machine Learning", "Elasticsearch", "Kibana", "Docker"],
      category: "Cybersecurity",
      client: "SecureTech",
      results: "95% threat detection accuracy, 80% faster incident response",
      href: "/portfolio/cybersecurity-monitoring"
    },
    {
      title: "AR/VR Training Platform",
      description: "Immersive training platform for industrial workers with AR/VR simulations and progress tracking.",
      image: "🥽",
      technologies: ["Unity", "C#", "ARCore", "WebRTC", "Node.js"],
      category: "AR/VR",
      client: "Industrial Training Co.",
      results: "60% faster training completion, 90% knowledge retention rate",
      href: "/portfolio/ar-vr-training"
    }
  ];

  const categories = [
    "All", "AI Development", "Cloud Architecture", "Mobile Development", 
    "IoT Solutions", "Data Analytics", "Blockchain", "Cybersecurity", "AR/VR"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Our Portfolio - Zion Tech Solutions</title>
        <meta name="description" content="Explore our portfolio of successful technology projects including AI development, cloud solutions, mobile apps, and more." />
      </Head>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Discover our successful projects and see how we've helped businesses transform their digital presence with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{project.image}</div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-sm">{project.client}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Key Results:</h4>
                  <p className="text-gray-300 text-sm">{project.results}</p>
                </div>
                
                <Link 
                  href={project.href} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all"
                >
                  View Case Study 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl max-w-3xl mx-auto">Hear from the businesses we've helped transform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-6 italic">"Zion Tech delivered an exceptional AI-powered platform that exceeded our expectations. The team's expertise and dedication were outstanding."</p>
              <div className="text-blue-300 font-semibold">Sarah Johnson, CEO TechRetail Inc.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-6 italic">"The cloud migration was seamless and resulted in significant cost savings. Zion Tech's technical expertise is unmatched in the industry."</p>
              <div className="text-purple-300 font-semibold">Michael Chen, CTO GlobalCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-6 italic">"From concept to deployment, Zion Tech provided excellent support and delivered a solution that transformed our business operations."</p>
              <div className="text-green-300 font-semibold">Emily Rodriguez, VP SecureBank</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Get Free Consultation
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;