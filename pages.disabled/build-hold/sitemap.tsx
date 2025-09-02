import React from,
  react';
import Link from
  'next/link';

const SitemapPage: React.FC = () => {
  const routes = [
ursor/automate-test-fix-improve-and-merge-code-99d1
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="mb-4">
ursor/automate-test-fix-improve-and-merge-code-99d1
      </p>      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {routes.map(path => (
          <li key={path}>
            <Link href={path} className="text-blue-600 hover:underline">
              {path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapPage;
