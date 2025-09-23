import type { GetServerSideProps } from 'next';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

export type Section ={
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
};

type DocsContent ={
  title: string;
  sections: Section[];
};

type PageProps ={
  docs: DocsContent;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
