import React from "react";

interface ContentPreviewCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  slug: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  id: _id,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  category,
  imageUrl,
  slug
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ContentPreviewCard</h2>
      <p>This component is under development.</p>
    </div>
  );
</div></div></div></div></div></Link></ContentPreviewCardProps></article></div></img></div></div></span></span></h3></Link></div></div></div></span></div></Link></svg></path></ContentPreviewCardProps></article></div></img></div></div></span></span></h3></Link></div></div></div></span></div></Link></svg></path>};

export default ContentPreviewCard;
