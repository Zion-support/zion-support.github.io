import React, { useState } from 'react';

export function LanguageSelector() {
  const [lang, setLang] = useState('en');

  return (
    <div className="hidden md:flex items-center">
      <label htmlFor="lang-select" className="sr-only">Language</label>
      <select
        id="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="bg-transparent text-slate-300 border border-zion-purple/30 rounded-md px-2 py-1 text-sm hover:border-zion-purple/50 focus:outline-none focus:ring-2 focus:ring-zion-purple/40"
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
