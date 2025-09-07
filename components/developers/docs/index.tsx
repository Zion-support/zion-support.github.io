<<<<<<< HEAD
import React from 'react';
import type { GetServerSideProps } from 'next';
=======
<<<<<<< HEAD
import path from 'path';'
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import path from 'path';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import fs from 'fs';
<<<<<<< HEAD
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
export type Section = $2;
  title: string,
  html?: string,
  code?: { language?: string, content: string}[]
},

type DocsContent = $2;
  sections: Section[]
},

export type Section = any;id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
type DocsContent = {title: string;
  sections: Section[];
}}export const getServerSideProps: GetServerSideProps<PageProps>  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8')const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
=======


import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD
export type Section = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
type DocsContent = {}
  title: string;
  sections: Section[];
}


};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
'
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');'
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
}
  return { props: { docs } };
};

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function ApiDocsPage({ docs }: PageProps) {
=======
export default function ApiDocsPage({ docs }: PageProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
<<<<<<< HEAD
      {docs.sections.map(section => ('
        <section key={section.id} id={section.id} className='scroll-mt-24'>'
=======
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
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

export default function ApiDocsPage({ docs }: PageProps) {}
  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => ("
        <section key={section.id} id={section.id} className="scroll-mt-24">"
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>
origin/cursor/automate-test-improve-and-merge-code-2533
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
<<<<<<< HEAD
              ))};
=======
              ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>;
          )}
        </section>;
      ))}

  );


}

    </DocsLayout>
  );
}

;
type PageProps = {}
  docs: DocsContent;
}
;
export const getServerSideProps: GetServerSideProps < PageProps> = async () => {';
  const content_path = path.join (process.cwd (), 'data', 'docs', 'content.json');'
  const raw = fs.readFileSync (content_path, 'utf8');
  const docs = JSON.parse (raw) as DocsContent;
  return { props: { docs } }
}
;
export default /**;
 * ApiDocsPage - Function description;
 */
function ApiDocsPage() {}
      nav={docs.sections.map (string => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map (section => ('
        <section key={section.id} id={section.id} className='scroll - mt - 24'>;'
          <h2 className='text - 2xl font - semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (  return (
    <DocsLayout title={docs.title} nav={docs.sections.map ((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map ((section) => ("
        <section key={section.id} id={section.id} className="scroll - mt - 24">;"
          <h2 className="text - 2xl font - semibold">{section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && ('
            <div className='space - y-4 mt - 4'>;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>;
                  {c.content}"
                </CodeBlock>              ))}            <div className="space - y-4 mt - 4">;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>))}
            </div>)}
        </section>))}
    </DocsLayout>);
<div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
  return { props: { docs } };
};

type PageProps = $2;
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'datadocscontent.json'),
  const raw = fs.readFileSync($2);
  const docs = $2;
  return { props: { docs } }
},

export default function ApiDocsPage({ docs }: PageProps) {
  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
}return { props: { docs } }}export default function ApiDocsPage() {nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map(section => (<section key={section.id} id={section.id} className='scroll-mt-24'>;
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (  return (<DocsLayout title={docs && docs.title} nav={docs && docs.sections.map((s) => ({ id: s && s.id, title: s && s.title }))}>;
      {docs && docs.sections.map((section) => (<section key={section && section.id} id={section && section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section && section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section && section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (<div className='space-y-4 mt-4'>;
              {section && section.code.map((c, idx) => (<CodeBlock key={idx} language={c && c.language}>;
                  {c && c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">;
              {section && section.code.map((c, idx) => (<CodeBlock key={idx} language={c && c.language}>{c && c.content}</CodeBlock>;export default function ApiDocsPage() {return (<DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map((section) => (<section key={section.id} id={section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section.title}</h2>;
          <h2 className='text-2xl font-semibold'>{section.title}</h2>;
          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />;
          )}
          {section.code && section.code.length > 0 && ())}
            </div>;
          )}
        </section>;
      ))})}</DocsLayout>;
  )}type PageProps = {docs: DocsContent;
}export const getServerSideProps: GetServerSideProps < PageProps> = async () => {const content_path = path.join (process.cwd (), 'data', 'docs', 'content.json')const raw = fs.readFileSync (content_path, 'utf8')const docs = JSON.parse (raw) as DocsContent;
  return { props: { docs } }
}export default /**;
 * ApiDocsPage - Function description;
 */;
function ApiDocsPage() {nav={docs.sections.map (string => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map (section => (<section key={section.id} id={section.id} className='scroll - mt - 24'>;
          <h2 className='text - 2xl font - semibold'>{section.title}</h2>          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (  return (<DocsLayout title={docs.title} nav={docs.sections.map ((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map ((section) => (<section key={section.id} id={section.id} className="scroll - mt - 24">;
          <h2 className="text - 2xl font - semibold">{section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (<div className='space - y-4 mt - 4'>;
              {section.code.map ((c, idx) => (<CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>              ))}            <div className="space - y-4 mt - 4">;
              {section.code.map ((c, idx) => (<CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>))}
            </div>)}
        </section>))}
    </DocsLayout>)<div className='space-y-4 mt-4'>;
              {section.code.map((c, idx) => (<CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>;
              ))}
            </div>;
          )}
        </section>;
            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
              ))}
            </div>
          )}
        </section>
      ))}
}return { props: { docs } }}export default function ApiDocsPage() {nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map(section => (<section key={section.id} id={section.id} className='scroll-mt-24'>;
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (  return (<DocsLayout title={docs && docs.title} nav={docs && docs.sections.map((s) => ({ id: s && s.id, title: s && s.title }))}>;
      {docs && docs.sections.map((section) => (<section key={section && section.id} id={section && section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section && section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section && section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (<div className='space-y-4 mt-4'>;
              {section && section.code.map((c, idx) => (<CodeBlock key={idx} language={c && c.language}>;
                  {c && c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">;
              {section && section.code.map((c, idx) => (<CodeBlock key={idx} language={c && c.language}>{c && c.content}</CodeBlock>;export default function ApiDocsPage() {return (<DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map((section) => (<section key={section.id} id={section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section.title}</h2>;
          <h2 className='text-2xl font-semibold'>{section.title}</h2>;
          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />;
          )}
          {section.code && section.code.length > 0 && ())}
            </div>;
          )}
        </section>;
      ))})}</DocsLayout>;
  )}type PageProps = {docs: DocsContent;
}export const getServerSideProps: GetServerSideProps < PageProps> = async () => {const content_path = path.join (process.cwd (), 'data', 'docs', 'content.json')const raw = fs.readFileSync (content_path, 'utf8')const docs = JSON.parse (raw) as DocsContent;
  return { props: { docs } }
}export default /**;
 * ApiDocsPage - Function description;
 */;
function ApiDocsPage() {nav={docs.sections.map (string => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map (section => (<section key={section.id} id={section.id} className='scroll - mt - 24'>;
          <h2 className='text - 2xl font - semibold'>{section.title}</h2>          {section.html && (<div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (  return (<DocsLayout title={docs.title} nav={docs.sections.map ((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map ((section) => (<section key={section.id} id={section.id} className="scroll - mt - 24">;
          <h2 className="text - 2xl font - semibold">{section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (<div className='space - y-4 mt - 4'>;
              {section.code.map ((c, idx) => (<CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>              ))}            <div className="space - y-4 mt - 4">;
              {section.code.map ((c, idx) => (<CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>))}
            </div>)}
        </section>))}
    </DocsLayout>)<div className='space-y-4 mt-4'>;
              {section.code.map((c, idx) => (<CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>;
              ))}
            </div>;
          )}
        </section>;
      ))}</DocsLayout>;
  )}

<<<<<<< HEAD
      ))}</DocsLayout>;
  )}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    </DocsLayout>
  )
}
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
