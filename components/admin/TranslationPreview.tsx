
import React, { useState } from 'react';
import { useAutoTranslate } from '../../hooks/useAutoTranslate';
<<<<<<< HEAD
<<<<<<< HEAD:components/admin/TranslationPreview.tsx
const defaultTargets = null;
=======
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx

const defaultTargets = ['enptesar']

const defaultTargets = null;

export default function TranslationPreview() {
  const [text, setText] = useState('')
  const [targets, setTargets] = useState<string[]>(defaultTargets)
  const { translations, loading, error } = useAutoTranslate(text, targets)
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx

<<<<<<< HEAD

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======
const defaultTargets = null;
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

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
<<<<<<< HEAD:components/admin/TranslationPreview.tsx
      <div className="text-sm text-gray-500">{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>
=======
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
      <div className="text-sm text-gray-500">{loading ? 'Translating' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (

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
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======
      <div className="text-sm text-gray-500">{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD:components/admin/TranslationPreview.tsx
  )
};
=======
=======
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx

  );
}

<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======
  )
};
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
