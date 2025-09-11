

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React from 'react';
import SEO from '../components / SEO';
import {Check, ExternalLink} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




  const features = [
    'Parallel Playwright/Puppeteer execution'
    'Queued jobs with retries and rate limits'
    'Artifacts: HAR, traces, screenshots, videos'
    'Rotating proxies and geo targeting'
    'Webhook callbacks and REST API'
  ];
  return (
    <>;
      <SEO
        title='Browser Automation Cloud'
        description='Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies.'
      />;
      <main id='main' className='container mx-auto px-4 py-24'>;
        <section className='max-w-5xl mx-auto'>;
          <h1 className='text-4xl font-extrabold tracking-tight'>;
            Browser Automation Cloud;
          </h1>;
          <p className='mt-4 text-lg text-gray-300'>;
            Scale Playwright/Puppeteer tasks for testing, scraping, and robotic;
            process automation with enterprise-grade reliability.;
          </p>;
          <div className='mt-8 grid sm:grid-cols-2 gap-6'>;
            {features && features.map(f => (;
              <div
                key={f}
                className='flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10'>;
                <Check className='w-5 h-5 text-cyan-400 mt-1' />;
                <p className='text-gray-200'>{f}</p>;
              </div>;
            ))}
          </div>;
          <div className='mt-8 flex flex-wrap items-center gap-4'>;
            <a
              href='/contact'
              className='px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200'>;
              Start from $99/mo;
            </a>;
            <a
              href='/market-pricing'
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10'>;
              Market Pricing;
            </a>;
            <a
              href='https://playwright && playwright.dev/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Playwright;
            </a>;
            <a
              href='https://pptr && pptr.dev/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default /**
 * BrowserAutomationCloudPage - Function description
 */
function BrowserAutomationCloudPage() {
  const features = [;
    'Parallel Playwright / Puppeteer execution',
    'Queued jobs with retries and rate limits',
    'Artifacts: HAR, traces, screenshots, videos',
    'Rotating proxies and geo targeting',
    'Webhook callbacks and REST API',
  ];
;
  return (
    <>;
      <SEO;
        title='Browser Automation Cloud';
        description='Parallel Playwright / Puppeteer automation at scale with queues, storage, and proxies.';
      />;
      <main id='main' className='container mx - auto px - 4 py - 24'>;
        <section className='max - w-5xl mx - auto'>;
          <h1 className='text - 4xl font - extrabold tracking - tight'>;
            Browser Automation Cloud;
          </h1>;
          <p className='mt - 4 text - lg text - gray - 300'>;
            Scale Playwright / Puppeteer tasks for testing, scraping, and robotic;
            process automation with enterprise - grade reliability.;
          </p>;
          <div className='mt - 8 grid sm:grid - cols - 2 gap - 6'>;
            {features.map (function => (
              <div;
                key={f}
                className='flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10';
              >;
                <Check className='w - 5 h - 5 text - cyan - 400 mt - 1' />;
                <p className='text - gray - 200'>{f}</p>;
              </div>))}
          </div>;
          <div className='mt - 8 flex flex - wrap items - center gap - 4'>;
            <a;
              href='/contact';
              className='px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover:bg - gray - 200';
            >;
              Start from $99 / mo;
            </a>;
            <a;
              href='/market - pricing';
              className='px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10';
            >;
              Market Pricing;
            </a>;
            <a;
              href='https://playwright.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300';
            >;
              <ExternalLink className='w - 4 h - 4' /> Playwright;
            </a>;
            <a;
              href='https://pptr.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300';
            >;
              <ExternalLink className='w - 4 h - 4' /> Puppeteer;
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
	const features = [
		'Parallel Playwright/Puppeteer executionQueued jobs with retries and rate limitsArtifacts: HAR, traces, screenshots, videosRotating proxies and geo targetingWebhook callbacks and REST API'
	];
import React from 'react',
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
import React from 'react';
import SEO from '../components/SEO';
import {Check, ExternalLink} from 'lucide-react';

export default function BrowserAutomationCloudPage() {

export default function BrowserAutomationCloudPage() {
  const features = [
    'Parallel Playwright/Puppeteer execution',
    'Queued jobs with retries and rate limits',
    'Artifacts: HAR, traces, screenshots, videos',
    'Rotating proxies and geo targeting',
    'Webhook callbacks and REST API',;
  ];

  const features = [
    'Parallel Playwright/Puppeteer execution'
    'Queued jobs with retries and rate limits'
    'Artifacts: HAR, traces, screenshots, videos'
    'Rotating proxies and geo targeting'
    'Webhook callbacks and REST API'
  ];
  return (
    <>
      <SEO
        title='Browser Automation Cloud'
        description='Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies.'
      />
      <main id='main' className='container mx-auto px-4 py-24'>
        <section className='max-w-5xl mx-auto'>
          <h1 className='text-4xl font-extrabold tracking-tight'>
            Browser Automation Cloud
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
            Scale Playwright/Puppeteer tasks for testing, scraping, and robotic
            process automation with enterprise-grade reliability.
          </p>
          <div className='mt-8 grid sm:grid-cols-2 gap-6'>
            {features.map(f => (
              <div
                key={f}
                className='flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10'
              >
                <Check className='w-5 h-5 text-cyan-400 mt-1' />
                <p className='text-gray-200'>{f}</p>
              </div>
            ))}
          </div>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <a
              href='/contact'
              className='px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200'
            >
              Start from $99/mo
            </a>
            <a
              href='/market-pricing'
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10'
            >
              Market Pricing
            </a>
            <a
              href='https://playwright.dev/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'
            >
              <ExternalLink className='w-4 h-4' /> Playwright
            </a>
            <a
              href='https://pptr.dev/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'
            >
              <ExternalLink className='w-4 h-4' /> Puppeteer
            </a>
          </div>
        </section>
      </main>
    </>
  );	return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

		<>
			<SEO title="Browser Automation Cloud" description="Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tight">Browser Automation Cloud</h1>
					<p className="mt-4 text-lg text-gray-300">Scale Playwright/Puppeteer tasks for testing, scraping, and robotic process automation with enterprise-grade reliability.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $99/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright
							</a>
						<a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Puppeteer
							</a>
					</div>
				</section>
			</main>
		</>
	)
}
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);	return (
  <>;
  <SEO title="Browser Automation Cloud" description="Parallel Playwright / Puppeteer automation at scale with queues, storage, and proxies." />;
  <main id="main" className="container mx - auto px - 4 py - 24">;
    <section className="max - w-5xl mx - auto">;
    <h1 className="text - 4xl font - extrabold tracking - tight">Browser Automation Cloud</h1>;
    <p className="mt - 4 text - lg text - gray - 300">Scale Playwright / Puppeteer tasks for testing, scraping, and robotic process automation with enterprise - grade reliability.</p>;
    <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
      {features.map ((f) => (
      <div key={f} className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10">;
        <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;
        <p className="text - gray - 200">{f}</p>;
      </div>))}
      </div>;
    <div className="mt - 8 flex flex - wrap items - center gap - 4">;
      <a href="/contact" className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg - gray - 200">Start from $99 / mo</a>;
      <a href="/market - pricing" className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10">Market Pricing</a>;
      <a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300">;
      <ExternalLink className="w - 4 h - 4" /> Playwright;
      </a>;
      <a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300">;
      <ExternalLink className="w - 4 h - 4" /> Puppeteer;
      </a>;
    </div>;
    </section>;
  </main>;
  </>),
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

	),
}

<<<<<<< HEAD
	),
}
	),
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
	),
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
