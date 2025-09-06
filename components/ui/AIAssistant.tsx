
};

export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken
}: AIAssistantProps) {
=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = {
  buttonLabel?: string,
  title?: string;
  defaultPrompt: string,
  systemPrompt?: string;
  onAccept: (markdown: string) => void,
  authorizationToken?: string
},

export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt;
  onAccept;
  authorizationToken}: AIAssistantProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [isOpen, setIsOpen] = useState(false),
  const [prompt, setPrompt] = useState(defaultPrompt),
  const [output, setOutput] = useState(''),
  const [loading, setLoading] = useState(false),
  const [isEditing, setIsEditing] = useState(false),
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

=======
    setPrompt(defaultPrompt)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [defaultPrompt]);

  const callOperator = useCallback(async () => {
    setLoading(true),
    setError(null),
    try {
      const res = await fetch('/api/ai/operator', {
        method: 'POST',
        headers: {

    }
  }, [authorizationToken, prompt, systemPrompt]),

  const onCopy = useCallback(async () => {
    try {

=======
      await navigator.clipboard.writeText(output)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
  }, [output]),

  const onOpen = useCallback(() => {
    setIsOpen(true),
    setOutput(''),
    setIsEditing(false),

=======
    setError(null)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []),

  const onClose = useCallback(() => setIsOpen(false), []),


=======
  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  return (
    <>
      <button

=======
        type="button"
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      >
        {buttonLabel}
      </button>

      {isOpen && (

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

=======
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled: opacity-60"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Accept
                </button>
              </div>



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

=======
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
