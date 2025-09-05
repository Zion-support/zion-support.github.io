import Image from "next/image";

interface Speaker {_name: string;
  title: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;}

const speakers: Speaker[] = [
  {_name: 'Alex Zion', _title: 'Founder & CEO', _avatar: 'https://placehold.co/100x100', _twitter: '#', _linkedin: '#'}];

export function SpeakersSection() {_return (_<section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">
              <Image
                src={_sp.avatar}
                alt={_sp.name}
                width={_96}
                height={_96}
                className="rounded-full mx-auto"
                loading="lazy"
              />
              <p className="font-semibold">{_sp.name}</p>
              <p className="text-sm opacity-80">{_sp.title}</p>
              <div className="flex justify-center gap-3 text-zion-cyan">
                {_sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
                {_sp.linkedin && (
                  <a
                    href={sp.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
