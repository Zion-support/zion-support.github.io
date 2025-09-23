'use client';

type Props = {
  url?: string;
  title?: string;
  description?: string;
};

export default function SocialShareButtons({ url, title, description }: Props) {
  const networks = ['X', 'LinkedIn', 'Facebook'];
  const shareText = encodeURIComponent(title ?? '');
  const shareUrl = encodeURIComponent(url ?? '');
  return (
    <div className='flex gap-3'>
      {networks.map(n => (
        <a
          key={n}
          className='rounded bg-white/10 px-3 py-2 hover:bg-white/20'
          aria-label={`Share on ${n}`}
          href={
            shareUrl
              ? `#share-${n.toLowerCase()}?text=${shareText}&url=${shareUrl}`
              : '#'
          }
          onClick={e => {
            if (!shareUrl) e.preventDefault();
          }}
        >
          {n}
        </a>
      ))}
    </div>
  );
}
