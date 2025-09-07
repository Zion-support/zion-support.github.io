id?: string,;
  title: string,;
  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;
  profileType?: 'service' | 'talent';
}

interface ListingCardProps {;
  id?: string;
  title: string;,
  description: string;
  images?: string[];
  category: string;
  tags?: string[];
  author?: { name: string; id?: string; avatarUrl?: string; email?: string };
  className?: string;
export function ListingCard(): any ({;
  id,;
  title,;
  description,;
  images,;
  category,;
  tags,;
  author,;
  className,;
  profileType = 'service',;')
}: ListingCardProps) {;
  // Generate a profile ID based on the listing data;
  // In a real app, this would be a proper ID from the database;
  const profileId =;
    id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
      >;
      {images && images.length > 0 && images[0] && (;
        <div className='h-48 w-full overflow-hidden relative'>;
</div>
          <Image;
            src={images[0]}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105
            loading='lazy'          />;

        </div>;
      <div className='flex flex-col p-4 flex-grow'>;
        <div className='mb-2'>;
          <Badge;
            variant='secondary
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'>;

          ;
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>;
</h3>
        </h3>;
        <p className='text-zion-slate mb-4 flex-grow'>{description}</p>;
          <div className='flex flex-wrap gap-2 mb-4'>;
                key={i}
                variant='outline
                className='border-zion-slate-dark text-zion-slate-light'>                {tag}              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"
"
          <div className="flex flex-wrap gap-2 mb-4">;"
</div>"
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">;"

    <Link;
      href = {`/profile/${profileId}`}
      tabIndex={0}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue hover: border-zion-purple/50 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple","
        className;)
      )}
    >
        <div className="h-48 w-full overflow-hidden relative">"

            className="object-cover transition-transform duration-300 group-hover:scale-105"""
            loading="lazy""
          />



      <div className="flex flex-col p-4 flex-grow">"
        <div className="mb-2">"
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">"

          


        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors">{title}</h3>""
        <p className="text-zion-slate mb-4 flex-grow">{description}</p>""
          <div className="flex flex-wrap gap-2 mb-4">"
              <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light">"

                src={author && author.avatarUrl}
                alt={author && author.name}
                width={32}
                height={32}"
                className='rounded-full mr-2
                loading='lazy
              />;

              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>          </div>        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;"
              <Image src={author && author.avatarUrl} alt={author && author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;"
            <span className="text-sm text-zion-slate-light">{author && author.name}</span>;"
          </div>;"
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">"
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />"
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />"
            <span className="text-sm text-zion-slate-light">{author.name}</span>"
    ;"
        <div className='h - 48 w - full overflow - hidden relative'>;
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';
)
        </div>)}
      <div className='flex flex - col p - 4 flex - grow'>;
        <div className='mb - 2'>;
            variant='secondary';
            className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';

        <h3 className='text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors'>;
        <p className='text - zion - slate mb - 4 flex - grow'>{description}</p>;
          <div className='flex flex - wrap gap - 2 mb - 4'>;
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"
          <div className="flex flex - wrap gap - 2 mb - 4">;"
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;"

              ))}
          </div>)}"
          <div className='flex items - center mt - auto pt - 4 border - t border - zion - blue - light'>;
                src={author.avatar_url}
                alt={author.name}
                height={32}
                className='rounded - full mr - 2';
                loading='lazy';
              />) : (
              <div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2' />)}
            <span className='text - sm text - zion - slate - light'>{author.name}</span>          </div>        {author && (
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;"
</div>)"
              <Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : ("
)"
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author.name}</span>;"
    );"`;