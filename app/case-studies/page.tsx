import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Real-world AI transformation success stories and case studies. See how companies achieved $25M+ ROI with our AI solutions.',
  keywords: 'AI case studies, success stories, AI ROI, business transformation, enterprise AI',
};

export default function CaseStudiesPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-world AI transformation success stories and case studies. See how companies 
          achieved $25M+ ROI with our AI solutions and learn from their experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Case Study */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <div className="max-w-4xl">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                🏆 NEW 2026 FEATURED
              </span>
              <h2 className="text-3xl font-bold mb-4">
                AI Transformation Mega Success 2026: $25M ROI Case Study
              </h2>
              <p className="text-lg opacity-90 mb-6">
                See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span>January 20, 2026</span>
                <span>•</span>
                <span>30 min read</span>
                <span>•</span>
                <span>Fortune 500</span>
              </div>
              <div className="flex gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">$25M</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">99%</div>
                  <div className="text-xs opacity-75">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">300%</div>
                  <div className="text-xs opacity-75">Productivity</div>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="/case-studies/ai-transformation-mega-success-2026" 
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  View Complete Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <CaseStudy
            title="AI Autonomous Enterprise Success 2026: $25M ROI Case Study"
            excerpt="See how a Fortune 500 company achieved $25M ROI with AI autonomous enterprise systems. 99.9% uptime, 90% cost reduction."
            company="Fortune 500 Manufacturing"
            industry="Manufacturing"
            roi="$25M"
            date="January 20, 2026"
            readTime="30 min"
            image="🏭"
            featured={true}
            href="/case-studies/ai-autonomous-enterprise-success-2026"
          />
          <CaseStudy
            title="AI Retail Automation 2026: $8M ROI Case Study"
            excerpt="See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, and $8M annual ROI."
            company="Fortune 500 Retailer"
            industry="Retail"
            roi="$8M"
            date="January 20, 2026"
            readTime="25 min"
            image="🛒"
            featured={true}
            href="/case-studies/ai-retail-automation-2026"
          />
          <CaseStudy
            title="AI FinTech Transformation 2026: $5M+ Savings"
            excerpt="95% automation, $5M+ savings, and digital banking revolution with comprehensive AI transformation."
            company="Leading FinTech"
            industry="Financial Services"
            roi="$5M+"
            date="January 20, 2026"
            readTime="22 min"
            image="💰"
            href="/case-studies/ai-fintech-transformation-2026"
          />
          <CaseStudy
            title="TechCorp: 90% Efficiency Gain with AI"
            excerpt="See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation."
            company="TechCorp Inc."
            industry="E-commerce"
            roi="$500K"
            date="January 15, 2025"
            readTime="15 min"
            image="💻"
            href="/case-studies/techcorp-ai-transformation"
          />
          <CaseStudy
            title="FinServe: GenAI Risk Mitigation & Compliance"
            excerpt="How a fintech leader cut AI risk by 70% and achieved audit-ready compliance with advanced governance frameworks."
            company="FinServe Ltd."
            industry="Fintech"
            roi="70% Risk Reduction"
            date="January 10, 2025"
            readTime="18 min"
            image="🛡️"
            href="/case-studies/finserve-genai-risk-mitigation"
          />
          <CaseStudy
            title="RetailAI Corp: 150% Revenue Growth"
            excerpt="See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation."
            company="RetailAI Corp"
            industry="Retail"
            roi="150% Growth"
            date="January 5, 2025"
            readTime="20 min"
            image="📈"
            href="/case-studies/retail-ai-transformation"
          />
          <CaseStudy
            title="Manufacturing IoT Automation: 85% Efficiency & $10M+ Savings"
            excerpt="See how smart manufacturing achieved 85% efficiency gains and $10M+ savings with IoT automation and AI."
            company="Smart Manufacturing Co."
            industry="Manufacturing"
            roi="$10M+"
            date="December 20, 2024"
            readTime="16 min"
            image="🏭"
            href="/case-studies/manufacturing-iot-automation"
          />
          <CaseStudy
            title="Enterprise AI Transformation: $5.2M ROI in 18 Months"
            excerpt="Discover how a Fortune 500 company achieved $5.2M ROI with comprehensive AI transformation."
            company="Fortune 500 Enterprise"
            industry="Technology"
            roi="$5.2M"
            date="December 15, 2024"
            readTime="12 min"
            image="🏢"
            href="/case-studies/enterprise-ai-transformation-2025"
          />
        </div>

        {/* Industry Breakdown */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Success by Industry
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$25M+</div>
              <div className="text-sm text-gray-600 mb-1">Manufacturing</div>
              <div className="text-xs text-gray-500">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$8M+</div>
              <div className="text-sm text-gray-600 mb-1">Retail</div>
              <div className="text-xs text-gray-500">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$5M+</div>
              <div className="text-sm text-gray-600 mb-1">Financial Services</div>
              <div className="text-xs text-gray-500">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-sm text-gray-600 mb-1">Automation</div>
              <div className="text-xs text-gray-500">Average Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join the companies that have achieved remarkable results with our AI solutions. 
            Get a free consultation and discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({
  title,
  excerpt,
  company,
  industry,
  roi,
  date,
  readTime,
  image,
  featured = false,
  href,
}: any) {
  const ContentWrapper = ({ children }: any) => {
    if (href) {
      return (
        <Link href={href} className="block">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <ContentWrapper>
      <article className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${
        featured ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-200'
      } group cursor-pointer`}>
        <div className="text-4xl mb-4">{image}</div>
        <div className="mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
            {industry}
          </span>
          {featured && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">Company: {company}</div>
          <div className="text-sm text-gray-500 mb-1">ROI: <span className="font-semibold text-green-600">{roi}</span></div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        {href && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              View Case Study →
            </div>
          </div>
        )}
      </article>
    </ContentWrapper>
  );
}