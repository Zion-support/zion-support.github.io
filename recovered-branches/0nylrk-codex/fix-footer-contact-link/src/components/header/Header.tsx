
<<<<<<< HEAD
<<<<<<< HEAD



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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';
<<<<<<< HEAD
<<<<<<< HEAD
import {MainNavigation} from '@/layout/MainNavigation';
import {useAuth} from '@/hooks/useAuth';
import {useWhitelabel} from '@/context/WhitelabelContext';
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
export interface HeaderProps {;
  hideLogin?: boolean;
  customLogo?: string;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;

    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import { Link } from 'react-router-dom',
import { Logo } from './Logo',
import { UserMenu } from './UserMenu',
import { LanguageSelector } from './LanguageSelector',
import { MainNavigation } from '@/layout/MainNavigation',
import { useAuth } from '@/hooks/useAuth',
import { useWhitelabel } from '@/context/WhitelabelContext',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom",
import { useState } from "react",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
<<<<<<< HEAD

<<<<<<< HEAD
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color
  const effectiveTheme = customTheme |(isWhitelabel ? {
    primaryColor;
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),
  const [query, setQuery] = useState(""),
  const searchSuggestions = generateSearchSuggestions(),
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),


  
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`
<<<<<<< HEAD


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme && effectiveTheme.backgroundColor,;
    color: effectiveTheme && effectiveTheme.textColor,;
    borderColor: `${effectiveTheme && effectiveTheme.primaryColor}20`;
  } : {};

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (query && query.trim()) {;
<<<<<<< HEAD
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }

  };


  },
  

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      navigate(`/search?q=${encodeURIComponent(query)}`);
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

<<<<<<< HEAD
<<<<<<< HEAD
  } : {}
  } : {},

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
<<<<<<< HEAD
<<<<<<< HEAD
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />



          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export interface HeaderProps {;
  hideLogin?: boolean,;
  customLogo?: string,;
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}
;
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth(),;
  const { isWhitelabel, primaryColor } = useWhitelabel(),;
  const navigate = useNavigate(),;
  const [query, setQuery] = useState(""),;
  const searchSuggestions = generateSearchSuggestions(),;
  // If we have a white-label tenant and no specific customTheme is provided,;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
    primaryColor,;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined),;
  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme.backgroundColor,;
    color: effectiveTheme.textColor,;
    borderColor: `${effectiveTheme.primaryColor}20`;
  } : {},;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  return (;
    <header;
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";
      style={headerStyle}
    >;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}

<<<<<<< HEAD
<<<<<<< HEAD


          />;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {MainNavigation} from '@/layout / MainNavigation';
import {use_auth} from '@/hooks / use_auth';
import {use_whitelabel} from '@/context / WhitelabelContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { use_navigate } from './react-router-dom';
import { useState } from './react';
export interface HeaderProps {
  hide_login?: boolean;
  custom_logo?: string;
  custom_theme?: {
    primary_color: string,
    background_color: string,
    text_color: string;
  }
}
export /**
 * Header - Function description
 */
function Header() {
  const { user } = use_auth ();
  const { is_whitelabel, primary_color } = use_whitelabel ();
  const navigate = use_navigate ();
  const [query, set_query] = useState ("");
  const search_suggestions = generateSearchSuggestions ();
;
<<<<<<< HEAD
  // If we have a white - label tenant and no specific custom_theme is provided;
  // use the tenant's primary color;
  const effective_theme = custom_theme || (is_whitelabel ? {
    primary_color;
    background_color: '#0f172a', // Default dark background;
    text_color: '#ffffff', // Default light text;
  } : undefined);
;
  const header_style = effective_theme ? {
    background_color: effective_theme.background_color,
    color: effective_theme.text_color,
    border_color: `${effective_theme.primary_color}20`;
  } : {}
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default (),
    if () {) {
  $2
}
      navigate (`/search?q=${encodeURIComponent (query)}`);
      set_query ("");
    }
  }
;
  return (
    <header;
      className="sticky top - 0 z - 50 w - full border - b border - zion - purple / 20 bg - zion - blue - dark / 90 backdrop - blur - md";
      style={header_style}
    >;
      <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
        <Logo custom_logo={custom_logo} custom_color={effective_theme?.primary_color} />;
        <div className="ml - 6 flex - 1">;
          <MainNavigation />;
        </div>;
        <form on_submit={handle_submit} className="hidden md:block w - 64 mx - 4">;
          <EnhancedSearchInput;
            value={query}
            on_change={set_query}
            search_suggestions={search_suggestions}
          />;
        </form>;
        <div className="flex items - center gap - 2">;
          <LanguageSelector />;
          {!hide_login && <UserMenu />}
        </div>;
      </div>;
    </header>);

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
