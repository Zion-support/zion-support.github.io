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
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }  }
},

export default function TechRadar({ pypi, crates, github }: Props) {
  const langs = Object.keys(github),  return (
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
              <a href={it.url} target=&quot;blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {typeof it.downloads === 'number' && (
                <div className=&quot;text-xs text-gray-500&quot;>Downloads: {it.downloads.toLocaleString()}</div>              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className=&quot;font-semibold text-lg mb-3&quot;>crates.io</h2>
        <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
          {crates.map((it, i) => (
            <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
              <a href={it.url} target=&quot;blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}            </li>
          ))}
        </ul>
      </section>

      {langs.map(_(lang) => (
        <section key={lang}>
          <h2 className=&quot;font-semibold text-lg mb-3&quot;>GitHub Trending: {lang}</h2>
          <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
            {(github[lang] || []).map((it, i) => (
              <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
                <a href={it.url} target=&quot;blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
                {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}