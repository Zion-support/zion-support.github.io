import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
type Question = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
}
type Props = {
  questions: Question[];
<<<<<<< HEAD
  onComplete: (score: number) => void;};  id: string
  question: string
  options: string[]
  answerIndex: number
}
type Props = {
  questions: Question[]
  onComplete: (score: number) => void
export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
=======
  onComplete: (score: number) => void;
};
}

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0)
    0
  );
  function submit() {
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>
      {questions.map((q, idx) => (
        <div key={q.id} className='border rounded p-3'>
          <div className='font-medium'>
            {idx + 1}. {q.question}
          </div>
          <div className='mt-2 grid gap-2'>
            {q.options.map((opt, i) => (
              <label key={i} className='flex items-center gap-2'>
                <input
<<<<<<< HEAD
                  type='radio'                  name={q.id}
  function submit() {
    setSubmitted(true);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    onComplete(score)
  }
  return (
    <div className="space-y-4">
      {questions.map((q, idx) => (
        <div key={q.id} className="border rounded p-3">
          <div className="font-medium">{idx + 1}. {q.question}</div>
          <div className="mt-2 grid gap-2">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
=======
                  type='radio'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
            <div className='mt-2 text-sm'>
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'>Correct</span>
              ) : (
<<<<<<< HEAD
                <span className='text-red-600'>Incorrect</span>              )}              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
                <span className="text-red-600">Incorrect</span>
=======
                <span className='text-red-600'>Incorrect</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              )}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        Submit Quiz
      </button>
      {submitted && (
        <div className='text-sm'>
          Score: {score} / {questions.length}
        </div>
      )}
    </div>
<<<<<<< HEAD
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
);
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
