import React, { useState } from 'react';

interface Props {
<<<<<<< HEAD
  samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];
=======
<<<<<<< HEAD
<<<<<<< HEAD
  samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];
=======
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const tabs: Array<{
  key: Props['samples'][number]['language'];
  label: string;
}> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
];

export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));

  return (
<<<<<<< HEAD
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (          <button
=======
<<<<<<< HEAD
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (
=======
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
}

const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code]));

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            key={t.key}
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
<<<<<<< HEAD
      <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  );
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>
=======
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
