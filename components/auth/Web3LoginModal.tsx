
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:, error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    return this.props.children;
  }

=======
    return this.props.children
import React, { useCallback, useEffect, useState } from react'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}'
import React, { useCallback, useEffect, useState } from react;
import dynamic from 'next/dynamic';
const isClient = typeof window !== undefined;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
    setError(null)
    setLoading(true)
    try {'
      const Web3ModalCtor = (await import('web3modal)).default
      const ethers = await import(ethers')
      const web3Provider = new ethers.providers.Web3Provider(provider as any)
      const signer = web3Provider.getSigner()
      const address = (await signer.getAddress()).toLowerCase()
      const network = await web3Provider.getNetwork();'
      const nonceRes = await fetch(/api/auth/nonce)
      const { nonce } = await nonceRes.json()
      const domain = window.location.host
      const origin = window.location.origin;'
      const statement = 'Sign in to Zion with your wallet. No gas required.
      const issuedAt = new Date().toISOString()
      onClose()
    } catch (e: any) {}
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
      setLoading(false)
    }
  }, [isOpen]);

  const handleEvmConnect = useCallback(async () => {

    try {
      const Web3ModalCtor = (await import(web3modal)).default;
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;

      const web3Modal = new Web3ModalCtor({
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: { 1: https://cloudflare-eth.com }}}}}),

      const provider = await web3Modal.connect();
=======


=======

    setError(null);
    setLoading(true);
    try {'
      const Web3ModalCtor = (await import('web3modal)).default;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      const ethers = await import(ethers');
      const web3Provider = new ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();


    }
  }, [onClose, onLoggedIn]);
  if (!isOpen) return null;
return (;

<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>'
      <div className='w-full max-w-md rounded-xl bg-white "dark": bg-neutral-900 p-6 shadow-2xl'>'
        <div className='mb-4'>'
          <h2 className='text-lg font-semibold'>Connect your wallet</h2>'
          <p className='text-sm text-gray-500 "dark":text-gray-400'>'
            No gas needed. We will verify your ownership with a signed message.
          </p>
        </div>

          <p className=text-sm text-gray-500 dark:text-gray-400'>
            No gas needed. We will verify your ownership with a signed message.
          </p>
        </div>

            {loading ? 'Connecting… : Connect MetaMask / WalletConnect'}
          </button>;
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5>;
            {loading ? 'Connecting… : Connect Phantom (Solana)'}
          </button>

        </div>
      </div>
    </div>
=======
        {error && ('
          <div className=mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300>
            {error}
          </div>
        )}'
        <div className='space-y-3>
          <button;
            onClick={handleEvmConnect}
            disabled={loading}
            className='w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black'
          >
            {loading ? Connecting…' : 'Connect MetaMask / WalletConnect}
          </button>
          <button;
            onClick={handlePhantomConnect}
            disabled={loading}
            className='w-full rounded-lg bg-purple-600 text-white py-2.5'
          >
            {loading ? Connecting…' : 'Connect Phantom (Solana)}
          </button>
        </div>
        <div className='mt-4 flex justify-end'>
          <button;
            onClick={onClose}
            className=text-sm text-gray-600 dark:text-gray-300'
          >
            Cancel;
          </button>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        </div>
      </div>
    </div>
  );
  return <ModalInner {...props} />;        </div>
        {error && (
          <div className=mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>
        )}"
        <div className=space-y-3>"
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black>'
            {loading ? Connecting… : 'Connect MetaMask / WalletConnect'}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">
            {loading ? Connecting…' : 'Connect Phantom (Solana)}
          </button>
        </div>
        <div className=mt-4 flex justify-end">
        </div>
      </div>
    </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  )
}

  if (!isClient) return null;

=======
=======

export default function Web3LoginModal() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return <ModalInner {...props} />;        </div>
        {error && ("
          <div className=mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300>{error}</div>
        )}"
        <div className="space-y-3>
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">
            {loading ? 'Connecting…' : Connect MetaMask / WalletConnect}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className=w-full rounded-lg bg-purple-600 text-white py-2.5">'
            {loading ? 'Connecting… : Connect Phantom (Solana)'}
          </button>
        </div>"
        <div className=mt-4 flex justify-end>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>
      </div>
    </div>
  )
}


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return <ModalInner {...props} />;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return <ModalInner {...props} />
}
          </button>;
        </div>;
        <div className="mt-4 flex justify-end">;
        </div>;
      </div>;
    </div>;
  )}export default function Web3LoginModal() {if (!isClient) return null;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />;
}
  return <ModalInner {...props} />;return <ModalInner {...props} />;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />;


  return <ModalInner {...props} />;
return <ModalInner {...props} />;
}
origin/cursor/automate-test-improve-and-merge-code-2533

=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
