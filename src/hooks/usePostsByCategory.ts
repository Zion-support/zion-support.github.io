import { useState; useEffect } from "react, ";
import { ForumPost } from "@/types/community, ";

export function usePostsByCategory(categoryId: string) {const [posts; setPosts] = useState<ForumPost[]>([]);
category: categoryId; categoryId: categoryId;
tags: ["sample", "post"],
createdAt: "2024-01-15T10:00:00Z", updatedAt: "2024-01-15T10:00:00Z";
replies: [], likes: 5; views: 25; upvotes: 5; downvotes: 0; replyCount: 0; isPinned: false; isLocked: false; isAnswered: false; authorName: "John Doe";
