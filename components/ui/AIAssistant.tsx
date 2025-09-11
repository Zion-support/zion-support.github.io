import React, { useCallback, useEffect, useMemo, useState } from "react";

import React, { useCallback, useEffect, useMemo, useState } from "react";
export type AIAssistantProps = {
=======

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


=======

  buttonLabel = "Generate with AI",
  title = "AI Writing Assistant",
  defaultPrompt,
  systemPrompt,
  onAccept,
  authorizationToken,
}: AIAssistantProps) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);


    } catch {}
}, [output]);
  const onOpen = useCallback(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



  const onOpen = useCallback(() => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    setIsOpen(true);
    setOutput("");
    setIsEditing(false);


  }, []);
  const onClose = useCallback(() => setIsOpen(false), []);



  return (
    <>;
      <button
        type="button"
        onClick={onOpen}


      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-base font-semibold">{title}</h3>
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

                >;
                  Accept;
                </button>;
              </div>;


              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}


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
    </>;
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
}
