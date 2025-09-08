React from, react';'
import { motion } from
  'framer-motion';'{ SEO } from'
  '../components/SEO';
import { Card } from
  '../components/ui/Card';'{ Badge } from'
  '../components/ui/Badge';
import { ;'  Map, ArrowRight,'ExternalLink, Home,
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
  ')[0];'  const mainPages = [;{ name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },"    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },"    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },"    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },"    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },"    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },"    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },"    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },"    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },"    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },"    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },"    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },"    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [;
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },"    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },"    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },"    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },"    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },"    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },"    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },"    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },"    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },"    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];""
  const contentPages = [;
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },"    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];""
  const categories = [;
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },"    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];""
  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."''"
  '      />'{/* Hero Section */}
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

          <section className="mx-auto max-w-6xl">
            {/* Main Pages */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Main Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">🏠</div>
                  <h3 className="text-lg font-semibold mb-2">Home</h3>
                  <p className="text-sm text-white/70">Main landing page with overview and navigation</p>
                </a>
                <a href="/about" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">ℹ️</div>
                  <h3 className="text-lg font-semibold mb-2">About Us</h3>
                  <p className="text-sm text-white/70">Company mission, vision, and story</p>
                </a>
                <a href="/services" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-400 mb-2">⚙️</div>
                  <h3 className="text-lg font-semibold mb-2">Services</h3>
                  <p className="text-sm text-white/70">AI development and automation solutions</p>
                </a>
                <a href="/automation" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-400 mb-2">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">Automation</h3>
                  <p className="text-sm text-white/70">Autonomous systems showcase</p>
                </a>
                <a href="/blog" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-2">📝</div>
                  <h3 className="text-lg font-semibold mb-2">Blog</h3>
                  <p className="text-sm text-white/70">AI & technology insights</p>
                </a>
                <a href="/innovation" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-white/70">Breakthrough technologies</p>
                </a>
                <a href="/contact" className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-orange-400 mb-2">📞</div>
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-sm text-white/70">Get in touch with us</p>
                </a>
              </div>
            </div>

            {/* Update Reports */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Autonomous Updates</h2>
              <p className="text-white/70 mb-6 text-center">
                Latest system updates and content generated by our autonomous AI agents
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="/reports/updates/update-2025-08-15-0406" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-cyan-400 mb-2">Latest Update</div>
                  <h4 className="font-semibold">2025-08-15 0406</h4>
                </a>
                <a href="/reports/updates/update-2025-08-15-0405" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-fuchsia-400 mb-2">System Update</div>
                  <h4 className="font-semibold">2025-08-15 0405</h4>
                </a>
                <a href="/reports/updates/update-2025-08-15-0404" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-green-400 mb-2">Content Update</div>
                  <h4 className="font-semibold">2025-08-15 0404</h4>
                </a>
                <a href="/reports/updates/update-2025-08-15-0111" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-blue-400 mb-2">Performance Update</div>
                  <h4 className="font-semibold">2025-08-15 0111</h4>
                </a>
                <a href="/reports/updates/update-2025-08-15-0403" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-purple-400 mb-2">Security Update</div>
                  <h4 className="font-semibold">2025-08-15 0403</h4>
                </a>
                <a href="/reports/updates/update-2025-08-15-0402" className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-orange-400 mb-2">Feature Update</div>
                  <h4 className="font-semibold">2025-08-15 0402</h4>
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Quick Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Getting Started</h3>
                  <div className="space-y-3">
                    <a href="/about" className="block text-white/70 hover:text-white transition-colors">→ Learn About Us</a>
                    <a href="/services" className="block text-white/70 hover:text-white transition-colors">→ Explore Services</a>
                    <a href="/automation" className="block text-white/70 hover:text-white transition-colors">→ See Automation</a>
                    <a href="/contact" className="block text-white/70 hover:text-white transition-colors">→ Get in Touch</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Learn More</h3>
                  <div className="space-y-3">
                    <a href="/blog" className="block text-white/70 hover:text-white transition-colors">→ Read Our Blog</a>
                    <a href="/innovation" className="block text-white/70 hover:text-white transition-colors">→ Explore Innovation</a>
                    <a href="/reports/updates/update-2025-08-15-0406" className="block text-white/70 hover:text-white transition-colors">→ Latest Updates</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}