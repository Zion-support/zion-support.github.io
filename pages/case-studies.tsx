import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Success stories and case studies from our clients"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;


import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
  ArrowRight
  Phone
  Mail
  MapPin
  TrendingUp
  CheckCircle
  Users
  Building
  Globe
  Award
  Clock
  BarChart3
  Cloud
  Shield
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

import React from 'react';

import MainLayout from '../src/components/layout/MainLayout';
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
  { number: "24/7", label: "Support Available" }
];

        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
          </div>;

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div

import React from 'react',;
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
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
        {/* Stats Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {stats && stats.map((stat, index) => (;
                <motion&& motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600 font-medium">{stat && stat.label}</div>;
                </motion && motion.div>;
              ))}
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
                              </li>;
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>;
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
export default function CaseStudiesPage() {
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
import Head from 'next/head';

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
import Head from 'next/head';
export default function CaseStudiesPage() {;
import Head from 'next/head';
  return (
    <Layout>;
      <Head>;
        <title>Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/case-studies' />;
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Enterprise Cloud Migration Success', client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing', challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation', results: [
        '60% reduction in operational costs',
        '40% improvement in system performance', '99.9% uptime achieved',
        '50% faster deployment cycles'
      ], duration: '6 months',
      team: '12 specialists', icon: Cloud,
      image: '/api/placeholder/600/400'
    }, {
      title: 'AI-Powered Customer Service Revolution',
      client: 'Leading E-commerce Platform', industry: 'E-commerce',
      challenge: 'High customer service volume and response times', solution: 'AI chatbot implementation with natural language processing',
      results: [
        '80% reduction in response time', '90% customer satisfaction rate',
        '24/7 automated support', '70% cost savings on support staff'
      ], duration: '4 months',
      team: '8 specialists', icon: Target,
      image: '/api/placeholder/600/400'
    }, {
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Firm', industry: 'Financial Services',
      challenge: 'Advanced threat protection and compliance', solution: 'Comprehensive security framework with AI monitoring',
      results: [
        '99.8% threat detection accuracy', 'Zero security breaches',
        'SOC 2 Type II compliance', '50% reduction in security incidents'
      ], duration: '8 months',
      team: '15 specialists', icon: Shield,
      image: '/api/placeholder/600/400'
    }, {
      title: 'Data Analytics Platform Development',
      client: 'Healthcare Provider Network', industry: 'Healthcare',
      challenge: 'Patient data analysis and predictive insights', solution: 'Custom analytics platform with machine learning',
      results: [
        '30% improvement in patient outcomes', '25% reduction in readmission rates',
        'Real-time data insights', 'HIPAA compliance maintained'
      ], duration: '10 months',
      team: '10 specialists', icon: TrendingUp,
      image: '/api/placeholder/600/400'
    }, {
      title: 'Micro SaaS Development',
      client: 'Startup Technology Company', industry: 'Technology',
      challenge: 'Rapid product development and market entry', solution: 'Custom micro SaaS platform with scalable architecture',
      results: [
        '3x faster time to market', '500% user growth in 6 months',
        '99.5% platform reliability', 'Seamless scalability achieved'
      ], duration: '5 months',
      team: '6 specialists', icon: Lightbulb,
      image: '/api/placeholder/600/400'
    }, {
      title: 'Digital Transformation Initiative',
      client: 'Traditional Retail Chain', industry: 'Retail',
      challenge: 'Digital modernization and omnichannel experience', solution: 'End-to-end digital transformation with AI integration',
      results: [
        '45% increase in online sales', '60% improvement in customer engagement',
        'Unified omnichannel experience', '40% reduction in operational costs'
      ], duration: '12 months',
      team: '20 specialists', icon: Building,
      image: '/api/placeholder/600/400'
    }
  ];

  const industries = [
    { name: 'Manufacturing', count: 15, icon: Building }, { name: 'Healthcare', count: 12, icon: Shield },
    { name: 'Financial Services', count: 18, icon: TrendingUp }, { name: 'E-commerce', count: 22, icon: Target },
    { name: 'Technology', count: 25, icon: Lightbulb }, { name: 'Retail', count: 14, icon: Users }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we&apos;ve seen significant improvements in efficiency and cost savings.", '
      author: "Sarah Johnson",
      title: "CTO", company: "Manufacturing Corp",
      rating: 5
    }, {
      quote: "Their AI solutions revolutionized our customer service operations. We now provide 24/7 support with higher satisfaction rates than ever before.",
      author: "Michael Chen", title: "VP of Operations",
      company: "E-commerce Platform", rating: 5
    },
    {
      quote: "The cybersecurity implementation was flawless. We feel confident knowing our data is protected by the most advanced security measures available.", author: "Dr. Emily Rodriguez",
      title: "Chief Information Officer", company: "Healthcare Network",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful client projects and case studies. See how Zion Tech Group delivers results across industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Discover how we&apos;ve helped businesses across industries achieve their goals through innovative technology solutions.''
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="#case-studies">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

import Head from 'next/head';

import Head from 'next/head';

import Head from 'next/head';
  );

 </Head> </section> </Layout>
export default function CaseStudiesPage() {
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
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage(req, res) {
  try {
	return (;

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

 </Head> </section> </Layout> ;
	return (
		<Layout>;
			<Head>;
				<title>Case Studies | Zion Tech Group</title>;
				<link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/case-studies" />;
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />;
			</Head>;
			<section className="container mx-auto px-4 py-24">;
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>;
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>;
			</section>;
		</Layout>;
	);
}

        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - green - 600 to - teal - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Start Your Success Story?;
              </h2>;
              <p className="text - xl text - green - 100 mb - 8 max - w-3xl mx - auto">;
                Let's work together to create your own success story.;
                Contact us today to discuss your project.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - green - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Start Your Project;
                </a>;
                <a;
                  href="/services";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - green - 600 transition - all duration - 300 font - semibold";
                >;
                  Explore Our Services;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
import Link from 'next / link';
import Layout from '../components / Layout';
;

export default /**
 * CaseStudiesPage - Function description
 */
function CaseStudiesPage() {
  return (
    <Layout>;
      <Head>;
        <title > Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup.com / case - studies' />;
        <meta;
          name='description';
          content='Proven outcomes across AI, IT, and micro SaaS deployments.';
        />;
      </Head>;
      <section className='container mx - auto px - 4 py - 24'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'>;
          Case Studies;
        </h1>;
        <p className='text - gray - 300'>;
          Proven outcomes and detailed success stories. Coming soon.;
        </p>;
      </section>;
    </Layout>);
;
</Head> </section> </Layout>;
return (
  <Layout>;
  <Head>;
    <title > Case Studies | Zion Tech Group</title>;
    <link rel="canonical" href="https://ziontechgroup.com / case - studies" />;
    <meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />;
  </Head>;
  <section className="container mx - auto px - 4 py - 24">;
    <h1 className="text - 4xl md: text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6">Case Studies</h1>;
    <p className="text - gray - 300">Proven outcomes and detailed success stories. Coming soon.</p>;
  </section>;
  </Layout>);
}

import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Success stories and case studies from our clients"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className={`flex flex-col lg: flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                      <study.icon className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 font-semibold">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Client Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.''
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
