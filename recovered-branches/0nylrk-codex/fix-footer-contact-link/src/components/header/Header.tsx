
import React from 'react';
<<<<<<< HEAD
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
export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
=======
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';
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
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}

export function Header(): any ({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchSuggestions = generateSearchSuggestions();
<<<<<<< HEAD
  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color
  const effectiveTheme = customTheme |(isWhitelabel ? {
=======

  // If we have a white-label tenant and no specific customTheme is provided;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    primaryColor;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined);
<<<<<<< HEAD
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
<<<<<<< HEAD
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
=======
      style={headerStyle}>;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;

        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
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
          />;
        </form>;

        <div className="flex items-center gap-2">;
          <LanguageSelector />;
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
