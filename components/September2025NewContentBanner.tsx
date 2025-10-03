import React from 'react';
import { Sparkles, Shield, Brain, Activity, TrendingUp, ArrowRight } from 'lucide-react';

const September2025NewContentBanner = () => {
  const newContent = [
    {
      icon: Shield,
      title: "Enterprise AI Security
      description: "Comprehensive guide to securing AI systems with zero-trust architecture
      link: "/blog/ai-2025-enterprise-security-best-practices
      tag: "NEW GUIDE
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Brain,
      title: "Prompt Engineering Mastery
      description: "Advanced techniques to maximize LLM performance in production
      link: "/blog/ai-2025-prompt-engineering-enterprise-guide
      tag: "HOT
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Activity,
      title: "Healthcare AI Success
      description: "95% diagnostic accuracy & $180M savings case study
      link: "/case-studies/healthcare-ai-diagnostic-transformation-2025
      tag: "CASE STUDY
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "MLOps Best Practices
      description: "Production-ready AI deployment with proven MLOps strategies
      link: "/blog/ai-2025-mlops-production-best-practices
      tag: "FEATURED
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="text-left">
      {/* Animated background elements */}
      <div className="text-left">
        <div className="text-left"></div>
        <div className="text-left"></div>
        <div className="text-left"></div>
      </div>

      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <Sparkles className="text-left" />
            <span className="text-left">Just Released - September 2025<
          </div>
          
          <h2 className="text-left">
            Latest AI Insights & 
            <span className="text-left"> Success Stories<
          </h2>
          
          <p className="text-left">
            Cutting-edge guides, case studies, and best practices from the frontlines of enterprise AI implementation
          </p>
        </div>

        {/* Content Grid */}
        <div className="text-left">
          {newContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-left"
            >
              {/* Tag */}
              <div className="text-left">
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {item.tag}
                <
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-left" />
              </div>

              {/* Content */}
              <h3 className="text-left">
                {item.title}
              </h3>
              
              <p className="text-left">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="text-left">
                <span>Read More<
                <ArrowRight className="text-left" />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <div className="text-left">
            <a
              href="/blog"
              className="text-left"
            >
              Explore All Articles
            </a>
            <a
              href="/case-studies"
              className="text-left"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">4</div>
            <div className="text-left">New Resources</div>
          </div>
          <div className="text-left">
            <div className="text-left">95%</div>
            <div className="text-left">Proven Accuracy</div>
          </div>
          <div className="text-left">
            <div className="text-left">$180M</div>
            <div className="text-left">Client Savings</div>
          </div>
          <div className="text-left">
            <div className="text-left">100%</div>
            <div className="text-left">Actionable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September2025NewContentBanner;
