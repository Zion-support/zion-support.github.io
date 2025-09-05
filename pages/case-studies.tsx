import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  ExternalLink,
  Building,
  TrendingUp,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
const caseStudies = [
  {
    id: 1,
    title: "Healthcare AI Transformation: 40% Reduction in Diagnosis Time",
    company: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Long diagnosis times and high error rates in medical imaging analysis",
    solution: "Implemented AI-powered image recognition system with machine learning algorithms",
    results: [
      "40% reduction in diagnosis time",
      "95% accuracy in image analysis",
      "60% decrease in false positives",
      "50% improvement in patient satisfaction"
    ],
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Financial Services: AI-Powered Fraud Detection System",
    company: "SecureBank Corp",
    industry: "Financial Services",
    challenge: "Increasing fraud incidents and manual review processes",
    solution: "Deployed real-time AI fraud detection with behavioral analytics",
    results: [
      "99.2% fraud detection accuracy",
      "80% reduction in false positives",
      "Real-time transaction monitoring",
      "30% cost savings in fraud prevention"
    ],
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Manufacturing: Predictive Maintenance with IoT and AI",
    company: "Industrial Dynamics",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing production delays",
    solution: "Implemented IoT sensors with AI predictive maintenance algorithms",
    results: [
      "70% reduction in unplanned downtime",
      "25% increase in equipment lifespan",
      "15% reduction in maintenance costs",
      "Predictive accuracy of 92%"
    ],
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Retail: Personalized Customer Experience Platform",
    company: "ShopSmart Retail",
    industry: "Retail",
    challenge: "Low customer engagement and poor personalization",
    solution: "Built AI-driven recommendation engine with customer behavior analysis",
    results: [
      "45% increase in customer engagement",
      "35% boost in average order value",
      "60% improvement in conversion rates",
      "25% increase in customer retention"
    ],
    author: "Jennifer Lee",
    date: "2023-12-28",
    readTime: "5 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Education: AI-Powered Learning Management System",
    company: "EduTech University",
    industry: "Education",
    challenge: "Low student engagement and poor learning outcomes",
    solution: "Developed adaptive learning platform with AI tutoring system",
    results: [
      "50% improvement in student performance",
      "40% increase in course completion rates",
      "Personalized learning paths for each student",
      "85% student satisfaction rating"
    ],
    author: "David Kim",
    date: "2023-12-20",
    readTime: "6 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Logistics: Supply Chain Optimization with AI",
    company: "Global Logistics Inc",
    industry: "Logistics",
    challenge: "Inefficient supply chain and high operational costs",
    solution: "Implemented AI-powered supply chain optimization and route planning",
    results: [
      "30% reduction in delivery times",
      "25% decrease in fuel costs",
      "20% improvement in inventory management",
      "35% increase in customer satisfaction"
    ],
    author: "Emma Wilson",
    date: "2023-12-15",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/400"
  }
];
const industries = [
  "All Industries",
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Education",
  "Logistics",
  "Technology"
];
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from our AI and technology implementations across various industries." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100">
              Real-world results from our AI and technology implementations across various industries
            </p>
          </div>
        </div>
      </section>
      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <motion.article
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Building className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h2>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{study.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{study.date}</span>
                        </div>
                      </div>
                      <span>{study.readTime}</span>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
=======
export default function CaseStudiesPage() {;
  const caseStudies = [;
    {;
      title: 'Global E-commerce Platform Automation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Managing 10,000+ daily orders across multiple regions with manual processes',
      solution: 'Implemented autonomous order processing, inventory management, and customer service automation',
      results: [;
        '99.9% order accuracy',
        '60% reduction in processing time',
        '40% cost savings',
        '24/7 automated operations';
      ],
      technologies: ['AI Order Processing', 'Inventory Automation', 'Customer Service Bots', 'Real-time Analytics'];
},
    {;
      title: 'Financial Services Compliance Automation',
      company: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Complex regulatory compliance requiring constant monitoring and reporting',
      solution: 'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting',
      results: [;
        '100% compliance rate maintained',
        '90% faster regulatory reporting',
        'Real-time risk detection',
        'Automated audit trails';
      ],
      technologies: ['Compliance Monitoring', 'Risk Assessment AI', 'Automated Reporting', 'Audit Automation'];
},
    {;
      title: 'Healthcare Data Processing Automation',
      company: 'MediTech Solutions',
      industry: 'Healthcare',
      challenge: 'Processing millions of patient records while maintaining HIPAA compliance',
      solution: 'Developed secure, autonomous data processing pipeline with privacy-preserving AI',
      results: [;
        '10x faster data processing',
        'Zero HIPAA violations',
        '99.99% data accuracy',
        'Automated quality checks';
      ],
      technologies: ['HIPAA-Compliant AI', 'Data Pipeline Automation', 'Privacy-Preserving ML', 'Quality Assurance'];
},
    {;
      title: 'Manufacturing Quality Control',
      company: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Manual quality inspection causing delays and inconsistent results',
      solution: 'Implemented computer vision and AI-powered quality control automation',
      results: [;
        '95% defect detection rate',
        '80% faster inspection process',
        'Zero production delays',
        'Continuous quality improvement';
      ],
      technologies: ['Computer Vision AI', 'Quality Control Automation', 'Predictive Maintenance', 'Real-time Monitoring'];
=======
import Layout from '../components/layout/Layout';

export default function CaseStudiesPage() {
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	);
>>>>>>> origin/automation/changelog
}
  ];
  const industries = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];
  return (;
    <>;
      <Head>;
        <title>Case Studies | Zion Tech Group - Success Stories & Automation Results</title>;
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." />;
        <meta property="og:title" content="Case Studies - Zion Tech Group" />;
        <meta property="og:description" content="Success stories and automation results from real businesses." />;
        <meta name="twitter:card" content="summary_large_image" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <nav className="mb-8">;
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
              ← Back to Home;
            </a>;
          </nav>;
          <header className="text-center mb-16">;
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;
              Success Stories;
            </h1>;
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;
              Discover how Zion Tech Group's autonomous automation solutions have transformed ;
              businesses across industries, delivering measurable results and competitive advantages.;
            </p>;
          </header>;

          {/* Industry Filter */}
          <section className="mb-12">;
            <div className="flex flex-wrap gap-3 justify-center">;
              {industries.map(industry => (;
                <button;
                  key={industry}
                  className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300">;
>>>>>>> origin/automation-fixes
                  {industry}
                </button>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <motion.article
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Key Results:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{study.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{study.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{study.readTime}</span>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with AI and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
            </div>;
          </section>;

          {/* Case Studies Grid */}
          <section className="mb-20">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {caseStudies.map((study, index) => (;
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">;
                  <div className="flex items-center gap-3 mb-4">;
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">;
                      {study.industry}
                    </span>;
                    <span className="text-white/60 text-sm">{study.company}</span>;
                  </div>;
                  <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>;
                  <div className="mb-6">;
                    <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge</h4>;
                    <p className="text-white/80 text-sm">{study.challenge}</p>;
                  </div>;
                  <div className="mb-6">;
                    <h4 className="font-semibold text-green-400 mb-2">Our Solution</h4>;
                    <p className="text-white/80 text-sm">{study.solution}</p>;
                  </div>;
                  <div className="mb-6">;
                    <h4 className="font-semibold text-blue-400 mb-2">Results</h4>;
                    <ul className="space-y-1">;
                      {study.results.map((result, resultIndex) => (;
                        <li key={resultIndex} className="text-white/80 text-sm">• {result}</li>;
                      ))}
                    </ul>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-purple-400 mb-2">Technologies Used</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {study.technologies.map((tech, techIndex) => (;
                        <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20">;
                          {tech}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </section>;

          {/* Success Metrics */}
          <section className="mb-20">;
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact</h2>;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
              <div className="text-center">;
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>;
                <div className="text-white/70 text-sm">Automation Projects</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+</div>;
                <div className="text-white/70 text-sm">Cost Savings Generated</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>;
                <div className="text-white/70 text-sm">Average Success Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>;
                <div className="text-white/70 text-sm">Automated Operations</div>;
              </div>;
            </div>;
          </section>;

          {/* Call to Action */}
          <section className="text-center">;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">;
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>;
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">;
                Join the hundreds of companies that have transformed their operations with ;
                Zion Tech Group's autonomous automation solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">;
                  Start Your Project;
                </a>;
                <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">;
                  Explore Services;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
>>>>>>> origin/automation-fixes
  );
}