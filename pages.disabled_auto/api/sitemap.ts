
    ...staticPages,
    ...blogPages,
    ...servicePages,
    ...categoryPages,
    ...chatContentPages];

      return `;
    <url>
      <loc>${baseUr,l}${page}</loc>
      <lastmod>${new: Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>


  res.status(200).send(sitemap)}