import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Award, Building, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import { 
  Calendar, 
import { Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
    results: [
      "95% diagnostic accuracy improvement",
      "60% reduction in diagnosis time",
      "40% cost savings",
      "500+ patients served daily"
    ],
    image: "/api/placeholder/600/400",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  {
    id: 2,
    title: "Enterprise Cloud Migration",
    client: "Global Finance Corp",
    industry: "Finance",
    challenge: "Legacy system migration to cloud infrastructure",
    solution: "Complete cloud transformation with zero downtime",
    results: [
      "99.9% uptime achieved",
      "50% infrastructure cost reduction",
      "3x faster processing speed",
      "100% data security compliance"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Migration", "Finance"]
  },
  {
    id: 3,
    title: "Micro SaaS E-commerce Platform",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Need for scalable e-commerce solution",
    solution: "Custom micro SaaS platform with AI recommendations",
    results: [
      "200% increase in sales",
      "35% improvement in conversion rate",
      "80% reduction in cart abandonment",
      "50,000+ active users"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Micro SaaS", "E-commerce", "AI"]
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudies() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client success stories across various industries"
      keywords="case studies, success stories, client projects, technology solutions"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Explore our successful projects and client success stories
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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
  {}
    id: 2,
    title: "Financial Services: AI-Powered Fraud Detection System","
    company: "SecureBank Corp","
    industry: "Financial Services","
    challenge: "Increasing fraud incidents and manual review processes","
    solution: "Deployed real-time AI fraud detection with behavioral analytics","
    results: [
      "99.2% fraud detection accuracy","
      "80% reduction in false positives","
      "Real-time transaction monitoring","
      "30% cost savings in fraud prevention"";
    ],
    author: "Michael Rodriguez","
    date: "2024-01-10","
    readTime: "6 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 3,
    title: "Manufacturing: Predictive Maintenance with IoT and AI","
    company: "Industrial Dynamics","
    industry: "Manufacturing","
    challenge: "Unexpected equipment failures causing production delays","
    solution: "Implemented IoT sensors with AI predictive maintenance algorithms","
    results: [
      "70% reduction in unplanned downtime","
      "25% increase in equipment lifespan","
      "15% reduction in maintenance costs","
      "Predictive accuracy of 92%"";
    ],
    author: "Alex Thompson","
    date: "2024-01-05","
    readTime: "7 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 4,
    title: "Retail: Personalized Customer Experience Platform","
    company: "ShopSmart Retail","
    industry: "Retail","
    challenge: "Low customer engagement and poor personalization","
    solution: "Built AI-driven recommendation engine with customer behavior analysis","
    results: [
      "45% increase in customer engagement","
      "35% boost in average order value","
      "60% improvement in conversion rates","
      "25% increase in customer retention"";
    ],
    author: "Jennifer Lee","
    date: "2023-12-28","
    readTime: "5 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 5,
    title: "Education: AI-Powered Learning Management System","
    company: "EduTech University","
    industry: "Education","
    challenge: "Low student engagement and poor learning outcomes","
    solution: "Developed adaptive learning platform with AI tutoring system","
    results: [
      "50% improvement in student performance","
      "40% increase in course completion rates","
      "Personalized learning paths for each student","
      "85% student satisfaction rating"";
    ],
    author: "David Kim","
    date: "2023-12-20","
    readTime: "6 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  },
  {}
    id: 6,
    title: "Logistics: Supply Chain Optimization with AI","
    company: "Global Logistics Inc","
    industry: "Logistics","
    challenge: "Inefficient supply chain and high operational costs","
    solution: "Implemented AI-powered supply chain optimization and route planning","
    results: [
      "30% reduction in delivery times","
      "25% decrease in fuel costs","
      "20% improvement in inventory management","
      "35% increase in customer satisfaction"";
    ],
    author: "Emma Wilson","
    date: "2023-12-15","
    readTime: "7 min read","
    featured: false,
    image: "/api/placeholder/600/400"
  }
;];

const industries = [;
  "All Industries","
  "Healthcare","
  "Financial Services","
  "Manufacturing","
  "Retail","
  "Education","
  "Logistics","
  "Technology"";
;];

export default function CaseStudiesPage() {
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Case Studies - Zion Tech Group</title>;
        <meta name="description" content="Explore real-world success stories and case studies from our AI and technology implementations across various industries." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h1 className="text-5xl font-bold mb-6">");
              Success Stories;
            </h1>;
            <p className="text-xl text-blue-100">";
              Real-world results from our AI and technology implementations across various industries;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Featured Case Study */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>";
            
            {caseStudies.filter(study => study.featured).map((study) => (;
              <motion.article}),
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >,
                <div className="md:flex">";
                  <div className="md:w-1/2">";
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">";
                      <Building className="w-24 h-24 text-white" />";
                    </div>;
                  </div>;
                  <div className="md:w-1/2 p-8">";
                    <div className="flex items-center gap-2 mb-4">";
                      <Tag className="w-4 h-4 text-blue-600" />";
                      <span className="text-sm text-blue-600 font-medium">";
                        {study.industry}
                      </span>,
                    </div>;
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">";
                      {study.title}
                    </h2>,
                    
                    <div className="mb-4">";
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>";
                      <p className="text-gray-600 mb-4">{study.challenge}</p>"
                      
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>";
                      <p className="text-gray-600 mb-4">{study.solution}</p>"
                    </div>;
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">";
                      <div className="flex items-center gap-4">";
                        <div className="flex items-center gap-2">";
                          <User className="w-4 h-4" />";
                          <span>{study.author}</span>,
                        </div>;
                        <div className="flex items-center gap-2">";
                          <Calendar className="w-4 h-4" />";
                          <span>{study.date}</span>,
                        </div>;
                      </div>;
                      <span>{study.readTime}</span>,
                    </div>;
                    
                    <Link;
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors""
                    >;
                      Read Full Case Study;
                      <ArrowRight className="w-4 h-4" />";
                    </Link>;
                  </div>;
                </div>;
              </motion.article>;
            ))}
          </div>,
        </div>;
      </section>;

      {/* Industry Filter */}
      <section className="py-8 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <div className="flex flex-wrap gap-4 justify-center">";
              {industries.map((industry, index) => (,
                <button}),
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${}
                    index === 0,
                      ? 'bg-blue-600 text-white'';
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'';
                  }`}
                >,
                  {industry}
                </button>,
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Case Studies Grid */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>";
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {caseStudies.filter(study => !study.featured).map((study, index) => (,
                <motion.article}),
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >,
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">";
                    <Building className="w-16 h-16 text-white" />";
                  </div>;
                  <div className="p-6">";
                    <div className="flex items-center gap-2 mb-3">";
                      <Tag className="w-4 h-4 text-blue-600" />";
                      <span className="text-sm text-blue-600 font-medium">";
                        {study.industry}
                      </span>,
                    </div>;
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">";
                      {study.title}
                    </h3>,
                    
                    <div className="mb-4">";
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>";
                      <p className="text-gray-600 text-sm line-clamp-2">";
                        {study.challenge}
                      </p>,
                    </div>;
                    
                    <div className="mb-4">";
                      <h4 className="font-semibold text-gray-900 mb-1">Key Results:</h4>";
                      <ul className="text-sm text-gray-600 space-y-1">";
                        {study.results.slice(0, 2).map((result, resultIndex) => (,
                          <li key={resultIndex} className="flex items-center gap-2">"
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />";
                            {result}
                          </li>,
                        ))}
                      </ul>,
                    </div>;
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">";
                      <div className="flex items-center gap-2">";
                        <User className="w-4 h-4" />";
                        <span>{study.author}</span>,
                      </div>;
                      <div className="flex items-center gap-2">";
                        <Calendar className="w-4 h-4" />";
                        <span>{study.date}</span>,
                      </div>;
                    </div>;
                    
                    <div className="flex items-center justify-between">";
                      <span className="text-sm text-gray-500">{study.readTime}</span>"
                      <Link;
                        href={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium""
                      >;
                        Read More;
                        <ArrowRight className="w-4 h-4" />";
                      </Link>;
                    </div>;
                  </div>;
                </motion.article>;
              ))}
            </div>,

            {/* Load More Button */}
            <div className="text-center mt-12">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">";
                Load More Case Studies;
              </button>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h2 className="text-3xl font-bold text-white mb-4">";
              Ready to Create Your Success Story?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">";
              Let's discuss how we can help transform your business with AI and technology';
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link;
                href="/contact"";
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"";
              >;
                Start Your Project;
                <ArrowRight className="w-4 h-4" />";
              </Link>;
              <Link;
                href="/services"";
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"";
              >;
                Explore Our Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Success Stories
            </h2>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                        <span className="text-gray-500">Project Image</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                          Client: {study.client}
                        </p>
                        <p className="text-gray-600">Industry: {study.industry}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try selecting a different industry.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}