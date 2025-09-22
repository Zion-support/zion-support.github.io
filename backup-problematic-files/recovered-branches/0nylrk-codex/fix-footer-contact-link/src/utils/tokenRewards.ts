
<<<<<<< HEAD
;
export async function rewardOnboarding(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST';
    headers:{ 'Content-Type':'application/json' };
    body:JSON.stringify({ userId, amount:50, reason:'Completed onboarding' })});
}
;
export async function rewardReferral(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST';
    headers:{ 'Content-Type':'application/json' };
    body:JSON.stringify({ userId, amount:20, reason:'Referral' })});
}
;
export async function rewardFiveStarReview(userId:string) {;
  await fetch('/functions/v1/token-manager/earn', {;
    method:'POST';
    headers:{ 'Content-Type':'application/json' };
    body:JSON.stringify({ userId, amount:10, reason:'5-star review' })});
} 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
