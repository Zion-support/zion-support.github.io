

export async function rewardOnboarding(userId: string) {
  await fetch('/functions/v1/token-manager/earn', {
