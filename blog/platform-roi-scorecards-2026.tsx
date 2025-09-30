import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

const PlatformROIScorecards2026 = () => {
  return (
    <>
      <Helmet>
        <title>Platform ROI Scorecards 2026: From Golden Paths to Revenue | Zion Tech Group</title>
        <meta
          name="description"
          content="Lightweight scorecards that connect platform capabilities to adoption, SLOs, and measurable business impact."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog/platform-roi-scorecards-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">Platform Engineering</span>
              <span className="bg-gradient-to-r from-green-100 to-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold">📈 ROI</span>
              <time className="text-gray-600">October 30, 2025</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Platform ROI Scorecards 2026</h1>
            <p className="text-xl text-gray-700">From golden paths to revenue: scorecards engineers actually use.</p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl p-6 bg-white border border-gray-200 flex items-start gap-3">
              <BarChart3 className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold">Adoption</h3>
                <p className="text-gray-600">Golden path usage, TTFX, paved road coverage</p>
              </div>
            </div>
            <div className="rounded-xl p-6 bg-white border border-gray-200 flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold">Outcomes</h3>
                <p className="text-gray-600">SLOs, incident rate, cycle time, cost savings</p>
              </div>
            </div>
            <div className="rounded-xl p-6 bg-white border border-gray-200 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold">Actionable</h3>
                <p className="text-gray-600">PR checks and canaries tied to scorecards</p>
              </div>
            </div>
          </div>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scorecard Design</h2>
            <p className="text-gray-700 mb-6">Great scorecards are adopted because they help teams ship. This guide shows a minimal set of metrics and automation hooks that connect daily work to business value without slowing delivery.</p>
          </section>

          <div className="mt-10 p-6 rounded-xl bg-white border border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Prove platform ROI quarter by quarter</h3>
              <p className="text-gray-600">We design scorecards and guardrails that drive adoption and outcomes.</p>
            </div>
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Get help</Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default PlatformROIScorecards2026;

