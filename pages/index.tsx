import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Users, CheckCircle, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
    },
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI",
      icon: Users,
      color: "from-green-500 to-teal-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis"]
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration",
      icon: Network,
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      price: "$349/month",
      features: ["Edge node management", "IoT device management", "Real-time monitoring"]
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge technology solutions",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      link: "https://ziontechgroup.com/space-technology",
      price: "$2,499/month",
      features: ["Satellite management", "AI mission planning", "Quantum communication"]
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with neural interfaces",
      color: "from-pink-500 to-rose-500",
      link: "https://ziontechgroup.com/neural-interface",
      price: "$899/month",
      features: ["BCI development tools", "Neural signal processing", "AI pattern recognition"]
    }
  ];
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - AI & Cloud Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud computing, and digital transformation solutions with autonomous content generation." />
        <meta property="og:title" content="Zion Tech Group - AI & Cloud Solutions" />
        <meta property="og:description" content="Leading provider of AI, cloud computing, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-8 max-w-4xl mx-auto">
            Autonomous AI & Cloud Solutions with Continuous Content Generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/components"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Components
            </Link>
            <Link 
              href="/reports"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReports.map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-white/70 mb-3">{report.description}</p>
                <span className="text-cyan-400 text-sm">{report.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">New Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newFeatures.map((feature) => (
              <Link 
                key={feature.title}
                href={feature.href}
                className="group text-center"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}

 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/reports/updates/update-2025-08-17-1836" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1836</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1835" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1835</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1834" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1834</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1833" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1833</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1832" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1832</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1831" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1831</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
   </div>
 </section>
 
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
</section>
    </div>
  );
};
const IndexPage: React.FC<HomePageProps> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || t('home_page_load_error')} />
        </div>
      </section>
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven track record speaks for itself
              </p>
              <Link href="/services">
                <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-700 mb-6">
                Scalable cloud infrastructure, migration services, and DevOps automation to optimize your operations.
                <span className="text-purple-600 hover:text-purple-700 font-semibold cursor-pointer inline-flex items-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
                End-to-end digital transformation services to modernize your business processes and technology stack.
                <span className="text-green-600 hover:text-green-700 font-semibold cursor-pointer inline-flex items-center">
          </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2">{contact.description}</p>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {contact.details}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{contact.details}</p>
                  )}
                </motion.div>
              ))}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can help you achieve your goals.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                  Get Started
                </Link>
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                  View Services
            </motion.div>
