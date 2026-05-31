'use client';
import { useState } from 'react';
const questions = [
  { q: 'Biggest challenge?', options: ['Email overload', 'Security threats', 'Data management', 'Cloud costs'] },
  { q: 'Team size?', options: ['1-10', '11-50', '51-200', '200+'] },
  { q: 'Budget range?', options: ['Under $500/mo', '$500-$2K/mo', '$2K-$10K/mo', '$10K+/mo'] },
];
export default function ServiceMatchQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  if (step === -1) return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">🎯 Find Your Perfect Service Match</h2>
      <p className="text-gray-300 mb-6">3 quick questions, personalized recommendations</p>
      <button onClick={() => setStep(0)} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium">Start Quiz →</button>
    </section>
  );
  if (step >= questions.length) return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">🎉 Your Recommendations</h2>
      <p className="text-gray-300 mb-6">We recommend our Email Intelligence Suite and AI Services!</p>
      <div className="flex gap-4 justify-center">
        <a href="/services" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium">Browse →</a>
        <button onClick={() => { setStep(-1); setAnswers([]); }} className="px-6 py-3 bg-white/10 text-white rounded-xl">Retake</button>
      </div>
    </section>
  );
  const q = questions[step];
  return (
    <section className="py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h3 className="text-xl font-bold text-white mb-6">{q.q}</h3>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => { setAnswers([...answers, i]); setStep(step + 1); }}
              className="w-full text-left px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10">{opt}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
