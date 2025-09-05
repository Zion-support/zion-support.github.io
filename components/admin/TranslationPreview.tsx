import React, { useState } from 'react';
import { useAutoTranslate } from '../../hooks/useAutoTranslate';

const defaultTargets = ['en', 'pt', 'es', 'ar'];

export default function TranslationPreview() {
  const [text, setText] = useState('');
  const [targets, setTargets] = useState<string[]>(defaultTargets);
  const { translations, loading, error } = useAutoTranslate(text, targets);

  return (
    <div className=&quot;space-y-4&quot;>
      <h2 className=&quot;text-lg font-semibold&quot;>Translation Preview</h2>
      <textarea
        className=&quot;w-full border rounded p-2 h-32&quot;
        placeholder=&quot;Enter text to translate...&quot;
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className=&quot;text-sm text-gray-500&quot;>{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        {targets.map((lng) => (
          <div key={lng} className=&quot;border rounded p-3&quot;>
            <div className=&quot;text-xs uppercase opacity-70 mb-2&quot;>{lng}</div>
            <div className=&quot;whitespace-pre-wrap text-sm min-h-[4rem]&quot;>
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}