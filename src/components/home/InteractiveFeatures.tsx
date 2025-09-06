<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx

=======
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'

import Link from 'next/link'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardDescription
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'

import Link from 'next/link'
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { cn } from '@/lib/utils';interface InteractiveFeaturesProps {
  className?: string
  style?: React.CSSProperties
}
interface InteractiveFeaturesProps {
  className?: string
  style?: React.CSSProperties
export function InteractiveFeatures({
  className
  style
}: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const features = [
    {
      title: 'AI Talent Matching'
      description:
        'Connect with the perfect talent using intelligent matching.'
      details:
        'Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.'
      icon: <Search className='h-8 w-8 text-blue-700' />
      link: '/match'
    }
    {
      title: 'Talent Directory'
      description: 'Browse a verified database of AI and tech specialists.'
      details:
        'Every profile is vetted for quality and authenticity so you can hire with confidence.'
      icon: <Users className='h-8 w-8 text-purple-700' />
      link: '/talent'
    }
    {
      title: 'Services Marketplace'
      description:
        'Discover professional tech and AI services for your business.'
      details:
        'From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.'
      icon: <Zap className='h-8 w-8 text-cyan-700' />
      link: '/services'
    }
    {
      title: 'Equipment Catalog'
      description: 'Find specialized hardware for development and research.'
      details:
        'Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.'
      icon: <Settings className='h-8 w-8 text-amber-700' />
      link: '/equipment'
    }
  ]
  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from "next/link",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
========
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from 'next / link';
import { cn } from '@/lib / utils';interface InteractiveFeaturesProps {
  class_name?: string,
  style?: React.CSSProperties;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface InteractiveFeaturesProps {
  className?: string,
  style?: React.CSSProperties
}

export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const features = [
=======
>>>>>>>   const features = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const features = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      title: "AI Talent Matching",
      description: "Connect with the perfect talent using intelligent matching.",
      details:
        "Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.",
      icon: <Search className="h-8 w-8 text-blue-700" />,
      link: "/match"},
    {
      title: "Talent Directory",
      description: "Browse a verified database of AI and tech specialists.",
      details:
        "Every profile is vetted for quality and authenticity so you can hire with confidence.",
      icon: <Users className="h-8 w-8 text-purple-700" />,
      link: "/talent"},
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business.",
      details:
        "From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.",
      icon: <Zap className="h-8 w-8 text-cyan-700" />,
      link: "/services"},
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware for development and research.",
      details:
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        'Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.',
      icon: <Settings className='h-8 w-8 text-amber-700' />,
      link: '/equipment',
    },
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ]
  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",
      icon: <Settings className="h-8 w-8 text-amber-700" />,
      link: "/equipment"}],

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section className={cn("py-16 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Key Features
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Hover or click a card to learn more about what Zion offers
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <Card
>>>>>>>               key={index}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}
              className='cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg'            >
              <CardHeader className='flex flex-row items-start space-x-3'>
>>>>>>>                 {feature.icon}

========
  ];
  const handle_toggle = (index: number) =>: any {
    setOpenIndex (prev => (prev === index ? null : index));
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';interface InteractiveFeaturesProps {;
  className?: string,;
  style?: React && React.CSSProperties;
}
interface InteractiveFeaturesProps {;
  className?: string;
  style?: React && React.CSSProperties;
export function InteractiveFeatures(): any ({;
  className,;
  style,;
}: InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React && React.useState<number | null>(null);
  const features = [;
    {;
      title: 'AI Talent Matching',;
      description:;
        'Connect with the perfect talent using intelligent matching.',;
      details:;
        'Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.',;
      icon: <Search className='h-8 w-8 text-blue-700' />,;
      link: '/match',;
    },;
    {;
      title: 'Talent Directory',;
      description: 'Browse a verified database of AI and tech specialists.',;
      details:;
        'Every profile is vetted for quality and authenticity so you can hire with confidence.',;
      icon: <Users className='h-8 w-8 text-purple-700' />,;
      link: '/talent',;
    },;
    {;
      title: 'Services Marketplace',;
      description:;
        'Discover professional tech and AI services for your business.',;
      details:;
        'From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.',;
      icon: <Zap className='h-8 w-8 text-cyan-700' />,;
      link: '/services',;
    },;
    {;
      title: 'Equipment Catalog',;
      description: 'Find specialized hardware for development and research.',;
      details:;
        'Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.',;
      icon: <Settings className='h-8 w-8 text-amber-700' />,;
      link: '/equipment',;
    },;
  ];
  const handleToggle = (index: number) => {;
    setOpenIndex(prev => (prev === index ? null : index));
  };
  return (
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;
            <Card;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    <section className={cn ('py - 16 bg - zion - blue - dark', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 8'>;
          <h2 className='text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2'>;
            Key Features;
          </h2>;
          <p className='text - zion - slate - light text - lg max - w-2xl mx - auto'>;
            Hover or click a card to learn more about what Zion offers;
          </p>;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
          {features.map ((feature, index) => (
            <Card;
              key={index}
              onMouseEnter={() => setOpenIndex (index)}
              onMouseLeave={() => setOpenIndex (null)}
              on_click={() => handle_toggle (index)}
              className='cursor - pointer overflow - hidden transition - all duration - 300 hover:shadow - lg'            >;
              <CardHeader className='flex flex - row items - start space - x-3'>;
                {feature.icon}
                <div>;
                  <CardTitle className='text - lg text - white'>;
                    {feature.title}
                  </CardTitle>;
                  <CardDescription className='text - zion - slate - light'>;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <Card
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from "next/link",;
import { cn } from "@/lib/utils",;
<<<<<<< HEAD
;
interface InteractiveFeaturesProps {;
  className?:string,;
  style?:React.CSSProperties,;
}
;
export function InteractiveFeatures({ className, style } InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),;
;
  const features = [;
    {;
      title:"AI Talent Matching",;
      description:"Connect with the perfect talent using intelligent matching.",;
      details:;
        "Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.",;
      icon:<Search className="h-8 w-8 text-blue-700" />,;
      link:"/match"},;
    {;
      title:"Talent Directory",;
      description:"Browse a verified database of AI and tech specialists.",;
      details:;
        "Every profile is vetted for quality and authenticity so you can hire with confidence.",;
      icon:<Users className="h-8 w-8 text-purple-700" />,;
      link:"/talent"},;
    {;
      title:"Services Marketplace",;
      description:"Discover professional tech and AI services for your business.",;
      details:;
        "From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.",;
      icon:<Zap className="h-8 w-8 text-cyan-700" />,;
      link:"/services"},;
    {;
      title:"Equipment Catalog",;
      description:"Find specialized hardware for development and research.",;
      details:;
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",;
      icon:<Settings className="h-8 w-8 text-amber-700" />,;
      link:"/equipment"}],;
;
  const handleToggle = (index:number) => {;
    setOpenIndex((prev) => (prev === index ? null :index));
  },;
;
=======
interface InteractiveFeaturesProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),;
  const features = [;
    {;
      title: "AI Talent Matching",;
      description: "Connect with the perfect talent using intelligent matching.",;
      details:;
        "Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.",;
      icon: <Search className="h-8 w-8 text-blue-700" />,;
      link: "/match"},;
    {;
      title: "Talent Directory",;
      description: "Browse a verified database of AI and tech specialists.",;
      details:;
        "Every profile is vetted for quality and authenticity so you can hire with confidence.",;
      icon: <Users className="h-8 w-8 text-purple-700" />,;
      link: "/talent"},;
    {;
      title: "Services Marketplace",;
      description: "Discover professional tech and AI services for your business.",;
      details:;
        "From on-demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.",;
      icon: <Zap className="h-8 w-8 text-cyan-700" />,;
      link: "/services"},;
    {;
      title: "Equipment Catalog",;
      description: "Find specialized hardware for development and research.",;
      details:;
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",;
      icon: <Settings className="h-8 w-8 text-amber-700" />,;
      link: "/equipment"}],;
  const handleToggle = (index: number) => {;
    setOpenIndex((prev) => (prev === index ? null : index));
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <section className={cn("py-16 bg-zion-blue-dark", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-8">;
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;
            Key Features;
          </h2>;
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
            Hover or click a card to learn more about what Zion offers;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;
            <Card;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              key={index}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx

<<<<<<< HEAD
=======

              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {feature.icon}
>>>>>>>                 <div>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className='cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg'            >
              <CardHeader className='flex flex-row items-start space-x-3'>
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">
                {feature.icon}
                <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <div
                className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  'transition-all duration-300'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  'transition-all duration-300'
                  'transition-all duration-300',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}              >
                <CardContent className='text-sm text-zion-slate-light p-0'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  "transition-all duration-300",
=======
ursor/fix-website-loading-errors-and-merge-6662
                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}>;
                <CardContent className='text-sm text-zion-slate-light p-0'>;
                  <p>{feature && feature.details}</p>;
                  <Button
                    asChild
                    variant='link'
                    className='mt-3 p-0 h-auto text-primary'>;
                    <Link
                      href={feature && feature.link}
                      className='flex items-center gap-1'>;
                      Learn more <ArrowRight className='h-4 w-4' />;
>>>>>>>                   "transition-all duration-300",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  "transition-all duration-300",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
                )}
              >
                <CardContent className="text-sm text-zion-slate-light p-0">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  <p>{feature.details}</p>
=======
>>>>>>>                   <p>{feature.details}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <p>{feature.details}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href={feature.link} className="flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

========
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg";
            >;
              <CardHeader className="flex flex-row items-start space-x-3">;
                {feature.icon}
                <div>;
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {feature.description}
                  </CardDescription>;
                </div>;
              </CardHeader>;
              <div;
<<<<<<< HEAD
                className={cn (
                  'transition - all duration - 300',
                  open_index === index;
                    ? 'max - h-48 opacity - 100 p - 6 pt - 0';
                    : 'max - h-0 opacity - 0 p - 0')}              >;
                <CardContent className='text - sm text - zion - slate - light p - 0'>;
                  <p>{feature.details}</p>;
                  <Button;
                    as_child;
                    variant='link';
                    className='mt - 3 p - 0 h - auto text - primary';
                  >;
                    <Link;
                      href={feature.link}
                      className='flex items - center gap - 1';
                    >;
                      Learn more <ArrowRight className='h - 4 w - 4' />;
=======
                className={cn(;
                  "transition-all duration-300",;
                  openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" :"max-h-0 opacity-0 p-0";
                )}
              >;
                <CardContent className="text-sm text-zion-slate-light p-0">;
                  <p>{feature.details}</p>;
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">;
                    <Link href={feature.link} className="flex items-center gap-1">;
                      Learn more <ArrowRight className="h-4 w-4" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </Link>;
                  </Button>;
                </CardContent>;
              </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
        </div>;
=======
export default InteractiveFeatures

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </div>;
    </section>;
  );
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
            </Card>))}
        </div>;
      </div>;
    </section>);
export default InteractiveFeatures;
<<<<<<<< HEAD:src/components/home/InteractiveFeatures.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
export default InteractiveFeatures;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  ),;}
;
export default InteractiveFeatures,;
 interface InteractiveFeaturesProps {;
  className?: string;
style?: React.CSSProperties ;
}export function InteractiveFeatures ({;
  className, style ;
}: InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React.useState<number | null> (null);
const handleToggle = (index: number) => {;
  setOpenIndex ( (prev) => (prev === index ? null : index) ) ;
};
return (<section className= {;
  cn ("py-16 bg-zion-blue-dark", className) ;
}style= {;
  style ";
}> <div className="container mx-auto px-4" > <div className="text-center mb-8" > <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2" > text-zion-slate-light text-lg max-w-2xl mx-auto" > Hover or click a card to learn more about what Zion offers </p> </div> </CardDescription> </div> </CardHeader> <div </Link> </Button> </CardContent> </div> </Card>) ) ;
}</div> </div> </section>) ;
}export default InteractiveFeatures;
"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/home/InteractiveFeatures.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>
      </div>
    </section>
  )
export default InteractiveFeatures

export default InteractiveFeatures;
;
}
}
        </div>;
      </div>;
    </section>;
  );
}
;
export default InteractiveFeatures;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
