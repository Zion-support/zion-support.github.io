<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import Link from "next/link",

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './AppStoreButtons'
import { Card, CardContent } from '@/components/ui/card';
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = '#'; // Replace with actual App Store URL
  const googlePlayUrl = '#'; // Replace with actual Google Play URL

import React from "react",
import Link from "next/link",
import { ArrowRight, Smartphone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './AppStoreButtons'
import { Card, CardContent } from '@/components/ui/card'
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = '#'; // Replace with actual App Store URL
  const googlePlayUrl = '#'; // Replace with actual Google Play URL
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              The Power of <span className="text-zion-cyan">Zion</span><br />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (
    <section className='relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          <div className='flex-1 text-white'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
              The Power of <span className='text-zion-cyan'>Zion</span>
              <br />
              In Your Pocket
            </h1>
<<<<<<< HEAD
              Find top AI talent or global IT jobs on the go. Track projects


  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              The Power of <span className="text-zion-cyan">Zion</span><br />
              In Your Pocket
            </h1>
            <p className='text-lg md:text-xl opacity-90 mb-8'>
              Find top AI talent or global IT jobs on the go. Track projects
              Find top AI talent or global IT jobs on the go. Track projects,
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


              Find top AI talent or global IT jobs on the go. Track projects,


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              message candidates, and get AI-powered matches instantly with our
              mobile app.
            </p>
            <div className='mb-8'>
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            <div className="mb-8">
<<<<<<< HEAD
<<<<<<< HEAD
              <AppStoreButtons
              <AppStoreButtons
              <AppStoreButtons 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              <AppStoreButtons 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />
            </div>
            <div className='flex flex-wrap gap-4'>
              <Link href='/open-app'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex gap-2 border-white text-white hover:bg-white/10'
                >                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
            <div className="flex flex-wrap gap-4">
              <Link href="/open-app">
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href='#features'>
                <Button
                  variant='ghost'
                  size='lg'
                  className='text-white hover:bg-white/10'
<<<<<<< HEAD
<<<<<<< HEAD
                >                  See Features
                >                  See Features
                >                  See Features              
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";

export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL

  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              The Power of <span className="text-zion-cyan">Zion</span><br />
              In Your Pocket
            </h1>

                >                  See Features              


<<<<<<< HEAD
            
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/open-app">
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
              




              <Link href="#features">
=======


              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  See Features
                </Button>
              </Link>
            </div>
          </div>
          <div className='flex-1 flex justify-center md:justify-end'>
            <div className='relative'>
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>
              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>
                <CardContent className='p-0'>
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>
                    <Smartphone className='w-40 h-40 text-white opacity-40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
              



              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />
<<<<<<< HEAD

                    {/* In production, replace with actual app screenshot */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
"  )
}

<<<<<<< HEAD
import React from "react",;
import Link from "next/link",;


=======


import React from 'react';
import Link from 'next/link';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
import { Card, CardContent } from "@/components/ui/card",;
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (;
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};

import React from 'react';
import Link from 'next / link';
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { AppStoreButtons } from './AppStoreButtons';
import { Card, CardContent } from '@/components / ui / card';
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production;
  const appStoreUrl = '#'; // Replace with actual App Store URL;
  const googlePlayUrl = '#'; // Replace with actual Google Play URL;
  return (
    <section className='relative bg - gradient - to - r from - zion - blue - dark via - zion - blue to - zion - purple / 40 py - 16 md:py - 24'>;
      <div className='container mx - auto px - 4 lg:px - 8'>;
        <div className='flex flex - col md:flex - row items - center gap - 8 md:gap - 16'>;
          <div className='flex - 1 text - white'>;
            <h1 className='text - 4xl md:text - 5xl lg:text - 6xl font - bold mb - 4 leading - tight'>;
              The Power of <span className='text - zion - cyan'>Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;
            <p className='text - lg md:text - xl opacity - 90 mb - 8'>;
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI - powered matches instantly with our;
              mobile app.;
            </p>;
            <div className='mb - 8'>;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="mb - 8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />;
            </div>;
            <div className='flex flex - wrap gap - 4'>;
              <Link href='/open - app'>;
                <Button;
                  variant='outline';
                  size='lg';
                  className='flex gap - 2 border - white text - white hover:bg - white / 10';
                >                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
            <div className="flex flex - wrap gap - 4">;
              <Link href="/open - app">;
                <Button variant="outline" size="lg" className="flex gap - 2 border - white text - white hover:bg - white / 10">;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              <Link href='#features'>;
                <Button;
                  variant='ghost';
                  size='lg';
                  className='text - white hover:bg - white / 10';
                >                  See Features;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text - white hover:bg - white / 10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className='flex - 1 flex justify - center md:justify - end'>;
            <div className='relative'>;
              {/* Phone mockup with glow effect */}
              <div className='absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2'></div>;
              <Card className='relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3'>;
                <CardContent className='p - 0'>;
                  <div className='w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center'>;
                    <Smartphone className='w - 40 h - 40 text - white opacity - 40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3">;
                <CardContent className="p - 0">;
                  <div className="w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center">;
                    <Smartphone className="w - 40 h - 40 text - white opacity - 40" />;
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}
"  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
