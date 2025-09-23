import { apiClient } from '@/utils/apiClient';

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
