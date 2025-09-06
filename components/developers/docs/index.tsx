import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
export type Section = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  id: string;
  title: string;
  html?: string;
  code?: { language?: string; content: string }[];
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
origin/cursor/automate-test-improve-and-merge-code-2533
export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>
origin/cursor/automate-test-improve-and-merge-code-2533
          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          )}
          {section.code && section.code.length > 0 && (
<div className='space-y-4 mt-4'>
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>
origin/cursor/automate-test-improve-and-merge-code-2533
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
