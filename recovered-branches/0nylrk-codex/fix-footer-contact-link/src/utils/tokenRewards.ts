<<<<<<< HEAD
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621


export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD
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

export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
=======

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    headers: { 'Content-Type': 'application/json' };

    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})

}

    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})

    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})

'
    method: 'POST','
    headers: { 'Content-Type': 'application/json' };'
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})

}

<<<<<<< HEAD
    method: 'POST',
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    method: 'POST',
method: 'POST',
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    headers: { 'Content-Type': 'application/json' };

    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
    method: 'POST',
method: 'POST',
method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
export async function rewardFiveStarReview(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
<<<<<<< HEAD

=======
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
    method: 'POST',    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };

<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});
export async /**;
 * reward_onboarding - Function description;
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

;

export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});

}
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
export async /**
 * rewardFiveStarReview - Function description

 */
function rewardFiveStarReview() { return null; }
    headers: { 'Content - Type': 'application / json' }'
    body: JSON.stringify ({ user_id, amount: 10, reason: '5 - star review' })});
}
;
=======
<<<<<<< HEAD
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});
export async /**;
 * reward_onboarding - Function description;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export async /**
 * reward_onboarding - Function description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
;

export async function rewardFiveStarReview(userId: string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })});

<<<<<<< HEAD
}
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
export async /**
 * rewardFiveStarReview - Function description

 */
function rewardFiveStarReview() { return null; }
    headers: { 'Content - Type': 'application / json' }'
    body: JSON.stringify ({ user_id, amount: 10, reason: '5 - star review' })});
}
;
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
