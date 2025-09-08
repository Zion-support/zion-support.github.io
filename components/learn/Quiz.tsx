<<<<<<< HEAD


          <div className='font-medium'>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;

            {q && q.options.map((opt, i) => (;
              <label key={i} className='flex items-center gap-2'>;
                <input

  function submit() {
  function submit() {

export default function Quiz() {



=======
import React, { useState } from 'react';
type Question = any;
  question: string;
  options: string[];
  answerIndex: number;
    onComplete(score)
  }

  return (
    <div className="space-y-4">
export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions && questions.reduce(;
    (acc, q) => acc + (answers[q && q.id] === q && q.answerIndex ? 1 : 0),;
    0;
  );
  function submit() {;

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


export default function Quiz({ questions, onComplete }: Props) {}
}
export default function Quiz({ questions, onComplete }: Props) {;}
}

  function submit() {

export default function Quiz() {

    setSubmitted($2);
origin/cursor/automate-test-improve-and-merge-code-2533
export default function Quiz({ questions, onComplete }: Props) {

}

const [answers, setAnswers] = useState<Record<string, number    />>({});
>>>>>>> origin/cursor/delete-old-data-records-6bba

const [submitted, setSubmitted] = useState(false);

const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0),
<<<<<<< HEAD

    0;

=======
    0
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
  function submit() {
    setSubmitted(true);}
    onComplete(score);}
  }

<<<<<<< HEAD
    setSubmitted(true)



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

            {q && q.options.map((opt, i) => (;
              <label key={i} className="flex items-center gap-2">;
                <input
                  type="radio"



            <div className='mt - 2 text - sm'>;
              {answers[q.id] === q.answer_index ? (<span className='text - green - 600'>Correct</span>) : (<span className='text - red - 600'>Incorrect</span>              )}              {answers[q.id] === q.answer_index ? (<span className="text - green - 600">Correct</span>) : (<span className="text - red - 600">Incorrect</span>)}
    <div className="space-y-4">;
      {questions && questions.map((q, idx) => (;"
        <div key={q && q.id} className="border rounded p-3">;"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


  return (


=======


  return (

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>)}
        </div>))}
      <button;
        on_click={submit}
<<<<<<< HEAD

        className='px - 4 py - 2 bg - blue - 600 text - white rounded'    />

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        Submit Quiz;
      </button>;
      {submitted && (Score: {score} / {questions.length}
        </div>)}

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
              </label>;
            ))}

<div className='mt-2 text-sm'>
    <div className="space-y-4">
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className='space-y-4'>

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
        </div>;
      )}
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
      ))}
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>


>>>>>>> origin/cursor/delete-old-data-records-6bba
