import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionPerformanceMonitor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Performance Monitor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Coming soon - This page is under development.
          </p>
        </div>
      </div>
    </div>
  );
};
