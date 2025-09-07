<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
import React from 'react';
import type { GetServerSideProps } from 'next';

import path from 'path';
import fs from 'fs';


import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components / docs / DocsLayout';
import CodeBlock from '../../../components / docs / CodeBlock';
;
import React from 'react',
import type { GetServerSideProps } from 'next',
>>>>>>> merged-prs-20250907-203621
import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD
export type Section = $2;
  title: string,
  html?: string,
  code?: { language?: string, content: string}[]
},

type DocsContent = $2;
  sections: Section[]
},

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
            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  )
}
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

>>>>>>> origin/chore/fix-lint-and-merge
export type Section = any;
  id: string;

  title: string;
  html?: string;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  code?: { language?: string; content: string,}
>>>>>>> origin/chore/fix-lint-and-merge
}[];

type DocsContent = {title: string;}
  sections: Section[];}
}}

export const getServerSideProps: GetServerSideProps<PageProps    />  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';}
  const docs = JSON.parse(raw) as DocsContent;}
  return { props: { docs } }
=======
  code?: { language?: string; content: string }[];
<<<<<<< HEAD
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

<<<<<<< HEAD
export default function ApiDocsPage({ docs,}
}: PageProps) {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type DocsContent = {
  title: string;
  sections: Section[];
}


};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;

  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;

  return { props: { docs } };
};



export default function ApiDocsPage({ docs }: PageProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => ('
        <section key={section.id} id={section.id} className='scroll-mt-24'>'
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
type DocsContent = {;
  title: string;
  sections: Section[];
};
type PageProps = {;
  docs: DocsContent;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      {docs.sections.map(section => (}
        <section key={section.id} id={section.id} className='scroll-mt-24'    />
>>>>>>> origin/chore/fix-lint-and-merge

          <h2 className='text-2xl font-semibold'    />{section.title}</h2>
          {section.html && (}
            <div dangerouslySetInnerHTML={{ __html: section.html }}    />
          ,
}
          {section.code && section.code.length > 0 && (

<div className='space-y-4 mt-4'    />}
              {section.code.map((c, idx) => (}
                <CodeBlock key={idx} language={c.language}    />
                  {c.content}
                </CodeBlock>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD



<div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </DocsLayout>;
  );

  );


}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </DocsLayout>
  );
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
    </DocsLayout>
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>

              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>

<<<<<<< HEAD
);
  );
}
    </DocsLayout>;
);
}
    </DocsLayout>
  );
}
=======
}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
