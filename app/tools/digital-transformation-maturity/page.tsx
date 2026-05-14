'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Users, Server, Database, Sparkles, TrendingUp, Target, ArrowRight, ChevronLeft, Check, AlertTriangle, Mail, Phone, MapPin, ExternalLink, Star, Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  text: string;
  weight: number;
  options: { label: string; score: number; description: string }[];
}

interface Pillar {
  name: string;
  icon: string;
  questions: Question[];
}

const pillars: Pillar[] = [
  {
    name: 'Culture & Organization',
    icon: 'Users',
    questions: [
      { id: 'digital-culture', text: 'How digitally mature is your organizational culture?', weight: 3, options: [
        { label: 'Traditional', score: 1, description: 'Paper-based processes, low tech adoption' },
        { label: 'Aware', score: 3, description: 'Some teams use digital tools independently' },
        { label: 'Adopting', score: 5, description: 'Organization-wide digital initiatives underway' },
        { label: 'Digital-First', score: 7, description: 'Digital mindset embedded in all operations' },
      ]},
      { id: 'change-management', text: 'How effective is your change management process?', weight: 3, options: [
        { label: 'Ad-hoc', score: 1, description: 'Changes happen reactively without structure' },
        { label: 'Basic', score: 3, description: 'Some communication but inconsistent adoption' },
        { label: 'Structured', score: 5, description: 'Formal process with training programs' },
        { label: 'Excellent', score: 7, description: 'Agile change with continuous feedback loops' },
      ]},
      { id: 'leadership', text: 'Does leadership champion digital transformation?', weight: 3, options: [
        { label: 'Resistant', score: 1, description: 'Leadership prefers status quo' },
        { label: 'Passive', score: 3, description: 'Approved but not actively involved' },
        { label: 'Supportive', score: 5, description: 'Leaders advocate for digital initiatives' },
        { label: 'Visionary', score: 7, description: 'Leadership drives digital strategy personally' },
      ]},
    ],
  },
  {
    name: 'Technology Infrastructure',
    icon: 'Server',
    questions: [
      { id: 'modern-stack', text: 'How modern is your technology stack?', weight: 3, options: [
        { label: 'Legacy', score: 1, description: 'Outdated systems with no modernization plan' },
        { label: 'Mixed', score: 3, description: 'Some modern apps alongside legacy systems' },
        { label: 'Modernizing', score: 5, description: 'Active migration to modern platforms' },
        { label: 'Cloud-Native', score: 7, description: 'Fully modern, cloud-native architecture' },
      ]},
      { id: 'integration', text: 'How well do your systems integrate with each other?', weight: 3, options: [
        { label: 'Siloed', score: 1, description: 'Systems operate independently, manual data entry' },
        { label: 'Point-to-Point', score: 3, description: 'Some direct integrations between key systems' },
        { label: 'API-Driven', score: 5, description: 'Central API gateway connects most systems' },
        { label: 'Event-Driven', score: 7, description: 'Real-time event streaming across ecosystem' },
      ]},
      { id: 'automation', text: 'What percentage of operations are automated?', weight: 2, options: [
        { label: '< 10%', score: 1, description: 'Most tasks done manually' },
        { label: '10-30%', score: 3, description: 'Basic task automation in place' },
        { label: '30-60%', score: 5, description: 'Workflow orchestration across departments' },
        { label: '> 60%', score: 7, description: 'End-to-end process automation with AI' },
      ]},
    ],
  },
  {
    name: 'Data & Analytics',
    icon: 'Database',
    questions: [
      { id: 'data-governance', text: 'How mature is your data governance framework?', weight: 3, options: [
        { label: 'None', score: 1, description: 'No formal data management policies' },
        { label: 'Basic', score: 3, description: 'Some data standards but inconsistent enforcement' },
        { label: 'Structured', score: 5, description: 'Data stewardship with quality metrics' },
        { label: 'Advanced', score: 7, description: 'Automated governance, real-time quality monitoring' },
      ]},
      { id: 'analytics-maturity', text: 'How do you use data for decision-making?', weight: 3, options: [
        { label: 'Intuition', score: 1, description: 'Decisions based on experience, not data' },
        { label: 'Descriptive', score: 3, description: 'Dashboards show what happened' },
        { label: 'Predictive', score: 5, description: 'Models predict future outcomes' },
        { label: 'Prescriptive', score: 7, description: 'AI recommends optimal actions automatically' },
      ]},
      { id: 'data-architecture', text: 'What is your data architecture approach?', weight: 2, options: [
        { label: 'Fragmented', score: 1, description: 'Data scattered across multiple disconnected systems' },
        { label: 'Warehouse', score: 3, description: 'Centralized data warehouse for reporting' },
        { label: 'Lake', score: 5, description: 'Data lake with structured and unstructured data' },
        { label: 'Lakehouse/Mesh', score: 7, description: 'Data mesh with domain-specific ownership' },
      ]},
    ],
  },
  {
    name: 'Customer Experience',
    icon: 'Star',
    questions: [
      { id: 'digital-cx', text: 'How digital is your customer experience?', weight: 3, options: [
        { label: 'In-Person', score: 1, description: 'Primarily face-to-face or phone interactions' },
        { label: 'Multi-Channel', score: 3, description: 'Present on multiple channels but not integrated' },
        { label: 'Omnichannel', score: 5, description: 'Seamless experience across all touchpoints' },
        { label: 'AI-Enhanced', score: 7, description: 'AI-powered personalization and predictive support' },
      ]},
      { id: 'customer-feedback', text: 'How do you collect and act on customer feedback?', weight: 2, options: [
        { label: 'Rarely', score: 1, description: 'Infrequent surveys, no systematic process' },
        { label: 'Quarterly', score: 3, description: 'Regular surveys with periodic review' },
        { label: 'Continuous', score: 5, description: 'Real-time feedback with rapid response' },
        { label: 'AI-Analyzed', score: 7, description: 'Sentiment analysis across all channels, auto-alerts' },
      ]},
      { id: 'digital-innovation', text: 'How often do you launch customer-facing digital innovations?', weight: 2, options: [
        { label: 'Rarely', score: 1, description: 'Years between digital feature launches' },
        { label: 'Annually', score: 3, description: 'Once or twice per year' },
        { label: 'Quarterly', score: 5, description: 'Regular releases with agile development' },
        { label: 'Continuous', score: 7, description: 'Feature flags, A/B testing, weekly deployments' },
      ]},
    ],
  },
  {
    name: 'Innovation & Agility',
    icon: 'Zap',
    questions: [
      { id: 'innovation-culture', text: 'How does your organization foster innovation?', weight: 3, options: [
        { label: 'No program', score: 1, description: 'Innovation is not prioritized' },
        { label: 'Sporadic', score: 3, description: 'Occasional hackathons or idea campaigns' },
        { label: 'Structured', score: 5, description: 'Dedicated innovation team with budgets' },
        { label: 'Embedded', score: 7, description: 'Innovation KPIs for all teams, continuous experiments' },
      ]},
      { id: 'agile', text: 'What is your development methodology?', weight: 3, options: [
        { label: 'Waterfall', score: 1, description: 'Long release cycles, rigid planning' },
        { label: 'Scrum', score: 3, description: 'Sprint-based but with heavy overhead' },
        { label: 'Agile+DevOps', score: 5, description: 'CI/CD pipelines with automated testing' },
        { label: 'GitOps+AI', score: 7, description: 'Infrastructure-as-code, AI-assisted development' },
      ]},
      { id: 'partnerships', text: 'How do you leverage external innovation ecosystems?', weight: 2, options: [
        { label: 'None', score: 1, description: 'All development done exclusively in-house' },
        { label: 'Vendor-Driven', score: 3, description: 'Rely primarily on vendor solutions' },
        { label: 'Collaborative', score: 5, description: 'Partner with startups, universities, or open source' },
        { label: 'Ecosystem Leader', score: 7, description: 'Active in industry consortiums, API marketplace' },
      ]},
    ],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Server, Database, Star, Zap,
};

function PillarRadarChart({ scores }: { scores: { name: string; pct: number }[] }) {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  const levels = 5;
  const n = scores.length;

  const getPoint = (index: number, pct: number) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    const r = (pct / 100) * maxRadius;
    return { x: centerX + r * Math.cos(angle), y: centerY + r * Math.sin(angle) };
  };

  const dataPoints = scores.map((s, i) => getPoint(i, s.pct));
  const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  const gridPolygons = [];
  for (let l = 1; l <= levels; l++) {
    const pct = (l / levels) * 100;
    const pts = scores.map((_, i) => getPoint(i, pct));
    gridPolygons.push(pts.map(p => `${p.x},${p.y}`).join(' '));
  }

  const labels = scores.map((s, i) => {
    const p = getPoint(i, 115);
    return { ...p, name: s.name, pct: s.pct };
  });

  return (
    <svg viewBox="0 0 300 300" className="w-72 h-72 mx-auto">
      {gridPolygons.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1" />
      ))}
      {scores.map((_, i) => {
        const p = getPoint(i, 100);
        return <line key={i} x1={centerX} y1={centerY} x2={p.x} y2={p.y} stroke="rgba(148,163,184,0.2)" strokeWidth="1" />;
      })}
      <polygon points={polygonPoints} fill="rgba(59,130,246,0.2)" stroke="rgb(59,130,246)" strokeWidth="2" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="rgb(59,130,246)" />
      ))}
      {labels.map((l, i) => (
        <g key={i}>
          <text x={l.x} y={l.y - 8} textAnchor="middle" fill="rgb(148,163,184)" fontSize="9" fontWeight="500">{l.name}</text>
          <text x={l.x} y={l.y + 6} textAnchor="middle" fill="rgb(59,130,246)" fontSize="11" fontWeight="700">{l.pct}%</text>
        </g>
      ))}
    </svg>
  );
}

export default function DigitalTransformationMaturity() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState<'assess' | 'report'>('assess');

  const totalQuestions = pillars.reduce((n, p) => n + p.questions.length, 0);
  const allAnswered = Object.keys(answers).length === totalQuestions;

  const scores = useMemo(() => {
    const pillarScores = pillars.map(p => {
      const maxScore = p.questions.reduce((n, q) => n + (q.weight * 7), 0);
      const score = p.questions.reduce((n, q) => n + (q.weight * (answers[q.id] || 0)), 0);
      const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      const level = pct >= 80 ? 'Leading' : pct >= 60 ? 'Developing' : pct >= 40 ? 'Emerging' : 'Initial';
      const color = pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-blue-400' : pct >= 40 ? 'text-yellow-400' : 'text-red-400';
      const barColor = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-blue-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500';
      return { name: p.name, maxScore, score, pct, level, color, barColor };
    });

    const totalMax = pillarScores.reduce((n, s) => n + s.maxScore, 0);
    const totalScore = pillarScores.reduce((n, s) => n + s.score, 0);
    const overallPct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    const overallLevel = overallPct >= 85 ? 'Digital Leader' : overallPct >= 65 ? 'Transforming' : overallPct >= 45 ? 'Emerging' : 'Starting';
    const overallColor = overallPct >= 85 ? 'text-green-400' : overallPct >= 65 ? 'text-blue-400' : overallPct >= 45 ? 'text-yellow-400' : 'text-red-400';

    const weakPillars = pillarScores.filter(s => s.pct < 50);
    const strongPillars = pillarScores.filter(s => s.pct >= 65);

    const topRecommendations: { icon: string; text: string }[] = [];
    pillarScores
      .filter(s => s.pct < 60)
      .sort((a, b) => a.pct - b.pct)
      .forEach(s => {
        topRecommendations.push({
          icon: 'AlertTriangle',
          text: `${s.name} (${s.level}): Invest in ${s.name.toLowerCase()} improvement — currently your weakest pillar at ${s.pct}%`,
        });
      });
    if (topRecommendations.length === 0) {
      topRecommendations.push({ icon: 'Check', text: 'All pillars show strong maturity — focus on maintaining momentum and continuous innovation' });
    }
    if (strongPillars.length > 0) {
      topRecommendations.push({
        icon: 'Star',
        text: `Leverage strengths in ${strongPillars.map(s => s.name).join(' and ')} as enablers for weaker areas`,
      });
    }

    return {
      pillarScores,
      totalScore,
      totalMax,
      overallPct,
      overallLevel,
      overallColor,
      weakPillars,
      strongPillars,
      topRecommendations,
    };
  }, [answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-4">
            <BarChart3 className="w-4 h-4" />
            Digital Transformation Assessment
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Digital Transformation Maturity Scorecard</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Evaluate your organization across 5 critical pillars and get a personalized transformation roadmap with actionable priorities.
          </p>
        </motion.div>

        {step === 'assess' ? (
          <div className="space-y-6">
            {pillars.map((pillar, pIdx) => {
              const Icon = iconMap[pillar.icon];
              return (
                <motion.div key={pillar.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: pIdx * 0.1 }} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    {Icon && <Icon className="w-5 h-5 text-indigo-400" />}
                    {pillar.name}
                  </h2>
                  <p className="text-slate-500 text-xs mb-4">Pillar {pIdx + 1} of {pillars.length}</p>
                  <div className="space-y-4">
                    {pillar.questions.map(q => (
                      <div key={q.id}>
                        <label className="text-white text-sm font-medium mb-2 block">{q.text}</label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {q.options.map(opt => (
                            <button key={opt.label} onClick={() => setAnswers(p => ({ ...p, [q.id]: opt.score }))}
                              className={`text-left p-3 rounded-lg border transition-all ${
                                answers[q.id] === opt.score ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                              }`}>
                              <p className="text-sm font-medium">{opt.label}</p>
                              <p className="text-xs text-slate-500">{opt.description}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
            <div className="text-center sticky bottom-4">
              <button onClick={() => setStep('report')} disabled={!allAnswered}
                className={`px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto ${
                  allAnswered ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}><TrendingUp className="w-5 h-5" /> Generate Transformation Roadmap</button>
              <p className="text-slate-500 text-xs mt-2">{Object.keys(answers).length}/{totalQuestions} answered</p>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Hero */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center mb-8">
                <BarChart3 className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Transformation Maturity Overview</h2>
                <div className="relative w-36 h-36 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(51 65 85)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" className={scores.overallColor.replace('text', 'stroke')} strokeWidth="8" strokeDasharray={`${scores.overallPct * 2.64} 264`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-bold ${scores.overallColor}`}>{scores.overallPct}%</span>
                    <span className="text-slate-400 text-xs">Maturity</span>
                  </div>
                </div>
                <p className={`text-xl font-semibold ${scores.overallColor} mb-1`}>{scores.overallLevel}</p>
                <p className="text-slate-400">
                  {scores.overallPct >= 65
                    ? 'Strong digital foundation. Targeted improvements will accelerate transformation.'
                    : 'Significant transformation potential. Focus on weakest pillars first.'}
                </p>
              </div>

              {/* Radar Chart */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6 text-center">
                <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2"><Target className="w-5 h-5 text-indigo-400" /> 5-Pillar Maturity Radar</h3>
                <PillarRadarChart scores={scores.pillarScores.map(p => ({ name: p.name.split('/')[0].trim(), pct: p.pct }))} />
              </div>

              {/* Pillars Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {scores.pillarScores.map(s => (
                  <div key={s.name} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                    <h3 className="text-white font-semibold mb-3 text-sm">{s.name}</h3>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 mb-2"><div className={`h-3 rounded-full ${s.barColor} transition-all`} style={{ width: `${s.pct}%` }} /></div>
                    <div className="flex justify-between text-sm"><span className={s.color}>{s.pct}%</span><span className="text-slate-500 text-xs">{s.level}</span></div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-400" /> Your Transformation Roadmap</h3>
                <ul className="space-y-3">
                  {scores.topRecommendations.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      {r.icon === 'AlertTriangle' && <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />}
                      {r.icon === 'Check' && <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />}
                      {r.icon === 'Star' && <Star className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />}
                      {r.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry Benchmarks */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-400" /> How You Compare</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Industry Average', pct: 45, color: 'bg-slate-500' },
                    { label: 'Top 25%', pct: 65, color: 'bg-blue-500' },
                    { label: 'Top 10%', pct: 85, color: 'bg-green-500' },
                    { label: 'Your Score', pct: scores.overallPct, color: 'bg-indigo-500', highlight: true },
                  ].map(b => (
                    <div key={b.label} className={`flex items-center gap-3 p-2 rounded-lg ${b.highlight ? 'bg-indigo-500/10 border border-indigo-500/30' : ''}`}>
                      <span className="text-slate-300 text-sm w-32">{b.label}</span>
                      <div className="flex-1 bg-slate-700/50 rounded-full h-2"><div className={`h-2 rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} /></div>
                      <span className={`text-sm font-semibold ${b.highlight ? 'text-indigo-400' : 'text-slate-400'}`}>{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Services */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Let Zion Guide Your Digital Transformation</h3>
                <p className="text-slate-400 mb-6">From strategy to execution — our experts partner with you at every stage of your transformation journey.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/digital-transformation" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Explore Transformation Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => { setStep('assess'); setAnswers({}); }} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Retake Assessment
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free assessment tool by Zion Tech Group — based on McKinsey, Gartner & MIT digital transformation frameworks</p>
        </div>
      </div>
    </div>
  );
}
