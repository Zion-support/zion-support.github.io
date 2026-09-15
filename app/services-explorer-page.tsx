import Link from 'next/link';

export default function ServicesExplorer() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services Explorer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our complete catalog of AI & IT services organized by category
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=agritech" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Agritech</h3>
            <p className="text-xs text-gray-400 line-clamp-2">agritech crop disease detection, agritech greenhouse automation, agritech irrigation optimization</p>
            <span className="text-xs text-purple-300">5 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=ai" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Ai</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ai anti money laundering intelligence, ai kyc identity verification, ai credit risk scoring</p>
            <span className="text-xs text-purple-300">1725 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=ai-services" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Ai Services</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ai services model observability, ai services rag as a service, w129 agent orchestrator</p>
            <span className="text-xs text-purple-300">12 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=analytics" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Analytics</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ad hoc analysis ai powered customer journey mapping 5ed0881c, ad hoc analysis ai powered inventory optimization 61cb2747, augmented analytics ai powered capacity planning a6367145</p>
            <span className="text-xs text-purple-300">314 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=api" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Api</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ai powered api gateway 5ce281c8, api analytics ai powered predictive analytics suite 5f91cece, api analytics ai powered resume screening f95fb28f</p>
            <span className="text-xs text-purple-300">355 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=automation" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Automation</h3>
            <p className="text-xs text-gray-400 line-clamp-2">agentic workflow orchestrator, ai automation ai powered edge ai platform 44da4398, ai automation ai powered security information  event management 0e957f47</p>
            <span className="text-xs text-purple-300">597 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=blockchain" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Blockchain</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ai powered blockchain analytics 20ccea91, predictive intelligence engine education predictive intelligence engine for education, predictive intelligence engine for education 9f0de5f4</p>
            <span className="text-xs text-purple-300">64 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=cloud" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Cloud</h3>
            <p className="text-xs text-gray-400 line-clamp-2">ai cdn edge optimizer, ai powered capacity planning 0f53dd11, ai powered cloud governance 2ee53d44</p>
            <span className="text-xs text-purple-300">593 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=construction-tech" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Construction Tech</h3>
            <p className="text-xs text-gray-400 line-clamp-2">construction bim platform, construction project management ai, construction tech bim management</p>
            <span className="text-xs text-purple-300">5 services</span>
          </Link>
        </div>
        <div className="group hover:translate-y-2 transition-transform">
          <Link href="/services?category=customer" className="block p-4 rounded-xl bg-slate-800 border border-purple-500/50 hover:border-purple-500 transition-colors">
            <h3 className="text-sm font-medium mb-2">Customer</h3>
            <p className="text-xs text-gray-400 line-clamp-2">community ai code generation  optimization 184a02e4, community ai customer churn prediction 044415df, community ai financial planning  analysis 041536d1</p>
            <span className="text-xs text-purple-300">299 services</span>
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}