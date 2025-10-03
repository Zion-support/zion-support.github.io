import React from 'react';
import { Zap, Cpu, Factory, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const September30CognitiveAutomationBanner = () => {
  const newContent = [
    {
      icon: Cpu,
      title: "Cognitive Automation Platform Revolution
      description: "Breaking news: Revolutionary AI platform with 97% accuracy, 500x performance, and unprecedented ROI
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution
      tag: "🚀 BREAKING NEWS
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: Factory,
      title: "$18B Manufacturing Success Story
      description: "Fortune 50 company achieves 2,400% ROI and transforms global operations in 6 months
      link: "/case-studies/ai-2025-september-30-global-manufacturing-cognitive-automation-18-billion-success
      tag: "💰 CASE STUDY
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "500x Performance Improvement
      description: "Discover how cognitive automation delivers unprecedented speed and accuracy at scale
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution#performance-metrics
      tag: "⚡ TECH DEEP DIVE
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: DollarSign,
      title: "ROI Calculator & Implementation
      description: "Calculate your potential returns and see the 90-day transformation roadmap
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution#investment-roi
      tag: "📊 TOOLS
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="text-left">
      {/* Animated background elements */}
      <div className="text-left">
        <div className="text-left"></div>
        <div className="text-left" style={{ animationDelay: '1s' }}></div>
        <div className="text-left" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <Zap className="text-left" />
            <span className="text-left">Breaking: September 30, 2025 - Major AI Breakthrough<
            <Zap className="text-left" />
          </div>
          
          <h2 className="text-left">
            Cognitive Automation Platform:
            <br />
            <span className="text-left">
              The AI Revolution You've Been Waiting For
            <
          </h2>
          
          <p className="text-left">
            <strong className="text-left">$18 Billion in value creation.</strong> <strong className="text-left">97% accuracy.</strong> <strong className="text-left">500x performance.</strong>
            <br />
            Discover the most significant advancement in enterprise AI since machine learning itself.
          </p>
        </div>

        {/* Featured Stats Banner */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">$18B</div>
              <div className="text-left">Value Created</div>
            </div>
            <div className="text-left">
              <div className="text-left">97%</div>
              <div className="text-left">Decision Accuracy</div>
            </div>
            <div className="text-left">
              <div className="text-left">500x</div>
              <div className="text-left">Performance Boost</div>
            </div>
            <div className="text-left">
              <div className="text-left">2,400%</div>
              <div className="text-left">ROI Achieved</div>
            </div>
          </div>
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
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg`}>
                  {item.tag}
                <
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
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
                <span>Explore Now<
                <ArrowRight className="text-left" />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <div className="text-left">
            <a
              href="/blog/ai-2025-september-30-cognitive-automation-platform-revolution"
              className="text-left"
            >
              Read Full Breakthrough Article →
            </a>
            <a
              href="/case-studies/ai-2025-september-30-global-manufacturing-cognitive-automation-18-billion-success"
              className="text-left"
            >
              View $18B Success Story →
            </a>
            <a
              href="/contact"
              className="text-left"
            >
              Get Your Free Demo
            </a>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="text-left">
          <div className="text-left">
            <p className="text-left">
              <span className="text-left">Limited Time Offer:< First 50 enterprise clients receive premium onboarding services at no additional cost 
              <span className="text-left"> (valued at $500K)<
            </p>
            <p className="text-left">
              Published: September 30, 2025 | Implementation Partner: Zion Tech Group | Verified Results by Independent Third Party
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September30CognitiveAutomationBanner;
