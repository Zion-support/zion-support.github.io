
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;


function list(dir: string, baseDir: string) {


import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;
function list(dir: string, baseDir: string) {
  const items = fs.readdirSync(dir)
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })


  return { props: { sections }, revalidate: 600 }=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======                    {it.rel}



=======}

=======

=======
}

=======                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
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

}

=======
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

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
