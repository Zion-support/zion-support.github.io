


import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {

import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useCallback, useEffect, useMemo, useState } from "react";

export type AIAssistantProps = {;


  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;

};




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

  buttonLabel = "Generate with AI",
  title = "AI Writing Assistant",
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
}: AIAssistantProps) {;

};
export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
authorizationToken
}: AIAssistantProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);


    } catch {}
}, [output]);
  const onOpen = useCallback(() => {;
  const onOpen = useCallback(() => {;



  const onOpen = useCallback(() => {
    setIsOpen(true);
    setOutput("");
    setIsEditing(false);


  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);



  return (
    <>
      <button
        type="button"
        onClick={onOpen}


      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
      {isOpen && (;
        <div className="fixed inset-0 z-50 flex items-center justify-center">;
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />;
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">;
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">;
              <h3 className="text-base font-semibold">{title}</h3>;
              <button
                onClick={onClose}
                className="text-sm opacity-70 hover:opacity-100">;
                Close;
              </button>{" "}

            </div>;

            <div className="p-4 space-y-3">;
              <div>;

                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="input-Operator prompt">;
                  Operator prompt;
                </label>;
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e && e.target.value)}
                  rows={4}

                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                />;
              </div>;
              <div className="flex items-center gap-2">;

                <button
                  onClick={callOperator}
                  disabled={loading}
                  className="rounded-md bg-blue-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60">;
                  {loading ? "Generating…" : "Generate"}
                </button>;
                <button
                  onClick={callOperator}
                  disabled={loading}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm">;
                  {loading ? "…" : "Regenerate"}
                </button>;
                <button
                  onClick={() => setIsEditing((v) => !v)}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm";
                >;
                  {isEditing ? "Preview" : "Edit"}
                </button>;
                <button
                  onClick={onCopy}
                  disabled={!output}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm disabled: opacity-60">;
                  Copy;
                </button>;
                <button
                  onClick={() => {;
                    (onAccept(output), onClose());
                  }}
                  disabled={!canAccept}

                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60";
;
  const on_open = useCallback (() => {
    setIsOpen (true);
    set_output ("");
    setIsEditing (false);
    set_error (null);
  }, []);
;
  const on_close = useCallback (() => setIsOpen (false), []);
;
  const can_accept = useMemo (() => output && output.trim ().length > 0, [output]);
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
                  htmlFor="input-Output (markdown)">;
                  Output (markdown);
                </label>;
                {isEditing ? (;
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e && e.target.value)}
                    rows={12}

                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                  />;
                ) : (;
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">;
                    {output || "No content yet. Click Generate."}
                  </pre>;

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
  );



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

}

  );
}
}
