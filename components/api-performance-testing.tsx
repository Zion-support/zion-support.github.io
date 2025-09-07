
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false ;};
  }
<<<<<<< HEAD
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
=======
  static getDerivedStateFromError(error) {
    return { hasError: true ;};
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";

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

export default function ApiPerformanceTestingPage() {;
  const features = [;
    "k6/Gatling-compatible test runner",;
    "SLO-aware latency reports",;
    "Regression baselines per endpoint",;
    "CI checks and PR annotations",;
    "Synthetic traffic for staging",;
  ];
import React from 'react';

import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";



<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

export default function ApiPerformanceTestingPage() {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function ApiPerformanceTestingPage() {
<<<<<<< HEAD

  const features = [
    "k6/Gatling-compatible test runner"
    "SLO-aware latency reports"
    "Regression baselines per endpoint"
    "CI checks and PR annotations"
    "Synthetic traffic for staging"
=======

<<<<<<< HEAD

export default function ApiPerformanceTestingPage() {}
  const features = []
    "k6/Gatling-compatible test runner""
    "SLO-aware latency reports""
    "Regression baselines per endpoint""
    "CI checks and PR annotations""
    "Synthetic traffic for staging";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ];
  return (

export default function ApiPerformanceTestingPage() {}
  const features = ["
    "k6/Gatling-compatible test runner","
    "SLO-aware latency reports",
<<<<<<< HEAD
pr-12243
=======
=======
  const features = [
    "k6/Gatling-compatible test runner",
    "SLO-aware latency reports",
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export default function ApiPerformanceTestingPage() {

  const features = [
    "k6/Gatling-compatible test runner"
    "SLO-aware latency reports"
    "Regression baselines per endpoint"
    "CI checks and PR annotations"
    "Synthetic traffic for staging"
  ];
  return (

export default function ApiPerformanceTestingPage() {
  const features = [
    "k6/Gatling-compatible test runner",
    "SLO-aware latency reports",
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    "Regression baselines per endpoint",
    "CI checks and PR annotations",
    "Synthetic traffic for staging",
=======
"
    "Regression baselines per endpoint","
    "CI checks and PR annotations","
    "Synthetic traffic for staging",;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ];
;
  return (
    <>;
      <SEO;"
        title="API Performance Testing";"
        description="Load, latency and regression testing - as - a-service with CI and SLOs.";
      />;"
      <main id="main" className="container mx - auto px - 4 py - 24">;"
        <section className="max - w-5xl mx - auto">;"
          <h1 className="text - 4xl font - extrabold tracking - tight">;
            API Performance Testing;
          </h1>;"
          <p className="mt - 4 text - lg text - gray - 300">;
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.;
          </p>;"
          <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
            {features.map ((f) => (
              <div;
                key={f}"
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;"
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;"
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;"
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;"
              href="/contact";"
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover:bg - gray - 200";
            >;
              Start from $129 / mo;
            </a>;
            <a;"
              href="/market - pricing";"
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Market Pricing;
            </a>;
            <a;"
              href="https://grafana.com / docs / k6/";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> k6 Docs;
            </a>;
            <a;"
              href="https://gatling.io / open - source/";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> Gatling OSS;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
            </a>;
          </div>;
        </section>;
      </main>;

    </>);
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
  return (
  return (
=======

  return (


  return (

<<<<<<< HEAD

  return (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            </a>;
          </div>;
        </section>;
      </main>;

    </>);
<<<<<<< HEAD
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
return (
  return (
  return (
  return (
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (
  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <>
      <SEO"
        title="API Performance Testing""
        description="Load, latency and regression testing-as-a-service with CI and SLOs."
      />"
      <main id="main" className="container mx-auto px-4 py-24">"
        <section className="max-w-5xl mx-auto">"
          <h1 className="text-4xl font-extrabold tracking-tight">
            API Performance Testing;
          </h1>"
          <p className="mt-4 text-lg text-gray-300">
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.
          </p>"
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div;
                key={f}"
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;"
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;"
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;"
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;"
              href="/contact";"
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg - gray - 200";
            >;
              Start from $129 / mo;
            </a>;
            <a;"
              href="/market - pricing";"
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Market Pricing;
            </a>;
            <a;"
              href="https://grafana.com / docs / k6/";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> k6 Docs;
            </a>;
            <a;"
              href="https://gatling.io / open - source/";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> Gatling OSS;
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

</>);
}

pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </>);
}

<<<<<<< HEAD
<<<<<<< HEAD
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
ursor/fix-website-loading-errors-and-merge-6662
=======

}



>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    </>);
}

	const features = ['
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	];
<<<<<<< HEAD
<<<<<<< HEAD
	const features = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
	const features = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
	return (
		<>"
			<SEO title="API Performance Testing" description="Load, latency and regression testing-as-a-service with CI and SLOs." />"
			<main id="main" className="container mx-auto px-4 py-24">"
				<section className="max-w-5xl mx-auto">"
					<h1 className="text-4xl font-extrabold tracking-tight">API Performance Testing</h1>"
					<p className="mt-4 text-lg text-gray-300">Ship with confidence using automated performance tests and guardrails integrated into your pipeline.</p>"
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => ("
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">"
								<Check className="w-5 h-5 text-cyan-400 mt-1" />"
<p className="text-gray-200">{f}</p>

							</div>
						))}
					</div>"
					<div className="mt-8 flex flex-wrap items-center gap-4">"
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $129/mo</a>"
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>"
						<a href="https://grafana.com/docs/k6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">"
							<ExternalLink className="w-4 h-4" /> k6 Docs;
							</a>"
<a href="https://gatling.io/open-source/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">"
							<ExternalLink className="w-4 h-4" /> Gatling OSS;
							</a>
					</div>
				</section>
			</main>
		</>
);
}
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
}
  return (

  return (


return (
  return (
    <>
      <SEO"
        title="API Performance Testing""
        description="Load, latency and regression testing-as-a-service with CI and SLOs."
      />"
      <main id="main" className="container mx-auto px-4 py-24">"
        <section className="max-w-5xl mx-auto">"
          <h1 className="text-4xl font-extrabold tracking-tight">
            API Performance Testing;
          </h1>"
          <p className="mt-4 text-lg text-gray-300">
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.
          </p>"
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div;
                key={f}"
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >"
                <Check className="w-5 h-5 text-cyan-400 mt-1" />"
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>"
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a"
              href="/contact""
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200"
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </>);
}
  return (

  return (


return (
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
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200"
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
            >
              Start from $129/mo;
            </a>
<<<<<<< HEAD
            <a
<<<<<<< HEAD
              href='/market-pricing'
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10'
=======
            <a"
              href="/market-pricing""
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              href="/market-pricing"
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            >
              Market Pricing;
            </a>
<<<<<<< HEAD
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
<<<<<<< HEAD
              <ExternalLink className='w-4 h-4' /> Gatling OSS
=======
            <a"
              href="https://grafana.com/docs/k6/""
              target="_blank""
              rel="noreferrer""
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >"
              <ExternalLink className="w-4 h-4" /> k6 Docs;
            </a>
            <a"
              href="https://gatling.io/open-source/""
              target="_blank""
              rel="noreferrer""
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >"
              <ExternalLink className="w-4 h-4" /> Gatling OSS;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <ExternalLink className="w-4 h-4" /> Gatling OSS
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </a>
          </div>
        </section>
      </main>
    </>
  );
<<<<<<< HEAD
  return (
    <>
      <SEO"
        title="API Performance Testing""
        description="Load, latency and regression testing-as-a-service with CI and SLOs."
      />"
      <main id="main" className="container mx-auto px-4 py-24">"
        <section className="max-w-5xl mx-auto">"
          <h1 className="text-4xl font-extrabold tracking-tight">
            API Performance Testing;
          </h1>"
          <p className="mt-4 text-lg text-gray-300">
            Ship with confidence using automated performance tests and;
            guardrails integrated into your pipeline.
          </p>"
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div;
                key={f}"
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >"
                <Check className="w-5 h-5 text-cyan-400 mt-1" />"
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>"
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a"
              href="/contact""
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200"
            >
              Start from $129/mo;
            </a>
            <a"
              href="/market-pricing""
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Market Pricing;
            </a>
            <a"
              href="https://grafana.com/docs/k6/""
              target="_blank""
              rel="noreferrer""
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >"
              <ExternalLink className="w-4 h-4" /> k6 Docs;
            </a>
            <a"
              href="https://gatling.io/open-source/""
              target="_blank""
              rel="noreferrer""
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >"
              <ExternalLink className="w-4 h-4" /> Gatling OSS;
=======
<<<<<<< HEAD
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
