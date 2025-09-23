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
}

