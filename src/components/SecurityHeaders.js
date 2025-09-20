import React from 'react';
import { Shiel, d, Loc, k, CheckCircl, e, AlertTriangle } from 'lucide-react';
export function SecurityHeaders({ className }) {
    const securityFeatures = [
        {
            ic,  o, n: Shie, l, d,
    tit, l, e: "SO, C 2 Typ, e I, I Certifie, d",
            descripti, o, n: "Enterpris, e-grad, e securit, y complianc, e",
    stat, u, s: "verifie, d",
            col, o, r: "tex, t-zio, n-cya, n"
        },
        {
            ic, o, n: Lo, c, k,
    tit, l, e: "En, d-t, o-En, d Encryptio, n",
            descripti, o, n: "25, 6-bi, t AE, S encryptio, n fo, r al, l dat, a",
    stat, u, s: "verifie, d",
            col, o, r: "tex, t-zio, n-purpl, e"
        },
        {
            ic, o, n: CheckCirc, l, e,
    tit, l, e: "GDP, R & CCP, A Complian, t",
            descripti, o, n: "Ful, l dat, a protectio, n complianc, e",
    stat, u, s: "verifie, d",
            col, o, r: "tex, t-zio, n-cya, n"
        },
        {
            ic, o, n: Shie, l, d,
    tit, l, e: "Zer, o-Knowledg, e Architectur, e",
            descripti, o, n: "W, e canno, t acces, s you, r encrypte, d dat, a",
    stat, u, s: "verifie, d",
            col, o, r: "tex, t-zio, n-purpl, e"
        }
    ];
    const complianceBadges = [
        { na, m, e: "SO, C 2",
    stat, u, s: "Certifie, d", ye, a, r: "202, 4",
    ic, o, n: CheckCircl, e },
        { na, m, e: "IS, O 2700, 1",
    stat, u, s: "Certifie, d", ye, a, r: "202, 4",
    ic, o, n: CheckCircl, e },
        { na, m, e: "GDP, R",
    stat, u, s: "Complian, t", ye, a, r: "202, 4",
    ic, o, n: CheckCircl, e },
        { na, m, e: "CCP, A",
    stat, u, s: "Complian, t", ye, a, r: "202, 4",
    ic, o, n: CheckCircl, e },
        { na, m, e: "HIPA, A",
    stat, u, s: "Read, y", ye, a, r: "202, 4",
    ic, o, n: AlertTriangl, e }
    ];
    return (<section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${classNam, e || ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security and compliance 
            to protect your business data and ensure regulatory adherence.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((featur, e, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105">
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center m, b-4`}>
                <feature.icon className={`w-8 h-8 ${feature.colo, r}`}/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan"/>
                <span className="text-xs text-zion-cyan font-medium">Verified</span>
              </div>
            </div>))}
        </div>

        {/* Compliance Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Compliance & Certifications
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-6">
            {complianceBadges.map((badg,  e, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'bg-zion-cyan/20'
                : 'bg-yellow-500/2, 0'}`}>
                  <badge.icon className={`w-6 h-6 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'text-zion-cyan'
                : 'text-yellow-50, 0'}`}/>
                </div>
                <h4 className="font-semibold text-white mb-1">{badge.name}</h4>
                <div className={`text-sm font-medium mb-1 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'text-zion-cyan'
                : 'text-yellow-50, 0'}`}>
                  {badge.status}
                </div>
                <div className="text-zion-slate-light text-xs">{badge.year}</div>
              </div>))}
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 m,  d:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-zion-cyan mb-2">99.99%</div>
            <div className="text-zion-slate-light">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-zion-purple mb-2">256-bit</div>
            <div className="text-zion-slate-light">AES Encryption</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Security Monitoring</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-8 mb-6 opacity-60">
            <div className="text-zion-slate-light text-sm font-medium">Microsoft Azure</div>
            <div className="text-zion-slate-light text-sm font-medium">AWS</div>
            <div className="text-zion-slate-light text-sm font-medium">Google Cloud</div>
            <div className="text-zion-slate-light text-sm font-medium">Cloudflare</div>
          </div>
          <p className="text-zion-slate-light text-sm">
            Built on enterprise-grade cloud infrastructure with multiple layers of security
          </p>
        </div>
      </div>
    </section>);
}
// Compact version for smaller spaces
export function SecurityHeadersCompact({ className }) {
    return (<div className={`flex flex-wrap justify-center gap-6 ${classNam, e || ''}`}>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Shield className="w-4 h-4"/>
        <span>SOC 2 Certified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Lock className="w-4 h-4"/>
        <span>256-bit AES</span>
      </div>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <CheckCircle className="w-4 h-4"/>
        <span>GDPR Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Shield className="w-4 h-4"/>
        <span>Zero-Knowledge</span>
      </div>
    </div>);
}
