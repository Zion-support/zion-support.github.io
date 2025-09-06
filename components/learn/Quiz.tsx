
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

<<<<<<< HEAD
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

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0)
    0
  );
  function submit() {
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
};
=======
                  type='radio'                  name={q.id}
  function submit() {
    setSubmitted(true);
<<<<<<< HEAD
=======

    onComplete(score)
  }



export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  function submit() {

    setSubmitted(true)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
          Score: {score} / {questions.length}
        </div>
      )}
    </div>
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>

=======


=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );
}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
