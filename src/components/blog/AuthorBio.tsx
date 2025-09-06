<<<<<<< HEAD
<img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
<<<<<<< HEAD
          const target = e.currentTarget as HTMLImageElement
=======

          const target = e.currentTarget as HTMLImageElement,


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
  author: BlogAuthor;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
  author: BlogAuthor;
}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



interface AuthorBioProps {;
  author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {;
  author: BlogAuthor;
}
interface AuthorBioProps {;
  author: BlogAuthor;
}

export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>;
      <img
        src={author && author.avatarUrl}
        alt={author && author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {;
          const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = '/images/blog-placeholder && placeholder.svg';        }}

  author.title 
}</p>
}<p> {
  author.bio ;
}</p>;
}'"};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
;
export function AuthorBio({ author }: AuthorBioProps) {;
  if (!author.bio) return null;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg">{author.name}</p>;
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
