

<<<<<<< HEAD
=======
export const "getServerSideProps": GetServerSideProps<PageProps>  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';'
  }
  const docs = JSON.parse(raw) as DocsContent;
  return { "props": { docs } }

}

export default function ApiDocsPage() {
      }
      nav={docs.sections.map(s => ({ "id": s.id, "title": s.title }))}
    >
      {docs.sections.map(section => ('
        <section key={section.id} id={section.id} className='scroll-mt-24'>'
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
export type Section = $2;
  title: string,
  html?: string,
  code?: { language?: string, content: string}[]
},

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
  return { props: { docs } }
};

export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => (
        <section key={section.id} id={section.id} className='scroll-mt-24'>
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
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

  );

}

    </DocsLayout>
  );
}

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
        <section key={section.id} id={section.id} className="scroll-mt-24">;
          <h2 className="text-2xl font-semibold">{section.title}</h2>;
            <div dangerouslySetInnerHTML={{ __html: section.html }} />)}
          {section.code && section.code.length > 0 && (
            <div className='space - y-4 mt - 4'>;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>;
                  {c.content}
                </CodeBlock>              ))}            <div className="space-y-4 mt-4">;
              {section.code.map ((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>))}
            </div>)}
        </section>))}
    </DocsLayout>);
              ))}
            </div>
          )}
        </section>
      ))}
    </DocsLayout>
  )
}
import React from 'react';
import type { GetServerSideProps } from 'next';
import path from 'path';'
import path from 'path';
import fs from 'fs';
import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';
import path from 'path';
import fs from 'fs';

>>>>>>> origin/cursor/delete-old-data-records-6bba

import DocsLayout from '../../../components/docs/DocsLayout';
import CodeBlock from '../../../components/docs/CodeBlock';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type Section = any;
  id: string;

  title: string;
  html?: string;

<<<<<<< HEAD
  code?: { language?: string; content: string,}

}[];

type DocsContent = {title: string;}
  sections: Section[];}
}}

export const getServerSideProps: GetServerSideProps<PageProps    />  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';}
  const docs = JSON.parse(raw) as DocsContent;}
  return { props: { docs } }

      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >




              ))}
            </div>
          )}

        </section>

      ))}





    </DocsLayout>
  );
}






=======
  code?: { language?: string; content: string }[];
}
;

}


export const "getServerSideProps": GetServerSideProps<PageProps>  = async () => {const contentPath = path.join(process.cwd(), 'data', 'docs', 'content.json')const raw = fs.readFileSync(contentPath, 'utf8';'
  }
  const docs = JSON.parse(raw) as DocsContent;

  return { props: { docs } };
};



export default function ApiDocsPage({ docs }: PageProps) {
      nav={docs.sections.map(s => ({ id: s.id, title: s.title }))}
    >
      {docs.sections.map(section => ('
        <section key={section.id} id={section.id} className='scroll-mt-24'>'
          <h2 className='text-2xl font-semibold'>{section.title}</h2>          {section.html && (
            <div dangerouslySetInnerHTML={{ __html: section.html }} />

      {docs.sections.map(section => (}
        <section key={section.id} id={section.id} className='scroll-mt-24'    />

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




<div className="space-y-4 mt-4">
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>{c.content}</CodeBlock>
              ))}
            </div>
          )}
          {section.code && section.code.length > 0 && (
              ))};

            </div>;
          )}
        </section>;
        </section>
      ))}
    </DocsLayout>;
  );

  );


}


    </DocsLayout>
  );
}


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
