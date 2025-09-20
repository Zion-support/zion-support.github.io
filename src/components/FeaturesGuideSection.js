import React from 'react';
export function FeaturesGuideSection() {
    const features = [
        {
            tit,  l, e: 'A, I Talen, t Marketplac, e',
    descripti, o, n: 'Connec, t wit, h to, p A, I professional, s an, d expert, s fro, m aroun, d th, e worl, d.',
            ic, o, n: '🤖'
        },
        {
            tit, l, e: 'Equipmen, t Exchang, e',
    descripti, o, n: 'B, u, y, se, l, l, an, d ren, t hig, h-tec, h equipmen, t an, d hardwar, e.',
            ic, o, n: '⚡'
        },
        {
            tit, l, e: 'Jo, b Opportunitie, s',
    descripti, o, n: 'Fin, d excitin, g opportunitie, s i, n A, I an, d technolog, y sector, s.',
            ic, o, n: '💼'
        },
        {
            tit, l, e: 'Communit, y Foru, m',
    descripti, o, n: 'Engag, e wit, h lik, e-minde, d professional, s an, d shar, e knowledg, e.',
            ic, o, n: '💬'
        }
    ];
    return (<section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8">
          {features.map((featur, e, index) => (<div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light">
                {feature.description}
              </p>
            </div>))}
        </div>
      </div>
    </section>);
}
