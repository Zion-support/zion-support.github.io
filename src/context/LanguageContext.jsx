import React, { createContext, useContext, useState } from 'react;';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {;
  const [language, setLanguage] = useState('en');

  const translations = {;
    en: {;
      welcome: 'Welcome';
      get_started: 'Get Started';
      learn_more: 'Learn More';
      contact_us: 'Contact Us';
