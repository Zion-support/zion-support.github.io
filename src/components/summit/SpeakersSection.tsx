<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
import Image from "next/image";
=======
import Image from 'next/image'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Twitter, Linkedin } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface Speaker {
  name: string;
  title: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
  linkedin?: string;
}
interface Speaker {
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  name: string,
  title: string,
  avatar: string,
  twitter?: string
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  linkedin?: string
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  name: string
  title: string
  avatar: string
  twitter?: string

  linkedin?: string
}
const speakers: Speaker[] = [
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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

=======
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






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    linkedin: '#',
  },
]
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    linkedin: '#'}],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export function SpeakersSection() {
  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
=======
                className='rounded - full mx - auto';
                loading='lazy';
              <p className='font - semibold'>{sp.name}</p>;
              <p className='text - sm opacity - 80'>{sp.title}</p>;
              <div className='flex justify - center gap - 3 text - zion - cyan'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {sp.twitter && (
                  <a;
                    href={sp.twitter}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                {sp.twitter && (
                  <a
                    href={sp.twitter}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >

=======
                    href={sp.linkedin}
                    aria-label="LinkedIn"
=======

                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {sp.linkedin && (;
                  <a;
                    href={sp.linkedin}
                    aria-label="LinkedIn"
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>


                  </Link>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                )}
              </div>;
            </div>;
          ))}

=======


        </div>;
      </div>;
    </section>;
  );
}
<<<<<<< HEAD

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
