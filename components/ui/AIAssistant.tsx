<<<<<<< HEAD
<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = any;
=======
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
}
export default function AIAssistant({
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
=======
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
};
}

export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setPrompt(defaultPrompt);
  }, [defaultPrompt]);
  const callOperator = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai/operator", {
        method: "POST"
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json"
=======
          'Content-Type': 'application/json',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`
                }
<<<<<<< HEAD
              : {})
        }
        body: JSON.stringify({ prompt, system: systemPrompt })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error |"Failed to generate");
      }
      setOutput(String(data.text |""));
      setIsEditing(false);
    } catch (e: any) {
      setError(e.message |"Request failed");
=======
              : {}),
        },
        body: JSON.stringify({ prompt, system: systemPrompt }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to generate');
      }
      setOutput(String(data.text || ''));
      setIsEditing(false);
    } catch (e: any) {
      setError(e.message || 'Request failed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    } finally {
      setLoading(false);
    }
  }, [authorizationToken, prompt, systemPrompt]);
  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output);
    } catch {}
  }, [output]);
  const onOpen = useCallback(() => {
    setIsOpen(true);
    setOutput("");
    setIsEditing(false);
    setError(null);
  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);
<<<<<<< HEAD
  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
=======

  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);

  return (
    <>
      <button
        type='button'
        onClick={onOpen}
        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      >
        {buttonLabel}
      </button>
      {isOpen && (
<<<<<<< HEAD
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="text-sm opacity-70 hover:opacity-100"
              >
                Close
              </button>{" "}
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="input-Operator prompt"
                >
=======
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
            </div>

            <div className='p-4 space-y-3'>
              <div>
                <label className='block text-xs font-medium mb-1'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  Operator prompt
                </label>
                <textarea
                  value={prompt}
<<<<<<< HEAD
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={callOperator}
                  disabled={loading}
                  className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
                >
                  {loading ? "Generating…" : "Generate"}
=======
                  onChange={e => setPrompt(e.target.value)}
                  rows={4}
                  className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm'
                />
              </div>

              <div className='flex items-center gap-2'>
                <button
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'
                >
                  {loading ? 'Generating…' : 'Generate'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </button>
                <button
                  onClick={callOperator}
                  disabled={loading}
<<<<<<< HEAD
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {loading ? "…" : "Regenerate"}
                </button>
                <button
                  onClick={() => setIsEditing((v) => !v)}
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {isEditing ? "Preview" : "Edit"}
=======
                  className='rounded-md border px-3 py-1.5 text-sm'
                >
                  {loading ? '…' : 'Regenerate'}
                </button>
                <button
                  onClick={() => setIsEditing(v => !v)}
                  className='rounded-md border px-3 py-1.5 text-sm'
                >
                  {isEditing ? 'Preview' : 'Edit'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </button>
                <button
                  onClick={onCopy}
                  disabled={!output}
<<<<<<< HEAD
                  className="rounded-md border px-3 py-1.5 text-sm disabled: opacity-60"
=======
                  className='rounded-md border px-3 py-1.5 text-sm disabled:opacity-60'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                >
                  Copy
                </button>
                <button
                  onClick={() => {
<<<<<<< HEAD
                    (onAccept(output), onClose());
                  }}
                  disabled={!canAccept}
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
=======
                    onAccept(output);
                    onClose();
                  }}
                  disabled={!canAccept}
                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                >
                  Accept
                </button>
              </div>
<<<<<<< HEAD
              {error && <div className="text-red-600 text-sm">{error}</div>}
=======

              {error && <div className='text-red-600 text-sm'>{error}</div>}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="input-Output (markdown)"
                >
                  Output (markdown)
                </label>
                {isEditing ? (
                  <textarea
                    value={output}
<<<<<<< HEAD
                    onChange={(e) => setOutput(e.target.value)}
                    rows={12}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                  />
                ) : (
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">
                    {output |"No content yet. Click Generate."}
=======
                    onChange={e => setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm'
                  />
                ) : (
                  <pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'>
                    {output || 'No content yet. Click Generate.'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </pre>
                )}
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
