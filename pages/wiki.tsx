import React, { useMemo, useState } from 'react',
import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
  operatorPrompt,
  slugify} from '../utils/data/zionContent',

function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false),
  return (
    <button,
onClick={async () => {
        await navigator.clipboard.writeText(text),
        setCopied(true),
        setTimeout(() => setCopied(false), 1500)
      }}
      className=&quot;px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900&quot;    >
      {copied ? 'Copied' : label}
    </button>
  )
}

export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), []),
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]),
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]),

  return (
    <div className=&quot;grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8&quot;>
      <aside className=&quot;sticky top-20 self-start hidden lg:block&quot;>
        <div className=&quot;text-sm font-semibold mb-2&quot;>Table of contents</div>
        <ul className=&quot;space-y-1 text-sm&quot;>
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className=&quot;opacity-80 hover:opacity-100&quot;>
                {s.title}
              </Link>            </li>
          ))}
          <li>
            <a href=&quot;#references&quot; className=&quot;opacity-80 hover:opacity-100&quot;>References</Link>
          </li>
        </ul>
      </aside>

      <article className=&quot;prose dark:prose-invert max-w-none&quot;>
        <h1>{wiki.title}</h1>
        <div className=&quot;not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4&quot;>
          <div className=&quot;grid grid-cols-2 gap-x-6 gap-y-1 text-sm&quot;>
            <div className=&quot;font-semibold&quot;>Founder</div><div>{wiki.infobox.founder}</div>
            <div className=&quot;font-semibold&quot;>Launch Year</div><div>{wiki.infobox.launchYear}</div>
            <div className=&quot;font-semibold&quot;>Token</div><div>{wiki.infobox.token}</div>
            <div className=&quot;font-semibold&quot;>Protocol Type</div><div>{wiki.infobox.protocolType}</div>          </div>
        </div>
        <p>{wiki.intro}</p>

        {wiki.sections.map(_(s) => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map(_(p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <h2 id=&quot;references&quot;>References</h2>
        <ol>
          {wiki.references.map(_(r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>

        <div className=&quot;not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <div className=&quot;font-semibold&quot;>Export</div>
            <div className=&quot;flex gap-2&quot;>
              <CopyButton text={md} label=&quot;Copy Markdown&quot; />
              <CopyButton text={wikitext} label=&quot;Copy Wikitext&quot; />
            </div>
          </div>
          <pre className=&quot;overflow-auto text-xs whitespace-pre-wrap&quot;>
{md}
          </pre>
        </div>

        <div className=&quot;not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20&quot;>
          <div className=&quot;font-semibold mb-2&quot;>Operator Prompt</div>
          <pre className=&quot;overflow-auto text-xs whitespace-pre-wrap&quot;>{operatorPrompt}</pre>        </div>
      </article>
    </div>
  )
}