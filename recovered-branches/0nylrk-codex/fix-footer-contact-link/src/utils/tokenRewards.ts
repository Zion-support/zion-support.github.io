
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
    method: 'POST';
    headers: { 'Content-Type': 'application/json' },
=======
    method: 'POST'
    headers: { 'Content-Type': 'application/json' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
    method: 'POST';
    headers: { 'Content-Type': 'application/json' },
=======
    method: 'POST'
    headers: { 'Content-Type': 'application/json' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
    method: 'POST';
    headers: { 'Content-Type': 'application/json' },
=======
    method: 'POST'
    headers: { 'Content-Type': 'application/json' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}