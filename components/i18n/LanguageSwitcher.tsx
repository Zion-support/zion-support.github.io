
<<<<<<< HEAD
=======
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const localeToFlag: Record<string, string> = {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  en: 'us'
  pt: 'br'
  es: 'es'
  ar: 'sa'
};  ar: 'sa'}
const localeLabelKey: Record<string, string> = {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  en: 'us',
  pt: 'br',
  es: 'es',
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  en: 'us';
  pt: 'br';
  es: 'es';
origin/cursor/automate-test-improve-and-merge-code-2533
  ar: 'sa'},
const localeLabelKey: Record<string, string> = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};  ar: 'lang.arabic'},
export default function LanguageSwitcher() {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  en: 'lang.english';
  pt: 'lang.portuguese';
  es: 'lang.spanish';
  ar: 'lang.arabic'},

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = null;
  en: 'us'
  pt: 'br'
  es: 'es'
  ar: 'sa'
};  ar: 'sa'}
const localeLabelKey: Record<string, string> = {
  en: 'lang.english'
  pt: 'lang.portuguese'
  es: 'lang.spanish'
  ar: 'lang.arabic'
};  ar: 'lang.arabic'}
export default function LanguageSwitcher() {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = i18n.resolvedLanguage |i18n.language |'en';
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng)
    localStorage.setItem('preferredLanguage', lng);
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
setOpen(false);
  };

  return (
    <div className='relative'>;
      <button
        aria-haspopup='listbox'
        aria-expanded={open}
        className='flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
        onClick={() => setOpen(v => !v)}
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
                aria-selected={current.startsWith(lng)}
                className='w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900'
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="relative">;
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setOpen((v) => !v)}
<<<<<<< HEAD

=======
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>
  );
}
<<<<<<< HEAD
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
          viewBox='0 0 20 20';
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
        className="flex items - center gap - 2 px - 2 py - 1 rounded hover:bg - gray - 100 dark:hover:bg-gray-800";
        on_click={() => set_open ((v) => !v)}
      >;
        <span className={`fi fi-${localeToFlag[current] || 'us'}`}></span>;
        <span>{t (localeLabelKey[current] || 'lang.english')}</span>;
        <svg width="16" height="16" viewBox="0 0 20 20" fill="current_color" className="opacity-70"><path fill_rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71 - 3.955a.75.75 0 011.08 1.04l - 4.24 4.52a.75.75 0 01 - 1.08 0l - 4.24 - 4.52a.75.75 0 01.02 - 1.06z" clip_rule="evenodd" /></svg>;
      </button>;
      {open && (
        <ul role="listbox" className="absolute right - 0 mt - 2 w - 48 bg - white dark:bg - black border border - gray - 200 dark:border - gray - 800 rounded shadow-lg z-50">;
          {supported_locales.map ((lng) => (
            <li key={lng}>;
              <button;
                role="option";
                aria - selected={current.starts_with (lng)}
                className="w - full flex items - center gap - 2 px - 3 py - 2 hover:bg - gray - 50 dark:hover:bg-gray-900";
                on_click={() => change_language (lng)}
              >;
                <span className={`fi fi-${localeToFlag[lng]}`}></span>;
                <span>{t (localeLabelKey[lng])}</span>;
              </button>;
            </li>))}
        </ul>)}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
=======
<<<<<<< HEAD
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
