<<<<<<< HEAD
import React from 'react',
import Head from 'next/head';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
import Layout from '../components/layout/Layout';
=======
import React from 'react';
import Head from 'next / head';
import Layout from '../components / layout / Layout';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
const AIEvaluationOrchestrator: React.FC = () => {

=======
const AIEvaluationOrchestrator: React.FC = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Layout>;
      <Head>;
<<<<<<< HEAD
        <title>AI Evaluation Orchestrator | Zion Tech Group</title>;
        <meta
          name='description'
          content='Define evals, run batch tests, score prompts and models, and prevent regressions.'
        />;
        <link
          rel='canonical'
<<<<<<< HEAD
          href='https://ziontechgroup.com/ai-evaluation-orchestrator'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white'>
        <div className='max-w-6xl mx-auto space-y-10'>
          <header className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
              AI Evaluation Orchestrator
            </h1>
            <p className='text-gray-300 text-lg'>
              Automated LLM and prompt evaluations with dashboards, baselines
              and CI gates.
            </p>
          </header>
          <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              'Create datasets and scoring functions'
              'Batch runs across models and versions'
              'Track regressions and enforce quality gates'
              'Integrations: OpenAI, Anthropic, Groq, OpenRouter, Langfuse'
              'Export reports, share baselines, and diff results'
              'From $199/mo'
            ].map(f => (
=======
          href='https://ziontechgroup && ziontechgroup.com/ai-evaluation-orchestrator'
        />;
      </Head>;
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white'>;
        <div className='max-w-6xl mx-auto space-y-10'>;
          <header className='text-center'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>;
              AI Evaluation Orchestrator;
            </h1>;
            <p className='text-gray-300 text-lg'>;
              Automated LLM and prompt evaluations with dashboards, baselines,;
              and CI gates.;
            </p>;
          </header>;
          <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
            {[;
              'Create datasets and scoring functions',;
              'Batch runs across models and versions',;
              'Track regressions and enforce quality gates',;
              'Integrations: OpenAI, Anthropic, Groq, OpenRouter, Langfuse',;
              'Export reports, share baselines, and diff results',;
              'From $199/mo',;
            ].map(f => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <div
                key={f}
                className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200'>;
                {f}
              </div>;
            ))}
          </section>;
          <div className='text-center'>;
            <Button
              href='/contact'
<<<<<<< HEAD
              className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
            >
              Talk to Sales
            </Button>
          </div>
        </div>
        <div className="text-center">
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover: opacity-90">
            Talk to Sales
          </a>
        </div>
      </main>
    </Layout>
  );
=======
              className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white'>;
=======
        <title > AI Evaluation Orchestrator | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Define evals, run batch tests, score prompts and models, and prevent regressions.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ai - evaluation - orchestrator';
        />;
      </Head>;
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8 bg - black text - white'>;
        <div className='max - w-6xl mx - auto space - y-10'>;
          <header className='text - center'>;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 4'>;
              AI Evaluation Orchestrator;
            </h1>;
            <p className='text - gray - 300 text - lg'>;
              Automated LLM and prompt evaluations with dashboards, baselines,
              and CI gates.;
            </p>;
          </header>;
          <section className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
            {[;
              'Create datasets and scoring functions',
              'Batch runs across models and versions',
              'Track regressions and enforce quality gates',
              'Integrations: OpenAI, Anthropic, Groq, OpenRouter, Langfuse',
              'Export reports, share baselines, and diff results',
              'From $199 / mo',
            ].map (function => (
              <div;
                key={f}
                className='p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 text - gray - 200';
              >;
                {f}
              </div>))}
          </section>;
          <div className='text - center'>;
            <Button;
              href='/contact';
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 600 to - blue - 700 text - white';
            >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              Talk to Sales;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD

        <div className="text-center">;
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover: opacity-90">;
=======
        <div className="text - center">;
          <a href="/contact" className="px - 8 py - 4 bg - gradient - to - r from - cyan - 600 to - blue - 700 text - white rounded - lg hover: opacity - 90">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Talk to Sales;
          </a>;
        </div>;
      </main>;
<<<<<<< HEAD
    </Layout>;
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import Button from '../components/ui/Button';
export default function AIEvaluationOrchestratorPage() {
  return (
    <>
      <Head>
        <title>AI Evaluation Orchestrator | Zion Tech Group</title>
        <meta name="description" content="Define evals, run batch tests, score prompts and models, and prevent regressions." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-evaluation-orchestrator" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Evaluation Orchestrator</h1>
            <p className="text-gray-300 text-lg">Automated LLM and prompt evaluations with dashboards, baselines, and CI gates.</p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Create datasets and scoring functionsBatch runs across models and versionsTrack regressions and enforce quality gatesIntegrations: OpenAI, Anthropic, Groq, OpenRouter, LangfuseExport reports, share baselines, and diff resultsFrom $199/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{f}</div>
            ))}
          </section>
          <div className="text-center">
            <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </Layout>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
