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
          ))}
        </ul>
      )}
    </div>
<<<<<<< HEAD
  )
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
