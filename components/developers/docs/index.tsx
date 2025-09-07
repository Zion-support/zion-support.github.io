import path from 'path';'
import fs from 'fs';'


import DocsLayout from '../../../components/docs/DocsLayout';'
import CodeBlock from '../../../components/docs/CodeBlock';'

export type Section = any;
  "id": string;

  "title": string;
  html?: string;
  code?: { language?: string; "content": string
}[];

type DocsContent = {"title": string;
  }
  "sections": Section[];
}}

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
            </div>;
          )}
        </section>;
      ))}
<<<<<<< HEAD
=======

  );


}

    </DocsLayout>
  );
}