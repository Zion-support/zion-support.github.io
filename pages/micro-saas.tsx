<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Heart, 
  Building, 
  Cloud,
  Zap,
  Shield,
  Bot,
  Database,
  Sprout,
  FileText,
  MessageSquare,
  Layers,
  Clock,
  TrendingUp,
  Brain,
  Calendar,
  Headphones,
  RefreshCw,
  Video,
  Stethoscope,
  Cpu,
  Image,
  Mail,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    icon: Bot,
    features: ['AI-powered content creation', 'Multiple content formats', 'Brand voice customization', 'SEO optimization'],
    pricing: '$29/month',
    category: 'Content & Marketing',
    benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized output'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Social Media Scheduler',
    description: 'Schedule and manage all your social media posts across multiple platforms from one dashboard.',
    icon: Calendar,
    features: ['Multi-platform posting', 'Optimal timing suggestions', 'Content calendar', 'Analytics dashboard'],
    pricing: '$19/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 40%', 'Save 5 hours per week', 'Better content planning'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Email Marketing Automation',
    description: 'Create, send, and track email campaigns with advanced automation and personalization.',
    icon: Mail,
    features: ['Drag-and-drop editor', 'Advanced segmentation', 'A/B testing', 'Detailed analytics'],
    pricing: '$39/month',
    category: 'Email Marketing',
    benefits: ['Increase open rates by 25%', 'Automate customer journeys', 'Better ROI tracking'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
    icon: Target,
    features: ['Kanban boards', 'Gantt charts', 'Team collaboration', 'Time tracking'],
    pricing: '$25/month',
    category: 'Productivity',
    benefits: ['Improve team efficiency by 30%', 'Better project visibility', 'Reduced missed deadlines'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Customer Support Chat',
    description: 'Provide instant customer support with AI-powered chatbots and live chat integration.',
    icon: MessageSquare,
    features: ['AI chatbot', 'Live chat widget', 'Knowledge base', 'Ticket management'],
    pricing: '$35/month',
    category: 'Customer Service',
    benefits: ['24/7 customer support', 'Reduce response time by 90%', 'Improve customer satisfaction'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics and KPIs.',
    icon: BarChart3,
    features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights'],
    pricing: '$45/month',
    category: 'Analytics',
    benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Track performance metrics'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Invoice Generator',
    description: 'Create professional invoices, track payments, and manage billing with ease.',
    icon: FileText,
    features: ['Professional templates', 'Payment tracking', 'Automated reminders', 'Tax calculations'],
    pricing: '$15/month',
    category: 'Finance',
    benefits: ['Get paid 30% faster', 'Reduce billing errors', 'Professional appearance'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Password Manager',
    description: 'Secure password storage and management for individuals and teams.',
    icon: Lock,
    features: ['Secure encryption', 'Password generation', 'Team sharing', 'Breach monitoring'],
    pricing: '$12/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Team collaboration'],
    marketPrice: '$5-20/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'File Storage & Sharing',
    description: 'Secure cloud storage with advanced sharing and collaboration features.',
    icon: Cloud,
    features: ['Secure cloud storage', 'File sharing', 'Version control', 'Team collaboration'],
    pricing: '$20/month',
    category: 'Storage',
    benefits: ['Access files anywhere', 'Secure sharing', 'Version history'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks with detailed reporting and insights.',
    icon: Clock,
    features: ['Time tracking', 'Project management', 'Detailed reports', 'Team insights'],
    pricing: '$18/month',
    category: 'Productivity',
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights'],
    marketPrice: '$10-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Website Builder',
    description: 'Create professional websites with drag-and-drop builder and responsive templates.',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Responsive templates', 'SEO tools', 'E-commerce integration'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['No coding required', 'Professional results', 'SEO optimized'],
    marketPrice: '$15-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'CRM System',
    description: 'Manage customer relationships with comprehensive CRM features and automation.',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Automation', 'Reporting'],
    pricing: '$50/month',
    category: 'CRM',
    benefits: ['Improve sales by 25%', 'Better customer relationships', 'Automated workflows'],
    marketPrice: '$25-150/month',
    link: '/contact',
    popular: true
  }
];
=======
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Search, ArrowRight, Rocket, Filter, DollarSign } from 'lucide-react';
import { realMarketServices } from '../data/real-market-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { marketValidatedServices } from '../data/market-validated-services';

export default function MicroSaaSPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 24;

  const allServices = useMemo(() => {
    const combined = [
      ...realMarketServices,
      ...enhancedRealMicroSaasServices,
      ...marketValidatedServices,
    ].map((s) => ({
      id: (s as any).id,
      name: (s as any).name,
      tagline: (s as any).tagline,
      price: (s as any).price,
      period: (s as any).period,
      description: (s as any).description,
      features: (s as any).features || [],
      icon: (s as any).icon || '✨',
      color: (s as any).color || 'from-cyan-600 to-blue-700',
      textColor: (s as any).textColor || 'text-cyan-300',
      link: (s as any).link || `/${(s as any).id}`,
      category: (s as any).category || 'General',
      popular: !!(s as any).popular,
    }));

    // Deduplicate by id
    const byId = new Map<string, any>();
    for (const svc of combined) {
      if (!byId.has(svc.id)) byId.set(svc.id, svc);
    }
    return Array.from(byId.values());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allServices;
    return allServices.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      (s.tagline || '').toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q)
    );
  }, [allServices, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);
>>>>>>> origin/feat/more-services-and-futuristic-ui

export default function MicroSAASPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group | Innovative Software Solutions"
      description="Discover our micro SaaS solutions designed to solve specific business problems. Scalable, cost-effective software solutions for modern businesses."
      keywords="micro saas, software solutions, business automation, scalable software, cost-effective solutions"
    >
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">Innovative software solutions for modern businesses.</p>
          </div>
        </section>
      </div>
    </Layout>
=======
    <>
      <Head>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Explore real, production-ready micro SaaS services with transparent pricing and instant value." />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <section className="pt-28 pb-10 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" /> Micro SaaS Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Real Micro SaaS Services</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">Hand-picked services with fast setup, clear value, and market-aligned pricing.</p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Search by name, category, or use case..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-800/70 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${s.color}`}>
                    <span className="text-lg">{s.icon}</span>
                  </div>
                  {s.popular && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">Popular</span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <div className="text-sm text-gray-400 mb-3">{s.tagline}</div>
                <div className="text-sm text-cyan-300 font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> {s.price}<span className="text-gray-400">{s.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {s.features.slice(0, 3).map((f: string) => (
                    <li key={f} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400" /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href={s.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-lg bg-gray-900/70 border border-gray-800 text-gray-300 hover:border-cyan-500/30"
              disabled={page === 1}
            >
              Previous
            </button>
            <div className="text-gray-400 text-sm">Page {page} of {pageCount}</div>
            <button
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              className="px-4 py-2 rounded-lg bg-gray-900/70 border border-gray-800 text-gray-300 hover:border-cyan-500/30"
              disabled={page === pageCount}
            >
              Next
            </button>
          </div>

          <div className="mt-10 text-center">
            <Link href="/market-pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/15">
              <Filter className="w-4 h-4 mr-2" /> See Market Pricing References
            </Link>
          </div>
        </div>
      </section>
    </>
>>>>>>> origin/feat/more-services-and-futuristic-ui
  );
}
