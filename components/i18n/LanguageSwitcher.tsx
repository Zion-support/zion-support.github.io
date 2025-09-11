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
=======
import { useTranslation  } from 'react-i18next';
import i18n from '../../utils/i18n';
import { supportedLocales, isRtl } from '../../utils/i18n';
import {supportedLocales, isRtl} from '../../utils/i18n';
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};  ar: 'lang.arabic'},
export default function LanguageSwitcher() {;


const localeToFlag: Record<string, string> = {

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
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};  ar: 'lang.arabic'},
export default function LanguageSwitcher() {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = i18n.resolvedLanguage |i18n.language |'en';
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng)
    localStorage.setItem('preferredLanguage', lng);
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
