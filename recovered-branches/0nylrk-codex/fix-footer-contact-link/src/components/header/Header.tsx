


import React from 'react';
import { Link  } from 'react-router-dom';
import { Logo  } from './Logo';
import { UserMenu  } from './UserMenu';
import { LanguageSelector  } from './LanguageSelector';
import { MainNavigation  } from '@/layout/MainNavigation';
import { useAuth  } from '@/hooks/useAuth';
import { useWhitelabel  } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom";
import { useState } from "react";
=======
==============




  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;

    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);


=======
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {},



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
=======
  } : {}
  } : {},

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
=======
  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme && effectiveTheme.backgroundColor,;
    color: effectiveTheme && effectiveTheme.textColor,;
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (query && query.trim()) {;
  };


  },
  

=======      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  }

  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"

      style={headerStyle}>;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;

        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`),
      setQuery("")
    }
  }

  },
  
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}


          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
=======
=======
=======


=======

          />;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
=======
=======          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;



import React from 'react',;
import { Link } from 'react-router-dom',;
import { Logo } from './Logo',;
import { UserMenu } from './UserMenu',;
import { LanguageSelector } from './LanguageSelector',;
import { MainNavigation } from '@/layout/MainNavigation',;
import { useAuth } from '@/hooks/useAuth',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { useNavigate } from "react-router-dom",;
import { useState } from "react",;
;
export interface HeaderProps {;
  hideLogin?:boolean,;
  customLogo?:string,;
  customTheme?:{;
    primaryColor:string,;
    backgroundColor:string,;
    textColor:string;
  },;
}
<<<<<<< HEAD
;
export function Header({ hideLogin = false, customLogo, customTheme } HeaderProps) {;
  const { user } = useAuth(),;
  const { isWhitelabel, primaryColor } = useWhitelabel(),;
  const navigate = useNavigate(),;
  const [query, setQuery] = useState(""),;
  const searchSuggestions = generateSearchSuggestions(),;
  ;
  // If we have a white-label tenant and no specific customTheme is provided,;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
    primaryColor,;
    backgroundColor:'#0f172a', // Default dark background;
    textColor:'#ffffff', // Default light text;
  } undefined),;
  ;
  const headerStyle = effectiveTheme ? {;
    backgroundColor:effectiveTheme.backgroundColor,;
    color:effectiveTheme.textColor,;
    borderColor:`${effectiveTheme.primaryColor}20`;
  } {},;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`),;
      setQuery(""),;
    }
  },;
  ;
  return (;
    <header ;
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";
      style={headerStyle}
    >;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
;
        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />;
        </form>;
;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  ),; export interface HeaderProps {
  hideLogin?: boolean;
customLogo?: string;
customTheme?: {
  primaryColor: string;
backgroundColor: string;
textColor: string 
}
}export function Header ({
  hideLogin = false, customLogo, customTheme 
}: HeaderProps) {
  //If we have a white-label tenant and no specific customTheme is provided;
//use the tenant's primary color const effectiveTheme = customTheme || (isWhitelabel ? {
  primaryColor;
backgroundColor: '#0f172a', //Default dark background textColor: '#ffffff', //Default light text 
}: undefined);
const headerStyle = effectiveTheme ? {
  backgroundColor: effectiveTheme.backgroundColor;
color: effectiveTheme.textColor;
borderColor: `$ {
  effectiveTheme.primaryColor 
}20` 
}: {
  
};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
}
};
return (<header <div className="ml-6 flex-1" > <MainNavigation /> </div> <EnhancedSearchInput value= {
  query 
}onChange= {
  setQuery 
}searchSuggestions= {
  searchSuggestions 
}/> </form> <div className="flex items-center gap-2" > <LanguageSelector /> {
  !hideLogin && <UserMenu /> 
}</div> </div> </header>) 
}
;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
