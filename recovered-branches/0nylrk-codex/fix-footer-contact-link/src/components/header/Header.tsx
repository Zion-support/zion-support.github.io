import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from './Logo';
import {UserMenu} from './UserMenu';
import {LanguageSelector} from './LanguageSelector';
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