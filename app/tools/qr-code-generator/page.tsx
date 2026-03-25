'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, X, Zap, Download, Search } from 'lucide-react';

export default function QRCodeGenerator() {
  const [input, setInput] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [error, setError] = useState('');

  const generateQRCode = () => {
    if (!input.trim()) {
      setError('Please enter text or URL to encode');
      return;
    }

    // Encode the input for URL
    const encoded = encodeURIComponent(input.trim());
    const url = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encoded}&choe=UTF-8`;
    setQrUrl(url);
    setError('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadQRCode = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-4">
            <Zap className="w-4 h-4" />
            <span>Free Tool</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            QR Code{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Generate QR codes instantly for text, URLs, contact information, or any data.
            Scan with any QR code reader to retrieve the encoded information.
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
          >
            <X className="w-5 h-5 text-red-400" />
            <p className="text-red-300">{error}</p>
          </motion.div>
        )}

        <div className="space-y-6">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-400" />
                Enter Text or URL
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text, URL, or any data to encode..."
                className="w-full h-32 bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex items-center justify-between">
                <button
                  onClick={generateQRCode}
                  disabled={!input.trim()}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Generate QR Code
                </button>
                <button
                  onClick={() => copyToClipboard(input)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* QR Code Display */}
          {qrUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="p-4 border-b border-slate-700">
                <h3 className="text-white font-semibold flex items-center justify-between">
                  <Download className="w-5 h-5 text-purple-400" />
                  Your QR Code
                  <button
                    onClick={downloadQRCode}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Download QR Code"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </h3>
              </div>
              <div className="p-6 text-center">
                {/* External chart.googleapis.com QR; img avoids next/image remotePatterns config. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrUrl}
                  alt="QR Code"
                  className="rounded-xl shadow-lg border border-slate-700"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <p className="mt-4 text-slate-500 text-sm">
                  Scan with any QR code reader to retrieve the encoded information.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-6 text-center text-slate-500">
          <p>Tip: QR codes can encode URLs, text, phone numbers, SMS, email, and more.</p>
        </div>
      </div>
    </div>
  );
}