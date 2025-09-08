<<<<<<< HEAD



ursor/fix-syntax-push-and-merge-to-main-40de
export async function rewardOnboarding(...args: any[]): any {;

export async function rewardOnboarding(...args: any[]): any {;
ursor/add-new-services-and-deploy-updates-0462

=======
export async function rewardOnboarding(...args: any[]): any {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
export async function rewardOnboarding(..."args": any[]): any {;
export async function rewardOnboarding(;
  userId: string,
  "action": string,
  "amount": number;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
<<<<<<< HEAD

    "body": JSON && JSON.stringify({ userId, action, amount })})}

=======
    "body": JSON.stringify({ userId, action, amount })})}
>>>>>>> origin/cursor/delete-old-data-records-6bba
export async function earnTokensForPurchase(;
  "userId": string,
  "purchaseAmount": number,
  "purchaseType": string;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
<<<<<<< HEAD

    "body": JSON && JSON.stringify({;

=======
    "body": JSON.stringify({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      userId,
      "action": 'purchase',
      "amount": purchaseAmount,
      purchaseType})})}
export async function earnTokensForReferral(;
  "userId": string,
  "referredUserId": string;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
<<<<<<< HEAD

    "body": JSON && JSON.stringify({;

=======
    "body": JSON.stringify({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      userId,
      "action": 'referral',
      referredUserId,
      "amount": 100})})}
export async function earnTokensForAction(;
  "userId": string,
  "action": string,
  "amount": number;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
<<<<<<< HEAD

    "body": JSON && JSON.stringify({ userId, action, amount })})}

=======
    "body": JSON.stringify({ userId, action, amount })})}
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default earnTokensForAction;
// comment;
export const tokenRewards = {};
export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({ userId,action,amount });,});,} export async function earnTokensForPurchase(; userId: 'string',; purchaseAmount: 'number',; purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({; userId,; action: 'purchase',; amount: 'purchaseAmount',; purchaseType;,});,});,} export async function earnTokensForReferral(; userId: 'string',; referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({; userId,; action: 'referral',; referredUserId,; amount: '100;',});,});,} export async function earnTokensForAction(; userId: 'string',; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({ userId,action,amount });,});,} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
<<<<<<< HEAD
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
=======
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}

<<<<<<< HEAD


export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON && JSON.stringify({ userId,action,amount });,});,} export async function earnTokensForPurchase(; userId: 'string',; purchaseAmount: 'number',; purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON && JSON.stringify({; userId,; action: 'purchase',; amount: 'purchaseAmount',; purchaseType;,});,});,} export async function earnTokensForReferral(; userId: 'string',; referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON && JSON.stringify({; userId,; action: 'referral',; referredUserId,; amount: '100;',});,});,} export async function earnTokensForAction(; userId: 'string',; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON && JSON.stringify({ userId,action,amount });,});,} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON && JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}


export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/main
