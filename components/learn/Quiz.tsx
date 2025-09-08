

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




    0;

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



        className='px - 4 py - 2 bg - blue - 600 text - white rounded'    />

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




