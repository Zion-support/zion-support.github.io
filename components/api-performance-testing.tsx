
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508


import React from './react';
import SEO from "../components / SEO";
import { Check, ExternalLink  } from './lucide-react';
export default /**
 * ApiPerformanceTestingPage - Function description
 */
function ApiPerformanceTestingPage() {
  const features = [;
    "k6 / Gatling - compatible test runner",
    "SLO - aware latency reports",


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
export default function ApiPerformanceTestingPage() {;
  const features = [;
    "k6/Gatling-compatible test runner",;
    "SLO-aware latency reports",;
    "Regression baselines per endpoint",;
    "CI checks and PR annotations",;
    "Synthetic traffic for staging",;
  ];
import React from 'react',
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export default function ApiPerformanceTestingPage() {
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


export default function ApiPerformanceTestingPage() {
<<<<<<< HEAD
  const features = [
    "k6/Gatling-compatible test runner",
<<<<<<< HEAD
<<<<<<< HEAD
    "SLO-aware latency reports",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    "SLO-aware latency reports",

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    "Regression baselines per endpoint",
    "CI checks and PR annotations",
    "Synthetic traffic for staging",
  ];
;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    "SLO-aware latency reports",  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <>;
      <SEO;
        title="API Performance Testing";
        description="Load, latency and regression testing - as - a-service with CI and SLOs.";
      />;
      <main id="main" className="container mx - auto px-4 py-24">;
        <section className="max-w-5xl mx-auto">;
          <h1 className="text - 4xl font-extrabold tracking-tight">;
            API Performance Testing;
          </h1>;
          <p className="mt - 4 text - lg text-gray-300">;
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.;
          </p>;
          <div className="mt - 8 grid sm:grid - cols-2 gap-6">;
            {features.map ((f) => (
              <div;  return (
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
                className="flex items - start space - x-3 p - 4 rounded - xl bg-white / 5 border border-white / 10";
              >;
                <Check className="w - 5 h - 5 text - cyan-400 mt-1" />;
                <p className="text-gray-200">{f}</p>;
              </div>))}
          </div>;
          <div className="mt - 8 flex flex - wrap items-center gap-4">;
            <a;
              href="/contact";
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg-gray-200";
            >;
              Start from $129 / mo;
            </a>;
            <a;
              href="/market - pricing";
              className="px - 5 py - 3 rounded - lg border border - white / 20 text-white hover:bg-white / 10";
            >;
              Market Pricing;
            </a>;
            <a;
              href="https://grafana.com / docs / k6/";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text-cyan-300";
            >;
              <ExternalLink className="w-4 h-4" /> k6 Docs;
            </a>;
            <a;
              href="https://gatling.io / open - source/";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text-cyan-300";
            >;
<<<<<<< HEAD
<<<<<<< HEAD
              <ExternalLink className="w-4 h-4" /> Gatling OSS;
            </a>;
          </div>;
        </section>;
      </main>;

<<<<<<< HEAD
    </>);
=======
              <ExternalLink className="w - 4 h - 4" /> Gatling OSS;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <>;
      <SEO;
        title="API Performance Testing";
        description="Load, latency and regression testing - as - a-service with CI and SLOs.";
      />;
      <main id="main" className="container mx - auto px - 4 py - 24">;
        <section className="max - w-5xl mx - auto">;
          <h1 className="text - 4xl font - extrabold tracking - tight">;
            API Performance Testing;
          </h1>;
          <p className="mt - 4 text - lg text - gray - 300">;
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.;
          </p>;
          <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
            {features.map ((f) => (
              <div;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  return (
>>>>>>> main
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              <ExternalLink className="w - 4 h - 4" /> Gatling OSS;
  return (

  return (
main
  return (

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;
              href="/contact";
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg - gray - 200";
            >;
              Start from $129 / mo;
            </a>;
            <a;
              href="/market - pricing";
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Market Pricing;
            </a>;
            <a;
              href="https://grafana.com / docs / k6/";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> k6 Docs;
            </a>;
            <a;
              href="https://gatling.io / open - source/";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> Gatling OSS;
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    </>);
}
origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662

    </>);
}

	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	];
	const features = null;
origin/cursor/automate-test-improve-and-merge-code-2533
	return (
		<>
			<SEO title="API Performance Testing" description="Load, latency and regression testing-as-a-service with CI and SLOs." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tight">API Performance Testing</h1>
					<p className="mt-4 text-lg text-gray-300">Ship with confidence using automated performance tests and guardrails integrated into your pipeline.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
<p className="text-gray-200">{f}</p>

							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $129/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://grafana.com/docs/k6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> k6 Docs
							</a>
<a href="https://gatling.io/open-source/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Gatling OSS
							</a>
					</div>
				</section>
			</main>
		</>
);
}
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              Start from $129/mo
            </a>
            <a
              href='/market-pricing'
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10'
            >
              Market Pricing
            </a>
            <a
              href='https://grafana.com/docs/k6/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'
            >
              <ExternalLink className='w-4 h-4' /> k6 Docs
            </a>
            <a
              href='https://gatling.io/open-source/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'
            >
              <ExternalLink className='w-4 h-4' /> Gatling OSS
            </a>
          </div>
        </section>
      </main>
    </>
  );

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
