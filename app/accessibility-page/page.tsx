
export const metadata = {
  title: 'Accessibility Page | Zion Tech Group',
  description: 'Professional accessibility page services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'accessibility page, technology, services, AI, automation',
  openGraph: {
    title: 'Accessibility Page | Zion Tech Group',
    description: 'Professional accessibility page services by Zion Tech Group.',
    type: 'website',
  },
};

function AccessibilitypagePage() {
  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge accessibility page solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Page;
