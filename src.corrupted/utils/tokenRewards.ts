// import apiClient from './apiClient';

export const earnOnboardingTokens = async (userId: string): Promise<void> => {
  // await apiClient('/functions/v1/token-manager/earn', {
  //   method: 'POST',
  //   body: JSON.stringify({ userId, action: 'onboarding', amount: 50 })
  // });
  console.log('Earn onboarding tokens for:', userId);
};

export const earnPurchaseTokens = async ({
  userId,
  purchaseAmount
}: {
  userId: string;
  purchaseAmount: number;
}): Promise<void> => {
  // await apiClient('/functions/v1/token-manager/earn', {
  //   method: 'POST',
  //   body: JSON.stringify({ userId, action: 'purchase', amount: purchaseAmount, purchaseType: 'service' })
  // });
  console.log('Earn purchase tokens for:', userId, purchaseAmount);
};

export const earnReferralTokens = async ({
  userId,
  referredUserId
}: {
  userId: string;
  referredUserId: string;
}): Promise<void> => {
  // await apiClient('/functions/v1/token-manager/earn', {
  //   method: 'POST',
  //   body: JSON.stringify({ userId, action: 'referral', referredUserId, amount: 100 })
  // });
  console.log('Earn referral tokens for:', userId, referredUserId);
};
