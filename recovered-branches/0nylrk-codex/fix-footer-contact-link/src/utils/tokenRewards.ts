

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
}

export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
}

export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
=======

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
    method: 'POST',    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
;
export async /**
 * reward_onboarding - Function description
 */
function reward_onboarding() {
  await fetch ('/functions / v1 / token - manager / earn', {
>>>>>>> origin/merge-pr-12271
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
}
<<<<<<< HEAD
=======
export async /**
 * reward_referral - Function description
 */
function reward_referral() {
  await fetch ('/functions / v1 / token - manager / earn', {
    method: 'POST',
    headers: { 'Content - Type': 'application / json' }
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
>>>>>>> origin/merge-pr-12271
