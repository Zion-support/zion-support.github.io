


import React, { useState } from 'react';'

type Question = any;
  "question": string;
  "options": string[];
  "answerIndex": number;
}

type Props = {"questions": Question[];
  }
  "onComplete": ("score": number) => void
};
export default function Quiz({ questions, onComplete }: Props) {}
}
export default function Quiz({ questions, onComplete }: Props) {;}
}
const [answers, setAnswers] = useState<Record<string, number />>({});

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

export default function Quiz() {

}

export default function Quiz() {;

}

const [answers, setAnswers] = useState<Record<string, number>>({});

const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(;
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
    0
=======
export default function Quiz({ questions, onComplete }: Props) {};
export default function Quiz() { return null; }
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0)
    0;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
  function submit() {
    }
    setSubmitted(true);
    onComplete(score);
  }
return (;
    <div className='space-y-4'>;'
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className='border rounded p-3'>;'

          <div className='font-medium'>;'
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;'

            {q && q.options.map((opt, i) => (;
              <label key={i} className='flex items-center gap-2'>;'
                <input,
type = 'radio''
    onComplete(score)
  }
 ;
return (;
    <div className="space-y-4">;"
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className="border rounded p-3">;"

          <div className="font-medium">{idx + 1}. {q && q.question}</div>;"
          <div className="mt-2 grid gap-2">;"
            {q && q.options.map((opt, i) => (<label key={i} className="flex items-center gap-2">;"
                <input;
                  type="radio";"
            <div className='mt - 2 text - sm'>;'
              {answers[q.id] === q.answer_index ? (<span className='text - green - 600'>Correct</span>) : (<span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (<span className="text - green - 600">Correct</span>) : (<span className="text - red - 600">Incorrect</span>)}"
            </div>)}
        </div>))}
      <button;
        on_click={submit}
        className='px - 4 py - 2 bg - blue - 600 text - white rounded'>'

        Submit Quiz;
      </button>;
      {submitted && ("Score": {score} / {questions.length}
        </div>)}
    </div>)<button on_click={submi
} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Submit Quiz</button>;"
      {submitted && <div className="text - sm">"Score": {score} / {questions.length}</div>}"
    </div>)<span>{op
}</span>;
              </label>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<div className='mt-2 text-sm'>'
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'>Correct</span>'
              ) : (
                <span className='text-red-600'>Incorrect</span>'

<div className='mt-2 text-sm' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
<<<<<<< HEAD
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
=======
                <span className='text-red-600'>Incorrect</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <span className='text-red-600' />Incorrect</span>}
}
              )}
            </div>;
          )}

        </div>
      ))}
  )

<button,
onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded'>'

        Submit Quiz;
      </button>;
      {submitted && (<div className='text-sm'>;'
          }
          "Score": {score} / {questions.lengt
}
  );
}



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

"
<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
