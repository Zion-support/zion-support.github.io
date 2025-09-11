import { apiClient } from '@/utils/apiClient';

export async function earnTokensForReferral(userId: string, referralId: string): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'referral', amount: 100, referralId }),
  });
}

export async function earnTokensForPurchase(userId: string, amount: number): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'purchase', amount }),
  });
}

export async function rewardOnboarding(userId: string): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'onboarding', amount: 50 }),
  });
}

export async function rewardProfileCompletion(userId: string): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'profile_completion', amount: 25 }),
  });
}

export async function rewardFirstService(userId: string): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    body: JSON.stringify({ userId, action: 'first_service', amount: 75 }),
  });
}

export async function getTokenBalance(userId: string): Promise<number> {
  const response = await apiClient(`/functions/v1/token-manager/balance/${userId}`);
  return response.balance || 0;
}

export async function spendTokens(userId: string, amount: number, reason: string): Promise<unknown> {
  return await apiClient('/functions/v1/token-manager/spend', {
    method: 'POST',
    body: JSON.stringify({ userId, amount, reason }),
  });
}