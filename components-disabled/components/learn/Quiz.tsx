
type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};

type Props = {
  questions: Question[];
  onComplete: (score: number) => void;
};


  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  function submit() {
    setSubmitted(true);
    onComplete(score);
  }

  return (
    <div className="space-y-4">
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === i}
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
                <span className="text-red-600">Incorrect</span>
              )}
            </div>
          )}
        </div>
      ))}
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>
  );
}