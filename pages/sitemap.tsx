;
  )};
;
export default SitemapPage;

  Map, ArrowRight,
  ExternalLink, Home,
  Users, Briefcase,
  Phone, DollarSign,
  FileText, BookOpen,
  Award, Shield,
  Globe, Search,
  Filter, Calendar,
  Star, TrendingUp,
  Brain, Cloud,

  Database, Network,
  Zap, Target,
  CheckCircle
} from 'lucide-react';''const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];''  const mainPages = [
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home }",    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users }",    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase }",    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone }",    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users }",    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award }",    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign }",    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen }",    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp }",    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText }",    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar }",    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield }",    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain }",    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network }",    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud }",    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield }",    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users }",    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain }",    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap }",    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database }",    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target }",    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];""
  const contentPages = [
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign }",    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];""
  const categories = [
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" }",    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."''      />'      '"
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">"        <div className="max-w-7xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >

          </motion.div>


const SitemapPage: React.FC = () => {
  const siteStructure = [

      category: 'Main Pages',

      icon: Home,
      pages: ['
        { nam,
    e: 'Home', path: '/', description: 'Main landing page' }, { name: 'About', path: '/about', description: 'About Zion Tech Group' }, { name: 'Contact', path: '/contact', description: 'Contact information' }, { name: 'Pricing', path: '/pricing', description: 'Service pricing' }, { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    }, {'
      category: 'Services',
      icon: Briefcase,
      pages: ['
        { nam,
    e: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' }, { name: 'IT Services', path: '/it-services', description: 'Information Technology services' }, { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' }, { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' }, { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security services' }, { name: 'Infrastructure', path: '/infrastructure', description: 'IT infrastructure services' }
      ]
    }, {'
      category: 'Resources',
      icon: BookOpen,
      pages: ['
        { nam,
    e: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' }, { name: 'White Papers', path: '/white-papers', description: 'Technical white papers' }, { name: 'Webinars', path: '/webinars', description: 'Educational webinars' }, { name: 'Blog', path: '/blog', description: 'Latest news and insights' }, { name: 'Documentation', path: '/documentation', description: 'Technical documentation' }
      ]
    }, {'
      category: 'Company',
      icon: Users,
      pages: ['
        { nam,
    e: 'Team', path: '/team', description: 'Meet our team' }, { name: 'Partners', path: '/partners', description: 'Our partners' }, { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }, { name: 'Help', path: '/help', description: 'Help and support' }
      ]
    }, {'
      category: 'Legal',
      icon: Shield,
      pages: ['
        { nam,
    e: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' }, { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }, { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    }




  ];

  return (
    <>

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

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}




            </p>
          </motion.div>'
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {siteStructure.map((section, index) => (

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}


                  >

                    <Phone className='h-4 w-4 mr-2' />
                    Contact Us
                  </a>
                  <a'
                    href='/help''
                    className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hove,
    r:bg-blue-50 transition-colors flex items-center justify-center'
                  >'
                    <Search className='h-4 w-4 mr-2' />
                    Get Help
                  </a>
                </div>

                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </>

  );







