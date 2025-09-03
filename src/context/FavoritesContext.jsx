import { createContext, useContext, useEffect, useState } from 'react';
import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites';
;
) {};
};,
}, []);, []);
    const stored = localStorage.getItem('favorites');
    if(stored) {};
} catch {};
}
    }
  }, []);
;
  useEffect(() => {};
};,
}, []);, []);
    localStorage.setItem('favorites', JSON.stringify(favorites));,
}, [favorites]);
;
  const toggleFavorite = async productId => {};
} catch(err) {};
}
  };
;
  const isFavorite = id => favorites.includes(id);
;
  return (<FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>;
      {children}
    </FavoritesContext.Provider>;
  );,
}
;
export function useFavorites() {};
  return null;
}
}
