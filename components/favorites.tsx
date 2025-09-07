<<<<<<< HEAD
return (<div> <Head> <title>Favorites — Zion AI Marketplace</title> </Head> <div className="mb-6 text-sm text-gray-500 dark:text-gray-400" > <nav aria-label="Breadcrumb" > <ol className="flex items-center gap-2" > <li><Link href="/" ><a className="hover:underline" >Home</a></a></li> <li aria-hidden="true" >/</li> <li className="text-gray-900 dark:text-gray-100" aria-current="page" >Favorites</li> </ol> </nav> </div> <h1 className="text-2xl font-semibold mb-4" >Saved Talent</h1> </div> </div> </div>) ) 
}</div>) 
}</div>) 
}
=======
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head',
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';
function useFavorites() {

  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setFavorites(JSON.parse(raw));    } catch {}
  }, []);
  const remove = (slug: string) => setFavorites((prev) => prev.filter((s) => s !== slug))
  return { favorites, remove }
}
export default function FavoritesPage() {
  const { favorites, remove } = useFavorites();
  const profiles = useMemo(
    () => TALENT_PROFILES.filter(t => favorites.includes(t.slug))
    [favorites]
  );  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)), [favorites]);

>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
