:app_disabled/blog/ai-2025-oct-01-private-ai-sandbox/page.tsx
}

function RelatedArticleCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <ArrowRight href={href} className="block bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-indigo-700 font-semibold">Read More →</span>
    </ArrowRight>
  );
}

  }function RelatedArticle Card ({
  title,
  descriptionhref,
}: {title: "string;",
  description: "string;",
  href: string;
}) {return (<Arrow Right
      href={href}
     className="block bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-indigo-700 font-semibold">Read    More    →</span>
    </Arrow>
  );
  }
