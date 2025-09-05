import React, { useState } from 'react',;
type Question = {;
  id: string,;
  question: string,;
  options: string[],;
  answerIndex: number;
},;
type Props = {;
  questions: Question[],;
  onComplete: (score: number) => void;
},;
export default function Quiz({ questions, onComplete }: Props) {;
  const [answers, setAnswers] = useState<Record<string number>>({}),;
  const [submitted, setSubmitted] = useState(false),;
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
  function submit() {;
    setSubmitted(true);
    onComplete(score);
  }
<<<<<<< HEAD

  return (
    <div className=&quot;space-y-4&quot;>
      {questions.map((q, idx) => (
        <div key={q.id} className=&quot;border rounded p-3&quot;>
          <div className=&quot;font-medium&quot;>{idx + 1}. {q.question}</div>
          <div className=&quot;mt-2 grid gap-2&quot;>
            {q.options.map((opt, i) => (
              <label key={i} className=&quot;flex items-center gap-2&quot;>
                <input
                  type=&quot;radio&quot;
=======
;
  return (;
    <div className="space-y-4">;
      {questions.map((q, idx) => (;
        <div key={q.id} className="border rounded p-3">;
          <div className="font-medium">{idx + 1}. {q.question}</div>;
          <div className="mt-2 grid gap-2">;
            {q.options.map((opt, i) => (;
              <label key={i} className="flex items-center gap-2">;
                <input;
                  type="radio";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}
                />;
                <span>{opt}</span>;
              </label>;
            ))}
<<<<<<< HEAD
          </div>
          {submitted && (
            <div className=&quot;mt-2 text-sm&quot;>
              {answers[q.id] === q.answerIndex ? (
                <span className=&quot;text-green-600&quot;>Correct</span>
              ) : (
                <span className=&quot;text-red-600&quot;>Incorrect</span>
=======
          </div>;
          {submitted && (;
            <div className="mt-2 text-sm">;
              {answers[q.id] === q.answerIndex ? (;
                <span className="text-green-600">Correct</span>;
              ) : (;
                <span className="text-red-600">Incorrect</span>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            </div>;
          )}
        </div>;
      ))}
<<<<<<< HEAD
      <button onClick={submit} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Submit Quiz</button>
      {submitted && <div className=&quot;text-sm&quot;>Score: {score} / {questions.length}</div>}
    </div>
  )
=======
      <button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit Quiz</button>;
      {submitted && <div className="text-sm">Score: {score} / {questions.length}</div>}
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}