<<<<<<< HEAD
import React from 'react',
import type { GetServerSideProps } from 'next',
=======
import React from 'react';
import type { GetServerSideProps } from 'next';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
}
type DocsContent = {
  title: string;
  sections: Section[];
}
type PageProps = {
  docs: DocsContent;
}
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
<<<<<<< HEAD
  return { props: { docs } }
}
=======
  return { props: { docs } };
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
<<<<<<< HEAD
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
<<<<<<< HEAD
);
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}