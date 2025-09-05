import React, {_useMemo, _useState} from 'react';
import {_generateZionWiki, _buildMarkdownFromWiki, _buildWikitextFromWiki, _operatorPrompt, _slugify} from '../utils/data/zionContent';

function CopyButton(_{_text, _label}: {_text: string; label: string}) {_const [copied, _setCopied] = useState(false);
  return (_<button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout__(() => setCopied(false), _1500);}}
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {_copied ? 'Copied' : label}
    </button>
  );
}

export default function WikiPage() {_const _wiki = useMemo__(() => generateZionWiki(), _[]);
  const _md = useMemo__(() => buildMarkdownFromWiki(wiki), _[wiki]);
  const _wikitext = useMemo__(() => buildWikitextFromWiki(wiki), _[wiki]);

  return (_<div className="grid grid-cols-1 lg:grid-cols-[260px, _1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={_`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">
                {_s.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
          </li>
        </ul>
      </aside>

      <article className="prose dark:prose-invert max-w-none">
        <h1>{_wiki.title}</h1>
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="font-semibold">Founder</div><div>{_wiki.infobox.founder}</div>
            <div className="font-semibold">Launch Year</div><div>{_wiki.infobox.launchYear}</div>
            <div className="font-semibold">Token</div><div>{_wiki.infobox.token}</div>
            <div className="font-semibold">Protocol Type</div><div>{_wiki.infobox.protocolType}</div>
          </div>
        </div>
        <p>{_wiki.intro}</p>

        {_wiki.sections.map(_(s) => (
          <section key={s.id} id={_slugify(s.title)}>
            <h2>{_s.title}</h2>
            {_s.paragraphs.map(_(p, _i) => (
              <p key={i}>{_p}</p>
            ))}
          </section>
        ))}

        <h2 id="references">References</h2>
        <ol>
          {_wiki.references.map(_(r, _i) => (
            <li key={i}>{_r}</li>
          ))}
        </ol>

        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Export</div>
            <div className="flex gap-2">
              <CopyButton text={_md} label="Copy Markdown" />
              <CopyButton text={_wikitext} label="Copy Wikitext" />
            </div>
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
{_md}
          </pre>
        </div>

        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{_operatorPrompt}</pre>
        </div>
      </article>
    </div>
  );
}