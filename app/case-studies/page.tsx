import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  TrendingUp,
  Award,
  Target,
  Rocket,
  DollarSign,
  Percent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI transformation success stories. See how companies achieved $500M+ savings, 99% automation, and 600% ROI with our AI solutions.',
  keywords: 'AI case studies, success stories, AI transformation, enterprise AI, automation success, AI ROI, digital transformation',
};

const caseStudies = [
  {
    title: 'AI Manufacturing Transformation: 90% Efficiency Gain',
    slug: 'ai-manufacturing-transformation-2026',
    excerpt: 'See how a Fortune 500 manufacturer achieved 90% efficiency gains and $50M annual savings through comprehensive AI transformation.',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: {
      savings: '$50M',
      efficiency: '90%',
      quality: '95%',
      timeline: '12 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'Fortune 500 AI Transformation: $50M+ Savings & 300% ROI',
    slug: 'fortune-500-ai-transformation-2027',
    excerpt: 'See how a Fortune 500 company achieved $50M+ in savings and a 300% ROI through comprehensive AI transformation with Zion Tech Group.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$50M+',
      roi: '300%',
      efficiency: '85%',
      timeline: '18 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'AI FinTech Quantum Transformation 2026: $100M Revenue & 99.9% Security',
    slug: 'ai-fintech-quantum-transformation-2026',
    excerpt: 'See how a leading FinTech achieved $100M revenue increase, 99.9% security improvement, and quantum-powered trading capabilities.',
    company: 'Leading FinTech Company',
    industry: 'Financial Services',
    results: {
      revenue: '$100M',
      security: '99.9%',
      speed: '1000x',
      timeline: '18 months'
    },
    image: '💰',
    color: 'indigo'
  },
  {
    title: 'AI Mega Transformation Success 2026: $500M+ Savings Achieved',
    slug: 'ai-mega-transformation-success-2026',
    excerpt: 'Discover how a Fortune 500 company achieved $500M+ annual savings and 99% process automation through comprehensive AI transformation.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$500M+',
      automation: '99%',
      roi: '600%',
      timeline: '18 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    slug: 'ai-supply-chain-optimization-2025',
    excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: {
      savings: '$12M',
      efficiency: '90%',
      costReduction: '60%',
      timeline: '12 months'
    },
    image: '📦',
    color: 'blue'
  },
  {
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    slug: 'fintech-ai-risk-compliance-2025',
    excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
    company: 'FinTech Solutions Inc',
    industry: 'Financial Services',
    results: {
      savings: '$2.5M',
      riskReduction: '70%',
      compliance: '100%',
      timeline: '9 months'
    },
    image: '💰',
    color: 'purple'
  },
  {
    title: 'TechCorp: 90% Efficiency Gain with AI',
    slug: 'techcorp-ai-transformation',
    excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
    company: 'TechCorp Inc',
    industry: 'E-commerce',
    results: {
      savings: '$500K',
      efficiency: '90%',
      roi: '300%',
      timeline: '6 months'
    },
    image: '🛒',
    color: 'orange'
  },
  {
    title: 'HealthTech Solutions: 80% Faster Response Time',
    slug: 'healthtech-ai-transformation',
    excerpt: 'Achieved 80% faster response time, 24/7 support, and 95% customer satisfaction with AI virtual assistant.',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    results: {
      responseTime: '80% faster',
      satisfaction: '95%',
      uptime: '24/7',
      timeline: '4 months'
    },
    image: '🏥',
    color: 'teal'
  },
  {
    title: 'RetailAI Corp: 150% Revenue Growth',
    slug: 'retail-ai-transformation',
    excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
    company: 'RetailAI Corp',
    industry: 'Retail',
    results: {
      revenueGrowth: '150%',
      costReduction: '80%',
      roi: '400%',
      timeline: '8 months'
    },
    image: '🛍️',
    color: 'pink'
  },
  {
    title: 'FinanceFlow Ltd: 75% Process Efficiency Improvement',
    slug: 'financeflow-ai-automation',
    excerpt: 'Achieved 75% process efficiency improvement and 300% ROI in 6 months with AI workflow automation.',
    company: 'FinanceFlow Ltd',
    industry: 'Fintech',
    results: {
      efficiency: '75%',
      roi: '300%',
      automation: '85%',
      timeline: '6 months'
    },
    image: '💳',
    color: 'indigo'
  },
  {
    title: 'Manufacturing Excellence: Zero-Defect Production',
    slug: 'ai-manufacturing-excellence-2026',
    excerpt: 'Achieved zero-defect manufacturing with 99.99% quality assurance and 60% increase in production efficiency.',
    company: 'Global Manufacturing Ltd',
    industry: 'Manufacturing',
    results: {
      quality: '99.99%',
      efficiency: '60%',
      defects: '0%',
      timeline: '10 months'
    },
    image: '⚙️',
    color: 'red'
  }
];

const industries = [
  { name: 'All Industries', count: caseStudies.length, active: true },
  { name: 'Manufacturing', count: caseStudies.filter(item => item.industry === 'Manufacturing').length },
  { name: 'Financial Services', count: caseStudies.filter(item => item.industry === 'Financial Services' || item.industry === 'Fintech').length },
  { name: 'Healthcare', count: caseStudies.filter(item => item.industry === 'Healthcare').length },
  { name: 'E-commerce', count: caseStudies.filter(item => item.industry === 'E-commerce' || item.industry === 'Retail').length }
];

export default function CaseStudiesPage() {
  return (
    <div className="text-left>"
      {/* Hero Section */}
      <section className="text-left>"
        <div className="text-left>"
          <h1 className="text-left>"
            Success Stories & Case Studies
          </h1>
          <p className="text-left>"
            Real-world AI transformation success stories from Fortune 500 companies and enterprise clients. 
            See how our solutions deliver measurable results.
          </p>
          <div className="text-left>"
            {industries.map((industry) => (
              </span>span
                key={industry.name}
                className="text-left"
              >
                {industry.name} ({industry.count})
              <
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="text-left>"
        <div className="text-left>"
          <div className="text-left>"
            <div className="text-left>"
              </span>span className="text-left>"
                Featured Success Story
              <
              </span>span className="text-left>Fortune 500 Client<"
              </span>span className="text-left>•<"
              </span>span className="text-left>18 months<"
            </div>
            <h2 className="text-left>"
              {caseStudies[0].title}
            </h2>
            <p className="text-left>"
              {caseStudies[0].excerpt}
            </p>
            <div className="text-left>"
              {Object.entries(caseStudies[0].results).map(([key, value]) => (
                </span>span key={key} className="text-left>"
                  {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                <
              ))}
            </div>
            <Link
              href={`/case-studies/${caseStudies[0].slug}`}
              className="text-left"
            >
              Read Full Case Study
              <svg className="text-left" fill="currentColor" viewBox="0 0 20 20>"
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />"
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="text-left>"
        <div className="text-left>"
          <h2 className="text-left>"
            All Success Stories
          </h2>
          <div className="text-left>"
            {caseStudies.slice(1).map((study) => (
              <article key={study.slug} className="text-left>"
                <div className="text-left>"
                  <div className="text-left>"
                    <div className="text-left>"
                      </span>span className="text-left>{study.image}<"
                    </div>
                    <p className="text-left>{study.industry}</p>"
                  </div>
                </div>
                <div className="text-left>"
                  <div className="text-left>"
                    </span>span className={`bg-${study.color}-100 text-${study.color}-800 px-2 py-1 rounded-full text-xs font-medium`}>
                      {study.industry}
                    <
                    </span>span className="text-left>{study.company}<"
                  </div>
                  <h3 className="text-left>"
                    {study.title}
                  </h3>
                  <p className="text-left>"
                    {study.excerpt}
                  </p>
                  <div className="text-left>"
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-left>"
                        ✓ {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                      </div>
                    ))}
                  </div>
                  <div className="text-left>"
                    </span>span className="text-left>Success Story<"
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="text-left"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="text-left>"
        <div className="text-left>"
          <div className="text-left>"
            <h2 className="text-left>"
              Proven Results Across Industries
            </h2>
            <div className="text-left>"
              <div className="text-left>"
                <div className="text-left>$500M+</div>"
                <div className="text-left>Total Client Savings</div>"
                <div className="text-left>Across all implementations</div>"
              </div>
              <div className="text-left>"
                <div className="text-left>95%</div>"
                <div className="text-left>Average Efficiency Gain</div>"
                <div className="text-left>Process optimization</div>"
              </div>
              <div className="text-left>"
                <div className="text-left>200+</div>"
                <div className="text-left>Successful Projects</div>"
                <div className="text-left>Enterprise clients</div>"
              </div>
              <div className="text-left>"
                <div className="text-left>8</div>"
                <div className="text-left>Months Average ROI</div>"
                <div className="text-left>Payback period</div>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-left>"
        <div className="text-left>"
          <h2 className="text-left>"
            Ready to Create Your Success Story?
          </h2>
          <p className="text-left>"
            Join hundreds of successful companies that have transformed their operations with our AI solutions.
          </p>
          <div className="text-left>"
            <Link
              href="/services"
              className="text-left"
            >
              Explore Our Solutions
            </Link>
            <a
              href="tel:+13024640950"
              className="text-left"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}