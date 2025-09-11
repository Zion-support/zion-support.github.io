

<<<<<<< HEAD
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
import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======

import React from 'react';
import type { GetServerSideProps } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import path from 'path';
import fs from 'fs';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import path from 'path';
import fs from 'fs';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
<<<<<<< HEAD
<<<<<<< HEAD
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}
;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type DocsContent = {
  title: string;
  sections: Section[];
}


};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;

  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
<<<<<<< HEAD

  return { props: { docs } };
};



=======
  return { props: { docs } }
}
  return { props: { docs } };
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
type DocsContent = {;
  title: string;
  sections: Section[];
};
type PageProps = {;
  docs: DocsContent;
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
<<<<<<< HEAD
  return { props: { docs } }
}
=======
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD



<div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======
=======
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>;
          )}
        </section>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </DocsLayout>;
  );
=======

    </DocsLayout>;
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );


}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </DocsLayout>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
    </DocsLayout>
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              ))}
            </div>
          )}
        </section>
      ))}
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
