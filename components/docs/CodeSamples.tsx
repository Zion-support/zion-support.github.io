<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
  }
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
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
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl');
  const sampleMap = Object.fromEntries(samples.map((s) => [s.language, s.code]));

  { key: 'python', label: 'Python' }]
export default function CodeSamples({ samples }: Props) {
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl')
  const sampleMap = null
  const [active, setActive] = useState<typeof tabs[number]['key']>('curl')
  const sampleMap = Object && Object.fromEntries(samples && samples.map((s) => [s && s.language, s && s.code]))
const sampleMap = Object.fromEntries(samples.map(s => [s.language, s.code]))
  return (
    <div className="w-full">;"
      <div className="flex gap-2 mb-2">
        {tabs && tabs.map((t) => (
"
    <div className="w-full">"
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

      </pre>
    </div>

        <code>{sampleMap[active] |''}</code>
      </pre>
    </div>
);
}
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
