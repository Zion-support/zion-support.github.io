import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Portfolio: NextPage = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Built a comprehensive e-commerce solution with AI-driven product recommendations, automated inventory management, and personalized shopping experiences.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
      category: "AI & Machine Learning",
      image: "🛒",
      results: ["40% increase in conversion rates", "60% reduction in inventory costs", "95% customer satisfaction"],
      href: "#"
    },
    {
      title: "Cloud Migration for Financial Services",
      description: "Migrated a legacy financial system to AWS cloud infrastructure, ensuring compliance with financial regulations and improving system performance.",
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      category: "Cloud Computing",
      image: "🏦",
      results: ["50% reduction in infrastructure costs", "99.9% uptime achieved", "3x faster processing speeds"],
      href: "#"
    },
    {
      title: "Blockchain Supply Chain Solution",
      description: "Developed a transparent supply chain tracking system using blockchain technology for a global manufacturing company.",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      category: "Blockchain",
      image: "⛓️",
      results: ["100% traceability achieved", "30% reduction in fraud", "Real-time tracking capabilities"],
      href: "#"
    },
    {
      title: "Cybersecurity Assessment Platform",
      description: "Created an automated security assessment tool that identifies vulnerabilities and provides remediation recommendations.",
      technologies: ["Python", "Django", "React", "Docker", "PostgreSQL"],
      category: "Cybersecurity",
      image: "🔒",
      results: ["90% faster security assessments", "95% accuracy in vulnerability detection", "Automated compliance reporting"],
      href: "#"
    },
    {
      title: "Mobile Banking Application",
      description: "Developed a secure mobile banking app with biometric authentication, real-time transactions, and financial planning features.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe"],
      category: "Mobile Development",
      image: "📱",
      results: ["500K+ downloads", "4.8/5 app store rating", "Zero security incidents"],
      href: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Built a comprehensive business intelligence dashboard that provides real-time insights and predictive analytics for enterprise clients.",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "ClickHouse"],
      category: "Data Analytics",
      image: "📊",
      results: ["Real-time data processing", "50% faster decision making", "Customizable reporting"],
      href: "#"
    }
  ];

  const categories = [
    { name: "All Projects", count: projects.length, active: true },
    { name: "AI & Machine Learning", count: 2, active: false },
    { name: "Cloud Computing", count: 1, active: false },
    { name: "Blockchain", count: 1, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Mobile Development", count: 1, active: false },
    { name: "Data Analytics", count: 1, active: false }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Solutions transformed our business with their AI-powered platform. The results exceeded our expectations.",
      author: "John Smith",
      company: "TechCorp Inc.",
      role: "CEO"
    },
    {
      quote: "Their cloud migration expertise saved us thousands of dollars and improved our system performance significantly.",
      author: "Sarah Johnson",
      company: "FinanceFirst",
      role: "CTO"
    },
    {
      quote: "The blockchain solution they built for us has revolutionized our supply chain transparency and efficiency.",
      author: "Michael Chen",
      company: "Global Manufacturing Co.",
      role: "Operations Director"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Portfolio - Zion Tech Solutions</title>
        <meta name="description" content="Explore our portfolio of successful technology projects including AI solutions, cloud migrations, blockchain applications, and more." />
        <meta name="keywords" content="portfolio, projects, case studies, AI solutions, cloud migration, blockchain, cybersecurity" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover our successful technology projects and see how we've helped businesses 
            transform their operations with innovative solutions.
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category.active
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4">{project.image}</div>
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="text-gray-300 text-xs flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={project.href}
                className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
              >
                View Case Study
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;