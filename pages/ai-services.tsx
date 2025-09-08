import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2,
  Stethoscope,
  Trophy,
  FlaskConical
} from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions that reduce response times by 80% and improve customer satisfaction.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (chat, email, phone)',
        'Human-in-the-loop escalation',
        'Knowledge base integration and mining',
        'Sentiment analysis and mood detection',
        '24/7 availability with instant responses'
      ],
      pricing: '$2,000 – $8,000 setup',
      perUnit: '$0.02 – $0.20 per session',
      timeline: '4–8 weeks',
      benefits: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 customer availability',
        'Improved customer satisfaction scores'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: FileText,
      name: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.',
      features: [
        'High-quality content generation',
        'SEO optimization and keyword research',
        'Content clustering and internal linking',
        'Editorial calendar automation',
        'Brand voice consistency',
        'Performance tracking and optimization'
      ],
      pricing: '$1,000 – $6,000/month',
      perUnit: '$0.10 – $1.00 per article',
      timeline: '2–4 weeks',
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.',
      features: [
        'Custom object detection and classification',
        'Facial recognition and biometric authentication',
        'OCR and document text extraction',
        'Real-time image processing',
        'Quality control and defect detection',
        'Visual search and recommendation'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.5% accuracy in object detection',
        'Automated quality control',
        'Enhanced security with biometrics',
        'Reduced manual inspection costs'
      ]
    }
  ];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Climate", count: aiServices.filter(s => s.category === "AI Climate").length },
  { name: "AI Space", count: aiServices.filter(s => s.category === "AI Space").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic" intensity={0.95}>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="AI assistants, analytics, guardrails, code review, and sales automation." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship reliable AI assistants and platforms with enterprise guardrails, evaluation, and full-stack observability.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Talk to Sales</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Popular Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2"><Rocket className="w-5 h-5" /><span className="font-semibold">{s.name}</span></div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((s: any) => {
                const u = new URL(s.link);
                const slug = u.pathname.replace(/^\/+|\/+$/g, '');
                return (
                  <Link key={s.id || s.name} href={`/${slug}`} className="block bg-black/30 rounded-2xl border border-cyan-500/30 p-6 hover:border-cyan-400/60 transition-colors">
                    <div className="text-xl font-semibold text-white mb-2">{s.name}</div>
                    {s.tagline && <div className="text-slate-300 mb-3">{s.tagline}</div>}
                    {s.price && <div className="text-cyan-300">{s.price}{s.period || ''}</div>}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Security-first engineering with redaction, audit logs, and approvals</span>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
