

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (

          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
    </div>
  )
<<<<<<< HEAD
