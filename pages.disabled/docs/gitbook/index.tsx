:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD:pages/docs/gitbook/index.tsx
<<<<<<< HEAD

<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import fs from 'fs',;'
import path from 'path',;'
import Link from 'next/link',;

:pages_backup/docs/gitbook/index.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function list(dir: string, baseDir: string) {
  const items = fs.readdirSync(dir)

  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({}
        title: entry.name;
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : []

:pages_backup/docs/gitbook/index.tsx
return { props: { sections }, revalidate: 600 }
<<<<<<< HEAD:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return { props: { sections }, revalidate: 600 }

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
  const items = fs.readdirSync(dir);
  return items.map(name => {
    const full = path.join(dir, name);
    const rel = path.relative(baseDir, full);
    const stat = fs.statSync(full);
    return { name, rel, isDir: stat.isDirectory() };
  });

export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')
  const sections = fs.existsSync(base)
? list(base, base).map(entry => ({
        title: entry.name,
        items: entry.isDir ? list(path.join(base, entry.name), base) : [],
      }))
    : [];
  return { props: { sections }, revalidate: 600 };

export default function DocsIndex({
  sections,
}: {
  sections: {
    title: string;
    items: { name: string; rel: string; isDir: boolean }[];
  }[];
}) {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Zion Docs (GitBook)</h1>
      <p className='text-gray-600 dark:text-gray-300'>
        Browse the documentation structure. Files link to the repository for
        now.
      </p>
      <div className='space-y-4'>
        {sections.map(s => (
          <div key={s.title} className='border rounded p-4'>
            <h2 className='font-semibold mb-2'>{s.title}</h2>
            <ul className='list-disc pl-5 space-y-1'>
              {s.items.map(it => (
                <li key={it.rel}>
                  <a
                    className='underline'
                    href={`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`}
                    target='_blank'
                    rel='noreferrer'
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
  return { props: { sections }, revalidate: 600 }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import fs from 'fs';
import path from 'path';
=======
'
import fs from 'fs';'
import path from 'path';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
import Link from 'next/link';
function list() { return null; }
    return { name, rel, isDir: stat.isDirectory()   } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
}
  });
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function getStaticProps() { return null; }
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}));
    : [];
  return { props: { sections }, revalidate: 600   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    {it.rel}
                  </a>
}
export default function DocsIndex() { return null; }
function list() {}
  const items = fs.readdir_sync (dir),
  return items.map ((name) => {}
    const full = path.join (dir, name),
    const rel = path.relative (base_dir, full),
    const stat = fs.stat_sync (full),
    return { name, rel, is_dir: stat.is_directory () }
  });
}
export async /**;
 * getStaticProps - Function description;
 */
function getStaticProps() { return null; }
    ? list (base, base).map ((entry) => ({}
        title: entry.name,
        items: entry.is_dir ? list (path.join (base, entry.name), base) : []}));
    : [],
  return { props: { sections }, revalidate: 600 }
}
export default /**;
 * DocsIndex - Function description;
 */
function DocsIndex() {}
  return (
"
    <div className="space - y-6">;"
      <h1 className="text - 3xl font - bold">Zion Docs (GitBook)</h1>;"
      <p className="text - gray - 600 dark:text - gray - 300">Browse the documentation structure. Files link to the repository for now.</p>;"
      <div className="space - y-4">;
        {sections.map ((s) => ("
          <div key={s.title} className="border rounded p - 4">;"
            <h2 className="font - semibold mb - 2">{s.title}</h2>;"
            <ul className="list - disc pl - 5 space - y-1">;
              {s.items.map ((it) => (
                <li key={it.rel}>;"
                  <a className="underline" href={`https://github.com / Zion - Holdings / zion.app / blob / main / docs / gitbook/${it.rel}`} target="_blank" rel="noreferrer">;

                    {it.rel}

:pages_backup/docs/gitbook/index.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

                    {it.rel}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD:pages/docs/gitbook/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
=======

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
:pages_backup/docs/gitbook/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
};

:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD:pages_backup/docs/gitbook/index.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
                    {it.rel  } catch (error) {
    console.error("Error:", error);
=======
                    {it.rel  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Link>
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
                </li>
              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>;
          </div>;
        ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/docs/gitbook/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD

:pages_backup/docs/gitbook/index.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/docs/gitbook/index.tsx
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/docs/gitbook/index.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}

);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/docs/gitbook/index.tsx
