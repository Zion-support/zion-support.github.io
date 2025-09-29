import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { latestInsights } from "../content/insights";

const LatestInsights: React.FC = () => {
  const insights = latestInsights
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      title: item.title,
      description: item.summary,
      date: new Date(item.date).toLocaleDateString(),
      category: item.category,
      href: "/insights",
    }));

  return (
    <section className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Insights</h2>
            <p className="text-zion-slate-light">Research, guides, and playbooks from our team.</p>
          </div>
            <Link
            to="/insights"
            className="hidden sm:inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs font-medium">
                  <span>{item.category}</span>
                </div>
                <span className="text-xs text-zion-slate-light">{item.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">{item.description}</p>

              <Link
                to={item.href}
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

