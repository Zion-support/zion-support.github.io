import { Twitter, Linkedin } from 'lucide-react'
interface Speaker {
  name: string
  title: string
  avatar: string
  twitter?: string
  linkedin?: string
  linkedin?: string
}
interface Speaker {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  name: string,
  title: string,
  avatar: string,
  twitter?: string
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
<<<<<<< HEAD
<<<<<<< HEAD
  linkedin?: string
}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  name: string,
  title: string,
  avatar: string,
  twitter?: string

<<<<<<< HEAD
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  linkedin?: string
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  linkedin?: string
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  name: string
  title: string
  avatar: string
  twitter?: string

  linkedin?: string
}
const speakers: Speaker[] = [
<<<<<<< HEAD
<<<<<<< HEAD
  {
=======
  {



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






=======
  {
    linkedin: '#'}],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export function SpeakersSection() {
  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">
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

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}
<<<<<<< HEAD



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
                  <a;
                    href={sp.twitter}



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
<<<<<<< HEAD

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


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
<<<<<<< HEAD


                  </Link>


                )}
              </div>;
            </div>;
          ))}



        </div>;
      </div>;
    </section>;
  );
}

  );
}

                    aria - label='Twitter';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='flex items - center';
                    href = {sp.twitter, }
                    aria - label="Twitter";
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items - center";
                  >;
                    <Twitter className='h - 4 w - 4' aria - hidden='true' />;
                    <span className='sr - only'>Twitter</span>                  </a>                    <Twitter className="h - 4 w - 4" aria - hidden="true" />;
                    <span className="sr - only">Twitter</span>;
                  </a>)}
                {sp.linkedin && (
                  <a;
                    href={sp.linkedin}
                    aria - label='LinkedIn';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='flex items - center';
                  >;
                    <Linkedin className='h - 4 w - 4' aria - hidden='true' />;
                    <span className='sr - only'>LinkedIn</span>                  </a>                    aria - label="LinkedIn";
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items - center";
                  >;
                    <Linkedin className="h - 4 w - 4" aria - hidden="true" />;
                    <span className="sr - only">LinkedIn</span>)}
              </div>;
            </div>))}
        </div>;
      </div>;
    </section>);
}
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                )}
              </div>
            </div>
          ))}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
