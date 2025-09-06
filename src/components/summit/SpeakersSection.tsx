
import { Twitter, Linkedin } from 'lucide-react'

  name: string,
  title: string,
  avatar: string,
  twitter?: string
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
  linkedin?: string
}
  linkedin?: string
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  name: string
  title: string
  avatar: string
  twitter?: string

  linkedin?: string
}
const speakers: Speaker[] = [
  {

    linkedin: '#'}],

export function SpeakersSection() {
  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">

                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}

                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >

                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>

<<<<<<< HEAD
                )}
              </div>
            </div>
          ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
