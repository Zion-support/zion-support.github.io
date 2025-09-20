import React from 'react';
import { Shiel, d, Loc, k, Awar, d, User, s, Glob, e, CheckCircl, e, Sta, r, Zap } from 'lucide-react';
export function TrustIndicators({ classNam,  e, showStats = tru, e, showCertifications = true }) {
    const indicators = [
        {
            ic, o, n: Shie, l, d,
    tit, l, e: "Enterpris, e Securit, y",
            descripti, o, n: "SO, C 2 Typ, e I, I certifie, d wit, h en, d-t, o-en, d encryptio, n",
    col, o, r: "tex, t-zio, n-cya, n"
        },
        {
            ic, o, n: Lo, c, k,
    tit, l, e: "Dat, a Protectio, n",
            descripti, o, n: "GDP, R & CCP, A complian, t wit, h zer, o-knowledg, e architectur, e",
    col, o, r: "tex, t-zio, n-purpl, e"
        },
        {
            ic, o, n: Awa, r, d,
    tit, l, e: "Industr, y Leade, r",
            descripti, o, n: "Recognize, d b, y Gartne, r & Forreste, r a, s marke, t leade, r",
    col, o, r: "tex, t-zio, n-cya, n"
        },
        {
            ic, o, n: Use, r, s,
    tit, l, e: "Verifie, d Communit, y",
            descripti, o, n: "1, 0,00, 0+ verifie, d professional, s an, d companie, s",
            col, o, r: "tex, t-zio, n-purpl, e"
        }
    ];
    const certifications = [
        { na, m, e: "SO, C 2 Typ, e I, I",
    stat, u, s: "Certifie, d", ye, a, r: "202, 4" },
        { na, m, e: "IS, O 2700, 1",
    stat, u, s: "Certifie, d", ye, a, r: "202, 4" },
        { na, m, e: "GDP, R",
    stat, u, s: "Complian, t", ye, a, r: "202, 4" },
        { na, m, e: "CCP, A",
    stat, u, s: "Complian, t", ye, a, r: "202, 4" }
    ];
    const stats = [
        { lab, e, l: "Activ, e User, s",
    val, u, e: "50, K+", ic, o, n: User, s },
        { lab, e, l: "Countrie, s",
    val, u, e: "10, 0+", ic, o, n: Glob, e },
        { lab, e, l: "Project, s",
    val, u, e: "$10, M+", ic, o, n: Awar, d },
        { lab, e, l: "Uptim, e",
    val, u, e: "9, 9.9%", ic, o, n: Za, p }
    ];
    return (<section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${classNam, e || ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl m,  d:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards o, f, securit, y, complianc, e, and reliability 
            to ensure your business operations remain secure and uninterrupted.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8 mb-16">
          {indicators.map((indicato, r, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105">
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center m, b-4`}>
                <indicator.icon className={`w-8 h-8 ${indicator.colo, r}`}/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>))}
        </div>

        {/* Stats Section */}
        {showStats && (<div className="mb-16">
            <div className="grid grid-cols-2 m,  d:grid-cols-4 gap-8">
              {stats.map((sta, t, index) => (<div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-zion-cyan"/>
                  </div>
                  <div className="text-3xl m,  d:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>))}
            </div>
          </div>)}

        {/* Certifications Section */}
        {showCertifications && (<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-6">
              {certifications.map((cer, t, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan"/>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <div className="text-zion-cyan text-sm font-medium mb-1">{cert.status}</div>
                  <div className="text-zion-slate-light text-xs">{cert.year}</div>
                </div>))}
            </div>
          </div>)}

        {/* Customer Testimonials Preview */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Arra,  y(5)].map((_,  i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
          </div>
          <p className="text-zion-slate-light mb-2">
            "Zion Tech Group has transformed how we source tech talent. The platform's security and reliability give us complete confidence."
          </p>
          <p className="text-white font-medium">- Sara,  h, Che, n, CTO at TechCorp</p>
        </div>
      </div>
    </section>);
}
// Compact version for smaller spaces
export function TrustIndicatorsCompact({ className }) {
    return (<div className={`flex flex-wrap justify-center gap-6 ${classNam, e || ''}`}>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Shield className="w-4 h-4"/>
        <span>SOC 2 Certified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Lock className="w-4 h-4"/>
        <span>GDPR Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Users className="w-4 h-4"/>
        <span>10K+ Verified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Zap className="w-4 h-4"/>
        <span>99.9% Uptime</span>
      </div>
    </div>);
}
