
<<<<<<< HEAD
import { apiClient } from './apiClient',
export async function rewardOnboarding(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}

export async function rewardReferral(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}

export async function rewardFiveStarReview(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
=======

export async function rewardOnboarding(_userId: string) {_await apiClient('/functions/v1/token-manager/earn', _{
    method: 'POST', _headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({_userId, _amount: 50, _reason: 'Completed onboarding'})});
}

export async function rewardReferral(_userId: string) {_await apiClient('/functions/v1/token-manager/earn', _{
    method: 'POST', _headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({_userId, _amount: 20, _reason: 'Referral'})});
}

export async function rewardFiveStarReview(_userId: string) {_await apiClient('/functions/v1/token-manager/earn', _{
    method: 'POST', _headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({_userId, _amount: 10, _reason: '5-star review'})});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
