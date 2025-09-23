
import { apiClient } from './apiClient';

export async function rewardOnboarding(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),
  });
=======
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export async function rewardReferral(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),
  });
=======
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export async function rewardFiveStarReview(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),
  });
=======
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}
