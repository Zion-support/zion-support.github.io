
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';


=======
import React from 'react';

import MainLayout from '../src/components/layout/MainLayout';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { motion } from 'framer-motion';


  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  Clock,
  BarChart3,
  Cloud,
  Shield;


} from 'lucide-react';
const caseStudies = [
  {
    id: 1
    title: "AI-Powered Customer Service Transformation"
    client: "Global E-commerce Retailer"
    industry: "E-commerce"
    challenge: "High customer service costs and inconsistent response quality"
    solution: "Implemented AI-powered chatbot and intelligent routing system"
    results: [
      "60% reduction in support costs"
      "40% faster response times"
      "95% customer satisfaction rate"
      "$2M annual savings"
    ]
    duration: "3 months"
    team: "8 experts"
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"]
    image: "/images/case-studies/ecommerce-ai.jpg"
  }
  {
    id: 2
    title: "Cloud Migration for Financial Services"
    client: "Regional Bank"
    industry: "Financial Services"
    challenge: "Legacy systems limiting scalability and innovation"
    solution: "Complete cloud migration with microservices architecture"
    results: [
      "99.9% uptime achieved"
      "50% faster application deployment"
      "30% reduction in infrastructure costs"
      "Enhanced security compliance"
    ]
    duration: "6 months"
    team: "12 experts"
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"]
    image: "/images/case-studies/cloud-migration.jpg"
  }
  {
    id: 3
    title: "Cybersecurity Enhancement for Healthcare"
    client: "Healthcare Network"
    industry: "Healthcare"
    challenge: "Increasing cyber threats and compliance requirements"
    solution: "Comprehensive security framework and threat detection system"
    results: [
      "Zero security breaches"
      "100% compliance with HIPAA"
      "24/7 threat monitoring"
      "50% faster incident response"
    ]
    duration: "4 months"
    team: "6 experts"
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"]
    image: "/images/case-studies/healthcare-security.jpg"
  }
];
const stats = [
  { number: "500+", label: "Projects Completed" }
  { number: "50+", label: "Happy Clients" }
  { number: "99.9%", label: "Success Rate" }
=======
import {;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  TrendingUp,;
  CheckCircle,;
  Users,;
  Building,;
  Globe,;
  Award,;
  Clock,;
  BarChart3,;
  Cloud,;
  Shield;
} from 'lucide-react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
const caseStudies = [;
  {;
    id: 1,;
    title: "AI-Powered Customer Service Transformation",;
    client: "Global E-commerce Retailer",;
    industry: "E-commerce",;
    challenge: "High customer service costs and inconsistent response quality",;
    solution: "Implemented AI-powered chatbot and intelligent routing system",;
    results: [;
      "60% reduction in support costs",;
      "40% faster response times",;
      "95% customer satisfaction rate",;
      "$2M annual savings";
    ],;
    duration: "3 months",;
    team: "8 experts",;
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"],;
    image: "/images/case-studies/ecommerce-ai && ai.jpg";
  },;
  {;
    id: 2,;
    title: "Cloud Migration for Financial Services",;
    client: "Regional Bank",;
    industry: "Financial Services",;
    challenge: "Legacy systems limiting scalability and innovation",;
    solution: "Complete cloud migration with microservices architecture",;
    results: [;
      "99 && 99.9% uptime achieved",;
      "50% faster application deployment",;
      "30% reduction in infrastructure costs",;
      "Enhanced security compliance";
    ],;
    duration: "6 months",;
    team: "12 experts",;
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],;
    image: "/images/case-studies/cloud-migration && migration.jpg";
  },;
  {;
    id: 3,;
    title: "Cybersecurity Enhancement for Healthcare",;
    client: "Healthcare Network",;
    industry: "Healthcare",;
    challenge: "Increasing cyber threats and compliance requirements",;
    solution: "Comprehensive security framework and threat detection system",;
    results: [;
      "Zero security breaches",;
      "100% compliance with HIPAA",;
      "24/7 threat monitoring",;
      "50% faster incident response";
    ],;
    duration: "4 months",;
    team: "6 experts",;
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],;
    image: "/images/case-studies/healthcare-security && security.jpg";
  }
];
const stats = [;
  { number: "500+", label: "Projects Completed" },;
  { number: "50+", label: "Happy Clients" },;
  { number: "99 && 99.9%", label: "Success Rate" },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  { number: "24/7", label: "Support Available" }
];


        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div

              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Success{' '}

                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">;
                  Stories;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Discover how we've helped businesses transform and achieve their goals ;
                through innovative technology solutions.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;


=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  Clock,
  BarChart3,
  Cloud,
  Shield;
} from 'lucide-react';
const caseStudies = [
  {
    id: 1
    title: "AI-Powered Customer Service Transformation"
    client: "Global E-commerce Retailer"
    industry: "E-commerce"
    challenge: "High customer service costs and inconsistent response quality"
    solution: "Implemented AI-powered chatbot and intelligent routing system"
    results: [
      "60% reduction in support costs"
      "40% faster response times"
      "95% customer satisfaction rate"
      "$2M annual savings"
    ]
    duration: "3 months"
    team: "8 experts"
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"]
    image: "/images/case-studies/ecommerce-ai.jpg"
  }
  {
    id: 2
    title: "Cloud Migration for Financial Services"
    client: "Regional Bank"
    industry: "Financial Services"
    challenge: "Legacy systems limiting scalability and innovation"
    solution: "Complete cloud migration with microservices architecture"
    results: [
      "99.9% uptime achieved"
      "50% faster application deployment"
      "30% reduction in infrastructure costs"
      "Enhanced security compliance"
    ]
    duration: "6 months"
    team: "12 experts"
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"]
    image: "/images/case-studies/cloud-migration.jpg"
  }
  {
    id: 3
    title: "Cybersecurity Enhancement for Healthcare"
    client: "Healthcare Network"
    industry: "Healthcare"
    challenge: "Increasing cyber threats and compliance requirements"
    solution: "Comprehensive security framework and threat detection system"
    results: [
      "Zero security breaches"
      "100% compliance with HIPAA"
      "24/7 threat monitoring"
      "50% faster incident response"
    ]
    duration: "4 months"
    team: "6 experts"
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"]
    image: "/images/case-studies/healthcare-security.jpg"
  }
];
const stats = [
  { number: "500+", label: "Projects Completed" }
  { number: "50+", label: "Happy Clients" }
  { number: "99.9%", label: "Success Rate" }

        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
        {/* Stats Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {stats && stats.map((stat, index) => (;
                <motion&& motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
            </div>;
          </div>;
        </section>;

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  Globe,
  Award,
  Clock,
  BarChart3,
  Cloud,
  Shield;
} from 'lucide-react';
;
const case_studies = [;
  {
    id: 1,
    title: "AI - Powered Customer Service Transformation",
    client: "Global E - commerce Retailer",
    industry: "E - commerce",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "Implemented AI - powered chatbot and intelligent routing system",
    results: [;
      "60% reduction in support costs",
      "40% faster response times",
      "95% customer satisfaction rate",
      "$2M annual savings";
    ],
    duration: "3 months",
    team: "8 experts",
    technologies: ["AI / ML", "NLP", "Cloud", "Analytics"],
    image: "/images / case - studies / ecommerce - ai.jpg";
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy systems limiting scalability and innovation",
    solution: "Complete cloud migration with microservices architecture",
    results: [;
      "99.9% uptime achieved",
      "50% faster application deployment",
      "30% reduction in infrastructure costs",
      "Enhanced security compliance";
    ],
    duration: "6 months",
    team: "12 experts",
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"],
    image: "/images / case - studies / cloud - migration.jpg";
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement for Healthcare",
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Increasing cyber threats and compliance requirements",
    solution: "Comprehensive security framework and threat detection system",
    results: [;
      "Zero security breaches",
      "100% compliance with HIPAA",
      "24 / 7 threat monitoring",
      "50% faster incident response";
    ],
    duration: "4 months",
    team: "6 experts",
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"],
    image: "/images / case - studies / healthcare - security.jpg";
  }
];
;
const stats = [;
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Success Rate" },
  { number: "24 / 7", label: "Support Available" }
];
export default /**
 * CaseStudiesPage - Function description
 */
function CaseStudiesPage() {
  return (
    <MainLayout;
      title="Case Studies - Zion Tech Group";
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions.";
      keywords="case studies, success stories, client projects, technology solutions, AI implementation";
    >;
      <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - green - 900 via - teal - 900 to - blue - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - green - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - teal - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Success{' '}
                <span className="bg - gradient - to - r from - green - 400 to - teal - 400 bg - clip - text text - transparent">;
                  Stories;
                </span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Discover how we've helped businesses transform and achieve their goals;
                through innovative technology solutions.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              {stats.map ((stat, index) => (
                <motion.div;
                  key={index}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="text - 3xl md:text - 4xl font - bold text - green - 600 mb - 2">;
                    {stat.number}
                  </div>;
                  <div className="text - gray - 600 font - medium">{stat.label}</div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Case Studies */}
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Featured Case Studies;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                Real projects, real results. See how we've helped businesses across;
                different industries achieve their technology goals.;
              </p>;
            </motion.div>;
            <div className="max - w-6xl mx - auto">;
              <div className="space - y-16">;
                {case_studies.map ((study, index) => (
                  <motion.div;
                                {result}
                              </li>;
                            ))}
                          </ul>;
                        </div>;
                        <div className="flex flex-wrap gap-2 mb-6">;
                          {study && study.technologies.map((tech, idx) => (;
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">;
                              {tech}
                            </span>;
                          ))}
                        </div>;
                        <div className="flex items-center justify-between">;
                          <div className="flex items-center text-sm text-gray-600">;
                            <Users className="w-4 h-4 mr-2" />;
                            {study && study.team}
                          </div>;
                          <a
                            href={`/case-studies/${study && study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">;
                            Read Full Case Study;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          </a>;
                        </div>;
                      </div>;
                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">;
                        <div className="text-center text-white">;
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />;
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>;
                          <p className="text-green-100">;
                          </span>;
                          <span className="text - gray - 500 text - sm">{study.duration}</span>;
                        </div>;
                        <h3 className="text - 2xl font - bold text - gray - 900 mb - 4">;
                          {study.title}
                        </h3>;
                        <p className="text - gray - 600 mb - 6">;
                          <strong > Client:</strong> {study.client}
                        </p>;
                        <div className="space - y-4 mb - 6">;
                          <div>;
                            <h4 className="font - semibold text - gray - 900 mb - 2">Challenge:</h4>;
                            <p className="text - gray - 600">{study.challenge}</p>;
                          </div>;
                          <div>;
                            <h4 className="font - semibold text - gray - 900 mb - 2">Solution:</h4>;
                            <p className="text - gray - 600">{study.solution}</p>;
                          </div>;
                        </div>;
                        <div className="mb - 6">;
                          <h4 className="font - semibold text - gray - 900 mb - 3">Key Results:</h4>;
                          <ul className="space - y-2">;
                            {study.results.map ((result, idx) => (
                              <li key={idx} className="flex items - center text - gray - 600">;
                                <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2" />;
                                {result}
                              </li>))}
                          </ul>;
                        </div>;
                        <div className="flex flex - wrap gap - 2 mb - 6">;
                          {study.technologies.map ((tech, idx) => (
                            <span key={idx} className="bg - gray - 100 text - gray - 700 px - 3 py - 1 rounded - full text - sm">;
                              {tech}
                            </span>))}
                        </div>;
                        <div className="flex items - center justify - between">;
                          <div className="flex items - center text - sm text - gray - 600">;
                            <Users className="w - 4 h - 4 mr - 2" />;
                            {study.team}
                          </div>;
                          <a;
                            href={`/case - studies/${study.id}`}
                            className="inline - flex items - center text - green - 600 hover:text - green - 700 font - semibold";
                          >;
                            Read Full Case Study;
                            <ArrowRight className="w - 4 h - 4 ml - 2" />;
                          </a>;
                        </div>;
                      </div>;
                      <div className="bg - gradient - to - br from - green - 500 to - teal - 600 p - 8 flex items - center justify - center">;
                        <div className="text - center text - white">;
                          <Building className="w - 16 h - 16 mx - auto mb - 4 opacity - 80" />;
                          <h4 className="text - xl font - semibold mb - 2">Project Overview</h4>;
                          <p className="text - green - 100">;                            A comprehensive solution that transformed our client's business operations;
                          </p>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>;
            </div>;
          </div>;
        </section>;              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Start Your Success Story?;
              </h2>;
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">;
                Let's work together to create your own success story. ;
                Contact us today to discuss your project.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
export default function CaseStudiesPage() {;
  return (
    <Layout>;
      <Head>;
        <title>Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/case-studies' />;
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'



==============

=======
import Head from 'next/head';


=======
=======
=======import Head from 'next/head';




            </div>;
          </div>;
        </section>;


        {/* Case Studies */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses across
                different industries achieve their technology goals.
              </p>
            </motion.div>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                            {study.industry}
                          </span>
                          <span className="text-gray-500 text-sm">{study.duration}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          <strong>Client:</strong> {study.client}
                        </p>
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
                          </div>
                          <a
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
                          <p className="text-green-100">
                            A comprehensive solution that transformed our client's business operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's work together to create your own success story.
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
ursor/integrate-build-improve-and-re-verify-8f7d
import Head from 'next/head';
origin/main
import Head from 'next/head';
origin/automation-improvements-final
import Link from 'next/link';
import Layout from '../components/Layout';
export default function CaseStudiesPage() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <link rel='canonical' href='https://ziontechgroup.com/case-studies' />
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
        />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          Case Studies
        </h1>
        <p className='text-gray-300'>
          Proven outcomes and detailed success stories. Coming soon.
        </p>
      </section>
    </Layout>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  );
 </Head> </section> </Layout>
export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - green - 900 via - teal - 900 to - blue - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - green - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - teal - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Success{' '}
                <span className="bg - gradient - to - r from - green - 400 to - teal - 400 bg - clip - text text - transparent">;
                  Stories;
                </span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Discover how we've helped businesses transform and achieve their goals;
                through innovative technology solutions.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              {stats.map ((stat, index) => (
                <motion.div;
                  key={index}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="text - 3xl md:text - 4xl font - bold text - green - 600 mb - 2">;
                    {stat.number}
                  </div>;
                  <div className="text - gray - 600 font - medium">{stat.label}</div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Case Studies */}
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Featured Case Studies;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                Real projects, real results. See how we've helped businesses across;
                different industries achieve their technology goals.;
              </p>;
            </motion.div>;
            <div className="max - w-6xl mx - auto">;
              <div className="space - y-16">;
                {case_studies.map ((study, index) => (
                  <motion.div;

 </Head> </section> </Layout>
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function CaseStudiesPage() {
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    key={study.id}
                    className="bg - white rounded - lg shadow - lg overflow - hidden";
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >;
                    <div className="grid grid - cols - 1 lg:grid - cols - 2">;
                      <div className="p - 8">;
                        <div className="flex items - center mb - 4">;
                          <span className="bg - green - 100 text - green - 800 px - 3 py - 1 rounded - full text - sm font - semibold mr - 4">;
                            {study.industry}

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Featured Case Studies;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                Real projects, real results. See how we've helped businesses across ;
                different industries achieve their technology goals.;
              </p>;
            </motion && motion.div>;

            <div className="max-w-6xl mx-auto">;
              <div className="space-y-16">;
                {caseStudies && caseStudies.map((study, index) => (;
                  <motion&& motion.div
                    key={study && study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.2 }}
                    viewport={{ once: true }}>;
                    <div className="grid grid-cols-1 lg:grid-cols-2">;
                      <div className="p-8">;
                        <div className="flex items-center mb-4">;
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">;
                            {study && study.industry}
                          </span>;
                          <span className="text-gray-500 text-sm">{study && study.duration}</span>;
                        </div>;

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                          {study && study.title}
                        </h3>;
                        <p className="text-gray-600 mb-6">;
                          <strong>Client:</strong> {study && study.client}
                        </p>;

                        <div className="space-y-4 mb-6">;
                          <div>;
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>;
                            <p className="text-gray-600">{study && study.challenge}</p>;
                          </div>;
                          <div>;
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>;
                            <p className="text-gray-600">{study && study.solution}</p>;
                          </div>;
                        </div>;

                        <div className="mb-6">;
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>;
                          <ul className="space-y-2">;
                            {study && study.results.map((result, idx) => (;
                              <li key={idx} className="flex items-center text-gray-600">;
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;

                                {result}
                              </li>;
                            ))}

                          </ul>;
                        </div>;

                        <div className="flex flex-wrap gap-2 mb-6">;
                          {study && study.technologies.map((tech, idx) => (;
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">;

                              {tech}
                            </span>;
                          ))}

                        </div>;

                        <div className="flex items-center justify-between">;
                          <div className="flex items-center text-sm text-gray-600">;
                            <Users className="w-4 h-4 mr-2" />;
                            {study && study.team}
                          </div>;
                          <a
                            href={`/case-studies/${study && study.id}`}
                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">;
                            Read Full Case Study;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          </a>;
                        </div>;
                      </div>;

                      <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">;
                        <div className="text-center text-white">;
                          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />;
                          <h4 className="text-xl font-semibold mb-2">Project Overview</h4>;
                          <p className="text-green-100">;
=======
                          </span>;
                          <span className="text - gray - 500 text - sm">{study.duration}</span>;
                        </div>;
                        <h3 className="text - 2xl font - bold text - gray - 900 mb - 4">;
                          {study.title}
                        </h3>;
                        <p className="text - gray - 600 mb - 6">;
                          <strong > Client:</strong> {study.client}
                        </p>;
                        <div className="space - y-4 mb - 6">;
                          <div>;
                            <h4 className="font - semibold text - gray - 900 mb - 2">Challenge:</h4>;
                            <p className="text - gray - 600">{study.challenge}</p>;
                          </div>;
                          <div>;
                            <h4 className="font - semibold text - gray - 900 mb - 2">Solution:</h4>;
                            <p className="text - gray - 600">{study.solution}</p>;
                          </div>;
                        </div>;
                        <div className="mb - 6">;
                          <h4 className="font - semibold text - gray - 900 mb - 3">Key Results:</h4>;
                          <ul className="space - y-2">;
                            {study.results.map ((result, idx) => (
                              <li key={idx} className="flex items - center text - gray - 600">;
                                <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2" />;
                                {result}
                              </li>))}
                          </ul>;
                        </div>;
                        <div className="flex flex - wrap gap - 2 mb - 6">;
                          {study.technologies.map ((tech, idx) => (
                            <span key={idx} className="bg - gray - 100 text - gray - 700 px - 3 py - 1 rounded - full text - sm">;
                              {tech}
                            </span>))}
                        </div>;
                        <div className="flex items - center justify - between">;
                          <div className="flex items - center text - sm text - gray - 600">;
                            <Users className="w - 4 h - 4 mr - 2" />;
                            {study.team}
                          </div>;
                          <a;
                            href={`/case - studies/${study.id}`}
                            className="inline - flex items - center text - green - 600 hover:text - green - 700 font - semibold";
                          >;
                            Read Full Case Study;
                            <ArrowRight className="w - 4 h - 4 ml - 2" />;
                          </a>;
                        </div>;
                      </div>;
                      <div className="bg - gradient - to - br from - green - 500 to - teal - 600 p - 8 flex items - center justify - center">;
                        <div className="text - center text - white">;
                          <Building className="w - 16 h - 16 mx - auto mb - 4 opacity - 80" />;
                          <h4 className="text - xl font - semibold mb - 2">Project Overview</h4>;
                          <p className="text - green - 100">;

                            A comprehensive solution that transformed our client's business operations;
                          </p>;
                        </div>;
                      </div>;
                    </div>;

                  </motion.div>))}

              </div>;
            </div>;
          </div>;
        </section>;

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Start Your Success Story?;
              </h2>;
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">;
                Let's work together to create your own success story. ;
                Contact us today to discuss your project.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;

                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  Start Your Project;
                </a>;
                <a
                  href="/services"

                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">;
                  Explore Our Services;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;

  );
}
=======
=======
import Head from 'next/head';


export default function CaseStudiesPage() {;

  return (
    <Layout>;
      <Head>;
        <title>Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/case-studies' />;
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'


>>>>>>> origin/automation-improvements-final
=======

=======
import Head from 'next/head';


=======
=======
=======
import Head from 'next/head';




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
 </Head> </section> </Layout>
=======
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
        />;
      </Head>;
      <section className='container mx-auto px-4 py-24'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>;
          Case Studies;
        </h1>;
        <p className='text-gray-300'>;
          Proven outcomes and detailed success stories. Coming soon.;
        </p>;
      </section>;
    </Layout>;
  );
==============


}
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage(req, res) {
  try {
	return (;
		<Layout>;
			<Head>;
				<title>Case Studies | Zion Tech Group</title>;
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />;
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />;
			</Head>;
			<section className="container mx-auto px-4 py-24">;
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>;
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>;
			</section>;
		</Layout>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
