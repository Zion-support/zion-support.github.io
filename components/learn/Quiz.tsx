import React, { useState } from 'react',

type Question = {
  id: string,
  question: string,
  options: string[],
  answerIndex: number
},

type Props = {
  questions: Question[],
  onComplete: (score: number) => void
},

export default function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string number>>({}),
  const [submitted, setSubmitted] = useState(false),

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0),

  function submit() {
    setSubmitted(true),
    onComplete(score)
  }

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
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers({ ...answers, [q.id]: i })}                />
                <span>{_opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
            <div className=&quot;mt-2 text-sm&quot;>              {answers[q.id] === q.answerIndex ? (
                <span className=&quot;text-green-600&quot;>Correct</span>
              ) : (
                <span className=&quot;text-red-600&quot;>Incorrect</span>
              )}
            </div>
          )}
        </div>
      ))}
      <button onClick={submit} className=&quot;px-4 py-2 bg-blue-600 text-white rounded&quot;>Submit Quiz</button>
      {submitted && <div className=&quot;text-sm&quot;>Score: {score} / {questions.length}</div>}    </div>
  )
}