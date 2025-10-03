import React from 'react';
import { Shield, Sparkles, CheckCircle2, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const October2025NewContentAIEthicsShowcase = () => {
  const contentItems = [
    {
      type: "Comprehensive Guide
      icon: Shield,
      title: "Enterprise AI Ethics & Governance Framework 2025
      description: "Complete 7-pillar framework for implementing ethical AI at scale. Proven at 240+ Fortune 500 companies.
      link: "/blog/ai-2025-oct-01-generative-ai-ethics-governance-framework
      color: "from-purple-500 to-indigo-600
      badge: "18 MIN READ
      highlights: [
        "99.8% compliance achievement
        "$247M avg. savings in fines
        "2.8x faster deployments
        "Complete tech stack"
      ]
    },
    {
      type: "Case Study
      icon: TrendingUp,
      title: "Fortune 50 Retail: $8.7B AI Ethics Success
      description: "How a global retailer transformed 12,847 AI models to achieve industry-leading ethics compliance and massive ROI.
      link: "/case-studies/ai-2025-oct-01-global-retail-ai-ethics-governance-8-7-billion-success
      color: "from-emerald-500 to-green-600
      badge: "SUCCESS STORY
      highlights: [
        "$8.7B total value
        "18,400% ROI in 24 months
        "12,847 models transformed
        "Zero compliance violations"
      ]
    },
    {
      type: "Quick Start Guide
      icon: Sparkles,
      title: "30-Day AI Ethics Implementation Guide
      description: "Practical, step-by-step guide to implementing enterprise AI ethics. From zero to operational in 30 days.
      link: "/guides/ai-ethics-implementation-quick-start-guide-2025
      color: "from-blue-500 to-cyan-600
      badge: "ACTIONABLE
      highlights: [
        "Week-by-week roadmap
        "Free tools & templates
        "Real-world examples
        "Zero to operational"
      ]
    }
  ];

  return (
    <div className="text-left">
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <Star className="text-left" />
            <span className="text-left">
              BREAKTHROUGH CONTENT - OCTOBER 1, 2025
            <
          </div>
          
          <h2 className="text-left">
            <span className="text-left">
              AI Ethics & Governance
            <
            <br />
            <span className="text-left">Complete Resource Library<
          </h2>
          
          <p className="text-left">
            Everything you need to transform AI ethics from compliance burden to competitive advantage. 
            Proven frameworks, real success stories, and actionable implementation guides.
          </p>

          {/* Key Stats */}
          <div className="text-left">
            <div className="text-left">
              <span className="text-left">$8.7B<
              <span className="text-left">Value Proven<
            </div>
            <div className="text-left">
              <span className="text-left">18,400%<
              <span className="text-left">ROI Achieved<
            </div>
            <div className="text-left">
              <span className="text-left">30 Days<
              <span className="text-left">To Operational<
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="text-left">
          {contentItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="text-left"
              >
                {/* Badge */}
                <div className="text-left">
                  {item.badge}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-lg`}>
                  <Icon className="text-left" />
                </div>

                {/* Type */}
                <div className="text-left">
                  {item.type}
                </div>

                {/* Title */}
                <h3 className="text-left">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-left">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="text-left">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-left">
                      <CheckCircle2 className="text-left" />
                      <span className="text-left">{highlight}<
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-left">
                  <span>Explore Now<
                  <ArrowRight className="text-left" />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              </Link>
            );
          })}
        </div>

        {/* Why This Matters */}
        <div className="text-left">
          <h3 className="text-left">
            Why AI Ethics Is Your <span className="text-left">Competitive Advantage<
          </h3>
          <div className="text-left">
            <div>
              <h4 className="text-left">
                <span className="text-left">📈<
                Business Impact
              </h4>
              <ul className="text-left">
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>4,780% average ROI</strong> on ethics investments<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>$247M average savings</strong> in avoided regulatory fines<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>34% increase</strong> in customer lifetime value<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>2.8x faster</strong> AI deployment cycles<
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-left">
                <span className="text-left">⚡<
                Risk Mitigation
              </h4>
              <ul className="text-left">
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>99.8% compliance</strong> across all AI systems<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>94% reduction</strong> in bias-related incidents<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>Zero critical failures</strong> in production<
                </li>
                <li className="text-left">
                  <CheckCircle2 className="text-left" />
                  <span><strong>Industry leadership</strong> positioning<
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-left">
          <h3 className="text-left">
            Ready to Lead in <span className="text-left">AI Ethics<?
          </h3>
          <p className="text-left">
            Join 240+ Fortune 500 companies that have transformed AI ethics into competitive advantage
          </p>
          <div className="text-left">
            <Link
              to="/guides/ai-ethics-implementation-quick-start-guide-2025"
              className="text-left"
            >
              <Sparkles className="text-left" />
              <span>Start Your 30-Day Journey<
              <ArrowRight className="text-left" />
            </Link>
            <Link
              to="/contact"
              className="text-left"
            >
              <span>Get Expert Assessment<
            </Link>
          </div>
          <p className="text-left">
            ⚡ Limited to 20 new engagements in Q4 2025 • Act now
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentAIEthicsShowcase;
