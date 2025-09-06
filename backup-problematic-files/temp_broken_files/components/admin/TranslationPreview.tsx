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
<<<<<<< HEAD:components/admin/TranslationPreview.tsx
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {translations[lng] |(lng === 'en' ? text : '')}
            </div>
=======
          <div key={lng} className=&quot;border rounded p-3&quot;>
            <div className=&quot;text-xs uppercase opacity-70 mb-2&quot;>{lng}</div>
            <div className=&quot;whitespace-pre-wrap text-sm min-h-[4rem]&quot;>
              {translations[lng] || (lng === 'en' ? text : '')}            </div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/temp_broken_files/components/admin/TranslationPreview.tsx
          </div>
        ))}
      </div>
    </div>
  )}