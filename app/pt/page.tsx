// app/pt/page.tsx — Página inicial em português (locale starter).
// Brazil is the largest LATAM AI market; a first-pass localized landing page
// with hreflang support. Copy stays fact-only and mirrors the English homepage.

import Link from 'next/link';
import { allServices } from './data/servicesData';

const serviceCount = allServices.length;

export default function PtHomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> {serviceCount}+ Serviços — Ativos
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI & IT Services</span>
              <br />
              <span className="text-white">para o seu negócio</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {serviceCount} soluções reais de IA, TI, nuvem, segurança, dados, automação, micro-SaaS, DevOps, blockchain e IoT — da aprendizado de máquina à cibersegurança, CRM à rede 5G. Obtenha uma proposta personalizada em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/discovery" className="btn-primary text-lg px-10 py-4">
                🚀 Instanciar Free Discovery Agora →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Explorar {serviceCount}+ Serviços
              </Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">
                ☎ +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/dashboard" className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm hover:bg-purple-500/30 hover:text-white transition-all font-medium">
                ⚡ Agent Dashboard
              </Link>
              <Link href="/search/" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all">
                🔍 Buscar Serviços
              </Link>
              <Link href="/services/" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all">
                🏭 Soluções
              </Link>
              <Link href="/pricing/" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all">
                💰 Preços
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm mb-12">
              {['Equipe base EUA', 'SLA Garantido', 'HIPAA Conforme', 'Suporte 24/7', `${serviceCount}+ Serviços`].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-bold gradient-text">{serviceCount}+</div>
                <div className="text-sm text-slate-400 mt-1">Serviços e soluções</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-bold gradient-text">16</div>
                <div className="text-sm text-slate-400 mt-1">Categorias (IA, TI, Cloud, Segurança, Dados, Automatização, Micro-SaaS...)</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-bold gradient-text">9</div>
                <div className="text-sm text-slate-400 mt-1">Agents vivos trabalhando nesta página</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-slate-400 mt-1">SLA</div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-purple-300 hover:border-purple-500/30 transition-all">
                ✉ kleber@ziontechgroup.com
              </a>
              <a href="tel:+130****0950" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-purple-300 hover:border-purple-500/30 transition-all">
                ☎ +1 302 464 0950
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Discovery — sempre online, sem compromisso ── */}
      <section className="py-14 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 border-y border-emerald-500/20">
        <div className="container-page">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-6">
              <span className="text-green-400">●</span> Sempre Grátis · Online · Sem compromisso
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Free AI Discovery — Mapee sua oportunidade em minutos
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Responda um questionário curto e receba um relatório instantâneo com recomendações de IA/IT, sugestões de aplicativos e um plano de implantação — totalmente grátis. Nenhum cartão, nenhuma chamada de vendas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/discovery" className="btn-primary text-lg px-10 py-4">
                🚀 Começar Free Discovery →
              </Link>
              <Link href="/discovery" className="btn-secondary text-lg px-10 py-4">
                📄 Discovery $99 (Deep Dive)
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/20">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-1">Relatório Instantâneo</h3>
                <p className="text-slate-400 text-sm">Receba o mapa de sua oportunidade de IA imediatamente após concluir o questionário.</p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/20">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="text-white font-semibold mb-1">Sem Compromisso</h3>
                <p className="text-slate-400 text-sm">Free discovery sem obrigação. Seus dados ficam no seu navegador.</p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/20">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="text-white font-semibold mb-1">Plano de Ação</h3>
                <p className="text-slate-400 text-sm">Receba recomendações de aplicativos, estimativas de ROI e um plano de piloto passo a passo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-slate-900/30 border-y border-slate-800/60">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Precisa de mais do que ferramentas gratuitas?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Oferecemos implantação de IA, automação de TI, suporte gerenciado e integrações personalizadas para times que querem soluções prontas para produção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+130****0950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
              <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">
                📅 Agendar uma Consultoria
              </a>
              <Link href="/discovery" className="btn-secondary text-lg">🚀 Iniciar Free Discovery</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
