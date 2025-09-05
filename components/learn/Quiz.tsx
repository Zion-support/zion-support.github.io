<<<<<<< HEAD
import React, { useState } from 'react',

type Question = {
  id: string,
  question: string,
  options: string[],
  answerIndex: number
},

type Props = {
  questions: Question[],
  onComplete: (score: number) => void
},

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string number>>({}),
  const [submitted, setSubmitted] = useState(false),

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0),

  function submit() {
    setSubmitted(true),
    onComplete(score)
  }

  return (
    <div className=&quot;space-y-4&quot;>
      {questions.map((q, idx) => (
        <div key={q.id} className=&quot;border rounded p-3&quot;>
          <div className=&quot;font-medium&quot;>{idx + 1}. {q.question}</div>
          <div className=&quot;mt-2 grid gap-2&quot;>
            {q.options.map((opt, i) => (
              <label key={i} className=&quot;flex items-center gap-2&quot;>
                <input
                  type=&quot;radio&quot;
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
=======
import React, {_useState} from 'react';

type Question = {_id: string;
  question: string;
  options: string[];
  answerIndex: number;};

type Props = {_questions: Question[];
  onComplete: (_score: number) => void;};

export default function Quiz(_{_questions, _onComplete}: Props) {_const [answers, _setAnswers] = useState<Record<string, _number>>({});
  const [submitted, setSubmitted] = useState(false);

  const _score = questions.reduce(_(acc, _q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  function submit() {_setSubmitted(true);
    onComplete(score);}

  return (_<div className="space-y-4">
      {_questions.map((q, _idx) => (_<div key={q.id} className="border rounded p-3">
          <div className="font-medium">{_idx + 1}. {_q.question}</div>
          <div className="mt-2 grid gap-2">
            {_q.options.map((opt, _i) => (_<label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={_q.id}
                  checked={_answers[q.id] === i}
                  onChange={_() => setAnswers({ ...answers, _[q.id]: i})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
                <span>{_opt}</span>
              </label>
            ))}
          </div>
<<<<<<< HEAD
          {submitted && (
            <div className=&quot;mt-2 text-sm&quot;>
=======
          {_submitted && (
            <div className="mt-2 text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {answers[q.id] === q.answerIndex ? (
                <span className=&quot;text-green-600&quot;>Correct</span>
              ) : (
                <span className=&quot;text-red-600&quot;>Incorrect</span>
              )}
            </div>
          )}
        </div>
      ))}
<<<<<<< HEAD
      <button onClick={submit} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Submit Quiz</button>
      {submitted && <div className=&quot;text-sm&quot;>Score: {score} / {questions.length}</div>}
=======
      <button onClick={_submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {_submitted && <div className="text-sm">Score: {score} / {_questions.length}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}