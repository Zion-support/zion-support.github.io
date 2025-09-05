<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react',

export type AIAssistantProps = {
  buttonLabel?: string,
  title?: string,
  defaultPrompt: string,
  systemPrompt?: string,
  onAccept: (markdown: string) => void,
  authorizationToken?: string
},

export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false),
  const [prompt, setPrompt] = useState(defaultPrompt),
  const [output, setOutput] = useState(''),
  const [loading, setLoading] = useState(false),
  const [isEditing, setIsEditing] = useState(false),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    setPrompt(defaultPrompt)
  }, [defaultPrompt]),

  const callOperator = useCallback(async () => {
    setLoading(true),
    setError(null),
=======
import React, {_useCallback, _useEffect, _useMemo, _useState} from 'react';

export type AIAssistantProps = {_buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (_markdown: string) => void;
  authorizationToken?: string;};

export default function AIAssistant(_{_buttonLabel = 'Generate with AI', _title = 'AI Writing Assistant', _defaultPrompt, _systemPrompt, _onAccept, _authorizationToken}: AIAssistantProps) {_const [isOpen, _setIsOpen] = useState(false);
  const [prompt, _setPrompt] = useState(defaultPrompt);
  const [output, _setOutput] = useState('');
  const [loading, _setLoading] = useState(false);
  const [isEditing, _setIsEditing] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    setPrompt(defaultPrompt);}, [defaultPrompt]);

  const _callOperator = useCallback(_async () => {_setLoading(true);
    setError(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    try {
      const _res = await fetch('/api/ai/operator', _{
        method: 'POST', _headers: {
          'Content-Type': 'application/json', _...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? {_Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})},
<<<<<<< HEAD
        body: JSON.stringify({ prompt, system: systemPrompt })
      }),
      const data = await res.json(),
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to generate')
      }
      setOutput(String(data.text || '')),
      setIsEditing(false)
    } catch (e: any) {
      setError(e.message || 'Request failed')
    } finally {
      setLoading(false)
    }
  }, [authorizationToken, prompt, systemPrompt]),

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output)
    } catch {}
  }, [output]),

  const onOpen = useCallback(() => {
    setIsOpen(true),
    setOutput(''),
    setIsEditing(false),
    setError(null)
  }, []),

  const onClose = useCallback(() => setIsOpen(false), []),

  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]),
=======
        body: JSON.stringify({_prompt, _system: systemPrompt})
      });
      const _data = await res.json();
      if (!res.ok) {_throw new Error(data?.error || 'Failed to generate');}
      setOutput(String(data.text || ''));
      setIsEditing(false);
    } catch (e: unknown) {_setError(e.message || 'Request failed');} finally {_setLoading(false);}
  }, [authorizationToken, prompt, systemPrompt]);

  const _onCopy = useCallback(_async () => {_try {
      await navigator.clipboard.writeText(output);} catch {}
  }, [output]);

  const _onOpen = useCallback__(() => {_setIsOpen(true);
    setOutput('');
    setIsEditing(false);
    setError(null);}, []);

  const _onClose = useCallback__(() => setIsOpen(false), []);

  const _canAccept = useMemo__(() => (output && output.trim().length > 0), [output]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <button
<<<<<<< HEAD
        type=&quot;button&quot;
        onClick={onOpen}
        className=&quot;inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800&quot;
=======
        type="button"
        onClick={_onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        {_buttonLabel}
      </button>

<<<<<<< HEAD
      {isOpen && (
        <div className=&quot;fixed inset-0 z-50 flex items-center justify-center&quot;>
          <div className=&quot;absolute inset-0 bg-black/50&quot; onClick={onClose} />
          <div className=&quot;relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl&quot;>
            <div className=&quot;flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800&quot;>
              <h3 className=&quot;text-base font-semibold&quot;>{title}</h3>
              <button onClick={onClose} className=&quot;text-sm opacity-70 hover:opacity-100&quot;>Close</button>
=======
      {_isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{_title}</h3>
              <button onClick={_onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>

            <div className=&quot;p-4 space-y-3&quot;>
              <div>
                <label className=&quot;block text-xs font-medium mb-1&quot;>Operator prompt</label>
                <textarea
<<<<<<< HEAD
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm&quot;
                />
              </div>

              <div className=&quot;flex items-center gap-2&quot;>
                <button onClick={callOperator} disabled={loading} className=&quot;rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60&quot;>
                  {loading ? 'Generating…' : 'Generate'}
                </button>
                <button onClick={callOperator} disabled={loading} className=&quot;rounded-md border px-3 py-1.5 text-sm&quot;>
                  {loading ? '…' : 'Regenerate'}
                </button>
<<<<<<< HEAD
                <button onClick={() => setIsEditing((v) => !v)} className="rounded-md border px-3 py-1.5 text-sm">{isEditing ? 'Preview' : 'Edit'}</button>
                <button onClick={onCopy} disabled={!output} className="rounded-md border px-3 py-1.5 text-sm disabled: opacity-60">Copy</button>
=======
                <button onClick={() => setIsEditing((v) => !v)} className=&quot;rounded-md border px-3 py-1.5 text-sm&quot;>{isEditing ? 'Preview' : 'Edit'}</button>
                <button onClick={onCopy} disabled={!output} className=&quot;rounded-md border px-3 py-1.5 text-sm disabled:opacity-60&quot;>Copy</button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <button
                  onClick={() => { onAccept(output), onClose() }}
                  disabled={!canAccept}
                  className=&quot;ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60&quot;
=======
                  value={_prompt}
                  onChange={_(e) => setPrompt(e.target.value)}
                  rows={_4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <button onClick={_callOperator} disabled={_loading} className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60">
                  {_loading ? 'Generating…' : 'Generate'}
                </button>
                <button onClick={_callOperator} disabled={_loading} className="rounded-md border px-3 py-1.5 text-sm">
                  {_loading ? '…' : 'Regenerate'}
                </button>
                <button onClick={_() => setIsEditing(_(v) => !v)} className="rounded-md border px-3 py-1.5 text-sm">{_isEditing ? 'Preview' : 'Edit'}</button>
                <button onClick={_onCopy} disabled={_!output} className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-60">Copy</button>
                <button
                  onClick={_() => { onAccept(output); onClose();}}
                  disabled={_!canAccept}
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Accept
                </button>
              </div>

<<<<<<< HEAD
              {error && (
                <div className=&quot;text-red-600 text-sm&quot;>{error}</div>
              )}

              <div>
                <label className=&quot;block text-xs font-medium mb-1&quot;>Output (markdown)</label>
                {isEditing ? (
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                    rows={12}
                    className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm&quot;
                  />
                ) : (
                  <pre className=&quot;w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap&quot;>{output || 'No content yet. Click Generate.'}</pre>
=======
              {_error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <div>
                <label className="block text-xs font-medium mb-1">Output (markdown)</label>
                {_isEditing ? (_<textarea
                    value={output}
                    onChange={_(e) => setOutput(e.target.value)}
                    rows={_12}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                  />
                ) : (
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{_output || 'No content yet. Click Generate.'}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}