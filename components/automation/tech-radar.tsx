<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = any;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


}
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } }
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {;
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return {
      props: {
<<<<<<< HEAD
        pypi: data.ecosystems.pypi |[]
        crates: data.ecosystems.crates |[]
        github: data.ecosystems.github |{}}
=======
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      revalidate: 7200}
  } catch {
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function TechRadar({ pypi, crates, github }: Props) {
=======
export default function TechRadar({ pypi, crates, github }: Props) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
            </li>
          ))}
        </ul>
      </section>
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
      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] |[]).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD


};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
