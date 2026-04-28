import React from 'react';
import { Coins, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const cryptoWallets = [
  {
    name: 'Bitcoin (BTC)',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    symbol: '₿',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Ethereum (ETH)',
    address: '0x742d35Cc6634C0532925a3b8Df3e7b8D61',
    symbol: 'Ξ',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Lightning Network',
    address: 'lnbc1q... (scan QR below)',
    symbol: '⚡',
    color: 'from-purple-500 to-pink-500',
    qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=lnbc1qexample',
  },
  {
    name: 'USDT (TRC20)',
    address: 'TQnjZXBJGpVuH8Q5fJEXYQKZYF9GqB3x',
    symbol: '💵',
    color: 'from-green-500 to-emerland-500',
  },
];

export const metadata = {
  title: 'Crypto Donations | Zion Tech Group',
  description: 'Support our open-source work with cryptocurrency donations. All wallets provided free.',
};

export default function CryptoDonationsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (address: string, name: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Coins className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Crypto Donations
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Support our open-source AI development with cryptocurrency. 
            Every satoshi helps keep the project free and growing.
          </p>
        </div>

        {/* Wallets */}
        <div className="space-y-8 mb-16">
          {cryptoWallets.map((wallet) => (
            <div 
              key={wallet.name}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${wallet.color} shadow-lg`}>
                  <span className="text-2xl">{wallet.symbol}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{wallet.name}</h3>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 p-3 bg-slate-900/70 rounded-lg text-sm text-slate-300 font-mono break-all">
                      {wallet.address}
                    </code>
                    <button
                      onClick={() => copyToClipboard(wallet.address, wallet.name)}
                      className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                      aria-label={`Copy ${wallet.name} address`}
                    >
                      {copied === wallet.name ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-slate-300" />
                      )}
                    </button>
                  </div>
                </div>

                {wallet.qrUrl && (
                  <div className="flex-shrink-0">
                    <img 
                      src={wallet.qrUrl} 
                      alt={`${wallet.name} QR Code`}
                      className="w-32 h-32 rounded-lg border border-slate-600"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="p-6 bg-slate-800/30 border border-slate-700 rounded-2xl mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Important Notes</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Double-check the wallet address before sending any crypto</li>
            <li>• Transactions are irrevocable – send only the specified cryptocurrency to each address</li>
            <li>• For Lightning Network, scan the QR code with a compatible wallet</li>
            <li>• All donations support our open-source AI tools and free services</li>
          </ul>
        </div>

        {/* Back to Support */}
        <div className="text-center">
          <a 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Support Page
          </a>
        </div>
      </div>
    </div>
  );
}
