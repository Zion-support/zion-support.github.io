<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  answerIndex: number
}
type Props = {
  questions: Question[]
  onComplete: (score: number) => void
=======
export default function Quiz({ questions, onComplete }: Props) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React, { useState } from 'react';
type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
}
type Props = {
  questions: Question[];
  onComplete: (score: number) => void;
};

origin/cursor/automate-test-improve-and-merge-code-2533
export default function Quiz({ questions, onComplete }: Props) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
<<<<<<< HEAD
  const score = questions && questions.reduce(;
    (acc, q) => acc + (answers[q && q.id] === q && q.answerIndex ? 1 : 0),;
    0;
=======

const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
    0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
<<<<<<< HEAD
  function submit() {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  function submit() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>;
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className='border rounded p-3'>;
          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;
            {q && q.options.map((opt, i) => (;
              <label key={i} className='flex items-center gap-2'>;
                <input
<<<<<<< HEAD
<<<<<<< HEAD
  function submit() {
<<<<<<< HEAD
    setSubmitted(true);
    onComplete(score)
  }



export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
  function submit() {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  function submit() {

    setSubmitted(true)

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
                  type='radio'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  type='radio'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    onComplete(score)
  }
  return (
    <div className="space-y-4">;
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className="border rounded p-3">;
          <div className="font-medium">{idx + 1}. {q && q.question}</div>;
          <div className="mt-2 grid gap-2">;
            {q && q.options.map((opt, i) => (;
              <label key={i} className="flex items-center gap-2">;
                <input
                  type="radio"
<<<<<<< HEAD
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
                <span className='text-red-600'>Incorrect</span>              )}              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
                <span className="text-red-600">Incorrect</span>
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
=======
            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? (
                <span className='text - green - 600'>Correct</span>) : (
                <span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (
                <span className="text-green-600">Correct</span>) : (
                <span className="text-red-600">Incorrect</span>)}
            </div>)}
        </div>))}
      <button;
        on_click={submit}
        className='px - 4 py - 2 bg - blue - 600 text - white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Score: {score} / {questions.length}
        </div>)}
    </div>);      <button on_click={submit} className="px - 4 py - 2 bg - blue-600 text-white rounded">Submit Quiz</button>;
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>);
<<<<<<< HEAD
                />

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                <span>{opt}</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </label>
            ))}
          </div>
          {submitted && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='mt-2 text-sm'>
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'>Correct</span>
              ) : (
                <span className='text-red-600'>Incorrect</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              )}
            </div>
          )}
        </div>
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <button onClick={submit} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Submit Quiz</button>
      {submitted && <div className=&quot;text-sm&quot;>Score: {score} / {questions.length}</div>}
    </div>
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )

}
  );
}

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
