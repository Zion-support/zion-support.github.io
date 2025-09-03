<<<<<<< HEAD
export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false); const menuRef = useRef(null); const { user, logout } = useAuth(); useEffect(() => { const handleClickOutside = (event) => { if(menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} }; document.addEventListener("mousedown", handleClickOutside); return () => document.removeEventListener("mousedown", handleClickOutside)}, []); const handleLogout = async () => { try { await logout();
=======
<<<<<<< HEAD

export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false); const menuRef = useRef(null); const { user, logout } = useAuth(); useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} }; document.addEventListener("mousedown", handleClickOutside); return () => document.removeEventListener("mousedown", handleClickOutside)}, []); const handleLogout = async () => { try { await logout();""";

export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false); const menuRef = useRef(null); const { user, logout } = useAuth(); useEffect(() => { const handleClickOutside = (event) => { if(menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} }; document.addEventListener("mousedown", handleClickOutside); return () => document.removeEventListener("mousedown", handleClickOutside)}, []); const handleLogout = async () => { try { await logout();
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
<<<<<<< HEAD
export: const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout()';"";
=======
<<<<<<< HEAD
export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout()'"
=======
<<<<<<< HEAD
export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout();""
=======
export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout()
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
