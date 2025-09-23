

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })});
=======
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),
  });
>>>>>>> origin/auto/autonomy-17186719616
}

export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })});
=======
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),
  });
>>>>>>> origin/auto/autonomy-17186719616
}

export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});
=======
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),
  });
>>>>>>> origin/auto/autonomy-17186719616
}
