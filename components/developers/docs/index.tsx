import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } };
};

export default function ApiDocsPage({ docs }: PageProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
<<<<<<< HEAD
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
=======
          <h2 className='text-2xl font-semibold'>{section.title}</h2>
=======
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

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'datadocscontent.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
};

export default function ApiDocsPage({ docs }: PageProps) {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
<<<<<<< HEAD
                </CodeBlock>              ))}
=======
                </CodeBlock>
=======
            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
