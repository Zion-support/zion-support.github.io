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
type Question = {
  id: string,
  question: string,
  options: string[],
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  answerIndex: number
}
type Props = {
  questions: Question[]
  onComplete: (score: number) => void
<<<<<<< HEAD
};
type Props = {;
  questions: Question[];
  onComplete: (score: number) => void;};  id: string,;
  question: string,;
  options: string[],;
  answerIndex: number;
};
type Props = {;
  questions: Question[],;
  onComplete: (score: number) => void;
export default function Quiz(): any ({ questions, onComplete }: Props) {;
=======
<<<<<<< HEAD
export default function Quiz({ questions, onComplete }: Props) {
=======

export default function Quiz({ questions, onComplete }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions && questions.reduce(;
    (acc, q) => acc + (answers[q && q.id] === q && q.answerIndex ? 1 : 0),;
    0;
  );
  function submit() {;
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
                  type='radio'                  name={q && q.id}
};
export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
  function submit() {
<<<<<<< HEAD
    setSubmitted(true)
=======
    setSubmitted(true);
<<<<<<< HEAD
=======
    onComplete(score)
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
        <div className='text - sm'>;
          Score: {score} / {questions.length}
        </div>)}
    </div>);      <button on_click={submit} className="px - 4 py - 2 bg - blue - 600 text - white rounded">Submit Quiz</button>;
      {submitted && <div className="text - sm">Score: {score} / {questions.length}</div>}
    </div>);
                />
<<<<<<< HEAD
                <span>{_opt}</span>
=======
                <span>{opt}</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </label>
            ))}
          </div>
          {submitted && (
<<<<<<< HEAD
            <div className=&quot;mt-2 text-sm&quot;>
              {answers[q.id] === q.answerIndex ? (
                <span className=&quot;text-green-600&quot;>Correct</span>
              ) : (
                <span className=&quot;text-red-600&quot;>Incorrect</span>
=======
            <div className='mt-2 text-sm'>
              {answers[q.id] === q.answerIndex ? (
                <span className='text-green-600'>Correct</span>
              ) : (
                <span className='text-red-600'>Incorrect</span>              )}              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600">Correct</span>
              ) : (
                <span className="text-red-600">Incorrect</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              )}
            </div>
          )}
        </div>
      ))}
<<<<<<< HEAD
      <button onClick={submit} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Submit Quiz</button>
      {submitted && <div className=&quot;text-sm&quot;>Score: {score} / {questions.length}</div>}
    </div>
  )

}
=======
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
<<<<<<< HEAD
);
}
<<<<<<< HEAD
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
