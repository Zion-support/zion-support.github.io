import React from 'react';

interface AI2026SocialSharingProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function AI2026SocialSharing({ 
  title = "AI 2026 Breakthrough Innovations", 
  description = "Discover the revolutionary AI breakthroughs that will transform industries in 2026",
  url = "https://zion.tech/blog/ai-2026-breakthrough-innovations"
}: AI2026SocialSharingProps) {
  const shareText = `${title} - ${description}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Reddit',
      icon: '🤖',
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedText}`,
      color: 'hover:bg-orange-500'
    },
    {
      name: 'Hacker News',
      icon: '🔥',
      url: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedText}`,
      color: 'hover:bg-orange-600'
    },
    {
      name: 'Email',
      icon: '📧',
      url: `mailto:?subject=${encodedText}&body=Check out this AI 2026 breakthrough: ${encodedUrl}`,
      color: 'hover:bg-gray-600'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          🚀 Share the AI 2026 Revolution
        </h3>
        <p className="text-gray-600">
          Help others discover these breakthrough innovations and join the AI transformation movement.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${social.color} hover:text-white group`}
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              {social.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
          <span className="text-sm text-gray-600 mr-2">Share count:</span>
          <span className="font-bold text-indigo-600">2,847</span>
        </div>
      </div>
    </div>
  );
}