
export default function ForumCategories() {}
  const categories = []
    {}""
''

      postCount: 150','
      adminOnly: false, ''''
      icon: 'message-circle', lastPost: {}""
''


        date: '2024-01-14'}}
  ]
  return ()""
    <div className='space-y-4'>
      {categories.map(category => (""
        <div ''''
          key={category.id}''''

          </h3>''''
          <p className='text-zion-slate-light mb-2'>{category.description}</p>''''
          <div className='flex justify-between text-sm text-zion-slate-light'>
            <span>{category.postCount} posts</span>
            {category.lastPost && (
              <span>
                Last: {category.lastPost.title} by {category.lastPost.author}
              </span>
            )}
          </div>
        </div>))}
    </div>)}




