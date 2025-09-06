import React, { useState } from 'react',

interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
}

const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],

export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl'),
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code])),

  return (
    <div className=&quot;w-full&quot;>
      <div className=&quot;flex gap-2 mb-2&quot;>
        {tabs.map((t) => (
          <button
import React, {_useState} from 'react';

interface Props {_samples: { language: 'curl' | 'javascript' | 'python'; code: string}[];
}

const tabs: Array<{_key: Props['samples'][number]['language']; label: string}> = [
  {_key: 'curl', _label: 'cURL'},
  {_key: 'javascript', _label: 'JavaScript'},
  {_key: 'python', _label: 'Python'}];

export default function CodeSamples(_{_samples}: Props) {_const [active, _setActive] = useState<typeof tabs[number]['key']>('curl');
  const _sampleMap = Object.fromEntries(_samples.map((s) => [s.language, _s.code]));

  return (_<div className="w-full">
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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