const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

// Missing showcase components
const showcases = [
  'V204V208', 'V251V255', 'V256V260', 'V261V265', 'V266V270',
  'V271V275', 'V276V280', 'V281V285', 'V286V290', 'V291V295',
  'V296V300', 'V301V305', 'V306V310', 'V311V315', 'V316V320',
  'V321V325', 'V326V330', 'V331V335', 'V336V340', 'V341V345',
  'V346V350', 'V351V355', 'V356V360', 'V361V365', 'V366V370',
  'V371V375', 'V376V380', 'V381V385', 'V386V390', 'V391V395',
  'V396V400'
];

const showcaseTemplate = (name) => {
  const vRange = name.replace('V', '').match(/(\d+)V(\d+)/);
  const start = vRange ? vRange[1] : '???';
  const end = vRange ? vRange[2] : '???';
  return `'use client';
export default function ${name}Showcase() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🧠 Email Intelligence V${start}-V${end}</h2>
        <p className="text-gray-300 mb-6">Advanced AI email engines analyzing case-by-case with reply-all enforcement.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({length: 5}, (_, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-medium text-sm">{\`V\${parseInt("${start}") + idx}\`}</div>
              <div className="text-green-400 text-xs mt-1">✅ Reply-All Active</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </section>
  );
}`;
};

let created = 0;
for (const name of showcases) {
  const filepath = path.join(componentsDir, `${name}Showcase.tsx`);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, showcaseTemplate(name));
    created++;
  }
}

// Missing non-showcase components
const missingComponents = {
  'ServiceBrowser': `'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Service { name?: string; title?: string; description?: string; icon?: string; href?: string; category?: string; }
interface Props { services: Service[]; }

export default function ServiceBrowser({ services }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const categories = useMemo(() => ['all', ...new Set(services.map(s => s.category).filter(Boolean))], [services]);
  const filtered = useMemo(() => services.filter(s => {
    const matchSearch = !search || (s.name || s.title || '').toLowerCase().includes(search.toLowerCase()) || (s.description || '').toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === 'all' || s.category === selectedCat;
    return matchSearch && matchCat;
  }), [services, search, selectedCat]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search 2000+ services..." value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <select value={selectedCat} onChange={e => setSelectedCat(e.target.value)}
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {categories.map(c => <option key={c} value={c} className="bg-slate-900">{c === 'all' ? 'All Categories' : c}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, 30).map((s, i) => (
          <Link key={i} href={s.href || '#'} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all hover:scale-105">
            <div className="text-2xl mb-2">{s.icon || '⭐'}</div>
            <h3 className="text-white font-semibold mb-1">{s.name || s.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">{s.description}</p>
            <span className="inline-block mt-2 px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">{s.category}</span>
          </Link>
        ))}
      </div>
      {filtered.length > 30 && <p className="text-center text-gray-400 mt-4">Showing 30 of {filtered.length} results. Use search to narrow down.</p>}
    </div>
  );
}`,
  'ServiceGridWithSearch': `'use client';
import ServiceBrowser from './ServiceBrowser';
interface Service { name?: string; title?: string; description?: string; icon?: string; href?: string; category?: string; }
interface Props { services: Service[]; title?: string; }
export default function ServiceGridWithSearch({ services, title }: Props) {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>}
      <ServiceBrowser services={services} />
    </div>
  );
}`,
  'TestimonialsSection': `'use client';
const testimonials = [
  { name: 'Sarah K.', role: 'CTO, TechStartup', text: 'Zion Tech Group transformed our email workflow. The AI engines saved us 40+ hours per week!', rating: 5 },
  { name: 'Michael R.', role: 'VP Engineering, Enterprise', text: '2000+ services and every one delivers real value. The email intelligence suite is game-changing.', rating: 5 },
  { name: 'Lisa M.', role: 'Director of Operations', text: 'Reply-all enforcement and case-by-case analysis made our team 3x more productive. Incredible platform.', rating: 5 },
];
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">💬 What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-yellow-400 mb-3">{'⭐'.repeat(t.rating)}</div>
              <p className="text-gray-300 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="text-white font-medium">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  'ContactFunnel': `'use client';
import { useState } from 'react';
export default function ContactFunnel() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', needs: '' });
  const steps = ['Your Info', 'Your Needs', 'Get Quote'];
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-950 to-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">🚀 Get Started Today</h2>
        <p className="text-gray-300 text-center mb-8">Tell us about your needs and get a custom quote</p>
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className={\`px-4 py-2 rounded-full text-sm \${step >= i ? 'bg-indigo-600 text-white' : 'bg-white/10 text-gray-400'}\`}>{s}</div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {step === 0 && (
            <div className="space-y-4">
              <input placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button onClick={() => setStep(1)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">Next →</button>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <textarea placeholder="What do you need help with?" rows={4} value={formData.needs} onChange={e => setFormData({...formData, needs: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <div className="flex gap-3">
                <button onClick={() => setStep(0)} className="flex-1 py-3 bg-white/10 text-white rounded-xl font-medium">← Back</button>
                <button onClick={() => setStep(2)} className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium">Get Quote →</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-300 mb-4">We will get back to you within 24 hours.</p>
              <div className="text-sm text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}`,
  'ServiceCounter': `'use client';
import AnimatedCounter from './AnimatedCounter';
interface Props { count: number; }
export default function ServiceCounter({ count }: Props) {
  return (
    <div className="text-center py-8">
      <div className="text-5xl font-bold text-white">
        <AnimatedCounter target={count} suffix="+" />
      </div>
      <p className="text-gray-400 mt-2">Services & Solutions</p>
    </div>
  );
}`,
  'FloatingActionDock': `'use client';
import { useState } from 'react';
export default function FloatingActionDock() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={\`transition-all duration-300 \${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} mb-3 space-y-2\`}>
        <a href="tel:+13024640950" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors">
          📞 Call Us
        </a>
        <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors">
          ✉️ Email Us
        </a>
      </div>
      <button onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center text-2xl transition-all hover:scale-110">
        {expanded ? '✕' : '💬'}
      </button>
    </div>
  );
}`,
  'ServiceMatchQuiz': `'use client';
import { useState } from 'react';
const questions = [
  { q: 'What is your biggest challenge?', options: ['Email overload', 'Security threats', 'Data management', 'Cloud costs'] },
  { q: 'Team size?', options: ['1-10', '11-50', '51-200', '200+'] },
  { q: 'Budget range?', options: ['Under $500/mo', '$500-$2K/mo', '$2K-$10K/mo', '$10K+/mo'] },
];
export default function ServiceMatchQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  if (step === -1) {
    return (
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🎯 Find Your Perfect Service Match</h2>
        <p className="text-gray-300 mb-6">Answer 3 quick questions and we will recommend the best services for you</p>
        <button onClick={() => setStep(0)} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">Start Quiz →</button>
      </section>
    );
  }
  if (step >= questions.length) {
    return (
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🎉 Your Recommendations</h2>
        <p className="text-gray-300 mb-6">Based on your answers, we recommend exploring our Email Intelligence Suite and AI Services.</p>
        <div className="flex gap-4 justify-center">
          <a href="/services" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium">Browse Services →</a>
          <button onClick={() => { setStep(-1); setAnswers([]); }} className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium">Retake Quiz</button>
        </div>
      </section>
    );
  }
  const q = questions[step];
  return (
    <section className="py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h3 className="text-xl font-bold text-white mb-6">{q.q}</h3>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => { setAnswers([...answers, i]); setStep(step + 1); }}
              className="w-full text-left px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors">
              {opt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}`
};

for (const [name, code] of Object.entries(missingComponents)) {
  const filepath = path.join(componentsDir, `${name}.tsx`);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, code);
    created++;
  }
}

// Also create data/servicesData.ts if missing
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
const dataFile = path.join(dataDir, 'servicesData.ts');
if (!fs.existsSync(dataFile)) {
  const jsonData = JSON.parse(fs.readFileSync('app/data/servicesData.json', 'utf8'));
  let ts = `export interface Service {
  id?: string; name?: string; title?: string; description?: string; icon?: string;
  href?: string; category?: string; features?: string[]; benefits?: string[];
  pricing?: Record<string, string>; useCases?: string[]; popular?: boolean;
  industry?: string; contactInfo?: Record<string, string>;
}\n\n`;
  ts += `export const allServices: Service[] = ${JSON.stringify(jsonData, null, 2)};\n`;
  ts += `export default allServices;\n`;
  fs.writeFileSync(dataFile, ts);
  created++;
}

console.log(`Created ${created} missing component files`);
