

export default function CaseStudies() {
	const caseStudies = [
		{
			id: 1,
			title: 'TechCorp: 300% Efficiency Increase with AI Automation',
			client: 'TechCorp Inc.',
			industry: 'Technology',
			challenge: 'Manual processes were slowing down operations and causing errors in customer service.',
			solution: 'Implemented AI-powered multi-agent system for customer service and sales operations.',
			results: [
				'300% increase in operational efficiency',
				'90% reduction in response time',
				'$2.5M annual cost savings',
				'Improved customer satisfaction scores'
			],
			duration: '6 months',
			team: 12,
			rating: 5
		},
		{
			id: 2,
			title: 'HealthCare Solutions: Secure Cloud Migration',
			client: 'HealthCare Solutions',
			industry: 'Healthcare',
			challenge: 'Legacy on-premise systems were expensive to maintain and lacked scalability.',
			solution: 'Migrated to secure cloud infrastructure with HIPAA compliance and disaster recovery.',
			results: [
				'40% reduction in infrastructure costs',
				'99.9% uptime achieved',
				'Full HIPAA compliance',
				'Improved data security'
			],
			duration: '8 months',
			team: 8,
			rating: 5
		},
		{
			id: 3,
			title: 'ManufacturingCo: IoT and AI Integration',
			client: 'ManufacturingCo',
			industry: 'Manufacturing',
			challenge: 'Production inefficiencies and lack of real-time monitoring were causing delays.',
			solution: 'Deployed IoT sensors and AI analytics for predictive maintenance and optimization.',
			results: [
				'25% increase in production output',
				'60% reduction in downtime',
				'Predictive maintenance alerts',
				'Real-time production monitoring'
			],
			duration: '10 months',
			team: 15,
			rating: 5
		},
		{
			id: 4,
			title: 'FinTech Startup: Micro SaaS Platform',
			client: 'FinTech Startup',
			industry: 'Financial Services',
			challenge: 'Needed a scalable platform to manage multiple financial services efficiently.',
			solution: 'Built custom micro SaaS platform with automated workflows and AI-powered insights.',
			results: [
				'50% faster service delivery',
				'Automated compliance reporting',
				'Scalable architecture',
				'Reduced operational overhead'
			],
			duration: '4 months',
			team: 6,
			rating: 5
		}
	]

import React from 'react';
<<<<<<< HEAD


=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import MainLayout from '../src/components/layout/MainLayout';
=======
import MainLayout from '../src / components / layout / MainLayout';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD

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
=======
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
<<<<<<< HEAD
=======
import Head from 'next/head';
=======
  );
>>>>>>> origin/main
<<<<<<< HEAD
}
import Link from 'next/link';
import Layout from '../components/Layout';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20


export default function CaseStudiesPage() {;

  return (
    <Layout>;
      <Head>;
        <title>Case Studies | Zion Tech Group</title>;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/case-studies' />;
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20


>>>>>>> origin/automation-improvements-final
=======

=======
import Head from 'next/head';


=======
=======
=======
import Head from 'next/head';




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
 </Head> </section> </Layout>
=======
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Case Studies
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Real results from real clients. See how we've transformed businesses across industries.
						</p>
					</div>
				</div>
			</section>

			{/* Industry Filter */}
			<section className="py-12 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{industries.map((industry) => (
							<button
								key={industry}
								className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
							>
								{industry}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Success Story</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we transformed TechCorp's operations with AI automation
						</p>
					</div>
					<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
						<div className="grid gap-8 lg:grid-cols-2">
							<div>
								<div className="flex items-center gap-2 mb-4">
									<Building className="h-5 w-5 text-blue-600" />
									<span className="text-sm text-gray-500">{caseStudies[0].industry}</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h3>
								<p className="text-gray-600 mb-6">{caseStudies[0].challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{caseStudies[0].duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{caseStudies[0].team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
							<div>
								<h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
								<div className="space-y-3">
									{caseStudies[0].results.map((result, index) => (
										<div key={index} className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											<span className="text-gray-700">{result}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">More Success Stories</h2>
						<p className="mt-6 text-lg text-gray-600">
							Explore how we've helped businesses across different industries achieve their goals
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						{caseStudies.slice(1).map((study) => (
							<div key={study.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-2">
										<Building className="h-5 w-5 text-blue-600" />
										<span className="text-sm text-gray-500">{study.industry}</span>
									</div>
									<div className="flex items-center gap-1">
										{Array.from({ length: study.rating }).map((_, i) => (
											<Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
										))}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
								<p className="text-gray-600 mb-4">{study.challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{study.duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{study.team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									View Details <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Track Record</h2>
						<p className="mt-6 text-lg text-gray-600">
							Consistent results across all our client engagements
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
							<p className="text-gray-600">Client Satisfaction Rate</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
							<p className="text-gray-600">Total Client Savings</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
							<p className="text-gray-600">Projects Completed</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
							<p className="text-gray-600">Support Available</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we deliver consistent results for our clients
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<TrendingUp className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
							<p className="text-gray-600">
								We analyze your current state and identify opportunities for improvement.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Zap className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
							<p className="text-gray-600">
								We develop a comprehensive plan tailored to your specific needs and goals.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
							<p className="text-gray-600">
								Our expert team executes the solution with precision and attention to detail.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<Award className="h-8 w-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
							<p className="text-gray-600">
								We continuously monitor and optimize to ensure maximum performance and ROI.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Ready to Write Your Success Story?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss how our expertise can help your business achieve similar results.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get Started Today
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Explore Our Services →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
