
import StarRating from './StarRating;
export type ReviewFormValues = {
  projectId: string,
  fromRole: client' | 'talent,
  fromId: string,
  rating: number,
  text: string,
  categories?: {
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
  }
  anonymous?: boolean
}

type Props = {
  initial: Pick<ReviewFormValues, projectId' | 'fromRole | fromId'>
}


import React, { useState } from 'react;
import StarRating from ./StarRating';
export type ReviewFormValues = any;
>>>>>>> origin/main
const ReviewForm: React.FC<Props> = ({ initial }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [communication, setCommunication] = useState<number | undefined>();
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);


        body: JSON.stringify({
          projectId: initial.projectId,
          fromRole: initial.fromRole,
          fromId: initial.fromId,

            communication;
            qualityOfWork;
            timeliness;
            wouldWorkWithAgain}})});

    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6>
      <div>
        <label className=block text-sm font-medium mb-2">Overall Rating</label>
        <StarRating value={rating} onChange={setRating} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2>Your Review</label>
        <textarea
          className=w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
