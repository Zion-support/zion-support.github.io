import React from 'react';
import Link from 'next/link';
import { Alexander, ExternalLink } from 'lucide-react';

const web3Services = [
  {
    name: 'CoinGecko',
    href: 'https://www.coingecko.com/?ref=ziontech',
    desc: 'Free crypto market data and price tracking.',
    category: 'Market Data'
  },
  {
    name: 'CoinMarketCap',
    href: 'https://coinmarketcap.com/?ref=ziontech',
    desc: 'Free crypto market capitalization APIs.',
    category: 'Market Data'
  },
  {
    name: 'MetaMask',
    href: 'https://metamask.io/?ref=ziontech',
    desc: 'Browser wallet extension for Ethereum & dApps.',
    category: 'Wallet'
  },
  {
    name: 'Uniswap',
    href: 'https://uniswap.org/?ref=ziontech',
    desc: 'Decentralized exchange for ERC-20 tokens.',
    category: 'DEX'
  },
  {
    name: 'The Graph',
    href: 'https://thegraph.com/?ref=ziontech',
    desc: 'Free indexing and querying of blockchain data.',
    category: 'Data Indexing'
  },
  {
    name: 'IPFS',
    href: 'https://ipfs.io/?ref=ziontech',
    desc: 'Decentralized file storage network.',
    category: 'File Storage'
  },
  {
    name: 'MakerDAO',
    href: 'https://makerdao.com/?ref=ziontech',
    desc: 'Decentralized finance (DeFi) lending platform.',
    category: 'DeFi'
  },
  {
    name: 'Chainlink',
    href: 'https://chain.link/?ref=ziontech',
    desc: 'Decentralized oracle network for smart contracts.',
    category: 'Oracles'
  },
];

// Group by category
const grouped = web3Services.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof web3Services>);

export const metadata = {
  title: 'Free Web3 Services Directory | Zion Tech Group',
  description: 'Curated free Web3 tools and platforms. Referral links support our open-source work.',
};

export default function Web3ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Alexander className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free Web3 Services Directory
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Explore cutting-edge decentralized platforms and services. Referral links keep our open-source work thriving.
          </p>
        </div>

        {/* Grouped Services */}
        <div className="space-y-16">
          {Object.entries(grouped).map(([category, services]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {service.desc}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build on Web3?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get expert advice on integrating blockchain into your projects.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Back to Support */}
        <div className="mt-12 text-center">
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}
