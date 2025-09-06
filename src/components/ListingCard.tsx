  title: string,;
  description: string,;
  images?: string[],;
  category: string,;
  tags?: string[],;
  author?: { name: string, id?: string, avatarUrl?: string, email?: string },;
  className?: string,;
  profileType?: 'service' | 'talent';
}
  id,;
  title,;
  description,;
  images,;
  category,;
  tags,;
  author,;
  className,;
          <Image
            src={images[0]}
            alt={title}
            className='object-cover transition-transform duration-300 group-hover:scale-105'
        </div>
      )}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {category}
          </Badge>
        </div>
              <Image
                src={author && author.avatarUrl}
                alt={author && author.name}
                width={32}
                height={32}
                className='rounded-full mr-2'
                loading='lazy'
              />;
            ) : (;
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2' />;
            )}
            <span className='text-sm text-zion-slate-light'>{author && author.name}</span>          </div>        {author && (;
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">;
            {author && author.avatarUrl ? (;
              <Image src={author && author.avatarUrl} alt={author && author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />;
            ) : (;
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />;
            )}
            <span className="text-sm text-zion-slate-light">{author && author.name}</span>;
          </div>;
        {author && (
          <div className="flex items-center mt-auto pt-4 border-t border-zion-blue-light">
            {author.avatarUrl ? (
              <Image src={author.avatarUrl} alt={author.name} width={32} height={32} className="rounded-full mr-2" loading="lazy" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />
            )}
