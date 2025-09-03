<<<<<<< HEAD
 export default function ForumCategories() {} const categories = [ ;{ id: &apos;1&apos;, name: &apos;General Discussion&apos;, description: &apos;General topics and discussions&apos;, postCount: 150, adminOnly: false, icon: &apos;message-circle&apos;, lastPost: { titl,e: &apos;Welcome to the community!&apos;, author: &apos;Admin&apos;, date: &apos;2024-01-15&apos;}}, { id: &apos;2&apos;, name: &apos;Technical Support&apos;, description: &apos;Get help with technical issues&apos;, postCount: 89, adminOnly: false, icon: &apos;code&apos;, lastPost: { titl,e: &apos;API integration question&apos;, author: &apos;Developer123&apos;, date: &apos;2024-01-14&apos;}}] return()&apos;&apos; <div className=&apos;space-y-4&apos;> {categories.map(category => (&apos;} <div key={category.id}&apos; className=&apos;bg-white/10 backdrop-blur-sm rounded-lg p-4&apos; >&apos;&apos;' <h3 className=&apos;text-lg font-semibold text-zion-cyan mb-2&apos;> {category.name}&apos; </h3>&apos;&apos;' <p className=&apos;text-zion-slate-light mb-2&apos;>{category.description}&apos;</p>&apos;&apos;' <div className=&apos;flex justify-between text-sm text-zion-slate-light&apos;>&apos;' <span>{category.postCount} posts</span> {category.lastPost && (} <span> Last: {category.lastPost.title} by {category.lastPost.author} </span> )} </div> </div> ))} <;</div> ) } &apos;';&apos;&apos;''export default function ForumCategories() {}
  const categories = [];{}
';
&apos;';
&apos;&apos;';
      id: &apos;1&apos;,&apos;&apos;';
      name: &apos;General Discussion&apos;,'&apos;';
      description: &apos;General topics and discussions&apos;,';
      postCount: 150,&apos;';
      adminOnly: false,&apos;&apos;';
      icon: &apos;message-circle&apos;,
      lastPost: {}
';
&apos;';
&apos;&apos;';
        title: &apos;Welcome to the community!&apos;,'&apos;';
        author: &apos;Admin&apos;,'&apos;';
        date: &apos;2024-01-15&apos;}},
    {}
';
&apos;';
&apos;&apos;';
      id: &apos;2&apos;,&apos;&apos;';
      name: &apos;Technical Support&apos;,'&apos;';
      description: &apos;Get help with technical issues&apos;,';
      postCount: 89,&apos;';
      adminOnly: false,&apos;&apos;';
      icon: &apos;code&apos;,
      lastPost: {}
';
        title: &apos;API integration question&apos;,';
        author: &apos;Developer123&apos;,';
        date: &apos;2024-01-14&apos;}}
  ];
  return ()&apos;&apos;
    <div className=&apos;space-y-4&apos;>
      {categories.map(category => (&apos;}
        <div&apos;&apos;';
          key={category.id}&apos;&apos;'';
          className=&apos;bg-white/10 backdrop-blur-sm rounded-lg p-4&apos;&apos;'&apos;>'&apos;&apos;'&apos;&apos;
          <h3 className=&apos;text-lg font-semibold text-zion-cyan mb-2&apos;>
            {category.name}&apos;&apos;'&apos;&apos;
          </h3>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-zion-slate-light mb-2&apos;>{category.description}&apos;</p>&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex justify-between text-sm text-zion-slate-light&apos;>&apos;'
=======
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
>>>>>>> main
            <span>{category.postCount} posts</span>
            {category.lastPost && (}
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