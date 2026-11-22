// app/components/PageShell.tsx — shared blog/content page shell
import { ReactNode } from 'react';

interface PageShellProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
  children?: ReactNode;
}

export default function PageShell({ title, description, jsonLd, children }: PageShellProps) {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] pb-16">
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description ? (
            <p className="text-xl text-muted-foreground">{description}</p>
          ) : null}
        </header>
        <article className="prose prose-slate max-w-none">{children}</article>
      </div>
    </div>
  );
}
