<<<<<<< HEAD
import { useEffect, useState } from 'react';
import EmptyState from '../../components/ui/EmptyState';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem('zion.favorites');
    setFavorites(raw ? JSON.parse(raw) : []);
  }, []);

  if (!favorites.length) {
    return (
      <EmptyState
        title='Nothing here yet...'
        message='Save profiles to revisit them easily.'
        ctaLabel='Browse Talent'
        ctaHref='/talent'
      />
    );
  }

  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Favorites</h2>
      <ul className='list-disc pl-6'>
        {favorites.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
=======
import EmptyState from '../../components/ui/EmptyState' export default function FavoritesPage () {
  const [favorites, setFavorites] = useState<string[]> ([]) useEffect ( () => {
  const raw = localStorage.getItem ('zion.favorites') setFavorites (raw ? JSON.parse (raw) : []) 
}, []) </ul> </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
