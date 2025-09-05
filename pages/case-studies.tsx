import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  CheckCircle,
  Users,
  Tag,
  Award,
  Clock,
  Target,
  Zap,
  Shield,
  Cloud
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Support Automation",
    company: "TechCorp Solutions",
    industry: "Technology",
    results: "60% reduction in support costs, 40% faster response times",
    category: "AI Solutions",
    duration: "3 months",
    teamSize: "8 developers",
    technologies: ["AI/ML", "NLP", "Python", "AWS"],
    featured: true,
    metrics: {
      costReduction: "60%",
      responseTime: "40%",
      customerSatisfaction: "85%"
    },
    description: "Implemented an AI-powered chatbot system that handles 80% of customer inquiries automatically, reducing response time and operational costs.",
    challenges: [
      "High volume of repetitive support tickets",
      "Inconsistent response quality",
      "Limited 24/7 support coverage"
    ],
    solutions: [
      "Natural language processing for intent recognition",
      "Machine learning model training on historical data",
      "Seamless handoff to human agents when needed"
    ]
  },
  {
    id: 2,
    title: "Cloud Migration & Infrastructure Optimization",
    company: "Global Finance Inc",
    industry: "Financial Services",
    results: "50% cost reduction, 99.9% uptime achieved",
    category: "Cloud Solutions",
    duration: "6 months",
    teamSize: "12 developers",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true,
    metrics: {
      costReduction: "50%",
      uptime: "99.9%",
      performanceImprovement: "300%"
    },
    description: "Migrated legacy on-premises infrastructure to AWS cloud, implementing containerization and auto-scaling for improved performance and cost efficiency.",
    challenges: [
      "Legacy monolithic architecture",
      "High infrastructure costs",
      "Limited scalability"
    ],
    solutions: [
      "Microservices architecture implementation",
      "Container orchestration with Kubernetes",
      "Infrastructure as Code with Terraform"
    ]
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies showcasing our expertise in technology solutions." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform their operations with innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      {study.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building className="w-4 h-4 mr-2" />
                        {study.company}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {study.teamSize}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {study.industry}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/case-studies/${study.id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}