import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Award } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbots and automated ticket routing",
      results: [
        "60% reduction in response time",
        "40% cost savings on customer service",
        "95% customer satisfaction rate"
      ],
      duration: "6 months",
      teamSize: "8 members",
      technologies: ["AI/ML", "NLP", "Cloud Computing"],
      image: "/api/placeholder/600/400",
      slug: "ai-customer-service-transformation"
    },
    {
      title: "Cloud Migration for Enterprise E-commerce",
      client: "RetailMax Inc.",
      industry: "E-commerce",
      challenge: "Legacy infrastructure limiting scalability and performance",
      solution: "Complete cloud migration with microservices architecture",
      results: [
        "300% improvement in page load speed",
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs"
      ],
      duration: "8 months",
      teamSize: "12 members",
      technologies: ["AWS", "Kubernetes", "Docker", "Microservices"],
      image: "/api/placeholder/600/400",
      slug: "cloud-migration-ecommerce"
    },
    {
      title: "Cybersecurity Overhaul for Financial Services",
      client: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Comprehensive security framework with real-time monitoring",
      results: [
        "Zero security breaches in 12 months",
        "100% compliance with regulations",
        "24/7 threat monitoring implemented"
      ],
      duration: "4 months",
      teamSize: "6 members",
      technologies: ["SIEM", "Firewall", "Encryption", "Compliance"],
      image: "/api/placeholder/600/400",
      slug: "cybersecurity-financial-services"
    },
    {
      title: "5G Network Implementation for Smart City",
      client: "SmartCity Municipal",
      industry: "Government",
      challenge: "Need for high-speed connectivity for IoT devices",
      solution: "5G network infrastructure with edge computing",
      results: [
        "10x faster data transmission",
        "1000+ IoT devices connected",
        "Real-time data processing enabled"
      ],
      duration: "10 months",
      teamSize: "15 members",
      technologies: ["5G", "Edge Computing", "IoT", "Data Analytics"],
      image: "/api/placeholder/600/400",
      slug: "5g-smart-city-implementation"
    },
    {
      title: "Data Analytics Platform for Healthcare",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "Fragmented data across multiple systems",
      solution: "Unified data platform with AI-powered insights",
      results: [
        "80% faster diagnosis time",
        "Centralized patient data access",
        "Predictive analytics for treatment"
      ],
      duration: "7 months",
      teamSize: "10 members",
      technologies: ["Big Data", "AI/ML", "Data Visualization", "HIPAA"],
      image: "/api/placeholder/600/400",
      slug: "data-analytics-healthcare"
    },
    {
      title: "Mobile App Development for Logistics",
      client: "LogiFlow Corp",
      industry: "Logistics",
      challenge: "Inefficient manual tracking and communication",
      solution: "Cross-platform mobile app with real-time tracking",
      results: [
        "50% improvement in delivery efficiency",
        "Real-time tracking for all shipments",
        "Driver productivity increased by 35%"
      ],
      duration: "5 months",
      teamSize: "7 members",
      technologies: ["React Native", "GPS", "Push Notifications", "API"],
      image: "/api/placeholder/600/400",
      slug: "mobile-app-logistics"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful case studies showcasing AI, IT, and digital transformation projects across various industries."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with our innovative AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-video bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {study.title.split(' ').slice(0, 3).join(' ')}
                      </span>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          {study.teamSize}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}