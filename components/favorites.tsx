
=======
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head',
import {useEffect, useMemo, useState} from 'react';
import Head from 'next/head';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';

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


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    </div>;
  );
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
