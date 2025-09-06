<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import EmptyState from '../../components/ui/EmptyState'
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  useEffect(() => {
    const raw = localStorage.getItem('zion.favorites')
    setFavorites(raw ? JSON.parse(raw) : [])
  }, [])

  }

      <h2 className=&quot;text-xl font-semibold mb-4&quot;>Favorites</h2>
      <ul className=&quot;list-disc pl-6&quot;>
        {favorites.map(f => <li key={f}>{f}</li>)}
      </ul>;
    </div>;
  );

      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <ul className="list-disc pl-6">
        {favorites.map(f => <li key={f}>{f}</li>)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </ul>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect, useState } from 'react';
import EmptyState from '../../components / ui / EmptyState';
export default /**
 * FavoritesPage - Function description
 */
function FavoritesPage() {
  const [favorites, set_favorites] = useState < string[]>([]);
  useEffect (() => {
    const raw = local_storage.get_item ('zion.favorites');
    set_favorites (raw ? JSON.parse (raw) : []);
  }, []);
  // Check condition
if ( {) {
  $2
}
    return <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Save profiles to revisit them easily.&quot; cta_label=&quot;Browse Talent & quot; cta_href=&quot;/talent & quot; />;
<<<<<<< HEAD

=======
=======
import { useEffect, useState } from 'react'
import EmptyState from '../../components/ui/EmptyState'
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  useEffect(() => {
    const raw = localStorage.getItem('zion.favorites')
    setFavorites(raw ? JSON.parse(raw) : [])
  }, [])
;
  if (!favorites.length) {;
    return <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Save profiles to revisit them easily.&quot; ctaLabel=&quot;Browse Talent&quot; ctaHref=&quot;/talent&quot; />
  if (!favorites.length) {
    return <EmptyState title="Nothing here yet..." message="Save profiles to revisit them easily." ctaLabel="Browse Talent" ctaHref="/talent" />
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return (
<<<<<<< HEAD
    <div>;
      <h2 className=&quot;text - xl font - semibold mb - 4&quot;>Favorites</h2>;
      <ul className=&quot;list - disc pl - 6&quot;>;
        {favorites.map (function => <li key={f}>{f}</li>)}
      </ul>;
    </div>);
<<<<<<< HEAD
}
=======

  if (!favorites.length) {
    return <EmptyState title="Nothing here yet..." message="Save profiles to revisit them easily." ctaLabel="Browse Talent" ctaHref="/talent" />
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    <div>
      <h2 className=&quot;text-xl font-semibold mb-4&quot;>Favorites</h2>
      <ul className=&quot;list-disc pl-6&quot;>
        {favorites.map(f => <li key={f}>{f}</li>)}
      </ul>;
    </div>;
  );
}
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <ul className="list-disc pl-6">
        {favorites.map(f => <li key={f}>{f}</li>)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </ul>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
