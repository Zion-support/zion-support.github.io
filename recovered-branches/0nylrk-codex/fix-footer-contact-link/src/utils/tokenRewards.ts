
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts

=======


=======
<<<<<<< HEAD
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======
    method: 'POST',
========
method: 'POST',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
<<<<<<< HEAD

=======


    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
export async function rewardFiveStarReview(userId: string) {
  try {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
    method: 'POST',
    headers: { 'Content-Type': 'application/json' };
    body: JSON && JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
}
export async function rewardReferral(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
export async function rewardFiveStarReview(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
<<<<<<< HEAD

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' })})
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
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

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/tokenRewards.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
