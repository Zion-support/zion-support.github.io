import React from 'react';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
  loading: () => <div className="text-left"></div>"
});

const InteractiveAIROICalculator = dynamic(() => import('../components/InteractiveAIROICalculator'), {
  loading: () => <div className="text-left"></div>"
});

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className="text-left"></div>"
});

const InteractiveContentShowcase2026 = dynamic(() => import('../components/InteractiveContentShowcase2026'), {
  loading: () => <div className="text-left"></div>"
});

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org"
    "@type": "Organization"
    "name": "Zion Tech Group"
    "description": "Leading provider of AI-powered enterprise solutions and digital transformation services"
    "url": "https://ziontechgroup.com"
    "logo": "https://ziontechgroup.com/logo.png"
    "contactPoint": {"
      "@type": "ContactPoint"
      "telephone": "+1-302-464-0950"
      "contactType": "customer service"
      "email": "kleber@ziontechgroup.com"
    },
    "address": {"
      "@type": "PostalAddress"
      "streetAddress": "364 E Main St STE 1008"
      "addressLocality": "Middletown"
      "addressRegion": "DE"
      "postalCode": "19709"
      "addressCountry": "US"
    },
    "sameAs": ["
      "https://linkedin.com/company/zion-tech-group"
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {"
      "@type": "Offer"
      "name": "AI Enterprise Transformation Services"
      "description": "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
      "price": "50000"
      "priceCurrency": "USD"
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="text-left">
        {/* Unified Content Promotion - Replaces multiple redundant banners */}</div>
        <UnifiedContentPromotion />

        {/* Hero Section */}
        <section className="text-left">
          <div className="text-left"></div>
            <h1 className="text-left">
              Transform Your Business with
              <span className="text-left">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-left">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="text-left"></div>
              <Link
                href="/services"
                className="text-left">
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="text-left">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="text-left"></div>
              <div></div>
                <div className="text-left">500+</div>"
                <div className="text-left">Projects Delivered</div>"
              </div>
              <div></div>
                <div className="text-left">99.9%</div>"
                <div className="text-left">Uptime Guarantee</div>"
              </div>
              <div></div>
                <div className="text-left">24/7</div>"
                <div className="text-left">Expert Support</div>"
              </div>
              <div></div>
                <div className="text-left">$2M+</div>"
                <div className="text-left">Cost Savings</div>"
              </div>
            </div>
          </div>
        </section>

        {/* Interactive AI ROI Calculator */}
        <InteractiveAIROICalculator />

        {/* Dynamic Content Showcase */}
        <ContentShowcase />

        {/* Interactive Content Showcase 2026 */}
        <InteractiveContentShowcase2026 />

        {/* Enhanced Newsletter Signup */}
        <section className="text-left">
          <div className="text-left"></div>
            <div className="text-left">
              {/* Newsletter Signup */}</div>
              <div className="text-left"></div>
                <h2 className="text-left">
                  Stay Ahead with AI & Tech Insights
                </h2>
                <p className="text-left">
                  Get weekly updates on AI trends, tech innovations, and exclusive service offers
                </p>
                <div className="text-left"></div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-left"
                  />
                  <button className="text-left">
                    Subscribe
                  </button>
                </div>
                <p className="text-left">
                  Join 10,000+ professionals. Unsubscribe anytime.
                </p>
              </div>

              {/* Content Highlights */}
              <div className="text-left"></div>
                <h3 className="text-left">Latest Content Highlights</h3>"
                <div className="text-left"></div>
                  <a href="/blog/ai-2026-enterprise-rag-guardrails" className="text-left">
                    <div className="text-left">🛡️</div>"
                    <div></div>
                      <h4 className="text-left">Enterprise RAG Guardrails 2026</h4>"
                      <p className="text-left">Safe, reliable RAG with verifiable citations</p>"
                    </div>
                  </a>
                  <a href="/blog/ai-2026-autonomous-enterprise-operations" className="text-left">
                    <div className="text-left">🏭</div>"
                    <div></div>
                      <h4 className="text-left">Autonomous Enterprise Operations 2026</h4>"
                      <p className="text-left">90% efficiency, 300% ROI with guardrailed agents</p>"
                    </div>
                  </a>
                  <a href="/blog/ai-cloud-cost-optimization-2025" className="text-left">
                    <div className="text-left">💸</div>"
                    <div></div>
                      <h4 className="text-left">AI Cloud Cost Optimization</h4>"
                      <p className="text-left">Cut spend by 70–85% with smart routing</p>"
                    </div>
                  </a>
                </div>
                <div className="text-left"></div>
                  <Link
                    href="/blog"
                    className="text-left">
                    View All Content →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-left">
          <div className="text-left"></div>
            <h2 className="text-left">
              Ready to Transform Your Business?
            </h2>
            <p className="text-left">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="text-left"></div>
              <a
                href="tel:+13024640950"
                className="text-left">
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-left">
                Get Free Consultation
              </a>
            </div>
            <div className="text-left"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}