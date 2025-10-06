import ArrowRight from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load heavy components
<<<<<<< HEAD
const UnifiedContentPromotion = dynamic(
  () => import('../components/UnifiedContentPromotion'),
  {
    loading: () => <div className='h-screen bg-gray-100 animate-pulse'></div>,
  },
);

const InteractiveAIROICalculator = dynamic(
  () => import('../components/InteractiveAIROICalculator'),
  {
    loading: () => <div className='h-96 bg-gray-100 animate-pulse'></div>,
  },
);

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className='h-96 bg-gray-100 animate-pulse'></div>,
});

const InteractiveContentShowcase2026 = dynamic(
  () => import('../components/InteractiveContentShowcase2026'),
  {
    loading: () => <div className='h-96 bg-gray-100 animate-pulse'></div>,
  },
);
=======
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
  loading: () => <div className="text-left">"
});

const InteractiveAIROICalculator = dynamic(() => import('../components/InteractiveAIROICalculator'), {
  loading: () => <div className="text-left">"
});

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className="text-left">"
});

const InteractiveContentShowcase2026 = dynamic(() => import('../components/InteractiveContentShowcase2026'), {
  loading: () => <div className="text-left">"
});
>>>>>>> origin/fix-errors-and-merge-final

export const metadata = {
  title:
    'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description:
    'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords:
    'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description:
      'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
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
    description:
      'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description:
      'Leading provider of AI-powered enterprise solutions and digital transformation services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description:
        'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className='animate-fade-in'>
        {/* Unified Content Promotion - Replaces multiple redundant banners */}
        <UnifiedContentPromotion />

        {/* Hero Section */}
<<<<<<< HEAD
        <section className='text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50'>
          <div className='max-w-4xl mx-auto px-4'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
=======
        <section className="text-left">
          <div className="text-left">
            <h1 className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
              Transform Your Business with
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600'>
                {' '}
                AI-Powered Solutions
              </span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Zion Tech Group delivers cutting-edge AI micro SaaS services,
              cloud automation, and enterprise IT solutions that drive growth,
              efficiency, and innovation.
            </p>
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <ArrowRight
                href='/services'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl'
              >
=======
            <div className="text-left">
              <Link
                href="/services"
                className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
                Explore Our Services
              </ArrowRight>
              <a
                href='tel:+13024640950'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors'
              >
                Call +1 302 464 0950
              </a>
            </div>
<<<<<<< HEAD
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              <div>
                <div className='text-3xl font-bold text-blue-600'>500+</div>
                <div className='text-gray-600'>Projects Delivered</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600'>99.9%</div>
                <div className='text-gray-600'>Uptime Guarantee</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600'>24/7</div>
                <div className='text-gray-600'>Expert Support</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600'>$2M+</div>
                <div className='text-gray-600'>Cost Savings</div>
=======
            <div className="text-left">
              <div>
                <div className="text-left">500+</div>"
                <div className="text-left">Projects Delivered</div>"
              </div>
              <div>
                <div className="text-left">99.9%</div>"
                <div className="text-left">Uptime Guarantee</div>"
              </div>
              <div>
                <div className="text-left">24/7</div>"
                <div className="text-left">Expert Support</div>"
              </div>
              <div>
                <div className="text-left">$2M+</div>"
                <div className="text-left">Cost Savings</div>"
>>>>>>> origin/fix-errors-and-merge-final
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
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white'>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Newsletter Signup */}
              <div className='text-center md:text-left'>
                <h2 className='text-4xl font-bold mb-6'>
=======
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
              {/* Newsletter Signup */}</div>
              <div className="text-left">
                <h2 className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
                  Stay Ahead with AI & Tech Insights
                </h2>
                <p className='text-xl mb-8 opacity-90'>
                  Get weekly updates on AI trends, tech innovations, and
                  exclusive service offers
                </p>
<<<<<<< HEAD
                <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0'>
=======
                <div className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white'
                  />
                  <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                    Subscribe
                  </button>
                </div>
                <p className='text-sm mt-4 opacity-75'>
                  Join 10,000+ professionals. Unsubscribe anytime.
                </p>
              </div>

              {/* Content Highlights */}
<<<<<<< HEAD
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                <h3 className='text-2xl font-bold mb-6'>
                  Latest Content Highlights
                </h3>
                <div className='space-y-4'>
                  <a
                    href='/blog/ai-2026-enterprise-rag-guardrails'
                    className='flex items-start gap-3 group'
                  >
                    <div className='text-2xl'>🛡️</div>
                    <div>
                      <h4 className='font-semibold mb-1 group-hover:underline'>
                        Enterprise RAG Guardrails 2026
                      </h4>
                      <p className='text-sm opacity-90'>
                        Safe, reliable RAG with verifiable citations
                      </p>
                    </div>
                  </a>
                  <a
                    href='/blog/ai-2026-autonomous-enterprise-operations'
                    className='flex items-start gap-3 group'
                  >
                    <div className='text-2xl'>🏭</div>
                    <div>
                      <h4 className='font-semibold mb-1 group-hover:underline'>
                        Autonomous Enterprise Operations 2026
                      </h4>
                      <p className='text-sm opacity-90'>
                        90% efficiency, 300% ROI with guardrailed agents
                      </p>
                    </div>
                  </a>
                  <a
                    href='/blog/ai-cloud-cost-optimization-2025'
                    className='flex items-start gap-3 group'
                  >
                    <div className='text-2xl'>💸</div>
                    <div>
                      <h4 className='font-semibold mb-1 group-hover:underline'>
                        AI Cloud Cost Optimization
                      </h4>
                      <p className='text-sm opacity-90'>
                        Cut spend by 70–85% with smart routing
                      </p>
                    </div>
                  </a>
                </div>
                <div className='mt-6 pt-4 border-t border-white/20'>
                  <ArrowRight
                    href='/blog'
                    className='inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors'
                  >
=======
              <div className="text-left">
                <h3 className="text-left">Latest Content Highlights</h3>"
                <div className="text-left">
                  <a href="/blog/ai-2026-enterprise-rag-guardrails" className="text-left">
                    <div className="text-left">🛡️</div>"
                    <div>
                      <h4 className="text-left">Enterprise RAG Guardrails 2026</h4>"
                      <p className="text-left">Safe, reliable RAG with verifiable citations</p>"
                    </div>
                  </a>
                  <a href="/blog/ai-2026-autonomous-enterprise-operations" className="text-left">
                    <div className="text-left">🏭</div>"
                    <div>
                      <h4 className="text-left">Autonomous Enterprise Operations 2026</h4>"
                      <p className="text-left">90% efficiency, 300% ROI with guardrailed agents</p>"
                    </div>
                  </a>
                  <a href="/blog/ai-cloud-cost-optimization-2025" className="text-left">
                    <div className="text-left">💸</div>"
                    <div>
                      <h4 className="text-left">AI Cloud Cost Optimization</h4>"
                      <p className="text-left">Cut spend by 70–85% with smart routing</p>"
                    </div>
                  </a>
                </div>
                <div className="text-left">
                  <Link
                    href="/blog"
                    className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
                    View All Content →
                  </ArrowRight>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className='py-20 bg-white'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
=======
        <section className="text-left">
          <div className="text-left">
            <h2 className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Let's discuss how our AI and IT solutions can drive your success
            </p>
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
            <div className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
              <a
                href='tel:+13024640950'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg'
              >
                Call +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors'
              >
                Get Free Consultation
              </a>
            </div>
<<<<<<< HEAD
            <div className='mt-8 text-sm text-gray-500'>
=======
            <div className="text-left">
>>>>>>> origin/fix-errors-and-merge-final
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
