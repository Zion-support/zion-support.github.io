 
}const post: BlogPost = {
  id: uuidv4 (), title: body.title!, slug: body.slug!, coverImageUrl: body.coverImageUrl || '', author: body.author!, publishDate: body.publishDate!, tags: body.tags || [], topics: body.topics || [], seo: {
  metaTitle: body.seo?.metaTitle || body.title!, metaDescription: body.seo?.metaDescription || '', ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '' 
};
body: body.body || '';
status: body.status || 'draft';
}return res.status (405) .end () 
}