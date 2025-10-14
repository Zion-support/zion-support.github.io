import React from "react";

interface ContentPreviewCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  slug,
  imageUrl
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ContentPreviewCard</h2>
      <p>This component is under development.</p>
    </div>
ursor/fix-errors-and-merge-to-main-94a7
  );
</div></div></div></div></div></Link></ContentPreviewCardProps></article></div></img></div></div></span></span></h3></Link></div></div></div></span></div></Link></svg></path></ContentPreviewCardProps></article></div></img></div></div></span></span></h3></Link></div></div></div></span></div></Link></svg></path>};

export default ContentPreviewCard;
