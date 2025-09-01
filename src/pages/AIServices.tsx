import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, LineChart, Bot, Database, Shield, DollarSign, ExternalLink, Image as ImageIcon, FileText, Workflow, Globe, Video, TrendingUp, Heart, Leaf, Rocket, Building, Network, Cpu, Zap, Users, BarChart3, MessageSquare, FileText, Calendar, Target } from 'lucide-react';

const AIServices: React.FC = () => {
  const offerings = [
    {
      icon: Bot,
      title: 'Autonomous Agents & Workflows',
      desc: 'Multi-agent systems for customer support, ops automation, sales outreach, and back-office tasks with human-in-the-loop controls.',
      price: '$3,000 - $25,000+ per project'
    },
    {
      icon: Database,
      title: 'RAG + Knowledge Platforms',
      desc: 'Retrieval Augmented Generation on your docs, wikis, tickets, and data lakes. Secure, auditable answers with citations.',
      price: '$5,000 - $40,000+'
    },
    {
      icon: LineChart,
      title: 'ML Forecasting & Optimization',
      desc: 'Demand forecasting, pricing optimization, churn prediction, lead scoring, and anomaly detection tuned to your KPIs.',
      price: '$8,000 - $60,000+'
    },
    {
      icon: Shield,
      title: 'Responsible AI & Governance',
      desc: 'Policy, guardrails, red-teaming, PII detection, SOC2/ISO-aligned controls, and observability for AI in production.',
      price: '$2,500 - $20,000+'
    },
    // New AI services
    {
      icon: ImageIcon,
      title: 'Vision AI & Document Intelligence',
      desc: 'OCR, form extraction, document classification, and image/video understanding for inspections and compliance.',
      price: '$4,000 - $45,000+'
    },
    {
      icon: FileText,
      title: 'AI Content & Brand Copilots',
      desc: 'On-brand generation for blogs, ads, and product copy with approval workflows and tone control.',
      price: '$2,500 - $30,000+'
    },
    {
      icon: Workflow,
      title: 'Process Automation with LLMs',
      desc: 'Orchestrate multi-step processes across CRMs, ERPs, and ticketing systems using LLM planning and tools.',
      price: '$6,000 - $55,000+'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Orchestrator',
      desc: 'Intelligent workflow automation with multi-agent coordination and real-time optimization.',
      price: '$2,500 - $15,000+'
    },
    {
      icon: Shield,
      title: 'AI Data Governance',
      desc: 'AI-powered data classification, compliance automation, and intelligent access control.',
      price: '$3,500 - $18,000+'
    },
    {
      icon: Globe,
      title: 'Multilingual CX & Localization AI',
      desc: 'Real-time translation, NLU for 50+ languages, sentiment, and locale-aware responses across channels.',
      price: '$3,000 - $25,000+'
    },
    {
      icon: Video,
      title: 'Speech & Video Intelligence',
      desc: 'Transcription, speaker diarization, topic extraction, and highlight reels for calls, webinars, and support.',
      price: '$4,000 - $35,000+'
    }
    ,
    {
      icon: FileText,
      title: 'AI Contract Review & Risk Scoring',
      desc: 'Clause extraction, risk flags, playbook suggestions, and bulk review workflows with human approvals.',
      price: '$3,000 - $25,000+'
    },
    {
      icon: Globe,
      title: 'Multilingual CX Orchestrator',
      desc: '50+ language detection, on‑brand translation memory, and locale QA pipelines across chat, email and voice.',
      price: '$3,000 - $20,000+'
    },
    {
      icon: Workflow,
      title: 'Agentic Process Automation',
      desc: 'Task-centric multi-agent systems integrating CRMs/ERPs/ticketing with guardrails and observability.',
      price: '$6,000 - $55,000+'
    },
    // New innovative AI services
    {
      icon: Brain,
      title: 'AI Autonomous Business Operations',
      desc: 'Fully automated business processes with intelligent decision-making and self-healing capabilities.',
      price: '$12,000 - $75,000+'
    },
    {
      icon: TrendingUp,
      title: 'AI Supply Chain Optimization',
      desc: 'Intelligent supply chain analytics, demand forecasting, and inventory optimization with real-time insights.',
      price: '$4,500 - $35,000+'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Analytics Platform',
      desc: 'Advanced healthcare data analytics with patient risk scoring, treatment optimization, and population health insights.',
      price: '$8,500 - $65,000+'
    },
    {
      icon: Leaf,
      title: 'AI Sustainability Analytics',
      desc: 'Environmental impact tracking, carbon footprint analysis, and sustainability reporting automation.',
      price: '$3,500 - $25,000+'
    },
    {
      icon: Rocket,
      title: 'AI Space Technology Solutions',
      desc: 'Satellite communications optimization, space data analytics, and orbital mechanics with AI assistance.',
      price: '$25,000 - $150,000+'
    },
    {
      icon: Building,
      title: 'AI Digital Twin Platform',
      desc: 'Intelligent digital simulation and monitoring for industrial processes, infrastructure, and smart cities.',
      price: '$15,000 - $100,000+'
    },
    {
      icon: Network,
      title: 'AI Blockchain Intelligence',
      desc: 'Blockchain analytics, smart contract optimization, and DeFi protocol intelligence with AI-powered insights.',
      price: '$5,000 - $40,000+'
    },
    {
      icon: Cpu,
      title: 'Quantum AI Integration',
      desc: 'Hybrid quantum-classical AI systems for complex optimization problems and advanced simulations.',
      price: '$35,000 - $200,000+'
    },
    {
      icon: Zap,
      title: 'AI Edge Computing Intelligence',
      desc: 'Intelligent edge computing with AI-powered optimization, real-time analytics, and distributed intelligence.',
      price: '$4,500 - $30,000+'
    },
    {
      icon: Users,
      title: 'AI Customer Experience Orchestrator',
      desc: 'Omnichannel customer experience management with AI-powered personalization and predictive engagement.',
      price: '$6,000 - $45,000+'
    },
    {
      icon: Database,
      title: 'AI Data Lakehouse Platform',
      desc: 'Unified data platform combining data lake and warehouse capabilities with intelligent MLOps integration.',
      price: '$8,000 - $60,000+'
    },
    {
      icon: Shield,
      title: 'AI Threat Intelligence Platform',
      desc: 'Real-time threat detection, behavioral analysis, and automated incident response with AI-powered insights.',
      price: '$5,000 - $40,000+'
    },
    {
      icon: Wrench,
      title: 'AI Platform Engineering',
      desc: 'Intelligent internal developer platforms with AI-powered golden paths and automated governance.',
      price: '$8,000 - $70,000+'
    },
    {
      icon: Globe,
      title: 'AI Multilingual Intelligence',
      desc: 'Advanced multilingual AI with 100+ language support, cultural context awareness, and real-time translation.',
      price: '$4,000 - $35,000+'
    },
    {
      icon: BarChart3,
      title: 'AI Predictive Analytics Suite',
      desc: 'Comprehensive predictive analytics platform with machine learning models and automated insights generation.',
      price: '$7,000 - $55,000+'
    },
    {
      icon: MessageSquare,
      title: 'AI Conversational Intelligence',
      desc: 'Advanced conversational AI with natural language understanding, sentiment analysis, and context awareness.',
      price: '$3,500 - $30,000+'
    },
    {
      icon: FileText,
      title: 'AI Knowledge Management',
      desc: 'Intelligent knowledge base management with automated content organization and intelligent search capabilities.',
      price: '$2,500 - $25,000+'
    },
    {
      icon: Calendar,
      title: 'AI Business Process Intelligence',
      desc: 'Intelligent business process analysis, optimization, and automation with AI-powered insights.',
      price: '$5,000 - $40,000+'
    },
    {
      icon: Target,
      title: 'AI Marketing Intelligence',
      desc: 'AI-powered marketing analytics, customer segmentation, and campaign optimization with predictive insights.',
      price: '$4,000 - $35,000+'
    }
  ];

  const ctas = [
    { label: 'Book a Strategy Call', href: '/contact' },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Email Us', href: 'mailto:kleber@ziontechgroup.com' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-1 text-cyan-300">
              <Brain className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wider">AI SERVICES</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Applied AI that drives measurable business outcomes
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300">
              We design, build, and operate AI systems that automate work, improve decisions, and create differentiated customer experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ctas.map((c) => (
                <Link key={c.label} to={c.href} className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">
                  {c.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-400">
              Avg market budgets: $5k–$60k+ depending on scope and compliance.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:translate-y-[-2px] hover:border-cyan-400/30">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{o.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{o.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">What you get</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Discovery + success metrics workshop</li>
            <li>Model and data selection with security review</li>
            <li>Pilot in 2–4 weeks, production hardening in 4–8 weeks</li>
            <li>Runbooks, governance, and observability dashboard</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Typical T&M: $120–$220/hr blended; fixed bids available.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
            View live services on our site <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 text-xs text-slate-400">
            Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;

