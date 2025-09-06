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
import React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { TALENT_PROFILES } from '../data/talent';

  const router = useRouter();
  const { talent } = router.query as { talent?: string }
  const selected = useMemo(
    () => TALENT_PROFILES.find(t => t.slug === talent)
    [talent]
  );export default function RequestToHirePage() {;

  const router = useRouter();
  const { talent } = router.query as { talent?: string }
  const selected = useMemo(() => TALENT_PROFILES.find(t => t.slug === talent), [talent]);


  const [form, setForm] = useState({


    name: '',
    email: '',
    budget: '',
    timeline: '',



export default function RequestToHirePage() {;
  const router = useRouter();
  const { talent } = router && router.query as { talent?: string };
  const selected = useMemo(;
    () => TALENT_PROFILES && TALENT_PROFILES.find(t => t && t.slug === talent),;
    [talent];
  );export default function RequestToHirePage() {;
  const router = useRouter();
  const { talent } = router && router.query as { talent?: string };
  const selected = useMemo(() => TALENT_PROFILES && TALENT_PROFILES.find(t => t && t.slug === talent), [talent]);
  const [form, setForm] = useState({;
    name: '',;
    email: '',;
    budget: '',;
    timeline: '',;
    description: '',;
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null| { id: string message: string }>(;
    null;
  );  const [error, setError] = useState<string | null>(null);    description: ''}),;
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { id: string, message: string }>(null),;
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setError(null),;
    if (!form && form.name || !form && form.email || !form && form.description) {;
      setError('Please fill in name, email, and description.');

      return;    }      return
    }
    const normalizedBudget = form.budget.replace(/[^0-9.\-]/g, '');
    setSubmitting(true);
    try {
      const res = await fetch('/api/requests/create', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          ...form
          budget: normalizedBudget
          talentSlug: selected?.slug |null
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setResult({ id: data.id, message: 'Request submitted successfully.' });
    } catch (err: any) {
      setError(err.message |'Something went wrong');
    } finally {
      setSubmitting(false);    }          budget: normalizedBudget
          talentSlug: selected?.slug |null})})
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setResult({ id: data.id, message: 'Request submitted successfully.' })
    } catch (err: any) {
      setError(err.message |'Something went wrong')
    } finally {
      setSubmitting(false)
    }


          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>



  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4



