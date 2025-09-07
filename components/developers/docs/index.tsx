
import fs from fs';
import DocsLayout from '../../../components/docs/DocsLayout;
import CodeBlock from ../../../components/docs/CodeBlock';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export type Section = any;
  "id": string;

  "title": string;
  html?: string;

}[];

type DocsContent = {"title": string;
  }
  "sections": Section[];
}}

          {section.html && (
            <div dangerouslySetInnerHTML={{ "__html": section.html }} />
          
}
          {section.code && section.code.length > 0 && (

<div className='space-y-4 mt-4'>'
              {section.code.map((c, idx) => (
                <CodeBlock key={idx} language={c.language}>
                  {c.content}
                </CodeBlock>
              ))}
            </div>
          )}
          {section.code && section.code.length > 0 && (

            </div>;
          )}
        </section>;
      ))}

  );


}

    </DocsLayout>
  );
}