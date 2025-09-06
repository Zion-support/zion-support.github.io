
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
<<<<<<< HEAD
export default function CodeSamples({ samples }: Props) {

export default function CodeSamples({ samples }: Props) {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======



export default function CodeSamples({ samples }: Props) {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (          <button
<<<<<<< HEAD
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
}


const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],
export default function CodeSamples({ samples }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
          <button
=======
<<<<<<< HEAD
          <button

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

          <button

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
          <button
          <button


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          <button

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          <button
            key={t && t.key}
            className={`px-3 py-1 rounded border ${active === t && t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t && t.key)}
          >;
            {t && t.label}
          </button>;
        ))}


=======
      </div>
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

}
<<<<<<< HEAD
}
  );
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
