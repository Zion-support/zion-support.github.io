import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
    'Respostas diretas sobre atendimento técnico presencial e datacenter: o que enviar para avaliar, como confirmar a cidade, como combinar janela e fuso, e se o diagnóstico é remoto ou presencial.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description:
      'Respostas diretas sobre atendimento técnico presencial e datacenter: o que enviar para avaliar, como confirmar a cidade, como combinar janela e fuso, e se o diagnóstico é remoto ou presencial.',
    url: 'https://ziontechgroup.com/faq/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'pt_BR',
  },
  alternates: { canonical: '/faq/' },
};

export default function FAQPage() {
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

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <nav aria-label="Breadcrumb" className="text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">FAQ</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Perguntas Frequentes — Suporte Técnico e Datacenter
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Respostas diretas sobre atendimento técnico presencial e infraestrutura de datacenter: o que enviar para avaliar o escopo, como confirmar a cidade, como combinar data, janela e fuso, e se o diagnóstico é remoto ou presencial.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map(f => (
            <div key={f.q} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-xl font-bold text-white mb-3">{f.q}</h2>
              <p className="text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg">
            Converse com a Zion →
          </a>
        </div>
      </div>
    </main>
  );
}
