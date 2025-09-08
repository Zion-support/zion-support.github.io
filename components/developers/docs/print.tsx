


}
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';

import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import content from '../../../data/docs/content.json';









            {s && s.code && s && s.code.map((c, i) =    /> (<pre key={i} className=\"mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap\"    />{c && c.content}</pre>;



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

          </section>))}
      </div>;



        ))}







