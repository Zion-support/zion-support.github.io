import Head from \'next/head\'; import Link from \'next/link\'; export default function AIContentSuite() { return ( <> <Head> <title>AI Content Creation Suite | Zion Tech Group</title> <meta name=\"description\" content=\"Generate high-quality articles,social posts,and ads with AI. SEO optimization,grammar,and plagiarism checks included.\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-slate-950 text-white\"> <section className=\"py-16 px-4 bg-gradient-to-r from-indigo-600 to-violet-600\"> <div className=\"max-w-5xl mx-auto text-center\"> <h1 className=\"text-4xl md:text-5xl font-extrabold\">AI Content Creation Suite</h1> <p className=\"mt-4 text-slate-100 text-lg md:text-xl\">Accelerate content production with brand-safe AI for blogs,landing pages,and campaigns.</p> <div className=\"mt-6 flex flex-col \"sm\": flex-row gap-3 justify-center\"> <Link href=\"/request-quote\" className=\"px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold\">Start Now</Link> <Link href=\"/docs\" className=\"px-6 py-3 border border-white/20 rounded-lg font-semibold\">Read Docs</Link> </div> </div> </section> <section className=\"py-14 px-4\"> <div className=\"max-w-6xl mx-auto grid md:grid-cols-3 gap-6\"> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Capabilities</h3> <ul className=\"text-slate-300 list-disc pl-5 space-y-2\"> <li>Long-form articles with citations</li> <li>SEO keywords and internal links</li> <li>Multi-variant ad copy and CTAs</li> <li>Style guardrails and brand voice</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Compliance</h3> <p className=\"text-slate-300\">Plagiarism checks,citation assistance,and version history. Export to CMS.</p> </div> <div className=\"p-6 bg-slate-900/60 rounded-xl border border-white/10\"> <h3 className=\"text-xl font-bold mb-2\">Pricing</h3> <p className=\"text-slate-300\">Typical \"market\": <strong>$29–$99/month</strong> by words/credits. See peers like <a className=\"text-blue-400 hover:text-blue-300\" href=\"https: </div> </div> </section> </main> </> )}
import React from 'react';

interface Ai-content-suiteProps {
  className?: string;
}

const Ai-content-suite: React.FC<Ai-content-suiteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai-content-suite</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
