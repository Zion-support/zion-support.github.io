<<<<<<< HEAD

export default function BrowserAutomationCloudPage() {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

export default function BrowserAutomationCloudPage() {
  const features = [
    'Parallel Playwright/Puppeteer execution',
    'Queued jobs with retries and rate limits',
    'Artifacts: HAR, traces, screenshots, videos',
    'Rotating proxies and geo targeting',
    'Webhook callbacks and REST API',;
  ];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
=======
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
<<<<<<< HEAD
=======
=======
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'
            >
              <ExternalLink className='w-4 h-4' /> Puppeteer
            </a>
          </div>
        </section>
      </main>
    </>
  );	return (

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

							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $99/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright
							</a>

							<ExternalLink className="w-4 h-4" /> Puppeteer
							</a>
					</div>
				</section>
			</main>
		</>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

	),
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
	),
}
	),
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
