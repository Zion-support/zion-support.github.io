<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

;

<<<<<<< HEAD
=======
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from 'react';
type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
}
type Props = {questions: Question[];
  onComplete: (score: number) => void;

import React, { useState } from 'react';
type Question = $2;
  question: string,
  options: string[],
  answerIndex: number},

type Props = $2;
  onComplete: (score: number) => void
},

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({}),
  const [submitted, setSubmitted] = useState($2);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0),

  function submit() {
<<<<<<< HEAD
}export default function Quiz() {export default function Quiz() {const [answers, setAnswers] = useState<Record<string, number>>({})const [submitted, setSubmitted]  = useState(false)const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),0;
  )function submit() {setSubmitted(true)onComplete(score)}
  return (<div className='space-y-4'>;
      {questions && questions.map((q, idx) => (<div key={q && q.id} className='border rounded p-3'>;
          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;
  function submit() {
  function submit() {

    setSubmitted(true)

    setSubmitted($2);
    onComplete(score)
  }

  return (
            {q && q.options.map((opt, i) => (<label key={i} className='flex items-center gap-2'>;
                <input;
  function submit() {function submit() {setSubmitted(true)type='radio';
    onComplete(score)}
  return (<div className="space-y-4">;
      {questions && questions.map((q, idx) => (<div key={q && q.id} className="border rounded p-3">;
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

<div className='mt-2 text-sm'>
    <div className="space-y-4">
=======
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {questions.map((q, idx) => (
        <div key={q.id} className="border rounded p-3">
          <div className="font-medium">{idx + 1}. {q.question}</div>
          <div className="mt-2 grid gap-2">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
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
          </div>;
          {submitted && (<div className='mt-2 text-sm'>;
              {answers[q.id] === q.answerIndex ? (<span className='text-green-600'>Correct</span>;
              ) : (<span className='text-red-600'>Incorrect</span>;
                <span className="text-red-600">Incorrect</span>
              )}
            </div>
          )}
              )}
            </div>;
          )}
        </div>;
      ))})}
  )}<button;
        onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (<div className='text-sm'>;
          Score: {score} / {questions.length}
        </div>;
      )}
    </div>;
  )

  )

}
  );
}



  )
        </div>
<<<<<<< HEAD
      ))}
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
=======
        </div>
      )}
    </div>
<<<<<<< HEAD
  );

"
=======
/> <span> {
  opt 
}</span> </label>) ) 
}</div> {
  answers[q.id] === q.answerIndex ? (<span className="text-green-600" >Correct</span>) : (<span className="text-red-600" >Incorrect</span>) 
}</div>) 
}</div>) ) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
