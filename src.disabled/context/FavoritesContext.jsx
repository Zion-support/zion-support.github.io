<<<<<<< HEAD
const FavoritesContext = createContext(null); export function FavoritesProvider({ children }) { const [favorites, setFavorites] = useState([]); useEffect(() => { const stored = localStorage.getItem("favorites"); if (stored) { try { setFavorites(JSON.parse(stored)); } catch {""";
=======
const FavoritesContext = createContext(null); export function FavoritesProvider({ children }) { const [favorites, setFavorites] = useState([]); useEffect(() => { const stored = localStorage.getItem("favorites"); if(stored) { try { setFavorites(JSON.parse(stored)); } catch {
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
