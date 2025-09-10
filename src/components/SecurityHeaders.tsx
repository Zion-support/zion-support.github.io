<<<<<<< HEAD
import { useEffect } from 'react';';
const SecurityHeaders = ("props": "any) => {';';
  useEffect(() => {';';';
    // Add Content Security Policy'",';';
    ';';';
    const meta = document.createElement('meta');',';';
    ';';';
    meta.httpEquiv = 'Content-Security-Policy',',';';
    ;
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' "https": "//www.googletagmanager.com "https"://www.google-analytics.com; style-src 'self' 'unsafe-inline' "https"://fonts.googleapis.com; font-src 'self' "https"://fonts.gstatic.com; img-src 'self' "data": http "s":; connect-src 'self' "https"://www.google-analytics.com; frame-ancestors 'none;';
    document.head.appendChild(meta);';';
    // Add additional security headers via meta tags';';';
    const securityHeaders = ['",';';
    ';';' { "httpEquiv": 'X-Frame-Options', "content": 'DENY' },',';';
    ';';' { "httpEquiv": 'X-Content-Type-Options', "content": 'nosniff' },',';';
    ';';' { "httpEquiv": 'Referrer-Policy', "content": 'strict-origin-when-cross-origin' },',';';
    ';';' { "httpEquiv": 'Permissions-Policy', "content": 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' }';';
    ]';';';
    securityHeaders.forEach(header => {',';';
    ';';';
      const metaTag = document.createElement('meta');
      metaTag.httpEquiv = header.httpEquiv;
      metaTag.content = header.content;
      document.head.appendChild(metaTag);';
    }
    );';';
    return () => {';';';
      // Cleanup on unmount',';';
    ';';';
      const securityMetaTags = document.querySelectorAll('meta[http-equiv]');';';';
      securityMetaTags.forEach(tag => {',';';
    ';';';
        if (tag.getAttribute('http-equiv')?.startsWith('X-') ||',';';
    ';';';
            tag.getAttribute('http-equiv') === 'Content-Security-Policy' ||',';';
    ';';';
            tag.getAttribute('http-equiv') === 'Referrer-Policy' ||',';';
    ';';';
            tag.getAttribute('http-equiv') === 'Permissions-Policy') {;
          tag.remove();
        }
      }
    );
    };';
  }, []);';';
  return null};';';';
export default SecurityHeaders;";
=======
import React from 'react';
import { Shield, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
export function SecurityHeaders({ className }) {
    const securityFeatures = [
        {
            icon: Shield,
            title: "SOC 2 Type II Certified",
            description: "Enterprise-grade security compliance",
            status: "verified",
            color: "text-zion-cyan"
        },
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "256-bit AES encryption for all data",
            status: "verified",
            color: "text-zion-purple"
        },
        {
            icon: CheckCircle,
            title: "GDPR & CCPA Compliant",
            description: "Full data protection compliance",
            status: "verified",
            color: "text-zion-cyan"
        },
        {
            icon: Shield,
            title: "Zero-Knowledge Architecture",
            description: "We cannot access your encrypted data",
            status: "verified",
            color: "text-zion-purple"
        }
    ];
    const complianceBadges = [
        { name: "SOC 2", status: "Certified", year: "2024", icon: CheckCircle },
        { name: "ISO 27001", status: "Certified", year: "2024", icon: CheckCircle },
        { name: "GDPR", status: "Compliant", year: "2024", icon: CheckCircle },
        { name: "CCPA", status: "Compliant", year: "2024", icon: CheckCircle },
        { name: "HIPAA", status: "Ready", year: "2024", icon: AlertTriangle }
    ];
    return (<section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security and compliance 
            to protect your business data and ensure regulatory adherence.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`}/>
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
>>>>>>> origin/backup-improvements-20250827-015311
