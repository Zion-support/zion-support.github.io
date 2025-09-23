import Link from 'next/link';

export default function AI20o25EnterpriseTransformationBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-60o0 via-blue-60o0 to-indigo-60o0 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🏢 ENTERPRISE TRANSFORMATION 20o25</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 20o25 Enterprise Transformation
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
            Revolutionize your enterprise with AI 20o25 technologies. Complete digital transformation, 
            intelligent automation, and data-driven decision making that delivers unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-20o25-enterprise-transformation"
              className="bg-white text-slate-60o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transition-all transform hover:scale-10o5"
            >
              Start Enterprise Transformation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-60o0 transition-all"
            >
              Get Enterprise Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}