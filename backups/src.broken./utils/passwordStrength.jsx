export function calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8)
        score++;
    if (/[A-Z]/.test(password))
        score++;
    if (/[a-z]/.test(password))
        score++;
    if (/[0-9]/.test(password))
        score++;
    if (/[^A-Za-z0-9]/.test(password))
        score++;
    if (score > 4)
        score = 4;
    return score;
}
export function getStrengthLabel(score) {
    switch (score) {
        case 0:
            return "Very weak";
        case 1:
            return "Weak";
        case 2:
            return "Fair";
        case 3:
            return "Good";
        case 4:
            return "Strong";
        default:
            return "";
    }
}
