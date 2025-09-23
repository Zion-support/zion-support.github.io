import React from 'react';

type Post = {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
};

type Props = {
  title?: string;
  posts?: Post[];
};

const RelatedContentWidget: React.FC<Props> = () => {
  return null;
};

export default RelatedContentWidget;

