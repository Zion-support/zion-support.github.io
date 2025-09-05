<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
import type { GetStaticProps } from 'next',
type Item = { source: string, name: string, url: string, description?: string, downloads?: number },

type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json'),
    const raw = fs.readFileSync(file, 'utf8'),
    const data = JSON.parse(raw),
    return {
      props: {
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
      revalidate: 7200}
  } catch {
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
=======
import fs from 'fs';
import path from 'path';
import type {_GetStaticProps} from 'next';

type Item = {_source: string; name: string; url: string; description?: string; downloads?: number};

type Props = {_pypi: Item[]; crates: Item[]; github: { [k: string]: Item[]} };

export const getStaticProps: GetStaticProps<Props> = async () => {_try {
    const _file = path.join(process.cwd(), _'public', _'automation', _'tech-radar.json');
    const _raw = fs.readFileSync(file, _'utf8');
    const _data = JSON.parse(raw);
    return {
      props: {
        pypi: data.ecosystems.pypi || [], _crates: data.ecosystems.crates || [], _github: data.ecosystems.github || {}},
      revalidate: 7200};
  } catch {_return { props: { pypi: [], _crates: [], _github: {} }, revalidate: 7200 };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},

<<<<<<< HEAD
export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys(github),
=======
export default function TechRadar(_{_pypi, _crates, _github}: Props) {_const _langs = Object.keys(github);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <div className=&quot;space-y-8&quot;>
      <header className=&quot;space-y-2&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Tech Radar</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Trending packages and projects across ecosystems.</p>
      </header>

      <section>
<<<<<<< HEAD
        <h2 className=&quot;font-semibold text-lg mb-3&quot;>PyPI (30 days)</h2>
        <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
          {pypi.map((it, i) => (
            <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className=&quot;text-xs text-gray-500&quot;>Downloads: {it.downloads.toLocaleString()}</div>
=======
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map(_(it, _i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
              {_typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
<<<<<<< HEAD
        <h2 className=&quot;font-semibold text-lg mb-3&quot;>crates.io</h2>
        <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
          {crates.map((it, i) => (
            <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}
=======
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {_crates.map(_(it, _i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
              {_it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </li>
          ))}
        </ul>
      </section>

      {_langs.map(_(lang) => (
        <section key={lang}>
<<<<<<< HEAD
          <h2 className=&quot;font-semibold text-lg mb-3&quot;>GitHub Trending: {lang}</h2>
          <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
            {(github[lang] || []).map((it, i) => (
              <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
                <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
                {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}
=======
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {_lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {_(github[lang] || []).map(_(it, _i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
                {_it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}