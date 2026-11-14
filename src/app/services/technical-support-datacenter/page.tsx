import Link from 'next/link';

export const metadata = {
  title: 'Suporte Técnico e Datacenter | Zion Tech Group',
  description:
    'Suporte técnico presencial e infraestrutura de datacenter com avaliação técnica, orçamento formal e liberação antes de qualquer execução. Converse com a Zion.',
  openGraph: {
    title: 'Suporte Técnico e Datacenter | Zion Tech Group',
    description:
      'Suporte técnico presencial e infraestrutura de datacenter com avaliação técnica, orçamento formal e liberação antes de qualquer execução. Converse com a Zion.',
    url: 'https://ziontechgroup.com/services/technical-support-datacenter/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'pt_BR',
  },
  alternates: { canonical: '/services/technical-support-datacenter/' },
};

export default function SuporteTechnicoDatacenterPage() {
  const faqs = [
    {
      q: 'Quais informações enviar para avaliar o escopo?',
      a: 'Informe cidade/UF, tipo, modelo e quantidade de equipamentos, sintoma, impacto e janela pretendida com fuso. Esses dados ajudam a avaliar a solicitação; escopo e condições precisam de confirmação.',
    },
    {
      q: 'Como verificar atendimento na minha cidade?',
      a: 'Informe a cidade e o tipo de atendimento necessário. O responsável da Zion avaliará a viabilidade, as condições e a disponibilidade antes de confirmar o atendimento.',
    },
    {
      q: 'Como combinar data, janela e fuso?',
      a: 'Indique a data, a janela desejada, o fuso e as restrições operacionais relevantes. A janela de atendimento será definida com o responsável, conforme escopo e disponibilidade confirmados.',
    },
    {
      q: 'O diagnóstico deve ser remoto ou presencial?',
      a: 'A escolha depende do equipamento, do sintoma, do impacto e das possibilidades de análise. O responsável avalia o escopo e as condições de cada modalidade antes de confirmar o serviço.',
    },
  ];

  const posts = [
    {
      n: 'POST 1',
      t: 'Precisa de atendimento técnico em datacenter?',
      b: 'Informe cidade, tipo de equipamento, sintoma ou impacto e janela pretendida com fuso. Esses dados ajudam a avaliar o chamado. Use o canal de atendimento para detalhes técnicos; não publique credenciais ou dados de acesso. Converse com a Zion.',
    },
    {
      n: 'POST 2',
      t: 'Antes do atendimento, alinhe o problema, o escopo e a janela necessária.',
      b: 'A Zion avalia a solicitação e confirma as condições antes de combinar a execução. Cidade, equipamento e impacto são o ponto de partida. Converse com a Zion.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <nav aria-label="Breadcrumb" className="text-center text-sm text-slate-500">
          <Link href="/services/" className="hover:text-white">Serviços</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">Suporte Técnico e Datacenter</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Suporte Técnico Presencial e Datacenter — Zion Tech Group
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A Zion atende demandas técnicas presenciais e em datacenter, avaliando cidade, equipamento, sintoma/impacto e janela pretendida antes de qualquer orçamento ou contrato. Escopo, preço e disponibilidade são definidos por avaliação, sem garantias não confirmadas. Fale com a Zion para alinhar o que foi solicitado.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">FAQ — O que você precisa responder</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map(f => (
              <div key={f.q} className="rounded-xl border border-slate-700/50 p-5">
                <h3 className="text-lg font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Posts rápidos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map(p => (
              <div key={p.n} className="rounded-xl border border-slate-700/50 p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{p.n}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <a href="/contact/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
            Converse com a Zion →
          </a>
        </div>
      </div>
    </main>
  );
}
