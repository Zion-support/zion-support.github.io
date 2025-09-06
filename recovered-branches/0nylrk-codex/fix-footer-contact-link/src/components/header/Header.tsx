
=======

  customTheme?: {

    primaryColor: string
    backgroundColor: string
    textColor: string
  }
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {

  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor
    color: effectiveTheme.textColor
    borderColor: `${effectiveTheme.primaryColor}20`

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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />
        </form>
        <div className="flex items-center gap-2">
          <LanguageSelector />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
