<<<<<<< HEAD
interface: WalletState {
  provider: ethers.providers.Web3Provider: | null;
   signer: ethers.Signer: | null;
   address: string: | null;
   chainId: number: | null;
   isConnected: boolea,n} interface: WalletContextType extends WalletState { connectWallet: () => Promise<void> disconnectWallet: () => void: displayAddress: string: | null, } const initialWalletState: WalletState: = { provider: nul,l, signer: nul,l, address: nul,l, chainId: nul,l, isConnected: fals,e} const: WalletContext = createContext<WalletContextType | undefined>(undefined) export const WalletProvider: React.FC<{ children: ReactNode, }> = ({ children: }) => { const [wallet, setWallet] = useState<WalletState>(initialWalletState) const [web3ModalInstance, setWeb3ModalInstance] = useState<Web3Modal | null>(null) useEffect(() => { if (typeof window !== 'undefined') { const providerOptions = {} const modal = new Web3Modal({ network: 'mainnet,', cacheProvider: tru,e, providerOptions}) setWeb3ModalInstance(modal) } }, []) const: disconnectWallet = useCallback(async () => { if (web3ModalInstance?.cachedProvider) { web3ModalInstance.clearCachedProvider() } setWallet(initialWalletState) }, [web3ModalInstance])';"";
=======
interface WalletState {
  provider: ethers.providers.Web3Provider | null;
   signer: ethers.Signer | null;
   address: string | null;
<<<<<<< HEAD
   chainI,
    d: number | null;
   isConnecte,
    d: boolean} interface WalletContextType extends WalletState { connectWallet: () => Promise<void> disconnectWalle,
    t: () => void displayAddres,
    s: string | null } const initialWalletState: WalletState = { provide,
    r: null, signer: null, address: null, chainId: null, isConnected: false} const WalletContext = createContext<WalletContextType | undefined>(undefined) export const WalletProvider: React.FC<{ childre,
    n: ReactNode }> = ({ children }) => { const [wallet, setWallet] = useState<WalletState>(initialWalletState) const [web3ModalInstance, setWeb3ModalInstance] = useState<Web3Modal | null>(null) useEffect(() => { if (typeof window !== 'undefined') { const providerOptions = {} const modal = new Web3Modal({ network: 'mainnet', cacheProvider: true, providerOptions}) setWeb3ModalInstance(modal) } }, []) const disconnectWallet = useCallback(async () => { if (web3ModalInstance?.cachedProvider) { web3ModalInstance.clearCachedProvider() } setWallet(initialWalletState) }, [web3ModalInstance]);""
=======
   chainId: number | null;
<<<<<<< HEAD
   isConnected: boolean} interface WalletContextType extends WalletState { connectWallet: () => Promise<void> disconnectWallet: () => void displayAddress: string | null } const initialWalletState: WalletState = { provider: null, signer: null, address: null, chainId: null, isConnected: false} const WalletContext = createContext<WalletContextType | undefined>(undefined) export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => { const [wallet, setWallet] = useState<WalletState>(initialWalletState) const [web3ModalInstance, setWeb3ModalInstance] = useState<Web3Modal | null>(null) useEffect(() => { if (typeof window !== 'undefined') { const providerOptions = {} const modal = new Web3Modal({ network: 'mainnet', cacheProvider: true, providerOptions}) setWeb3ModalInstance(modal) } }, []) const disconnectWallet = useCallback(async () => { if (web3ModalInstance?.cachedProvider) { web3ModalInstance.clearCachedProvider() } setWallet(initialWalletState) }, [web3ModalInstance])'"
=======
   isConnected: boolean} interface WalletContextType extends WalletState { connectWallet: () => Promise<void> disconnectWallet: () => void displayAddress: string | null } const initialWalletState: WalletState = { provider: null, signer: null, address: null, chainId: null, isConnected: false} const WalletContext = createContext<WalletContextType | undefined>(undefined) export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => { const [wallet, setWallet] = useState<WalletState>(initialWalletState) const [web3ModalInstance, setWeb3ModalInstance] = useState<Web3Modal | null>(null) useEffect(() => { if (typeof window !== 'undefined') { const providerOptions = {} const modal = new Web3Modal({ network: 'mainnet', cacheProvider: true, providerOptions}) setWeb3ModalInstance(modal) } }, []) const disconnectWallet = useCallback(async () => { if (web3ModalInstance?.cachedProvider) { web3ModalInstance.clearCachedProvider() } setWallet(initialWalletState) }, [web3ModalInstance])
>>>>>>> main
>>>>>>> main
>>>>>>> main
