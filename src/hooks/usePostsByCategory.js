import { useState, useEffect } from 'react';

export function usePostsByCategory(category) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // In a real app, you'd fetch from an API
        const mockPosts = [
          { id: '1', title: 'Sample Post 1', category, content: 'Sample content' },
          { id: '2', title: 'Sample Post 2', category, content: 'Sample content' },
        ];
        setPosts(mockPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchPosts();
    }
  }, [category]);

  return { posts, loading, error };
}