



}

export default function WikiPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
      <aside className="sticky top-20 self-start hidden lg:block">
        <div className="text-sm font-semibold mb-2">Table of contents</div>
        <ul className="space-y-1 text-sm">
          {wiki.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${slugify(s.title)}`} className="opacity-80 hover:opacity-100">

import React, { useMemo, useState } from 'react',
=======

            </li>
          ))}
          <li>
            <a href="#references" className="opacity-80 hover:opacity-100">References</a>
            <a href="#references" className="opacity-80 hover:opacity-100">References</Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </li>
        </ul>
      </aside>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {wiki.sections.map((s) => (
          <section key={s.id} id={slugify(s.title)}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
=======
=======

=======



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662        <h2 id="references">References</h2>
        <ol>
          {wiki.references.map((r, i) => (
            <li key={i}>{r}</li>
=======
          ))}
        </ol>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="not-prose mt-10 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Export</div>
            <div className="flex gap-2">
              <CopyButton text={md} label="Copy Markdown" />
              <CopyButton text={wikitext} label="Copy Wikitext" />
            </div>
          </div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
{md}{md  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </pre>
        </div>
        <div className="not-prose mt-6 p-4 border rounded bg-white/60 dark:bg-black/20">
          <div className="font-semibold mb-2">Operator Prompt</div>
          <pre className="overflow-auto text-xs whitespace-pre-wrap">{operatorPrompt}</pre>
=======        </div>
      </article>
    </div>;
  );
};
    </div>
  )
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
}>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>
  )
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
