import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export type ServicePageData = {
  metadata: { title: string; description: string; alternates: { canonical: string } };
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  basic: string;
  pro: string;
  enterprise: string;
  consultationHref: string;
} & ({ layout: 'simple' } | { layout?: 'linked'; breadcrumbPath: string; breadcrumbTitle: string });

export default function GeneratedServicePage({ data }: { data: ServicePageData }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {data.layout !== 'simple' && <BreadcrumbSchema path={data.breadcrumbPath} title={data.breadcrumbTitle} />}
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
        <p className="text-lg text-gray-300 mb-8">{data.description}</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.features.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.benefits.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">{data.basic}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">{data.pro}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">{data.enterprise}</p>
            </div>
          </div>
        </div>
        {data.layout !== 'simple' && <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>}

        <div className="text-center">
          <a 
            href={data.consultationHref} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}