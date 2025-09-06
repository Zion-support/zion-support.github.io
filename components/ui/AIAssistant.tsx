<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 try {
  const res = await fetch ('/api/ai/operator', {
  method: 'POST', headers: {
  'Content-Type': 'application/json', ... (authorizationToken ? {
  Authorization: `Bearer $ {
  authorizationToken 
}` 
}: process.env.NEXT PUBLIC OPERATOR TOKEN ? {
  Authorization: `Bearer $ {
  process.env.NEXT PUBLIC OPERATOR TOKEN 
}` 
}: {
  
}) 
=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type AIAssistantProps = {
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string,
  systemPrompt?: string;
  onAccept: (markdown: string) => void,
  authorizationToken?: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
<<<<<<< HEAD
  authorizationToken,
}: AIAssistantProps) {  const [isOpen, setIsOpen] = useState(false);
=======
  authorizationToken
}: AIAssistantProps) {
=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type AIAssistantProps = {
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string,
  systemPrompt?: string;
  onAccept: (markdown: string) => void,
  authorizationToken?: string
};

export default function AIAssistant({
  buttonLabel = 'Generate with AI';
  title = 'AI Writing Assistant';
  defaultPrompt;
  systemPrompt;
  onAccept;
  authorizationToken}: AIAssistantProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
<<<<<<< HEAD
    setPrompt(defaultPrompt);  }, [defaultPrompt]);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    setPrompt(defaultPrompt);
=======
    setPrompt(defaultPrompt)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setPrompt(defaultPrompt)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [defaultPrompt]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const callOperator = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/ai/operator', {
        method: 'POST',
        headers: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          'Content-Type': 'application/json',
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
<<<<<<< HEAD
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`,
                }
              : {}),
        },
        body: JSON.stringify({ prompt, system: systemPrompt }),
=======
            ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})
        },
        body: JSON.stringify({ prompt, system: systemPrompt })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to generate');
      }
      setOutput(String(data.text || ''));
      setIsEditing(false);
    } catch (e: any) {
      setError(e.message || 'Request failed');
    } finally {
<<<<<<< HEAD
      setLoading(false);    }
=======
      setLoading(false);
=======
          'Content-Type': 'application/json';
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})};
        body: JSON.stringify({ prompt, system: systemPrompt })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to generate')
      }
      setOutput(String(data.text || ''));
      setIsEditing(false)
    } catch (e: any) {
      setError(e.message || 'Request failed')
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [authorizationToken, prompt, systemPrompt]);

  const onCopy = useCallback(async () => {
    try {
<<<<<<< HEAD
      await navigator.clipboard.writeText(output);    } catch {}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      await navigator.clipboard.writeText(output);
=======
      await navigator.clipboard.writeText(output)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      await navigator.clipboard.writeText(output)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [output]);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    setOutput('');
    setIsEditing(false);
<<<<<<< HEAD
    setError(null);  }, []);

  const onClose = useCallback(() => setIsOpen(false), []);

  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);
  return (
    <>
      <button
        type='button'
        onClick={onOpen}
        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'      >
=======
<<<<<<< HEAD
<<<<<<< HEAD
    setError(null);
=======
    setError(null)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setError(null)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  const onClose = useCallback(() => setIsOpen(false), []);

<<<<<<< HEAD
<<<<<<< HEAD
  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);
=======
  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  return (
    <>
      <button
<<<<<<< HEAD
<<<<<<< HEAD
        type='button'
        onClick={onOpen}
        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
=======
        type="button"
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        type="button"
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {buttonLabel}
      </button>

      {isOpen && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black/50' onClick={onClose} />
          <div className='relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl'>
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800'>
              <h3 className='text-base font-semibold'>{title}</h3>
              <button
                onClick={onClose}
                className='text-sm opacity-70 hover:opacity-100'
              >
                Close
              </button>
<<<<<<< HEAD
=======
=======
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
              <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>

            <div className='p-4 space-y-3'>
              <div>
                <label className='block text-xs font-medium mb-1'>
                  Operator prompt
                </label>
                <textarea
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  rows={4}
                  className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm'
                />
              </div>

              <div className='flex items-center gap-2'>
                <button
<<<<<<< HEAD
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'
=======
                  onClick={() => { onAccept(output), onClose() }}
                  disabled={!canAccept}
<<<<<<< HEAD
                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'
=======
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
              <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1" htmlFor="input-Operator prompt">Operator prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <button onClick={callOperator} disabled={loading} className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60">
                  {loading ? 'Generating…' : 'Generate'}
                </button>
                <button onClick={callOperator} disabled={loading} className="rounded-md border px-3 py-1.5 text-sm">
                  {loading ? '…' : 'Regenerate'}
                </button>
                <button onClick={() => setIsEditing((v) => !v)} className="rounded-md border px-3 py-1.5 text-sm">{isEditing ? 'Preview' : 'Edit'}</button>
                <button onClick={onCopy} disabled={!output} className="rounded-md border px-3 py-1.5 text-sm disabled: opacity-60">Copy</button>
                <button
                  onClick={() => { onAccept(output), onClose() }}
                  disabled={!canAccept}
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  {loading ? 'Generating…' : 'Generate'}
                </button>
                <button
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md border px-3 py-1.5 text-sm'
                >
                  {loading ? '…' : 'Regenerate'}
                </button>
                <button
                  onClick={() => setIsEditing(v => !v)}
                  className='rounded-md border px-3 py-1.5 text-sm'
                >
                  {isEditing ? 'Preview' : 'Edit'}
                </button>
                <button
                  onClick={onCopy}
                  disabled={!output}
                  className='rounded-md border px-3 py-1.5 text-sm disabled:opacity-60'
                >
                  Copy
                </button>
                <button
                  onClick={() => {
                    onAccept(output);
                    onClose();
                  }}
                  disabled={!canAccept}
                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'                >
                  Accept
                </button>
              </div>

<<<<<<< HEAD
              {error && <div className='text-red-600 text-sm'>{error}</div>}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              {error && <div className='text-red-600 text-sm'>{error}</div>}
=======
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

              <div>
                <label className='block text-xs font-medium mb-1'>
                  Output (markdown)
                </label>
                {isEditing ? (
                  <textarea
                    value={output}
                    onChange={e => setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm'
                  />
                ) : (
<<<<<<< HEAD
                  <pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'>
                    {output || 'No content yet. Click Generate.'}
                  </pre>                )}
=======
<<<<<<< HEAD
                  <pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'>
                    {output || 'No content yet. Click Generate.'}
                  </pre>
=======
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <div>
                <label className="block text-xs font-medium mb-1" htmlFor="input-Output (markdown)">Output (markdown)</label>
                {isEditing ? (
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                    rows={12}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                  />
                ) : (
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
