export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics and visualization.',
};

export default function DataAnalyticsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Analytics Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with advanced analytics and visualization.
        </p>
      </div>
      
      <div className="text-center">
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}