import React, { useState } from 'react',
import Head from 'next/head';
import Link from 'next/link';
export default function ToolPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({}),
  const [showResults, setShowResults] = useState(false);
  const questions = null;
  return (
    <>
      <Head>
        <title>Automation Readiness Assessment | Zion Tech Group</title>
        <meta name="description" content="Evaluate your organization's readiness for AI automation implementation with our interactive assessment tool." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Automation Readiness Assessment</h1>
              <p className="text-white/80 text-lg">Evaluate your organization's readiness for AI automation</p>
              <div className="mt-4 text-cyan-400">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-white">{currentQ.question}</h2>
              
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => (
                  <label key={index} className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                    <input
                      type="radio"
                      name={currentQ.id}
                      value={index + 1}
                      checked={answers[currentQ.id] === index + 1}
                      onChange={() => handleAnswer(currentQ.id, index + 1)}
                      className="mr-3 text-cyan-400 focus:ring-cyan-400"
                    />
                    <span className="text-white/90">{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <button 
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
};