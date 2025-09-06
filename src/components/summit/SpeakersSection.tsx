<<<<<<< HEAD
=======
import Image from "next/image";
import Image from "next/image";
import Image from 'next/image'
import { Twitter, Linkedin } from 'lucide-react'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface Speaker {
  name: string;
  title: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
  linkedin?: string;
}
interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
  linkedin?: string
}

<<<<<<< HEAD

  name: string,
  title: string,
  avatar: string,
  twitter?: string

import Image from "next/image",
=======
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
}

  title: string
  avatar: string
  twitter?: string

  linkedin?: string
}
const speakers: Speaker[] = [
  {

    name: 'Alex Zion'
    title: 'Founder & CEO'
    avatar: 'https://placehold.co/100x100'
    twitter: '#'
    linkedin: '#'
  }
]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import Image from 'next/image';
import { Twitter, Linkedin } from 'lucide-react';
interface Speaker {;
  name: string;
  title: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
  linkedin?: string;
}

interface Speaker {;
  name: string,;
  title: string,;
  avatar: string,;
  twitter?: string;
  linkedin?: string;
}

const speakers: Speaker[] = [;
  {;
    name: 'Alex Zion',;
    title: 'Founder & CEO',;
    avatar: 'https://placehold && placehold.co/100x100',;
    twitter: '#',;
    linkedin: '#',;
  },;
];

export function SpeakersSection() {;
  return (
    <section className='py-12 bg-zion-blue-dark text-white' id='speakers'>;
      <div className='container mx-auto px-4'>;
        <h2 className='text-3xl font-bold mb-8 text-center'>Speakers</h2>;
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>;
          {speakers && speakers.map(sp => (;
            <div key={sp && sp.name} className='text-center space-y-2'>              <Image    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">;
      <div className="container mx-auto px-4">;
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>;
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">;
          {speakers && speakers.map((sp,) => (;
            <div key={sp && sp.name} className="text-center space-y-2">;
                src={sp && sp.avatar}
                alt={sp && sp.name}
                width={96}
                height={96}
                className='rounded-full mx-auto';
                loading='lazy';
              <p className='font-semibold'>{sp && sp.name}</p>;
              <p className='text-sm opacity-80'>{sp && sp.title}</p>;
              <div className='flex justify-center gap-3 text-zion-cyan'>;
                {sp && sp.twitter && (;
                  <a
                    href={sp && sp.twitter}
                    aria-label='Twitter'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                    href = {sp && sp.twitter,}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center">;
                    <Twitter className='h-4 w-4' aria-hidden='true' />;
                    <span className='sr-only'>Twitter</span>                  </a>                    <Twitter className="h-4 w-4" aria-hidden="true" />;
                    <span className="sr-only">Twitter</span>;
                  </a>;

import Image from "next/image";
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string;

    name: 'Alex Zion',
    title: 'Founder & CEO',
    avatar: 'https://placehold.co / 100x100',
    twitter: '#',
<<<<<<< HEAD
=======
    linkedin: '#',
  },
]
    linkedin: '#'}],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df






<<<<<<< HEAD

    linkedin: '#',
  },
];
export /**
 * SpeakersSection - Function description
 */
function SpeakersSection() {
  return (
    <section className='py - 12 bg - zion - blue - dark text - white' id='speakers'>;
      <div className='container mx - auto px - 4'>;
        <h2 className='text - 3xl font - bold mb - 8 text - center'>Speakers</h2>;
        <div className='grid gap - 8 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 justify - items - center'>;
          {speakers.map (sp => (
            <div key={sp.name} className='text - center space - y-2'>              <Image    <section className="py - 12 bg - zion - blue - dark text - white" id="speakers">;
      <div className="container mx - auto px - 4">;
        <h2 className="text - 3xl font - bold mb - 8 text - center">Speakers</h2>;
        <div className="grid gap - 8 sm:grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4 justify - items - center">;
          {speakers.map ((sp, ) => (
            <div key={sp.name} className="text - center space - y-2">;


=======
export function SpeakersSection() {
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Image
import Image from "next/image",;
import { Twitter, Linkedin } from 'lucide-react';
interface Speaker {;
  name: string,;
  title: string,;
  avatar: string,;
  twitter?: string,;
  linkedin?: string;
}
;
const speakers: Speaker[] = [;
  {;
    name: 'Alex Zion',;
    title: 'Founder & CEO',;
    avatar: 'https://placehold.co/100x100',;
    twitter: '#',;
    linkedin: '#'}];
export function SpeakersSection() {;
  return (;
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">;
      <div className="container mx-auto px-4">;
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>;
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">;
          {speakers.map((sp) => (;
            <div key={sp.name} className="text-center space-y-2">;
              <Image;
<<<<<<< HEAD

=======
                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}
                alt={sp.name}
                width={96}
                height={96}
                className='rounded-full mx-auto'
                loading='lazy'
              <p className='font-semibold'>{sp.name}</p>
              <p className='text-sm opacity-80'>{sp.title}</p>
              <div className='flex justify-center gap-3 text-zion-cyan'>
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label='Twitter'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                    href = {sp.twitter,}

                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}



                className="rounded-full mx-auto"
                loading="lazy"
              />
              <p className="font-semibold">{sp.name}</p>
              <p className="text-sm opacity-80">{sp.title}</p>
              <div className="flex justify-center gap-3 text-zion-cyan">
                className='rounded - full mx - auto';
                loading='lazy';
              <p className='font - semibold'>{sp.name}</p>;
              <p className='text - sm opacity - 80'>{sp.title}</p>;
              <div className='flex justify - center gap - 3 text - zion - cyan'>;
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label="Twitter"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <Twitter className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>Twitter</span>                  </a>                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    aria-label='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                  >
                    <Linkedin className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>LinkedIn</span>                  </a>                    aria-label="LinkedIn"
<<<<<<< HEAD

=======
                    href={sp.linkedin}
                    aria-label="LinkedIn"

                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {sp.linkedin && (;
                  <a;
                    href={sp.linkedin}
                    aria-label="LinkedIn"


                    target="_blank"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  </Link>


<<<<<<< HEAD
;
=======
                )}
              </div>
            </div>
          ))}

              </div>
            </div>
          ))}
        </div>
      </div>;
    </section>;
  );
};
}
ursor/fix-website-loading-errors-and-merge-6662
                  </Link>
                  </Link>
                )}
              </div>
            </div>
          ))}


        </div>
      </div>;
    </section>;
  );
};
}
        </div>;
      </div>;
    </section>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
