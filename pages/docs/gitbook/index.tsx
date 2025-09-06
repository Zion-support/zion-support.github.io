

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function list(dir: string, baseDir: string) {


  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
<<<<<<< HEAD

}
export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : []

  return { props: { sections }, revalidate: 600 }
<<<<<<< HEAD



=======
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
                    {it.rel}
<<<<<<< HEAD



                  </a>


=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD

=======
=======
  );
};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                    {it.rel  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Link>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

}
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
