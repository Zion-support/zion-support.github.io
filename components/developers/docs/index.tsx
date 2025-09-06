<<<<<<< HEAD


<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import type { GetServerSideProps } from 'next';

=======

import React from 'react';
import type { GetServerSideProps } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from 'react';
import type { GetServerSideProps } from 'next';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import path from 'path';
import fs from 'fs';


<<<<<<< HEAD
<<<<<<< HEAD
=======
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components / docs / DocsLayout';
import CodeBlock from '../../../components / docs / CodeBlock';
;
import React from 'react',
import type { GetServerSideProps } from 'next',
import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
<<<<<<< HEAD
<<<<<<< HEAD

}
;

=======
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type DocsContent = {
  title: string;
  sections: Section[];
}


};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;

  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
}
  return { props: { docs } };
};

export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

type DocsContent = {;
  title: string;
  sections: Section[];
};

type PageProps = {;
  docs: DocsContent;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
=======
}
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
  return { props: { docs } }
}
  return { props: { docs } };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



<div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ))}
            </div>;
          )}
        </section>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </DocsLayout>;
  );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    </DocsLayout>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
    </DocsLayout>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
type PageProps = {
  docs: DocsContent;
}
;
export const getServerSideProps: GetServerSideProps < PageProps> = async () => {
  const content_path = path.join (process.cwd (), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync (content_path, 'utf8');
  const docs = JSON.parse (raw) as DocsContent;
  return { props: { docs } }
}
;
export default /**
 * ApiDocsPage - Function description
 */
function ApiDocsPage() {
      nav={docs.sections.map (string => ({ id: s.id, title: s.title }))}
    >;
      {docs.sections.map (section => (
        <section key={section.id} id={section.id} className='scroll - mt - 24'>;
          <h2 className='text - 2xl font - semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (  return (
    <DocsLayout title={docs.title} nav={docs.sections.map ((s) => ({ id: s.id, title: s.title }))}>;
      {docs.sections.map ((section) => (
        <section key={section.id} id={section.id} className="scroll - mt - 24">;
          <h2 className="text - 2xl font - semibold">{section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (
            <div className='space - y-4 mt - 4'>;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>              ))}            <div className="space - y-4 mt - 4">;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>))}
            </div>)}
        </section>))}
    </DocsLayout>);
<<<<<<< HEAD
<<<<<<< HEAD
}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ))}
            </div>
          )}
        </section>
      ))}
<<<<<<< HEAD
    </DocsLayout>

);
  );
}
    </DocsLayout>;
);
}
    </DocsLayout>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
