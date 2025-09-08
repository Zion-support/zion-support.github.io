
export default function CoachWidget() {;
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {

      const resp = await fetch('/api/learn/coach', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }


export default function CoachWidget() {
  const [input, setInput] = useState('');


const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);





  return (
<div className='border rounded p-3'>
      <div className='font-medium mb-2'>ZionGPT Coach</div>
      <div className='flex gap-2'>
        <input
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
          placeholder='Ask for help...'
origin/cursor/automate-test-improve-and-merge-code-2533




