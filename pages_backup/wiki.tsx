<<<<<<< HEAD:pages/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD

function CopyButton({ text, label }: { text: string, label: string }) {}
  const [copied, setCopied] = useState(false)
  return (
    <button;
      onClick={async () => {}
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)

}

export default function WikiPage() {};
  const wiki = useMemo(() => generateZionWiki(), []);
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki]);
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">"
      <aside className="sticky top-20 self-start hidden lg:block">"
        <div className="text-sm font-semibold mb-2">Table of contents</div>"
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>"
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">

import React, { useMemo, useState } from 'react',
:pages_backup/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import React, { useMemo, useState } from 'react',;

import {}
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,

      }}";
      className="px - 3 py - 1 rounded border text - xs hover:bg - gray - 50 dark:hover:bg - gray - 900";
    >;'
      {copied ? 'Copied' : label}
    </button>);
}

export default function WikiPage() {}
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])

export default /**;
 * WikiPage - Function description;
 */
function WikiPage() {}
  const wiki = useMemo (() => generateZionWiki (), []),
  const md = useMemo (() => buildMarkdownFromWiki (wiki), [wiki]),
  const wikitext = useMemo (() => buildWikitextFromWiki (wiki), [wiki]),

  return ("
    <div className="grid grid - cols - 1 lg:grid - cols-[260px, 1fr] gap - 8">;"
      <aside className="sticky top - 20 self - start hidden lg:block">;"
        <div className="text - sm font - semibold mb - 2">Table of contents</div>;"
        <ul className="space - y-1 text - sm">;
          {wiki.sections.map ((s) => (
            <li key={s.id}>;"`
              <a href={`#${slugify (s.title)}`} className="opacity - 80 hover:opacity - 100">;

                {s.title}

                {s.title  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>

            </li>
          ))}
          <li>

"
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>

          </li>
        </ul>
      </aside>

  operatorPrompt,'
  slugify} from '../utils/data/zionContent',
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
}}
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {copied ? 'Copied' : label}
    </button>
  )

=======
import React, { useMemo, useState } from 'react',;
import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
  operatorPrompt,
  slugify} from '../utils/data/zionContent',

function CopyButton({ text, label }: { text: string, label: string }) {}
  const [copied, setCopied] = useState(false)
  return (
    <button;
      onClick={async () => {}
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
}
:pages_backup/wiki.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
origin/cursor/automate-test-improve-and-merge-code-2533
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])
<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {;
  generateZionWiki,;
  buildMarkdownFromWiki,;
  buildWikitextFromWiki,;
  operatorPrompt,;'
  slugify} from '../utils/data/zionContent',;
function CopyButton() { return null; }
      }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      className="px-3 py-1 rounded border text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
    >'
      {copied ? 'Copied' : label  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </button>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
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
            <li key={s.id}>"`
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            </li>
          ))}
          <li>
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {s.title}
                {s.title  } catch (error) {";
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </li>
          ))}
<li>
<<<<<<< HEAD
            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<a href='#references' className='opacity-80 hover:opacity-100'>
              References
            </a>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </li>
        </ul>
      </aside>

"
      <article className="prose dark:prose-invert max-w-none">
        <h1>{wiki.title}</h1>"
        <div className="not-prose border rounded p-4 bg-white/60 dark:bg-black/20 mb-4">"
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">"
            <div className="font-semibold">Founder</div><div>{wiki.infobox.founder}</div>"
            <div className="font-semibold">Launch Year</div><div>{wiki.infobox.launchYear}</div>"
            <div className="font-semibold">Token</div><div>{wiki.infobox.token}</div>"
            <div className="font-semibold">Protocol Type</div><div>{wiki.infobox.protocolType}</div>
          </div>
        </div>
        <p>{wiki.intro}</p>

        {wiki.sections.map((s) => (
<article className='prose dark:prose-invert max-w-none'>
origin/cursor/automate-test-improve-and-merge-code-2533
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

{wiki.sections.map(s => (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
<<<<<<< HEAD:pages/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            ))}
          </section>
        ))}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))  } catch (error) {
    console.error("Error:", error);
=======

            ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/wiki.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </section>;
        ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/wiki.tsx
<<<<<<< HEAD

:pages_backup/wiki.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/wiki.tsx
        <h2 id="references">References</h2>
=======
        <h2 id="references">References</h2>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/wiki.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ))}
          </section>
        ))}

<h2 id='references'>References</h2>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
:pages_backup/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

"
        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">"
          <div className="flex items-center justify-between mb-2">"
            <div className="font-semibold">Export</div>"
            <div className="flex gap-2">"
              <CopyButton text={md} label="Copy Markdown" />"
              <CopyButton text={wikitext} label="Copy Wikitext" />
            </div>
          </div>"
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
:pages_backup/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

{md  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/wiki.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </pre>
        </div>"
        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">"
          <div className="font-semibold mb-2">Operator Prompt</div>"
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>
:pages_backup/wiki.tsx
<<<<<<< HEAD

        </div>
      </article>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
      </article>

}

              </a>;
            </li>))}
          <li>;"
            <a href="#references" className="opacity - 80 hover:opacity - 100">References</a>;
          </li>;
        </ul>;
      </aside>;"
      <article className="prose dark:prose - invert max - w-none">;
        <h1>{wiki.title}</h1>;"
        <div className="not - prose border rounded p - 4 bg - white / 60 dark:bg - black / 20 mb - 4">;"
          <div className="grid grid - cols - 2 gap - x-6 gap - y-1 text - sm">;"
            <div className="font - semibold">Founder</div><div>{wiki.infobox.founder}</div>;"
            <div className="font - semibold">Launch Year</div><div>{wiki.infobox.launch_year}</div>;"
            <div className="font - semibold">Token</div><div>{wiki.infobox.token}</div>;"
            <div className="font - semibold">Protocol Type</div><div>{wiki.infobox.protocol_type}</div>;
          </div>;
        </div>;
        <p>{wiki.intro}</p>;
        {wiki.sections.map ((s) => (
          <section key={s.id} id={slugify (s.title)}>;
            <h2>{s.title}</h2>;
            {s.paragraphs.map ((p, i) => (
              <p key={i}>{p}</p>))}
          </section>))}"
        <h2 id="references">References</h2>;
        <ol>;
          {wiki.references.map ((r, i) => (
            <li key={i}>{r}</li>))}
        </ol>;"
        <div className="not - prose mt - 10 p - 4 border rounded bg - white / 60 dark:bg - black / 20">;"
          <div className="flex items - center justify - between mb - 2">;"
            <div className="font - semibold">Export</div>;"
            <div className="flex gap - 2">;"
              <CopyButton text={md} label="Copy Markdown" />;"
              <CopyButton text={wikitext} label="Copy Wikitext" />;
            </div>;
          </div>;"
          <pre className="overflow - auto text - xs whitespace - pre - wrap">;
{md}
          </pre>;
        </div>;"
        <div className="not - prose mt - 6 p - 4 border rounded bg - white / 60 dark:bg - black / 20">;"
          <div className="font - semibold mb - 2">Operator Prompt</div>;"
          <pre className="overflow - auto text - xs whitespace - pre - wrap">{operator_prompt}</pre>;
        </div>;
      </article>;
    </div>);
}

        </div>
      </article>
    </div>;
  );
};
    </div>
  )

:pages_backup/wiki.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/wiki.tsx
    </div>
  )
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/wiki.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

:pages_backup/wiki.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
