<<<<<<< HEAD

<<<<<<< HEAD
=======

import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function list(dir: string, baseDir: string) {


=======
<<<<<<< HEAD
const items = fs.readdirSync(dir);
=======
<<<<<<< HEAD
<<<<<<< HEAD

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
=======
import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function list(dir: string, baseDir: string) {
  const items = fs.readdirSync(dir)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
}
export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : []
  return { props: { sections }, revalidate: 600 }
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
function list(dir: string, baseDir: string) {;
  const items = fs.readdirSync(dir);
  return items.map((name) => {;
    const full = path.join(dir, name);
    const rel = path.relative(baseDir, full);
    const stat = fs.statSync(full);
    return { name, rel, isDir: stat.isDirectory()   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
  });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function getStaticProps() {;
  const base = path.join(process.cwd(), 'docs/gitbook'),;
  const sections = fs.existsSync(base);
    ? list(base, base).map((entry) => ({;
        title: entry.name;
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}));
    : [];
  return { props: { sections }, revalidate: 600   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

}
export default function DocsIndex({ sections }: { sections: { title: string, items: { name: string, rel: string, isDir: boolean }[] }[] }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion Docs (GitBook)</h1>
      <p className="text-gray-600 dark:text-gray-300">Browse the documentation structure. Files link to the repository for now.</p>
      <div className="space-y-4">
        {sections.map((s) => (
          <div key={s.title} className="border rounded p-4">
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {s.items.map((it) => (
                <li key={it.rel}>
                  <a className="underline" href={`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`} target="_blank" rel="noreferrer">

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export default function DocsIndex({ sections }: { sections: { title: string, items: { name: string, rel: string, isDir: boolean }[] }[] }) {
import fs from 'fs',
import path from 'path',
import Link from 'next / link',
/**
 * list - Function description
 */
function list() {
  const items = fs.readdir_sync (dir),
  return items.map ((name) => {
    const full = path.join (dir, name),
    const rel = path.relative (base_dir, full),
    const stat = fs.stat_sync (full),
    return { name, rel, is_dir: stat.is_directory () }
  });
}
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  const base = path.join (process.cwd (), 'docs / gitbook'),
  const sections = fs.exists_sync (base);
    ? list (base, base).map ((entry) => ({
        title: entry.name,
        items: entry.is_dir ? list (path.join (base, entry.name), base) : []}));
    : [],
  return { props: { sections }, revalidate: 600 }
}
export default /**
 * DocsIndex - Function description
 */
function DocsIndex() {
  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space - y-6">;
      <h1 className="text - 3xl font - bold">Zion Docs (GitBook)</h1>;
      <p className="text - gray - 600 dark:text - gray - 300">Browse the documentation structure. Files link to the repository for now.</p>;
      <div className="space - y-4">;
        {sections.map ((s) => (
          <div key={s.title} className="border rounded p - 4">;
            <h2 className="font - semibold mb - 2">{s.title}</h2>;
            <ul className="list - disc pl - 5 space - y-1">;
              {s.items.map ((it) => (
                <li key={it.rel}>;
                  <a className="underline" href={`https://github.com / Zion - Holdings / zion.app / blob / main / docs / gitbook/${it.rel}`} target="_blank" rel="noreferrer">;
<<<<<<< HEAD

                    {it.rel}



=======
                    {it.rel}
}
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
=======
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion Docs (GitBook)</h1>
      <p className="text-gray-600 dark:text-gray-300">Browse the documentation structure. Files link to the repository for now.</p>
      <div className="space-y-4">
        {sections.map((s) => (
          <div key={s.title} className="border rounded p-4">
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {s.items.map((it) => (
                <li key={it.rel}>
                  <a className="underline" href={`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`} target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    {it.rel}
                  </a>
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD

=======
}

=======
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {it.rel  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Link>

                </li>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>;
          </div>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  )

}
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                    {it.rel  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Link>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                </li>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>;
          </div>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
