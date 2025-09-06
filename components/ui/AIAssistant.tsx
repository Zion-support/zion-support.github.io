<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useCallback, useEffect, useMemo, useState } from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;
<<<<<<< HEAD
}
export default function AIAssistant({
  buttonLabel = "Generate with AI"
  title = "AI Writing Assistant"
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {
=======
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function AIAssistant(): any ({;
  buttonLabel = "Generate with AI",;
  title = "AI Writing Assistant",;
  defaultPrompt,;
  systemPrompt,;
  onAccept,;
  authorizationToken,;
}: AIAssistantProps) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export default function AIAssistant({
  buttonLabel = 'Generate with AI',
  title = 'AI Writing Assistant',
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken
}: AIAssistantProps) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD

  useEffect(() => {;
    setPrompt(defaultPrompt);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    setPrompt(defaultPrompt);
=======

  useEffect(() => {
    setPrompt(defaultPrompt)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}`
                }
              : {})
        }
=======
          'Content-Type': 'application/json',
          ...(authorizationToken
            ? { Authorization: `Bearer ${authorizationToken}` }
            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN
            ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` }
            : {})
        },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
    } finally {
<<<<<<< HEAD
      setLoading(false);
    }
  }, [authorizationToken, prompt, systemPrompt]);
  const onCopy = useCallback(async () => {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {
      await navigator.clipboard.write_text (output);
    } catch {}
  }, [output]);
<<<<<<< HEAD
  const onOpen = useCallback(() => {
=======

  useEffect(() => {;
    setPrompt(defaultPrompt);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
=======
      setLoading(false)
    }
  }, [authorizationToken, prompt, systemPrompt]);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch {}
  }, [output]);

  const onOpen = useCallback(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setIsOpen(true);
    setOutput("");
    setIsEditing(false);
<<<<<<< HEAD
    setError(null);
=======
<<<<<<< HEAD
    setError(null);
=======
    setError(null)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);
<<<<<<< HEAD

  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);
=======
<<<<<<< HEAD
  const canAccept = useMemo(() => output && output.trim().length > 0, [output]);
=======

  const canAccept = useMemo(() => (output && output.trim().length > 0), [output]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  return (
    <>;
      <button
        type="button"
        onClick={onOpen}
<<<<<<< HEAD
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 && 1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">;
=======
<<<<<<< HEAD
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 && 1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">;
        {buttonLabel}
<<<<<<< HEAD
      </button>
=======
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      >
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {buttonLabel}
      </button>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
=======
      </button>;

      {isOpen && (;
        <div className="fixed inset-0 z-50 flex items-center justify-center">;
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />;
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">;
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">;
              <h3 className="text-base font-semibold">{title}</h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                onClick={onClose}
                className="text-sm opacity-70 hover:opacity-100">;
                Close;
              </button>{" "}
<<<<<<< HEAD
            </div>
            <div className="p-4 space-y-3">
              <div>
=======
            </div>;

            <div className="p-4 space-y-3">;
              <div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <label
                  className="block text-xs font-medium mb-1"
                  htmlFor="input-Operator prompt">;
                  Operator prompt;
                </label>;
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e && e.target.value)}
                  rows={4}
<<<<<<< HEAD
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
=======
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                />;
              </div>;

              <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60"
                >
                  Accept
                </button>
              </div>
<<<<<<< HEAD
=======
                  className="ml-auto rounded-md bg-green-600 text-white px-3 py-1 && 1.5 text-sm disabled:opacity-60";
=======
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
      <button;
        type="button";
        on_click={on_open}
        className="inline - flex items - center gap - 2 rounded - md border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - gray - 900 px - 3 py - 1.5 text - sm hover:bg - gray - 50 dark:hover:bg - gray - 800";
      >;
        {button_label}
      </button>;
      {is_open && (
        <div className="fixed inset - 0 z - 50 flex items - center justify - center">;
          <div className="absolute inset - 0 bg - black / 50" on_click={on_close} />;
          <div className="relative z - 10 w - full max - w-2xl rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - black shadow - xl">;
            <div className="flex items - center justify - between px - 4 py - 3 border - b border - gray - 200 dark:border - gray - 800">;
              <h3 className="text - base font - semibold">{title}</h3>;
              <button;
                on_click={on_close}
                className="text - sm opacity - 70 hover:opacity - 100";
              >;
                Close;
              </button>{" "}
            </div>;
            <div className="p - 4 space - y-3">;
              <div>;
                <label;
                  className="block text - xs font - medium mb - 1";
                  html_for="input - Operator prompt";
                >;
                  Operator prompt;
                </label>;
                <textarea;
                  value={prompt}
                  on_change={(e) => set_prompt (e.target.value)}
                  rows={4}
                  className="w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - gray - 900 p - 2 text - sm";
                />;
              </div>;
              <div className="flex items - center gap - 2">;
                <button;
                  on_click={call_operator}
                  disabled={loading}
                  className="rounded - md bg - blue - 600 text - white px - 3 py - 1.5 text - sm disabled:opacity - 60";
                >;
                  {loading ? "Generating…" : "Generate"}
                </button>;
                <button;
                  on_click={call_operator}
                  disabled={loading}
                  className="rounded - md border px - 3 py - 1.5 text - sm";
                >;
                  {loading ? "…" : "Regenerate"}
                </button>;
                <button;
                  on_click={() => setIsEditing ((v) => !v)}
                  className="rounded - md border px - 3 py - 1.5 text - sm";
                >;
                  {is_editing ? "Preview" : "Edit"}
                </button>;
                <button;
                  on_click={on_copy}
                  disabled={!output}
                  className="rounded - md border px - 3 py - 1.5 text - sm disabled: opacity - 60";
                >;
                  Copy;
                </button>;
                <button;
                  on_click={() => {
                    (on_accept (output), on_close ());
                  }}
                  disabled={!can_accept}
                  className="ml - auto rounded - md bg - green - 600 text - white px - 3 py - 1.5 text - sm disabled:opacity - 60";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                >;
                  Accept;
                </button>;
              </div>;
<<<<<<< HEAD
=======

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm"
                  />
                ) : (
<<<<<<< HEAD
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">
                    {output |"No content yet. Click Generate."}
                  </pre>
=======
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm";
                  />;
                ) : (;
                  <pre className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap">;
                    {output || "No content yet. Click Generate."}
                  </pre>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      )}
    </>;
  );
}
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
