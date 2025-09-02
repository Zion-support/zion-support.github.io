ursor/automate-test-fix-improve-and-merge-code-48f3:src/pages/sitemap.tsx
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-6 text-blue-400">
        {routes.map((r) => (
          <li key={r}><Link to={r}>{r}</Link></li>
        ))}
      </ul>
    </div>
  );
}

ursor/automate-test-fix-improve-and-merge-code-99d1:src/pages/sitemap.tsx
