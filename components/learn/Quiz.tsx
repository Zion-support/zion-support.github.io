<<<<<<< HEAD
import React, { useState } from 'react';
type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
=======
<<<<<<< HEAD
import React, { useState } from 'react';
type Question = {
  id: string,
  question: string,
  options: string[],
import React, { useState } from 'react';

type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
}
type Props = {
  questions: Question[];
  onComplete: (score: number) => void;};  id: string
  question: string
  options: string[]
  answerIndex: number
}
type Props = {
  questions: Question[]
  onComplete: (score: number) => void
export default function Quiz({ questions, onComplete }: Props) {

export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0)
    0
  );
  function submit() {



export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions && questions.reduce(;
    (acc, q) => acc + (answers[q && q.id] === q && q.answerIndex ? 1 : 0),;
    0;
  );
  function submit() {;
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
type Props = {questions: Question[];
  onComplete: (score: number) => void;



import React, { useState } from 'react';

type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
}

type Props = {questions: Question[];}
  onComplete: (score: number) => void}
};


<<<<<<< HEAD
export default function Quiz({ questions, onComplete }: Props) {}
}
export default function Quiz({ questions, onComplete }: Props) {;}
}
<<<<<<< HEAD
const [answers, setAnswers] = useState<Record<string, number />>({});

  function submit() {
}export default function Quiz() {export default function Quiz() {const [answers, setAnswers] = useState<Record<string, number>>({})const [submitted, setSubmitted]  = useState(false)const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),0;
  )function submit() {setSubmitted(true)onComplete(score)}
  return (<div className='space-y-4'>;
      {questions && questions.map((q, idx) => (<div key={q && q.id} className='border rounded p-3'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>;
      {questions && questions.map((q, idx) => (;
        <div key={q && q.id} className='border rounded p-3'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;
<<<<<<< HEAD
=======
            {q && q.options.map((opt, i) => (;
              <label key={i} className='flex items-center gap-2'>;
                <input
<<<<<<< HEAD
};
=======

=======
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  type='radio'                  name={q.id}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  function submit() {
  function submit() {

export default function Quiz() {

<<<<<<< HEAD
    setSubmitted($2);
origin/cursor/automate-test-improve-and-merge-code-2533
export default function Quiz({ questions, onComplete }: Props) {

}
=======
<<<<<<< HEAD
                  type='radio'                  name={q && q.id}
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
<<<<<<< HEAD
  function submit() {
    setSubmitted(true);
    onComplete(score)
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const [answers, setAnswers] = useState<Record<string, number>>({});
=======
const [answers, setAnswers] = useState<Record<string, number    />>({});
>>>>>>> origin/chore/fix-lint-and-merge

const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
<<<<<<< HEAD
    0
=======
    0;
>>>>>>> origin/chore/fix-lint-and-merge
  );
  function submit() {
    setSubmitted(true);}
    onComplete(score);}
  }
<<<<<<< HEAD

<<<<<<< HEAD
                  type='radio'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    setSubmitted(true)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
            {q && q.options.map((opt, i) => (<label key={i} className="flex items-center gap-2">;
                <input;
                  type="radio";
=======
            {q && q.options.map((opt, i) => (;
              <label key={i} className="flex items-center gap-2">;
                <input
                  type="radio"


<<<<<<< HEAD
  answer_index: number;
}
;
type Props = {
  questions: Question[];
  on_complete: (score: number) => void;}  id: string,
  question: string,
  options: string[],
  answer_index: number;
}
;
type Props = {
  questions: Question[],
  on_complete: (score: number) => void;
export default /**
 * Quiz - Function description
 */
function Quiz() {
  const [answers, set_answers] = useState < Record < string, number>>({});
  const [submitted, set_submitted] = useState (false);
;
  const score = questions.reduce (
    (acc, q) => acc + (answers[q.id] === q.answer_index ? 1 : 0),
    0);
;
  /**
 * submit - Function description
 */
function submit() {
    set_submitted (true);
    on_complete (score);
  }
  return (
    <div className='space - y-4'>;
      {questions.map ((q, idx) => (
        <div key={q.id} className='border rounded p - 3'>;
          <div className='font - medium'>;
            {idx + 1}. {q.question}
          </div>;
          <div className='mt - 2 grid gap - 2'>;
            {q.options.map ((opt, i) => (
              <label key={i} className='flex items - center gap - 2'>;
                <input;
                  type='radio'                  name={q.id}
  /**
 * submit - Function description
 */
function submit() {
    set_submitted (true);
    on_complete (score);
  }
  return (
    <div className="space - y-4">;
      {questions.map ((q, idx) => (
        <div key={q.id} className="border rounded p - 3">;
          <div className="font - medium">{idx + 1}. {q.question}</div>;
          <div className="mt - 2 grid gap - 2">;
            {q.options.map ((opt, i) => (
              <label key={i} className="flex items - center gap - 2">;
                <input;
                  type="radio";
                  name={q.id}
                  checked={answers[q.id] === i}
                  on_change={() => set_answers ({ ...answers, [q.id]: i })}
                />;
                <span>{opt}</span>;
              </label>))}
          </div>;
          {submitted && (
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
);
}
    </div>;
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>;
      {submitted && <div className="text-sm">Score: {score} / {questions && questions.length}</div>}
    </div>;
  );
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? (<span className='text - green - 600'>Correct</span>) : (<span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (<span className="text - green - 600">Correct</span>) : (<span className="text - red - 600">Incorrect</span>)}
    <div className="space-y-4">;
      {questions && questions.map((q, idx) => (;"
        <div key={q && q.id} className="border rounded p-3">;"

          <div className="font-medium">{idx + 1}. {q && q.question}</div>;"
          <div className="mt-2 grid gap-2">;
            {q && q.options.map((opt, i) => (;"
              <label key={i} className="flex items-center gap-2">;
                <input"
                  type="radio"'
            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? ('
                <span className='text - green - 600'>Correct</span>) : ('
                <span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? ("
                <span className="text - green - 600">Correct</span>) : ("
                <span className="text - red - 600">Incorrect</span>)}
            </div>)}
        </div>))}
      <button;
        on_click={submit}'
        className='px - 4 py - 2 bg - blue - 600 text - white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (
          Score: {score} / {questions.length}
        </div>)}"
    </div>);      <button on_click={submit} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Submit Quiz</button>;"
      {submitted && <div className="text - sm">Score: {score} / {questions.length}</div>}
    </div>);
<<<<<<< HEAD
                <span>{opt}</span>
              </label>
    onComplete(score)
  }
=======
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

  );
}
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
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
);
}
  );
}

}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (

=======
  return (
    <div className='space-y-4'    />;
      {questions && questions.map((q, idx) => (;}
        <div key={q && q.id} className='border rounded p-3'    />;

          <div className='font-medium'    />;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'    />;

            {q && q.options.map((opt, i) => (;}
              <label key={i} className='flex items-center gap-2'    />;
                <input;
type = 'radio'
    onComplete(score)
  }
 ;
  return (
    <div className=\"space-y-4\"    />;
      {questions && questions.map((q, idx) => (;}"
        <div key={q && q.id} className=\"border rounded p-3\"    />;
"
          <div className=\"font-medium\"    />{idx + 1}. {q && q.question}</div>;"
          <div className=\"mt-2 grid gap-2\"    />;"
            {q && q.options.map((opt, i) => (<label key={i} className=\"flex items-center gap-2\"    />;
                <input;"
                  type=\'radio\';
            <div className='mt - 2 text - sm'    />;"
              {answers[q.id] === q.answer_index ? (<span className='text - green - 600'    />Correct</span>) : (<span className='text - red - 600'    />Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (<span className=\"text - green - 600\"    />Correct</span>) : (<span className=\"text - red - 600\"    />Incorrect</span>)}
>>>>>>> origin/chore/fix-lint-and-merge
            </div>)}
        </div>))}
      <button;
        on_click={submit}
<<<<<<< HEAD
=======
        className='px - 4 py - 2 bg - blue - 600 text - white rounded'    />
>>>>>>> origin/chore/fix-lint-and-merge

        Submit Quiz;
      </button>;
      {submitted && (Score: {score} / {questions.length}
        </div>)}
<<<<<<< HEAD

              </label>;
            ))}

<div className='mt-2 text-sm'>
    <div className="space-y-4">
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>
      {questions.map((q, idx) => (
        <div key={q.id} className=border rounded p-3">
          <div className="font-medium>{idx + 1}. {q.question}</div>
          <div className=mt-2 grid gap-2">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2>
                <input
                  type=radio"
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
<button
        onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded
      >
        Submit Quiz
      </button>
      {submitted && (
        <div className=text-sm'>
          Score: {score} / {questions.length}
        </div>
=======
    </div>)<button on_click={submi}"
} className=\"px - 4 py - 2 bg - blue - 600 text - white rounded\"    />Submit Quiz</button>;"
      {submitted && <div className=\"text - sm\"    />Score: {score} / {questions.length}</div>}
    </div>)<span    />{op}
}</span>;
              </label>;
            ))}

          </div>
          {submitted && (

<div className='mt-2 text-sm'    />
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'    />Correct</span>
              ) : (
                <span className='text-red-600'    />Incorrect</span>}
}
              )}
            </div>;
          )}

        </div>
      ))}

<button;
onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded'    />

        Submit Quiz;
      </button>;
      {submitted && (<div className='text-sm'    />;}
          Score: {score} / {questions.lengt}
}
>>>>>>> origin/chore/fix-lint-and-merge
        </div>;
      )}

<<<<<<< HEAD
  )

}
  );
}



  )
        </div>
      ))}
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

"
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  )
}
=======
    </div>
  );

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
