<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function ITAssetDiscoveryAgentPage() {
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <UltraFuturisticBackground variant='space' intensity='high'>;
      <Head>;
        <title>IT Asset Discovery Agent | Zion Tech Group</title>;
        <meta
          name='description'
          content='Agentless discovery of cloud and on-prem assets with continuous inventory.'
        />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/it-asset-discovery-agent'
        />;
      </Head>;
      <div className='container mx-auto px-4 py-16 text-white'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>;
          IT Asset Discovery Agent;
        </h1>;
        <p className='text-gray-300 max-w-3xl mb-8'>;
          Agentless discovery across AWS, Azure, GCP, and on‑prem with CMDB;
          export and drift alerts.;
        </p>;
        <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>;
          <Card className='p-6 bg-black/40 border border-gray-800'>;
            <h2 className='font-semibold mb-2'>Features</h2>;
            <ul className='text-sm text-gray-300 space-y-2 list-disc list-inside'>;
              <li>Agentless cloud inventory</li>;
              <li>Network scan integrations</li>;
              <li>Export to CMDB/ITSM</li>;
              <li>Drift and anomaly alerts</li>;
            </ul>;
          </Card>;
          <Card className='p-6 bg-black/40 border border-gray-800'>;
            <h2 className='font-semibold mb-2'>References</h2>;
            <ul className='text-sm text-gray-300 space-y-2 list-disc list-inside'>;
              <li>;
                <a
                  className='text-cyan-300 underline'
                  href='https://aws && aws.amazon.com/config/pricing/'
                  target='_blank'
<<<<<<< HEAD
                  rel='noopener noreferrer'
                >
                  AWS Config
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-300 underline'
                  href='https://azure.microsoft.com/pricing/details/monitor/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Azure Monitor
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-300 underline'
                  href='https://cloud.google.com/asset-inventory/pricing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GCP Asset Inventory
                </a>
              </li>
            </ul>
          </Card>
        </div>
        <div className='mt-8'>
          <a
            href='/contact'
            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
          >
            Contact Sales
          </a>
        </div>
      </div>
    </UltraFuturisticBackground>;
  );

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Card from '../components/ui/Card',
=======
                  rel='noopener noreferrer'>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Head from 'next / head';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
import Card from '../components / ui / Card';
;
export default /**
 * ITAssetDiscoveryAgentPage - Function description
 */
function ITAssetDiscoveryAgentPage() {
  return (
    <UltraFuturisticBackground variant='space' intensity='high'>;
      <Head>;
        <title > IT Asset Discovery Agent | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Agentless discovery of cloud and on - prem assets with continuous inventory.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / it - asset - discovery - agent';
        />;
      </Head>;
      <div className='container mx - auto px - 4 py - 16 text - white'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6'>;
          IT Asset Discovery Agent;
        </h1>;
        <p className='text - gray - 300 max - w-3xl mb - 8'>;
          Agentless discovery across AWS, Azure, GCP, and on‑prem with CMDB;
          export and drift alerts.;
        </p>;
        <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 6'>;
          <Card className='p - 6 bg - black / 40 border border - gray - 800'>;
            <h2 className='font - semibold mb - 2'>Features</h2>;
            <ul className='text - sm text - gray - 300 space - y-2 list - disc list - inside'>;
              <li > Agentless cloud inventory</li>;
              <li > Network scan integrations</li>;
              <li > Export to CMDB / ITSM</li>;
              <li > Drift and anomaly alerts</li>;
            </ul>;
          </Card>;
          <Card className='p - 6 bg - black / 40 border border - gray - 800'>;
            <h2 className='font - semibold mb - 2'>References</h2>;
            <ul className='text - sm text - gray - 300 space - y-2 list - disc list - inside'>;
              <li>;
                <a;
                  className='text - cyan - 300 underline';
                  href='https://aws.amazon.com / config / pricing/';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
                  AWS Config;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <a;
                  className='text - cyan - 300 underline';
                  href='https://azure.microsoft.com / pricing / details / monitor/';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Azure Monitor;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <a;
                  className='text - cyan - 300 underline';
                  href='https://cloud.google.com / asset - inventory / pricing';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  GCP Asset Inventory;
                </a>;
              </li>;
            </ul>;
          </Card>;
        </div>;
<<<<<<< HEAD

            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
=======
=======
            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='mt - 8'>;
          <a;
            href='/contact';
            className='px - 6 py - 3 rounded - xl bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
          >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Contact Sales;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import Head from 'next/head',
import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';


export default function ITAssetDiscoveryAgentPage() {
  return (
    <UltraFuturisticBackground variant='space' intensity='high'>
      <Head>
        <title>IT Asset Discovery Agent | Zion Tech Group</title>
        <meta
          name='description'
          content='Agentless discovery of cloud and on-prem assets with continuous inventory.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/it-asset-discovery-agent'
        />
      </Head>
      <div className='container mx-auto px-4 py-16 text-white'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
          IT Asset Discovery Agent
        </h1>
        <p className='text-gray-300 max-w-3xl mb-8'>
          Agentless discovery across AWS, Azure, GCP, and on‑prem with CMDB
          export and drift alerts.
        </p>
        <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>
          <Card className='p-6 bg-black/40 border border-gray-800'>
            <h2 className='font-semibold mb-2'>Features</h2>
            <ul className='text-sm text-gray-300 space-y-2 list-disc list-inside'>
              <li>Agentless cloud inventory</li>
              <li>Network scan integrations</li>
              <li>Export to CMDB/ITSM</li>
              <li>Drift and anomaly alerts</li>
            </ul>
          </Card>
          <Card className='p-6 bg-black/40 border border-gray-800'>
            <h2 className='font-semibold mb-2'>References</h2>
            <ul className='text-sm text-gray-300 space-y-2 list-disc list-inside'>
              <li>
                <a
                  className='text-cyan-300 underline'
                  href='https://aws.amazon.com/config/pricing/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  AWS Config
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-300 underline'
                  href='https://azure.microsoft.com/pricing/details/monitor/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Azure Monitor
                </a>
              </li>
              <li>
                <a
                  className='text-cyan-300 underline'
                  href='https://cloud.google.com/asset-inventory/pricing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GCP Asset Inventory
                </a>
              </li>
            </ul>
          </Card>
        </div>
        <div className='mt-8'>
          <a
            href='/contact'
            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
          >
            Contact Sales
          </a>
        </div>
      </div>
    </UltraFuturisticBackground>;
  );

}
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Card from '../components/ui/Card',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ITAssetDiscoveryAgentPage() {
	return (
		<UltraFuturisticBackground variant="space" intensity="high">
			<Head>
				<title>IT Asset Discovery Agent | Zion Tech Group</title>
				<meta name="description" content="Agentless discovery of cloud and on-prem assets with continuous inventory." />
				<link rel="canonical" href="https://ziontechgroup.com/it-asset-discovery-agent" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">IT Asset Discovery Agent</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Agentless discovery across AWS, Azure, GCP, and on‑prem with CMDB export and drift alerts.</p>
				<div className="grid grid-cols-1 md: grid-cols-2 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">Features</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
<<<<<<< HEAD
			<Head>
				<title>IT Asset Discovery Agent | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Agentless discovery of cloud and on-prem assets with continuous inventory.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/it-asset-discovery-agent&quot; />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">IT Asset Discovery Agent</h1>
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">Features</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
			<div className=&quot;container mx-auto px-4 py-16 text-white&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>IT Asset Discovery Agent</h1>
				<p className=&quot;text-gray-300 max-w-3xl mb-8&quot;>Agentless discovery across AWS, Azure, GCP, and on‑prem with CMDB export and drift alerts.</p>
				<div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
					<Card className=&quot;p-6 bg-black/40 border border-gray-800&quot;>
						<h2 className=&quot;font-semibold mb-2&quot;>Features</h2>
						<ul className=&quot;text-sm text-gray-300 space-y-2 list-disc list-inside&quot;>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
							<li>Agentless cloud inventory</li>
							<li>Network scan integrations</li>
							<li>Export to CMDB/ITSM</li>
							<li>Drift and anomaly alerts</li>
						</ul>
					</Card>
<<<<<<< HEAD
<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">References</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li><a className="text-cyan-300 underline" href="https://aws.amazon.com/config/pricing/" target="_blank" rel="noopener noreferrer">AWS Config</a></li>
							<li><a className="text-cyan-300 underline" href="https://azure.microsoft.com/pricing/details/monitor/" target="_blank" rel="noopener noreferrer">Azure Monitor</a></li>
							<li><a className="text-cyan-300 underline" href="https://cloud.google.com/asset-inventory/pricing" target="_blank" rel="noopener noreferrer">GCP Asset Inventory</a></li>
						</ul>
					</Card>
				</div>
				<div className="mt-8"><a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</a></div>
			</div>
		</UltraFuturisticBackground>
	)
<<<<<<< HEAD

=======
}
</UltraFuturisticBackground>);
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="font-semibold mb-2">References</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li><a className="text-cyan-300 underline" href="https://aws.amazon.com/config/pricing/" target="_blank" rel="noopener noreferrer">AWS Config</Link></li>
							<li><a className="text-cyan-300 underline" href="https://azure.microsoft.com/pricing/details/monitor/" target="_blank" rel="noopener noreferrer">Azure Monitor</Link></li>
							<li><a className="text-cyan-300 underline" href="https://cloud.google.com/asset-inventory/pricing" target="_blank" rel="noopener noreferrer">GCP Asset Inventory</Link></li>
						</ul>
					</Card>
				</div>
				<div className="mt-8"><a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Link></div>
			</div>
		</UltraFuturisticBackground>
	)
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
