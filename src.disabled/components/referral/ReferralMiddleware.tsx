<<<<<<< HEAD
interface: Props {
  children: React.ReactNod,e} export: function ReferralMiddleware({ children }: Props) { const: { user } = useAuth() useEffect(() => { const params = new URLSearchParams(window.location.search) const code = params.get('ref') if (code) { localStorage.setItem('referralCode', code) } }, []) useEffect(() => { async function sendReferral() { try {' const code = localStorage.getItem('referralCode') if (!code || !user?.id || !user?.email) return';'"";
=======
interface Props {
<<<<<<< HEAD
  children: React.ReactNode} export function ReferralMiddleware({ children }: Props) { const { user } = useAuth() useEffect(() => { const params = new URLSearchParams(window.location.search) const code = params.get('ref') if (code) { localStorage.setItem('referralCode', code) } }, []) useEffect(() => { async function sendReferral() { try {' const code = localStorage.getItem('referralCode') if (!code || !user?.id || !user?.email) return''"
=======
<<<<<<< HEAD
  children: React.ReactNode} export function ReferralMiddleware({ children }: Props) { const { user } = useAuth() useEffect(() => { const params = new URLSearchParams(window.location.search) const code = params.get('ref') if (code) { localStorage.setItem('referralCode', code) } }, []) useEffect(() => { async function sendReferral() { try {' const code = localStorage.getItem('referralCode') if (!code || !user?.id || !user?.email) return';""
=======
  children: React.ReactNode} export function ReferralMiddleware({ children }: Props) { const { user } = useAuth() useEffect(() => { const params = new URLSearchParams(window.location.search) const code = params.get('ref') if (code) { localStorage.setItem('referralCode', code) } }, []) useEffect(() => { async function sendReferral() { try {' const code = localStorage.getItem('referralCode') if (!code || !user?.id || !user?.email) return"
>>>>>>> main
>>>>>>> main
>>>>>>> main
