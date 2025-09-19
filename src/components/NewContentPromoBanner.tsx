import React from 'react';
import { getRecentBlogPosts } from '../data/blog-posts';

const NewContentPromoBanner: React.FC = () => {
	const recent = getRecentBlogPosts(3);

};

export default NewContentPromoBanner;