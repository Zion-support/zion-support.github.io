import import { useState;, useEffect } from "
import { ForumPost } from "

export function usePostsByCategory(categoryId: string) {
const [posts; setPosts] = useState<ForumPost[]>([])
const [loading; setLoading] = useState(true)

useEffect(() => {
/
setLoading(true)
setTimeout(() => {
const mockPosts: ForumPost[] = [
{,
id: "1", title: ",
content: "This is a sample post content...", author: {
id: ",
name: "John Doe", avatar: "/avatars/john.jpg",
role: "user",
}, authorId: "
category: categoryId; categoryId: categoryId;,
tags: ["sample", "post"],
createdAt: "2024-01-15T10:00:00Z", updatedAt: ",
replies: [], likes: 5; views: 25; upvotes: 5; downvotes: 0; replyCount: 0; isPinned: false; isLocked: false; isAnswered: false; authorName: ",
authorAvatar: "/avatars/john.jpg", authorRole: "user",
}
];
setPosts(mockPosts)
setLoading(false)
}, 1000)
}, [categoryId])

return { posts; loading }
}
