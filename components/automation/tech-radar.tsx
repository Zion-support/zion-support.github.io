import fs from 'fs';,
<<<<<<< HEAD
import fs from 'fs',


export const getStaticProps: GetStaticProps<Props> = async () => {
;
}
type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] } },
export const getStaticProps: GetStaticProps < Props> = async () => {}
  try {};
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');'
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
    return {}
      props: {}
      revalidate: 7200}
  } catch {;
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
  const langs = Object.keys(github);
=======
import path from 'path';
<<<<<<< HEAD
import type { GetStaticProps,
  from 'next';
=======
import type { GetStaticProps } from 'next';
>>>>>>> origin/chore/fix-lint-and-merge

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

export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys($2);
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Radar</h1>
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>
type Item = any;
<<<<<<< HEAD
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



import path from 'path';
import type { GetStaticProps } from next;
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },

>>>>>>> origin/main

type Item = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

=======
  return (
    <div className=\"space-y-8\"    />"
      <header className=\"space-y-2\"    />"
        <h1 className=\"text-3xl font-bold\"    />Tech Radar</h1>"
        <p className=\"text-gray-600 dark:text-gray-300\"    />Trending packages and projects across ecosystems.</p>
      </header>
<<<<<<< HEAD
      <section />"
        <h2 className=\"font-semibold text-lg mb-3\" />PyPI (30 days)</h2>"
        <ul className=\"grid md:grid-cols-2 gap-3\" />
          {pypi.map((it,,,
  i) => (}"
            <li key={i}
            className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\" />"
              <a href={it.url target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark:text-cyan-400\" />{it.name</a>
              {typeof it.downloads === 'number' && ("
                <div className=\"text-xs text-gray-500\" />Downloads: {it.downloads.toLocaleString()}</div>
=======
      <section    />"
        <h2 className=\"font-semibold text-lg mb-3\"    />PyPI (30 days)</h2>"
        <ul className=\"grid md:grid-cols-2 gap-3\"    />
          {pypi.map((it, i) => (}"
            <li key={i} className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\"    />"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark:text-cyan-400\"    />{it.name}</a>
              {typeof it.downloads === 'number' && (}"
                <div className=\"text-xs text-gray-500\"    />Downloads: {it.downloads.toLocaleString()}</div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
              )}
            </li>
          )
}

        </ul>;
      </section>;

<<<<<<< HEAD
      <section />;"
        <h2 className=\"font-semibold text-lg mb-3\" />PyPI (30 days)</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\" />;"
          {pypi.map((it,,,
  i) => (
          <li key={i}
            className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\" />
            "
              <a href={it.url target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\" />{it.nam
</a>;"
              {typeof it.downloads === 'number' && (
          <div className=\"text-xs text-gray-500\" />Downloads: {it.downloads.toLocaleString(}
}</div>;,,
   )}
            </li>;
          ))}</ul>;
      </section>;<section />;"
        <h2 className=\"font-semibold text-lg mb-3\" />crates && crates.io</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\" />;"
          {crates && crates.map((it,,,
  i) => (
          <li key={i}
            className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\" />
            "
              <a href={it && it.url target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\" />{it && it.nam
</a>;"
              {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\" />{it && it.description}</div
=======

<<<<<<< HEAD
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
          {pypi.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>;
              {typeof it.downloads === 'number' && (<div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>;
              )}
            </li>;
          ))}</ul>;
      </section>;<section>;
        <h2 className="font-semibold text-lg mb-3">crates && crates.io</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {crates && crates.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
              {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
            </li>;
          ))}
        </ul>;
      </section>;{langs && langs.map((lang) => (<section key={lang}>;
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

      <section />;"
        <h2 className=\"font-semibold text-lg mb-3\" />PyPI (30 days)</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\" />;"
          {pypi.map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\" />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\" />{it.nam;}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text-xs text-gray-500\" />Downloads: {it.downloads.toLocaleString(;}
=======
      <section    />;"
        <h2 className=\"font-semibold text-lg mb-3\"    />PyPI (30 days)</h2>;"
        <ul className=\"grid md:grid-cols-2 gap-3\"    />;"
          {pypi.map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\"    />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\"    />{it.nam}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text-xs text-gray-500\"    />Downloads: {it.downloads.toLocaleString(}
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> origin/main
}
            </li>;
          ))}
        </ul>;
<<<<<<< HEAD
      </section>;{langs && langs.map((lang) => (
          <section key={lang} />;"
          <h2 className=\"font-semibold text-lg mb-3\" />GitHub Trending: {lan}
}</h2>;"
          <ul className=\"grid md:grid-cols-2 gap-3\" />;"
            {(github[lang] || []).map((it,,,
  i) => (
          <li key={i}
            className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\" />
            "
                <a href={it && it.url target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\" />{it && it.nam
</a>;"
                {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\" />{it && it.description}</div
=======
      </section>;{langs && langs.map((lang) => (<section key={lang}    />;"
          <h2 className=\"font-semibold text-lg mb-3\"    />GitHub Trending: {lan}
}</h2>;"
          <ul className=\"grid md:grid-cols-2 gap-3\"    />;"
            {(github[lang] || []).map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\"    />;"
                <a href={it && it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\"    />{it && it.nam}
}</a>;"
                {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\"    />{it && it.description}</div
>>>>>>> origin/main
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
function TechRadar() {const langs = Object.keys (github;"
  return (
    <div className=\"space-y-8\" />;"
      <header className=\"space-y-2\" />;"
        <h1 className=\"text-3xl font-bold\" />Tech Radar</h1>;"
        <p className=\"text - gray - 600 dark:text-gray-300\" />Trending packages and projects across ecosystems.</p>;
=======
<<<<<<< HEAD
function TechRadar() {const langs = Object.keys (github)return (<div className="space-y-8">;
      <header className="space-y-2">;
        <h1 className="text-3xl font-bold">Tech Radar</h1>;
        <p className="text - gray - 600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>;
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
>>>>>>> origin/main
      </header>;
      <section />;"
        <h2 className=\"font - semibold text-lg mb-3\" />PyPI (30 days)</h2>;}"
        <ul className=\"grid md:grid - cols-2 gap-3\" />;}"
<<<<<<< HEAD
          {pypi.map ((it, i) => (
          <li key={i}
            className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />
            "
              <a href={it.url target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam
</a>;"
              {typeof it.downloads === 'number' && (
          <div className=\"text - xs text-gray-500\" />Downloads: {it.downloads.toLocaleString ()}</div>)}
=======
          {pypi.map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam;}
}</a>;"
              {typeof it.downloads === 'number' && (<div className=\"text - xs text-gray-500\" />Downloads: {it.downloads.toLocaleString ();}</div>)}
>>>>>>> origin/main
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
<<<<<<< HEAD
        <h2 className=\"font - semibold text-lg mb-3\" />crates.io</h2>;"
        <ul className=\"grid md:grid - cols-2 gap-3\" />;"
          {crates.map ((it, i) => (
          <li key={i}
            className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />
            "
              <a href={it.url target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam
</a>;"
              {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\" />{it.description}</div>}
=======
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
>>>>>>> origin/main
            </li>)
}
        </ul>;
      </section>;
<<<<<<< HEAD
      {langs.map ((lang) => (
          <section key={lang} />;"
          <h2 className=\"font - semibold text-lg mb-3\" />GitHub Trending: {lan}
}</h2>;"
          <ul className=\"grid md:grid - cols-2 gap-3\" />;"
            {(github[lang] || []).map ((it, i) => (
          <li key={i}
            className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />
            "
                <a href={it.url target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam
</a>;"
                {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\" />{it.description}</div>}
=======
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
>>>>>>> origin/main
              </li>)
}
>>>>>>> origin/chore/fix-lint-and-merge
          </ul>;
        </section>))}

<<<<<<< HEAD
    </div>)</div>;
)})}
      <section>
        <h2 className=font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3>
          {crates.map((it, i) => (
            <li key={i} className=p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank rel=noreferrer" className="font-medium text-blue-600 dark:text-cyan-400>{it.name}</a>
              {it.description && <div className=text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
            </li>
          ))}
        </ul>
      </section>

      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3>GitHub Trending: {lang}</h2>
          <ul className=grid md:grid-cols-2 gap-3">
            {(github[lang] || []).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800>
                <a href={it.url} target=_blank" rel="noreferrer className=font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

          </ul>
        </section>))}

    </div>)
    </div>
);
}
=======
    </div>);
    </div>
);
}

<<<<<<< HEAD
"
=======
>>>>>>> origin/chore/fix-lint-and-merge

"
>>>>>>> origin/main
