import PageShell from './PageShell';

interface Feature {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
  icon?: string;
}

interface ProductPageLayoutProps {
  data: {
    title: string;
    category: string;
    description: string;
    iconEmoji?: string;
    features: Feature[];
    useCases: UseCase[];
    benefits: string[];
    ctaLabel?: string;
  };
}

export default function ProductPageLayout({ data }: ProductPageLayoutProps) {
  return (
    <PageShell
      title={data.title}
      description={data.description}
      eyebrow={data.category}
      eyebrowIcon={data.iconEmoji || '✦'}
      align="center"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: data.title },
      ]}
      ctaTitle="Ready to get started?"
      ctaDescription={`Let's discuss how ${data.title} can transform your business. 364 E Main St STE 1008, Middletown, DE 19709 · +1 302 464 0950`}
    >
      <div className="page-card mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
              <span className="shrink-0 text-lg text-purple-400">✦</span>
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.useCases && data.useCases.length > 0 && (
        <div className="page-card mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-white">Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data.useCases.map((uc, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                {uc.icon && <span className="shrink-0 text-2xl">{uc.icon}</span>}
                <div>
                  <h3 className="font-semibold text-white">{uc.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.benefits && data.benefits.length > 0 && (
        <div className="page-card mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-white">Benefits</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                <span className="shrink-0 text-lg text-green-400">✓</span>
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
