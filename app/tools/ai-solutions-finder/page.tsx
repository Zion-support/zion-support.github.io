'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Mail, Phone, MapPin, ExternalLink, Check, ChevronRight, ChevronLeft, Sparkles, Zap, Shield, BarChart3, Users, Code, Database } from 'lucide-react';
import Link from 'next/link';

interface Service {
  name: string;
  icon: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  href: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  subcategories: string[];
}

const categories: Category[] = [
  { id: 'customer-service', label: 'Customer Service', icon: <Users className="w-5 h-5" />, tagline: 'Improve support, retention, and satisfaction', subcategories: ['AI chatbot or virtual assistant', 'Automated ticket routing', 'Sentiment analysis & feedback', 'Voice AI / call automation', 'Content moderation'] },
  { id: 'operations', label: 'Operations & Process', icon: <Zap className="w-5 h-5" />, tagline: 'Automate workflows and reduce manual work', subcategories: ['Document processing automation', 'Workflow orchestration', 'Invoice/accounts payable automation', 'Inventory and supply chain', 'Meeting & scheduling automation'] },
  { id: 'security', label: 'Security & Compliance', icon: <Shield className="w-5 h-5" />, tagline: 'Protect your data and meet regulations', subcategories: ['Threat detection & monitoring', 'SOC 2 / HIPAA / GDPR compliance', 'Vulnerability scanning', 'Backup & disaster recovery', 'Identity & access management'] },
  { id: 'data-analytics', label: 'Data & Analytics', icon: <BarChart3 className="w-5 h-5" />, tagline: 'Turn data into actionable decisions', subcategories: ['Predictive analytics & forecasting', 'Business intelligence dashboards', 'Financial planning & budgeting', 'Customer churn prediction', 'Knowledge management & search'] },
  { id: 'engineering', label: 'Engineering & DevOps', icon: <Code className="w-5 h-5" />, tagline: 'Ship faster, reduce bugs, modernize systems', subcategories: ['Code review & quality assurance', 'Legacy code migration', 'CI/CD pipeline automation', 'Kubernetes & container management', 'API development & integration'] },
  { id: 'infrastructure', label: 'Infrastructure & Cloud', icon: <Database className="w-5 h-5" />, tagline: 'Scale efficiently and reduce costs', subcategories: ['Cloud migration strategy', 'Cost optimization & monitoring', 'Network architecture / SD-WAN', 'Multi-cloud management', 'Disaster recovery planning'] },
];

const solutionsMap: Record<string, Service[]> = {
  'AI chatbot or virtual assistant': [
    { name: 'AI Chatbot Builder Pro', icon: '🤖', description: 'Custom-branded AI chatbots with intent classification, knowledge base integration, and multi-channel deployment.', category: 'AI Agent', price: 'From $499/mo', features: ['Custom training on your data', 'Multi-language support', 'CRM integration'], href: '/ai-services/ai-chatbot-builder-pro' },
    { name: 'AI Voice Agent Platform', icon: '🎙️', description: 'Conversational voice AI for calls, scheduling, and support with natural speech.', category: 'Voice AI', price: 'From $499/mo', features: ['Real-time speech recognition', 'CRM integration', 'Call scoring'], href: '/ai-services/ai-voice-agent-platform' },
  ],
  'Automated ticket routing': [
    { name: 'AI Intelligent Request Routing', icon: '🔀', description: 'Smart NLP-based routing that sends tickets to the right team automatically.', category: 'Automation', price: 'From $299/mo', features: ['Intent classification', 'Skill-based routing', 'Performance analytics'], href: '/ai-services/ai-intelligent-routing' },
    { name: 'IT Service Desk Automation', icon: '🎧', description: 'AI-powered ITSM with auto-classification and auto-resolution.', category: 'ITSM', price: 'From $499/mo', features: ['Auto-resolution engine', 'SLA monitoring', 'Self-service portal'], href: '/it-services/it-service-desk-automation' },
  ],
  'Sentiment analysis & feedback': [
    { name: 'AI Customer Sentiment Analytics', icon: '💭', description: 'Real-time sentiment tracking across reviews, social media, and support tickets.', category: 'Analytics', price: 'From $349/mo', features: ['Multi-channel tracking', 'Trend detection', 'Competitor benchmarking'], href: '/ai-services/ai-customer-sentiment-analytics' },
    { name: 'AI Employee Feedback Platform', icon: '💬', description: 'Continuous pulse surveys with sentiment analysis and actionable insights.', category: 'HR Tech', price: 'Custom pricing', features: ['Sentiment analysis', 'Retention tracking', 'Actionable reports'], href: '/micro-saas/ai-employee-feedback-platform' },
  ],
  'Voice AI / call automation': [
    { name: 'AI Voice Agent Platform', icon: '🎙️', description: 'Deploy AI voice agents for customer service, outbound calls, and scheduling.', category: 'Voice AI', price: 'From $499/mo', features: ['Natural voice synthesis', 'Multi-language support', 'CRM integration'], href: '/ai-services/ai-voice-agent-platform' },
  ],
  'Content moderation': [
    { name: 'AI Content Moderation Platform', icon: '🛡️', description: 'Automated moderation for user-generated content across text, image, and video.', category: 'Content AI', price: 'From $399/mo', features: ['Multi-modal analysis', 'Custom policy engine', 'Audit logging'], href: '/ai-services/ai-content-moderation' },
  ],
  'Document processing automation': [
    { name: 'AI Document Intelligence', icon: '📄', description: 'Extract data from invoices, contracts, forms, and receipts with 99%+ accuracy.', category: 'Document AI', price: 'From $599/mo', features: ['OCR + NLP extraction', 'Custom field mapping', 'ERP integration'], href: '/ai-services/ai-document-intelligence' },
    { name: 'AI Contract Analyzer Pro', icon: '📋', description: 'Deep contract review with risk scoring and obligation tracking.', category: 'Legal AI', price: 'From $799/mo', features: ['Clause extraction', 'Risk flagging', 'Renewal alerts'], href: '/micro-saas/ai-contract-analyzer-pro' },
  ],
  'Workflow orchestration': [
    { name: 'AI Agentic Workflows', icon: '🔄', description: 'Autonomous AI agents that execute multi-step business processes.', category: 'Agent Automation', price: 'From $1,499/mo', features: ['Custom agent design', 'Human-in-the-loop', 'Audit trails'], href: '/ai-services/ai-agentic-workflows' },
    { name: 'AI Automation Platform', icon: '⚡', description: 'No-code automation builder with AI decision nodes and smart triggers.', category: 'Automation', price: 'From $699/mo', features: ['Visual workflow builder', 'AI-powered decisions', 'Integration library'], href: '/ai-services/process-automation' },
  ],
  'Invoice/accounts payable automation': [
    { name: 'AI Automated Invoicing', icon: '📄', description: 'Automated invoice generation, payment reminders, and reconciliation.', category: 'Finance AI', price: 'From $299/mo', features: ['Smart matching', 'Payment reminders', 'ERP sync'], href: '/micro-saas/ai-automated-invoicing' },
  ],
  'Inventory and supply chain': [
    { name: 'AI Supply Chain Intelligence', icon: '🔗', description: 'End-to-end visibility with disruption alerts and vendor risk scoring.', category: 'Supply Chain AI', price: 'From $1,299/mo', features: ['Predictive alerts', 'Vendor risk scoring', 'Scenario simulation'], href: '/ai-services/ai-supply-chain-intelligence' },
    { name: 'AI Inventory Forecasting', icon: '📦', description: 'ML-powered demand forecasting and automated reorder optimization.', category: 'Supply Chain AI', price: 'From $499/mo', features: ['Demand prediction', 'Safety stock calculation', 'Auto-reorder'], href: '/micro-saas/ai-inventory-forecasting' },
  ],
  'Meeting & scheduling automation': [
    { name: 'AI Meeting Notes Assistant', icon: '📝', description: 'Automated transcription, summaries, and action item extraction.', category: 'Productivity', price: 'From $49/mo', features: ['Transcription', 'Action items', 'CRM integration'], href: '/micro-saas/ai-meeting-notes-assistant' },
    { name: 'AI Medical Scheduler', icon: '🏥', description: 'Intelligent appointment scheduling with patient triage.', category: 'Healthcare AI', price: 'From $199/mo', features: ['Smart scheduling', 'Patient reminders', 'Resource optimization'], href: '/micro-saas/ai-medical-scheduler' },
  ],
  'Threat detection & monitoring': [
    { name: 'Managed SOC & Threat Intelligence', icon: '🔒', description: '24/7 SOC with AI-enhanced threat detection and proactive hunting.', category: 'Security', price: 'From $1,999/mo', features: ['24/7 monitoring', 'AI threat detection', 'Incident response'], href: '/it-services/managed-soc-threat-intelligence' },
    { name: 'AI Cyber Threat Hunting', icon: '🔍', description: 'AI-driven threat intelligence and proactive security analysis.', category: 'Threat Intel', price: 'From $899/mo', features: ['Threat intelligence', 'Behavioral analysis', 'Automated response'], href: '/ai-services/ai-cyber-threat-hunting' },
  ],
  'SOC 2 / HIPAA / GDPR compliance': [
    { name: 'AI Compliance & Governance', icon: '🛡️', description: 'Automated compliance monitoring and reporting for industry standards.', category: 'Compliance', price: 'From $200/mo', features: ['Automated audits', 'Gap analysis', 'Evidence collection'], href: '/ai-services/ai-compliance' },
    { name: 'AI Cybersecurity Training', icon: '🎓', description: 'Interactive phishing simulations and security awareness training.', category: 'Training', price: 'From $149/mo', features: ['Phishing simulations', 'Progress tracking', 'Custom scenarios'], href: '/micro-saas/ai-cybersecurity-trainer' },
  ],
  'Vulnerability scanning': [
    { name: 'AI Security Scanner', icon: '🔬', description: 'Automated vulnerability scanning across your infrastructure and applications.', category: 'Security', price: 'From $299/mo', features: ['Continuous scanning', 'Risk scoring', 'Remediation guidance'], href: '/ai-lab/autonomous-security-scanner' },
  ],
  'Backup & disaster recovery': [
    { name: 'Enterprise Backup & Disaster Recovery', icon: '💾', description: 'Automated backups, instant recovery, and geo-redundant storage.', category: 'Infrastructure', price: 'From $299/mo', features: ['Automated backups', 'Point-in-time recovery', 'Ransomware protection'], href: '/it-services/enterprise-backup-dr' },
  ],
  'Identity & access management': [
    { name: 'Identity & Access Management (IAM)', icon: '🔑', description: 'Enterprise IAM with SSO, MFA, and privileged access management.', category: 'Security', price: 'From $1,999/mo', features: ['SSO integration', 'MFA', 'Automated provisioning'], href: '/it-services/identity-access-management' },
  ],
  'Predictive analytics & forecasting': [
    { name: 'AI Financial Forecasting', icon: '📊', description: 'Revenue forecasting and budget optimization using AI models.', category: 'Financial AI', price: 'From $899/mo', features: ['Revenue models', 'Scenario planning', 'Variance analysis'], href: '/ai-services/ai-financial-forecasting' },
    { name: 'AI Predictive Analytics', icon: '🎯', description: 'ML-powered predictive models for business outcomes and risk assessment.', category: 'Analytics', price: 'From $599/mo', features: ['Custom ML models', 'Real-time predictions', 'Dashboard integration'], href: '/zion-ai-predictive-analytics' },
  ],
  'Business intelligence dashboards': [
    { name: 'AI Analytics & BI', icon: '📈', description: 'Real-time data processing, predictive analytics, and custom dashboards.', category: 'Analytics', price: 'From $299/mo', features: ['Real-time processing', 'Custom dashboards', 'Automated reporting'], href: '/data-analytics' },
    { name: 'AI Retail Analytics', icon: '🛒', description: 'Store performance, foot traffic analysis, and promotion optimization.', category: 'Retail AI', price: 'From $399/mo', features: ['Traffic analysis', 'Pricing optimization', 'Demand forecasting'], href: '/micro-saas/ai-retail-analytics' },
  ],
  'Financial planning & budgeting': [
    { name: 'AI Financial Forecasting & Planning', icon: '📊', description: 'Revenue, cash flow prediction, and budget optimization.', category: 'Financial AI', price: 'From $899/mo', features: ['Cash flow models', 'Scenario simulation', 'Automated reporting'], href: '/ai-services/ai-financial-forecasting' },
  ],
  'Customer churn prediction': [
    { name: 'AI Customer Churn Predictor', icon: '📉', description: 'Identify at-risk customers with behavioral signals and automated retention.', category: 'Retention AI', price: 'From $399/mo', features: ['Behavioral signals', 'Retention workflows', 'Predictive scoring'], href: '/micro-saas/ai-customer-churn-predictor' },
  ],
  'Knowledge management & search': [
    { name: 'AI Knowledge Graph Builder', icon: '🌐', description: 'Build dynamic knowledge graphs from unstructured data for search and analysis.', category: 'Knowledge AI', price: 'From $799/mo', features: ['Entity extraction', 'Graph visualization', 'Natural language queries'], href: '/ai-services/ai-knowledge-graph-builder' },
    { name: 'AI Knowledge Management System', icon: '📚', description: 'Centralized organizational knowledge with semantic search.', category: 'Knowledge AI', price: 'From $399/mo', features: ['Semantic search', 'Auto-tagging', 'Expert matching'], href: '/ai-services/ai-knowledge-management' },
  ],
  'Code review & quality assurance': [
    { name: 'Zion AI Code Reviewer', icon: '🔍', description: 'AI-powered code review with security scanning and best practice enforcement.', category: 'Dev AI', price: 'From $99/mo', features: ['Automated reviews', 'Security scanning', 'Best practices'], href: '/zion-ai-code-reviewer' },
    { name: 'AI Code Migration & Modernization', icon: '⚙️', description: 'Automatically migrate legacy codebases to modern frameworks.', category: 'Dev AI', price: 'From $2,999/mo', features: ['Code translation', 'Test generation', 'Incremental migration'], href: '/ai-services/ai-code-migration-modernization' },
  ],
  'Legacy code migration': [
    { name: 'AI Code Migration & Modernization', icon: '⚙️', description: 'Automatically migrate legacy codebases to modern frameworks.', category: 'Dev AI', price: 'From $2,999/mo', features: ['Automated translation', 'Dependency mapping', 'Quality scoring'], href: '/ai-services/ai-code-migration-modernization' },
  ],
  'CI/CD pipeline automation': [
    { name: 'AI DevOps Automation', icon: '🔄', description: 'Intelligent CI/CD with automated testing, deployment optimization, and rollback.', category: 'DevOps', price: 'From $499/mo', features: ['Smart pipelines', 'Auto-rollback', 'Performance testing'], href: '/ai-powered-devops' },
  ],
  'Kubernetes & container management': [
    { name: 'Container Orchestration & Kubernetes', icon: '🐳', description: 'Expert K8s deployment, scaling, and optimization with GitOps workflows.', category: 'DevOps', price: 'From $999/mo', features: ['Cluster deployment', 'Auto-scaling', 'Service mesh'], href: '/it-services/kubernetes-management' },
  ],
  'API development & integration': [
    { name: 'API Development & Integration', icon: '🔌', description: 'Design, build, and manage high-performance APIs at enterprise scale.', category: 'Engineering', price: 'From $1,499/mo', features: ['REST/GraphQL', 'Rate limiting', 'Documentation'], href: '/it-services/api-development' },
  ],
  'Cloud migration strategy': [
    { name: 'Cloud Migration & Modernization', icon: '☁️', description: 'Seamless cloud transitions with zero downtime and cost optimization.', category: 'Cloud', price: 'From $2,499/mo', features: ['Assessment & planning', 'Phased migration', 'Cost optimization'], href: '/it-services/cloud-migration' },
  ],
  'Cost optimization & monitoring': [
    { name: 'AI Cloud Cost Optimizer', icon: '💰', description: 'Identify savings, right-size resources, and optimize cloud spend across providers.', category: 'Cloud Optimization', price: 'From $199/mo', features: ['Spend analysis', 'Right-sizing', 'Reserved instance optimizer'], href: '/ai-lab/autonomous-api-cost-estimator' },
  ],
  'Network architecture / SD-WAN': [
    { name: 'Network Architecture & SD-WAN', icon: '🌐', description: 'Enterprise networks with SD-WAN, zero-trust, and traffic optimization.', category: 'Infrastructure', price: 'From $799/mo', features: ['SD-WAN design', 'Zero-trust', 'Traffic optimization'], href: '/it-services/network-architecture-sdwan' },
  ],
  'Multi-cloud management': [
    { name: 'Multi-Cloud Management', icon: '☁️', description: 'Unified management across AWS, Azure, and GCP with cost and performance dashboards.', category: 'Cloud', price: 'From $999/mo', features: ['Unified dashboard', 'Cross-cloud policies', 'Cost analytics'], href: '/it-services/cloud-migration' },
  ],
  'Disaster recovery planning': [
    { name: 'Enterprise Backup & Disaster Recovery', icon: '💾', description: 'Automated backups, instant recovery, and geo-redundant storage.', category: 'Infrastructure', price: 'From $299/mo', features: ['Automated backups', 'Point-in-time recovery', 'Geo-replication'], href: '/it-services/enterprise-backup-dr' },
  ],
};

const categoryOrder = categories.map(c => c.id);

export default function AISolutionsFinder() {
  const [step, setStep] = useState<'category' | 'subcategory' | 'results'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleCategorySelect = useCallback((catId: string) => {
    setSelectedCategory(catId);
    setStep('subcategory');
  }, []);

  const handleSubcategorySelect = useCallback((subId: string) => {
    setSelectedSubcategory(subId);
    setStep('results');
  }, []);

  const handleBack = useCallback(() => {
    if (step === 'subcategory') {
      setSelectedCategory(null);
      setStep('category');
    } else if (step === 'results') {
      setSelectedSubcategory(null);
      setStep('subcategory');
    }
  }, [step]);

  const handleRestart = useCallback(() => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setStep('category');
  }, []);

  const results = selectedSubcategory ? (solutionsMap[selectedSubcategory] || []) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Matchmaking
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Smart Solutions Finder</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Describe your challenge and instantly get matched to the right Zion services with pricing and recommendations.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {['What area?', 'What specifically?', 'Your solutions'].map((label, i) => {
            const stepNum = i + 1;
            const currentSteps = { category: 1, subcategory: 2, results: 3 };
            const num = currentSteps[step];
            const isActive = stepNum === num;
            const isPast = stepNum < num;
            return (
              <div key={label} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-colors ${isActive ? 'bg-blue-500/20 text-blue-400' : isPast ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/30 text-slate-500'}`}>
                  {isPast ? <Check className="w-3.5 h-3.5" /> : <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-current text-xs font-bold">{stepNum}</span>}
                  <span className="hidden sm:inline">{label}</span>
                </div>
                {i < 2 && <ChevronRight className="w-4 h-4 text-slate-600" />}
              </div>
            );
          })}
        </div>

        {/* Step 1: Category */}
        <AnimatePresence mode="wait">
          {step === 'category' && (
            <motion.div key="category" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl font-semibold text-white mb-6 text-center">What area would you like to improve?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-left bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-400">{cat.icon}</div>
                      <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">{cat.label}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{cat.tagline}</p>
                    <div className="flex items-center gap-1 mt-3 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Subcategory */}
          {step === 'subcategory' && (
            <motion.div key="subcategory" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-6">
                <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <span className="text-blue-400 text-sm">Selected: {categories.find(c => c.id === selectedCategory)?.label}</span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 text-center">What specifically do you need help with?</h2>
              <p className="text-slate-400 text-center mb-6">Choose the area closest to your challenge</p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {categories.find(c => c.id === selectedCategory)?.subcategories.map((sub, i) => (
                  <motion.button
                    key={sub}
                    onClick={() => handleSubcategorySelect(sub)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-left bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 group-hover:text-white transition-colors">{sub}</span>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Results */}
          {step === 'results' && (
            <motion.div key="results" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center justify-between mb-6">
                <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button onClick={handleRestart} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Start Over
                </button>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Recommended Solutions</h2>
              <p className="text-slate-400 mb-8">
                Based on &quot;{selectedCategory && categories.find(c => c.id === selectedCategory)?.label}: {selectedSubcategory}&quot;
              </p>

              <div className="space-y-4 mb-10">
                {results.map((svc, i) => (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <span className="text-3xl flex-shrink-0">{svc.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-white font-semibold text-lg">{svc.name}</h3>
                            <span className="text-blue-400 text-xs font-medium">{svc.category}</span>
                          </div>
                          <span className="text-green-400 text-sm font-medium whitespace-nowrap">{svc.price}</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">{svc.description}</p>
                        <ul className="space-y-1 mt-3">
                          {svc.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-slate-300 text-sm">
                              <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link href={svc.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                        View Details <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/consultation" className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-600 hover:border-slate-500 text-white rounded-lg text-sm font-medium transition-colors">
                        Schedule Consultation
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {results.length === 0 && (
                <div className="text-center py-12 bg-slate-800/30 rounded-xl">
                  <p className="text-slate-400 text-lg">No specific matches found for this selection.</p>
                  <p className="text-slate-500 mt-2">But our team can still help! Contact us for a custom consultation.</p>
                  <Link href="/consultation" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Not sure where to start?</h3>
                <p className="text-slate-400 mb-4">Our solutions architects offer free consultations to understand your needs and recommend the perfect stack.</p>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info */}
        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free assessment tool by Zion Tech Group — no sign-up required</p>
        </div>
      </div>
    </div>
  );
}
