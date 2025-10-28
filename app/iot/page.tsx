
export const metadata = {
  title: 'Iot | Zion Tech Group',
  description: 'Professional iot services by Zion Tech Group.',
  keywords: 'iot, technology, services',
  openGraph: {
    title: 'Iot | Zion Tech Group',
    description: 'Professional iot services by Zion Tech Group.',
    type: 'website',
  },
};

export default function IotPage() {
  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Iot
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional iot services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        
      </main>
    </div>
  );
}
