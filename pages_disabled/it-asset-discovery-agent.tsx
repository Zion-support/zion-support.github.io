

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
                  rel='noopener noreferrer'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                  rel='noopener noreferrer'>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  AWS Config;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a;
                  className='text - cyan - 300 underline';
                  href='https://azure.microsoft.com / pricing / details / monitor/';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Azure Monitor;
                </a>;
              </li>;
              <li>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a;
                  className='text - cyan - 300 underline';
                  href='https://cloud.google.com / asset - inventory / pricing';
                  target='_blank';
                  rel='noopener noreferrer';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  GCP Asset Inventory;
                </a>;
              </li>;
            </ul>;
          </Card>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
=======

            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            className='px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='mt - 8'>;
          <a;
            href='/contact';
            className='px - 6 py - 3 rounded - xl bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
          >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Contact Sales;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Card from '../components/ui/Card',
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
							<li>Agentless cloud inventory</li>
							<li>Network scan integrations</li>
							<li>Export to CMDB/ITSM</li>
							<li>Drift and anomaly alerts</li>
						</ul>
					</Card>
<<<<<<< HEAD
}
</UltraFuturisticBackground>);
;
<<<<<<< HEAD



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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </UltraFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
