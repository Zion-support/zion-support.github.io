import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;


import fs from 'fs',;
import path from 'path',;
import Link from 'next/link',;


function list(dir: string, baseDir: string) {
  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : []

  return { props: { sections }, revalidate: 600 }


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
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
  );
};

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
