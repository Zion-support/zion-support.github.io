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
    try {
      const _res = await fetch('/api/ai/operator', _{
        method: 'POST', _headers: {
          'Content-Type': 'application/json', _...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? {_Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})},
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

  return (_<>
      <button
        type="button"
        onClick={_onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {_buttonLabel}
      </button>

      {_isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{_title}</h3>
              <button onClick={_onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Operator prompt</label>
                <textarea
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
                >
                  Accept
                </button>
              </div>

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
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}