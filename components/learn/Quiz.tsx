<<<<<<< HEAD
<<<<<<< HEAD
=======

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import React, { useState } from 'react';
type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
}
type Props = {questions: Question[];
  onComplete: (score: number) => void;
<<<<<<< HEAD
};

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export default function Quiz({ questions, onComplete }: Props) {

export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
    0
  );
  function submit() {
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>;
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className='border rounded p-3'>;
=======
}export default function Quiz() {export default function Quiz() {const [answers, setAnswers] = useState<Record<string, number>>({})const [submitted, setSubmitted]  = useState(false)const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),0;
  )function submit() {setSubmitted(true)onComplete(score)}
  return (<div className='space-y-4'>;
      {questions && questions.map((q, idx) => (<div key={q && q.id} className='border rounded p-3'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;
<<<<<<< HEAD
            {q && q.options.map((opt, i) => (;
              <label key={i} className='flex items-center gap-2'>;
                <input
<<<<<<< HEAD
                  type='radio'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  function submit() {
  function submit() {

    setSubmitted(true)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    onComplete(score)
  }
  return (
    <div className="space-y-4">;
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className="border rounded p-3">;
=======
            {q && q.options.map((opt, i) => (<label key={i} className='flex items-center gap-2'>;
                <input;
  function submit() {function submit() {setSubmitted(true)type='radio';
    onComplete(score)}
  return (<div className="space-y-4">;
      {questions && questions.map((q, idx) => (<div key={q && q.id} className="border rounded p-3">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <div className="font-medium">{idx + 1}. {q && q.question}</div>;
          <div className="mt-2 grid gap-2">;
            {q && q.options.map((opt, i) => (<label key={i} className="flex items-center gap-2">;
                <input;
                  type="radio";
            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? (<span className='text - green - 600'>Correct</span>) : (<span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (<span className="text - green - 600">Correct</span>) : (<span className="text - red - 600">Incorrect</span>)}
            </div>)}
        </div>))}
      <button;
        on_click={submit}
        className='px - 4 py - 2 bg - blue - 600 text - white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (Score: {score} / {questions.length}
        </div>)}
    </div>)<button on_click={submit} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Submit Quiz</button>;
      {submitted && <div className="text - sm">Score: {score} / {questions.length}</div>}
    </div>)<span>{opt}</span>;
              </label>;
            ))}
<<<<<<< HEAD
          </div>
          {submitted && (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
<div className='mt-2 text-sm'>
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'>Correct</span>
              ) : (
                <span className='text-red-600'>Incorrect</span>
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          </div>;
          {submitted && (<div className='mt-2 text-sm'>;
              {answers[q.id] === q.answerIndex ? (<span className='text-green-600'>Correct</span>;
              ) : (<span className='text-red-600'>Incorrect</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
              )}
            </div>;
          )}
<<<<<<< HEAD
        </div>
      ))}
<<<<<<< HEAD
<button
=======
        </div>;
      ))})}
  )}<button;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (<div className='text-sm'>;
          Score: {score} / {questions.length}
        </div>;
      )}
<<<<<<< HEAD
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>;
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

  )

}
  );
}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
