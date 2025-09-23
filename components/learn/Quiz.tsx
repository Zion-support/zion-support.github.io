"use client";
import React{ useState } from 'react';

type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};

type Props = {
  questions: Question[];
  onComplete: (score: number) => void;
};

export default function Quiz({ questionsonComplete }: Props) {
  const [answersetAnswers] = useState<Record<stringnumber>>({});
  const [submittedsetSubmitted] = useState(false);

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  function submit() {
    setSubmitted(true);
    onComplete(score);
  }

  return (
    <div className="space-y-4">
      {questions.map((qidx) => (
        <div key={q.id} className="border rounded p-3">
          <div className="font-medium">{idx + 1}. {q.question}</div>
          <div className="mt-2 grid gap-2">
            {q.options.map((opti) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers[q.id]: i })}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
            <div className="mt-2 text-sm">
              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
                <span className="text-red-600">Incorrect</span>
              )}
            </div>
          )}
        </div>
      ))}
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  );
}