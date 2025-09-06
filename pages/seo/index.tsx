<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
    <div>;
      <h1 className="text - 2xl font - semibold mb - 4">SEO Landing Pages</h1>;
      {slugs.length === 0 ? (

=======
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="text - sm text - gray - 500">Generated pages will appear once deployed.</div>) : (
        <ul className="list - disc ml - 5">;
          {slugs.map ((s) => (
            <li key={s}><a className="text - cyan - 600" href={`/seo/${s}`}>{s}</a></li>))}
        </ul>)}
    </div>);
<<<<<<< HEAD
=======
=======
import React from 'react';
export default function SEOIndex() {
<<<<<<< HEAD

  const [slugs, setSlugs] = React.useState<string[]>([])
  React.useEffect(() => {
    // In a real app, list from API or build-time, here we rely on directory hint not available at runtime.
    setSlugs([])
  }, [])

=======
  const [slugs, setSlugs] = React.useState<string[]>([]),
  React.useEffect(() => {
    // In a real app, list from API or build-time, here we rely on directory hint not available at runtime.
    setSlugs([])
  }, []),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">SEO Landing Pages</h1>
      {slugs.length === 0 ? (
        <div className="text-sm text-gray-500">Generated pages will appear once deployed.</div>
      ) : (
        <ul className="list-disc ml-5">
          {slugs.map((s) => (
<<<<<<< HEAD
            <li key={s}><a className="text-cyan-600" href={`/seo/${s}`}>{s}</a></li>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ))}
        </ul>
      )}
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  );
};

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            <li key={s}><a className="text-cyan-600" href={`/seo/${s}`}>{s}</Link></li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
