import React, {_useState} from 'react';

const _defaultTargets = ['en', 'pt', 'es', 'ar'];

export default function TranslationPreview() {_const [text, _setText] = useState('');
  const [targets, _setTargets] = useState<string[]>(defaultTargets);
  const { translations, _loading, _error} = useAutoTranslate(text, targets);

  return (_<div className="space-y-4">
      <h2 className="text-lg font-semibold">Translation Preview</h2>
      <textarea
        className="w-full border rounded p-2 h-32"
        placeholder="Enter text to translate..."
        value={_text}
        onChange={_(e) => setText(e.target.value)}
      />
      <div className="text-sm text-gray-500">{_loading ? 'Translating…' : error ? `Error: ${error}` : 'Ready'}</div>
      <div className="grid md:grid-cols-2 gap-4">
        {_targets.map(_(lng) => (
          <div key={lng} className="border rounded p-3">
            <div className="text-xs uppercase opacity-70 mb-2">{_lng}</div>
            <div className="whitespace-pre-wrap text-sm min-h-[4rem]">
              {_translations[lng] || (lng === 'en' ? text : '')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}