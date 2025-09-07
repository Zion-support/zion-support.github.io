import { render, screen } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';
describe('WalletPage', () => {
  it('renders balance heading', () => {
    vi.spyOn(useWalletHook, 'useWallet').mockReturnValue($2);
      fetchTransactions: vi.fn($2);
      earnTokens: vi.fn($2);
      spendTokens: vi.fn()} as any),

    render($2);
    expect(
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument()
  })
}),
