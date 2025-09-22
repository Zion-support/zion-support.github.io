
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React, { useState } from 'react';

export default function CodeSamples({ samples }: Props) {;

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
origin/cursor/automate-test-improve-and-merge-code-2533
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
        {tabs.map(t => (          <button

interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
interface Props {}
samples: { language: 'curl' | 'javascript' | 'python'; code: string}
}[];

'
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = []
'
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = []
'
  { key: 'curl', label: 'cURL' }'
  { key: 'javascript', label: 'JavaScript' }'
  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {};
interface Props {;'
  samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];

const tabs: Array<{;'
  key: Props['samples'][number]['language'];
  label: string;
}> = [;'
  { key: 'curl', label: 'cURL' },;'
  { key: 'javascript', label: 'JavaScript' },;'
  { key: 'python', label: 'Python' },;
];

export default function CodeSamples(): any ({ samples }: Props) {;'
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map(s => [s && s.language, s && s.code]));

  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]));

  return (
    <div className="w-full">;"
      <div className="flex gap-2 mb-2">;
        {tabs && tabs.map((t) => (;
"
    <div className="w-full">"
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (

          <button;
          <button;
            key={t.key}'
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
<pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  );"
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">'
        <code>{sampleMap[active] |''}</code>
      </pre>
    </div>
);
}

          <button;
            key={t && t.key}'`
            className={`px-3 py-1 rounded border ${active === t && t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t && t.key)}
            onClick={() = /> setActive(t.key)}
          >;
            {t.label}
          </button>;
        ))}
      </div>"
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">'
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
  );

}
;
const tabs: Array<{'
  key: Props['samples'][number]['language'];
  label: string;
}> = [;'
  { key: 'curl', label: 'cURL' },'
  { key: 'javascript', label: 'JavaScript' },'
  { key: 'python', label: 'Python' },
];
;
export default /**;
 * CodeSamples - Function description;
 */
function CodeSamples() { return null; }
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;'
  { key: 'curl', label: 'cURL' },'
  { key: 'javascript', label: 'JavaScript' },'
  { key: 'python', label: 'Python' }],
export default /**;
 * CodeSamples - Function description;
 */
function CodeSamples() { return null; }
            key={t.key}'`
            className={`px - 3 py - 1 rounded border ${active === t.key ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - secondary border - high - contrast - secondary'}`}
            on_click={() => set_active (t.key)}
          >;
            {t.label}
          </button>))}
      </div>;'
      <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm'>        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);"
}      <pre className="p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm">;'
        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);
}
origin/cursor/automate-test-improve-and-merge-code-2533

"

