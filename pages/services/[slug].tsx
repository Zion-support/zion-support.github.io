import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { servicesCatalog } from '../../data/services';
import Sidebar from '../../components/layout/Sidebar';

const ServiceDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = servicesCatalog.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Service not found</h1>
        <Link href="/services" className="text-blue-700 underline mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>{service.title} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
      </Head>
      <main className="container mx-auto px-4 py-10">
        <div className="flex gap-8">
          <Sidebar />
          <article className="flex-1">
            <div className="mb-6 text-sm text-blue-700 font-semibold">{service.category}</div>
            <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
            <p className="mt-4 text-gray-700 max-w-3xl">{service.description}</p>
            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 inline-flex gap-6 items-center">
              <div>
                <div className="text-sm text-gray-600">Starting at</div>
                <div className="text-xl font-semibold">{service.startingPriceUSD}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Typical timeline</div>
                <div className="text-xl font-semibold">{service.typicalTimeline}</div>
              </div>
              <Link href="/contact" className="ml-auto inline-flex items-center rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">Request proposal</Link>
            </div>
            {service.references && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">References & Pricing</h3>
                <ul className="mt-3 list-disc list-inside text-blue-800">
                  {service.references.map((ref) => (
                    <li key={ref.url}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">{ref.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;

