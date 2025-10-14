import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

export default function EnterprisePage() {
  return (
    <>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-600'>
                Advanced AI and IT solutions designed for large organizations
              </p>
            </div>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              cost savings, productivity gains, and system reliability
              with enterprise-grade security and compliance.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Schedule Enterprise Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="#solutions"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                <span>View Solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-24" id="solutions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description: 'Self-managing systems that optimize enterprise operations',
              },
              {
                title: 'Business Intelligence',
                description: 'Data-driven insights for strategic decision making',
              },
              {
                title: 'Cloud Services',
                description: 'Scalable and secure cloud infrastructure solutions',
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
