React from, react';'
import { motion } from
  'framer-motion';'{ SEO } from'
  '../components/SEO';
import { Card } from
  '../components/ui/Card';'{ Badge } from'
  '../components/ui/Badge';
import { ;'  Map, ArrowRight,'  ExternalLink, Home,
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
} from
  'lucide-react';''
  'const Sitemap: React.FC = () => {'
  const lastUpdated = new Date().toISOString().split('T'
  ')[0];'  const mainPages = [;    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },"    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },"    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },"    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },"    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },"    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },"    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },"    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },"    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },"    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },"    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },"    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },"    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [;
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },"    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },"    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },"    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },"    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },"    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },"    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },"    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },"    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },"    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];""
  const contentPages = [;
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },"    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];""
  const categories = [;
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },"    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."''"
  '      />'            {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">"        <div className="max-w-7xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">"              <Map className="w-4 h-4 mr-2" />"              Site Navigation"            </Badge>"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">"              Sitemap"            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"              Find all pages and content on our website. Navigate through our services, resources, and information easily."            </p>
            <div className="flex items-center justify-center text-gray-400">"              <Calendar className="w-4 h-4 mr-2" />"              Last updated: {new Date(lastUpdated).toLocaleDateString()}"            </div></motion.div>"
        </div>
      </section>

      {/* Search and Filter */}
<section className="py-10 px-4 sm: px-6 lg:px-8 bg-slate-800/50">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center""          >"            <div className="relative w-full max-w-md">"              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />"              <input"                type="text""                placeholder="Search pages...""                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500""              />"            </div>"
            <div className="flex gap-2">"              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                All Pages"              </Badge>"
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                Services"              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                Resources"              </Badge></div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
<section className="py-20 px-4 sm:px-6 lg:px-8">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16""          >"            {categories.map((category, categoryIndex) => (<motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
<section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12""          >"            <h2 className="text-3xl font-bold text-white mb-4">Website Statistics</h2>"            <p className="text-gray-300">Overview of our website content and structure</p>"          </motion.div>""
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"            <motion.div"              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">"                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{mainPages.length + servicePages.length + contentPages.length}</div>"                <div className="text-gray-300">Total Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">"                <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{servicePages.length}</div>"                <div className="text-gray-300">Service Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">"                <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{contentPages.length + 3}</div>"                <div className="text-gray-300">Resource Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">"                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">100%</div>"                <div className="text-gray-300">Mobile Responsive</div>"              </div>"            </motion.div></div>"
        </div>
      </section>

      {/* Help Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">"        <div className="max-w-4xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">"              Need Help Finding Something?"            </h2>
            <p className="text-xl text-gray-300 mb-8">"              Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our website and find the information you need."            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"              <a"                href="/contact""                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity""              >"                <Phone className="w-5 h-5 mr-2" />"                Contact Support"              </a>"
              <a
                href="/services""                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors""              >"                <Briefcase className="w-5 h-5 mr-2" />"                Browse Services"              </a></div>"
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;