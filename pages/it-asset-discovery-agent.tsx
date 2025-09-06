<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Card from '../components/ui/Card',
                  rel='noopener noreferrer'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  AWS Config;
                </a>;
              </li>;
              <li>;

                <a;
                  className='text - cyan - 300 underline';
                  href='https://azure.microsoft.com / pricing / details / monitor/';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Azure Monitor;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                <a;
                  className='text - cyan - 300 underline';
                  href='https://cloud.google.com / asset - inventory / pricing';
                  target='_blank';
                  rel='noopener noreferrer';
                >;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  GCP Asset Inventory;
                </a>;
              </li>;
            </ul>;
          </Card>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
        <div className='mt - 8'>;
          <a;
            href='/contact';
            className='px - 6 py - 3 rounded - xl bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
          >;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            Contact Sales;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
=======

}
=======
import React from 'react',
import Head from 'next/head',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Card from '../components/ui/Card',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

=======
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
							<li>Agentless cloud inventory</li>
							<li>Network scan integrations</li>
							<li>Export to CMDB/ITSM</li>
							<li>Drift and anomaly alerts</li>
						</ul>
					</Card>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </UltraFuturisticBackground>);
;


<<<<<<< HEAD
=======
<<<<<<< HEAD
<Card className="p-6 bg-black/40 border border-gray-800">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
</UltraFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
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
    </UltraFuturisticBackground>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
