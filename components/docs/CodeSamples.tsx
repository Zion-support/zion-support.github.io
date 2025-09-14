"use client";

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
import React, { useState } from 'react';
interface Props {
  samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];

const tabs: Array<{
  key: Props['samples'][number]['language'];
  label: string;
}> = [
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }
];

export default function CodeSamples({ samples }: Props) {

export default function CodeSamples({ samples }: Props) {;

  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (          <button





const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [


  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {





interface Props {;
  samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];
const tabs: Array<{;
  key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' },;
  { key: 'javascript', label: 'JavaScript' },;
  { key: 'python', label: 'Python' },;
];
export default function CodeSamples(): any ({ samples }: Props) {;
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map(s => [s && s.language, s && s.code]));

  return (



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]));

  return (
    <div className="w-full">;
      <div className="flex gap-2 mb-2">;
        {tabs && tabs.map((t) => (;




          <button



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


            key={t.key}
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>        <code>{sampleMap[active] |''}</code>
      </pre>
    </div>
  );
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] |''}</code>
      </pre>
    </div>

);
}





          <button
            key={t && t.key}
            className={`px-3 py-1 rounded border ${active === t && t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t && t.key)}
          >;
            {t && t.label}
          </button>;
        ))}








;
const tabs: Array<{
  key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
];
;
export default /**
 * CodeSamples - Function description
 */
function CodeSamples() {
  const [active, set_active] = useState<(typeof tabs)[number]['key']>('curl');
  const sample_map = Object.from_entries (samples.map (string => [s.language, s.code]));
;
  return (
    <div className='w - full'>;
      <div className='flex gap - 2 mb - 2'>;
        {tabs.map (t => (          <button;
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],
export default /**
 * CodeSamples - Function description
 */
function CodeSamples() {
  const [active, set_active] = useState < typeof tabs[number]['key']>('curl');
  const sample_map = Object.from_entries (samples.map ((s) => [s.language, s.code]));
;
  return (
    <div className="w - full">;
      <div className="flex gap - 2 mb - 2">;
        {tabs.map ((t) => (
          <button;
            key={t.key}
            className={`px - 3 py - 1 rounded border ${active === t.key ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - secondary border - high - contrast - secondary'}`}
            on_click={() => set_active (t.key)}
          >;
            {t.label}
          </button>))}
      </div>;
      <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm'>        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);
}      <pre className="p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm">;
        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);
            key={t.key}
            className={_`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={_() => setActive(t.key)}
          >
            {_t.label}
          </button>
        ))}
      </div>
      <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm&quot;>
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  )



}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


