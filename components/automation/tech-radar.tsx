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
  }
};

export default function TechRadar(_{_pypi, _crates, _github}: Props) {_const _langs = Object.keys(github);
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Tech Radar</h1>
        <p className="text-gray-600 dark:text-gray-300">Trending packages and projects across ecosystems.</p>
      </header>

      <section>
        <h2 className="font-semibold text-lg mb-3">PyPI (30 days)</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {pypi.map(_(it, _i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
              {_typeof it.downloads === 'number' && (
                <div className="text-xs text-gray-500">Downloads: {it.downloads.toLocaleString()}</div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {_crates.map(_(it, _i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
              {_it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
            </li>
          ))}
        </ul>
      </section>

      {_langs.map(_(lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {_lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {_(github[lang] || []).map(_(it, _i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={_it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{_it.name}</a>
                {_it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}