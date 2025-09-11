

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {

    method: 'POST'
    headers: { 'Content-Type': 'application/json' }

=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };

    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' })})
=======

    method: 'POST',;
    headers: { 'Content-Type': 'application/json' };


    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' })})
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
