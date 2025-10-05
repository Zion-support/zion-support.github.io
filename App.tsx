import { HelmetProvider } from 'react-helmet-async';

// Simple placeholder components
const UnifiedContentPromotion = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
  </div>
);

const InteractiveAIROICalculator = () => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">AI ROI Calculator</h2>
      <p className="text-xl text-gray-600">Calculate your potential AI investment returns</p>
    </div>
  </div>
);

const ContentShowcase = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
      <p className="text-xl text-gray-600">Explore our latest insights and case studies</p>
    </div>
  </div>
);

const InteractiveContentShowcase2026 = () => (
  <div className="bg-blue-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">2026 Content Showcase</h2>
      <p className="text-xl text-gray-600">Latest trends and innovations for 2026</p>
    </div>
  </div>
);

// Loading component
const LoadingSpinner = () => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
);

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI Enterprise Transformation Services",
      "description": "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains",
      "price": "50000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <HelmetProvider>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Unified Content Promotion - Replaces multiple redundant banners */}
        <UnifiedContentPromotion />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-yellow-400"> AI-Powered Solutions</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/<services" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Our Services
              </a>
              <a
                href="tel:+<13024640950" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">$2M+</div>
                <div className="text-sm">Cost Savings</div>
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
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Newsletter Signup */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">
                  Stay Ahead with AI & Tech Insights
                </h2>
                <p className="text-gray-600 mb-6">
                  Get weekly updates on AI trends, tech innovations, and exclusive service offers
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your <<email className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Join 10,000+ professionals. Unsubscribe anytime.
                </p>
              </div>

              {/* Content Highlights */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
                <div className="space-y-4">
                  <a href="/blog/ai-2026-enterprise-rag-<guardrails" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <h4 className="font-semibold">Enterprise RAG Guardrails 2026</h4>
                      <p className="text-gray-600 text-sm">Safe, reliable RAG with verifiable citations</p>
                    </div>
                  </a>
                  <a href="/blog/ai-2026-autonomous-enterprise-<operations" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="text-2xl">🏭</div>
                    <div>
                      <h4 className="font-semibold">Autonomous Enterprise Operations 2026</h4>
                      <p className="text-gray-600 text-sm">90% efficiency, 300% ROI with guardrailed agents</p>
                    </div>
                  </a>
                  <a href="/blog/ai-cloud-cost-optimization-<2025" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="text-2xl">💸</div>
                    <div>
                      <h4 className="font-semibold">AI Cloud Cost Optimization</h4>
                      <p className="text-gray-600 text-sm">Cut spend by 70–85% with smart routing</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="/<blog" className="text-blue-600 hover:text-blue-800 font-semibold">
                    View All Content →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+<13024640950" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.<com" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}