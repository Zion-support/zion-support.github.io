<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
export default function ApiPerformanceTestingPage() {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


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
import React from 'react';
import SEO from '../components / SEO';
import {Check, ExternalLink} from 'lucide-react';

                    /mo;
                  </span>;
                </p>;
              </div>;

              <div className='rounded - 2xl border border - fuchsia - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Growth</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Up to 2k RPS, 3 regions, regression gates.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>;
                  $590;
                  <span className='text - base font - normal text - gray - 300'>;

                    /mo;
                  </span>;
                </p>;
              </div>;

                rel='noreferrer'>;
=======
              <div className='rounded - 2xl border border - emerald - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Enterprise</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Unlimited scale, private agents, SSO, and SRE support.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>Custom</p>;
              </div>;
            </div>;
            <p className='mt - 4 text - sm text - gray - 400'>;
              Market references:{' '}
<<<<<<< HEAD
              <a
                className='underline hover:text-cyan-300'
                href='https://k6.io/pricing/'
                target='_blank'
                rel='noreferrer'
              >
                Grafana k6
              </a>
              ,{' '}
              <a
                className='underline hover:text-cyan-300'
                href='https://www.loadmill.com/pricing'
                target='_blank'
                rel='noreferrer'
              >
                Loadmill
              </a>
              ,{' '}
              <a
                className='underline hover:text-cyan-300'
                href='https://www.blazemeter.com/pricing'
                target='_blank'
                rel='noreferrer'
              >
                BlazeMeter
              </a>
              .
            </p>
          </div>
<div className='mt-14 flex flex-wrap items-center gap-4'>
            <Link
              href='/contact'
              className='px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold'
            >
              Talk to Sales
            </Link>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'
            >
              Email: kleber@ziontechgroup.com
            </a>
            <span className='text-gray-400'>Call: +1 302 464 0950</span>
          </div>
        </div>
      </section>
    </div>
  );

import SEO from '../components/SEO',
import { Check, ExternalLink } from 'lucide-react',
export default function ApiPerformanceTestingPage() {
	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	],
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' },
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</div>
					<div className="mt-14">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 250 RPS, 1 region, CI integration.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 2k RPS, 3 regions, regression gates.</p>
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited scale, private agents, SSO, and SRE support.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>
					</div>
					<div className="mt-14 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</Link>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
=======
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
import React from 'react';
import SEO from '../components / SEO';
import {Check, ExternalLink} from 'lucide-react';
                title: 'Reports & Export',
                desc: 'Beautiful HTML / CSV exports, signed artifacts, and webhook notifications.',
              },
            ].map (function => (
              <div;
                key={f.title}
                className='rounded - xl border border - white / 10 bg - white / 5 p - 6 backdrop - blur';
              >;
                <h3 className='text - lg font - semibold text - white'>{f.title}</h3>;
                <p className='mt - 2 text - sm text - gray - 300'>{f.desc}</p>;
              </div>))}
          </div>;
          <div className='mt - 14'>;
            <h2 className='text - 2xl font - semibold'>Pricing</h2>;
            <div className='mt - 6 grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
              <div className='rounded - 2xl border border - cyan - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Starter</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Up to 250 RPS, 1 region, CI integration.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>;
                  $149;
                  <span className='text - base font - normal text - gray - 300'>;
                    /mo;
                  </span>;
                </p>;
              </div>;
              <div className='rounded - 2xl border border - fuchsia - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Growth</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Up to 2k RPS, 3 regions, regression gates.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>;
                  $590;
                  <span className='text - base font - normal text - gray - 300'>;
                    /mo;
                  </span>;
                </p>;
              </div>;
                rel='noreferrer'>;
              <div className='rounded - 2xl border border - emerald - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Enterprise</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Unlimited scale, private agents, SSO, and SRE support.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>Custom</p>;
              </div>;
            </div>;
            <p className='mt - 4 text - sm text - gray - 400'>;
              Market references:{' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://k6.io / pricing/';
                target='_blank';
                rel='noreferrer';
              >;
                Grafana k6;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.loadmill.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;
                Loadmill;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.blazemeter.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;
                BlazeMeter;
              </a>;
              .;
            </p>;
          </div>;
              href='mailto:kleber@ziontechgroup && ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'>;
              Email: kleber@ziontechgroup && ziontechgroup.com;
            </a>;
            <span className='text-gray-400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	];
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
export default function ApiPerformanceTestingPage() {
  const features = [
    'k6/Gatling-compatible test runner',
    'SLO-aware latency reports',
    'Regression baselines per endpoint',
    'CI checks and PR annotations',
    'Synthetic traffic for staging',;
  ];

  const features = [
    'k6/Gatling-compatible test runner'
    'SLO-aware latency reports'
    'Regression baselines per endpoint'
    'CI checks and PR annotations'
    'Synthetic traffic for staging'
  ];
  return (
    <div className='relative isolate'>
      <section className='px-6 lg:px-10 py-16 lg:py-24'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent'>
            API Performance Testing
          </h1>
          <p className='mt-4 text-gray-300 max-w-3xl'>
            Load, latency, reliability and regression testing for APIs with
            synthetic traffic generation, SLO tracking, distributed load
            injectors, and CI/CD integration. Benchmark providers, catch
            performance drift, and ship with confidence.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                title: 'Distributed Load'
                desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.'
              }
              {
                title: 'SLO Dashboards'
                desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.'
              }
              {
                title: 'Protocol Coverage'
                desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.'
              }
              {
                title: 'Regression Gates'
                desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.'
              }
              {
                title: 'Realistic Traffic'
                desc: 'Custom scenarios, auth flows, test data seeding, and user think time.'
              }
              {
                title: 'Reports & Export'
                desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.'
              }
            ].map(f => (
              <div
                key={f.title}
                className='rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur'
              >
                <h3 className='text-lg font-semibold text-white'>{f.title}</h3>
                <p className='mt-2 text-sm text-gray-300'>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className='mt-14'>
            <h2 className='text-2xl font-semibold'>Pricing</h2>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='rounded-2xl border border-cyan-400/30 p-6'>
                <h3 className='text-xl font-bold'>Starter</h3>
                <p className='mt-2 text-gray-300'>
                  Up to 250 RPS, 1 region, CI integration.
                </p>
                <p className='mt-4 text-3xl font-bold'>
                  $149
                  <span className='text-base font-normal text-gray-300'>
                    /mo
                  </span>
                </p>
              </div>
              <div className='rounded-2xl border border-fuchsia-400/30 p-6'>
                <h3 className='text-xl font-bold'>Growth</h3>
                <p className='mt-2 text-gray-300'>
                  Up to 2k RPS, 3 regions, regression gates.
                </p>
                <p className='mt-4 text-3xl font-bold'>
                  $590
                  <span className='text-base font-normal text-gray-300'>
                    /mo
                  </span>
                </p>
              </div>
              <div className='rounded-2xl border border-emerald-400/30 p-6'>
                <h3 className='text-xl font-bold'>Enterprise</h3>
                <p className='mt-2 text-gray-300'>
                  Unlimited scale, private agents, SSO, and SRE support.
                </p>
                <p className='mt-4 text-3xl font-bold'>Custom</p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-400'>
              Market references:{' '}
              <a
                className='underline hover:text-cyan-300'
                href='https://k6.io/pricing/'
                target='_blank'
                rel='noreferrer'
              >
                Grafana k6
              </a>
              ,{' '}
              <a
                className='underline hover:text-cyan-300'
                href='https://www.loadmill.com/pricing'
                target='_blank'
                rel='noreferrer'
              >
                Loadmill
              </a>
              ,{' '}
              <a
                className='underline hover:text-cyan-300'
                href='https://www.blazemeter.com/pricing'
                target='_blank'
                rel='noreferrer'
              >
                BlazeMeter
              </a>
              .
            </p>
          </div>
<div className='mt-14 flex flex-wrap items-center gap-4'>
            <Link
              href='/contact'
              className='px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold'
            >
              Talk to Sales
            </Link>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'
            >
              Email: kleber@ziontechgroup.com
            </a>
            <span className='text-gray-400'>Call: +1 302 464 0950</span>
          </div>
        </div>
      </section>
    </div>
  );

}
import React from 'react',
import SEO from '../components/SEO',
import { Check, ExternalLink } from 'lucide-react',
export default function ApiPerformanceTestingPage() {
	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	],
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },
<<<<<<< HEAD
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' };
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' };
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' };
=======
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' },
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
<<<<<<< HEAD
						))}
=======
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
					</div>
					<div className="mt-14">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 250 RPS, 1 region, CI integration.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 2k RPS, 3 regions, regression gates.</p>
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited scale, private agents, SSO, and SRE support.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>
					</div>
					<div className="mt-14 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</Link>
<<<<<<< HEAD
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>

					<div className=&quot;mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
						{[
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' },
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (
							<div key={f.title} className=&quot;rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
								<h3 className=&quot;text-lg font-semibold text-white&quot;>{f.title}</h3>
								<p className=&quot;mt-2 text-sm text-gray-300&quot;>{f.desc}</p>
							</div>
						))}
					</div>

					<div className=&quot;mt-14&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 250 RPS, 1 region, CI integration.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$149<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-fuchsia-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 2k RPS, 3 regions, regression gates.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$590<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-emerald-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Unlimited scale, private agents, SSO, and SRE support.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>

					</div>

					<div className=&quot;mt-14 flex flex-wrap items-center gap-4&quot;>
						<Link href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold&quot;>Talk to Sales</Link>
						<a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20&quot;>Email: kleber@ziontechgroup.com</Link>
						<span className=&quot;text-gray-400&quot;>Call: +1 302 464 0950</span>

=======
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</Link>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
					</div>
				</div>
			</section>
		</div>
	)
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
export default function ApiPerformanceTestingPage(req, res) {
  try {
	const features = [;
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging';
	];
	return (;
		<div className="relative isolate">;
			<section className="px-6 lg:px-10 py-16 lg:py-24">;
				<div className="max-w-6xl mx-auto">;
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>;
					<p className="mt-4 text-gray-300 max-w-3xl">Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>;
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
						{[;
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },;
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },;
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },;
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' };
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' };
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (;
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">;
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>;
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>;
							</div>;
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</div>;
					<div className="mt-14">;
						<h2 className="text-2xl font-semibold">Pricing</h2>;
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">;
							<div className="rounded-2xl border border-cyan-400/30 p-6">;
								<h3 className="text-xl font-bold">Starter</h3>;
								<p className="mt-2 text-gray-300">Up to 250 RPS, 1 region, CI integration.</p>;
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>;
							</div>;
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">;
								<h3 className="text-xl font-bold">Growth</h3>;
								<p className="mt-2 text-gray-300">Up to 2k RPS, 3 regions, regression gates.</p>;
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>;
							</div>;
							<div className="rounded-2xl border border-emerald-400/30 p-6">;
								<h3 className="text-xl font-bold">Enterprise</h3>;
								<p className="mt-2 text-gray-300">Unlimited scale, private agents, SSO, and SRE support.</p>;
								<p className="mt-4 text-3xl font-bold">Custom</p>;
							</div>;
						</div>;
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>;
					</div>;
					<div className="mt-14 flex flex-wrap items-center gap-4">;
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</Link>;
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>;
						<span className="text-gray-400">Call: +1 302 464 0950</span>;
					</div>;
				</div>;
			</section>;
		</div>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
              <a;
                className='underline hover:text - cyan - 300';
                href='https://k6.io / pricing/';
                target='_blank';
                rel='noreferrer';
              >;
                Grafana k6;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.loadmill.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;
                Loadmill;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.blazemeter.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;

                BlazeMeter;
              </a>;
              .;
            </p>;
          </div>;

              href='mailto:kleber@ziontechgroup && ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'>;
              Email: kleber@ziontechgroup && ziontechgroup.com;
            </a>;
            <span className='text-gray-400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </div>;
  );

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<div className='mt - 14 flex flex - wrap items - center gap - 4'>;
            <Link;
              href='/contact';
              className='px - 5 py - 3 rounded - lg bg - cyan - 500 text - black font - semibold';
            >;
              Talk to Sales;
            </Link>;
            <a;
              href='mailto:kleber@ziontechgroup.com';
              className='px - 5 py - 3 rounded - lg border border - white / 20';
            >;
              Email: kleber@ziontechgroup.com;
            </a>;
            <span className='text - gray - 400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </div>);
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
export default function ApiPerformanceTestingPage(req, res) {
  try {
	const features = [;
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging';
	];
	return (;
		<div className="relative isolate">;
			<section className="px-6 lg:px-10 py-16 lg:py-24">;
				<div className="max-w-6xl mx-auto">;
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>;
					<p className="mt-4 text-gray-300 max-w-3xl">Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>;
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
						{[;
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },;
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },;
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },;
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' };
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' };
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (;
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">;
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>;
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>;
							</div>;
						))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</div>;
					<div className="mt-14">;
						<h2 className="text-2xl font-semibold">Pricing</h2>;
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">;
							<div className="rounded-2xl border border-cyan-400/30 p-6">;
								<h3 className="text-xl font-bold">Starter</h3>;
								<p className="mt-2 text-gray-300">Up to 250 RPS, 1 region, CI integration.</p>;
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>;
							</div>;
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">;
								<h3 className="text-xl font-bold">Growth</h3>;
								<p className="mt-2 text-gray-300">Up to 2k RPS, 3 regions, regression gates.</p>;
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>;
							</div>;
							<div className="rounded-2xl border border-emerald-400/30 p-6">;
								<h3 className="text-xl font-bold">Enterprise</h3>;
								<p className="mt-2 text-gray-300">Unlimited scale, private agents, SSO, and SRE support.</p>;
								<p className="mt-4 text-3xl font-bold">Custom</p>;
							</div>;
						</div>;
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>;
					</div>;
					<div className="mt-14 flex flex-wrap items-center gap-4">;
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</Link>;
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>;
						<span className="text-gray-400">Call: +1 302 464 0950</span>;
					</div>;
				</div>;
			</section>;
		</div>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
