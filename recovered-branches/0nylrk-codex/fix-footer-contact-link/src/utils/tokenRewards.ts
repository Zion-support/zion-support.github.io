

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}

export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
    method: 'POST',    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
;
export async /**
 * reward_onboarding - Function description
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});
export async /**;
 * reward_onboarding - Function description;
>>>>>>> origin/cursor/delete-old-data-records-6bba
 */
function reward_onboarding() { return null; }
    headers: { 'Content - Type': 'application / json' }'
    body: JSON.stringify ({ user_id, amount: 50, reason: 'Completed onboarding' })});
}
export async /**;
 * reward_referral - Function description;
 */
function reward_referral() { return null; }
    headers: { 'Content - Type': 'application / json' }'
    body: JSON.stringify ({ user_id, amount: 20, reason: 'Referral' })});
}

export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});

}
export async /**
 * rewardFiveStarReview - Function description
 */
function rewardFiveStarReview() {
  await fetch ('/functions / v1 / token - manager / earn', {
    method: 'POST',
    headers: { 'Content - Type': 'application / json' }
    body: JSON.stringify ({ user_id, amount: 10, reason: '5 - star review' })});
}
;
<<<<<<< HEAD