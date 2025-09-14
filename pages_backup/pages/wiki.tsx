
import React, { useMemo, useState } from 'react';
import React, { useMemo, useState } from 'react',;
import {
  generateZionWiki,
  buildMarkdownFromWiki,
  buildWikitextFromWiki,
  operatorPrompt,
  slugify} from '../utils/data/zionContent',




import React, { useMemo, useState } from 'react';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

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

}
export default function WikiPage() {
  const wiki = useMemo(() => generateZionWiki(), [])
  const md = useMemo(() => buildMarkdownFromWiki(wiki), [wiki])
  const wikitext = useMemo(() => buildWikitextFromWiki(wiki), [wiki])

import React, { useMemo, useState } from 'react';

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

                {s.title}
              </a>
                {s.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


            </li>
          ))}
          <li>

            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


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

            ))}
          </section>
        ))}


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






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


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
{md  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


          </pre>
        </div>
        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>
        </div>
      </article>

    </div>;
  );
};
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



