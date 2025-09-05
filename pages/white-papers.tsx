import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WhitePapersRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the existing whitepapers page
    router.replace('/whitepapers');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirecting...</h1>
        <p className="text-gray-600">Taking you to our white papers section.</p>
      </div>
    </div>
  );
}