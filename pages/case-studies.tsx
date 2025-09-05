import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Clock, CheckCircle, Building, Cloud, TrendingUp, ArrowRight, ExternalLink, Building, TrendingUp, CheckCircle, Users, Clock, Cloud } from 'lucide-react'
import Layout from '../components/Layout'

const caseStudies = [
  {
    id: 1, title: 'AI-Powered Customer Service Transformation', client: 'TechCorp Inc.', industry: 'Technology', duration: '6 months', team: '12 experts', image: '/images/case-studies/ai-customer-service.jpg', challenge: 'High customer service costs and long response times', solution: 'Implemented AI-powered chatbots and automated ticket routing', results: [
      '60% reduction in response time', '40% cost savings', ;
      '95% customer satisfaction rate', ;
      '24/7 availability'], ;
    technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'APIs'] },;
  {
    id: 2, title: 'Cloud Migration for Financial Services', client: 'Regional Bank', industry: 'Financial Services', duration: '8 months', team: '15 experts', image: '/images/case-studies/cloud-migration.jpg', challenge: 'Legacy systems causing performance issues and high maintenance costs', solution: 'Complete cloud migration with microservices architecture', results: ['50% improvement in system performance', '30% reduction in operational costs', ;
      '99.9% uptime achieved', ;
      'Enhanced security compliance'], ;
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices', 'DevOps'] },;
  {
    id: 3, title: 'Healthcare AI Diagnostic System', client: 'MedCenter Hospital', industry: 'Healthcare', duration: '10 months', team: '18 experts', image: '/images/case-studies/healthcare-ai.jpg', challenge: 'Manual diagnostic processes causing delays and errors', solution: 'AI-powered diagnostic system with machine learning models', results: ['45% faster diagnosis', '30% reduction in diagnostic errors', ;
      'Improved patient outcomes', ;
      'Streamlined workflow'], ;
    technologies: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'HIPAA Compliance'] },;
  {
    id: 4, title: 'E-commerce Platform Modernization', client: 'RetailMax', industry: 'Retail', duration: '5 months', team: '10 experts', image: '/images/case-studies/ecommerce-modernization.jpg', challenge: 'Outdated platform limiting growth and customer experience', solution: 'Complete platform rebuild with modern architecture', results: ['3x increase in page load speed', '50% increase in conversion rate', ;
      'Mobile-first responsive design', ;
      'Scalable infrastructure'], ;
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'CDN'] },;
  {
    id: 5, title: 'Cybersecurity Enhancement', client: 'SecureCorp', industry: 'Security', duration: '4 months', team: '8 experts', image: '/images/case-studies/cybersecurity.jpg', challenge: 'Increasing cyber threats and compliance requirements', solution: 'Comprehensive security framework with real-time monitoring', results: ['99.9% threat detection rate', 'Zero security breaches', ;
      'Full compliance achieved', ;
      '24/7 security monitoring'], ;
    technologies: ['SIEM', 'Firewall', 'Intrusion Detection', 'Encryption', 'Compliance'] },;
  {
    id: 6, title: 'Data Analytics Platform', client: 'DataDriven Inc.', industry: 'Analytics', duration: '7 months', team: '14 experts', image: '/images/case-studies/data-analytics.jpg', challenge: 'Fragmented data sources and lack of actionable insights', solution: 'Unified data platform with advanced analytics capabilities', results: ['80% improvement in data processing speed', 'Real-time insights delivery', ;
      '50% increase in data accuracy', ;
      'Self-service analytics for business users'], ;
    technologies: ['Big Data', 'Apache Spark', 'Kafka', 'Tableau', 'Machine Learning'] }]

const stats = [{ number: '500+', label: 'Projects Completed' }, ;
  { number: '99%', label: 'Client Satisfaction' }, ;
  { number: '50+', label: 'Industries Served' }, ;
  { number: '24/7', label: 'Support Available' }]

export default function CaseStudies() {
  return(<Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations. See how we've helped businesses achieve their goals through innovative technology solutions."
      keywords="case studies, success stories, client projects, technology solutions, AI implementation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */ }
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Success <span className="text-blue-300">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations
                and achieve remarkable results through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </section>
        { /* Stats Section */ }
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              { stats.map((stat, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md: text-4xl font-bold text-blue-600 mb-2">
                    { stat.number }
                  </div>
                  <div className="text-gray-600 font-medium">
                    { stat.label }
                  </div>
                </motion.div>))}
            </div>
          </div>
        </section>
        { /* Case Studies Grid */ }
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses;
                across various industries achieve their goals.;
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              { caseStudies.map((study, index) => (;
                <motion.div;
                  key={study.id }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building className="h-16 w-16 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold">{ study.client }</h3>
                      <p className="text-sm opacity-90">{ study.industry }</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        { study.title }
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1"  />
                          { study.duration }
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1"  />
                          { study.team }
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge: </h4>
                      <p className="text-gray-600 text-sm">{ study.challenge }</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution: </h4>
                      <p className="text-gray-600 text-sm">{ study.solution }</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results: </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        { study.results.map((result, resultIndex) => (;
                          <li key={resultIndex } className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"  />
                            { result }
                          </li>))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies: </h4>
                      <div className="flex flex-wrap gap-2">
                        { study.technologies.map((tech, techIndex) => (;
                          <span
                            key={techIndex }
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            { tech }
                          </span>))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover: text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1"  />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let us help you achieve similar results. Contact us today to
                discuss your project and how we can help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
    title: "AI-Powered Customer Support Automation",
    company: "TechCorp Solutions",
    industry: "Technology",
    results: "60% reduction in support costs, 40% faster response times",
    category: "AI Solutions",
    duration: "3 months",
    teamSize: "8 developers",
    technologies: ["AI/ML", "NLP", "Python", "AWS"],;
    featured: true,
    metrics: { costReduction: "60%", responseTime: "40%", customerSatisfaction: "85%" },;
    description: "Implemented an AI-powered chatbot system that handles 80% of customer inquiries automatically, reducing response time and operational costs.",
    challenges: ["High volume of repetitive support tickets", "Inconsistent response quality", ;
      "Limited 24/7 support coverage"],;
    solutions: ["Natural language processing for intent recognition", "Machine learning model training on historical data", ;
      "Seamless handoff to human agents when needed"]},;
  {
    id: 2, title: "Cloud Migration & Infrastructure Optimization", company: "Global Finance Inc", industry: "Financial Services", results: "50% cost reduction, 99.9% uptime achieved", ;
    category: "Cloud Solutions", duration: "6 months", teamSize: "12 developers", technologies: ["AWS", "Docker", "Kubernetes", "Terraform"], ;
    featured: true, metrics: {
      costReduction: "50%", uptime: "99.9%", performanceImprovement: "300%" },;
    description: "Migrated legacy on-premises infrastructure to AWS cloud, implementing containerization and auto-scaling for improved performance and cost efficiency.",
    challenges: ["Legacy monolithic architecture", "High infrastructure costs", ;
      "Limited scalability"],;
    solutions: ["Microservices architecture implementation", "Container orchestration with Kubernetes", ;
      "Infrastructure as Code with Terraform"]}]

export default function CaseStudies() {
  return(<Layout>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies showcasing our expertise in technology solutions."  />
      </Head>
      <main>
        {/* Hero Section */ }
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform their operations with innovative technology solutions.
              </p>
            </div>
          </div>
        </section>
        { /* Case Studies Grid */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              { caseStudies.map((study, index) => (;
                <div key={study.id } className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        { study.category }
                      </span>
                      { study.featured && (;
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          Featured;
                        </span>) }
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{ study.title }</h3>
                    <p className="text-gray-600 mb-6">{ study.description }</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building className="w-4 h-4 mr-2"  />
                        { study.company }
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2"  />
                        { study.duration }
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2"  />
                        { study.teamSize }
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-2"  />
                        { study.industry }
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results: </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        { Object.entries(study.metrics).map(([key, value]) => (;
                          <div key={key } className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{ value }</div>
                            <div className="text-sm text-gray-600 capitalize">{ key.replace(/([A-Z])/g, ' $1').trim() }</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used: </h4>
                      <div className="flex flex-wrap gap-2">
                        { study.technologies.map((tech, techIndex) => (;
                          <span key={techIndex } className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            { tech }
                          </span>))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href={ `/case-studies/${study.id }`} className="text-blue-600 hover: text-blue-800 font-medium flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2"  />
                      </Link>
                      <ExternalLink className="w-5 h-5 text-gray-400"  />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )}