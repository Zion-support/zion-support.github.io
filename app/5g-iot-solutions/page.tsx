

export const metadata = {
  title: 'PagePage | Zion Tech Group',
  description: 'Professional page services by Zion Tech Group',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'PagePage | Zion Tech Group',
    description: 'Professional page services by Zion Tech Group',
    type: 'website',
  },
};

function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PagePage
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional page services and solutions
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
            We provide comprehensive page solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <PagePage {...props} />
  );
}