
import { useRouter  } from 'next/router';
import { useEffect, useState } from 'react';
export default function WhitepaperPreview() {
  const router = null;

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-xl font-semibold mb-4'>Whitepaper Preview</h1>
      <pre className='whitespace-pre-wrap text-sm leading-6'>{markdown}</pre>
    </div>
);
