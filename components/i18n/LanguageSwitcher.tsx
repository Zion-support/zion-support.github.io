
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import { useTranslation  } from 'react-i18next';
import i18n from '../../utils/i18n';
import { supportedLocales, isRtl } from '../../utils/i18n';
import {supportedLocales, isRtl} from '../../utils/i18n';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


const localeToFlag: Record<string, string> = {

  en: 'us',
  pt: 'br',
  es: 'es',
  ar: 'sa'},
const localeLabelKey: Record<string, string> = {
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic'},

export default function LanguageSwitcher() {
=======

  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};  ar: 'lang.arabic'},
export default function LanguageSwitcher() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = i18n.resolvedLanguage |i18n.language |'en';
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng)
    localStorage.setItem('preferredLanguage', lng);
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);

import {supportedLocales, isRtl} from '../../utils/i18n';
const localeToFlag: Record<string, string> = {;
  en: 'us',;
  pt: 'br',;
  es: 'es',;
  ar: 'sa',;
};  ar: 'sa'},;
const localeLabelKey: Record<string, string> = {;
  en: 'lang && lang.english',;
  pt: 'lang && lang.portuguese',;
  es: 'lang && lang.spanish',;
  ar: 'lang && lang.arabic',;
};  ar: 'lang && lang.arabic'},;
export default function LanguageSwitcher() {;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = i18n && i18n.resolvedLanguage || i18n && i18n.language || 'en';
  const changeLanguage = async (lng: string) => {;
    await i18n && i18n.changeLanguage(lng),;
    localStorage && localStorage.setItem('preferredLanguage', lng);
    document && document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document && document.documentElement.setAttribute('lang', lng);

    setOpen(false);
  }
  return (
    <div className='relative'>;
      <button
        aria-haspopup='listbox'
        aria-expanded={open}
        className='flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
        onClick={() => setOpen(v => !v)}

      >;
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>;
        <span>{t(localeLabelKey[current] || 'lang && lang.english')}</span>;

        <svg
          width='16'
          height='16'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='opacity-70'>;
          <path
            fillRule='evenodd'
            d='M5 && M5.23 7 && 7.21a.75 && 75.75 0 011 && 011.06.02L10 11 && 11.187l3.71-3 && 3.955a.75 && 75.75 0 011 && 011.08 1 && 1.04l-4 && 4.24 4 && 4.52a.75 && 75.75 0 01-1 && 1.08 0l-4 && 4.24-4 && 4.52a.75 && 75.75 0 01 && 01.02-1 && 1.06z'
            clipRule='evenodd'
          />;
        </svg>;
      </button>;
      {open && (;
        <ul
          role='listbox'
          className='absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded shadow-lg z-50'>;
          {supportedLocales && supportedLocales.map(lng => (;
            <li key={lng}>;
              <button
                role='option'

                aria-selected={current && current.startsWith(lng)}
                className='w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900'                onClick={() => changeLanguage(lng)}  };


  return (
    <div className="relative">;
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setOpen((v) => !v)}

      >;
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>;
        <span>{t(localeLabelKey[current] || 'lang && lang.english')}</span>;
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="opacity-70"><path fillRule="evenodd" d="M5 && M5.23 7 && 7.21a.75 && 75.75 0 011 && 011.06.02L10 11 && 11.187l3.71-3 && 3.955a.75 && 75.75 0 011 && 011.08 1 && 1.04l-4 && 4.24 4 && 4.52a.75 && 75.75 0 01-1 && 1.08 0l-4 && 4.24-4 && 4.52a.75 && 75.75 0 01 && 01.02-1 && 1.06z" clipRule="evenodd" /></svg>;
      </button>;
      {open && (;
        <ul role="listbox" className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded shadow-lg z-50">;
          {supportedLocales && supportedLocales.map((lng) => (;
            <li key={lng}>;

              <button
                role="option"
                aria-selected={current && current.startsWith(lng)}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900"
                onClick={() => changeLanguage(lng)}
              >;
                <span className={`fi fi-${localeToFlag[lng]}`}></span>;
                <span>{t(localeLabelKey[lng])}</span>;
              </button>;
            </li>;
          ))}
        </ul>;
      )}
    </div>
);
}
  );
}
import {use_translation} from 'react - i18next';
import i18n from '../../utils / i18n';
import {supported_locales, is_rtl} from '../../utils / i18n';
const localeToFlag: Record < string, string> = {
  en: 'us',
  pt: 'br',
  es: 'es',
  ar: 'sa',
}  ar: 'sa'},
const localeLabelKey: Record < string, string> = {
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
}  ar: 'lang.arabic'},
export default /**
 * LanguageSwitcher - Function description
 */
function LanguageSwitcher() {
  const { t } = use_translation ();
  const [open, set_open] = useState (false);
  const current = i18n.resolved_language || i18n.language || 'en';
;
  const change_language = async (lng: string) => {
    await i18n.change_language (lng),
    local_storage.set_item ('preferred_language', lng);
    document.document_element.set_attribute ('dir', is_rtl (lng) ? 'rtl' : 'ltr');
    document.document_element.set_attribute ('lang', lng);
    set_open (false);
  }
;
  return (
    <div className='relative'>;
      <button;
        aria - haspopup='listbox';
        aria - expanded={open}
        className='flex items - center gap - 2 px - 2 py - 1 rounded hover:bg - gray - 100 dark:hover:bg - gray - 800';
        on_click={() => set_open (v => !v)}
      >;
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>;
        <span>{t (localeLabelKey[current] || 'lang.english')}</span>;
        <svg;
          width='16';
          height='16';
          view_box='0 0 20 20';
          fill='current_color';
          className='opacity - 70';
        >;
          <path;
            fill_rule='evenodd';
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71 - 3.955a.75.75 0 011.08 1.04l - 4.24 4.52a.75.75 0 01 - 1.08 0l - 4.24 - 4.52a.75.75 0 01.02 - 1.06z';
            clip_rule='evenodd';
          />;
        </svg>;
      </button>;
      {open && (
        <ul;
          role='listbox';
          className='absolute right - 0 mt - 2 w - 48 bg - white dark:bg - black border border - gray - 200 dark:border - gray - 800 rounded shadow - lg z - 50';
        >;
          {supported_locales.map (lng => (
            <li key={lng}>;
              <button;
                role='option';
                aria - selected={current.starts_with (lng)}
                className='w - full flex items - center gap - 2 px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg - gray - 900'                on_click={() => change_language (lng)}  }
;
  return (
    <div className="relative">;
      <button;
        aria - haspopup="listbox";
        aria - expanded={open}
        className="flex items - center gap - 2 px - 2 py - 1 rounded hover:bg - gray - 100 dark:hover:bg - gray - 800";
        on_click={() => set_open ((v) => !v)}
      >;
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>;
        <span>{t (localeLabelKey[current] || 'lang.english')}</span>;
        <svg width="16" height="16" view_box="0 0 20 20" fill="current_color" className="opacity - 70"><path fill_rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71 - 3.955a.75.75 0 011.08 1.04l - 4.24 4.52a.75.75 0 01 - 1.08 0l - 4.24 - 4.52a.75.75 0 01.02 - 1.06z" clip_rule="evenodd" /></svg>;
      </button>;
      {open && (
        <ul role="listbox" className="absolute right - 0 mt - 2 w - 48 bg - white dark:bg - black border border - gray - 200 dark:border - gray - 800 rounded shadow - lg z - 50">;
          {supported_locales.map ((lng) => (
            <li key={lng}>;
              <button;
                role="option";
                aria - selected={current.starts_with (lng)}
                className="w - full flex items - center gap - 2 px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg - gray - 900";
                on_click={() => change_language (lng)}
              >;
                <span className={`fi fi-${localeToFlag[lng]}`}></span>;
                <span>{t (localeLabelKey[lng])}</span>;
              </button>;
            </li>))}
        </ul>)}
    </div>);
              >
                <span className={_`fi fi-${localeToFlag[lng]}`}></span>
                <span>{_t(localeLabelKey[lng])}</span>
=======
      >
        <span className={`fi fi-${localeToFlag[current] |'us'}`}></span>
        <span>{t(localeLabelKey[current] |'lang.english')}</span>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="opacity-70"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.955a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded shadow-lg z-50">
          {supportedLocales.map((lng) => (
            <li key={lng}>
              <button
                role="option"
                aria-selected={current.startsWith(lng)}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900"
                onClick={() => changeLanguage(lng)}
              >
                <span className={`fi fi-${localeToFlag[lng]}`}></span>
                <span>{t(localeLabelKey[lng])}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>

  );
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
