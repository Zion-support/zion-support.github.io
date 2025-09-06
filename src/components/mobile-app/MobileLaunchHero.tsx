<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
<<<<<<< HEAD
=======
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './AppStoreButtons'
import { Card, CardContent } from '@/components/ui/card';
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = '#'; // Replace with actual App Store URL
  const googlePlayUrl = '#'; // Replace with actual Google Play URL
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './AppStoreButtons'
import { Card, CardContent } from '@/components/ui/card'
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = '#'; // Replace with actual App Store URL
  const googlePlayUrl = '#'; // Replace with actual Google Play URL
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


              Find top AI talent or global IT jobs on the go. Track projects,


=======
<<<<<<< HEAD
            <p className='text-lg md:text-xl opacity-90 mb-8'>
<<<<<<< HEAD
              Find top AI talent or global IT jobs on the go. Track projects
=======
              Find top AI talent or global IT jobs on the go. Track projects,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


              <AppStoreButtons 


=======
<<<<<<< HEAD
              <AppStoreButtons
=======
              <AppStoreButtons 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
<<<<<<< HEAD
                >                  See Features
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

                >                  See Features              
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            
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
              
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  See Features
                </Button>
              </Link>
            </div>
          </div>

          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
              
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />

                    {/* In production, replace with actual app screenshot */}

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

=======
}
"  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React from "react",;
import Link from "next/link",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppStoreButtons } from './AppStoreButtons';
import { Card, CardContent } from '@/components/ui/card';
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = '#'; // Replace with actual App Store URL;
  const googlePlayUrl = '#'; // Replace with actual Google Play URL;

  return (
    <section className='relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24'>;
      <div className='container mx-auto px-4 lg:px-8'>;
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>;
          <div className='flex-1 text-white'>;
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>;
              The Power of <span className='text-zion-cyan'>Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;

            <p className='text-lg md:text-xl opacity-90 mb-8'>;
              Find top AI talent or global IT jobs on the go. Track projects,;
              message candidates, and get AI-powered matches instantly with our;
              mobile app.;
            </p>;

            <div className='mb-8'>;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;

            <div className="mb-8">;
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />;
            </div>;

            <div className='flex flex-wrap gap-4'>;
              <Link href='/open-app'>;
                <Button
                  variant='outline'
                  size='lg'
                  className='flex gap-2 border-white text-white hover:bg-white/10'>                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>            ;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;

              <Link href='#features'>;
                <Button
                  variant='ghost'
                  size='lg'
                  className='text-white hover:bg-white/10'>                  See Features              ;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;

          <div className='flex-1 flex justify-center md:justify-end'>;
            <div className='relative'>;
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>;

              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>;
                <CardContent className='p-0'>;
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>;
                    <Smartphone className='w-40 h-40 text-white opacity-40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;

              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
