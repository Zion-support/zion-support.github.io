

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
=======class ErrorBoundary extends React.Component {
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
import React from 'react';
import type { GetServerSideProps } from 'next';
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
}
;


};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;

  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;


=======
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
==============export type Section = {
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
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
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
=======
=======
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======


    </DocsLayout>;
  );
=======

    </DocsLayout>;
  );
=======
  );


}
    </DocsLayout>
  );
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
