<<<<<<< HEAD
import { useEffect, useState } from 'react'
import EmptyState from '../../components/ui/EmptyState'
=======
import { useEffect, useState } from 'react';
import EmptyState from '../../components/ui/EmptyState';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  useEffect(() => {
    const raw = localStorage.getItem('zion.favorites')
    setFavorites(raw ? JSON.parse(raw) : [])
  }, [])
  if (!favorites.length) {
    return <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Save profiles to revisit them easily.&quot; ctaLabel=&quot;Browse Talent&quot; ctaHref=&quot;/talent&quot; />
  }
  return (
    <div>
      <h2 className=&quot;text-xl font-semibold mb-4&quot;>Favorites</h2>
      <ul className=&quot;list-disc pl-6&quot;>
        {favorites.map(f => <li key={f}>{f}</li>)}
      </ul>;
    </div>;
  );
}