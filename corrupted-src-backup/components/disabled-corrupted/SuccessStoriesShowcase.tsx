import React from 'react';

const SuccessStoriesShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Success Stories Showcase
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase;
      icon: '🚀',
      result: "300% Revenue Growth",
        description: "Implemented multimodal AI achieving unprecedented customer engagement and conversion rates.",
      metrics: [
        "98% prediction accuracy",
        "60% cost reduction",
        "2M users impacted"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Global Manufacturing Inc",
      industry: "Manufacturing",
      icon: <Target className="w-8 h-8" />,
      result: "85% Downtime Reduction",
      description: "AI predictive maintenance transformed operations, eliminating unplanned downtime and reducing costs.",
      metrics: [
        "$2M annual savings",
        "40% lower maintenance costs",
        "99.9% uptime achieved"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      icon: <Users className="w-8 h-8" />,
      result: "99.95% Fraud Detection",
      description: "AI fraud prevention system achieved industry-leading accuracy while reducing false positives by 95%.",
      metrics: [
        "$5M fraud prevented",
        "Sub-100ms detection",
        "95% fewer false positives"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are transforming their operations with our AI solutions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {stories.map((story, index) => (
            <div
key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${story.color} text-white p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  {story.icon}
                  <div>
                    <h3 className="font-bold text-xl">{story.company}</h3>
                    <p className="text-sm opacity-90">{story.industry}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold">{story.result}</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="space-y-2 mb-6">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/case-studies"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
          >
            View All Success Stories
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SuccessStoriesShowcase;
