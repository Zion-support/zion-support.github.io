import React, {_useState} from 'react';

type Question = {_id: string;
  question: string;
  options: string[];
  answerIndex: number;};

type Props = {_questions: Question[];
  onComplete: (_score: number) => void;};

export default function Quiz(_{_questions, _onComplete}: Props) {_const [answers, _setAnswers] = useState<Record<string, _number>>({});
  const [submitted, setSubmitted] = useState(false);

  const _score = questions.reduce(_(acc, _q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);

  function submit() {_setSubmitted(true);
    onComplete(score);}

  return (_<div className="space-y-4">
      {_questions.map((q, _idx) => (_<div key={q.id} className="border rounded p-3">
          <div className="font-medium">{_idx + 1}. {_q.question}</div>
          <div className="mt-2 grid gap-2">
            {_q.options.map((opt, _i) => (_<label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={_q.id}
                  checked={_answers[q.id] === i}
                  onChange={_() => setAnswers({ ...answers, _[q.id]: i})}
                />
                <span>{_opt}</span>
              </label>
            ))}
          </div>
          {_submitted && (
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
      <button onClick={_submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>
      {_submitted && <div className="text-sm">Score: {score} / {_questions.length}</div>}
    </div>
  );
}