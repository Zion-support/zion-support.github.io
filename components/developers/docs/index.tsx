import React from 'react'
import type { GetServerSideProps } from 'next'
import path from 'path'
import fs from 'fs'
import DocsLayout from '../../../components/docs/DocsLayout'
import CodeBlock from '../../../components/docs/CodeBlock'
export type Section = {
  id: string,
  title: string,
  html?: string,
  code?: { language?: string, content: string }[]
},

type DocsContent = {
  title: string,
  sections: Section[]
},

type PageProps = {
  docs: DocsContent
},

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const contentPath = path.join(process.cwd(), 'datadocscontent.json'),
  const raw = fs.readFileSync(contentPath, 'utf8'),
  const docs = JSON.parse(raw) as DocsContent
  return { props: { docs } }
},

export default function ApiDocsPage({ docs }: PageProps) {
  return (
    <DocsLayout title={docs.title} nav={docs.sections.map((s) => ({ id: s.id, title: s.title }))}>
      {docs.sections.map((section) => (
        <section key={section.id} id={section.id} className=&quot;scroll-mt-24&quot;>
          <h2 className=&quot;text-2xl font-semibold&quot;>{section.title}</h2>
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
            <div className=&quot;space-y-4 mt-4&quot;>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
import React from 'react';
import type {_GetServerSideProps} from 'next';
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

export type Section = {_id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string}[];
};

type DocsContent = {_title: string;
  sections: Section[];};

type PageProps = {_docs: DocsContent;};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {_const _contentPath = path.join(process.cwd(), _'data', _'docs', _'content.json');
  const _raw = fs.readFileSync(contentPath, _'utf8');
  const _docs = JSON.parse(raw) as DocsContent;
  return { props: { docs} };
};

export default function ApiDocsPage(_{_docs}: PageProps) {_return (_<DocsLayout title={docs.title} nav={_docs.sections.map((s) => ({ id: s.id, _title: s.title}))}>
      {_docs.sections.map(_(section) => (
        <section key={section.id} id={_section.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">{_section.title}</h2>
          {_section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html}} />
          )}
          {_section.code && section.code.length > 0 && (_<div className="space-y-4 mt-4">
              {section.code.map((c, _idx) => (
                <CodeBlock key={idx} language={_c.language}>{_c.content}</CodeBlock>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  )
}