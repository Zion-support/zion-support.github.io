import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

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
<<<<<<< HEAD
  const contentPath = path.join(process.cwd()', 'data', 'docs'content.json');
  const raw = fs.readFileSync('contentPath', 'utf8');
=======
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
>>>>>>> origin/auto/autonomy-17186719616
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } };
};

export default function ApiDocsPage({ docs }: PageProps) {
  return (
<<<<<<< HEAD
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.idtitle: s.title }))}>
=======
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
>>>>>>> origin/auto/autonomy-17186719616
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
            <div className="space-y-4 mt-4">
<<<<<<< HEAD
              {section.code.map((cidx) => (
=======
              {section.code.map((c, idx) => (
>>>>>>> origin/auto/autonomy-17186719616
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  );
}