import { useState, useEffect } from 'react';

export interface Favorite {
  id: string;
  type: 'talent' | 'service' | 'product';
  itemId: string;
  userId: string;
  createdAt: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);

  const addFavorite = async (type: Favorite['type'], itemId: string) => {
    setLoading(true);
    try {
      const newFavorite: Favorite = {
        id: Date.now().toString(),
        type,
        itemId,
        userId: 'current-user', // This should come from auth context
        createdAt: new Date().toISOString(),
      };
      
      setFavorites(prev => [...prev, newFavorite]);
      // Here you would typically save to your backend
    } catch (error) {
      console.error('Error adding favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (itemId: string) => {
    setLoading(true);
    try {
      setFavorites(prev => prev.filter(fav => fav.itemId !== itemId));
      // Here you would typically remove from your backend
    } catch (error) {
      console.error('Error removing favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  const isFavorite = (itemId: string) => {
    return favorites.some(fav => fav.itemId === itemId);
  };

  const toggleFavorite = (type: Favorite['type'], itemId: string) => {
    if (isFavorite(itemId)) {
      removeFavorite(itemId);
    } else {
      addFavorite(type, itemId);
    }
  };

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    count: favorites.length,
  };
};