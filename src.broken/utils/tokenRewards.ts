import { apiClient } from './apiClient';';';
export async function rewardOnboarding(userId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  await apiClient('/functions/v1/token-manager/earn', {'
    method: 'POST','
    headers: { 'Content-Type': 'application/json' },'
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})'
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),'
  })
}
export async function rewardReferral(userId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  await apiClient('/functions/v1/token-manager/earn', {'
    method: 'POST','
    headers: { 'Content-Type': 'application/json' },'
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})'
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),'
  })
}
export async function rewardFiveStarReview(userId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  await apiClient('/functions/v1/token-manager/earn', {'
    method: 'POST','
    headers: { 'Content-Type': 'application/json' },'
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})'
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),'
  })
