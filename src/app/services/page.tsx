import { allServices } from '@/app/data/servicesData';

export default function Services() {
  const categories = [
    { key: 'ai', label: '🤖 AI & Machine Learning', color: 'blue' },
    { key: 'it', label: '🖥️ IT Infrastructure', color: 'green' },
    { key: 'security', label: '🔒 Cybersecurity', color: 'red' },
    { key: 'cloud', label: '☁️ Cloud Services', color: 'cyan' },
    { key: 'data', label: '📊 Data & Analytics', color: 'purple' },
    { key: 'automation', label: '⚡ Automation', color: 'amber' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'border-blue-500/30 hover:border-blue-400',
    green: 'border-green-500/30 hover:border-green-400',
    red: 'border-red-500/30 hover:border-red-400',
    cyan: 'border-cyan-500/30 hover:border-cyan-400',
    purple: 'border-purple-500/30 hover:border-purple-400',
    amber: 'border-amber-500/30 hover:border-amber-400',
  };

  const titleColor: Record<string, string> = {
    blue: 'group-hover:text-blue-400',
    green: 'group-hover:text-green-400',
    red: 'group-hover:text-red-400',
    cyan: 'group-hover:text-cyan-400',
    purple: 'group-hover:text-purple-400',
    amber: 'group-hover:text-amber-400',
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          All Services
        </h1>
        <p className="text-slate-400 mb-8">
          {allServices.length} production-ready services — enterprise AI, IT, cloud, security, data & automation.
        </p>

        {categories.map(cat => {
          const services = allServices.filter(s => s.category === cat.key).sort((a, b) => a.title.localeCompare(b.title));
          if (services.length === 0) return null;
          return (
            <div key={cat.key} className="mb-10">
              <h2 className="text-xl font-semibold text-slate-200 mb-4">{cat.label} — {services.length} services</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map(s => (
                  <a key={s.id} href={s.href} className={`group rounded-xl border ${colorMap[cat.color]} bg-slate-800/50 p-5 transition-all hover:bg-slate-800`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{s.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-semibold text-slate-100 ${titleColor[cat.color]} transition-colors`}>{s.title}</h3>
                        <p className="mt-1 text-xs text-slate-400 line-clamp-2">{s.description}</p>
                        <p className="mt-2 text-xs font-medium text-slate-500">From {s.pricing.basic}/mo</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
