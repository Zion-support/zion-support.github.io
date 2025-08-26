import { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { Phone, Mail, MapPin, Check, ArrowRight, Code, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
=======
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { FileCode2, Download } from 'lucide-react';
import type { DocumentationConfig, APIDocumentation } from '../services/apiDocGeneratorService';
import { APIDocGeneratorService } from '../services/apiDocGeneratorService';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9071

export default function APIDocGeneratorPage() {
  const [sourcePath, setSourcePath] = useState('src');
  const [format, setFormat] = useState<DocumentationConfig['outputFormat']>('markdown');
  const [doc, setDoc] = useState<APIDocumentation | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const svc = new (APIDocGeneratorService as any)();
      const result: APIDocumentation = await svc.generateDocumentation(sourcePath, {
        outputFormat: format,
        includeExamples: true,
        includeSchemas: true,
        includeAuthentication: true,
        includeRateLimits: true,
        branding: { companyName: 'Zion Tech Group' }
      });
      setDoc(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>API Documentation Generator - Zion Tech Group</title>
        <meta name="description" content="Generate API docs from your codebase with examples and schemas." />
        <link rel="canonical" href="https://ziontechgroup.com/api-documentation-generator" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Code />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-indigo-400 mt-0.5"><Check /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Generate Docs<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
=======
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <FileCode2 className="w-10 h-10" /> API Documentation Generator
          </h1>

          <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">Source path</label>
                <input value={sourcePath} onChange={(e) => setSourcePath(e.target.value)} className="w-full bg-black/40 border border-slate-700 rounded-lg px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Output format</label>
                <select value={format} onChange={(e) => setFormat(e.target.value as any)} className="w-full bg-black/40 border border-slate-700 rounded-lg px-3 py-2 text-white">
                  <option value="markdown">Markdown</option>
                  <option value="html">HTML</option>
                  <option value="json">JSON</option>
                  <option value="openapi">OpenAPI</option>
                  <option value="pdf">PDF</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button onClick={generate} variant="quantum" className="w-full" disabled={loading}>
                  {loading ? 'Generating…' : 'Generate'}
                </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9071
              </div>
            </div>
          </div>

          {doc && (
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl text-white font-semibold">{doc.name} v{doc.version}</div>
                <Button variant="secondary"><Download className="w-4 h-4 mr-2" />Export</Button>
              </div>
              <div className="text-slate-300 text-sm mb-2">Endpoints: {doc.metadata.totalEndpoints} • Coverage: {doc.metadata.coverage}%</div>
              <pre className="text-slate-200 text-xs whitespace-pre-wrap break-words">{JSON.stringify(doc, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

