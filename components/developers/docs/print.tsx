<<<<<<< HEAD
 export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent,
    },
  };
=======
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = {
  id: string,
  title: string,
  html?: string;
  code?: { language?: string, content: string }[]
};

type DocsContent = {
  title: string,
  sections: Section[]
};

type PageProps = {
  docs: DocsContent
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500);
<<<<<<< HEAD
    return () => clearTimeout(id);
  }, []);

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>{docs.title}</h1>
      <div className='space-y-8'>
        {docs.sections.map(s => (
          <section key={s.id}>
            <h2 className='text-2xl font-semibold mb-2'>{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code &&
              s.code.map((c, i) => (
                <pre
                  key={i}
                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap'
                >
                  {c.content}
                </pre>
              ))}
=======
    return () => clearTimeout(id)
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{docs.title}</h1>
      <div className="space-y-8">
        {docs.sections.map((s) => (
          <section key={s.id}>
            <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map((c, i) => (
              <pre key={i} className="mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap">{c.content}</pre>
            ))}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </section>
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
