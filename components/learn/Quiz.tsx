import React, { useState } from 'react;
type Question = any;

  );
  function submit() {}
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className=space-y-4'>;
      {questions && questions.map((q, idx) => (;'
        <div key={q && q.id} className=border rounded p-3>;'
          <div className='font-medium>;
            {idx + 1}. {q && q.question}
          </div>;
          <div className='mt-2 grid gap-2'>;
            {q && q.options.map((opt, i) => (;
              <label key={i} className=flex items-center gap-2'>;
                <input;
    setSubmitted(true)

                  type='radio
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    onComplete(score)
  }

  return (

            </div>)}
        </div>))}
      <button;
        on_click={submit}
        className=px - 4 py - 2 bg - blue - 600 text - white rounded';
      >;
        Submit Quiz;
      </button>;
      {submitted && (Score: {score} / {questions.length}
        </div>)}
    </div>)<button on_click={submit} className="px - 4 py - 2 bg - blue - 600 text - white rounded>Submit Quiz</button>;
      {submitted && <div className=text - sm">Score: {score} / {questions.length}</div>}
    </div>)<span>{opt}</span>;
              </label>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            ))}

<div className='mt-2 text-sm>
    <div className="space-y-4>
=======
    setSubmitted(true);
    onComplete(score);
  }
  return (
    <div className=space-y-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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

              {answers[q.id] === q.answerIndex ? (
                <span className="text-green-600>Correct</span>
              ) : (

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

=======



=======
  );      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  )
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
