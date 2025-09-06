<<<<<<< HEAD


 


=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number };
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const getStaticProps: GetStaticProps<Props> = async () => {
;
}
type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] } },
export const getStaticProps: GetStaticProps < Props> = async () => {
  try {
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json');
    const raw = fs.readFileSync (file, 'utf8');
    const data = JSON.parse (raw);
<<<<<<< HEAD
    return {
      props: {

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    return {
      props: {
<<<<<<< HEAD
        pypi: data.ecosystems.pypi |[]
        crates: data.ecosystems.crates |[]
        github: data.ecosystems.github |{}}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      revalidate: 7200}
  } catch {;
    return { props: { pypi: [], crates: [], github: {} }, revalidate: 7200 }
  }
<<<<<<< HEAD
<<<<<<< HEAD

export default function TechRadar({ pypi, crates, github }: Props) {

export default function TechRadar({ pypi, crates, github }: Props) {;
=======


};


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
<<<<<<< HEAD
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

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </li>;
          ))}

=======
              )}
            </li>;
          ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </ul>;
      </section>;
      <section>;
        <h2 className="font-semibold text-lg mb-3">crates && crates.io</h2>;
        <ul className="grid md:grid-cols-2 gap-3">;
          {crates && crates.map((it, i) => (;
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">;
              <a href={it && it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it && it.name}</a>;
              {it && it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it && it.description}</div>}
            </li>;
          ))}
        </ul>;
      </section>;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ))}
          </ul>;
        </section>;
      ))}
<<<<<<< HEAD

    </div>;
  );
}

=======
=======
    </div>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      </header>;
      <section>;
        <h2 className="font - semibold text - lg mb - 3">PyPI (30 days)</h2>;
        <ul className="grid md:grid - cols - 2 gap - 3">;
          {pypi.map ((it, i) => (
            <li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text - cyan - 400">{it.name}</a>;
              {typeof it.downloads === 'number' && (
                <div className="text - xs text - gray - 500">Downloads: {it.downloads.toLocaleString ()}</div>)}
            </li>))}
        </ul>;
      </section>;
      <section>;
        <h2 className="font - semibold text - lg mb - 3">crates.io</h2>;
        <ul className="grid md:grid - cols - 2 gap - 3">;
          {crates.map ((it, i) => (
            <li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800">;
              <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text - cyan - 400">{it.name}</a>;
              {it.description && <div className="text - sm text - gray - 600 dark:text - gray - 300">{it.description}</div>}
            </li>))}
        </ul>;
      </section>;
      {langs.map ((lang) => (
        <section key={lang}>;
          <h2 className="font - semibold text - lg mb - 3">GitHub Trending: {lang}</h2>;
          <ul className="grid md:grid - cols - 2 gap - 3">;
            {(github[lang] || []).map ((it, i) => (
              <li key={i} className="p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800">;
                <a href={it.url} target="_blank" rel="noreferrer" className="font - medium text - blue - 600 dark:text - cyan - 400">{it.name}</a>;
                {it.description && <div className="text - sm text - gray - 600 dark:text - gray - 300">{it.description}</div>}
              </li>))}
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
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </div>

  );
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              )}
            </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD

      <section>
        <h2 className=&quot;font-semibold text-lg mb-3&quot;>crates.io</h2>
        <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
          {crates.map((it, i) => (
            <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
              <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
              {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}
=======
      <section>
        <h2 className="font-semibold text-lg mb-3">crates.io</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {crates.map((it, i) => (
            <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
              {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD

      {_langs.map(_(lang) => (
        <section key={lang}>
          <h2 className=&quot;font-semibold text-lg mb-3&quot;>GitHub Trending: {lang}</h2>
          <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
            {(github[lang] || []).map((it, i) => (
              <li key={i} className=&quot;p-4 rounded-lg border border-gray-200 dark:border-gray-800&quot;>
                <a href={it.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;font-medium text-blue-600 dark:text-cyan-400&quot;>{it.name}</a>
                {it.description && <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{it.description}</div>}
=======
      {langs.map((lang) => (
        <section key={lang}>
          <h2 className="font-semibold text-lg mb-3">GitHub Trending: {lang}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {(github[lang] |[]).map((it, i) => (
              <li key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <a href={it.url} target="_blank" rel="noreferrer" className="font-medium text-blue-600 dark:text-cyan-400">{it.name}</a>
                {it.description && <div className="text-sm text-gray-600 dark:text-gray-300">{it.description}</div>}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
<<<<<<< HEAD
  )

}
=======
<<<<<<< HEAD
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
