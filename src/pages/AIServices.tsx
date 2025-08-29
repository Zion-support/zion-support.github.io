import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  LineChart, 
  Bot, 
  Database, 
  Shield, 
  DollarSign, 
  ExternalLink, 
  Image as ImageIcon, 
  FileText, 
  Workflow, 
  Globe, 
  Video,
  Cpu,
  Lock,
  Users,
  MessageCircle,
  ShoppingCart,
  Camera,
  Mic,
  Palette,
  Target,
  Truck,
  CreditCard,
  FileSearch,
  BarChart3,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Award,
  Lightbulb
} from 'lucide-react';

const AIServices: React.FC = () => {
  const offerings = [
    {
      icon: Bot,
      title: 'Autonomous Agents & Workflows',
      desc: 'Multi-agent systems for customer support, ops automation, sales outreach, and back-office tasks with human-in-the-loop controls.',
      price: '$3,000 - $25,000+ per project',
      features: ['Multi-agent Coordination', 'Human-in-the-loop', 'Workflow Automation', 'Performance Analytics'],
      benefits: ['90% task automation', '24/7 operation', 'Scalable workflows']
    },
    {
      icon: Database,
      title: 'RAG + Knowledge Platforms',
      desc: 'Retrieval Augmented Generation on your docs, wikis, tickets, and data lakes. Secure, auditable answers with citations.',
      price: '$5,000 - $40,000+',
      features: ['Document Processing', 'Semantic Search', 'Citation Tracking', 'Security Controls'],
      benefits: ['Accurate answers', 'Source verification', 'Knowledge democratization']
    },
    {
      icon: LineChart,
      title: 'ML Forecasting & Optimization',
      desc: 'Demand forecasting, pricing optimization, churn prediction, lead scoring, and anomaly detection tuned to your KPIs.',
      price: '$8,000 - $60,000+',
      features: ['Predictive Models', 'Real-time Optimization', 'Anomaly Detection', 'Performance Monitoring'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated optimization']
    },
    {
      icon: Shield,
      title: 'Responsible AI & Governance',
      desc: 'Policy, guardrails, red-teaming, PII detection, SOC2/ISO-aligned controls, and observability for AI in production.',
      price: '$2,500 - $20,000+',
      features: ['AI Governance', 'Red-teaming', 'Compliance Controls', 'Observability'],
      benefits: ['Risk mitigation', 'Compliance ready', 'AI safety assurance']
    },
    {
      icon: ImageIcon,
      title: 'Vision AI & Document Intelligence',
      desc: 'OCR, form extraction, document classification, and image/video understanding for inspections and compliance.',
      price: '$4,000 - $45,000+',
      features: ['Advanced OCR', 'Document Classification', 'Form Extraction', 'Image Analysis'],
      benefits: ['80% faster processing', '99% accuracy', 'Automated workflows']
    },
    {
      icon: FileText,
      title: 'AI Content & Brand Copilots',
      desc: 'On-brand generation for blogs, ads, and product copy with approval workflows and tone control.',
      price: '$2,500 - $30,000+',
      features: ['Brand Voice Consistency', 'Content Generation', 'Approval Workflows', 'SEO Optimization'],
      benefits: ['10x faster content', 'Consistent branding', 'SEO improvement']
    },
    {
      icon: Workflow,
      title: 'Process Automation with LLMs',
      desc: 'Orchestrate multi-step processes across CRMs, ERPs, and ticketing systems using LLM planning and tools.',
      price: '$6,000 - $55,000+',
      features: ['Multi-step Orchestration', 'LLM Planning', 'System Integration', 'Workflow Automation'],
      benefits: ['50% efficiency gain', 'Reduced manual work', 'Better accuracy']
    },
    {
      icon: Workflow,
      title: 'AI Workflow Orchestrator',
      desc: 'Intelligent workflow automation with multi-agent coordination and real-time optimization.',
      price: '$2,500 - $15,000+',
      features: ['Workflow Automation', 'Multi-agent Coordination', 'Real-time Optimization', 'Performance Analytics'],
      benefits: ['Automated processes', 'Better coordination', 'Optimized workflows']
    },
    {
      icon: Shield,
      title: 'AI Data Governance',
      desc: 'AI-powered data classification, compliance automation, and intelligent access control.',
      price: '$3,500 - $18,000+',
      features: ['Data Classification', 'Compliance Automation', 'Access Control', 'Data Lineage'],
      benefits: ['Better data security', 'Compliance automation', 'Intelligent access control']
    },
    {
      icon: Globe,
      title: 'Multilingual CX & Localization AI',
      desc: 'Real-time translation, NLU for 50+ languages, sentiment, and locale-aware responses across channels.',
      price: '$3,000 - $25,000+',
      features: ['50+ Languages', 'Real-time Translation', 'Sentiment Analysis', 'Locale Awareness'],
      benefits: ['Global reach', 'Localized experience', 'Better customer engagement']
    },
    {
      icon: Video,
      title: 'Speech & Video Intelligence',
      desc: 'Transcription, speaker diarization, topic extraction, and highlight reels for calls, webinars, and support.',
      price: '$4,000 - $35,000+',
      features: ['Speech Recognition', 'Speaker Diarization', 'Topic Extraction', 'Content Analysis'],
      benefits: ['Automated transcription', 'Better insights', 'Content optimization']
    },
    {
      icon: FileText,
      title: 'AI Contract Review & Risk Scoring',
      desc: 'Clause extraction, risk flags, playbook suggestions, and bulk review workflows with human approvals.',
      price: '$3,000 - $25,000+',
      features: ['Clause Extraction', 'Risk Assessment', 'Playbook Suggestions', 'Bulk Review'],
      benefits: ['Faster review', 'Risk reduction', 'Compliance assurance']
    },
    {
      icon: Globe,
      title: 'Multilingual CX Orchestrator',
      desc: '50+ language detection, on‑brand translation memory, and locale QA pipelines across chat, email and voice.',
      price: '$3,000 - $20,000+',
      features: ['Language Detection', 'Translation Memory', 'Locale QA', 'Multi-channel Support'],
      benefits: ['Global reach', 'Consistent brand voice', 'Localized experience']
    },
    {
      icon: Workflow,
      title: 'Agentic Process Automation',
      desc: 'Task-centric multi-agent systems integrating CRMs/ERPs/ticketing with guardrails and observability.',
      price: '$6,000 - $55,000+',
      features: ['Multi-agent Systems', 'System Integration', 'Guardrails', 'Observability'],
      benefits: ['Automated processes', 'Better integration', 'Enhanced security']
    },
    // New AI Services
    {
      icon: Brain,
      title: 'AI Model Governance & MLOps',
      desc: 'End-to-end ML model lifecycle management with versioning, monitoring, and automated retraining.',
      price: '$8,000 - $75,000+',
      features: ['Model Versioning', 'Performance Monitoring', 'Automated Retraining', 'Lifecycle Management'],
      benefits: ['Better model management', 'Automated operations', 'Improved performance']
    },
    {
      icon: Shield,
      title: 'AI Security & Adversarial Testing',
      desc: 'Robust AI security with adversarial training, model hardening, and security validation.',
      price: '$5,000 - $45,000+',
      features: ['Adversarial Training', 'Model Hardening', 'Security Validation', 'Threat Detection'],
      benefits: ['Enhanced security', 'Robust models', 'Threat protection']
    },
    {
      icon: Globe,
      title: 'AI-Powered Market Intelligence',
      desc: 'Real-time market analysis, competitor monitoring, and trend prediction using AI and big data.',
      price: '$4,500 - $35,000+',
      features: ['Market Analysis', 'Competitor Monitoring', 'Trend Prediction', 'Real-time Insights'],
      benefits: ['Market insights', 'Competitive advantage', 'Trend identification']
    },
    {
      icon: Users,
      title: 'AI Customer Behavior Analytics',
      desc: 'Deep customer insights with behavioral analysis, segmentation, and predictive customer modeling.',
      price: '$3,500 - $28,000+',
      features: ['Behavioral Analysis', 'Customer Segmentation', 'Predictive Modeling', 'Personalization'],
      benefits: ['Better targeting', 'Improved conversion', 'Personalized experience']
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Optimization',
      desc: 'Dynamic pricing, inventory optimization, and personalized recommendations for e-commerce platforms.',
      price: '$5,500 - $42,000+',
      features: ['Dynamic Pricing', 'Inventory Optimization', 'Personalized Recommendations', 'Conversion Optimization'],
      benefits: ['Increased revenue', 'Better inventory management', 'Improved conversion']
    },
    {
      icon: MessageCircle,
      title: 'AI Conversational Intelligence',
      desc: 'Advanced conversation analysis with sentiment tracking, intent recognition, and automated insights.',
      price: '$2,800 - $22,000+',
      features: ['Conversation Analysis', 'Sentiment Tracking', 'Intent Recognition', 'Automated Insights'],
      benefits: ['Better understanding', 'Improved responses', 'Automated insights']
    },
    {
      icon: Camera,
      title: 'AI Visual Analytics Platform',
      desc: 'Comprehensive visual analysis with object detection, facial recognition, and behavioral tracking.',
      price: '$6,500 - $50,000+',
      features: ['Object Detection', 'Facial Recognition', 'Behavioral Tracking', 'Real-time Analysis'],
      benefits: ['Automated analysis', 'Better insights', 'Real-time processing']
    },
    {
      icon: Mic,
      title: 'AI Audio Intelligence Suite',
      desc: 'Advanced audio processing with speech recognition, emotion detection, and audio analytics.',
      price: '$4,200 - $32,000+',
      features: ['Speech Recognition', 'Emotion Detection', 'Audio Analytics', 'Real-time Processing'],
      benefits: ['Better understanding', 'Emotional insights', 'Automated processing']
    },
    {
      icon: Palette,
      title: 'AI Creative Design Platform',
      desc: 'AI-powered design generation, optimization, and creative assistance for marketing and branding.',
      price: '$3,800 - $28,000+',
      features: ['Design Generation', 'Creative Assistance', 'Brand Optimization', 'Marketing Automation'],
      benefits: ['Faster design', 'Creative inspiration', 'Brand consistency']
    },
    {
      icon: Target,
      title: 'AI Predictive Marketing',
      desc: 'Predictive marketing automation with customer lifetime value, churn prediction, and campaign optimization.',
      price: '$5,200 - $38,000+',
      features: ['Customer LTV', 'Churn Prediction', 'Campaign Optimization', 'Marketing Automation'],
      benefits: ['Better targeting', 'Improved ROI', 'Automated campaigns']
    },
    {
      icon: Truck,
      title: 'AI Supply Chain Intelligence',
      desc: 'Intelligent supply chain optimization with demand forecasting, route optimization, and risk management.',
      price: '$7,500 - $55,000+',
      features: ['Demand Forecasting', 'Route Optimization', 'Risk Management', 'Real-time Monitoring'],
      benefits: ['Cost reduction', 'Better efficiency', 'Risk mitigation']
    },
    {
      icon: CreditCard,
      title: 'AI Financial Intelligence',
      desc: 'Advanced financial analysis with fraud detection, risk assessment, and automated financial planning.',
      price: '$6,800 - $48,000+',
      features: ['Fraud Detection', 'Risk Assessment', 'Financial Planning', 'Compliance Monitoring'],
      benefits: ['Fraud prevention', 'Risk management', 'Better planning']
    },
    {
      icon: FileSearch,
      title: 'AI Research & Development',
      desc: 'AI-powered research automation with literature analysis, hypothesis generation, and experimental design.',
      price: '$8,500 - $65,000+',
      features: ['Literature Analysis', 'Hypothesis Generation', 'Experimental Design', 'Research Automation'],
      benefits: ['Faster research', 'Better insights', 'Automated analysis']
    },
    {
      icon: BarChart3,
      title: 'AI Business Intelligence',
      desc: 'Comprehensive business intelligence with predictive analytics, automated reporting, and actionable insights.',
      price: '$4,800 - $36,000+',
      features: ['Predictive Analytics', 'Automated Reporting', 'Actionable Insights', 'Real-time Dashboards'],
      benefits: ['Better decisions', 'Automated insights', 'Real-time visibility']
    }
  ];

  const ctas = [
    { label: 'Book a Strategy Call', href: '/contact' },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Email Us', href: 'mailto:kleber@ziontechgroup.com' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="AI Services - Zion Tech Group" description="Cutting-edge AI services designed to transform your business. From autonomous agents to machine learning solutions with proven ROI." />
      
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
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Applied AI that drives <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">measurable outcomes</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              We design, build, and operate AI systems that automate work, improve decisions, and create differentiated customer experiences.
              From concept to production, we ensure your AI initiatives deliver real business value.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ctas.map((c) => (
                <Link key={c.label} to={c.href} className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105">
                  {c.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Free AI strategy consultation
              </span>
              <span className="mx-3">•</span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Rapid AI deployment (2-8 weeks)
              </span>
              <span className="mx-3">•</span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                ROI guarantee
              </span>
            </div>
            <div className="mt-4 text-xs text-slate-400">
              Avg market budgets: $5k–$75k+ depending on scope and compliance requirements.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {offerings.map((o, index) => (
            <div key={o.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-200 hover:translate-y-[-2px] hover:border-cyan-400/30 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 group-hover:bg-cyan-500/25 transition-colors">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{o.title}</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">{o.desc}</p>
              
              {o.features && (
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-cyan-300 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {o.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {o.benefits && (
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-green-300 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {o.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-cyan-300">{o.price}</div>
                <div className="inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
          <div className="mb-4 font-semibold text-white text-lg">What you get with every AI service</div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Discovery & Strategy</h6>
              <ul className="space-y-1 text-xs">
                <li>Success metrics workshop</li>
                <li>AI readiness assessment</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Development & Testing</h6>
              <ul className="space-y-1 text-xs">
                <li>Model and data selection</li>
                <li>Security review & testing</li>
                <li>Performance validation</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Deployment & Operations</h6>
              <ul className="space-y-1 text-xs">
                <li>Pilot in 2–4 weeks</li>
                <li>Production hardening</li>
                <li>Runbooks & governance</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Support & Optimization</h6>
              <ul className="space-y-1 text-xs">
                <li>Observability dashboard</li>
                <li>Performance monitoring</li>
                <li>Continuous optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-2 text-xs">
            <DollarSign className="h-4 w-4" />
            Typical T&M: $120–$220/hr blended; fixed bids available for well-defined projects.
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <a className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
              View live services on our site <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com
            </span>
          </div>
          
          <div className="mt-4 text-xs text-slate-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;

