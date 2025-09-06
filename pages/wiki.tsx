import React, { useMemo, useState } from 'react';
import {
<<<<<<< HEAD
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
  operatorPrompt,
  slugify,;
} from '../utils/data/zionContent';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className='px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900'
    >
      {copied ? 'Copied' : label}
    </button>
  );
=======
  generateZionWiki;
  buildMarkdownFromWiki;
  buildWikitextFromWiki;
  operatorPrompt;
  slugify} from '../utils/data/zionContent';

function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500)
      }}
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {copied ? 'Copied' : label}
    </button>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), []);
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]);
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]);

  return (
<<<<<<< HEAD
    <div className='grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8'>
      <aside className='sticky top-20 self-start hidden lg:block'>
        <div className='text-sm font-semibold mb-2'>Table of contents</div>
        <ul className='space-y-1 text-sm'>
          {wiki.sections.map(s => (
            <li key={s.id}>
              <a
                href={`#${slugify(s.title)}`}
                className='opacity-80 hover:opacity-100'
              >
=======
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                {s.title}
              </a>
            </li>
          ))}
          <li>
<<<<<<< HEAD
            <a href='#references' className='opacity-80 hover:opacity-100'>
              References
            </a>
=======
            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </li>
        </ul>
      </aside>

<<<<<<< HEAD
      <article className='prose dark:prose-invert max-w-none'>
        <h1>{wiki.title}</h1>
        <div className='not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4'>
          <div className='grid grid-cols-2 gap-x-6 gap-y-1 text-sm'>
            <div className='font-semibold'>Founder</div>
            <div>{wiki.infobox.founder}</div>
            <div className='font-semibold'>Launch Year</div>
            <div>{wiki.infobox.launchYear}</div>
            <div className='font-semibold'>Token</div>
            <div>{wiki.infobox.token}</div>
            <div className='font-semibold'>Protocol Type</div>
            <div>{wiki.infobox.protocolType}</div>
=======
      <article className="prose dark:prose-invert max-w-none">
        <h1>{wiki.title}</h1>
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="font-semibold">Founder</div><div>{wiki.infobox.founder}</div>
            <div className="font-semibold">Launch Year</div><div>{wiki.infobox.launchYear}</div>
            <div className="font-semibold">Token</div><div>{wiki.infobox.token}</div>
            <div className="font-semibold">Protocol Type</div><div>{wiki.infobox.protocolType}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
        </div>
        <p>{wiki.intro}</p>

<<<<<<< HEAD
        {wiki.sections.map(s => (
=======
        {wiki.sections.map((s) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

<<<<<<< HEAD
        <h2 id='references'>References</h2>
=======
        <h2 id="references">References</h2>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>

<<<<<<< HEAD
        <div className='not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20'>
          <div className='flex items-center justify-between mb-2'>
            <div className='font-semibold'>Export</div>
            <div className='flex gap-2'>
              <CopyButton text={md} label='Copy Markdown' />
              <CopyButton text={wikitext} label='Copy Wikitext' />
            </div>
          </div>
          <pre className='overflow-auto text-xs whitespace-pre-wrap'>{md}</pre>
        </div>

        <div className='not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20'>
          <div className='font-semibold mb-2'>Operator Prompt</div>
          <pre className='overflow-auto text-xs whitespace-pre-wrap'>
            {operatorPrompt}
          </pre>
        </div>
      </article>
    </div>
  );
=======
        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Export</div>
            <div className="flex gap-2">
              <CopyButton text={md} label="Copy Markdown" />
              <CopyButton text={wikitext} label="Copy Wikitext" />
            </div>
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
{md}
          </pre>
        </div>

        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>
        </div>
      </article>
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
