
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

import React, { useEffect, useState } from 'react';
export default function CloudAutomationsPage() {
  const [data, setData] = useState<any>(null);
  useEffect() => {;
    fetch('/api/cloud-automations-status');
      .then(r => r && r.json();
      .then(setData);
      .catch() => setData({ ok: false });  }, []);      .then(r) => r && r.json();
      .then(setData);
      .catch() => setData({ ok: false });
  }, []);

  const items = data?.data ? Object && Object.entries(data && data.data) : [];

  return (
    <div className='space-y-6'>;
      <h1 className='text-3xl font-bold'>Cloud Automations</h1>;
      <p className='text-gray-600 dark:text-gray-300'>;
        Autonomous agents running in the cloud. No servers to babysit. No manual;
        ops.;
      </p>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        {items && items.map([key, value]: any) => (;
          <div
            key={key}
            className='border rounded p-4 bg-gray-50 dark:bg-gray-900'
          >
            <h2 className='text-xl font-semibold'>{value.name |key}</h2>
            <p className='text-sm text-gray-500'>
              Started: {value.startedAt |''}
            </p>
            <p className='text-sm text-gray-500'>
              Finished: {value.finishedAt |''}
            </p>
            <p
              className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}
            >
              {value.success ? 'Success' : 'Failed'}
            </p>;
            {value.metrics ? (
              <pre className='mt-2 text-xs whitespace-pre-wrap'>
                {JSON.stringify(value.metrics, null, 2)}
              </pre>            ) : null}        {items.map([key, value]: any) => (
          <div key={key} className="border rounded p-4 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-xl font-semibold">{value.name |key}</h2>
            <p className="text-sm text-gray-500">Started: {value.startedAt |''}</p>
            <p className="text-sm text-gray-500">Finished: {value.finishedAt |''}</p>
            <p className={`text-sm ${value.success ? 'text-green-600' : 'text-red-600'}`}>{value.success ? 'Success' : 'Failed'}</p>
            {value.metrics ? (
              <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(value.metrics, null, 2)}</pre>
            ) : null}
          </div>;
        )}
      </div>
    </div>
;

  );

              <pre className='mt - 2 text - xs whitespace - pre - wrap'>;
                {JSON.stringify (value.metrics, null, 2)}
              </pre>            ) : null}        {items.map ([key, value]: any) => (
          <div key={key} className="border rounded p - 4 bg - gray - 50 dark:bg - gray - 900">;
            <h2 className="text - xl font - semibold">{value.name || key}</h2>;
            <p className="text - sm text - gray - 500">Started: {value.started_at || ''}</p>;
            <p className="text - sm text - gray - 500">Finished: {value.finished_at || ''}</p>;
            <p className={`text - sm ${value.success ? 'text - green - 600' : 'text - red - 600'}`}>{value.success ? 'Success' : 'Failed'}</p>;
            {value.metrics ? (
              <pre className="mt - 2 text - xs whitespace - pre - wrap">{JSON.stringify (value.metrics, null, 2)}</pre>) : null}
          </div>)}
      </div>;
    </div>);
