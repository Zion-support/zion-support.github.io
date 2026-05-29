'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  logo: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  quote: string;
  quoteAuthor: string;
  quoteTitle: string;
  services: string[];
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp-email',
    title: 'How TechCorp Reduced Email Response Time by 78%',
    company: 'TechCorp Solutions',
    industry: 'Technology',
    logo: '💼',
    challenge: 'TechCorp was drowning in 10,000+ emails per month. Critical messages were getting lost, response times averaged 48 hours, and customer satisfaction was declining. Their support team of 15 people couldn\'t keep up with the volume.',
    solution: 'Implemented our V79 Email Intelligence Engine with Context Memory Bank, Intent Reasoning, and Multi-Action Orchestrator. The system automatically categorizes emails, detects urgency, suggests responses, and executes follow-up actions.',
    results: [
      { metric: 'Response Time', value: '8.5 hours', improvement: '78% reduction' },
      { metric: 'Customer Satisfaction', value: '94%', improvement: '+31 points' },
      { metric: 'Team Productivity', value: '3.2x', improvement: 'increase' },
      { metric: 'Email Volume Handled', value: '15,000/mo', improvement: '50% more capacity' },
    ],
    quote: 'The V79 system transformed our email operations. We went from chaos to clarity in weeks. Our team now focuses on high-value interactions while the AI handles routine responses.',
    quoteAuthor: 'Sarah Chen',
    quoteTitle: 'VP of Customer Success, TechCorp',
    services: ['Email Context Memory Bank', 'Intent Reasoning Engine', 'Multi-Action Orchestrator', 'Reply-All Enforcement'],
    featured: true,
  },
  {
    id: 'healthplus-crm',
    title: 'HealthPlus Achieves 340% ROI with AI-Powered CRM',
    company: 'HealthPlus Medical Group',
    industry: 'Healthcare',
    logo: '🏥',
    challenge: 'HealthPlus struggled with patient follow-ups, appointment no-shows (35% rate), and manual data entry. Their staff spent 60% of time on administrative tasks instead of patient care.',
    solution: 'Deployed AI Customer Success Platform with automated onboarding, predictive health scoring, and intelligent follow-up sequences. Integrated with their EHR system for seamless data flow.',
    results: [
      { metric: 'No-Show Rate', value: '12%', improvement: '66% reduction' },
      { metric: 'Patient Retention', value: '91%', improvement: '+28 points' },
      { metric: 'Admin Time Saved', value: '40 hrs/week', improvement: '60% reduction' },
      { metric: 'ROI', value: '340%', improvement: 'in 12 months' },
    ],
    quote: 'This platform paid for itself in 3 months. Our patients feel more cared for, our staff is happier, and our revenue has increased significantly.',
    quoteAuthor: 'Dr. Michael Torres',
    quoteTitle: 'CEO, HealthPlus Medical Group',
    services: ['AI Customer Success Platform', 'AI Onboarding Automator', 'Predictive Analytics', 'Workflow Automator'],
    featured: true,
  },
  {
    id: 'retailmax-inventory',
    title: 'RetailMax Cuts Inventory Costs by $2.4M Annually',
    company: 'RetailMax Corporation',
    industry: 'Retail',
    logo: '🛍️',
    challenge: 'RetailMax had $8M in excess inventory, frequent stockouts on popular items, and poor demand forecasting. Their manual inventory system couldn\'t handle 50,000+ SKUs across 120 locations.',
    solution: 'Implemented AI Inventory Optimization Platform with predictive analytics, automated reorder points, and supplier coordination. Integrated with their ERP and POS systems.',
    results: [
      { metric: 'Inventory Costs', value: '$2.4M', improvement: 'annual savings' },
      { metric: 'Stockout Rate', value: '2.1%', improvement: '89% reduction' },
      { metric: 'Inventory Turnover', value: '8.7x', improvement: '45% increase' },
      { metric: 'Forecast Accuracy', value: '94%', improvement: '+38 points' },
    ],
    quote: 'The AI system sees patterns we never could. We\'re now running lean inventory while maintaining 98% in-stock rates. This is a game-changer for retail.',
    quoteAuthor: 'Jennifer Williams',
    quoteTitle: 'COO, RetailMax Corporation',
    services: ['AI Inventory Optimization', 'Predictive Analytics', 'Supply Chain Intelligence', 'Revenue Intelligence'],
    featured: true,
  },
  {
    id: 'financepro-compliance',
    title: 'FinancePro Achieves 100% Compliance with Zero Audit Findings',
    company: 'FinancePro Advisors',
    industry: 'Financial Services',
    logo: '💰',
    challenge: 'FinancePro faced increasing regulatory scrutiny, manual compliance processes, and audit preparation taking 200+ hours. They risked fines and reputation damage from compliance gaps.',
    solution: 'Deployed AI Compliance Monitoring Platform with continuous monitoring, automated reporting, and risk assessment. Integrated with their document management and CRM systems.',
    results: [
      { metric: 'Audit Findings', value: '0', improvement: '100% compliance' },
      { metric: 'Audit Prep Time', value: '12 hours', improvement: '94% reduction' },
      { metric: 'Compliance Costs', value: '$180K', improvement: 'annual savings' },
      { metric: 'Risk Incidents', value: '0', improvement: 'proactive prevention' },
    ],
    quote: 'We went from dreading audits to welcoming them. The system catches issues before they become problems. Our regulators are impressed with our compliance posture.',
    quoteAuthor: 'Robert Martinez',
    quoteTitle: 'Chief Compliance Officer, FinancePro',
    services: ['AI Compliance Monitor', 'Document Intelligence', 'Workflow Automator', 'Predictive Analytics'],
    featured: false,
  },
  {
    id: 'manufactureco-maintenance',
    title: 'ManufactureCo Reduces Downtime by 73% with Predictive Maintenance',
    company: 'ManufactureCo Industries',
    industry: 'Manufacturing',
    logo: '🏭',
    challenge: 'ManufactureCo experienced frequent equipment failures, unplanned downtime costing $50K/hour, and reactive maintenance. Their 200+ machines had no predictive monitoring.',
    solution: 'Implemented AI Predictive Analytics Platform with IoT sensor integration, failure prediction, and automated maintenance scheduling. Connected to their MES and CMMS systems.',
    results: [
      { metric: 'Unplanned Downtime', value: '73%', improvement: 'reduction' },
      { metric: 'Maintenance Costs', value: '$1.2M', improvement: 'annual savings' },
      { metric: 'Equipment Lifespan', value: '+3.2 years', improvement: 'average increase' },
      { metric: 'Production Output', value: '+18%', improvement: 'increase' },
    ],
    quote: 'We now predict failures 2-3 weeks before they happen. Our maintenance is proactive, not reactive. The ROI was immediate and substantial.',
    quoteAuthor: 'David Park',
    quoteTitle: 'Plant Manager, ManufactureCo',
    services: ['AI Predictive Analytics', 'IoT Integration', 'Workflow Automator', 'Revenue Intelligence'],
    featured: false,
  },
  {
    id: 'edulearn-engagement',
    title: 'EduLearn Boosts Student Completion Rates by 89%',
    company: 'EduLearn Online Academy',
    industry: 'Education',
    logo: '🎓',
    challenge: 'EduLearn had only 23% course completion rates, low student engagement, and high churn. Their one-size-fits-all approach wasn\'t working for 50,000+ diverse learners.',
    solution: 'Deployed AI Customer Journey Analytics with personalized learning paths, engagement prediction, and automated interventions. Integrated with their LMS and student information system.',
    results: [
      { metric: 'Completion Rate', value: '89%', improvement: 'increase' },
      { metric: 'Student Engagement', value: '4.2x', improvement: 'increase' },
      { metric: 'Student Retention', value: '78%', improvement: '+41 points' },
      { metric: 'Revenue per Student', value: '+$840', improvement: 'increase' },
    ],
    quote: 'The AI understands each student\'s needs and intervenes before they disengage. Our completion rates are now industry-leading, and students love the personalized experience.',
    quoteAuthor: 'Dr. Amanda Foster',
    quoteTitle: 'Chief Learning Officer, EduLearn',
    services: ['AI Customer Journey Analytics', 'Predictive Analytics', 'Workflow Automator', 'Customer Success Platform'],
    featured: false,
  },
];

const industries = ['All', 'Technology', 'Healthcare', 'Retail', 'Financial Services', 'Manufacturing', 'Education'];

export default function CaseStudiesHub() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold mb-4">
              📚 Customer Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how companies like yours achieved extraordinary results with our AI-powered solutions.
              Average ROI: <span className="text-green-400 font-bold">340%</span> in 12 months.
            </p>
          </motion.div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">⭐ Featured Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCaseStudy(study)}
                className="glass-card p-6 cursor-pointer hover:border-purple-500/50 hover:scale-105 transition-all"
              >
                <div className="text-5xl mb-4">{study.logo}</div>
                <div className="text-sm text-purple-400 font-semibold mb-2">{study.industry}</div>
                <h4 className="text-lg font-bold text-white mb-3">{study.company}</h4>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{study.title}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {study.results.slice(0, 2).map((result, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-green-400 font-bold text-lg">{result.value}</div>
                      <div className="text-slate-400 text-xs">{result.improvement}</div>
                    </div>
                  ))}
                </div>
                <div className="text-purple-400 text-sm font-semibold">Read Full Story →</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedIndustry === industry
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCaseStudy(study)}
                className="glass-card p-6 cursor-pointer hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{study.logo}</div>
                  <div className="flex-1">
                    <div className="text-xs text-purple-400 font-semibold mb-1">{study.industry}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{study.company}</h4>
                    <p className="text-slate-300 text-sm">{study.title}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="text-green-400 font-bold text-sm">{result.value}</div>
                      <div className="text-slate-500 text-xs">{result.metric}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="text-purple-400 text-sm font-semibold">View Case Study →</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-slate-400 text-sm">Average ROI</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">89%</div>
            <div className="text-slate-400 text-sm">Customer Satisfaction</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-slate-400 text-sm">Success Stories</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Industries Served</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-slate-300 mb-6">
              Join 500+ companies achieving extraordinary results with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/roi-calculator"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-transform"
              >
                Calculate Your ROI
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCaseStudy(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedCaseStudy.logo}</div>
                  <div>
                    <div className="text-sm text-purple-400 font-semibold mb-1">{selectedCaseStudy.industry}</div>
                    <h3 className="text-2xl font-bold text-white">{selectedCaseStudy.company}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <h4 className="text-xl font-bold text-white mb-6">{selectedCaseStudy.title}</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-bold text-purple-400 mb-2">The Challenge</h5>
                  <p className="text-slate-300">{selectedCaseStudy.challenge}</p>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-purple-400 mb-2">Our Solution</h5>
                  <p className="text-slate-300">{selectedCaseStudy.solution}</p>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-purple-400 mb-4">Results</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCaseStudy.results.map((result, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-green-400 font-bold text-2xl mb-1">{result.value}</div>
                        <div className="text-slate-400 text-sm">{result.metric}</div>
                        <div className="text-purple-400 text-xs mt-1">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-3">💬</div>
                  <p className="text-white text-lg italic mb-4">"{selectedCaseStudy.quote}"</p>
                  <div>
                    <div className="text-white font-bold">{selectedCaseStudy.quoteAuthor}</div>
                    <div className="text-slate-400 text-sm">{selectedCaseStudy.quoteTitle}</div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-purple-400 mb-3">Services Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.services.map((service, i) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl text-center hover:scale-105 transition-transform"
                >
                  Get Similar Results
                </a>
                <a
                  href="/roi-calculator"
                  className="flex-1 px-6 py-3 bg-white/10 text-white font-bold rounded-xl text-center hover:bg-white/20 transition-colors"
                >
                  Calculate Your ROI
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
