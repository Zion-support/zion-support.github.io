
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

 


=======

import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = { source: string, name: string, url: string, description?: string, downloads?: number };
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
 

 


}
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] } }
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {;
    const file = path.join(process.cwd(), 'publicautomationtech-radar.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return {
      props: {
        pypi: data.ecosystems.pypi |[]
        crates: data.ecosystems.crates |[]
        github: data.ecosystems.github |{}}
<<<<<<< HEAD
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
=======
        pypi: data.ecosystems.pypi || [],
        crates: data.ecosystems.crates || [],
        github: data.ecosystems.github || {}},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
}
};



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              )}
            </li>;
          ))}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </li>;
          ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </li>
          ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

            ))}
          </ul>
        </section>
      ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>
);
}
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    </div>

  );
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
