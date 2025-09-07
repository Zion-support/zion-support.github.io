<<<<<<< HEAD
import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';'
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
=======
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
export type Section = any;
  id: string;

  title: string;
  html?: string;
<<<<<<< HEAD
  code?: { language?: string; content: string,];
=======
<<<<<<< HEAD

=======
  code?: { language?: string; content: string,}
>>>>>>> origin/chore/fix-lint-and-merge
}[];
>>>>>>> origin/main

type DocsContent = {title: string;}
  sections: Section[];}
}}
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<PageProps />  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath,
  'utf8';},,
=======

export const getServerSideProps: GetServerSideProps<PageProps    />  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';}
>>>>>>> origin/main
  const docs = JSON.parse(raw) as DocsContent;}
  return { props: { docs } }

}
export default function ApiDocsPage({ docs,
  },,
  }: PageProps) {}
      nav={docs.sections.map(s => ({ id: s.id},,
  title: s.title ))}
    >
<<<<<<< HEAD
      {docs.sections.map(section => (}
        <section key={section.id}
            id={section.id className='scroll-mt-24' />

          <h2 className='text-2xl font-semibold' />{section.title</h2>
          {section.html && (
=======
<<<<<<< HEAD
      {docs.sections.map(section => ('
        <section key={section.id} id={section.id} className='scroll-mt-24'>'
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
>>>>>>> origin/main
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section && section.code && section && section.code.length > 0 && (  return (;
    <DocsLayout title={docs && docs.title} nav={docs && docs.sections.map((s) => ({ id: s && s.id, title: s && s.title }))}>;
      {docs && docs.sections.map((section) => (;
        <section key={section && section.id} id={section && section.id} className="scroll-mt-24">;"
          <h2 className="text-2xl font-semibold">{section && section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section && section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (;'
            <div className='space-y-4 mt-4'>;
              {section && section.code.map((c, idx) => (;
                <CodeBlock key={idx} language={c && c.language}>;
                  {c && c.content}"
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">;
              {section && section.code.map((c, idx) => (;
                <CodeBlock key={idx} language={c && c.language}>{c && c.content}</CodeBlock>;
=======
      {docs.sections.map(section => (}
        <section key={section.id} id={section.id} className='scroll-mt-24'    />
>>>>>>> origin/chore/fix-lint-and-merge

          <h2 className='text-2xl font-semibold'    />{section.title}</h2>
          {section.html && (}
            <div dangerouslySetInnerHTML={{ __html: section.html }}    />
          ,
}
          {section.code && section.code.length > 0 && (

<<<<<<< HEAD
<div className='space-y-4 mt-4' />}
              {section.code.map((c,,,
  idx) => (}
                <CodeBlock key={idx}
            language={c.language />
                  {c.content
=======
<div className='space-y-4 mt-4'    />}
              {section.code.map((c, idx) => (}
                <CodeBlock key={idx} language={c.language}    />
                  {c.content}
>>>>>>> origin/main
                </CodeBlock>
              ))}
            </div>
          )}
<<<<<<< HEAD
          {section.code && section.code.length > 0 && (
              ))};
            </div>;
          )}
        </section>;
=======
        </section>
>>>>>>> origin/chore/fix-lint-and-merge
      ))}

    </DocsLayout>
  );
}
