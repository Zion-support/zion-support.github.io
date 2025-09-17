import React from 'react';
const NewContentPromoBanner = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">NewContentPromoBanner</h1>
          <p className="text-lg opacity-90">Revolutionary technology solutions</p>
=======
    <div className="mb-10 rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="uppercase tracking-wider text-xs font-bold opacity-90 mb-1">New</div>
          <h3 className="text-2xl font-extrabold">Fresh Content: Just Published</h3>
          <p className="opacity-90">Explore our latest insights on governance and production RAG.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 w-full md:w-auto">
          {recent.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
              <div className="text-sm font-semibold mb-1 line-clamp-2">{post.title}</div>
              <div className="text-xs opacity-80">{post.readTime} • {post.category}</div>
            </a>
          ))}
>>>>>>> origin/feat/new-content-promos-2025-09-16
        </div>
      </div>
    </div>
  );

};

<<<<<<< HEAD
export default NewContentPromoBanner;
=======
export default NewContentPromoBanner;
>>>>>>> origin/feat/new-content-promos-2025-09-16
