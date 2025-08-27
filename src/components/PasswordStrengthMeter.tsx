import React from 'react';

export function PasswordStrengthMeter({ password }) {
    const calculatePasswordStrength = (password) => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score;
    };

    const getStrengthLabel = (score) => {
        if (score <= 1) return "Very Weak";
        if (score <= 2) return "Weak";
        if (score <= 3) return "Fair";
        if (score <= 4) return "Good";
        return "Strong";
    };

    const score = calculatePasswordStrength(password);
    const value = (score / 5) * 100;
    const label = getStrengthLabel(score);

    const getStrengthColor = (score) => {
        if (score <= 1) return "bg-red-500";
        if (score <= 2) return "bg-orange-500";
        if (score <= 3) return "bg-yellow-500";
        if (score <= 4) return "bg-blue-500";
        return "bg-green-500";
    };

    return (
        <div className="mt-2" aria-live="polite">
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(score)}`}
                    style={{ width: `${value}%` }}
                />
            </div>
            <p className="text-xs text-zion-slate-light mt-1">{label}</p>
        </div>
    );
}
