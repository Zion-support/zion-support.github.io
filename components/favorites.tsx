
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';
function useFavorites() {

  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);

  }, []);
  const remove = (slug: string) =>: any set_favorites ((prev) => prev.filter ((s) => s !== slug)),
  return { favorites, remove }
}

  const { favorites, remove } = useFavorites();
  const profiles = useMemo(
    () => TALENT_PROFILES.filter(t => favorites.includes(t.slug))
    [favorites]
  );  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)), [favorites]);

  return (
    <div>
      <Head>
        <title>Favorites — Zion AI Marketplace</title>
      </Head>

              </div>
            </div>
          ))}
</div>;
      )}
    </div>;
  );
}
    </div>
