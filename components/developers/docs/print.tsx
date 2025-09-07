<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { useEffect } from 'react';
  return {
    props: {
      docs: content as DocsContent,
    },;
  };};import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = {
  id: string,
  title: string,;
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

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent
    }
  };};import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = {
  id: string
  title: string
  html?: string;
  code?: { language?: string, content: string }[]
}
type DocsContent = {
  title: string
  sections: Section[]
}
type PageProps = {
  docs: DocsContent
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent}}
export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {;
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
  }, []);
  return (
<<<<<<< HEAD
    <div className='p-8 max-w-4xl mx-auto' />;

      <h1 className='text-3xl font-bold mb-6' />{docs && docs.title}</h1>;
      <div className='space-y-8' />;
        {docs && docs.sections.map(s => (<section key={s && s.id} />;
            <h2 className='text-2xl font-semibold mb-2' />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} /
=======
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
  props: {
  docs: content as DocsContent 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}
            {s && s.code &&;

              s && s.code.map((c, i) = /> (;}
                <pre;}
key = {i}

=======
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>{docs.title}</h1>
      <div className='space-y-8'>
        {docs.sections.map(s => (
          <section key={s.id}>
            <h2 className='text-2xl font-semibold mb-2'>{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code &&
              s.code.map((c, i) => (
                <pre
                  key={i}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap'
                >
                  {c.content}
                </pre>
              ))}          </section>  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{docs.title}</h1>
      <div className="space-y-8">
        {docs.sections.map((s) => (
          <section key={s.id}>
            <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map((c, i) => (
              <pre key={i} className="mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap">{c.content}</pre>
            ))}
<<<<<<< HEAD
}
<<<<<<< HEAD

export default /**;
 * PrintDocs - Function description;
 */;
function PrintDocs() {useEffect (() => {const id = set_timeout (() => window.print (), 500)return () => clear_timeout (id)}, [];
  return (<div className='p - 8 max - w-4xl mx - auto' />;
      <h1 className='text - 3xl font - bold mb - 6' />{docs.title}</h1>;
      <div className='space - y-8' />;
        {docs.sections.map (string => (<section key={s.id} />;
            <h2 className='text - 2xl font - semibold mb - 2' />{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} /
}
            {s.code &&;}
              s.code.map ((c, i) = /> (<pre;}
                  key = {i}
                  className='mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap' />

                  {c.content}
                </pre>))}          </section>  }, [];"
  return (<div className=\"p - 8 max - w-4xl mx - auto\" />;"
      <h1 className=\"text - 3xl font - bold mb - 6\" />{docs.title}</h1>;"
      <div className=\"space - y-8\" />;
        {docs.sections.map ((s) => (<section key={s.id} />;"
            <h2 className=\"text - 2xl font - semibold mb - 2\" />{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} /
}"
            {s.code && s.code.map ((c, i) = /> (<pre key={i} className=\"mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap\" />{c.content}</pre>))}
          </section>))}
      </div>;
    </div>)))}
          </section>;
=======
          </section>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
        ))}

      </div>
    </div>
);
}
<<<<<<< HEAD

"
=======
}
) ) 
}</section>) ) 
}</div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
