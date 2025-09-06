import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {
.then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => setMarkdown(d.markdown || ''))
      .catch(() => setNotFound(true));
  }, [id]);
  if (notFound)
    return (
      <div className='container mx-auto px-4 py-6'>
        Preview not available or expired.
      </div>
    );
  if (!markdown)
    return <div className='container mx-auto px-4 py-6'>Loading…</div>;
  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
  );
