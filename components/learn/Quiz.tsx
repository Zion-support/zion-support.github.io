import React, { useState } from 'react';

type Question = {
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};

type Props = {
  questions: Question[];
  onComplete: (score: number) => void;
=======
  id: string,
  question: string,
  options: string[],
  answerIndex: number
};

type Props = {
  questions: Question[],
  onComplete: (score: number) => void
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  id: string,
  question: string,
  options: string[],
  answerIndex: number
};

type Props = {
  questions: Question[],
  onComplete: (score: number) => void
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
    0
  );
=======
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  function submit() {
    setSubmitted(true);
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
<<<<<<< HEAD
                  type='radio'
=======
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  function submit() {
    setSubmitted(true);
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  type="radio"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='mt-2 text-sm'>
=======
            <div className="mt-2 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
<<<<<<< HEAD
                <span className='text-red-600'>Incorrect</span>
=======
            <div className="mt-2 text-sm">
              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
                <span className="text-red-600">Incorrect</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="text-red-600">Incorrect</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              )}
            </div>
          )}
        </div>
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
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
  );
=======
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
