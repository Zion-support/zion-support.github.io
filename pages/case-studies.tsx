import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  User,
  Star,
  TrendingUp,
  CheckCircle,
  Award,
  ChevronRight
} from 'lucide-react';

const caseStudies = [
  {
    id: 'ai-healthcare',
    title: 'AI-Powered Healthcare Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    duration: '6 months',
    results: '40% reduction in diagnosis time',
    description: 'Developed an AI-powered diagnostic platform that improved patient outcomes and reduced diagnosis time.',
    image: '/images/case-study-1.jpg'
  },
  {
    id: 'cloud-migration',
    title: 'Enterprise Cloud Migration',
    client: 'Global Finance Corp',
    industry: 'Finance',
    duration: '8 months',
    results: '60% cost reduction',
    description: 'Successfully migrated legacy systems to cloud infrastructure, reducing operational costs significantly.',
    image: '/images/case-study-2.jpg'
  },
  {
    id: 'iot-manufacturing',
    title: 'Smart Manufacturing IoT Solution',
    client: 'Industrial Dynamics',
    industry: 'Manufacturing',
    duration: '4 months',
    results: '25% efficiency increase',
    description: 'Implemented IoT sensors and analytics to optimize manufacturing processes and improve efficiency.',
    image: '/images/case-study-3.jpg'
  }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform with technology"
      keywords="case studies, projects, success stories, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions.
              </p>
            </motion.div>
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
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {caseStudy.industry}
                      </span>
                      <span className="text-sm text-gray-500">{caseStudy.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Client:</span> {caseStudy.client}
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        {caseStudy.results}
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mt-4"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  View Our Services
                </Link>
              </div>
            </motion.div>
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