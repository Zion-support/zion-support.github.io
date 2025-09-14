import React from 'react';

interface EmailVerificationBannerProps {
  user?: { email?: string; emailVerified?: boolean };
  onResendEmail?: () => void;
  isResending?: boolean;
  statusMessage?: string;
}

export default function EmailVerificationBanner({ 
  user, 
  onResendEmail, 
  isResending, 
  statusMessage 
}: EmailVerificationBannerProps) {
  if (!user || !user.email || user.emailVerified) {
    return null;
  }

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm">
            Please verify your email address. We sent a verification link to {user.email}
          </p>
          {onResendEmail && (
            <button
              onClick={onResendEmail}
              disabled={isResending}
              className="mt-2 text-sm underline hover:no-underline"
            >
              {isResending ? 'Resending...' : 'Resend verification email'}
            </button>
          )}
          {statusMessage && (
            <p className="mt-2 text-sm">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}