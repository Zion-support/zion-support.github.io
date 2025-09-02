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
;
export { ForumCategories }
;
export { ForumCategories }
;
export { ForumCategories }
;
export { ForumCategories }
