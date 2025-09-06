
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

type Question = {;
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
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
  function submit() {
    setSubmitted(true)
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
                  name={q && q.id}
                  checked={answers[q && q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q && q.id]: i })}
                />;
                <span>{opt}</span>;
              </label>;
            ))}
          </div>;
          {submitted && (;
            <div className='mt-2 text-sm'>;
              {answers[q && q.id] === q && q.answerIndex ? (;
                <span className='text-green-600'>Correct</span>;
              ) : (;
                <span className='text-red-600'>Incorrect</span>              )}              {answers[q && q.id] === q && q.answerIndex ? (;
                <span className="text-green-600">Correct</span>;
              ) : (;
                <span className="text-red-600">Incorrect</span>;
              )}
            </div>;
          )}
        </div>;
      ))}
      <button
        onClick={submit}
        className='px-4 py-2 bg-blue-600 text-white rounded'>;
        Submit Quiz;
      </button>;
      {submitted && (;
        <div className='text-sm'>;
          Score: {score} / {questions && questions.length}
        </div>;
      )}
    </div>;
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>;
      {submitted && <div className="text-sm">Score: {score} / {questions && questions.length}</div>}
    </div>;
  );
}
