 export { function } export default function ForumCategories() { const categories = [
  { id: '1', name: 'General Discussion', description: 'General topics and discussions', postCount: 150, adminOnly: false, icon: 'message-circle', lastPost: { title: 'Welcome to the community!', author: 'Admin', date: '2024-01-15'}}, { id: '2', name: 'Technical Support', description: 'Get help with technical issues', postCount: 89, adminOnly: false, icon: 'code', lastPost: { title: 'API integration question', author: 'Developer123', date: '2024-01-14'}}] return() <div className='space-y-4'> {categories.map(category => ( <div key={category.id}' className='bg-white/10 backdrop-blur-sm rounded-lg p-4' >' <h3 className='text-lg font-semibold text-zion-cyan mb-2'> {category.name} </h3>' <p className='text-zion-slate-light mb-2'>{category.description}</p>' <div className='flex justify-between text-sm text-zion-slate-light'> <span>{category.postCount} posts</span> {category.lastPost && ( <span> Last: {category.lastPost.title} by {category.lastPost.author} </span> )} </div> </div> ))} </div> ) } ''export { function }
export default function ForumCategories() {}
<<<<<<< HEAD
  const categories = []{}""
';'
'';""
=======
<<<<<<< HEAD
  const categories = []{}
';'
'';
>>>>>>> main
''';'
      id: '1', ''';'
      name: 'General Discussion', ''';'
      description: 'General topics and discussions', ';'
<<<<<<< HEAD
      postCount: 150, '';""
      adminOnly: false, ''';'
      icon: 'message-circle', lastPost: {}""
';'
'';""
''';'
        title: 'Welcome to the community!', ''';'
        author: 'Admin', ''';'
        date: '2024-01-15'}}, {}""
';'
'';""
=======
      postCount: 150, '';
      adminOnly: false, ''';'
      icon: 'message-circle', lastPost: {}
';'
'';
''';'
        title: 'Welcome to the community!', ''';'
        author: 'Admin', ''';'
        date: '2024-01-15'}}, {}
';'
'';
>>>>>>> main
''';'
      id: '2', ''';'
      name: 'Technical Support', ''';'
      description: 'Get help with technical issues', ';'
<<<<<<< HEAD
      postCount: 89, '';""
      adminOnly: false, ''';'
      icon: 'code', lastPost: {}""
=======
      postCount: 89, '';
      adminOnly: false, ''';'
      icon: 'code', lastPost: {}
>>>>>>> main
';'
        title: 'API integration question', ';'
        author: 'Developer123', ';'
=======
  const categories = []{}"

'
''
      id: '1,'
      name: 'General Discussion,'
      description: 'General topics and discussions', 
      postCount: 150, '
      adminOnly: false, ''
      icon: 'message-circle', lastPost: {}"

'
''
        title: 'Welcome to the community!,'
        author: 'Admin,'
        date: '2024-01-15'}}, {}"

'
''
      id: '2,'
      name: 'Technical Support,'
      description: 'Get help with technical issues', 
      postCount: 89, '
      adminOnly: false, ''
      icon: 'code', lastPost: {}"

        title: 'API integration question', 
        author: 'Developer123', 
>>>>>>> main
        date: '2024-01-14'}}
  ];""
  return ()""
    <div className='space-y-4'>
<<<<<<< HEAD
      {categories.map(category => (""
        <div''';'
          key={category.id}'''';""
          className='bg-white/10 backdrop-blur-sm rounded-lg p-4''''>'''''
          <h3 className='text-lg font-semibold text-zion-cyan mb-2'>""
            {category.name}''''
          </h3>''''
          <p className='text-zion-slate-light mb-2'>{category.description}</p>''''
          <div className='flex justify-between text-sm text-zion-slate-light'>""
=======
<<<<<<< HEAD
      {categories.map(category => (
        <div''';'
          key={category.id}'''';
          className='bg-white/10 backdrop-blur-sm rounded-lg p-4''''>'''''
          <h3 className='text-lg font-semibold text-zion-cyan mb-2'>
=======
      {categories.map(category => ("
        <div''
          key={category.id}'''
          className='bg-white/10 backdrop-blur-sm rounded-lg p-4''>'''''
          <h3 className='text-lg font-semibold text-zion-cyan mb-2'>"
>>>>>>> main
            {category.name}''''
          </h3>''''
          <p className='text-zion-slate-light mb-2'>{category.description}</p>''''
          <div className='flex justify-between text-sm text-zion-slate-light'>"
 export default function ForumCategories() { const categories = [
  { id: '1', name: 'General Discussion', description: 'General topics and discussions', postCount: 150, adminOnly: false, icon: 'message-circle', lastPost: { title: 'Welcome to the community!', author: 'Admin', date: '2024-01-15' }, { id: '2', name: 'Technical Support', description: 'Get help with technical issues', postCount: 89, adminOnly: false, icon: 'code', lastPost: { title: 'API integration question', author: 'Developer123', date: '2024-01-14' ] return (<div className='space-y-4'>' {categories.map((category) => (<div key={category.id} className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>' <h3 className='text-lg font-semibold text-zion-cyan mb-2'>{category.name}</h3>' <p className='text-zion-slate-light mb-2'>{category.description}</p>' <div className='flex justify-between text-sm text-zion-slate-light'> <span>{category.postCount} posts</span> {category.lastPost && (<span>Last: {category.lastPost.title} by {category.lastPost.author}</span>)} </div> </div>))} </div>)} '';export default function ForumCategories() {}
>>>>>>> main
    const categories = []
        {}""
''
<<<<<<< HEAD
''
''''
            id: '1', ''''
            name: 'General Discussion',''''
            description: 'General topics and discussions', ''
=======
'''
            id: '1,''
            name: 'General Discussion,''
            description: 'General topics and discussions,
>>>>>>> main
            postCount: 150,''
            adminOnly: false, ''''
            icon: 'message-circle', lastPost: {}""
''
<<<<<<< HEAD
''
''''
                title: 'Welcome to the community!', ''''
                author: 'Admin',''''
                date: '2024-01-15', }, {}""
''
''
''''
            id: '2', ''''
            name: 'Technical Support',''''
            description: 'Get help with technical issues', ''
=======
'''
                title: 'Welcome to the community!,''
                author: 'Admin,''
                date: '2024-01-15',
}, {}"
'
''
'''
            id: '2,''
            name: 'Technical Support,''
            description: 'Get help with technical issues,
>>>>>>> main
            postCount: 89,''
            adminOnly: false, ''''
            icon: 'code', lastPost: {}""
''
<<<<<<< HEAD
''
''''
                title: 'API integration question', ''''
                author: 'Developer123',''''
                date: '2024-01-14', 
]""
=======
'''
                title: 'API integration question,''
                author: 'Developer123,''
                date: '2024-01-14',
]"
>>>>>>> main
    return (<div className='space-y-4'>''''
      {categories.map((category) => (<div key={category.id} className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>''''
          <h3 className='text-lg font-semibold text-zion-cyan mb-2'>{category.name}</h3>''''
          <p className='text-zion-slate-light mb-2'>{category.description}</p>''''
          <div className='flex justify-between text-sm text-zion-slate-light">'"
            <span>{category.postCount} posts</span>
            {category.lastPost && (
              <span>
                Last: {category.lastPost.title} by {category.lastPost.author}
              </span>
            )}
          </div>
        </div>))}
    </div>)}
export { ForumCategories }
export { ForumCategories }
export { ForumCategories }
export { ForumCategories }
export { ForumCategories }""
""
""