<img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {

          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>

        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
  )

interface AuthorBioProps {;
  author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {;
}

    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>;
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

;
export function AuthorBio({ author }: AuthorBioProps) {;
  if (!author.bio) return null;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
      <img;
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
      />;
      <div>;
        <p className='font-medium text-lg'>{author && author.name}</p>;
        {author && author.title && (;
          <p className='text-sm text-muted-foreground mb-2'>{author && author.title}</p>;
        )}        <p>{author && author.bio}</p>;
      </div>;
  );
        <p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}
          target && target.src = '/images/blog-placeholder && placeholder.svg';
        <p>{author && author.bio}</p>;

    <div className='mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>;
        src={author.avatar_url}
        className='w - 16 h - 16 rounded - full mr - 4 mb - 4 md:mb - 0';
        on_error={e => {
          const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg' }}
        <p className='font - medium text - lg'>{author.name}</p>;
        {author.title && (
          <p className='text - sm text - muted - foreground mb - 2'>{author.title}</p>)}        <p>{author.bio}</p>;
    </div>);
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
        className="w - 16 h - 16 rounded - full mr - 4 mb - 4 md: mb - 0";
        on_error={(e) => {
          target.src = '/images / blog - placeholder.svg';
        <p>{author.bio}</p>;
}/> <div> <p className="font - medium text - lg" > {
  author.name;
}</p> {";
  author.title && <p className="text - sm text - muted - foreground mb - 2" > {
  author.title;
  author.bio;
}'"}