<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from 'react';
interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string}[]
=======
}'
import React, { useState } from 'react';



<<<<<<< HEAD
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
=======
export default function CodeSamples() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
interface Props {}
samples: { language: 'curl' | 'javascript' | 'python'; code: string}
}[];

<<<<<<< HEAD
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
=======
const tabs: Array<{
  key: Props['samples'][number]['language'];
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}

export default function CodeSamples() {interface Props  {samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];const tabs: Array<{key: Props['samples'][number]['language'];
  label: string;
}> = [;
<<<<<<< HEAD
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }
];



export default function CodeSamples({ samples }: Props) {;


  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]));
=======
  { key: 'curl'}
  label: 'cURL'}
}
  { key: 'javascript'}
  label: 'JavaScript'}
}
  { key: 'python'}
  label: 'Python'}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
];

export default function CodeSamples(): any ({ samples }: Props) {;'
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map(s => [s && s.language, s && s.code]));

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },

  { key: 'python', label: 'Python' }];
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = null;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
=======
  return ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-2'>
const tabs: Array<{ key: Props['samples'][number]['language'], label: string}> = [
  { key: 'curl', label: 'cURL' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' }],

export default function CodeSamples({ samples }: Props) {
        {tabs.map(t => (          <button

<<<<<<< HEAD
=======
const sampleMap = null;
  return (
  const [active, setActive] = useState<typeof tabs[number]['key'] />('curl');

const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]));

  return (
    <div className=\"w-full\" />;
"
      <div className=\"flex gap-2 mb-2\" />;"
        {tabs && tabs.map((t) => (<div className=\"w-full\" />;"
      <div className=\"flex gap-2 mb-2\" />;
        {tabs.map((t) => (<button;}
          <button;}
            key={t.key}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
<<<<<<< HEAD
      </div>
<pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>
        <code>{sampleMap[active] || ''}</code>
=======
      </div>'
      <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>        <code>{sampleMap[active] |''}</code>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </pre>
    </div>
<<<<<<< HEAD
  );"
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">'
=======
  );
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
      </div>"
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">'
        <code>{sampleMap[active] || ''}</code>
=======

      </div>
<pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm' />
        <code />{sampleMap[active] || ''}</code>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </pre>
    </div>
  );
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

interface Props {
  samples: { language: 'curl' | 'javascript' | 'python', code: string }[]
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
<<<<<<< HEAD
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<<<<<<< HEAD

const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [

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
<<<<<<< HEAD
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]));

  return (
    <div className="w-full">;
export default function CodeSamples() {const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl')const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]))return (<div className='w-full'>;
      <div className='flex gap-2 mb-2'>;
        {tabs.map(t => (          <button;
interface Props  {samples: { language: 'curl' | 'javascript' | 'python', code: string }[];
}const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }];
export default function CodeSamples() {interface Props  {samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];const tabs: Array<{key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' },];export default function CodeSamples(): any ({ samples }: Props) {const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl')const sampleMap  = Object && Object.fromEntries(samples && samples.map(s => [s && s.language, s && s.code])){ key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' }];
export default function CodeSamples() {const [active, setActive] = useState<typeof tabs[number]['key']>('curl')const sampleMap  = null;return (const [active, setActive] = useState<typeof tabs[number]['key']>('curl')const sampleMap  = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]))return (<div className="w-full">;
export default function CodeSamples() {interface Props  {samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];const tabs: Array<{key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }
];
export default function CodeSamples() {const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl')const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]))return (<div className='w-full'>;
      <div className='flex gap-2 mb-2'>;
        {tabs.map(t => (          <button;
interface Props  {samples: { language: 'curl' | 'javascript' | 'python', code: string }[];
}const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
  { key: 'curl', label: 'cURL' }
  { key: 'javascript', label: 'JavaScript' }
  { key: 'python', label: 'Python' }];
export default function CodeSamples() {interface Props  {samples: { language: 'curl' | 'javascript' | 'python'; code: string }[];const tabs: Array<{key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' },];export default function CodeSamples(): any ({ samples }: Props) {const [active, setActive] = useState<(typeof tabs)[number]['key']>('curl')const sampleMap  = Object && Object.fromEntries(samples && samples.map(s => [s && s.language, s && s.code])){ key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' }];
export default function CodeSamples() {const [active, setActive] = useState<typeof tabs[number]['key']>('curl')const sampleMap  = null;return (const [active, setActive] = useState<typeof tabs[number]['key']>('curl')const sampleMap  = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]))return (<div className="w-full">;
      <div className="flex gap-2 mb-2">;
        {tabs && tabs.map((t) => (<div className="w-full">;
      <div className="flex gap-2 mb-2">;
        {tabs.map((t) => (<button;
          <button;
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl'),
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code])),

  return (
    <div className="w-full">
=======
    <div className="w-full">;"
      <div className="flex gap-2 mb-2">
        {tabs && tabs.map((t) => (
"
    <div className="w-full">"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] || ''}</code>
      </pre>
    </div>
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] |''}</code>
      </pre>
    </div>
);
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
      </div>;
<pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm'>;
        <code>{sampleMap[active] || ''}</code>;
      </pre>;
    </div>;
  )}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">;
        <code>{sampleMap[active] |''}</code>;
      </pre>;
    </div>;
)}<button;
            key={t && t.key}
            className={`px-3 py-1 rounded border ${active === t && t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary'}`}
            onClick={() => setActive(t && t.key)}
          >;
            {t && t.label}
          </button>;
        ))}
      </div>;
      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">;
        <code>{sampleMap[active] || ''}</code>;
      </pre>;
    </div>;
  )}const tabs: Array<{key: Props['samples'][number]['language'];
  label: string;
}> = [;
  { key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' },];export default /**;
 * CodeSamples - Function description;
 */;
function CodeSamples() {const [active, set_active] = useState<(typeof tabs)[number]['key']>('curl')const sample_map  = Object.from_entries (samples.map (string => [s.language, s.code]))return (<div className='w - full'>;
      <div className='flex gap - 2 mb - 2'>;
        {tabs.map (t => (          <button;
const tabs: Array<{ key: Props['samples'][number]['language'], label: string }> = [;
  { key: 'curl', label: 'cURL' },{ key: 'javascript', label: 'JavaScript' },{ key: 'python', label: 'Python' }],export default /**;
 * CodeSamples - Function description;
 */;
function CodeSamples() {const [active, set_active] = useState < typeof tabs[number]['key']>('curl')const sample_map  = Object.from_entries (samples.map ((s) => [s.language, s.code]))return (<div className="w - full">;
      <div className="flex gap - 2 mb - 2">;
        {tabs.map ((t) => (<button;
            key={t.key}
            className={`px - 3 py - 1 rounded border ${active === t.key ? 'bg - high - contrast - tertiary border - high - contrast - accent' : 'bg - high - contrast - secondary border - high - contrast - secondary'}`}
            on_click={() => set_active (t.key)}
          >;
            {t.label}
          </button>))}
      </div>;
      <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm'>        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>)}      <pre className="p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm">;
        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);
    </div>)}
  )
}
=======
<<<<<<< HEAD

"
=======
key= {
  t.key 
}className= {
  `px-3 py-1 rounded border $ {
  active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent' : 'bg-high-contrast-secondary border-high-contrast-secondary' 
}` 
}onClick= {
  () => setActive (t.key) 
}> {
  t.label 
}</button>) ) 
}</div> </pre> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
