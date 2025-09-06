<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
generateZionWiki;
  buildMarkdownFromWiki;
  buildWikitextFromWiki;
  operatorPrompt;
  slugify} from '../utils/data/zionContent';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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

=======
import React, { useMemo, useState } from 'react',
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useMemo, useState } from 'react',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useMemo, useState } from 'react';
import React, { useMemo, useState } from 'react',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { useMemo, useState } from 'react',;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
<<<<<<< HEAD
<<<<<<< HEAD
  operator_prompt,
  slugify} from '../utils / data / zion_content',
/**
 * CopyButton - Function description
 */
function CopyButton() {
  const [copied, set_copied] = useState (false),
  return (
    <button;
      on_click={async () => {
        await navigator.clipboard.write_text (text),
        set_copied (true),
        set_timeout (() => set_copied (false), 1500);

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      }}
      className="px - 3 py - 1 rounded border text - xs hover:bg - gray - 50 dark:hover:bg - gray - 900";
    >;
      {copied ? 'Copied' : label}
    </button>);
}
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])

=======
export default /**
 * WikiPage - Function description
 */
function WikiPage() {
  const wiki = useMemo (() => generateZionWiki (), []),
  const md = useMemo (() => buildMarkdownFromWiki (wiki), [wiki]),
  const wikitext = useMemo (() => buildWikitextFromWiki (wiki), [wiki]),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div className="grid grid - cols - 1 lg:grid - cols-[260px, 1fr] gap - 8">;
      <aside className="sticky top - 20 self - start hidden lg:block">;
        <div className="text - sm font - semibold mb - 2">Table of contents</div>;
        <ul className="space - y-1 text - sm">;
          {wiki.sections.map ((s) => (
            <li key={s.id}>;
              <a href={`#${slugify (s.title)}`} className="opacity - 80 hover:opacity - 100">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                {s.title}


                {s.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </li>
          ))}
          <li>

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
              </Link>
            </li>
          ))}
          <li>
            <a href=&quot;#references&quot; className=&quot;opacity-80 hover:opacity-100&quot;>References</Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          </li>
        </ul>
      </aside>

<<<<<<< HEAD
<<<<<<< HEAD

=======
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  operatorPrompt,
  slugify} from '../utils/data/zionContent',
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), []),
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]),
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]),
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">

import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,

import {
  generateZionWiki
  buildMarkdownFromWiki
  buildWikitextFromWiki
  operatorPrompt
  slugify} from '../utils/data/zionContent'
function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
<<<<<<< HEAD
      }}
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {copied ? 'Copied' : label}
    </button>
  )
=======
}
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), []),
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]),
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]),

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            </li>
          ))}
          <li>

=======
                {s.title}
                {s.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </li>
          ))}
          <li>
            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </li>
        </ul>
      </aside>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        {wiki.sections.map((s) => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======



=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ))}
          </section>
        ))}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


=======



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <h2 id="references">References</h2>
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Export</div>
            <div className="flex gap-2">
              <CopyButton text={md} label="Copy Markdown" />
              <CopyButton text={wikitext} label="Copy Wikitext" />
            </div>
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
{md}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
{md  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </pre>
        </div>
        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>
<<<<<<< HEAD

        </div>
      </article>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        </div>
      </article>

=======
}

=======
              </a>;
            </li>))}
          <li>;
            <a href="#references" className="opacity - 80 hover:opacity - 100">References</a>;
          </li>;
        </ul>;
      </aside>;
      <article className="prose dark:prose - invert max - w-none">;
        <h1>{wiki.title}</h1>;
        <div className="not - prose border rounded p - 4 bg - white / 60 dark:bg - black / 20 mb - 4">;
          <div className="grid grid - cols - 2 gap - x-6 gap - y-1 text - sm">;
            <div className="font - semibold">Founder</div><div>{wiki.infobox.founder}</div>;
            <div className="font - semibold">Launch Year</div><div>{wiki.infobox.launch_year}</div>;
            <div className="font - semibold">Token</div><div>{wiki.infobox.token}</div>;
            <div className="font - semibold">Protocol Type</div><div>{wiki.infobox.protocol_type}</div>;
          </div>;
        </div>;
        <p>{wiki.intro}</p>;
        {wiki.sections.map ((s) => (
          <section key={s.id} id={slugify (s.title)}>;
            <h2>{s.title}</h2>;
            {s.paragraphs.map ((p, i) => (
              <p key={i}>{p}</p>))}
          </section>))}
        <h2 id="references">References</h2>;
        <ol>;
          {wiki.references.map ((r, i) => (
            <li key={i}>{r}</li>))}
        </ol>;
        <div className="not - prose mt - 10 p - 4 border rounded bg - white / 60 dark:bg - black / 20">;
          <div className="flex items - center justify - between mb - 2">;
            <div className="font - semibold">Export</div>;
            <div className="flex gap - 2">;
              <CopyButton text={md} label="Copy Markdown" />;
              <CopyButton text={wikitext} label="Copy Wikitext" />;
            </div>;
          </div>;
          <pre className="overflow - auto text - xs whitespace - pre - wrap">;
{md}
          </pre>;
        </div>;
        <div className="not - prose mt - 6 p - 4 border rounded bg - white / 60 dark:bg - black / 20">;
          <div className="font - semibold mb - 2">Operator Prompt</div>;
          <pre className="overflow - auto text - xs whitespace - pre - wrap">{operator_prompt}</pre>;
        </div>;
      </article>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

        </div>
      </article>
    </div>;
  );
};
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
