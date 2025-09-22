import React, { useState } from 'react';

type Question = any;

origin/cursor/automate-test-improve-and-merge-code-2533
export default function Quiz({ questions, onComplete }: Props) {

export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
    0
  );
  function submit() {}
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>;
      {questions && questions.map((q, idx) => (;'
        <div key={q && q.id} className='border rounded p-3'>;'
          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;'
          <div className='mt-2 grid gap-2'>;
            {q && q.options.map((opt, i) => (;'
              <label key={i} className='flex items-center gap-2'>;
                <input;
  function submit() {}
  function submit() {}
    setSubmitted(true)

                  type='radio'
origin/cursor/automate-test-improve-and-merge-code-2533
