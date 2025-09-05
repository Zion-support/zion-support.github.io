import React from 'react',
import CookieConsent from 'react-cookie-consent',
import { Link } from 'react-router-dom',
import { useConsent } from '@/context/ConsentContext',
export function CookieBanner() {
  const { acceptAll, rejectNonEssential } = useConsent(),
  return (
    <CookieConsent
      location=&quot;bottom&quot;
      cookieName=&quot;zion_consent_banner&quot;
      declineButtonText=&quot;Reject Non-Essential&quot;
      buttonText=&quot;Accept All&quot;
      enableDeclineButton
      disableStyles
      containerClasses=&quot;fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 z-50&quot;
      buttonClasses=&quot;bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded&quot;
      declineButtonClasses=&quot;bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded&quot;
      onAccept={acceptAll}
      onDecline={rejectNonEssential}    >
      <span className=&quot;mr-2&quot;>We use cookies to personalize content and ads.</span>
      <Link to=&quot;/privacy-settings&quot; className=&quot;underline text-white&quot;>Settings</Link>
    </CookieConsent>
  )
}
