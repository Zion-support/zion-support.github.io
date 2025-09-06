<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/blog/AuthorBio.tsx


=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import type { BlogAuthor } from '@/types/blog';
interface AuthorBioProps {
  author: BlogAuthor
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import type { BlogAuthor } from '@/types/blog'
interface AuthorBioProps {
  author: BlogAuthor
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {
  author: BlogAuthor
}
interface AuthorBioProps {
  author: BlogAuthor
}

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>
      <img
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {
          const target = e.currentTarget as HTMLImageElement
          target.src = '/images/blog-placeholder.svg' }}
      />
      <div>
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}        <p>{author.bio}</p>
      </div>
    </div>
  )
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
      <img
=======
<img
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
  author: BlogAuthor;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (

=======
xport function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
    <div className;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
    <div className;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>         <p className="font-medium text-lg">{author.name}</p>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <p className="font-medium text-lg">{author.name}</p>
>>>>>>>         {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <p>{author.bio}</p>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}/> <div> <p className="font-medium text-lg" > {
  author.name
}</p> {"
  author.title && <p className="text-sm text-muted-foreground mb-2" > {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  author.title
}</p>
}<p> {
  author.bio
}</p>
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  author.title 
}</p>
}<p> {
  author.bio ;
}</p>;
}'"};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
import React from 'react';
import type { BlogAuthor } from '@/types / blog';
interface AuthorBioProps {
  author: BlogAuthor;
export /**
 * AuthorBio - Function description
 */
function AuthorBio() {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>interface AuthorBioProps {
  author: BlogAuthor;
}
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;
  return (
    <div className;
interface AuthorBioProps {
  author: BlogAuthor;
}
export /**
 * AuthorBio - Function description
 */
function AuthorBio() {
  // Check condition
if (return null) {
  $2
}
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/blog/AuthorBio.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      />;
      <div>;
        <p className='font-medium text-lg'>{author && author.name}</p>;
        {author && author.title && (;
          <p className='text-sm text-muted-foreground mb-2'>{author && author.title}</p>;
        )}        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  );
        <p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}
      <img
        src={author && author.avatarUrl}
        alt={author && author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {;
          const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = '/images/blog-placeholder && placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}
        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  );
<<<<<<<< HEAD:src/components/blog/AuthorBio.tsx


}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/blog/AuthorBio.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className='mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>;
      <img;
        src={author.avatar_url}
        alt={author.name}
        className='w - 16 h - 16 rounded - full mr - 4 mb - 4 md:mb - 0';
        on_error={e => {
          const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg' }}
      />;
      <div>;
        <p className='font - medium text - lg'>{author.name}</p>;
        {author.title && (
          <p className='text - sm text - muted - foreground mb - 2'>{author.title}</p>)}        <p>{author.bio}</p>;
      </div>;
    </div>);
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
      <img;
        src={author.avatar_url}
        alt={author.name}
        className="w - 16 h - 16 rounded - full mr - 4 mb - 4 md: mb - 0";
        on_error={(e) => {
          const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg';
        }}
      />;
      <div>;
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>);
}/> <div> <p className="font - medium text - lg" > {
  author.name;
}</p> {";
  author.title && <p className="text - sm text - muted - foreground mb - 2" > {
  author.title;
}</p>;
}<p> {
  author.bio;
}</p>;
}'"}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/blog/AuthorBio.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
;
interface AuthorBioProps {;
  author:BlogAuthor;
}
;
export function AuthorBio({ author } AuthorBioProps) {;
  if (!author.bio) return null,;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement,;
          target.src = '/images/blog-placeholder.svg';
        }}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <div>;
        <p className="font-medium text-lg">{author.name}</p>;
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>;
<<<<<<< HEAD
  ),; onError= {;
  (e) => {;
  const target = e.currentTarget as HTMLImageElement;
target.src = '/images/blog-placeholder.svg' ;
}
}/> <div> <p className="font-medium text-lg" > {;
  author.name ;
}</p> {";
  author.title && <p className="text-sm text-muted-foreground mb-2" > {;
  author.title ;
}</p> ;
}<p> {;
  author.bio ;
}</p> ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/blog/AuthorBio.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
