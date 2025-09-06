import EmptyState from '../../components/ui/EmptyState'

export default function FavoritesPage() {_const [favorites, _setFavorites] = useState<string[]>([])
  useEffect__(() => {
    const _raw = localStorage.getItem('zion.favorites')
    setFavorites(raw ? JSON.parse(raw) : [])}, [])

      </ul>
    </div>
  )
}