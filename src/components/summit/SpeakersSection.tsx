<<<<<<< HEAD
import Image from "next/image";
import { Twitter, Linkedin } from 'lucide-react'
=======
import Image from 'next/image';
import { Twitter, Linkedin } from 'lucide-react';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  name: string;
  title: string;
  avatar: string;
  twitter?: string;
<<<<<<< HEAD
=======
  name: string
  title: string
  avatar: string
  twitter?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  linkedin?: string
}
const speakers: Speaker[] = [
  {
<<<<<<< HEAD
    name: 'Alex Zion';
    title: 'Founder & CEO';
    avatar: 'https://placehold.co/100x100';
    twitter: '#';
    linkedin: '#'}],
=======
  linkedin?: string;

const speakers: Speaker[] = [
  {
    name: 'Alex Zion',
    title: 'Founder & CEO',
    avatar: 'https://placehold.co/100x100',
    twitter: '#',
    linkedin: '#',
  },
];
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

=======
    name: 'Alex Zion'
    title: 'Founder & CEO'
    avatar: 'https://placehold.co/100x100'
    twitter: '#'
    linkedin: '#'
  }
]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export function SpeakersSection() {
  return (
    <section className='py-12 bg-zion-blue-dark text-white' id='speakers'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Speakers</h2>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
          {speakers.map(sp => (
<<<<<<< HEAD
            <div key={sp.name} className='text-center space-y-2'>              <Image    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp,) => (
            <div key={sp.name} className="text-center space-y-2">
=======
            <div key={sp.name} className='text-center space-y-2'>
              <Image
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                src={sp.avatar}
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
<<<<<<< HEAD
                    href = {sp.twitter,}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Twitter className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>Twitter</span>                  </a>                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
=======
                  >
                    <Twitter className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>Twitter</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </a>
                )}
                {sp.linkedin && (
                  <a
                    href={sp.linkedin}
                    aria-label='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                  >
                    <Linkedin className='h-4 w-4' aria-hidden='true' />
<<<<<<< HEAD
                    <span className='sr-only'>LinkedIn</span>                  </a>                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
=======
                    <span className='sr-only'>LinkedIn</span>
                  </a>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
