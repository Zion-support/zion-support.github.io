import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import { useConsent } from '@/context/ConsentContext';
}

export function CookieBanner() {
  const { acceptAll, rejectNonEssential } = useConsent();

  
    >
      <span className='mr-2'>
        We use cookies to personalize content and ads.
      </span>
      <Link to='/privacy-settings' className='underline text-white'>
        Settings
      </Link>
    </CookieConsent>
  );
