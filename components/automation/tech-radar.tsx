<<<<<<< HEAD
import fs from 'fs';,
import fs from 'fs',
=======

<<<<<<< HEAD

import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },
=======
<<<<<<< HEAD
=======

import fs from 'fs';,
<<<<<<< HEAD
import fs from 'fs',


<<<<<<< HEAD
=======
=======

import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number };
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const getStaticProps: GetStaticProps<Props> = async () => {
;
}
type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] } },
<<<<<<< HEAD
export const getStaticProps: GetStaticProps < Props> = async () => {}
  try {};
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');'
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
    return {}
      props: {}
=======
export const getStaticProps: GetStaticProps < Props> = async () => {
  try {
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
<<<<<<< HEAD
 

 
>>>>>>> merged-prs-20250907-203621

type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

<<<<<<< HEAD
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

=======
}
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } }
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {;
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return {
      props: {
        pypi: data.ecosystems.pypi |[]
        crates: data.ecosystems.crates |[]
        github: data.ecosystems.github |{}}
=======
    return {
      props: {

};
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },;
export const getStaticProps: GetStaticProps<Props> = async () => {;
  try {;
    const file = path && path.join(process && process.cwd(), 'publicautomationtech-radar && radar.json');
    const raw = fs && fs.readFileSync(file, 'utf8');
    const data = JSON && JSON.parse(raw);
    return {;
      props: {;
        pypi: data && data.ecosystems.pypi || [],;
        crates: data && data.ecosystems.crates || [],;
        github: data && data.ecosystems.github || {}},;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},

<<<<<<< HEAD
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      revalidate: 7200}
  } catch {;
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
<<<<<<< HEAD
=======


};



}
};

export default function TechRadar({ pypi, crates, github }: Props) {
export default function TechRadar({ pypi, crates, github }: Props) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const langs = Object.keys(github);
=======
import path from 'path';
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

>>>>>>> merged-prs-20250907-203621
export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys($2);
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Radar</h1>
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>
<<<<<<< HEAD
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>
              )}
            </li>
          ))}
        </ul>
      </section>

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


import fs from 'fs','
import path from 'path';'
import type { GetStaticProps } from 'next';'

<<<<<<< HEAD
=======
import path from 'path';
import type { GetStaticProps } from next;
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type Item = any;
return (;
    <div className="space-y-8">"
      <header className="space-y-2">"
        <h1 className="text-3xl font-bold">Tech Radar</h1>"
        <p className="text-gray-600 "dark":text-gray-300">Trending packages and projects across ecosystems.</p>"
      </header>

<<<<<<< HEAD
      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>"
        <ul className="grid "md":grid-cols-2 gap-3">"
          {pypi.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 "dark": border-gray-800">"
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 "dark":text-cyan-400">{it.name}</a>"
              {typeof it.downloads === 'number' && ('
                <div className="text-xs text-gray-500">"Downloads": {it.downloads.toLocaleString()}</div>"
=======
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
export default function TechRadar(): any ({ pypi, crates, github }: Props) {;
  const langs = Object && Object.keys(github);
  return (
    <div className="space-y-8">;
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
<<<<<<< HEAD
              )}
            </li>;
          ))}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              )}
            </li>
          )
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </ul>;
      </section>;
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      <section>;
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>;"
        <ul className="grid "md":grid-cols-2 gap-3">;"
          {pypi.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 "dark":border-gray-800">;"
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 "dark": text-cyan-400">{it.nam,"
}</a>;
              {typeof it.downloads === 'number' && (<div className="text-xs text-gray-500">"Downloads": {it.downloads.toLocaleString(,"
}</div>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <section>;
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {pypi.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>;
              {typeof it.downloads === 'number' && (<div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              )}
            </li>;
          ))}</ul>;
      </section>;<section>;
<<<<<<< HEAD
        <h2 className="font-semibold text-lg mb-3">crates && crates.io</h2>;"
        <ul className="grid "md":grid-cols-2 gap-3">;"
          {crates && crates.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 "dark":border-gray-800">;"
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 "dark": text-cyan-400">{it && it.nam,"
}</a>;
              {it && it.description && <div className="text-sm text-gray-600 "dark": text-gray-300">{it && it.description}</div,"
}
=======
        <h2 className="font-semibold text-lg mb-3">crates && crates.io</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {crates && crates.map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
              {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </li>;
          ))}
        </ul>;
      </section>;{langs && langs.map((lang) => (<section key={lang}>;
<<<<<<< HEAD
          <h2 className="font-semibold text-lg mb-3">GitHub "Trending": {lan,"
}</h2>;
          <ul className="grid "md":grid-cols-2 gap-3">;"
            {(github[lang] || []).map((it, i) => (<li key={i} className="p-4 rounded-lg border border-gray-200 "dark":border-gray-800">;"
                <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 "dark": text-cyan-400">{it && it.nam,"
}</a>;
                {it && it.description && <div className="text-sm text-gray-600 "dark": text-gray-300">{it && it.description}</div,"
=======
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
<<<<<<< HEAD

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
            </li>;
          ))}
        </ul>;
<<<<<<< HEAD
      </section>;{langs && langs.map((lang) => (<section key={lang} />;"
          <h2 className=\"font-semibold text-lg mb-3\" />GitHub Trending: {lan;}
}</h2>;"
          <ul className=\"grid md:grid-cols-2 gap-3\" />;"
            {(github[lang] || []).map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\" />;"
                <a href={it && it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\" />{it && it.nam;}
}</a>;"
                {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\" />{it && it.description;}</div
=======
      </section>;{langs && langs.map((lang) => (<section key={lang}    />;"
          <h2 className=\"font-semibold text-lg mb-3\"    />GitHub Trending: {lan}
}</h2>;"
          <ul className=\"grid md:grid-cols-2 gap-3\"    />;"
            {(github[lang] || []).map((it, i) => (<li key={i} className=\"p-4 rounded-lg border border-gray-200 dark:border-gray-800\"    />;"
                <a href={it && it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font-medium text-blue-600 dark: text-cyan-400\"    />{it && it.nam}
}</a>;"
                {it && it.description && <div className=\"text-sm text-gray-600 dark: text-gray-300\"    />{it && it.description}</div
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
function TechRadar() {const langs = Object.keys (github;
  }
  return (<div className="space-y-8">;"
      <header className="space-y-2">;"
        <h1 className="text-3xl font-bold">Tech Radar</h1>;"
        <p className="text - gray - 600 "dark":text-gray-300">Trending packages and projects across ecosystems.</p>;"
=======
<<<<<<< HEAD
function TechRadar() {const langs = Object.keys (github)return (<div className="space-y-8">;
      <header className="space-y-2">;
        <h1 className="text-3xl font-bold">Tech Radar</h1>;
        <p className="text - gray - 600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>;
=======
      {langs && langs.map((lang) => (;
        <section key={lang}>;
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid-cols-2 gap-3">;
            {(github[lang] || []).map((it, i) => (;
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
                <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
                {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
              </li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}
          </ul>;
        </section>;
      ))}
<<<<<<< HEAD
    </div>;
  );
}
=======

    </div>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
;
export default /**
 * TechRadar - Function description
 */
function TechRadar() {
  const langs = Object.keys (github);
  return (
    <div className="space - y-8">;
      <header className="space - y-2">;
        <h1 className="text - 3xl font - bold">Tech Radar</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Trending packages and projects across ecosystems.</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
        <h2 className="font - semibold text-lg mb-3">crates.io</h2>;"
        <ul className="grid "md":grid - cols-2 gap-3">;"
          {crates.map ((it, i) => (<li key={i} className="p - 4 rounded - lg border border - gray - 200 "dark":border-gray-800">;"
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 "dark": text-cyan-400">{it.nam,"
}</a>;
              {it.description && <div className="text - sm text - gray - 600 "dark": text-gray-300">{it.description}</div>}"
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        <h2 className=\"font - semibold text-lg mb-3\" />crates.io</h2>;"
        <ul className=\"grid md:grid - cols-2 gap-3\" />;"
          {crates.map ((it, i) => (<li key={i} className=\"p - 4 rounded - lg border border - gray - 200 dark:border-gray-800\" />;"
              <a href={it.url} target=\"_blank\" rel=\"noreferrer\" className=\"font - medium text - blue - 600 dark: text-cyan-400\" />{it.nam;}
}</a>;"
              {it.description && <div className=\"text - sm text - gray - 600 dark: text-gray-300\" />{it.description;}</div>}
            </li>)

        </ul>
      </section>
            </li>))}
        </ul>;
      </section>;
      {langs.map ((lang) => (<section key={lang}>;
<<<<<<< HEAD
          <h2 className="font - semibold text-lg mb-3">GitHub "Trending": {lan,"
}</h2>;
          <ul className="grid "md":grid - cols-2 gap-3">;"
            {(github[lang] || []).map ((it, i) => (<li key={i} className="p - 4 rounded - lg border border - gray - 200 "dark":border-gray-800">;"
                <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 "dark": text-cyan-400">{it.nam,"
}</a>;
                {it.description && <div className="text - sm text - gray - 600 "dark": text-gray-300">{it.description}</div>}"
              </li>)
}
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </ul>;
        </section>))}
<<<<<<< HEAD

<<<<<<< HEAD
    </div>)</div>;
)})}
      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {crates.map((it, i) => (
<<<<<<< HEAD
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
=======
            <li key={i} className=p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank rel=noreferrer" className="font-medium text-blue-600 dark:text-cyan-400>{it.name}</a>
              {it.description && <div className=text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
=======
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
<<<<<<< HEAD

};

export default function TechRadar({ pypi, crates, github }: Props) {;
  const langs = Object.keys(github);

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
              )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </li>
          ))}
        </ul>
      </section>
>>>>>>> merged-prs-20250907-203621
      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {crates.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD

      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] || []).map((it, i) => (
<<<<<<< HEAD
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
=======
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800>
                <a href={it.url} target=_blank" rel="noreferrer className=font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
=======
      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] |[]).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}
<<<<<<< HEAD
=======
    </div>
);
}
  );
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>
<<<<<<< HEAD
);
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
=======
  )
}

<<<<<<< HEAD
          </ul>
        </section>))}

    </div>)
    </div>
);
}
<<<<<<< HEAD
=======
=======
    </div>);
    </div>
);
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/chore/fix-lint-and-merge

"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
