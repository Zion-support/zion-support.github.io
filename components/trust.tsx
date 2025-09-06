
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
import React, { useEffect, useState } from 'react';
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
export default function TrustPage() {;
  const [userId, setUserId] = useState<string>('demo-user');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);



  }, []);

  useEffect(() => {;
    async function load() {;
      setLoading(true);


    });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');  }      const json = await res && res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, [userId]);


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
    form.reset();  }
  return (

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

  }
  return (
    <EnhancedLayout>


                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}

