import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    title: "Healthcare AI Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    duration: "6 months",
    team: "12 developers",
    challenge: "A leading healthcare provider needed to modernize their patient data management system and implement AI-powered diagnostic tools to improve patient outcomes and reduce operational costs.",
    solution: "We developed a comprehensive AI platform that integrated machine learning algorithms for early disease detection, automated patient data processing, and real-time analytics dashboard. The solution included secure cloud infrastructure and HIPAA-compliant data handling.",
    results: [
      "40% reduction in diagnostic time",
      "60% improvement in data processing efficiency",
      "25% decrease in operational costs",
      "99.9% system uptime achieved"
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    category: "AI & Machine Learning"
  },
  {
    title: "Financial Services Cloud Migration",
    client: "Global Finance Corp",
    industry: "Financial Services",
    duration: "8 months",
    team: "15 developers",
    challenge: "A multinational financial institution needed to migrate their legacy systems to the cloud while maintaining security compliance and improving scalability for their growing customer base.",
    solution: "We designed and implemented a comprehensive cloud migration strategy using microservices architecture, implemented advanced security measures, and created automated CI/CD pipelines for seamless deployment and monitoring.",
    results: [
      "50% reduction in infrastructure costs",
      "300% improvement in system scalability",
      "Zero downtime during migration",
      "100% compliance with financial regulations"
    ],
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Java", "Spring Boot"],
    image: "/api/placeholder/600/400",
    category: "Cloud & Infrastructure"
  },
  {
    title: "E-commerce Platform Modernization",
    client: "RetailMax",
    industry: "Retail",
    duration: "4 months",
    team: "8 developers",
    challenge: "An established retail company needed to modernize their outdated e-commerce platform to handle increased traffic, improve user experience, and integrate with modern payment systems.",
    solution: "We rebuilt the entire e-commerce platform using modern technologies, implemented advanced search and recommendation engines, integrated multiple payment gateways, and created a mobile-responsive design with real-time inventory management.",
    results: [
      "200% increase in page load speed",
      "150% improvement in conversion rates",
      "80% reduction in cart abandonment",
      "99.5% customer satisfaction score"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Elasticsearch", "Redis", "MongoDB"],
    image: "/api/placeholder/600/400",
    category: "Web Development"
  },
  {
    title: "Cybersecurity Implementation",
    client: "TechStart Inc",
    industry: "Technology",
    duration: "3 months",
    team: "6 developers",
    challenge: "A growing technology startup needed comprehensive cybersecurity measures to protect their intellectual property and customer data while meeting industry compliance requirements.",
    solution: "We implemented a multi-layered security approach including network security, endpoint protection, data encryption, access controls, and continuous monitoring systems with automated threat detection and response capabilities.",
    results: [
      "100% compliance with security standards",
      "Zero security breaches achieved",
      "50% reduction in security incidents",
      "24/7 automated threat monitoring"
    ],
    technologies: ["AWS Security", "SIEM", "WAF", "VPN", "Encryption", "Monitoring Tools"],
    image: "/api/placeholder/600/400",
    category: "Cybersecurity"
  },
  {
    title: "Data Analytics Platform",
    client: "Manufacturing Co",
    industry: "Manufacturing",
    duration: "5 months",
    team: "10 developers",
    challenge: "A manufacturing company needed to implement a comprehensive data analytics platform to optimize production processes, predict maintenance needs, and improve overall operational efficiency.",
    solution: "We developed a real-time data analytics platform that collected data from IoT sensors, implemented predictive maintenance algorithms, created interactive dashboards for operations teams, and integrated with existing ERP systems.",
    results: [
      "30% reduction in maintenance costs",
      "20% increase in production efficiency",
      "90% improvement in predictive accuracy",
      "Real-time operational insights"
    ],
    technologies: ["Python", "Apache Kafka", "Apache Spark", "Tableau", "IoT", "Machine Learning"],
    image: "/api/placeholder/600/400",
    category: "Data Analytics"
  },
  {
    title: "Mobile App Development",
    client: "FitnessFirst",
    industry: "Health & Fitness",
    duration: "4 months",
    team: "6 developers",
    challenge: "A fitness company wanted to create a comprehensive mobile application that would help users track workouts, monitor health metrics, and connect with personal trainers through video sessions.",
    solution: "We developed a cross-platform mobile application with real-time workout tracking, health data integration, video calling capabilities, and a backend system for trainer management and user analytics.",
    results: [
      "4.8/5 app store rating",
      "100,000+ downloads in first month",
      "85% user retention rate",
      "Seamless video calling experience"
    ],
    technologies: ["React Native", "Node.js", "WebRTC", "MongoDB", "AWS", "Stripe"],
    image: "/api/placeholder/600/400",
    category: "Mobile Development"
  }
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud & Infrastructure",
  "Web Development",
  "Cybersecurity",
  "Data Analytics",
  "Mobile Development"
];

const stats = [
  { icon: TrendingUp, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: DollarSign, value: "$50M+", label: "Cost Savings Delivered" },
  { icon: Clock, value: "99.9%", label: "Uptime Achieved" }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Studies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      <span className="font-medium">{study.client}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                      <span>•</span>
                      <span>{study.team}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </a>
                <a
                  href="/solutions"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}