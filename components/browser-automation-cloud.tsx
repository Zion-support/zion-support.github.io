class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}import React from 'react';
import SEO from '../components / SEO';
<<<<<<< HEAD
<<<<<<< HEAD
import {Check, ExternalLink} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export default function BrowserAutomationCloudPage() {
  const features = [
    'Parallel Playwright/Puppeteer execution',
    'Queued jobs with retries and rate limits',
    'Artifacts: HAR, traces, screenshots, videos',
    'Rotating proxies and geo targeting',
    'Webhook callbacks and REST API',;
  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import { Check, ExternalLink } from 'lucide-react';
export default function BrowserAutomationCloudPage() {const features = [;
    'Parallel Playwright/Puppeteer execution','Queued jobs with retries and rate limits','Artifacts: HAR, traces, screenshots, videos','Rotating proxies and geo targeting','Webhook callbacks and REST API'];const features = [;
    'Parallel Playwright/Puppeteer execution';
    'Queued jobs with retries and rate limits';
    'Artifacts: HAR, traces, screenshots, videos';
    'Rotating proxies and geo targeting';
    'Webhook callbacks and REST API';
  ];
  return (<>;
      <SEO;
        title='Browser Automation Cloud';
        description='Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies.';
import {Check, ExternalLink} from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7




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
            {features && features.map(f => (<div;
                key={f}
                className='flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10'>;
                <Check className='w-5 h-5 text-cyan-400 mt-1' />;
                <p className='text-gray-200'>{f}</p>;
              </div>;
            ))}
          </div>;
          <div className='mt-8 flex flex-wrap items-center gap-4'>;
            <a;
              href='/contact';
              className='px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200'>;
              Start from $99/mo;
            </a>;
            <a;
              href='/market-pricing';
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10'>;
              Market Pricing;
            </a>;
            <a;
              href='https://playwright && playwright.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Playwright;
            </a>;
            <a;
              href='https://pptr && pptr.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>;
              <ExternalLink className='w-4 h-4' /> Puppeteer;



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export default /**;
 * BrowserAutomationCloudPage - Function description;
 */;
function BrowserAutomationCloudPage() {const features = [;
    'Parallel Playwright / Puppeteer execution','Queued jobs with retries and rate limits','Artifacts: HAR, traces, screenshots, videos','Rotating proxies and geo targeting','Webhook callbacks and REST API';
    'Webhook callbacks and REST API';
    'Webhook callbacks and REST API';
  ];return (<>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export default /**
 * BrowserAutomationCloudPage - Function description
 */
function BrowserAutomationCloudPage() {
  const features = [;
    'Parallel Playwright / Puppeteer execution',
    'Queued jobs with retries and rate limits',
    'Artifacts: HAR, traces, screenshots, videos',
    'Rotating proxies and geo targeting',
    'Webhook callbacks and REST API'
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
            {features.map (function => (<div;
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
      </main>;</>)return (<>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/integrate-build-improve-and-re-verify-2156


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </>);	return (
  <>;
  <SEO title="Browser Automation Cloud" description="Parallel Playwright / Puppeteer automation at scale with queues, storage, and proxies." />;
  <main id="main" className="container mx - auto px - 4 py - 24">;
    <section className="max - w-5xl mx - auto">;
    <h1 className="text - 4xl font - extrabold tracking - tight">Browser Automation Cloud</h1>;
    <p className="mt - 4 text - lg text - gray - 300">Scale Playwright / Puppeteer tasks for testing, scraping, and robotic process automation with enterprise - grade reliability.</p>;
    <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
      {features.map ((f) => (<div key={f} className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10">;
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
  </>)}</>)}
  </>)}const features = [;
		'Parallel Playwright/Puppeteer executionQueued jobs with retries and rate limitsArtifacts: HAR, traces, screenshots, videosRotating proxies and geo targetingWebhook callbacks and REST API';
	];
import React from 'react',import SEO from '../components/SEO';
import { Check, ExternalLink  } from 'lucide-react';
export default function BrowserAutomationCloudPage() {export default function BrowserAutomationCloudPage() {export default function BrowserAutomationCloudPage() {const features = [;
    'Parallel Playwright/Puppeteer execution','Queued jobs with retries and rate limits','Artifacts: HAR, traces, screenshots, videos','Rotating proxies and geo targeting','Webhook callbacks and REST API'];const features = [;
    'Parallel Playwright/Puppeteer execution';
    'Queued jobs with retries and rate limits';
    'Artifacts: HAR, traces, screenshots, videos';
    'Rotating proxies and geo targeting';
    'Webhook callbacks and REST API';
	const features = null;
	return (];
  return (<>;
      <SEO;
        title='Browser Automation Cloud';
        description='Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies.';
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
            {features.map(f => (<div;
  </>)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
	const features = [
		'Parallel Playwright/Puppeteer executionQueued jobs with retries and rate limitsArtifacts: HAR, traces, screenshots, videosRotating proxies and geo targetingWebhook callbacks and REST API'
	];
import React from 'react',
import SEO from '../components/SEO';
import React from 'react';

export default function BrowserAutomationCloudPage() {
<<<<<<< HEAD
	const features = null;
	return (
origin/cursor/automate-test-improve-and-merge-code-2533
=======

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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
                className='flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10';
              >;
                <Check className='w-5 h-5 text-cyan-400 mt-1' />;
                <p className='text-gray-200'>{f}</p>;
              </div>;
            ))}
          </div>;
          <div className='mt-8 flex flex-wrap items-center gap-4'>;
            <a;
              href='/contact';
              className='px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200';
            >;
              Start from $99/mo;
            </a>;
            <a;
              href='/market-pricing';
              className='px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10';
            >;
              Market Pricing;
            </a>;
            <a;
              href='https://playwright.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300';
            >;
              <ExternalLink className='w-4 h-4' /> Playwright;
            </a>;
            <a;
              href='https://pptr.dev/';
              target='_blank';
              rel='noreferrer';
              className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300';
            >;
              <ExternalLink className='w-4 h-4' /> Puppeteer;
            </a>;
          </div>;
        </section>;
      </main>;
    </>;
  )return ()return ()<>;
			<SEO title="Browser Automation Cloud" description="Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies." />;
			<main id="main" className="container mx-auto px-4 py-24">;
				<section className="max-w-5xl mx-auto">;
					<h1 className="text-4xl font-extrabold tracking-tight">Browser Automation Cloud</h1>;
					<p className="mt-4 text-lg text-gray-300">Scale Playwright/Puppeteer tasks for testing, scraping, and robotic process automation with enterprise-grade reliability.</p>;
					<div className="mt-8 grid sm:grid-cols-2 gap-6">;
						{features.map((f) => (<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">;
								<Check className="w-5 h-5 text-cyan-400 mt-1" />;
								<p className="text-gray-200">{f}</p>;
							</div>;
						))}
					</div>;
					<div className="mt-8 flex flex-wrap items-center gap-4">;
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $99/mo</a>;
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>;
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> Playwright;
							</a>;
						<a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> Puppeteer;
							</a>;
					</div>;
				</section>;
			</main>;
		</>;
	)})})}
	)})}ursor/fix-website-loading-errors-and-merge-6662;
	)}
	)}
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  );	return (

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
  );	return (

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

	)
}

	)
}
	)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
	),
}
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	),
}



<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
