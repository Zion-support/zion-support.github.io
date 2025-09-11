
<<<<<<< HEAD
<<<<<<< HEAD


export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    method: 'POST',
method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {


    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };


    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
<<<<<<< HEAD
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
=======
=======
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export async function rewardFiveStarReview(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {

<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});


<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
