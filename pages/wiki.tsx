
generateZionWiki;
  buildMarkdownFromWiki;
  buildWikitextFromWiki;
  operatorPrompt;
  slugify} from '../utils/data/zionContent';
import React, { useMemo, useState } from 'react',;
import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
  operatorPrompt,
  slugify} from '../utils/data/zionContent',


function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)



}

export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), []);
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]);
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">



  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki



      }}
      className="px - 3 py - 1 rounded border text - xs hover:bg - gray - 50 dark:hover:bg - gray - 900";
    >;
      {copied ? 'Copied' : label}
    </button>);
}



}
import React, { useMemo, useState } from 'react';
import { generateZionWiki;
  buildMarkdownFromWiki;
  buildWikitextFromWiki;
  operatorPrompt;
  slugify } from '../utils/data/zionContent';
function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])


  return (
    <div className="grid grid - cols - 1 lg:grid - cols-[260px, 1fr] gap - 8">;
      <aside className="sticky top - 20 self - start hidden lg:block">;
        <div className="text - sm font - semibold mb - 2">Table of contents</div>;
        <ul className="space - y-1 text - sm">;
          {wiki.sections.map ((s) => (
            <li key={s.id}>;
              <a href={`#${slugify (s.title)}`} className="opacity - 80 hover:opacity - 100">;



                {s.title}


                {s.title  } catch (error) {

import {;
  generateZionWiki,;
  buildMarkdownFromWiki,;
  buildWikitextFromWiki,;
  operatorPrompt,;
  slugify} from '../utils/data/zionContent',;
function CopyButton({ text, label }: { text: string, label: string }) {;
  const [copied, setCopied] = useState(false);
  return (;
    <button;
      onClick={async () => {;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>



            </li>
          ))}
          <li>





            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>



          </li>
        </ul>
      </aside>


      <article className="prose dark:prose-invert max-w-none">
        <h1>{wiki.title}</h1>
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="font-semibold">Founder</div><div>{wiki.infobox.founder}</div>
            <div className="font-semibold">Launch Year</div><div>{wiki.infobox.launchYear}</div>
            <div className="font-semibold">Token</div><div>{wiki.infobox.token}</div>
            <div className="font-semibold">Protocol Type</div><div>{wiki.infobox.protocolType}</div>
          </div>
        </div>
        <p>{wiki.intro}</p>


        {wiki.sections.map((s) => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>





                {s.title}
      <article className="prose dark:prose-invert max-w-none">
        <h1>{wiki.title}</h1>
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="font-semibold">Founder</div><div>{wiki.infobox.founder}</div>
            <div className="font-semibold">Launch Year</div><div>{wiki.infobox.launchYear}</div>
            <div className="font-semibold">Token</div><div>{wiki.infobox.token}</div>
            <div className="font-semibold">Protocol Type</div><div>{wiki.infobox.protocolType}</div>
          </div>
        </div>
        <p>{wiki.intro}</p>
        {wiki.sections.map((s) => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
        <h2 id="references">References</h2>
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
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
    >
      {_copied ? 'Copied' : label}
    </button>
  )
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {copied ? 'Copied' : label  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </button>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
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
                {s.title}
                {s.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
            </li>
          ))}
          <li>
            <a href=&quot;#references&quot; className=&quot;opacity-80 hover:opacity-100&quot;>References</Link>



            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>
<a href='#references' className='opacity-80 hover:opacity-100'>
              References
            </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
            <div className=&quot;font-semibold&quot;>Protocol Type</div><div>{wiki.infobox.protocolType}</div>
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

        <h2 id=&quot;references&quot;>References</h2>
        <ol>
          {_wiki.references.map(_(r, _i) => (
            <li key={i}>{_r}</li>
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
          <pre className=&quot;overflow-auto text-xs whitespace-pre-wrap&quot;>{operatorPrompt}</pre>


      <article className="prose dark:prose-invert max-w-none">
        <h1>{wiki.title}</h1>
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="font-semibold">Founder</div><div>{wiki.infobox.founder}</div>
            <div className="font-semibold">Launch Year</div><div>{wiki.infobox.launchYear}</div>
            <div className="font-semibold">Token</div><div>{wiki.infobox.token}</div>
            <div className="font-semibold">Protocol Type</div><div>{wiki.infobox.protocolType}</div>

      <article className="prose dark:prose-invert max-w-none">
<article className='prose dark:prose-invert max-w-none'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
          </div>
        </div>
        <p>{wiki.intro}</p>




        {wiki.sections.map((s) => (
{wiki.sections.map(s => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>






            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </section>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






        <h2 id="references">References</h2>
        <h2 id="references">References</h2>
            ))}
          </section>
        ))}

<h2 id='references'>References</h2>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>




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


{md  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





<div className='not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20'>
          <div className='flex items-center justify-between mb-2'>
            <div className='font-semibold'>Export</div>
            <div className='flex gap-2'>
              <CopyButton text={md} label='Copy Markdown' />
              <CopyButton text={wikitext} label='Copy Wikitext' />
            </div>
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
          </pre>
        </div>
        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>


        </div>
      </article>






    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}




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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
