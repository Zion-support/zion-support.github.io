import React, { useState } from 'react';
import { useAutoTranslate } from '../../hooks/useAutoTranslate';

const defaultTargets = ['enptesar']
export default function TranslationPreview() {
  const [text, setText] = useState('')
  const [targets, setTargets] = useState<string[]>(defaultTargets)
  const { translations, loading, error } = useAutoTranslate(text, targets)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Translation Preview</h2>
      <textarea
        className="w-full border rounded p-2 h-32"
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-sm text-gray-500">{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((lng) => (
<<<<<<< HEAD
:components/admin/TranslationPreview.tsx
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {translations[lng] |(lng === 'en' ? text : '')}
            </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div key={lng} className=&quot;border rounded p-3&quot;>
            <div className=&quot;text-xs uppercase opacity-70 mb-2&quot;>{lng}</div>
            <div className=&quot;whitespace-pre-wrap text-sm min-h-[4rem]&quot;>
              {translations[lng] || (lng === 'en' ? text : '')}            </div>
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )}
:components/admin/TranslationPreview.tsx
  );
};
  )}
:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
