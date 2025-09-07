
<<<<<<< HEAD

import React, { useCallback, useEffect, useMemo, useState } from 'react';
export type AIAssistantProps = $2;
  title?: string,
  defaultPrompt: string,
  systemPrompt?: string,
  onAccept: (markdown: string) => void,
  authorizationToken?: string
},
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
=======

import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

<<<<<<< HEAD
import React, { useCallback, useEffect, useMemo, useState } from 'react';

>>>>>>> origin/chore/fix-lint-and-merge
export type AIAssistantProps = any;
}: AIAssistantProps) {
>>>>>>> merged-prs-20250907-203621

  buttonLabel = \"Generate with AI\","
  title = \"AI Writing Assistant\",
  defaultPrompt,
  systemPrompt,
<<<<<<< HEAD
  onAccept,
  authorizationToken}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState($2);
  const [prompt, setPrompt] = useState($2);
  const [output, setOutput] = useState($2);
  const [loading, setLoading] = useState($2);
  const [isEditing, setIsEditing] = useState($2);
  const [error, setError] = useState<string | null>(null),
=======
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
>>>>>>> merged-prs-20250907-203621

  useEffect(() => {
import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
}
export default function AIAssistant({
<<<<<<< HEAD
=======
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  buttonLabel = Generate with AI"
  title = "AI Writing Assistant
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {


<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {
<<<<<<< HEAD
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
    setLoading($2);
    setError($2);
    try {
      const res = await fetch('/api/ai/operator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
const [error, setError] = useState<string | null>(null);
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  buttonLabel = "Generate with AI",
  title = "AI Writing Assistant",
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
}: AIAssistantProps) {;
<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  const onOpen = useCallback(() => {;



  const onOpen = useCallback(() => {
    setIsOpen(true);
    setOutput("");
    setIsEditing(false);


  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);



  useEffect(() => {
setPrompt(defaultPrompt)
  }, [defaultPrompt]);
  const callOperator = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai/operator", {
        method: "POST"
        headers: {
import React, { useCallback, useEffect, useMemo, useState } from './react';
export type AIAssistantProps = {
  button_label?: string;
  title?: string;
  default_prompt: string;
  system_prompt?: string;
  on_accept: (markdown: string) => void;
  authorization_token?: string;
}
;
export default /**
 * AIAssistant - Function description
 */
function AIAssistant() {
  const [is_open, setIsOpen] = useState (false);
  const [prompt, set_prompt] = useState (default_prompt);
  const [output, set_output] = useState ("");
  const [loading, set_loading] = useState (false);
  const [is_editing, setIsEditing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    set_prompt (default_prompt);
  }, [default_prompt]);
;
  const call_operator = useCallback (async () => {
    set_loading (true);
    set_error (null);
    try {
      const res = await fetch ("/api / ai / operator", {
        method: "POST",
        headers: {
          "Content - Type": "application / json",
          ...(authorization_token;
            ? { Authorization: `Bearer ${authorization_token}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`
                }
              : {})
        }
'Content-Type': 'application/json',
>>>>>>> merged-prs-20250907-203621
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
<<<<<<< HEAD
            : {})},
        body: JSON.stringify({ prompt, system: systemPrompt})
      }),
      const data = await res.json($2);
=======
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
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output)
    } catch {}
<<<<<<< HEAD
  }, [output]),
=======
<<<<<<< HEAD
  }, [output]),
=======
  }, [output]);

  const onOpen = useCallback(() => {

    setIsOpen(true);
    setOutput("");
    setIsEditing(false);
    setError(null)
  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]);
=======

    } catch {}
}, [output]);
  const onOpen = useCallback(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

  const onOpen = useCallback(() => {
    setIsOpen($2);
    setOutput($2);
    setIsEditing($2);
    setError(null)
  }, []),

  const onClose = useCallback(() => setIsOpen(false), []),

  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]),

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  return (
    <>
      <button
        type="button"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
              : {})},body: JSON.stringify({ prompt, system: systemPrompt })})const data = await res.json()if (!res.ok) {throw new Error(data?.error || 'Failed to generate')}
      setOutput(String(data.text || ''))setIsEditing(false)} catch (e: any) {setError(e.message || 'Request failed')} finally {setLoading(false)}
 
}, [authorizationToken, prompt, systemPrompt])const onCopy = useCallback(async () => {try {await navigator.clipboard.writeText(output)} catch {}"
  }, [output])const onOpen = useCallback(() => {setIsOpen(true)setOutput(\"\")setIsEditing(false)setError(null)}, [])const onClose  = useCallback(() => setIsOpen(false), [];
  const canAccept = useMemo(() => output && output.trim().length > 0, [output];
  return (<>;
=======
>>>>>>> merged-prs-20250907-203621
        onClick={onOpen}
<<<<<<< HEAD
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {buttonLabel}
      </button>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
<<<<<<< HEAD
              <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Operator prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
=======
      </button>;
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
<<<<<<< HEAD
            </div>;
            <div className="p-4 space-y-3">;
              <div>;
                <label
                  className="block text-xs font-medium mb-1"
htmlFor="input-Operator prompt">;
=======

            </div>;
            <div className="p-4 space-y-3">;
              <div>;

                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="input-Operator prompt">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Operator prompt;
                </label>;
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e && e.target.value)}
                  rows={4}
<<<<<<< HEAD
className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                />;
              </div>;
              <div className="flex items-center gap-2">;
=======

                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                />;
              </div>;
              <div className="flex items-center gap-2">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
className="ml-auto rounded-md bg-green-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60";
=======

                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                  disabled={!canAccept}
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
=======
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
<<<<<<< HEAD
                  onClick={() =    /> {onAccept(output)onClose()}}
>>>>>>> origin/chore/fix-lint-and-merge
                  disabled={!canAccept}

                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled: opacity-60'
>>>>>>> merged-prs-20250907-203621
                >
                  Accept;
                </button>
              </div>

<<<<<<< HEAD
=======
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
=======
                  on_click={() => {
                    (on_accept (output), on_close ());
                  }}
                  disabled={!can_accept}
                  className="ml - auto rounded - md bg - green - 600 text - white px - 3 py - 1.5 text - sm disabled:opacity - 60";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >;
                  Accept;
                </button>;
              </div>;
<<<<<<< HEAD
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
=======


              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div>;
                <label
                  className="block text-xs font-medium mb-1"
<<<<<<< HEAD
htmlFor="input-Output (markdown)">;
=======
                  htmlFor="input-Output (markdown)">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Output (markdown);
                </label>;
                {isEditing ? (;
                  <textarea
                    value={output}
                    onChange={(e) => setOutput(e && e.target.value)}
                    rows={12}
<<<<<<< HEAD
className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
=======

                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />;
                ) : (;
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">;
                    {output || "No content yet. Click Generate."}
                  </pre>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    </>
  )
}
=======
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
);
}
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

}

  );
}
}
=======

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
