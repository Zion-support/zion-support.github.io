import React from 'react';
import type { BlogAuthor } from '@/types/blog';
interface AuthorBioProps {
  author: BlogAuthor
}
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
    <div className;
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
    </div>
  )
}/> <div> <p className="font-medium text-lg" > {
  author.name
}</p> {"
  author.title && <p className="text-sm text-muted-foreground mb-2" > {
  author.title
}</p>
}<p> {
  author.bio
}</p>
}'"}
