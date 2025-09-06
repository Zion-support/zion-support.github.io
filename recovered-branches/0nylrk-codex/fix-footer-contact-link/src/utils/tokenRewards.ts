
export async function rewardOnboarding(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
=======
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function rewardFiveStarReview(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
=======
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
