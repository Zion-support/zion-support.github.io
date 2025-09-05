<<<<<<< HEAD
const { ChevronDown,Globe export const LanguageSelector = () => { const [isOpen,setIsOpen] = useState(false) const [currentLanguage,setCurrentLanguage] = useState("EN") const languages = [" { code: "EN,",name: "English,",flag: "},{ code: "ES,",name: "Espaol,",flag: "},{ code: "FR,",name: "Franais,",flag: "},{ code: "DE,",name: "Deutsch,",flag: "},{ code: "IT,",name: "Italiano,",flag: "},{ code: "PT,",name: "Portugus,",flag: "},{ code: "RU,",name: ",flag: ""},{ code: "ZH,",name: ",flag: ""},{ code: "JA,",name: ",flag: ""},{ code: "KO,",name: ",flag: ""} ] const handleLanguageChange = (languageCode) => { setCurrentLanguage(languageCode) setIsOpen(false)"";"";"""
=======
import React from 'react';

interface LanguageSelectorProps {
  // Add props here as needed
}

export default function LanguageSelector({ }: LanguageSelectorProps) {
  return (
    <div>
      <h1>LanguageSelector</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> main
