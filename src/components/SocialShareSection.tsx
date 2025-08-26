import React from 'react';
export function SocialShareSection() {
    const socialPlatforms = [
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/ziontechgroup' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/ziontechgroup' },
        { name: 'Facebook', icon: '📘', url: 'https://facebook.com/ziontechgroup' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/ziontechgroup' }
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
          {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-4xl hover:scale-110 transition-transform" title={platform.name}>
              {platform.icon}
            </a>))}
        </div>
      </div>
    </section>);
}
