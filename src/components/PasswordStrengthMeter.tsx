import React from 'react';

interface PasswordStrengthMeterProps {
  password: string;
  className?: string;
}

export function PasswordStrengthMeter({ password, className = '' }: PasswordStrengthMeterProps) {
  const calculateStrength = (password: string) => {
    let score = 0;
    let feedback = [];

    if (password.length === 0) {
      return { score: 0, strength: 'Enter a password', color: 'bg-gray-200' };
    }

    if (password.length < 8) {
      feedback.push('At least 8 characters');
    } else {
      score += 1;
    }

    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include lowercase letters');
    }

    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include uppercase letters');
    }

    if (/[0-9]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include numbers');
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Include special characters');
    }

    let strength = '';
    let color = '';

    if (score <= 1) {
      strength = 'Very Weak';
      color = 'bg-red-500';
    } else if (score === 2) {
      strength = 'Weak';
      color = 'bg-orange-500';
    } else if (score === 3) {
      strength = 'Fair';
      color = 'bg-yellow-500';
    } else if (score === 4) {
      strength = 'Good';
      color = 'bg-blue-500';
    } else {
      strength = 'Strong';
      color = 'bg-green-500';
    }

    return { score, strength, color, feedback };
  };

  const { score, strength, color, feedback } = calculateStrength(password);
  const maxScore = 5;
  const percentage = (score / maxScore) * 100;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Password Strength:</span>
        <span className={`text-sm font-medium px-2 py-1 rounded ${
          score <= 1 ? 'text-red-600 bg-red-50' :
          score === 2 ? 'text-orange-600 bg-orange-50' :
          score === 3 ? 'text-yellow-600 bg-yellow-50' :
          score === 4 ? 'text-blue-600 bg-blue-50' :
          'text-green-600 bg-green-50'
        }`}>
          {strength}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {password.length > 0 && (
        <div className="space-y-1">
          {feedback.map((item, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
              {item}
            </div>
          ))}
        </div>
      )}
      
      <div className="text-xs text-gray-500">
        Password must be at least 8 characters long and include a mix of letters, numbers, and special characters.
      </div>
    </div>
  );
}