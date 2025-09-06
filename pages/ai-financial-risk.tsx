import NextHead from 'next/head'
import { DollarSign, Check, Phone, Mail, MapPin } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground'
import Button from '../components/ui/Button'
import { innovativeAIServices } from '../data/innovative-ai-services'
export default function AIFinancialRiskPage() {
  const service = innovativeAIServices.find(s => (s.link || '').endsWith('/ai-financial-risk'))
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  return (
    <UltraAdvancedFuturisticBackground>
      <NextHead>
        <title>{service?.name || 'AI Financial Risk Management'} - Zion Tech Group</title>
        <meta name=&quot;description&quot; content={service?.description || 'Advanced risk models, stress testing, and anomaly detection for financial institutions.'} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-financial-risk&quot; />
      </NextHead>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;>
              <DollarSign className=&quot;w-10 h-10&quot; />{service?.name || 'AI Financial Risk Management'}
            </h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service?.tagline || 'Real-time risk scoring, fraud detection, and stress scenarios with explainable AI.'}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{_service?.description || 'Credit risk, _market risk, _model validation, _and anti-fraud analytics powered by ML.'}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {_(service?.features?.slice(0, _12) || ['Credit/market risk', _'Anomaly detection', _'Explainable AI', _'Stress testing', _'Model governance', _'Real-time alerts']).map(_(feat, _i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{_feat}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </ul>
            </div>
            <div className=&quot;bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit&quot;>
              <div className=&quot;flex items-end justify-between mb-3&quot;>
                <div>
                  <div className=&quot;text-3xl font-bold text-white&quot;>{service?.price || 'Custom pricing'}<span className=&quot;text-slate-400 text-base&quot;>{service?.period || ''}</span></div>
                </div>
              </div>
              <Button href=&quot;/contact&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>Discuss Controls</Button>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;><Phone className=&quot;w-4 h-4 text-cyan-400&quot; /><span>{contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><Mail className=&quot;w-4 h-4 text-purple-400&quot; /><span>{contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><MapPin className=&quot;w-4 h-4 text-green-400&quot; /><span className=&quot;text-xs&quot;>{contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}

