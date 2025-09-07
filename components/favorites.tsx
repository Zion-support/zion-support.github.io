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

