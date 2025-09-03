import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  );,"});,"})
};,"});,"})
;,"});,"})
export default SitemapPage;,"});,"})

  Map, ArrowRight
  ExternalLink, Home
  Users, Briefcase
  Phone, DollarSign
  FileText, BookOpen
  Award, Shield
  Globe, Search
  Filter, Calendar
  Star, TrendingUp
  Brain, Cloud
  Database, Code
  Building, Zap
} from 'lucide-react';

const SitemapPage = () => {
  const pages = [
    {
      title: 'Home',
      description: 'Main landing page with company overview and featured services',
      url: '/',
      icon: Home,
      category: 'Main'
    }
    {
      title: 'All Services',
      description: 'Comprehensive showcase of all our technology services and solutions',
      url: '/comprehensive-services-showcase-2026',
      icon: Zap,
      category: 'Services'
    }
    {
      title: 'Micro SaaS',
      description: 'Affordable, specialized software solutions for small businesses',
      url: '/services/micro-saas',
      icon: Zap,
      category: 'Services'
    }
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions and intelligent automation services',
      url: '/services/ai-services',
      icon: Brain,
      category: 'Services'
    }
    {
      title: 'IT Services',
      description: 'Comprehensive IT support and infrastructure management',
      url: '/services/it-services',
      icon: Building,
      category: 'Services'
    }
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      url: '/services/cloud-infrastructure',
      icon: Cloud,
      category: 'Services'
    }
    {
      title: 'Data & Analytics',
      description: 'Real-time data processing and business intelligence',
      url: '/services/data-analytics',
      icon: Database,
      category: 'Services'
    }
    {
      title: 'Developer Tools',
      description: 'Development automation and operational excellence',
      url: '/services/developer-tools',
      icon: Code,
      category: 'Services'
    }
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for specific industries',
      url: '/services/industry-solutions',
      icon: Building,
      category: 'Services'
    }
    {
      title: 'Emerging Technology',
      description: 'Cutting-edge technology solutions and platforms',
      url: '/services/emerging-tech',
      icon: Zap,
      category: 'Services'
    }
    {
      title: 'Solutions',
      description: 'Industry-specific solutions and enterprise packages',
      url: '/solutions',
      icon: Briefcase,
      category: 'Solutions'
    }
    {
      title: 'Enterprise',
      description: 'Enterprise-grade solutions and consulting services',
      url: '/enterprise',
      icon: Building,
      category: 'Solutions'
    }
    {
      title: 'About',
      description: 'Learn about our company, mission, and team',
      url: '/about',
      icon: Users,
      category: 'Company'
    }
    {
      title: 'Case Studies',
      description: 'Success stories and client testimonials',
      url: '/case-studies',
      icon: FileText,
      category: 'Company'
    }
    {
      title: 'Careers',
      description: 'Join our team and explore career opportunities',
      url: '/careers',
      icon: Briefcase,
      category: 'Company'
    }
    {
      title: 'Contact',
      description: 'Get in touch with our team for consultations',
      url: '/contact',
      icon: Phone,
      category: 'Contact'
    }
  ];

  const categories = ['Main', 'Services', 'Solutions', 'Company', 'Contact'];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate through all pages and services offered by Zion Tech Group. Find the information you need quickly and easily."
        keywords="sitemap, navigation, pages, services, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
  Database, Network
  Zap, Target
  CheckCircle
} from 'lucide-react'';const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0]';'  const mainPages = [;
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },"    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },"    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },"    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },"    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },"    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },"    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },"    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },"    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },"    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },"    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },"    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },"    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [;
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },"    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },"    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },"    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },"    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },"    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },"    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },"    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },"    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },"    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];""
  const contentPages = [;
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },"    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];""
  const categories = [;
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },"    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."''      />'      '"
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">"        <div className="max-w-7xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Site Navigation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all our pages and services. Find exactly what you're looking for with our comprehensive site map.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {categories.map((category, categoryIndex) => {
              const categoryPages = pages.filter(page => page.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 mr-2 text-blue-600" />
                    {category}
                  </h2>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryPages.map((page, pageIndex) => (
                      <motion.div
                        key={page.url}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (pageIndex * 0.05) }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                  <page.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {page.title}
                                </h3>
                              </div>
                              <Badge variant="secondary">
                                {page.category}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 mb-4 text-sm">
                              {page.description}
                            </p>
                            
                            <a
                              href={page.url}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                            >
                              Visit Page
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Need Help Finding Something?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Phone className="w-6 h-6 text-blue-600" />
const SitemapPage: React.FC = () => {
  const siteStructure = [
    {'
      categor
    y: 'Main Pages',
      category: 'Main Pages',
      icon: Home,
      pages: ['
        { nam
    e: 'Home', path: '/', description: 'Main landing page' }
        { name: 'About', path: '/about', description: 'About Zion Tech Group' }
        { name: 'Contact', path: '/contact', description: 'Contact information' }
        { name: 'Pricing', path: '/pricing', description: 'Service pricing' }
        { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    }
    {'
      category: 'Services',
      icon: Briefcase,
      pages: ['
        { nam
    e: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' }
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' }
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' }
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' }
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security services' }
        { name: 'Infrastructure', path: '/infrastructure', description: 'IT infrastructure services' }
      ]
    }
    {'
      category: 'Resources',
      icon: BookOpen,
      pages: ['
        { nam
    e: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' }
        { name: 'White Papers', path: '/white-papers', description: 'Technical white papers' }
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' }
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' }
        { name: 'Documentation', path: '/documentation', description: 'Technical documentation' }
      ]
    }
    {'
      category: 'Company',
      icon: Users,
      pages: ['
        { nam
    e: 'Team', path: '/team', description: 'Meet our team' }
        { name: 'Partners', path: '/partners', description: 'Our partners' }
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }
        { name: 'Help', path: '/help', description: 'Help and support' }
      ]
    }
    {'
      category: 'Legal',
      icon: Shield,
      pages: ['
        { nam
    e: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' }
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    }



  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Site Map
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate our website easily. Find all our pages, services, and resources organized by category.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <ul className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-600">{page.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <Sitemap className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages and resources available on the Zion
              Tech Group website
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

          <motion.div
            initial={{ opacit
    y: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16""          >"            {categories.map((category, categoryIndex) => (<motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}



            </p>
          </motion.div>'
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {siteStructure.map((section, index) => (
              >
<div className="text-center mb-8">"                  <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>"                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>"                </div>"
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"                  {category.pages.map((page, pageIndex) => ("                    <motion.divkey={page.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.05 * pageIndex }}
                    >
<Card className="p-6 h-full hover:shadow-lg transition-shadow">"                        <div className="flex items-start mb-4">"                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>"                            <page.icon className="w-6 h-6 text-white" />"                          </div>"                          <div className="flex-1">"                            <h3 className="text-xl font-bold text-white mb-2">{page.name}</h3>"                            <p className="text-gray-300 text-sm mb-4">{page.description}</p>"                          </div>"                        </div>`                        "
                        <div className="flex items-center justify-between">"                          <a"                            href={page.url}
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center""                          >"                            Visit Page
                            <ArrowRight className="w-4 h-4 ml-1" />"                          </a>"                          <Badge variant="secondary" className="text-xs">"                            {page.url}"                          </Badge></div>
                      </Card>
                    </motion.div>
                  ))}

                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Map className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  );
};

export default SitemapPage;

                  >

                    <Phone className='h-4 w-4 mr-2' />
                    Contact Us
                  </a>
                  <a'
                    href='/help''
                    className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hove
    r:bg-blue-50 transition-colors flex items-center justify-center'
                  >'
                    <Search className='h-4 w-4 mr-2' />
                    Get Help
                  </a>
                </div>
              </CardContent>
            </Card>


          </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-xl text-gray-600">Popular pages and resources</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                href="/services"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">Services</div>
                <div className="text-gray-600 text-sm">Explore our offerings</div>
                <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">Contact</div>
                <div className="text-gray-600 text-sm">Get in touch</div>
                <ArrowRight className="h-4 w-4 text-green-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/pricing-guide"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">Pricing</div>
                <div className="text-gray-600 text-sm">View our rates</div>
                <ArrowRight className="h-4 w-4 text-purple-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-orange-600 mb-2">Case Studies</div>
                <div className="text-gray-600 text-sm">Success stories</div>
                <ArrowRight className="h-4 w-4 text-orange-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
}


        </div>
      </div>
    </>

const Sitemap: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' }
    { name: 'About', url: '/about' }
    { name: 'Services', url: '/services' }
    { name: 'AI Services', url: '/services/ai-services' }
    { name: 'IT Services', url: '/services/it-services' }
    { name: 'Micro SaaS', url: '/services/micro-saas' }
    { name: 'Solutions', url: '/solutions' }
    { name: 'Enterprise', url: '/solutions/enterprise' }
    { name: 'Small Business', url: '/solutions/small-business' }
    { name: 'Startups', url: '/solutions/startups' }
    { name: 'Products', url: '/products' }
    { name: 'Contact', url: '/contact' }
    { name: 'Careers', url: '/careers' }
    { name: 'Privacy', url: '/privacy' }
    { name: 'Terms', url: '/terms' }
  ];

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.url}>
            <a className="text-blue-600 hover:underline" href={l.url}>
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SitemapPage;






