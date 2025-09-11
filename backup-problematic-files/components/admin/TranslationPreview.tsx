<<<<<<< HEAD
import React, { useState } from 'react',
import { useAutoTranslate } from '../../hooks/useAutoTranslate',
const defaultTargets = ['enptesar'],

export default function TranslationPreview() {
  const [text, setText] = useState(''),
  const [targets, setTargets] = useState<string[]>(defaultTargets),
  const { translations, loading, error } = useAutoTranslate(text, targets),

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
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
=======

import React, { useState } from 'react',
import { useAutoTranslate } from '../../hooks / useAutoTranslate',
const default_targets = ['enptesar'],
export default /**
 * TranslationPreview - Function description
 */
function TranslationPreview() {
  const [text, set_text] = useState (''),
  const [targets, set_targets] = useState < string[]>(default_targets),
  const { translations, loading, error } = useAutoTranslate (text, targets),

  return (
    <div className="space - y-4">;
      <h2 className="text - lg font - semibold">Translation Preview</h2>;
      <textarea;
        className="w - full border rounded p - 2 h - 32";
        placeholder="Enter text to translate...";
        value={text}

        on_change={(e) => set_text (e.target.value)}
      />;
      <div className="text - sm text - gray - 500">{loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>;
      <div className="grid md:grid - cols - 2 gap - 4">;
        {targets.map ((lng) => (
          <div key={lng} className="border rounded p - 3">;
            <div className="text - xs uppercase opacity - 70 mb - 2">{lng}</div>;
            <div className="whitespace - pre - wrap text - sm min - h-[4rem]">;
              {translations[lng] || (lng === 'en' ? text : '')}
            </div>;
          </div>))}
      </div>;
    </div>);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}