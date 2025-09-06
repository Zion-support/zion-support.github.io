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
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
<<<<<<< HEAD
        {tabs.map(t => (          <button
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
<<<<<<< HEAD
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }];
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = null;
=======
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code]));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
=======
        {tabs.map(t => (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <button
            key={t.key}
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
<<<<<<< HEAD
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
=======
      <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
