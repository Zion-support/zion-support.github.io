
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
  function submit() {
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
