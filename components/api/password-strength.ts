import type { NextApiRequest, NextApiResponse } from 'next',
interface PasswordStrengthResult {
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong',
  score: number,
  feedback: string[]}
,
export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST'),
    return res.status(405).json({ error: 'Method Not Allowed' })}
,
  try {
    const { password } = req.body as { password: string };
    if (!password) {
      return res.status(400).json({ error: 'Password is required' })}
,
    const result = calculatePasswordStrength(password),
    return res.status(200).json(result)} catch (error) {
    console.error('Error calculating password strength:', error),
    return res.status(500).json({ error: 'Internal server error' })}
}
,
function calculatePasswordStrength(password: string): PasswordStrengthResult {
  let score = 0,
  const feedback: string[] = [],
  // Length check,
  if (password.length < 8) {
    feedback.push('Password is too short (minimum 8 characters)')} else if (password.length >= 12) {
    score += 2} else {
    score += 1}
,
  // Character variety checks,
  const hasUppercase = /[A-Z]/.test(password),
  const hasLowercase = /[a-z]/.test(password),
  const hasNumbers = /\d/.test(password),
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password),
  if (!hasUppercase) feedback.push('Add uppercase letters'),
  else score += 1,
  if (!hasLowercase) feedback.push('Add lowercase letters'),
  else score += 1,
  if (!hasNumbers) feedback.push('Add numbers'),
  else score += 1,
  if (!hasSpecial) feedback.push('Add special characters'),
  else score += 1,
  // Common patterns check,
  const commonPatterns = ['123', 'abc', 'password', 'qwerty'],
  const hasCommonPattern = commonPatterns.some(pattern =>,
    password.toLowerCase().includes(pattern)),
  if (hasCommonPattern) {
    feedback.push('Avoid common patterns and words'),
    score -= 1}
,
  // Determine strength level,
  let strength: PasswordStrengthResult['strength'],
  if (score <= 1) strength = 'very-weak',
  else if (score <= 3) strength = 'weak',
  else if (score <= 5) strength = 'medium',
  else if (score <= 7) strength = 'strong',
  else strength = 'very-strong',
  return {
    strength;
    score: Math.max(0, score);
    feedback;
  };
}
,