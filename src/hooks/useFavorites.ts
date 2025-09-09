import { useState, useEffect } from 'react';

export interface FavoriteItem {
  id: string;
  type: 'talent' | 'service' | 'product';
  item: any;
  addedAt: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  const addToFavorites = (item: any, type: 'talent' | 'service' | 'product') => {
    const favoriteItem: FavoriteItem = {
      id: `${type}-${item.id}`,
      type,
      item,
      addedAt: new Date().toISOString(),
    };

    setFavorites(prev => {
      const newFavorites = [...prev, favoriteItem];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: string, type: 'talent' | 'service' | 'product') => {
    return favorites.some(fav => fav.id === `${type}-${id}`);
  };

  const toggleFavorite = (item: any, type: 'talent' | 'service' | 'product') => {
    const id = `${type}-${item.id}`;
    if (isFavorite(item.id, type)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(item, type);
    }
  };

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  };
};