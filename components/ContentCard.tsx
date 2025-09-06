import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  category?: string
}
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

  category?: string;
const ContentCard: React.FC<ContentCardProps> = ({
  title
  description
  href
  icon
  color
  glow
  date
  category
}) => {
    >
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
=======
  category?: string;

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  href,
  icon,
  color,
  glow,
  date,
  category,
}) => {

    >
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      {/* Header */}
      <div className='flex items-start justify-between mb-6'>
        <div
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <span className='text-2xl'>{icon}</span>
        </div>
<<<<<<< HEAD
        {category && (
<<<<<<< HEAD
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
=======

        {category && (
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            {category}
          </span>
        )}
      </div>
=======
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

          </span>
        )}
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>
<<<<<<< HEAD
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
=======

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>
        {description}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      </p>
      {/* Footer */}
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →
<<<<<<< HEAD
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
      </p>
      {/* Footer */}
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>        </div>
        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>        )}
      </div>
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
=======
          </span>
        </div>

        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        )}
      </div>
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </Link>
  );
<<<<<<< HEAD
}
export default ContentCard;    </Link>
  )
}
export default ContentCard;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default ContentCard;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </span>

        {description}
      </p>

      {/* Footer */}

        )}
      </div>

      {/* Hover Effects */}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
