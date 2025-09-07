
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======

<<<<<<< HEAD
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
export type Section = $2;
  title: string,
  html?: string,
  code?: { language?: string, content: string}[]
},

type DocsContent = $2;
  sections: Section[]
},

type PageProps = $2;
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      docs: content as DocsContent}}
},
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useEffect } from 'react';'
import type { GetStaticProps } from 'next';'
import content from '../../../data/docs/content.json';'

export type Section = any;
  }, []);
return (;
    <div className='p-8 max-w-4xl mx-auto'>;'

<<<<<<< HEAD
=======
<<<<<<< HEAD
      <h1 className='text-3xl font-bold mb-6'>{docs && docs.title}</h1>;'
      <div className='space-y-8'>;'
        {docs && docs.sections.map(s => (<section key={s && s.id}>;
            <h2 className='text-2xl font-semibold mb-2'>{s && s.title}</h2>;'
            {s && s.html && <div dangerouslySetInnerHTML={{ "__html": s && s.html }} /
}
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';
=======
>>>>>>> origin/resolved-merge-conflicts
      <h1 className='text-3xl font-bold mb-6' />{docs && docs.title}</h1>;
      <div className='space-y-8' />;
        {docs && docs.sections.map(s => (<section key={s && s.id} />;
            <h2 className='text-2xl font-semibold mb-2' />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} /
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
  props: {
  docs: content as DocsContent 
=======
  return {
    props: {
      docs: content as DocsContent,
    },
  }}import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data / docs / content.json';
export type Section = {
  id: string,
  title: string,
  html?: string;
  code?: { language?: string, content: string }[];
}
;
type DocsContent = {
  title: string,
  sections: Section[];
}
;
type PageProps = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  docs: DocsContent;
}
;
export const getStaticProps: GetStaticProps < PageProps> = async () => {
<<<<<<< HEAD
 export const getStaticProps: GetStaticProps<PageProps> = async () => {
export const getStaticProps: GetStaticProps<PageProps> = async () => {
 export const getStaticProps: GetStaticProps<PageProps> = async () => {
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500);

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
<<<<<<< HEAD
import content from '../../../data/docs/content.json';
}
import React, { useEffect } from react';
import type { GetStaticProps } from 'next;
import content from ../../../data/docs/content.json';
=======
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export type Section = any;
=======
import content from '../../../data/docs/content ;
export type Section = {;
  id: string,;
  title: string,;
  html?: string;
  code?: { language?: string, content: string }[];
};
type DocsContent = {;
  title: string,;
  sections: Section[];
};
type PageProps = {;
  docs: DocsContent;
};
export const getStaticProps: GetStaticProps<PageProps> = async () => {;
  return {;
    props: {;
      docs: content as DocsContent}}
export default function PrintDocs(): any ({ docs }: PageProps) {;
  useEffect(() => {;
    const id = setTimeout(() => window && window.print(), 500);
>>>>>>> merged-prs-20250907-203621

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {;
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
<<<<<<< HEAD
  }, []);
  return (
    <div className='p-8 max-w-4xl mx-auto' />;

      <h1 className='text-3xl font-bold mb-6' />{docs && docs.title}</h1>;
      <div className='space-y-8' />;
        {docs && docs.sections.map(s => (<section key={s && s.id} />;
            <h2 className='text-2xl font-semibold mb-2' />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} /
}
            {s && s.code &&;

              s && s.code.map((c, i) = /> (;}
                <pre;}
key = {i}

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, []);
<<<<<<< HEAD
  return ('
    <div className=p-8 max-w-4xl mx-auto>;'
      <h1 className='text-3xl font-bold mb-6>{docs && docs.title}</h1>;
      <div className='space-y-8'>;
        {docs && docs.sections.map(s => (;
          <section key={s && s.id}>;
            <h2 className=text-2xl font-semibold mb-2'>{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} />}
            {s && s.code &&;

<<<<<<< HEAD
=======
<<<<<<< HEAD
              }

              s && s.code.map((c, i) => (;
                <pre,
key = {i}

                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap''
=======
>>>>>>> origin/resolved-merge-conflicts
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
                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap'
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                >
=======
  return (
    <div className='p-8 max-w-4xl mx-auto'    />;

      <h1 className='text-3xl font-bold mb-6'    />{docs && docs.title}</h1>;
      <div className='space-y-8'    />;
        {docs && docs.sections.map(s => (<section key={s && s.id}    />;
            <h2 className='text-2xl font-semibold mb-2'    />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} /
}
            {s && s.code &&;

              s && s.code.map((c, i) =    /> (;}
                <pre;}
key = {i}

                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap'
                    />
>>>>>>> origin/chore/fix-lint-and-merge
                  {c.content}
                </pre>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ))}
 ;
=======
>>>>>>> origin/resolved-merge-conflicts
              ))}          </section>  }, []);
<<<<<<< HEAD

=======
<<<<<<< HEAD
};

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id)
  }, []);
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
 ;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
return (;
    <div className='p-8 max-w-4xl mx-auto'>;'

            ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
export default /**;
 * PrintDocs - Function description;
 */
function PrintDocs() {}
  useEffect (() => {}
    const id = set_timeout (() => window.print (), 500);
    return () => clear_timeout (id);
  }, []);
;
  return ('
    <div className='p - 8 max - w-4xl mx - auto'>;'
      <h1 className='text - 3xl font - bold mb - 6'>{docs.title}</h1>;'
      <div className='space - y-8'>;
        {docs.sections.map (string => (
          <section key={s.id}>;'
            <h2 className='text - 2xl font - semibold mb - 2'>{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code &&;
              s.code.map ((c, i) => (
                <pre;
                  key={i}'
                  className='mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap';
                >;
                  {c.content}
                </pre>))}          </section>  }, []);
;
  return ("
    <div className="p - 8 max - w-4xl mx - auto">;"
      <h1 className="text - 3xl font - bold mb - 6">{docs.title}</h1>;"
      <div className="space - y-8">;
        {docs.sections.map ((s) => (
          <section key={s.id}>;"
            <h2 className="text - 2xl font - semibold mb - 2">{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map ((c, i) => ("
              <pre key={i} className="mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap">{c.content}</pre>))}
  return (
    <div className=\"p-8 max-w-4xl mx-auto\" />;
"
      <h1 className=\"text-3xl font-bold mb-6\" />{docs && docs.title}</h1>;"
      <div className=\"space-y-8\" />;
        {docs && docs.sections.map((s) => (<section key={s && s.id} />;"
            <h2 className=\"text-2xl font-semibold mb-2\" />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html ;}} /
}"
            {s && s.code && s && s.code.map((c, i) = /> (<pre key={i} className=\"mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap\" />{c && c.content}</pre>;
            ))}
}
export default /**;
 * PrintDocs - Function description;
 */;
function PrintDocs() {useEffect (() => {const id = set_timeout (() => window.print (), 500)return () => clear_timeout (id)}, [];
  return (<div className='p - 8 max - w-4xl mx - auto'>;'
      <h1 className='text - 3xl font - bold mb - 6'>{docs.title}</h1>;'
      <div className='space - y-8'>;'
        {docs.sections.map (string => (<section key={s.id}>;
            <h2 className='text - 2xl font - semibold mb - 2'>{s.title}</h2>;'
            {s.html && <div dangerouslySetInnerHTML={{ "__html": s.html }} /
}
            {s.code &&;
              }
              s.code.map ((c, i) => (<pre;
                  key = {i}
                  className='mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap'>'

                  {c.content}
                </pre>))}          </section>  }, [];
  return (<div className="p - 8 max - w-4xl mx - auto">;"
      <h1 className="text - 3xl font - bold mb - 6">{docs.title}</h1>;"
      <div className="space - y-8">;"
        {docs.sections.map ((s) => (<section key={s.id}>;
            <h2 className="text - 2xl font - semibold mb - 2">{s.title}</h2>;"
            {s.html && <div dangerouslySetInnerHTML={{ "__html": s.html }} /
}
            {s.code && s.code.map ((c, i) => (<pre key={i} className="mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap">{c.content}</pre>))}"
          </section>))}
      </div>;
    </div>)))}
          </section>;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
}
export default /**;
 * PrintDocs - Function description;
=======
<<<<<<< HEAD
          </section>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        ))}
=======


        ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
export default /**
 * PrintDocs - Function description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
 */
function PrintDocs() {}
  useEffect (() => {}
    const id = set_timeout (() => window.print (), 500);
    return () => clear_timeout (id);
  }, []);
;
  return ('
    <div className='p - 8 max - w-4xl mx - auto'>;'
      <h1 className='text - 3xl font - bold mb - 6'>{docs.title}</h1>;'
      <div className='space - y-8'>;
        {docs.sections.map (string => (
          <section key={s.id}>;'
            <h2 className='text - 2xl font - semibold mb - 2'>{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={ __html: s.html } />}
            {s.code &&;
              s.code.map ((c, i) => (
                <pre;
                  key={i}'
                  className='mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap';
                >;
                  {c.content}
                </pre>))}          </section>  }, []);
;
  return ('
    <div className='p - 8 max - w-4xl mx - auto'>;'
      <h1 className='text - 3xl font - bold mb - 6'>{docs.title}</h1>;'
      <div className='space - y-8'>;
        {docs.sections.map ((s) => (
          <section key={s.id}>;"
            <h2 className="text - 2xl font - semibold mb - 2">{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map ((c, i) => ("
              <pre key={i} className="mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap">{c.content}</pre>))}
=======
>>>>>>> origin/chore/fix-lint-and-merge
  return (
    <div className=\"p-8 max-w-4xl mx-auto\"    />;
"
      <h1 className=\"text-3xl font-bold mb-6\"    />{docs && docs.title}</h1>;"
      <div className=\"space-y-8\"    />;
        {docs && docs.sections.map((s) => (<section key={s && s.id}    />;"
            <h2 className=\"text-2xl font-semibold mb-2\"    />{s && s.title}</h2>;
            {s && s.html && <div dangerouslySetInnerHTML={{ __html: s && s.html }} /
}"
<<<<<<< HEAD
            {s && s.code && s && s.code.map((c, i) = /> (<pre key={i} className=\"mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap\" />{c && c.content}</pre>;
=======
            {s && s.code && s && s.code.map((c, i) =    /> (<pre key={i} className=\"mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap\"    />{c && c.content}</pre>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            ))}
}

export default /**;
 * PrintDocs - Function description;
 */;
function PrintDocs() {useEffect (() => {const id = set_timeout (() => window.print (), 500)return () => clear_timeout (id)}, [];
<<<<<<< HEAD
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
=======
  return (<div className='p - 8 max - w-4xl mx - auto'    />;
      <h1 className='text - 3xl font - bold mb - 6'    />{docs.title}</h1>;
      <div className='space - y-8'    />;
        {docs.sections.map (string => (<section key={s.id}    />;
            <h2 className='text - 2xl font - semibold mb - 2'    />{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} /
}
            {s.code &&;}
              s.code.map ((c, i) =    /> (<pre;}
                  key = {i}
                  className='mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap'    />

                  {c.content}
                </pre>))}          </section>  }, [];"
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  return (<div className=\"p - 8 max - w-4xl mx - auto\" />;"
      <h1 className=\"text - 3xl font - bold mb - 6\" />{docs.title}</h1>;"
      <div className=\"space - y-8\" />;
        {docs.sections.map ((s) => (<section key={s.id} />;"
            <h2 className=\"text - 2xl font - semibold mb - 2\" />{s.title}</h2>;
<<<<<<< HEAD
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} /
}"
            {s.code && s.code.map ((c, i) = /> (<pre key={i} className=\"mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap\" />{c.content}</pre>))}
=======
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html ;}} /
}"
            {s.code && s.code.map ((c, i) = /> (<pre key={i} className=\"mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap\" />{c.content}</pre>))}
=======
  return (<div className=\"p - 8 max - w-4xl mx - auto\"    />;"
      <h1 className=\"text - 3xl font - bold mb - 6\"    />{docs.title}</h1>;"
      <div className=\"space - y-8\"    />;
        {docs.sections.map ((s) => (<section key={s.id}    />;"
            <h2 className=\"text - 2xl font - semibold mb - 2\"    />{s.title}</h2>;
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} /
}"
            {s.code && s.code.map ((c, i) =    /> (<pre key={i} className=\"mt - 4 p - 4 bg - gray - 100 text - xs whitespace - pre - wrap\"    />{c.content}</pre>))}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
          </section>))}
      </div>;
<<<<<<< HEAD
    </div>)))}
          </section>;
<<<<<<< HEAD
        ))}
      </div>
    </div>
);
}

"
=======
<<<<<<< HEAD
          </section>
=======
    </div>);

export const getStaticProps: GetStaticProps<PageProps> = async () => {_return {
    props: {
      docs: content as DocsContent}}
},

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500),
    return () => clearTimeout(id)
  }, []),

  return (
    <div className=&quot;p-8 max-w-4xl mx-auto&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>{docs.title}</h1>
      <div className=&quot;space-y-8&quot;>
        {docs.sections.map((s) => (
          <section key={s.id}>
            <h2 className=&quot;text-2xl font-semibold mb-2&quot;>{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code && s.code.map((c, i) => (
              <pre key={i} className="mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap">{c.content}</pre>
            ))}
          </section>
        ))}
      </div>
    </div>

  );
}
<<<<<<< HEAD



);
}
  );
}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/chore/fix-lint-and-merge
        ))}

  );
}



      </div>;
    </div>;
  )})}
      </div>
    </div>
  )
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}



      </div>;
  )})}
      </div>
  )
}
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
"
=======
>>>>>>> origin/resolved-merge-conflicts
"
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

"
=======
      </div>
    </div>

  );
}

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
