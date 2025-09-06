
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





const tabs: Array<{
  key: Props['samples'][number]['language'];
  label: string;
}> = [
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }
];
<<<<<<< HEAD



export default function CodeSamples({ samples }: Props) {;


=======
<<<<<<< HEAD
export default function CodeSamples({ samples }: Props) {
=======

export default function CodeSamples({ samples }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (          <button
<<<<<<< HEAD
=======
<<<<<<< HEAD
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
}


const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [

  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {
=======
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],
export default function CodeSamples({ samples }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code]));
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  return (


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]));

  return (
    <div className="w-full">;
      <div className="flex gap-2 mb-2">;
        {tabs && tabs.map((t) => (;

=======
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
<<<<<<< HEAD
=======
          <button
=======
<<<<<<< HEAD
          <button

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          <button
<<<<<<< HEAD
            key={t && t.key}
            className={`px-3 py-1 rounded border ${active === t && t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t && t.key)}
          >;
            {t && t.label}
          </button>;
        ))}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
);
}
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
      </div>
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
