
=======

import {useEffect, useMemo, useState} from 'react';
import Head from 'next/head';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
    </div>;
  );
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
