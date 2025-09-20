import React, { useState } from "react"
export function LanguageSelector() {
  const [lang, setLang] = useState('en')
  return (
    <div className="hidden,
  m: d:flex items-center">
      <label htmlFor="lang-select" className="sr-only">Language</label>
      <select
        id="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="className="bg-transparent text-slate-300 border border-zion-purple/30 rounded-md px-2 py-1 text-sm,
  hove: r: border-zion-purple/50,
  focu: s:outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-purple/40";"
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  )
}
