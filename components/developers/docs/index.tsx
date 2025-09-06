<<<<<<< HEAD
import React from 'react',
import type { GetServerSideProps } from 'next',
=======
import React from 'react';
import type { GetServerSideProps } from 'next';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type Section = any;
=======
=======

export type Section = {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
=======
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json');
  const raw = fs.readFileSync(contentPath, 'utf8');
  const docs = JSON.parse(raw) as DocsContent;
<<<<<<< HEAD
  return { props: { docs } }
}
=======
  return { props: { docs } };
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
<<<<<<< HEAD
            <div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
<<<<<<< HEAD
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
=======
<<<<<<< HEAD
                </CodeBlock>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
              ))}
            </div>
          )}
        </section>
      ))}
<<<<<<< HEAD
    </DocsLayout>
<<<<<<< HEAD
);
<<<<<<< HEAD
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
<<<<<<< HEAD
    </DocsLayout>;
);
}
=======
    </DocsLayout>
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
