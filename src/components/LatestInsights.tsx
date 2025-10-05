import React from "react";
import { Link } from "react-router-dom";
import { latestInsights } from "../content/insights";

function isNew(dateIso: string): boolean {
  const daysSince = (Date.now() - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
  return daysSince <= 7;
}

const LatestInsights: React.FC = () => {
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
            </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestInsights.slice(0, 3).map((item) => (
            <div
key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs font-medium">
                  <span>{item.category}</span>
                  {isNew(item.date) && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-green-400/20 text-green-200 border border-green-300/30">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isNew(item.date) && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-green-400/20 text-green-200 border border-green-300/30">
                      New
                    </span>
                  )}
                  <span className="text-xs text-zion-slate-light">{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">{item.summary}</p>

              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
              >
                Read more

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

          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

