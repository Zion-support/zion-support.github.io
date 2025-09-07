<<<<<<< HEAD:src-disabled/pages.disabled/Tutorial.tsx
=======
<<<<<<< HEAD
import ReactMarkdown from "react-markdown";
import type { Tutorial as TutorialType } from "@/types/tutorial";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TUTORIALS } from '@/data/tutorials'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from "react-markdown";
import type { Tutorial as TutorialType } from "@/types/tutorial";
import ReactMarkdown from 'react-markdown'
import type { Tutorial as TutorialType } from '@/types/tutorial'
import Link from "next/link",
import { useRouter } from "next/router",
import { TUTORIALS } from "@/data/tutorials",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from "react-markdown",
import type { Tutorial as TutorialType } from "@/types/tutorial",
interface TutorialPageProps {
  tutorial?: TutorialType
export default function Tutorial({
  tutorial: initialTutorial
}: TutorialPageProps) {
  const router = useRouter()
  const slug = router.query.slug as string | undefined
  const tutorial = initialTutorial |TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
interface TutorialPageProps {
  tutorial?: TutorialType
export default function Tutorial({
  tutorial: initialTutorial,;
}: TutorialPageProps) {;
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
  tutorial?: TutorialType
export default function Tutorial({
  tutorial: initialTutorial,;
}: TutorialPageProps) {;
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
tutorial?: TutorialType
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Tutorial.tsx


origin/cursor/automate-test-improve-and-merge-code-2533
interface TutorialPageProps {
  tutorial?: TutorialType
export default function Tutorial({
  tutorial: initialTutorial,;
}: TutorialPageProps) {;
  const router = useRouter();
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
  tutorial?: TutorialType
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {



  if (!tutorial) {
origin/cursor/automate-test-improve-and-merge-code-2533
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Tutorial not found.
      </div>
    )
  }
  return (
    <>
      <SEO title={tutorial.title} description={tutorial.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">"
        <div className="container mx-auto max-w-3xl">"
          <Button
<<<<<<< HEAD:src-disabled/pages.disabled/Tutorial.tsx
            variant='outline''
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'',
=======
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/tutorials">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h1>
          <p className="text-zion-slate-light mb-8">{tutorial.excerpt}</p>
          <div className="prose prose-invert">
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>
          </div>
          {tutorial.author && (
            <p className="mt-8 text-white font-semibold">
import Link from "next/link",;
import { useRouter } from "next/router",;
import { TUTORIALS } from "@/data/tutorials",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from "react-markdown",;
import type { Tutorial as TutorialType } from "@/types/tutorial",;
interface TutorialPageProps {;
  tutorial?: TutorialType;
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {;
  const router = useRouter(),;
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find((t) => t.slug === slug);
  if (!tutorial) {;
    return (;
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;

        Tutorial not found.;
      </div>;
    );
<<<<<<< HEAD

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Tutorial not found.
      </div>
    )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
    <>
      <SEO title={tutorial.title} description={tutorial.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button
<<<<<<< HEAD
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/tutorials">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h1>
          <p className="text-zion-slate-light mb-8">{tutorial.excerpt}</p>
          <div className="prose prose-invert">
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>
          </div>
          {tutorial.author && (
            <p className='mt-8 text-white font-semibold'>
              —{' '}
              {typeof tutorial.author === 'string'
                ? tutorial.author
                : tutorial.author.name}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
}
}
            <p className="mt-8 text-white font-semibold">
import Link from "next/link",;
import { useRouter } from "next/router",;
import { TUTORIALS } from "@/data/tutorials",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from "react-markdown",;
import type { Tutorial as TutorialType } from "@/types/tutorial",;
interface TutorialPageProps {;
  tutorial?: TutorialType;
}
export default function Tutorial({ tutorial: initialTutorial }: TutorialPageProps) {;
  const router = useRouter(),;
  const slug = router.query.slug as string | undefined;
  const tutorial = initialTutorial || TUTORIALS.find((t) => t.slug === slug);
  if (!tutorial) {;
    return (;
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;
        Tutorial not found.;
      </div>;
    );
  }
;
  return (;
    <>;
      <SEO title={tutorial.title} description={tutorial.excerpt} />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto max-w-3xl">;
          <Button;
            variant="outline";
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
            asChild;
          >;
            <Link href="/tutorials">;
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h1>;
          <p className="text-zion-slate-light mb-8">{tutorial.excerpt}</p>;
          <div className="prose prose-invert">;
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial.author && (;
            <p className="mt-8 text-white font-semibold">;
              — {typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name}
            </p>;
          )}
=======
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Tutorial.tsx
            asChild>;
            <Link href='/tutorials' />;
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className='text-3xl font-bold text-white mb-4'>;
            {tutorial && tutorial.title}
          </h1>;
          <p className='text-zion-slate-light mb-8'>{tutorial && tutorial.excerpt}</p>;
          <div className='prose prose-invert'>;
            <ReactMarkdown>{tutorial && tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial && tutorial.author && (;
            <p className='mt-8 text-white font-semibold'>;
              —{' '}'
              {typeof tutorial && tutorial.author === 'string';
                ? tutorial && tutorial.author;
                : tutorial && tutorial.author.name}
;
  return (;
    <>;
      <SEO title={tutorial.title} description={tutorial.excerpt} />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto max-w-3xl">;
          <Button;
            variant="outline";
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
            asChild;
          >;
            <Link href="/tutorials">;
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h1>;
          <p className="text-zion-slate-light mb-8">{tutorial.excerpt}</p>;
          <div className="prose prose-invert">;
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial.author && (;
            <p className="mt-8 text-white font-semibold">;
              — {typeof tutorial.author === 'string' ? tutorial.author : tutorial.author.name}
            </p>;
          )}
<<<<<<< HEAD:src-disabled/pages.disabled/Tutorial.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Tutorial.tsx
        </div>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD:src-disabled/pages.disabled/Tutorial.tsx
=======
<<<<<<< HEAD
;
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Tutorial.tsx
import Link from 'next / link';
import { use_router } from 'next / router';
import { TUTORIALS } from '@/data / tutorials';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react - markdown';
import type { Tutorial as TutorialType } from '@/types / tutorial';
interface TutorialPageProps {
  tutorial?: TutorialType;
export default /**
 * Tutorial - Function description
 */
function Tutorial() {
  const router = use_router ();
  const tutorial = initial_tutorial || TUTORIALS.find (t => t.slug ===,  slug);interface TutorialPageProps {
  tutorial?: TutorialType;
}
export default /**
 * Tutorial - Function description
 */
function Tutorial() {
  const router = use_router (),
  const slug = router.query.slug as string | undefined,
  const tutorial = initial_tutorial || TUTORIALS.find ((t, ) => t.slug === slug),
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>;
        Tutorial not found.;
      </div>);
  }
  return (
    <>;
      <SEO title={tutorial.title} description={tutorial.excerpt} />;
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;
        <div className='container mx - auto max - w-3xl'>;
          <Button;
            variant='outline';
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';',
            as_child;
          >;
            <Link href='/tutorials' />;
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Tutorials;
            </Link>;
          </Button>;
          <h1 className='text - 3xl font - bold text - white mb - 4'>;
            {tutorial.title}
          </h1>;
          <p className='text - zion - slate - light mb - 8'>{tutorial.excerpt}</p>;
          <div className='prose prose - invert'>;
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>;
          </div>;
          {tutorial.author && (
            <p className='mt - 8 text - white font - semibold'>;
              —{' '}'
              {typeof tutorial.author === 'string';
                ? tutorial.author;
                : tutorial.author.name}
            </p>)}
        </div>;
      </div>;
    </>);
}
<<<<<<< HEAD:src-disabled/pages.disabled/Tutorial.tsx
;
}}}}})))
;
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <Button
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/tutorials'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Tutorials
            </Link>
          </Button>
          <h1 className='text-3xl font-bold text-white mb-4'>
            {tutorial.title}
          </h1>
          <p className='text-zion-slate-light mb-8'>{tutorial.excerpt}</p>
          <div className='prose prose-invert'>
            <ReactMarkdown>{tutorial.content}</ReactMarkdown>
          </div>
          {tutorial.author && (
            <p className='mt-8 text-white font-semibold'>
              —{' '}
              {typeof tutorial.author === 'string'
                ? tutorial.author
                : tutorial.author.name}
            </p>
          )}
        </div>
      </div>
    </>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Tutorial.tsx
