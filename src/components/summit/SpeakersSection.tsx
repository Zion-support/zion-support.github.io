<<<<<<< HEAD
import Image from "next/image",
=======
import Image from &quot;next/image&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
  linkedin?: string
}

const speakers: Speaker[] = [
  {
    name: 'Alex Zion',
    title: 'Founder & CEO',
    avatar: 'https://placehold.co/100x100',
    twitter: '#',
    linkedin: '#'}],

export function SpeakersSection() {
  return (
    <section className=&quot;py-12 bg-zion-blue-dark text-white&quot; id=&quot;speakers&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>Speakers</h2>
        <div className=&quot;grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center&quot;>
          {speakers.map((sp) => (
            <div key={sp.name} className=&quot;text-center space-y-2&quot;>
              <Image
                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}
                className=&quot;rounded-full mx-auto&quot;
                loading=&quot;lazy&quot;
              />
              <p className=&quot;font-semibold&quot;>{sp.name}</p>
              <p className=&quot;text-sm opacity-80&quot;>{sp.title}</p>
              <div className=&quot;flex justify-center gap-3 text-zion-cyan&quot;>
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label=&quot;Twitter&quot;
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center&quot;
                  >
                    <Twitter className=&quot;h-4 w-4&quot; aria-hidden=&quot;true&quot; />
                    <span className=&quot;sr-only&quot;>Twitter</span>
                  </Link>
                )}
                {sp.linkedin && (
                  <a
                    href={sp.linkedin}
                    aria-label=&quot;LinkedIn&quot;
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center&quot;
                  >
                    <Linkedin className=&quot;h-4 w-4&quot; aria-hidden=&quot;true&quot; />
                    <span className=&quot;sr-only&quot;>LinkedIn</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
