import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Wrench, Rocket, ArrowRight, Star } from 'lucide-react';

const October2025NewContentLLMShowcase = () => {
  const content = [
    {
      icon: BookOpen,
      title: "Enterprise LLM Orchestration Revolution
      type: "Technical Article
      description: "Deep dive into multi-model AI strategy achieving 450% productivity gains and $2.3B in value creation
      link: "/blog/ai-2025-oct-01-enterprise-llm-orchestration-revolution
      readTime: "12 min
      tags: ["LLM", "Cost Optimization", "Multi-Model"],
      color: "from-blue-500 to-cyan-500
      highlights: [
        "73% cost reduction strategies
        "Intelligent model routing explained
        "Real-world implementation patterns"
      ]
    },
    {
      icon: Briefcase,
      title: "$8.2B Fortune 100 Retail Transformation
      type: "Case Study
      description: "How a global retailer achieved 1,840% ROI through enterprise LLM orchestration
      link: "/case-studies/ai-2025-oct-01-fortune-100-retail-llm-orchestration-8-2-billion-success
      readTime: "15 min
      tags: ["Retail", "ROI", "Fortune 100"],
      color: "from-green-500 to-emerald-500
      highlights: [
        "$7.9M monthly cost savings
        "520% productivity improvement
        "42,000 AI agents orchestrated"
      ]
    },
    {
      icon: Wrench,
      title: "Complete Implementation Guide 2025
      type: "Technical Guide
      description: "Step-by-step roadmap with code examples, architecture patterns, and best practices
      link: "/guides/enterprise-llm-orchestration-implementation-guide-2025
      readTime: "45 min
      tags: ["Implementation", "DevOps", "Architecture"],
      color: "from-purple-500 to-pink-500
      highlights: [
        "6-month deployment timeline
        "Production-ready code examples
        "Security & compliance framework"
      ]
    },
    {
      icon: Rocket,
      title: "Enterprise Orchestration Platform
      type: "Service Offering
      description: "Turnkey platform delivering 10-20x Year 1 ROI with proven Fortune 500 results
      link: "/services/ai-2025-october-enterprise-llm-orchestration-platform
      readTime: "10 min
      tags: ["Platform", "Services", "Implementation"],
      color: "from-orange-500 to-red-500
      highlights: [
        "Complimentary assessment available
        "$128,500 limited-time bonus
        "99.97% platform reliability"
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
              New Content Published: October 1, 2025
            <
            <Star className="text-left" />
          </div>
          
          <h2 className="text-left">
            Enterprise LLM Orchestration
          </h2>
          <p className="text-left">
            Complete resource library for implementing multi-model AI strategies that deliver 
            <span className="text-left"> $8.2B value creation< and 
            <span className="text-left"> 1,840% ROI<
          </p>
        </div>

        {/* Content Grid */}
        <div className="text-left">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="text-left"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`}></div>
                
                {/* Icon & Type */}
                <div className="text-left">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                    <Icon className="text-left" />
                  </div>
                  <span className="text-left">
                    {item.type}
                  <
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
                <ul className="text-left">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-left">
                      <ArrowRight className="text-left" />
                      <span>{highlight}<
                    </li>
                  ))}
                </ul>

                {/* Tags & Read Time */}
                <div className="text-left">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-left"
                    >
                      {tag}
                    <
                  ))}
                  <span className="text-left">
                    📖 {item.readTime}
                  <
                </div>

                {/* CTA */}
                <div className={`flex items-center font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform`}>
                  Read More
                  <ArrowRight className="text-left" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="text-left">
          <div className="text-left">
            <div>
              <div className="text-left">4</div>
              <div className="text-left">Comprehensive Resources</div>
            </div>
            <div>
              <div className="text-left">$8.2B</div>
              <div className="text-left">Proven Value Creation</div>
            </div>
            <div>
              <div className="text-left">1,840%</div>
              <div className="text-left">Demonstrated ROI</div>
            </div>
            <div>
              <div className="text-left">73%</div>
              <div className="text-left">Cost Reduction</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-left">
          <Link
            to="/contact"
            className="text-left"
          >
            <Rocket className="text-left" />
            Start Your Transformation Today
            <ArrowRight className="text-left" />
          </Link>
          <p className="text-left">
            Schedule your complimentary assessment • Receive $128,500 in bonus value
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentLLMShowcase;
