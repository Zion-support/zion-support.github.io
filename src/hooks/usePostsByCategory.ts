import { useState, useEffect } from "react";

export function usePostsByCategory(category: string) {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock implementation
    const mockPosts = [
      { id: 1, title: "Post 1", category, content: "Content 1" },
      { id: 2, title: "Post 2", category, content: "Content 2" }
    ],
    setPosts(mockPosts);
    setIsLoading(false);
  }, [category]);

  return { posts, isLoading };
}