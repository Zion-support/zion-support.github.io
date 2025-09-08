

<<<<<<< HEAD

=======
import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const getStaticProps: GetStaticProps<Props> = async () => {
;
}
type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] } },
<<<<<<< HEAD

export const getStaticProps: GetStaticProps < Props> = async () => {
  try {
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);


=======
export const getStaticProps: GetStaticProps < Props> = async () => {}
  try {};
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');'
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
    return {}
      props: {}

type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json'),
    const raw = fs.readFileSync($2);
    const data = JSON.parse($2);
    return {
      props: {
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
      revalidate: 7200}
  } catch {
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200}
  }
},


        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},

        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
>>>>>>> origin/cursor/delete-old-data-records-6bba
      revalidate: 7200}
  } catch {;
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
<<<<<<< HEAD



};



}
};

export default function TechRadar({ pypi, crates, github }: Props) {
export default function TechRadar({ pypi, crates, github }: Props) {;

  const langs = Object.keys(github);

=======
  const langs = Object.keys(github);
import path from 'path';
import type { GetStaticProps } from 'next';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import fs from 'fs',
import fs from 'fs';
import fs from 'fs';;
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },

type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json'),
    const raw = fs.readFileSync($2);
    const data = JSON.parse($2);
    return {
      props: {
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
      revalidate: 7200}
  } catch {
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200}
  }
},

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys($2);
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Radar</h1>
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>

<<<<<<< HEAD
=======
type Item = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="space-y-8">"
      <header className="space-y-2">"
        <h1 className="text-3xl font-bold">Tech Radar</h1>"
        <p className="text-gray-600 "dark":text-gray-300">Trending packages and projects across ecosystems.</p>"
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>"
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map((it, i) => ("
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">"
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>'
              {typeof it.downloads === 'number' && ("
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>

  return (
    <div className=\"space-y-8\"    />"
      <header className=\"space-y-2\"    />"
        <h1 className=\"text-3xl font-bold\"    />Tech Radar</h1>"
        <p className=\"text-gray-600 dark:text-gray-300\"    />Trending packages and projects across ecosystems.</p>
      </header>
      <section    />"
        <h2 className=\"font-semibold text-lg mb-3\"    />PyPI (30 days)</h2>"
        <ul className=\"grid md:grid-cols-2 gap-3\"    />
          {pypi.map((it, i) => (}"
            <li key={i} className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\"    />"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark:text-cyan-400\"    />{it.name}</a>
              {typeof it.downloads === 'number' && (}"
                <div className=\"text-xs text-gray-500\"    />Downloads: {it.downloads.toLocaleString()}</div>
};
export default function TechRadar(): any ({ pypi, crates, github }: Props) {;
  const langs = Object && Object.keys(github);
  return (
    <div className="space-y-8">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </li>
          )
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </ul>;
      </section>;


<<<<<<< HEAD
=======
;
export const getStaticProps: GetStaticProps<Props>  = async () => {}
type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] } },export const getStaticProps: GetStaticProps < Props> = async () => {try {const file = path.join (process.cwd (), 'publicautomationtech - radar.json')const raw = fs.readFileSync (file, 'utf8')const data = JSON.parse (raw)return {props: {revalidate: 7200}
  } catch {return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
  const langs  = Object.keys(github)import fs from 'fs',import path from 'path';
import type { GetStaticProps } from 'next';
type Item = any;return (<div className="space-y-8">;
      <header className="space-y-2">;
        <h1 className="text-3xl font-bold">Tech Radar</h1>;
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>;
      </header>;
      <section>;
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {pypi && pypi.map((it, i) => (;
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
              {typeof it && it.downloads === 'number' && (;
                <div className="text-xs text-gray-500">Downloads: {it && it.downloads.toLocaleString()}</div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <section>;
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {pypi.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>;
              {typeof it.downloads === 'number' && (<div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>;
              )}
            </li>;
          ))}</ul>;
      </section>;<section>;

            </li>;
          ))}
        </ul>;
      </section>;{langs && langs.map((lang) => (<section key={lang}>;
<<<<<<< HEAD
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid-cols-2 gap-3">;
            {(github[lang] || []).map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
                <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
                {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
      <section>;"
        <h2 className="font-semibold text-lg mb-3">crates && crates.io</h2>;"
        <ul className="grid md:grid-cols-2 gap-3">;
          {crates && crates.map((it, i) => (;"
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;"
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;"
              {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
            </li>;
          ))}
        </ul>;
      </section>;

      <section    />;"
        <h2 className=\"font-semibold text-lg mb-3\"    />PyPI (30 days)</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\"    />;"
          {pypi.map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\"    />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\"    />{it.nam}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text-xs text-gray-500\"    />Downloads: {it.downloads.toLocaleString(}

}</div>;
              )}
            </li>;
          ))}</ul>;
      </section>;<section    />;"
        <h2 className=\"font-semibold text-lg mb-3\"    />crates && crates.io</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\"    />;"
          {crates && crates.map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\"    />;"
              <a href={it && it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\"    />{it && it.nam}
}</a>;"
              {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\"    />{it && it.description}</div
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
            </li>;
          ))}
        </ul>;

}
              </li>;))}
          </ul>;
        </section>;
      ))}
}

export default /**;
 * TechRadar - Function description;
 */;
<<<<<<< HEAD

      {langs && langs.map((lang) => (;
        <section key={lang}>;
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid-cols-2 gap-3">;
            {(github[lang] || []).map((it, i) => (;
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
                <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
                {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
              </li>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      </header>;
      <section>;
        <h2 className="font - semibold text-lg mb-3">PyPI (30 days)</h2>;"
        <ul className="grid "md":grid - cols-2 gap-3">;"
          {pypi.map ((it, i) => (<li key={i} className="p - 4 rounded - lg border border - gray - 200 "dark":border-gray-800">;"
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 "dark": text-cyan-400">{it.nam,"
}</a>;
              {typeof it.downloads === 'number' && (<div className="text - xs text-gray-500">"Downloads": {it.downloads.toLocaleString ()}</div>)}"
            </li>)
}
        </ul>;
      </section>;
      <section>;
        <h2 className="font - semibold text-lg mb-3">crates.io</h2>;
        <ul className="grid md:grid - cols-2 gap-3">;
          {crates.map ((it, i) => (<li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border-gray-800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text-cyan-400">{it.name}</a>;
              {it.description && <div className="text - sm text - gray - 600 dark:text-gray-300">{it.description}</div>}
      </header>;
      <section />;"
        <h2 className=\"font - semibold text-lg mb-3\" />PyPI (30 days)</h2>;}"
        <ul className=\"grid md:grid - cols-2 gap-3\" />;}"
          {pypi.map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam;}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text - xs text-gray-500\" />Downloads: {it.downloads.toLocaleString ();}</div>)}
            </li>)
}
        </ul>;
      </section>;
      <section>;
        <h2 className="font - semibold text-lg mb-3">crates.io</h2>;
        <ul className="grid md:grid - cols-2 gap-3">;
          {crates.map ((it, i) => (
            <li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border-gray-800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text-cyan-400">{it.name}</a>;
              {it.description && <div className="text - sm text - gray - 600 dark:text-gray-300">{it.description}</div>}
            </li>))}
        </ul>;
      </section>;
      {langs.map ((lang) => (
        <section key={lang}>;
          <h2 className="font - semibold text-lg mb-3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid - cols-2 gap-3">;
            {(github[lang] || []).map ((it, i) => (
              <li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border-gray-800">;
                <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text-cyan-400">{it.name}</a>;
                {it.description && <div className="text - sm text - gray - 600 dark:text-gray-300">{it.description}</div>}
              </li>))}
      <section />;"
        <h2 className=\"font - semibold text-lg mb-3\ />crates.io</h2>;
        <ul className=\"grid md:grid - cols-2 gap-3\" />;
          {crates.map ((it, i) => (<li key={i} className=\p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />;"
              <a href={it.url} target=\_blank\ rel=\"noreferrer\" className=\font - medium text - blue - 600 dark: text-cyan-400\ />{it.nam;}
}</a>;"
              {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\" />{it.description;}</div>}
            </li>)

        </ul>
      </section>
            </li>))}
        </ul>;
      </section>;
      {langs.map ((lang) => (<section key={lang}>;
          <h2 className="font - semibold text-lg mb-3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid - cols-2 gap-3">;
            {(github[lang] || []).map ((it, i) => (<li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border-gray-800">;
                <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text-cyan-400">{it.name}</a>;
                {it.description && <div className="text - sm text - gray - 600 dark:text-gray-300">{it.description}</div>}
              </li>))}
<<<<<<< HEAD

=======
function TechRadar() {const langs = Object.keys (github;"
  return (<div className=\"space-y-8\"    />;"
      <header className=\"space-y-2\"    />;"
        <h1 className=\"text-3xl font-bold\"    />Tech Radar</h1>;"
        <p className=\"text - gray - 600 dark:text-gray-300\"    />Trending packages and projects across ecosystems.</p>;
      </header>;
      <section    />;"
        <h2 className=\"font - semibold text-lg mb-3\"    />PyPI (30 days)</h2>;}"
        <ul className=\"grid md:grid - cols-2 gap-3\"    />;}"
          {pypi.map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\"    />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\"    />{it.nam}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text - xs text-gray-500\"    />Downloads: {it.downloads.toLocaleString ()}</div>)}
            </li>)
}
        </ul>;
      </section>;
      <section    />;"
        <h2 className=\"font - semibold text-lg mb-3\"    />crates.io</h2>;"
        <ul className=\"grid md:grid - cols-2 gap-3\"    />;"
          {crates.map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\"    />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\"    />{it.nam}
}</a>;"
              {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\"    />{it.description}</div>}
            </li>)
}
        </ul>;
      </section>;
      {langs.map ((lang) => (<section key={lang}    />;"
          <h2 className=\"font - semibold text-lg mb-3\"    />GitHub Trending: {lan}
}</h2>;"
          <ul className=\"grid md:grid - cols-2 gap-3\"    />;"
            {(github[lang] || []).map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\"    />;"
                <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\"    />{it.nam}
}</a>;"
                {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\"    />{it.description}</div>}
              </li>)
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </ul>;
        </section>))}

    </div>);
  }
},

export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys(github)
  return (
    <div className=&quot;space-y-8&quot;>
      <header className=&quot;space-y-2&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Tech Radar</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Trending packages and projects across ecosystems.</p>
      </header>

      <section>
        <h2 className=&quot;font-semibold text-lg mb-3&quot;>PyPI (30 days)</h2>
        <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
          {pypi.map((it, i) => (
            <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className=&quot;text-xs text-gray-500&quot;>Downloads: {it.downloads.toLocaleString()}</div>
    </div>

  );
}

            </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD
=======
    </div>)</div>;
)})}
  );
}

    </div>)</div>;
)})}
      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {crates.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
            </li>
          ))}
        </ul>
      </section>
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] |[]).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>

<<<<<<< HEAD
=======
      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] || []).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}

    </div>
);
}
<<<<<<< HEAD
  );
}

    </div>

  )
}





=======

    </div>
  )
}

          </ul>
        </section>))}

    </div>)
    </div>
);
}

    </div>);
    </div>
);
}


"
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
