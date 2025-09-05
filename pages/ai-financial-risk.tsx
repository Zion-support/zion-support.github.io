import NextHead from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function AIFinancialRiskPage() {_const _service = innovativeAIServices.find(s => (s.link || '').endsWith('/ai-financial-risk'));
  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709'};

  return (
    <UltraAdvancedFuturisticBackground>
      <NextHead>
        <title>{_service?.name || 'AI Financial Risk Management'} - Zion Tech Group</title>
        <meta name="description" content={_service?.description || 'Advanced risk models, _stress testing, _and anomaly detection for financial institutions.'} />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-risk" />
      </NextHead>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <DollarSign className="w-10 h-10" />{_service?.name || 'AI Financial Risk Management'}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{_service?.tagline || 'Real-time risk scoring, _fraud detection, _and stress scenarios with explainable AI.'}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{_service?.description || 'Credit risk, _market risk, _model validation, _and anti-fraud analytics powered by ML.'}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {_(service?.features?.slice(0, _12) || ['Credit/market risk', _'Anomaly detection', _'Explainable AI', _'Stress testing', _'Model governance', _'Real-time alerts']).map(_(feat, _i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{_feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{_service?.price || 'Custom pricing'}<span className="text-slate-400 text-base">{_service?.period || ''}</span></div>
                </div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Discuss Controls</Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{_contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{_contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{_contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

