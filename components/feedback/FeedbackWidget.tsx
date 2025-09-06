
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
import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

  responseId
  aiModel
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
}
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  responseId?: string;
  aiModel?: string
};

  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const effectiveResponseId = useMemo(
    () => responseId |uuidv4()
    [responseId]
  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose  or ');
      return;    }  const effectiveResponseId = useMemo(() => responseId |uuidv4(), [responseId]);
  const submit = async () => {
    if (!rating) {
      setError('Please choose  or ');
      return;      return;
      return
    }
    setError(null);
    setSubmitting(true);
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message |'Something went wrong')
    } finally {
      setSubmitting(false)
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
            >;
              <span></span>;
              <span>Yes</span>;
            </button>;
            <button
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >;
              <span></span>;
              <span>No</span>;
            </button>;
          </div>;
          <textarea
            </button>;
          </div>;
        </div>;
      )}
}
    </div>
}
}
  );
}
