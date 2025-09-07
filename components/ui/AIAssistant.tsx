
<<<<<<< HEAD
=======

import React, { useCallback, useEffect, useMemo, useState } from 'react';

>>>>>>> origin/chore/fix-lint-and-merge
export type AIAssistantProps = any;
}: AIAssistantProps) {

  buttonLabel = \"Generate with AI\","
  title = \"AI Writing Assistant\",
  defaultPrompt,
  systemPrompt,
  onAccept}
  authorizationToken}
}: AIAssistantProps) {;

const [isOpen, setIsOpen] = useState(false);

const [prompt, setPrompt] = useState(defaultPrompt);
"
const [output, setOutput] = useState(\"\");

const [loading, setLoading] = useState(false);

const [isEditing, setIsEditing] = useState(false);

<<<<<<< HEAD
const [error, setError] = useState<string | null />(null);

  useEffect(() => {
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {;
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
  buttonLabel = Generate with AI"
  title = "AI Writing Assistant
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {


=======
const [error, setError] = useState<string | null>(null);
>>>>>>> origin/chore/fix-lint-and-merge

  useEffect(() => {
}
setPrompt(defaultPrompt);}
  }, [defaultPrompt]);

const callOperator = useCallback(async () => {
    setLoading(true);
    setError(null);
<<<<<<< HEAD
    try {

=======
    try {"
      const res = await fetch(\"/api/ai/operator\", {"
        method: \"POST\"
        headers: {
'Content-Type': 'application/json',
          ...(authorizationToken}
}
            ? { Authorization: `Bearer ${authorizationToken}`
}
>>>>>>> origin/chore/fix-lint-and-merge
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKE}
}`;
                }
<<<<<<< HEAD

import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = $2;
  title?: string,
  defaultPrompt: string,
  systemPrompt?: string,
  onAccept: (markdown: string) => void,
  authorizationToken?: string
},

export default function AIAssistant({
  buttonLabel = $2;
  title = $2;
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState($2);
  const [prompt, setPrompt] = useState($2);
  const [output, setOutput] = useState($2);
  const [loading, setLoading] = useState($2);
  const [isEditing, setIsEditing] = useState($2);
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    setPrompt(defaultPrompt)
  }, [defaultPrompt]),

  const callOperator = useCallback(async () => {
    setLoading($2);
    setError($2);
    try {
      const res = await fetch('/api/ai/operator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})},
        body: JSON.stringify({ prompt, system: systemPrompt})
      }),
      const data = await res.json($2);
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
    setIsOpen($2);
    setOutput($2);
    setIsEditing($2);
    setError(null)
  }, []),

  const onClose = useCallback(() => setIsOpen(false), []),

  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]),

  return (
    <>
      <button
        type="button"
=======
              : {})},body: JSON.stringify({ prompt, system: systemPrompt })})const data = await res.json()if (!res.ok) {throw new Error(data?.error || 'Failed to generate')}
      setOutput(String(data.text || ''))setIsEditing(false)} catch (e: any) {setError(e.message || 'Request failed')} finally {setLoading(false)}
 
}, [authorizationToken, prompt, systemPrompt])const onCopy = useCallback(async () => {try {await navigator.clipboard.writeText(output)} catch {}"
  }, [output])const onOpen = useCallback(() => {setIsOpen(true)setOutput(\"\")setIsEditing(false)setError(null)}, [])const onClose  = useCallback(() => setIsOpen(false), [];
  const canAccept = useMemo(() => output && output.trim().length > 0, [output];
  return (<>;
      <button;
type='button';
        onClick = {onOpen}

        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
 ;
  return (
    <    />;
      <button;"
type=\"button\"
>>>>>>> origin/chore/fix-lint-and-merge
        onClick={onOpen}
      {isOpen && (
}
<div className='fixed inset-0 z-50 flex items-center justify-center'    />}
          <div className='absolute inset-0 bg-black/50' onClick={onClose}    />
          <div className='relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark: border-gray-800 bg-white dark:bg-black shadow-xl'    />
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800'    />
              <h3 className='text-base font-semibold'    />{title}</h3>
              <button;
onClick={onClos}
}
                className='text-sm opacity-70 hover:opacity-100'    />

                Close;
              </button>;
            </div>;
            <div className='p-4 space-y-3'    />;
              <div    />;
                <label className='block text-xs font-medium mb-1'    />;
                  Operator prompt;
                </label>;
                <textarea;
                  value={prompt}
                  onChange={e =    /> setPrompt(e.target.value)}
                  rows={4}
                  className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm';
                />;
              </div>;
              <div className='flex items-center gap-2'    />;
                <button;
                  onClick={callOperator}
                  disabled={loading}
<<<<<<< HEAD
                  className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60';
                >;
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
=======
                  className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled: opacity-60'    />

                  {loading ? 'Generating…' : 'Generate}
}
                </button>;
                <button;
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md border px-3 py-1.5 text-sm'    />

                  {loading ? '…' : 'Regenerate'}
                </button>;
                <button;
                  onClick={() =    /> setIsEditing(v => !v)}
                  className='rounded-md border px-3 py-1.5 text-sm'>

                  {isEditing ? 'Preview' : 'Edit'}
                </button>;
                <button;
                  onClick={onCopy}
                  disabled={!output}
                  className='rounded-md border px-3 py-1.5 text-sm disabled:opacity-60'    />

                  Copy;
                </button>;
                <button;
                  onClick={() =    /> {onAccept(output)onClose()}}
>>>>>>> origin/chore/fix-lint-and-merge
                  disabled={!canAccept}

                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled: opacity-60'
                >
                  Accept;
                </button>
              </div>

<<<<<<< HEAD
                <label
                  className="block text-xs font-medium mb-1"
=======
{error && <div className='text-red-600 text-sm'    />{error}</div
}

              <div    />
                <label;"
className=\"block text-xs font-medium mb-1\"
>>>>>>> origin/chore/fix-lint-and-merge
                  Output (markdown);
                </label    />;
                {isEditing ? (;}
                  <textarea;}
value={output}


                    onChange={e =    /> setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm';
                  />;
                ) : (<pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'    />;
                    {output || 'No content yet. Click Generate.'}

                  </pre>

                )}
              </div>;
            </div>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD
    </>;
  )}
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>;
                    onChange={e => setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm';
                  />;
                ) : (<pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'>;
                    {output || 'No content yet. Click Generate.'}
                  </pre>;
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <div>
                <label className="block text-xs font-medium mb-1">Output (markdown)</label>
                {isEditing ? (
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                    rows={12}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                  />
                ) : (
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>;
  )}
  );
}
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
=======
>>>>>>> origin/chore/fix-lint-and-merge

    <   />

  );
}
<<<<<<< HEAD
    </>;
  )}
    </>
  )
}
=======

"
>>>>>>> origin/chore/fix-lint-and-merge
