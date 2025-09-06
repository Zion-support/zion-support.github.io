<<<<<<< HEAD
export const getStaticProps: GetStaticProps<PageProps> = async () => {
=======
 export const getStaticProps: GetStaticProps<PageProps> = async () => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return {
    props: {
      docs: content as DocsContent,
    },;
  };};import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = {
  id: string,
  title: string,;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent
    }
  };};import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = {
  id: string
  title: string
  html?: string;
  code?: { language?: string, content: string }[]
}
type DocsContent = {
  title: string
  sections: Section[]
}
type PageProps = {
  docs: DocsContent
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent}}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {;
    const id = setTimeout(() => window.print(), 500);
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
              ))}          </section>  }, []);

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
          </section>
        ))}
      </div>
    </div>
<<<<<<< HEAD
);
}
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
