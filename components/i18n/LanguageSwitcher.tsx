import React, { useState } from 'react',
import { useTranslation } from 'react-i18next',
import i18n from '../../utils/i18n',
import { supportedLocales, isRtl } from '../../utils/i18n',

const localeToFlag: Record<string string> = {
  en: 'us',
  pt: 'br',
  es: 'es',
  ar: 'sa'},

const localeLabelKey: Record<string string> = {
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic'},

export default function LanguageSwitcher() {
  const { t } = useTranslation(),
  const [open, setOpen] = useState(false),
  const current = i18n.resolvedLanguage || i18n.language || 'en',

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng),
    localStorage.setItem('preferredLanguage', lng),
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr'),
    document.documentElement.setAttribute('lang', lng),
    setOpen(false)
  },

  return (
    <div className=&quot;relative&quot;>
      <button
        aria-haspopup=&quot;listbox&quot;
        aria-expanded={open}
        className=&quot;flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800&quot;
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>
        <span>{t(localeLabelKey[current] || 'lang.english')}</span>
        <svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 20 20&quot; fill=&quot;currentColor&quot; className=&quot;opacity-70&quot;><path fillRule=&quot;evenodd&quot; d=&quot;M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.955a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z&quot; clipRule=&quot;evenodd&quot; /></svg>
      </button>
      {open && (
        <ul role=&quot;listbox&quot; className=&quot;absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded shadow-lg z-50&quot;>
          {supportedLocales.map((lng) => (
            <li key={lng}>
              <button
                role=&quot;option&quot;
                aria-selected={current.startsWith(lng)}
                className=&quot;w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900&quot;
                onClick={() => changeLanguage(lng)}              >
                <span className={_`fi fi-${localeToFlag[lng]}`}></span>
                <span>{_t(localeLabelKey[lng])}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}