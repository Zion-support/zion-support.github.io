<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
    method: 'POST',
<<<<<<< HEAD
=======
    method: 'POST',
method: 'POST',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
=======


    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export async function rewardFiveStarReview(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
;
export async function rewardOnboarding(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })});
}
;
export async function rewardReferral(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })});
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}

;
export async function rewardOnboarding(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST',;
    headers:{ 'Content-Type':'application/json' },;
    body:JSON.stringify({ userId, amount:50, reason:'Completed onboarding' })}),;
}
;
export async function rewardReferral(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST',;
    headers:{ 'Content-Type':'application/json' },;
    body:JSON.stringify({ userId, amount:20, reason:'Referral' })}),;
}
;
export async function rewardFiveStarReview(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST',;
    headers:{ 'Content-Type':'application/json' },;
    body:JSON.stringify({ userId, amount:10, reason:'5-star review' })}),;
} 
}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
