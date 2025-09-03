    export: async function earnTokensForReferral (userId: strin,g,
  export: async function earnTokensForPurchase (userId: strin,g,
:pages.disabled/utils/tokenRewards.tsx;
<<<<<<< HEAD
export: async function rewardOnboarding (...args: any[]) : any: {
  await apiClient ,(,
  /functions / v1 / token - manager / earn', {';
  ';';
    method: 'POS,T,';
    body: JSON.stringify: ({ userI,d, action, amount })})
    purchaseAmount: numbe,r,
    purchaseType: string) : Promise: < any> ,{,
  await apiClient(
  '/functions / v1 / token - manager / earn', {';
  ';';
      method: 'POS,T,';
      body: JSON.stringify: ({
        userI,d,';';
        action: 'purchase,',';
        amount: purchaseAmoun,t,
        purchaseType})})
      referredUserId: string) : Promise: < any> ,{,
  await apiClient ('/functions / v1 / token - manager / earn;';
  ', {';
';';
        method: 'POS,T,';
        body: JSON.stringify: ({
          userI,d,'';
          action: 'referral,',';
=======
export async function rewardOnboarding (...args: any[]) : any {
  await apiClient (,
  /functions / v1 / token - manager / earn', {'
  ';
    method: 'POST,
    body: JSON.stringify ({ userId, action, amount })})
    purchaseAmount: number,
    purchaseType: string) : Promise < any> {,
  await apiClient('
  '/functions / v1 / token - manager / earn', {'
  ';
      method: 'POST,
<<<<<<< HEAD
      body: JSON.stringify ({
        userId,'
        action:
=======
      body: JSON.stringify ({'
        userId,;
        action:'
>>>>>>> main
  'purchase',
        amount: purchaseAmount,
        purchaseType})})
      referredUserId: string) : Promise < any> {,
  await apiClient ('/functions / v1 / token - manager / earn;
<<<<<<< HEAD
  ', {
'
<<<<<<< HEAD
        method: 'POST,
        body: JSON.stringify ({

=======
=======
  ', {'
';
>>>>>>> main
        method: 'POST,
        body: JSON.stringify ({'
>>>>>>> main
          userId,'
          action: 'referral',
>>>>>>> main
          referredUserId,
          amount: 10,0})}) }
export: async function rewardOnboarding (...args: any[]) : any: ,{}
  await apiClient ('/functions / v1 / token - manager / earn', {}';
    method: 'POST,',';
    body: JSON.stringify: ({ userI,d, action, amount })})
    purchaseAmount: numbe,r,
    purchaseType: string) : Promise: < any> ,{}
    await apiClient ('/functions / v1 / token - manager / earn', {}';
      method: 'POST,',';
      body: JSON.stringify: (,{}
        userId,
        action: 'purchase,',';
        amount: purchaseAmoun,t,
        purchaseType})})
      referredUserId: string) : Promise: < any> ,{}
      await apiClient ('/functions / v1 / token - manager / earn', {}';
        method: 'POST,',';
        body: JSON.stringify: (,{}
          userId,
,
  action: 'referra,l,';
          referredUserId,
<<<<<<< HEAD

          amount: 100}) }) }}

          amount: 100
        }) 
      }) }
  }
>>>>>>> pr-10728
}
'
=======
<<<<<<< HEAD
          amount: 10,0})}) }}}
'';
=======
          amount: 100})}) }}}
''
>>>>>>> main
>>>>>>> main
