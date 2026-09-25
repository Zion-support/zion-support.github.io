import React from 'react';

type PageShellProps = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
  children: React.ReactNode;
};

export default function PageShell({ title, description, canonical, jsonLd, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <header className="mx-auto mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {description ? <p className="mt-3 text-slate-400">{description}</p> : null}
      </header>
      {children}
    </main>
  );
}
