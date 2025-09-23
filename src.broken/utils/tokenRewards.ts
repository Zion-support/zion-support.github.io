
import { apiClient } from './apiClient';

export async function rewardOnboarding(userId: string) {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
