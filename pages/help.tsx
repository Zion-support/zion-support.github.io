import Head from 'next/head'
import { motion } from 'framer-motion'
import { BookOpen, MessageCircle, Phone, Mail, Search, ChevronRight } from 'lucide-react'
import Layout from '../components/Layout'
import { BookOpen, Search, MessageCircle, Video, Download, ExternalLink, ChevronDown, HelpCircle, FileText, Phone, Mail, Cloud } from 'lucide-react'

const helpCategories = [
  {
    title: "Getting Started", icon: BookOpen, import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ;
  HelpCircle, ;
  BookOpen, ;
  MessageCircle, ;
  Phone, ;
  Mail, ;
  FileText, ;
  Video, ;
  Download, ;
  ExternalLink, ;
  ChevronDown, ;
  Cloud } from 'lucide-react'

const helpArticles = [
  {
    id: 'overview', title: 'Understanding Our Services', description: 'Overview of all available services and solutions', readTime: '7 min read', type: 'Overview' }, ;
  {
    id: 'ai-services', title: 'AI Services', description: 'Everything about our AI and machine learning solutions.', icon: HelpCircle, color: 'green', articles: [
      {
        title: 'AI Implementation Guide', description: 'How to implement AI solutions in your business', readTime: '10 min read', type: 'Guide' }, ;
      {
        title: 'Machine Learning Models', description: 'Understanding different ML models and their applications', readTime: '8 min read', type: 'Technical' }, ;
      {
        title: 'AI Best Practices', description: 'Tips and best practices for AI development', readTime: '6 min read', type: 'Best Practice' }]},;
  {
    id: 'cloud-services', title: 'Cloud Services', description: 'Cloud infrastructure and deployment solutions.', icon: Cloud, color: 'blue', articles: [
      {
        title: 'Cloud Migration Guide', description: 'Step-by-step guide to migrating to the cloud', readTime: '12 min read', type: 'Guide' }, ;
      {
        title: 'Cloud Security', description: 'Best practices for securing your cloud infrastructure', readTime: '9 min read', type: 'Security' }
    description: "Learn the basics and get up and running quickly", articles: [
      "Welcome to Zion Tech Group", "Setting up your account", ;
      "First steps with our platform"]},;
  {
    title: "Account & Billing", icon: MessageCircle, description: "Manage your account, billing, and subscription", ;
    articles: ["Managing your subscription", "Billing and payments", ;
      "Account settings"] },;
  {
    title: "Technical Support", icon: Phone, description: "Get help with technical issues and troubleshooting", articles: ["Common troubleshooting", "API documentation", ;
      "Integration guides"] }]}]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index) }

  const filteredCategories = helpCategories.map(category => ({
    ...category, ;
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) })).filter(category => category.articles.length > 0)

  return(<>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources."  />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides"  />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        { /* Hero Section */ }
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Help <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers, get support, and learn how to make the most of our services.;
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={ searchTerm }
                  onChange={ (e) => setSearchTerm(e.target.value) }
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus: outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
const popularArticles = [{ title: "How to get started with our AI solutions", category: "Getting Started", readTime: "5 min" }, ;
  {
    title: "Setting up cloud migration", category: "Technical Support", readTime: "10 min" }, ;
  {
    title: "Understanding your billing", category: "Account & Billing", readTime: "3 min" }]

export default function Help() {
  return(<Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Find answers to your questions and get help with our services."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to your questions and get the support you need.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900"
                   />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                { helpCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return(<motion.div;
                      key={index }
                      className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600"  />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{ category.title }</h3>
                      <p className="text-gray-600 mb-6">{ category.description }</p>
                      <ul className="space-y-2">
                        { category.articles.map((article, articleIndex) => (;
                          <li key={articleIndex } className="flex items-center text-gray-600 hover: text-blue-600 cursor-pointer">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            { article }
                          </li>))}
                      </ul>
                    </motion.div>
                  )})}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Popular Articles;
              </h2>
              <div className="space-y-4">
                { popularArticles.map((article, index) => (;
                  <motion.div;
                    key={index }
                    className="bg-white rounded-lg p-6 hover: shadow-lg transition-shadow duration-300 cursor-pointer"
                    initial={{opacity: 0, y: 20 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    viewport={{once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{ article.title }</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-4">{ article.category }</span>
                          <span>{ article.readTime } read</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400"  />
                    </div>
                  </motion.div>))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you succeed.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2"  />
                  Email Support
                </a>
                <a
                  href="tel:+15551234567"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2"  />
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}}
)