import WalletPage from '@/pages/Wallet';
import { vi } from 'vitest';
import * as useWalletHook from '@/hooks/useWallet';

      transactions: [],
      loading: false,
      fetchWallet: vi.fn(),
      fetchTransactions: vi.fn(),
      earnTokens: vi.fn(),
    ).toBeInTheDocument();
  });
});
