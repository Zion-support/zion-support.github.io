
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}

export default function Web3LoginButton() {
  const [open, setOpen] = useState($2);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [displayName, setDisplayName] = useState<string | null>(null),
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false),

  useEffect(() => {
    const saved = $2;
    if (saved) setUser(JSON.parse(saved)),
    const pref = $2;
    setDisplayWeb3(pref === 'true')
  }, []),

  useEffect(() => {
    (async () => {
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address)),
      else setDisplayName(null)
    })()
  }, [user, displayWeb3]),

  const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u)),
    setUser(u)
  },

  const disconnect = async () => {
    window.localStorage.removeItem($2);
    try { await fetch('/api/auth/logout', { method: 'POST' }) } catch {}
    setUser(null)
  },

        <button className="text-xs text-red-600" onClick={disconnect}>Logout</button>
        {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}
