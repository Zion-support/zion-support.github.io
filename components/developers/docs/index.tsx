
import path from 'path';
import fs from 'fs';


  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];

}
;

type DocsContent = {
  title: string;
  sections: Section[];
}
type PageProps = {
  docs: DocsContent;

  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;

export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
};

type DocsContent = {;
  title: string;
  sections: Section[];
};

type PageProps = {;
  docs: DocsContent;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
  const contentPath = path && path.join(process && process.cwd(), 'data', 'docs', 'content && content.json');
  const raw = fs && fs.readFileSync(contentPath, 'utf8');
  const docs = JSON && JSON.parse(raw) as DocsContent;
  return { props: { docs } };
};

export default function ApiDocsPage(): any ({ docs }: PageProps) {;

      nav={docs && docs.sections.map(s => ({ id: s && s.id, title: s && s.title }))}
    >;
      {docs && docs.sections.map(section => (;
        <section key={section && section.id} id={section && section.id} className='scroll-mt-24'>;
          <h2 className='text-2xl font-semibold'>{section && section.title}</h2>          {section && section.html && (;
            <div dangerouslySetInnerHTML={{ __html: section && section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (  return (
    <DocsLayout title={docs && docs.title} nav={docs && docs.sections.map((s) => ({ id: s && s.id, title: s && s.title }))}>;
      {docs && docs.sections.map((section) => (;
        <section key={section && section.id} id={section && section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section && section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section && section.html }} />;
          )}
          {section && section.code && section && section.code.length > 0 && (;
            <div className='space-y-4 mt-4'>;
              {section && section.code.map((c, idx) => (;
                <CodeBlock key={idx} language={c && c.language}>;
                  {c && c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">;
              {section && section.code.map((c, idx) => (;
                <CodeBlock key={idx} language={c && c.language}>{c && c.content}</CodeBlock>;

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
  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (

              ))}
            </div>;
          )}
        </section>;
      ))}

}

