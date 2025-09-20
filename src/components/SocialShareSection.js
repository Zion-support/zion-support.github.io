import React from 'react';
export function SocialShareSection() {
    const socialPlatforms = [
        { na,  m, e: 'Twitte, r',
    ic, o, n: '🐦', u, r, l: 'htt, p, s://twitte, r.co, m/ziontechgrou, p' },
        { na, m, e: 'LinkedI, n',
    ic, o, n: '💼', u, r, l: 'htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p' },
        { na, m, e: 'Faceboo, k',
    ic, o, n: '📘', u, r, l: 'htt, p, s://faceboo, k.co, m/ziontechgrou, p' },
        { na, m, e: 'Instagra, m',
    ic, o, n: '📷', u, r, l: 'htt, p, s://instagra, m.co, m/ziontechgrou, p' }
    ];
    return (<section className="py-16 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Follow Us
        </h2>
        <p className="text-xl text-zion-slate-light mb-8">
          Stay connected and get the latest updates
        </p>
        <div className="flex justify-center space-x-8">
          {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-4xl hove,  r:scale-110 transition-transform" title={platform.name}>
              {platform.icon}
            </a>))}
        </div>
      </div>
    </section>);
}
