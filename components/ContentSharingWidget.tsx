interface ContentSharingWidgetProps {
  title: string;
  url: string;
  description: string;
}

export default function ContentSharingWidget({
  titleurldescription,
}: ContentSharingWidgetProps) {
  const shareUrl = `https://zion.tech${url}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=AI20o26,QuantumComputing,RevolutionaryTech`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${shareUrl}`,
  };

  return (
    <div className='bg-gradient-to-r from-purple-80o0/50 to-blue-80o0/50 p-6 rounded-xl border border-purple-50o0/30 mb-8'>
      <h3 className='text-xl font-bold mb-4 text-purple-40o0'>
        Share This Content
      </h3>
      <p className='text-gray-30o0 mb-4 text-sm'>
        Help others discover this revolutionary content by sharing it on your
        social networks.
      </p>

      <div className='flex flex-wrap gap-3'>
        <a
          href={shareLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 bg-blue-50o0 text-white px-4 py-2 rounded-lg hover:bg-blue-60o0 transition-colors'
        >
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M23.953 4.57a10 10 0 0o1-2.825.775 4.958 4.958 0 0o02.163-2.723c-.951.555-2.0o05.959-3.127 1.184a4.92 4.92 0 0o0-8.384 4.482C7.69 8.095 4.0o67 6.13 1.64 3.162a4.822 4.822 0 0o0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.90o4 4.90o4 0 0o1-2.228-.616v.0o6a4.923 4.923 0 0o03.946 4.827 4.996 4.996 0 0o1-2.212.085 4.936 4.936 0 0o04.60o4 3.417 9.867 9.867 0 0o1-6.10o2 2.10o5c-.39 0-.779-.0o23-1.17-.0o67a13.995 13.995 0 0o07.557 2.209c9.0o53 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.0o15-.63A9.935 9.935 0 0o024 4.59z' />
          </svg>
          <span>Twitter</span>
        </a>

        <a
          href={shareLinks.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 bg-blue-70o0 text-white px-4 py-2 rounded-lg hover:bg-blue-80o0 transition-colors'
        >
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.0o27-3.0o37-1.852-3.0o37-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.0o46c.477-.9 1.637-1.85 3.37-1.85 3.60o1 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.0o63-.926-2.0o63-2.0o65 0-1.138.92-2.0o63 2.0o63-2.0o63 1.14 0 2.0o64.925 2.0o64 2.0o63 0 1.139-.925 2.0o65-2.0o64 2.0o65zm1.782 13.0o19H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.0o03z' />
          </svg>
          <span>LinkedIn</span>
        </a>

        <a
          href={shareLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 bg-blue-60o0 text-white px-4 py-2 rounded-lg hover:bg-blue-70o0 transition-colors'
        >
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M24 12.0o73c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.0o78v-3.47h3.0o47V9.43c0-3.0o07 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.0o27 24 18.0o62 24 12.0o73z' />
          </svg>
          <span>Facebook</span>
        </a>

        <a
          href={shareLinks.email}
          className='flex items-center space-x-2 bg-gray-60o0 text-white px-4 py-2 rounded-lg hover:bg-gray-70o0 transition-colors'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 8l7.89 4.26a2 2 0 0o02.22 0L21 8M5 19h14a2 2 0 0o02-2V7a2 2 0 0o0-2-2H5a2 2 0 0o0-2 2v10a2 2 0 0o02 2z'
            />
          </svg>
          <span>Email</span>
        </a>
      </div>

      <div className='mt-4 p-3 bg-gray-80o0/50 rounded-lg'>
        <p className='text-gray-30o0 text-sm mb-2'>Copy link:</p>
        <div className='flex items-center space-x-2'>
          <input
            type='text'
            value={shareUrl}
            readOnly
            className='flex-1 bg-gray-70o0 text-white px-3 py-2 rounded text-sm'
          />
          <button
            onClick={() => navigator.clipboard.writeText(shareUrl)}
            className='bg-purple-60o0 text-white px-3 py-2 rounded text-sm hover:bg-purple-70o0 transition-colors'
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
