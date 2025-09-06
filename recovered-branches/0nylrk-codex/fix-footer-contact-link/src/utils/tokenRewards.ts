
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})

}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})

<<<<<<< HEAD



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
;
export async /**
 * reward_onboarding - Function description
 */
function reward_onboarding() {
  await fetch ('/functions / v1 / token - manager / earn', {
    method: 'POST',
    headers: { 'Content - Type': 'application / json' }
    body: JSON.stringify ({ user_id, amount: 50, reason: 'Completed onboarding' })});
}
export async /**
 * reward_referral - Function description
 */
function reward_referral() {
  await fetch ('/functions / v1 / token - manager / earn', {
    method: 'POST',
    headers: { 'Content - Type': 'application / json' }
    body: JSON.stringify ({ user_id, amount: 20, reason: 'Referral' })});
}

;
export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
