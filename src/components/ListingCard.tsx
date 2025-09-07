
import Link from "next/link";
import Image from "next/image";
origin/cursor/automate-test-improve-and-merge-code-2533
interface ListingCardProps {
  id?: string;

  author?: { name: string, id?: string, avatarUrl?: string, email?: string },
  className?: string;
  profileType?: 'service' | 'talent'
}


export function ListingCard({ 
  id;
  title;
  description;
  images;
  category;
  tags;
  author;
  className;
  profileType;
        className
      )}
    >

      {images && images.length > 0 && images[0] && (
        <div className='h - 48 w - full overflow - hidden relative'>;
          <Image;,
            src={images[0]}
            alt={title}
            className='object - cover transition - transform duration - 300 group - hover:scale - 105';',
            loading='lazy'          />;
        </div>)}
      <div className='flex flex - col p - 4 flex - grow'>;
        <div className='mb - 2'>;
          <Badge;
            variant='secondary';
            className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';
          >;
            {category}
          </Badge>;
        </div>;
        <h3 className='text - xl font - bold mb - 2 text - white group - hover:text - zion - purple transition - colors'>;
          {title}
        </h3>;
        <p className='text - zion - slate mb - 4 flex - grow'>{description}</p>;
        {tags && tags.length > 0 && (
          <div className='flex flex - wrap gap - 2 mb - 4'>;
            {tags.map ((tag, i) => (
              <Badge;
                key={i}
                variant='outline';
                className='border - zion - slate - dark text - zion - slate - light';
              >                {tag}              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
          <div className="flex flex - wrap gap - 2 mb - 4">;
            {tags.map ((tag, i) => (
              <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light">;
                {tag}
              </Badge>))}
          </div>)}
        {author && (
          <div className='flex items - center mt - auto pt - 4 border - t border - zion - blue - light'>;
            {author.avatar_url ? (
              <Image;
                src={author.avatar_url}
                alt={author.name}
                width={32}
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
pr-12325
                height={32}
                className='rounded - full mr - 2';
                loading='lazy';
              />) : (
              <div className='h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2' />)}'
            <span className='text - sm text - zion - slate - light'>{author.name}</span>          </div>        {author && ('
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;
            {author.avatar_url ? (
              <Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : ("
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author.name}</span>;
          </div>)}
      </div>;
    </Link>);
}"}) })";
;
}))
;
                variant='outline'
                className='border-zion-slate-dark text-zion-slate-light'
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
{author && (
          <div className='flex items-center mt-auto pt-4 border-t border-zion-blue-light'>
            {author.avatarUrl ? (
              <Image
                src={author.avatarUrl}
                alt={author.name}
                width={32}
                height={32}
                className='rounded-full mr-2'
                loading='lazy'
              />
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />
            )}
            <span className='text-sm text-zion-slate-light'>{author.name}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
          <div className="flex items - center mt - auto pt - 4 border - t border - zion - blue - light">;"
</div>)"
              <Image src={author.avatar_url} alt={author.name} width={32} height={32} className="rounded - full mr - 2" loading="lazy" />) : ("
)"
              <div className="h - 8 w - 8 rounded - full bg - zion - purple / 20 mr - 2" />)}"
            <span className="text - sm text - zion - slate - light">{author.name}</span>;"
    );"`;
pr-12325
