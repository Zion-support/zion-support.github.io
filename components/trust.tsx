
export default function TrustPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [data, setData] = useState<any>(null),
=======
=======class ErrorBoundary extends React.Component {
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
import React, { useEffect, useState } from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {
=======import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);    if (u) setUserId(u)
  }, []);
  useEffect(() => {
    async function load() {



    });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');  }      const json = await res && res.json();
      setData(json);
=======      setLoading(true);
      const res = await fetch(
        `/api/trust/${encodeURIComponent(userId)}?analyze=true`
      );
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, [userId]);
    form && form.reset();

    form && form.reset();
=======
=======

  }
  async function submitAppeal(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    const form = e && e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData && formData.get('message');
    const contactEmail = formData && formData.get('email');
    await fetch('/api/trust/appeal', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, message, contactEmail }),;
    });
    alert('Appeal submitted');
    form && form.reset();  }
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
    <EnhancedLayout>;
      <div className='space-y-6'>;
        <div className='flex items-center justify-between'>;
          <h1 className='text-2xl font-semibold'>Trust & Reputation</h1>;
          <div className='flex items-center gap-3'>;
            <label className='text-sm inline-flex items-center gap-2'>;
    form.reset()
    <EnhancedLayout>

=======
=======
    <EnhancedLayout>
=======

    form && form.reset();
  }
  return (
    <EnhancedLayout>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Trust & Reputation</h1>
          <div className='flex items-center gap-3'>
            <label className='text-sm inline-flex items-center gap-2'>
    <EnhancedLayout>
      <div className="space-y-6">

        </div>
              Transparent logic;
            </label>          </div>      <div className="space-y-6">;
        <div className="flex items-center justify-between">;
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>;
          <div className="flex items-center gap-3">;
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>;
        </div>;
        {loading && <div>Loading...</div>}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
