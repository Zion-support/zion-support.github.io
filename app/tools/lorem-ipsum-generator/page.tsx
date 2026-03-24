'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Copy, Check, X, RefreshCw, Zap, ArrowRight, 
  Download, Upload, Search
} from 'lucide.react';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const sentences = loremIpsum.split('. ').filter(s => s.length > 0);

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [sentencesPerParagraph, setSentencesPerParagraph] = useState(3);
  const [generated, setGenerated] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLorem = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = [];
      for (let p = 0; p < paragraphs; p++) {
        const paraSentences = [];
        for (let s = 0; s < sentencesPerParagraph; s++) {
          const randomIndex = Math.floor(Math.random() * sentences.length);
          paraSentences.push(sentences[randomIndex]);
        }
        result.push(paraSentences.join('. ') + '.');
      }
      setGenerated(result.join('\n\n'));
      setIsGenerating(false);
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
  };

  const downloadText = () => {
    if (!generated) return;
    const blob = new Blob([generated], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'lorem-ipsum.txt';
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
          <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm mb-4">
            <Zap className="w-4 h-4" />
            <span>Free Tool</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Lorem Ipsum{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Generate placeholder text for design and development. Choose the number of paragraphs and sentences per paragraph.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Search className="w-5 h-5 text-green-400" />
                Generate Lorem Ipsum
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-slate-400">Paragraphs</label>
                <select
                  value={paragraphs}
                  onChange={(e) => setParagraphs(parseInt(e.target.value))}
                  className="bg-slate-700 border border-slate-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {[1, 2, 3, 4, 5, 10, 20].map(count => (
                    <option key={count} value={count}>{count}</option>
                  ))}
                </select>
                <label className="text-slate-400 ml-4">Sentences per paragraph</label>
                <select
                  value={sentencesPerParagraph}
                  onChange={(e) => setSentencesPerParagraph(parseInt(e.target.value))}
                  className="bg-slate-700 border border-slate-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {[1, 2, 3, 4, 5, 10].map(count => (
                    <option key={count} value={count}>{count}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={generateLorem}
                  disabled={isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Generate Lorem Ipsum
                    </>
                  )}
                </button>
                <button
                  onClick={copyToClipboard}
                  disabled={!generated}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={downloadText}
                  disabled={!generated}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
              {generated && (
                <div className="p-4">
                  <h4 className="text-slate-400 text-sm mb-2>Generated Text</h4>
                  <p className="text-slate-300 break-all whitespace-pre-wrap">{generated}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 rounded-xl border border-slate-700 p-4"
          >
            <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-green-400" />
              About Lorem Ipsum
            </h1>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Lorem Ipsum is dummy text used in publishing and graphic design to demonstrate visual form.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Standard Lorem Ipsum has been used since the 1500s.</span>
              </div>
              <div class="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Useful for testing layouts, typography, and visual design without distracting content.</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 text-center text-slate-500">
          <p>Tip: Use Lorem Ipsum to focus on design elements without distraction from meaningful content.</p>
        </p>
      </div>
    </div>
  );
}