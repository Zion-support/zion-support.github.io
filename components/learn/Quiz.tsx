<<<<<<< HEAD
<<<<<<< HEAD

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
}
import React, { useState } from 'react';



=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function Quiz({ questions, onComplete }: Props) {

export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0)
    0
  );
  function submit() {
<<<<<<< HEAD



export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions && questions.reduce(;
    (acc, q) => acc + (answers[q && q.id] === q && q.answerIndex ? 1 : 0),;
    0;
  );
  function submit() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
};
=======
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  type='radio'                  name={q.id}
  function submit() {
    setSubmitted(true);

    onComplete(score)
  }



<<<<<<< HEAD
=======
                  type='radio'                  name={q && q.id}
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  function submit() {

    setSubmitted(true)
=======
  function submit() {
    setSubmitted(true);
    onComplete(score)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  function submit() {
  function submit() {

    setSubmitted(true)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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


<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? (
                <span className='text - green - 600'>Correct</span>) : (
                <span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (
                <span className="text - green - 600">Correct</span>) : (
                <span className="text - red - 600">Incorrect</span>)}
            </div>)}
        </div>))}
      <button;
        on_click={submit}
        className='px - 4 py - 2 bg - blue - 600 text - white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (
          Score: {score} / {questions.length}
        </div>)}
    </div>);      <button on_click={submit} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Submit Quiz</button>;
      {submitted && <div className="text - sm">Score: {score} / {questions.length}</div>}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
              )}
            </div>
          )}
        </div>
      ))}
  )

<<<<<<< HEAD
  );
}



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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
  );
}

<<<<<<< HEAD
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
