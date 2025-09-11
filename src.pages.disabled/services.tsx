import React from 'react';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  return (

    { id: 'ai', name: 'AI & Machine Learning', icon: Brain }, { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud }, { id: 'security', name: 'Cybersecurity', icon: Shield }, { id: 'digital', name: 'Digital Transformation', icon: Zap }, { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

      category: 'ai',
      icon: Brain,
      title: "AI Autonomous Business Manager",
      description: "Fully autonomous AI system that manages your entire business operations with 40-60% cost reduction.",
      features: ["24/7 Autonomous Operation", "Real-time Decision Making", "Predictive Analytics", "Process Optimization"],
      pricing: "$2,500 - $12,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: '/services/ai-autonomous-business-manager'}, {'
      category: 'ai',
      icon: Brain,
      title: "AI Business Intelligence Elite",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive analytics, and automated reporting.",
      features: ["GPT-4 & Claude 3.5 Integration", "Real-time BI", "Predictive Analytics", "Enterprise Security"],
      pricing: "$2,500 - $12,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: '/services/ai-business-intelligence-elite'}, {'
      category: 'security',
      icon: Shield,
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.",
      features: ["AI Threat Detection", "Zero-Day Protection", "Automated Response", "Compliance Ready"],
      pricing: "$3,500 - $18,000/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: '/services/ai-cybersecurity-elite'}, {'
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.",
      features: ["1000+ Qubit Access", "AI-Quantum Hybrid", "Quantum-Safe Crypto", "Global Network"],
      pricing: "$8,500 - $45,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: '/services/quantum-computing-elite'}, {'
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business with proven templates and automation.",
      features: ["Rapid Launch", "Built-in Payments", "AI Automation", "Multi-tenant Architecture"],
      pricing: "$2,500 - $12,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: '/services/micro-saas-platform-elite'}, {'
      category: 'ai',
      icon: Brain,
      title: 'AI Development & Strategy',
      description: 'Custom AI models, machine learning solutions, and strategic AI roadmapping for your business.',
      features: ['Custom AI Models,ML Strategy,Data Analytics,AI Integration'],
      pricing: '$5,000 - $50,000',
      color: 'from-purple-500 to-pink-500'}, {'
      category: 'cloud',
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Seamless cloud migration, scalable architecture, and cost optimization strategies.',
      features: ['AWS/Azure/GCP,Cost Optimization,Scalability,Security'],
      pricing: '$10,000 - $100,000',
      color: 'from-blue-500 to-cyan-500'}, {'
      category: 'security',
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments, threat detection, and compliance frameworks.',
      features: ['Security Audits,Threat Detection,Compliance,Incident Response'],
      pricing: '$3,000 - $25,000',
      color: 'from-red-500 to-orange-500'}, {'
      category: 'digital',
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation to modernize your technology stack.',
      features: ['Process Optimization,Technology Stack,Change Management,ROI Analysis'],
      pricing: '$15,000 - $75,000',
      color: 'from-yellow-500 to-orange-500'}, {'
      category: 'ai',
      icon: Users,
      title: 'AI-Powered Analytics',
      description: 'Advanced business intelligence and predictive analytics solutions.',
      features: ['Predictive Models,Real-time Insights,Custom Dashboards,Data Integration'],
      pricing: '$8,000 - $40,000',
      color: 'from-green-500 to-emerald-500'}, {'
      category: 'cloud',
      icon: Server,
      title: 'DevOps Automation',
      description: 'CI/CD pipelines, infrastructure as code, and automated deployment solutions.',
      features: ['CI/CD Pipelines,Infrastructure as Code,Monitoring,Automation'],
      pricing: '$6,000 - $35,000',
      color: 'from-indigo-500 to-purple-500'}
  ]],
      pricing: '$299 - $799/month',
      cta: 'Get a demo',
      ctaLink: '/contact',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500'}, {'
      title: 'Support Ticket Triage Copilot',
      description: 'Classifies, deduplicates, and suggests resolutions integrates with Zendesk/Jira.',
      features: [
        'Auto-priority and routing,Knowledge base suggestions,First-response macros,Sentiment analysis'],
      pricing: '$249 - $999/month',
      cta: 'See solution',
      ctaLink: '/services',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'}, {'
      title: 'Invoice OCR + Reconciliation',
      description: 'Extracts line-items and auto-matches to POs exports to QuickBooks/Xero.',
      features: [
        'Vendor anomaly detection,Tax and currency support,Audit trails,Multi-format support'],
      pricing: '$199 - $799/month',
      cta: 'Learn more',
      ctaLink: '/services',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'}, {'
      title: 'SEO Content Planner',
      description: 'Keyword clustering, brief generation, and on-page optimization recommendations.',
      features: [
        'Competitor gap analysis,Automatic internal linking,Publish to CMS,Performance tracking'],
      pricing: '$99 - $399/month',
      cta: 'Pricing',
      ctaLink: '/pricing',
      icon: Search,
      color: 'from-orange-500 to-red-500'}, {'
      title: 'HR Screening Assistant',
      description: 'Summarizes resumes, auto-screens candidates, and schedules interviews.',
      features: [
        'ATS integration,Bias-mitigation controls,Compliance exports,Interview scheduling'],
      pricing: '$149 - $599/month',
      cta: 'Talk to sales',
      ctaLink: '/contact',
      icon: Users,
      color: 'from-indigo-500 to-blue-500'}, {'
      title: 'AI Project Management',
      description: 'Intelligent project tracking, resource allocation, and risk prediction.',
      features: [
        'AI-powered scheduling,Risk prediction,Resource optimization,Progress tracking'],
      pricing: '$199: - $699/month',,';
      cta: 'Start: free trial',,';
      ctaLink: '/contact',,';
      icon: Rocke,t,
      color: 'from-teal-500: to-cyan-500'}'];

      title: 'AI Autonomous Research Assistant',
      description: 'AI-powered autonomous research that discovers, analyzes, and synthesizes information across multiple sources.',
      features: [
        'Autonomous Research,Multi-Source Analysis,Intelligent Summarization,Real-time Updates'],
      pricing: '$299 - $1,999/month',
      cta: 'Learn More',
      ctaLink: '/services/ai-autonomous-research-assistant',
      icon: Brain,
      color: 'from-blue-500 to-purple-500'}, {'
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs.',
      features: [
        'AI-Powered Forecasting,Real-time Visibility,Intelligent Routing,Risk Management'],
      pricing: '$499 - $2,999/month',
      cta: 'Learn More',
      ctaLink: '/services/ai-supply-chain-optimization',
      icon: Network,
      color: 'from-green-500 to-blue-500'}, {'
      title: 'AI Content Marketing Suite',
      description: 'AI-powered content creation, optimization, and distribution for maximum engagement.',
      features: [
        'AI Content Generation,Audience Intelligence,SEO Optimization,Performance Analytics'],
      pricing: '$199 - $1,499/month',
      cta: 'Learn More',
      ctaLink: '/services/ai-content-marketing-suite',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'}, {'
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation that learns from your processes and optimizes them continuously.',
      features: [
        'Process Learning,Automated Optimization,Integration Hub,Performance Analytics'],
      pricing: '$399 - $1,999/month',
      cta: 'Learn More',
      ctaLink: '/services/ai-workflow-orchestrator',
      icon: GitFork,
      color: 'from-indigo-500 to-purple-500'}, {'
      title: 'AI Customer Experience Analytics',
      description: 'Deep insights into customer behavior with predictive analytics and personalized recommendations.',
      features: [
        'Behavioral Analysis,Predictive Insights,Personalization Engine,ROI Tracking'],
      pricing: '$349 - $1,799/month',
      cta: 'Learn More',
      ctaLink: '/services/ai-customer-experience-analytics',
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-500'}, {'
      title: 'AI Financial Risk Management',
      description: 'Intelligent financial risk assessment with AI-driven predictive analytics.',
      features: [
        'Risk Assessment,Predictive Analytics,Compliance Monitoring,Real-time Alerts'],
      pricing: '$599: - $,2,999/month'',;
      cta: 'Learn: More',,';
      ctaLink: '/services/ai-financial-risk-management',,';
      icon: Shiel,d,
      color: 'from-red-500: to-orange-500'}'];

            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s)              => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-cyan-400 hover:text-cyan-300 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Reference
                    </a>

                  )}
                </div>
              </div>
            ))}
          </div>

                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};