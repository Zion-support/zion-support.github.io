import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export function usePostsByCategory(category: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Mock data - replace with actual API call
        const mockPosts: Post[] = [
          {
            id: '1',
            title: 'Sample Post 1',
            content: 'This is a sample post content.',
            category,
            createdAt: new Date().toISOString(),
          },
          {
            id: '2',
            title: 'Sample Post 2',
            content: 'This is another sample post content.',
            category,
            createdAt: new Date().toISOString(),
          },
        ];
        
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return { posts, loading, error };
}