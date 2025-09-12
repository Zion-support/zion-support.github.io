import apiClient from './apiClient';
import { apiHelper } from './apiHelper';

interface WalletData {
  points: number;
  transactions: unknown[]; // Replace 'any' with a more specific type if available
}

export const getWalletData = async (): Promise<{ data: WalletData | null; error: string | null }> => {
  return apiHelper(() => apiClient.get('/api/v1/wallet'));
};
