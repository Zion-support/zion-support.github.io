import React, { useState } from 'react';
import { useAutoTranslate } from '../../hooks/useAutoTranslate';
const defaultTargets = null;
origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
export default function TranslationPreview() {
  const [text, setText] = useState('')
  const [targets, setTargets] = useState<string[]>(defaultTargets)
  const { translations, loading, error } = useAutoTranslate(text, targets)
origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
  return (
<div className='space-y-4'>
      <h2 className='text-lg font-semibold'>Translation Preview</h2>
      <textarea
        className='w-full border rounded p-2 h-32'
        placeholder='Enter text to translate...'
        value={text}
        onChange={e => setText(e.target.value)}
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="text-sm text-gray-500">{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (

          <div key={lng} className=&quot;border rounded p-3&quot;>
            <div className=&quot;text-xs uppercase opacity-70 mb-2&quot;>{lng}</div>
            <div className=&quot;whitespace-pre-wrap text-sm min-h-[4rem]&quot;>
              {translations[lng] || (lng === 'en' ? text : '')}            </div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      <div className="text-sm text-gray-500">{loading ? 'Translating' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
      <div className="text-sm text-gray-500">{loading ? 'Translating' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      <div className='text-sm text-gray-500'>
        {loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        {targets.map(lng => (
          <div key={lng} className='border rounded p-3'>
            <div className='text-xs uppercase opacity-70 mb-2'>{lng}</div>
            <div className='whitespace-pre-wrap text-sm min-h-[4rem]'>
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533:components/admin/TranslationPreview.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
