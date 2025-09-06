import React from 'react',
import type { GetServerSideProps } from 'next',
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD
<<<<<<< HEAD
export type Section = any;
=======
=======

export type Section = {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
}
=======
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
<<<<<<< HEAD
  return { props: { docs } }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function ApiDocsPage({ docs }: PageProps) {
=======
  return { props: { docs } };
};
}

export default function ApiDocsPage({ docs }: PageProps) {

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
<<<<<<< HEAD
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
=======
          <h2 className='text-2xl font-semibold'>{section.title}</h2>
          {section.html && (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
<<<<<<< HEAD
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======
                </CodeBlock>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
<<<<<<< HEAD
);
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
