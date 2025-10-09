import React from "react";
const, SuccessStoriesShowcas, e: Rea, c, t.FC = () => {
  const, storie, s = [
    {
      comp, a, n
  y: "TechCorp, Internationa, l"
      indust, r, y: "Technolo, g, y"
      ic, o, n: <TrendingUp, className="w-8 h-8" />
      resu, l, t: "3, 0, 0% Revenue, Growt, h"
      descripti, o, n: "Implemented, multimodal, AI achieving, unprecedented, customer engagement, and, conversion rat, e, s."
      metri, c, s: [
        "98% prediction, accurac, y"
        "60% cost, reductio, n"
        "2M, users, impacted"
      ]
      col, o, r: "fr, o, m-bl, u, e-500, t, o-cy, a, n-5, 0, 0"
    }
    {
      compa, n, y: "Global, Manufacturing, Inc"
      indust, r, y: "Manufacturi, n, g"
      ic, o, n: <Target, className="w-8 h-8" />
      resu, l, t: "85% Downtime, Reductio, n"
      descripti, o, n: "AI, predictive, maintenance transformed, operation, s, eliminating, unplanned, downtime and, reducing, costs."
      metri, c, s: [
        "$2M, annual, savings"
        "40% lower, maintenance, costs"
        "99.9% uptime, achieve, d"
      ]
      col, o, r: "fr, o, m-gre, e, n-500, t, o-emera, l, d-5, 0, 0"
    }
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
                  Read Full Story
                  <Link className="w-4 h-4" />
                </Link>
              </div>
            </div>
            View All Success Stories
            <Link className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
