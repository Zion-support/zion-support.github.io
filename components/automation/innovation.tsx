<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
<<<<<<< HEAD
import fs from 'fs','
import path from 'path';'
import type { GetStaticProps } from 'next';'

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, title: string, url: string, date?: string, summary?: string };
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
type Item = any;
=======
};
</header> {;
  items && items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>) ;
}</li>) ) ;
}</ul> </div>) ;
export default function InnovationDigest(): any ({ items }: Props) {;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="space-y-6">;
      <header className="space-y-2">;
        <h1 className="text-3xl font-bold">Innovation Digest</h1>;
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>;
      </header>;
      {items && items.length === 0 && (;
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>;
      )}
      <ul className="space-y-4">;
        {items && items.map((it, idx) => (;
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">;
            <div className="flex items-center justify-between gap-4">;
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it && it.source}</div>;
              {it && it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it && it.date).toLocaleString()}</div>}
            </div>;
            <a href={it && it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{it && it.title}</a>;
            {it && it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it && it.summary}</p>}
          </li>;
        ))}
<<<<<<< HEAD
=======


 
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
 


};
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>) 
}</li>) ) 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>
export default function InnovationDigest({ items }: Props) {}
  return ("
    <div className="space-y-6">"
      <header className="space-y-2">"
        <h1 className="text-3xl font-bold">Innovation Digest</h1>"
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
<<<<<<< HEAD
        <p className="text-gray-600 dark:text-gray-300>Latest AI research and tools—auto-curated.</p>
=======
<<<<<<< HEAD
=======
        <p className="text-gray-600 dark:text-gray-300>Latest AI research and tools—auto-curated.</p>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}"
      <ul className="space-y-4">
        {items.map((it, idx) => ("
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">"
            <div className="flex items-center justify-between gap-4">"
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it.source}</div>"
              {it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it.date).toLocaleString()}</div>}
            </div>"
            <a href={it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{it.title}</a>"
            {it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.summary}</p>}
          </li>
        ))}
<<<<<<< HEAD
      </ul>;
);
}
=======
      </ul>

    </div>;

);
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </ul>;
    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
}
<<<<<<< HEAD
=======


 
 
<<<<<<< HEAD
=======
<<<<<<< HEAD
import path from 'path';
import type { GetStaticProps } from 'next';
=======
>>>>>>> origin/resolved-merge-conflicts


=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
type Item = any;
<<<<<<< HEAD
}
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400 >No entries yet. The automation will populate this feed shortly.</div>)
}</li>) )
}</ul> </div>)
};
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
</header> {
  items.length === 0 && (<div className=text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>) 
}</li>) ) 
}</ul> </div>)
<<<<<<< HEAD
}</ul> </div>) 
=======
<<<<<<< HEAD
=======
}</ul> </div>) 
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6>
      <header className=space-y-2">
        <h1 className="text-3xl font-bold>Innovation Digest</h1>
        <p className=text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400>No entries yet. The automation will populate this feed shortly.</div>

;
}</header> {items && items.length === 0 && (<div className=text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>)}</li>) )}</ul> </div>)export default function InnovationDigest(): any ({ items }: Props) {return (<div className="space-y-6>;
      <header className=space-y-2">;
        <h1 className="text-3xl font-bold>Innovation Digest</h1>;
        <p className=text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>;
      </header>;
      {items && items.length === 0 && (<div className="text-gray-600 dark:text-gray-400>No entries yet. The automation will populate this feed shortly.</div>;
      )}
      <ul className=space-y-4">;
        {items && items.map((it, idx) => (<li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900>;
            <div className=flex items-center justify-between gap-4">;
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400>{it && it.source}</div>;
              {it && it.date && <div className=text-xs text-gray-500 dark:text-gray-400">{new Date(it && it.date).toLocaleString()}</div>}
            </div>;
            <a href={it && it.url} target="_blank rel=noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400>{it && it.title}</a>;
            {it && it.summary && <p className=mt-2 text-sm text-gray-600 dark:text-gray-300">{it && it.summary}</p>}
          </li>;
        ))}}</header> {items.length === 0 && (<div className="text-gray-600 dark:text-gray-400 >No entries yet. The automation will populate this feed shortly.</div>)}</li>) )}</ul> </div>)}</ul> </div>)import fs from fs',import path from 'path;
import type { GetStaticProps } from next';
type Item = any;export default function InnovationDigest() {return (<div className=space-y-6">;
      <header className="space-y-2>;
        <h1 className=text-3xl font-bold">Innovation Digest</h1>;
        <p className="text-gray-600 dark:text-gray-300>Latest AI research and tools—auto-curated.</p>;
      </header>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {items.length === 0 && (<div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>;
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, title: string, url: string, date?: string, summary?: string };
=======
>>>>>>> origin/resolved-merge-conflicts
      {items.length === 0 && (<div className=text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>;
import fs from 'fs;
type Item = { source: string, title: string, url: string, date?: string, summary?: string }
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

type Props = { items: Item[] },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), publicautomationinnovation-digest.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { items: data.items || [] }, revalidate: 1800 }
  } catch {
    return { props: { items: [] }, revalidate: 1800 }
  }
}

<<<<<<< HEAD
export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className="space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it.source}</div>
              {it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{it.title}</a>
            {it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
);
}

"
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
</header> {
  items.length === 0 && (<div className="text - gray - 600 dark:text - gray - 400" >No entries yet. The automation will populate this feed shortly.</div>);
}</li>) );
}</ul> </div>);
export default /**
 * InnovationDigest - Function description
 */
function InnovationDigest() {
  return (
    <div className="space - y-6">;
      <header className="space - y-2">;
        <h1 className="text - 3xl font - bold">Innovation Digest</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Latest AI research and tools—auto - curated.</p>;
      </header>;
      {items.length === 0 && (<div className="text - gray - 600 dark:text - gray - 400">No entries yet. The automation will populate this feed shortly.</div>)}
      <ul className="space - y-4">;
        {items.map ((it, idx) => (<li key={idx} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900">;
            <div className="flex items - center justify - between gap - 4">;
              <div className="text - xs uppercase tracking - wide text - gray - 500 dark:text - gray - 400">{it.source}</div>;
              {it.date && <div className="text - xs text - gray - 500 dark:text - gray - 400">{new Date (it.date).toLocaleString ()}</div>}
            </div>;
            <a href={it.url} target="_blank" rel="noreferrer" className="mt - 1 block font - medium text - blue - 600 dark:text - cyan - 400">{it.title}</a>;
            {it.summary && <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">{it.summary}</p>}
          </li>))}
      </ul>;
    </div>);

=======
>>>>>>> origin/resolved-merge-conflicts
        ))}
      </ul>;
)})}
</header> {items.length === 0 && (<div className="text - gray - 600 dark:text - gray - 400" >No entries yet. The automation will populate this feed shortly.</div>)}</li>) )}</ul> </div>)export default /**;
 * InnovationDigest - Function description;
 */;
function InnovationDigest() {return (<div className="space - y-6">;
  );
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
</header> {
  items.length === 0 && (<div className="text - gray - 600 dark:text - gray - 400" >No entries yet. The automation will populate this feed shortly.</div>);
}</li>) );
}</ul> </div>);
export default /**
 * InnovationDigest - Function description
 */
function InnovationDigest() {
  return (
    <div className="space - y-6">;
      <header className="space - y-2">;
        <h1 className="text - 3xl font - bold">Innovation Digest</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Latest AI research and tools—auto - curated.</p>;
      </header>;
      {items.length === 0 && (<div className="text - gray - 600 dark:text - gray - 400">No entries yet. The automation will populate this feed shortly.</div>)}
      <ul className="space - y-4">;
        {items.map ((it, idx) => (<li key={idx} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900">;
            <div className="flex items - center justify - between gap - 4">;
              <div className="text - xs uppercase tracking - wide text - gray - 500 dark:text - gray - 400">{it.source}</div>;
              {it.date && <div className="text - xs text - gray - 500 dark:text - gray - 400">{new Date (it.date).toLocaleString ()}</div>}
            </div>;
            <a href={it.url} target="_blank" rel="noreferrer" className="mt - 1 block font - medium text - blue - 600 dark:text - cyan - 400">{it.title}</a>;
            {it.summary && <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">{it.summary}</p>}
          </li>))}
      </ul>;
    </div>);
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    </div>)
      </ul>
    </div>
  )
<<<<<<< HEAD
}

"
=======
<<<<<<< HEAD
=======
}

"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
</header> {"
  items.length === 0 && (<div className=text - gray - 600 dark:text - gray - 400 >No entries yet. The automation will populate this feed shortly.</div>);
}</li>) );
}</ul> </div>);
export default /**;
 * InnovationDigest - Function description;
 */
function InnovationDigest() {}
  return ("
    <div className="space - y-6>;
      <header className="space - y-2">;
        <h1 className=text - 3xl font - bold">Innovation Digest</h1>;"
        <p className=text - gray - 600 dark:text - gray - 300>Latest AI research and tools—auto - curated.</p>;
      </header>;
      {items.length === 0 && ("
        <div className="text - gray - 600 dark:text - gray - 400">No entries yet. The automation will populate this feed shortly.</div>)}"
      <ul className="space - y-4">;
        {items.map ((it, idx) => ("
          <li key={idx} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900">;"
            <div className="flex items - center justify - between gap - 4">;"
              <div className="text - xs uppercase tracking - wide text - gray - 500 dark:text - gray - 400">{it.source}</div>;"
              {it.date && <div className="text - xs text - gray - 500 dark:text - gray - 400">{new Date (it.date).toLocaleString ()}</div>}
            </div>;"
            <a href={it.url} target="_blank" rel="noreferrer" className="mt - 1 block font - medium text - blue - 600 dark:text - cyan - 400">{it.title}</a>;"
            {it.summary && <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">{it.summary}</p>}
          </li>))}
      </ul>;
    </div>);
origin/cursor/automate-test-improve-and-merge-code-2533
      {items.length === 0 && (
        <div className="text - gray - 600 dark: text - gray - 400">No entries yet. The automation will populate this feed shortly.</div>);}
      <ul className=space - y-4>;
        {items.map ((it, idx) => (
          <li key={idx} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900">;
            <div className=flex items - center justify - between gap - 4>;
              <div className="text - xs uppercase tracking - wide text - gray - 500 dark: text - gray - 400">{it.source;}</div>;
              {it.date && <div className=text - xs text - gray - 500 dark: text - gray - 400>{new Date (it.date).toLocaleString ();}</div>}
            </div>;
            <a href={it.url} target="_blank" rel=noreferrer className="mt - 1 block font - medium text - blue - 600 dark: text - cyan - 400">{it.title;}</a>;
            {it.summary && <p className=mt - 2 text - sm text - gray - 600 dark: text - gray - 300>{it.summary;}</p>}
          </li>))}
      </ul>;
    </div>);
origin/cursor/automate-test-improve-and-merge-code-2533
=======

export default function InnovationDigest({ items }: Props) {
  return (
    <div className=\"space-y-6\"    />"
      <header className=\"space-y-2\"    />"
        <h1 className=\"text-3xl font-bold\"    />Innovation Digest</h1>"
        <p className=\"text-gray-600 dark: text-gray-300\"    />Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && ("
        <div className=\"text-gray-600 dark:text-gray-400\"    />No entries yet. The automation will populate this feed shortly.</div>
}
      }
}"
      <ul className=\"space-y-4\"    />;"
        {items.map((it, idx) => (<li key={idx} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900\"    />;"
            <div className=\"flex items-center justify-between gap-4\"    />;"
              <div className=\"text-xs uppercase tracking-wide text-gray-500 dark: text-gray-400\"    />{it.sourc}
}</div>;"
              {it.date && <div className=\"text-xs text-gray-500 dark: text-gray-400\"    />{new Date(it.date).toLocaleString()}</div
}
            </div>;"
            <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"mt-1 block font-medium text-blue-600 dark: text-cyan-400\"    />{it.titl}
}</a>;"
            {it.summary && <p className=\"mt-2 text-sm text-gray-600 dark: text-gray-300\"    />{it.summary}</p
}
          </li>;
        ))}

>>>>>>> origin/chore/fix-lint-and-merge
      </ul>
);
}


"
=======
  }
},

export default function InnovationDigest({ items }: Props) {
  return (
    <div className=&quot;space-y-6&quot;>
      <header className=&quot;space-y-2&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Innovation Digest</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className=&quot;text-gray-600 dark:text-gray-400&quot;>No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className=&quot;space-y-4&quot;>
        {items.map((it, idx) => (
          <li key={idx} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900&quot;>
            <div className=&quot;flex items-center justify-between gap-4&quot;>
              <div className=&quot;text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400&quot;>{it.source}</div>
              {it.date && <div className=&quot;text-xs text-gray-500 dark:text-gray-400&quot;>{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;mt-1 block font-medium text-blue-600 dark:text-cyan-400&quot;>{it.title}</a>
            {it.summary && <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>{it.summary}</p>}

}
<<<<<<< HEAD
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>)
}</li>) )
}</ul> </div>)

 
 
};
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>) 
}</li>) ) 
}</ul> </div>) 
}</ul> </div>)
}</ul> </div>) 
export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>
        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && (
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}
      <ul className="space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{it.source}</div>
              {it.date && <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(it.date).toLocaleString()}</div>}
            </div>
            <a href={it.url} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-600 dark:text-cyan-400">{it.title}</a>
            {it.summary && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
    </div>;
);
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
