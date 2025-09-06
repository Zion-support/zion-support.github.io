<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
=======
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function ApiPerformanceTestingPage() {

<<<<<<< HEAD
  const features = [
    "k6/Gatling-compatible test runner"
    "SLO-aware latency reports"
    "Regression baselines per endpoint"
    "CI checks and PR annotations"
    "Synthetic traffic for staging"
  ];
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function ApiPerformanceTestingPage() {
  const features = [
    "k6/Gatling-compatible test runner",
    "SLO-aware latency reports",
    "Regression baselines per endpoint",
    "CI checks and PR annotations",
    "Synthetic traffic for staging",;
  ];

<<<<<<< HEAD
return (
=======
  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <>
      <SEO
        title="API Performance Testing"
        description="Load, latency and regression testing-as-a-service with CI and SLOs."
      />
      <main id="main" className="container mx-auto px-4 py-24">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            API Performance Testing
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Ship with confidence using automated performance tests and
            guardrails integrated into your pipeline.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-5 h-5 text-cyan-400 mt-1" />
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200"
            >
              Start from $129/mo
            </a>
            <a
              href="/market-pricing"
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Market Pricing
            </a>
            <a
              href="https://grafana.com/docs/k6/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> k6 Docs
            </a>
            <a
              href="https://gatling.io/open-source/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> Gatling OSS
            </a>
          </div>
        </section>
      </main>
    </>
  );
  return (
    <>
      <SEO
        title="API Performance Testing"
        description="Load, latency and regression testing-as-a-service with CI and SLOs."
      />
      <main id="main" className="container mx-auto px-4 py-24">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            API Performance Testing
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Ship with confidence using automated performance tests and
            guardrails integrated into your pipeline.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-5 h-5 text-cyan-400 mt-1" />
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200"
            >
              Start from $129/mo
            </a>
            <a
              href="/market-pricing"
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Market Pricing
            </a>
            <a
              href="https://grafana.com/docs/k6/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> k6 Docs
            </a>
            <a
              href="https://gatling.io/open-source/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> Gatling OSS
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
