import EmptyState from '../../components/ui/EmptyState'

export default function FavoritesPage() {_const [favorites, _setFavorites] = useState<string[]>([])
  useEffect__(() => {
    const _raw = localStorage.getItem('zion.favorites')
    setFavorites(raw ? JSON.parse(raw) : [])}, [])

<<<<<<< HEAD
  if (!favorites.length) {
    return <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Save profiles to revisit them easily.&quot; ctaLabel=&quot;Browse Talent&quot; ctaHref=&quot;/talent&quot; />
  }

  return (
    <div>
      <h2 className=&quot;text-xl font-semibold mb-4&quot;>Favorites</h2>
      <ul className=&quot;list-disc pl-6&quot;>
        {favorites.map(f => <li key={f}>{f}</li>)}
=======
  if (!favorites.length) {_return <EmptyState title="Nothing here yet..." message="Save profiles to revisit them easily." ctaLabel="Browse Talent" ctaHref="/talent" />}

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <ul className="list-disc pl-6">
        {_favorites.map(f => <li key={f}>{_f}</li>)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </ul>
    </div>
  )
}