import React from 'react';
import Link from 'next/link';

export default function October2025CuttingEdgeContentBanner2() {
  const newContent = [
    {
      title: "Agentic AI Orchestration Revolution 2025
      description: "1,000+ coordinated autonomous agents achieving 96% success rates and $215M annual savings
      link: "/blog/ai-2025-october-agentic-ai-orchestration-revolution
      metrics: ["1,000+ Agents", "96% Success Rate", "$215M Savings"],
      color: "from-purple-400 to-indigo-400
      icon: "🤖"
    },
    {
      title: "Intelligent Data Fabric Revolution 2025
      description: "Self-organizing enterprise data achieving 99.99% availability and 91% cost reduction
      link: "/blog/ai-2025-october-intelligent-data-fabric-revolution
      metrics: ["99.99% Uptime", "91% Cost Cut", "87% Faster"],
      color: "from-emerald-400 to-teal-400
      icon: "🔗"
    },
    {
      title: "Neuromorphic Computing for Enterprise 2025
      description: "Brain-inspired chips delivering 1000x energy efficiency and sub-millisecond AI processing
      link: "/blog/ai-2025-october-neuromorphic-computing-enterprise
      metrics: ["1000x Efficient", "<1ms Latency", "97% Accuracy"],
      color: "from-violet-400 to-fuchsia-400
      icon: "🧠"
    }
  ];

  return (
    <div className="text-left">
      {/* Animated background effect */}
      <div className="text-left"></div>
      <div className="text-left"></div>
      
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">
              🚀 JUST PUBLISHED: OCTOBER 2025 BREAKTHROUGH CONTENT
            <
          </div>
          <h2 className="text-left">
            <span className="text-left">
              Latest Enterprise AI Innovations
            <
          </h2>
          <p className="text-left">
            Explore cutting-edge technologies transforming Fortune 500 operations with proven ROI and measurable impact
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="text-left">
          {newContent.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="text-left"
            >
              {/* Icon and New Badge */}
              <div className="text-left">
                <span className="text-left">{article.icon}<
                <span className="text-left">
                  NEW
                <
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${article.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-left">
                {article.description}
              </p>

              {/* Metrics */}
              <div className="text-left">
                {article.metrics.map((metric, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-left">{metric}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-left">
                <span className={`font-semibold bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                  Read Full Article
                <
                <span className="text-left">
                  →
                <
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">Ready to Transform Your Enterprise?</div>
              <div className="text-left">
                Discover how these technologies can drive measurable ROI for your organization
              </div>
            </div>
            <Link
              href="/contact"
              className="text-left"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
