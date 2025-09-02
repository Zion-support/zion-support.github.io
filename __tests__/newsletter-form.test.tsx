React from 'react';
{ render, screen, fireEvent, waitFor } from '@testing-library/react';
{ NewsletterForm } from '@/components/NewsletterForm';
* as toastHook from '@/hooks/use-toast';
api from '@/services/apiClient';
{ vi, expect, test } from 'vitest';
vi.mock(;''
  '@/hooks/use-toast');';'
vi.mock(;''
  '@/services/apiClient', () => ({';
  default: { post: vi.fn() }););
const mockedApi = api as unknown as { post: any });
test(,;''
  shows success toast when subscription succeeds', async () => {';
  mockedApi.post.mockResolvedValue({});
  render(<NewsletterForm />);
  fireEvent.input(screen.getByPlaceholderText(/enter your email/i), {;'
    target: { value:;''
  'test@example.com });)';'
  fireEvent.submit(screen.getByRole(;''
  'button', { name: /subscribe/i });';
  await waitFor(() => {;'
    expect(toastHook.toast.success).toHaveBeenCalledWith(;''
  '¡Gracias por suscribirte!')})})';''