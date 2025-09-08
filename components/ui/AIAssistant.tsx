


<<<<<<< HEAD


=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = $2;
  title?: string,
  defaultPrompt: string,
  systemPrompt?: string,
  onAccept: (markdown: string) => void,
  authorizationToken?: string
},

import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type AIAssistantProps = any;
}: AIAssistantProps) {

  buttonLabel = \"Generate with AI\","
  title = \"AI Writing Assistant\",
  defaultPrompt,
  systemPrompt,

export type AIAssistantProps = {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
}
export default function AIAssistant({
<<<<<<< HEAD

  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  buttonLabel = Generate with AI"
  title = "AI Writing Assistant
=======
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {

<<<<<<< HEAD





    try {"
      const res = await fetch(\"/api/ai/operator\", {"
        method: \"POST\"
        headers: {
'Content-Type': 'application/json',
          ...(authorizationToken}
}
            ? { Authorization: `Bearer ${authorizationToken}`
}

            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKE}
}`;
                }


=======
  }


const [error, setError] = useState<string | null>(null);

  useEffect(() => {
}
setPrompt(defaultPrompt);}
  }, [defaultPrompt]);

const callOperator = useCallback(async () => {
    setLoading(true);
    setError(null);

  buttonLabel = "Generate with AI","
  title = "AI Writing Assistant","
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

{error && <div className='text-red-600 text-sm'>{error}</div,'
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  buttonLabel = "Generate with AI",
  title = "AI Writing Assistant",
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
}: AIAssistantProps) {;
<<<<<<< HEAD




  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);


            : {})
        },
        body: JSON.stringify ({ prompt, system: system_prompt }),
      });
      const data = await res.json ();
      // Check condition
if ( {) {
  $2
}
        throw new Error (data?.error || "Failed to generate");
      }
      set_output (String (data.text || ""));
      setIsEditing (false);
    } catch (e: any) {
      set_error (e.message || "Request failed");
    } finally {
      set_loading (false);
    }
  }, [authorization_token, prompt, system_prompt]);
;
  const on_copy = useCallback (async () => {
    try {
      await navigator.clipboard.write_text (output);
    } catch {}
  }, [output]);
  useEffect(() => {;
    setPrompt(defaultPrompt);
  }, [defaultPrompt]);
  const callOperator = useCallback(async () => {;
    setLoading(true);
    setError(null);
    try {;
      const res = await fetch("/api/ai/operator", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json",;
          ...(authorizationToken;
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process && process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {;
                  Authorization: `Bearer ${process && process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`,;
                }
              : {}),;
        },;
        body: JSON && JSON.stringify({ prompt, system: systemPrompt }),;
      });
      const data = await res && res.json();
      if (!res && res.ok) {;
        throw new Error(data?.error || "Failed to generate");
      }
      setOutput(String(data && data.text || ""));
      setIsEditing(false);
    } catch (e: any) {;
      setError(e && e.message || "Request failed");
    } finally {;
      setLoading(false);
    }
  }, [authorizationToken, prompt, systemPrompt]);
  const onCopy = useCallback(async () => {;
    try {;
      await navigator && navigator.clipboard.writeText(output);
      setLoading(false)
    }
  }, [authorizationToken, prompt, systemPrompt]);
    try {
      const _res = await fetch('/api/ai/operator', _{
        method: 'POST', _headers: {
          'Content-Type': 'application/json', _...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? {_Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})},
        body: JSON.stringify({ prompt, system: systemPrompt })
      }),
      const data = await res.json()

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



=======
};
export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
authorizationToken
}: AIAssistantProps) {

              <div>
                <label,
className="block text-xs font-medium mb-1""
                  Output (markdown);
                </label>;
                {isEditing ? (;
                  <textarea
}
value={output}



}


>>>>>>> origin/cursor/delete-old-data-records-6bba

  const onOpen = useCallback(() => {
    setIsOpen($2);
    setOutput($2);
    setIsEditing($2);
    setError(null)
  }, []),

  const onClose = useCallback(() => setIsOpen(false), []),

  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]),

<<<<<<< HEAD



  return (
    <>
      <button
        type="button"


      <button;
type='button';
        onClick = {onOpen}
=======

                  Operator prompt;
                </label>;
                <textarea;
              <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
            </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
 ;
  return (
    <    />;
      <button;"
type=\"button\"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
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

                  on_click={() => {
                    (on_accept (output), on_close ());
                  }}
                  disabled={!can_accept}
                  className="ml - auto rounded - md bg - green - 600 text - white px - 3 py - 1.5 text - sm disabled:opacity - 60";
                >;
                  Accept;
                </button>;
              </div>;
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}


              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div>;
                <label
                  className="block text-xs font-medium mb-1"

{error && <div className='text-red-600 text-sm'>{error}</div,'
}

              <div>
                <label,
className="block text-xs font-medium mb-1""
                  Output (markdown);
                </label>;
                {isEditing ? (;
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e && e.target.value)}
                    rows={12}

}
value={output}

                    onChange={e = /> setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 "dark":border-gray-700 bg-white "dark":bg-gray-900 p-2 text-sm';'
                  />;
                ) : (<pre className='w-full rounded-md border border-gray-200 "dark":border-gray-800 bg-gray-50 "dark":bg-gray-900 p-3 text-sm whitespace-pre-wrap'>;'
                    {output || 'No content yet. Click Generate.'}'

                  </pre>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD

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



  );
}
    </>;
  )}
    </>
  )
}

);
}
              {error && <div className="text - red - 600 text - sm">{error}</div>}
              <div>;
                <label;
                  className="block text - xs font - medium mb - 1";
                  html_for="input - Output (markdown)";
                >;
                  Output (markdown);
                </label>;
                {is_editing ? (
                  <textarea;
                    value={output}
                    on_change={(e) => set_output (e.target.value)}
                    rows={12}
                    className="w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - gray - 900 p - 2 text - sm";
                  />) : (
                  <pre className="w - full rounded - md border border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 900 p - 3 text - sm whitespace - pre - wrap">;
                    {output || "No content yet. Click Generate."}
                  </pre>)}
              </div>;
            </div>;
          </div>;
        </div>)}
    </>);
}

}

  );
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
