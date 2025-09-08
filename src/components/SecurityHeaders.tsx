import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add Content Security Policy
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none;
    document.head.appendChild(meta);

    // Add additional security headers via meta tags
    const securityHeaders = [
  { httpEquiv: 'X-Frame-Options', content: 'DENY' }, { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' }, { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }, { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' }
    ];

    securityHeaders.forEach(header => {
      const metaTag = document.createElement('meta');
      metaTag.httpEquiv = header.httpEquiv;
      metaTag.content = header.content;
      document.head.appendChild(metaTag)});

    return () => {
      // Cleanup on unmount
      const securityMetaTags = document.querySelectorAll('meta[http-equiv]');
      securityMetaTags.forEach(tag => {
        if (tag.getAttribute('http-equiv')?.startsWith('X-') || 
            tag.getAttribute('http-equiv') === 'Content-Security-Policy' ||
            tag.getAttribute('http-equiv') === 'Referrer-Policy' ||
            tag.getAttribute('http-equiv') === 'Permissions-Policy') {
          tag.remove()}
      })}}, []);

  return null};

        {/* Compliance Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Compliance & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {complianceBadges.map((badge, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'bg-zion-cyan/20'
                : 'bg-yellow-500/20'}`}>
                  <badge.icon className={`w-6 h-6 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'text-zion-cyan'
                : 'text-yellow-500'}`}/>
                </div>
                <h4 className="font-semibold text-white mb-1">{badge.name}</h4>
                <div className={`text-sm font-medium mb-1 ${badge.status === 'Certified' || badge.status === 'Compliant'
                ? 'text-zion-cyan'
                : 'text-yellow-500'}`}>
                  {badge.status}
                </div>
                <div className="text-zion-slate-light text-xs">{badge.year}</div>
              </div>))}
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
    return (<div className={`flex flex-wrap justify-center gap-6 ${className || ''}`}>
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
