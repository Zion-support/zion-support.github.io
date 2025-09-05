<<<<<<< HEAD

export async function rewardOnboarding(...args: any[]): any {;

=======
export async function rewardOnboarding(...args: any[]): any {;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
export async function rewardOnboarding(..."args": any[]): any {;
export async function rewardOnboarding(;
  userId: string,
  "action": string,
  "amount": number;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
    "body": JSON.stringify({ userId, action, amount })})}
export async function earnTokensForPurchase(;
  "userId": string,
  "purchaseAmount": number,
  "purchaseType": string;
): Promise<any> {;
  await apiClient('/functions/v1/token-manager/earn', {;
    "method": 'POST',
    "body": JSON.stringify({;
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
    "body": JSON.stringify({;
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
    "body": JSON.stringify({ userId, action, amount })})}
export default earnTokensForAction;
// comment;
export const tokenRewards = {};
export default tokenRewards}
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({ userId,action,amount });,});,} export async function earnTokensForPurchase(; userId: 'string',; purchaseAmount: 'number',; purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({; userId,; action: 'purchase',; amount: 'purchaseAmount',; purchaseType;,});,});,} export async function earnTokensForReferral(; userId: 'string',; referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({; userId,; action: 'referral',; referredUserId,; amount: '100;',});,});,} export async function earnTokensForAction(; userId: 'string',; action: 'string',; amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',; body: JSON.stringify({ userId,action,amount });,});,} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
<<<<<<< HEAD
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
=======
export async function rewardOnboarding(...args: any[]): any {; export async function rewardOnboarding(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export async function earnTokensForPurchase(; userId: string,purchaseAmount: number,purchaseType: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'purchase',amount: purchaseAmount,purchaseType,}),}),} export async function earnTokensForReferral(; userId: string,referredUserId: string; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({; userId,action: 'referral',referredUserId,amount: 100,}),}),} export async function earnTokensForAction(; userId: string,action: string,amount: number; ): Promise<any> {; await apiClient('/functions/v1/token-manager/earn',{; method: 'POST',body: JSON.stringify({ userId,action,amount }),}),} export default earnTokensForAction; export const tokenRewards = {}; export default tokenRewards}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
