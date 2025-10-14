import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2024";

  return (
    <>
      <Helmet>
        <title>PrivacyPage - Zion Tech Group</title>
        <meta name="description" content="PrivacyPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">PrivacyPage</h1>
          <p className="text-lg text-gray-300">
            This is the PrivacyPage page for Zion Tech Group.
          </p>
        </div>
      </div>
)
    </>)
  )
}
export default PrivacyPag;e;
';
