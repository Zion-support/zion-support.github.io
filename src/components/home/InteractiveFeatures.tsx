<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'

import Link from 'next/link'
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
import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from "next/link",
import { cn } from "@/lib/utils",
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from 'next / link';
import { cn } from '@/lib / utils';interface InteractiveFeaturesProps {
  class_name?: string,
  style?: React.CSSProperties;
}
interface InteractiveFeaturesProps {
<<<<<<< HEAD
<<<<<<< HEAD
  className?: string,
  style?: React.CSSProperties
}

export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),

  const features = [
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
        'Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.',
      icon: <Settings className='h-8 w-8 text-amber-700' />,
      link: '/equipment',
    },
  ]
  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",
      icon: <Settings className="h-8 w-8 text-amber-700" />,
      link: "/equipment"}],

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  },

  return (
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <Card
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}
              className='cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg'            >
              <CardHeader className='flex flex-row items-start space-x-3'>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * InteractiveFeatures - Function description
 */
function InteractiveFeatures() {
  const [open_index, setOpenIndex] = React.useState < number | null>(null);
  const features = [;
    {
      title: 'AI Talent Matching',
      description:;
        'Connect with the perfect talent using intelligent matching.',
      details:;
        'Our algorithms analyze skills, availability and experience to deliver the best candidates for your project.',
      icon: <Search className='h - 8 w - 8 text - blue - 700' />,
      link: '/match',
    },
    {
      title: 'Talent Directory',
      description: 'Browse a verified database of AI and tech specialists.',
      details:;
        'Every profile is vetted for quality and authenticity so you can hire with confidence.',
      icon: <Users className='h - 8 w - 8 text - purple - 700' />,
      link: '/talent',
    },
    {
      title: 'Services Marketplace',
      description:;
        'Discover professional tech and AI services for your business.',
      details:;
        'From on - demand IT support to specialized AI development, our marketplace offers transparent pricing and reviews.',
      icon: <Zap className='h - 8 w - 8 text - cyan - 700' />,
      link: '/services',
    },
    {
      title: 'Equipment Catalog',
      description: 'Find specialized hardware for development and research.',
      details:;
        'Access cutting - edge technology with flexible options to buy, rent or lease the gear you need.',
      icon: <Settings className='h - 8 w - 8 text - amber - 700' />,
      link: '/equipment',
    },
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  const handle_toggle = (index: number) =>: any {
    setOpenIndex (prev => (prev === index ? null : index));
  }

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
interface InteractiveFeaturesProps {;
  className?: string;
  style?: React && React.CSSProperties;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface InteractiveFeaturesProps {;
  className?: string;
  style?: React && React.CSSProperties;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function InteractiveFeatures(): any ({;
  className,;
  style,;
}: InteractiveFeaturesProps) {;
  const [openIndex, setOpenIndex] = React && React.useState<number | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleToggle = (index: number) => {;
    setOpenIndex(prev => (prev === index ? null : index));
  };
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <Card
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
import React from "react",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from "next/link",;
import { cn } from "@/lib/utils",;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {features.map((feature, index) => (;
            <Card;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={index}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => handleToggle(index)}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">


<<<<<<< HEAD
                {feature.icon}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg'            >
              <CardHeader className='flex flex-row items-start space-x-3'>
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start space-x-3">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {feature.icon}
                <div>
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
                  'transition-all duration-300'
                  'transition-all duration-300'
                  'transition-all duration-300',
                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}              >
                <CardContent className='text-sm text-zion-slate-light p-0'>
ursor/fix-website-loading-errors-and-merge-6662
=======

                  'transition-all duration-300',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  'transition-all duration-300',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                  "transition-all duration-300",
                  openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
                )}
              >
                <CardContent className="text-sm text-zion-slate-light p-0">
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p>{feature.details}</p>
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
              className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg";
            >;
              <CardHeader className="flex flex-row items-start space-x-3">;
                {feature.icon}
                <div>;
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    {feature.description}
                  </CardDescription>;
                </div>;
              </CardHeader>;
              <div;
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
                    </Link>;
                  </Button>;
                </CardContent>;
              </div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default InteractiveFeatures;
;
}
}

        </div>;
<<<<<<< HEAD
export default InteractiveFeatures

ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </section>;
  );



            </Card>))}
        </div>;
      </div>;
    </section>);
export default InteractiveFeatures;
<<<<<<< HEAD
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
}
;
<<<<<<< HEAD
export default InteractiveFeatures;
=======
export default InteractiveFeatures;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
export default InteractiveFeatures;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
