import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Analytics Pro - Zion Tech Group',
  description: 'Advanced e-commerce analytics and insights platform for data-driven business growth.',
  keywords: 'e-commerce analytics, business intelligence, data insights, sales optimization',
  openGraph: {
    title: 'E-commerce Analytics Pro - Zion Tech Group',
    description: 'Advanced e-commerce analytics and insights platform for data-driven business growth.',
    type: 'website',
  },
};

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              E-commerce Analytics Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced analytics and insights platform for data-driven e-commerce growth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
