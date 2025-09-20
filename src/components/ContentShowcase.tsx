import React, { useMemo, useState } from 'react';
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { blogPosts } = require('../data/blog-posts.js');
  const latestFour = useMemo(() => {
    try {
      return [...blogPosts]
        .sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''))
        .slice(0, 4);
    } catch {
      return blogPosts.slice(0, 4);
    }
  }, [blogPosts]);
