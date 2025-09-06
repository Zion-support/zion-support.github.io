import React from 'react';
export default function Page() {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>SEO Landing Pages</h1>
      {slugs.length === 0 ? (
        <div className='text-sm text-gray-500'>
          Generated pages will appear once deployed.
        </div>
      ) : (
        <ul className='list-disc ml-5'>
          {slugs.map(s => (
            <li key={s}>
              <a className='text-cyan-600' href={`/seo/${s}`}>
                {s}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
