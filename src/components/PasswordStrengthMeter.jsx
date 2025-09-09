import React from 'react';
import { Progress } from '@/components/ui/progress';

export function PasswordStrengthMeter({ password }) {
  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return Math.min(score, 5);
  };

  const getStrengthLabel = (score) => {
    if (score <= 1) return 'Very Weak';
    if (score <= 2) return 'Weak';
    if (score <= 3) return 'Fair';
    if (score <= 4) return 'Good';
    return 'Strong';
  };

  const score = calculatePasswordStrength(password);
  const percentage = (score / 5) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-2">
        <span>Password Strength</span>
        <span className={score <= 2 ? 'text-red-500' : score <= 3 ? 'text-yellow-500' : 'text-green-500'}>
          {getStrengthLabel(score)}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}