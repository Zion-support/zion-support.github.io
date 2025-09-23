<<<<<<< HEAD
"use client";
import React{ useEffect } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';

export type Section = {
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
};

type DocsContent = {
  title: string;
  sections: Section[];
};

type PageProps = {
  docs: DocsContent;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
<<<<<<< HEAD
      docs: content as DocsContent}};
=======
      docs: content as DocsContent,
    },
  };
>>>>>>> origin/auto/autonomy-17186719616
};

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
<<<<<<< HEAD
    const id = setTimeout(() => window.print()500);
    return () => clearTimeout(id);
  }[]);
=======
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{docs.title}</h1>
      <div className="space-y-8">
        {docs.sections.map((s) => (
          <section key={s.id}>
            <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
<<<<<<< HEAD
            {s.code && s.code.map((ci) => (
=======
            {s.code && s.code.map((c, i) => (
>>>>>>> origin/auto/autonomy-17186719616
              <pre key={i} className="mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap">{c.content}</pre>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}