<<<<<<< HEAD
<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
<<<<<<< HEAD
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}: AIAssistantProps) {

  buttonLabel = "Generate with AI",
  title = "AI Writing Assistant",
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
}: AIAssistantProps) {;
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
'Content-Type': 'application/json',
          ...(authorizationToken
=======

;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  buttonLabel = "Generate with AI";
  title = "AI Writing Assistant";
  defaultPrompt;
  systemPrompt;
  onAccept;
  authorizationToken;
import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = any;}: AIAssistantProps) {buttonLabel = "Generate with AI",title = "AI Writing Assistant",defaultPrompt,systemPrompt,onAccept,authorizationToken;
  authorizationToken;
}: AIAssistantProps) {const [isOpen, setIsOpen] = useState(false)const [prompt, setPrompt] = useState(defaultPrompt)const [output, setOutput] = useState("")const [loading, setLoading] = useState(false)const [isEditing, setIsEditing] = useState(false)const [error, setError] = useState<string | null>(null)useEffect(() => {setPrompt(defaultPrompt)}, [defaultPrompt])const callOperator = useCallback(async () => {setLoading(true)setError(null)try {const res = await fetch("/api/ai/operator", {method: "POST";
        headers: {'Content-Type': 'application/json',...(authorizationToken;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`;
                }
              : {})},body: JSON.stringify({ prompt, system: systemPrompt })})const data = await res.json()if (!res.ok) {throw new Error(data?.error || 'Failed to generate')}
      setOutput(String(data.text || ''))setIsEditing(false)} catch (e: any) {setError(e.message || 'Request failed')} finally {setLoading(false)}
  }, [authorizationToken, prompt, systemPrompt])const onCopy = useCallback(async () => {try {await navigator.clipboard.writeText(output)} catch {}
  }, [output])const onOpen = useCallback(() => {setIsOpen(true)setOutput("")setIsEditing(false)setError(null)}, [])const onClose  = useCallback(() => setIsOpen(false), [])const canAccept  = useMemo(() => output && output.trim().length > 0, [output])return (<>;
      <button;
type='button';
        onClick={onOpen}
<<<<<<< HEAD
<<<<<<< HEAD
        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  return (
    <>;
      <button
        type="button"
        onClick={onOpen}
      {isOpen && (
<<<<<<< HEAD
<div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black/50' onClick={onClose} />
          <div className='relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl'>
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800'>
              <h3 className='text-base font-semibold'>{title}</h3>
              <button
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        className='inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800';
  return (<>;
      <button;
        type="button";
        onClick={onOpen}
      {isOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center">;
<<<<<<< HEAD
=======
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
      {isOpen && (;
        <div className="fixed inset-0 z-50 flex items-center justify-center">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />;
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">;
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">;
              <h3 className="text-base font-semibold">{title}</h3>;
      {isOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center">;
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />;
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">;
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">;
              <h3 className="text-base font-semibold">{title}</h3>;
              <button;
                onClick={onClose}
                className="text-sm opacity-70 hover:opacity-100">;
                Close;
              </button>{" "}
                  Operator prompt;
                </label>;
                <textarea;
                  value={prompt}
                  onChange={(e) => setPrompt(e && e.target.value)}
                  rows={4}
                <button;
                  onClick={callOperator}
                  disabled={loading}
                  className="rounded-md bg-blue-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60">;
                  {loading ? "Generating…" : "Generate"}
                </button>;
                <button;
                  onClick={callOperator}
                  disabled={loading}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm">;
                  {loading ? "…" : "Regenerate"}
                </button>;
                <button;
                  onClick={() => setIsEditing((v) => !v)}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm";
                >;
                  {isEditing ? "Preview" : "Edit"}
                </button>;
                <button;
                  onClick={onCopy}
                  disabled={!output}
                  className="rounded-md border px-3 py-1 && 1.5 text-sm disabled: opacity-60">;
                  Copy;
                </button>;
                <button;
                  onClick={() => {(onAccept(output), onClose())}}
                  disabled={!canAccept}
                >;
                  Accept;
                </button>;
              </div>;
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
<div className='fixed inset-0 z-50 flex items-center justify-center'>;
          <div className='absolute inset-0 bg-black/50' onClick={onClose} />;
          <div className='relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl'>;
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800'>;
              <h3 className='text-base font-semibold'>{title}</h3>;
              <button;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                onClick={onClose}
                className='text-sm opacity-70 hover:opacity-100';
              >;
                Close;
              </button>;
            </div>;
            <div className='p-4 space-y-3'>;
              <div>;
                <label className='block text-xs font-medium mb-1'>;
                  Operator prompt;
                </label>;
                <textarea;
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  rows={4}
                  className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm';
                />;
              </div>;
              <div className='flex items-center gap-2'>;
                <button;
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm disabled:opacity-60';
                >;
                  {loading ? 'Generating…' : 'Generate'}
                </button>;
                <button;
                  onClick={callOperator}
                  disabled={loading}
                  className='rounded-md border px-3 py-1.5 text-sm';
                >;
                  {loading ? '…' : 'Regenerate'}
                </button>;
                <button;
                  onClick={() => setIsEditing(v => !v)}
                  className='rounded-md border px-3 py-1.5 text-sm';
                >;
                  {isEditing ? 'Preview' : 'Edit'}
                </button>;
                <button;
                  onClick={onCopy}
                  disabled={!output}
                  className='rounded-md border px-3 py-1.5 text-sm disabled:opacity-60';
                >;
                  Copy;
                </button>;
                <button;
                  onClick={() => {onAccept(output)onClose()}}
                  disabled={!canAccept}
<<<<<<< HEAD
                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60'
                >
                  Accept
                </button>
              </div>

{error && <div className='text-red-600 text-sm'>{error}</div>}

              <div>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
                <label
                  className="block text-xs font-medium mb-1"
                  Output (markdown);
                </label>;
                {isEditing ? (;
                  <textarea
                    value={output}
<<<<<<< HEAD
=======
                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60';
                >;
                  Accept;
                </button>;
              </div>;
{error && <div className='text-red-600 text-sm'>{error}</div>}<div>;
                <label;
                  className="block text-xs font-medium mb-1";
                  Output (markdown)</label>;
                {isEditing ? (<textarea;
                    value={output}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
                    onChange={(e) => setOutput(e && e.target.value)}
                    rows={12}
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      )}
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  )}
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">{output || 'No content yet. Click Generate.'}</pre>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                    onChange={e => setOutput(e.target.value)}
                    rows={12}
                    className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm';
                  />;
                ) : (<pre className='w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap'>;
                    {output || 'No content yet. Click Generate.'}
<<<<<<< HEAD
                  </pre>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  </pre>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </>;
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
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
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
    </>;
  )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
