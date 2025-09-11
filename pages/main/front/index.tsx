<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function FrontLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">


    <div className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
import Link from 'next/link',
import { motion } from 'framer-motion',
=======


      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />
      </Head>

import { motion } from 'framer-motion';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta
          name='description'
          content='Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously.'
        />
      </Head>

import { motion } from 'framer-motion';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function FrontLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />
      </Head>
      {/* Animated background layers */}
<<<<<<< HEAD

=======
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float' />
        <div className='absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow' />
        <div className='absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast' />
        <div className='absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid' />
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]'>
          <div className='twinkle-field absolute inset-0' />        </div>
      </div>
      {/* Header */}
      <header className='relative z-10'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>
          <div className='text-2xl font-bold tracking-wide'>
            <Link href='/'>
              <a className='bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon'>
                Zion
              </a>
            </Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Animated background layers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      </div>

      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
<<<<<<< HEAD
          <div className="text-2xl font-bold tracking-wide">
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</Link></Link>
          </div>
          <div className="hidden gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</Link></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</Link></Link>
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</Link></Link>
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</Link></Link>


          </div>
          <div className='hidden gap-6 md:flex'>
            <Link href='/'>
              <a className='text-white/80 hover:text-white'>Home</a>
            </Link>
            <Link href='/automation'>
              <a className='text-white/80 hover:text-white'>Automations</a>
            </Link>
            <Link href='/newsroom'>
              <a className='text-white/80 hover:text-white'>Newsroom</a>
            </Link>
            <Link href='/contact'>
              <a className='text-white/80 hover:text-white'>Contact</a>
            </Link>          </div>
        </nav>
      </header>


<<<<<<< HEAD
=======
import {motion} from 'framer-motion';
export default function FrontLanding() {;
  return (
    <div className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>;
      <Head>;
        <title>Zion — Autonomous Cloud Automations</title>;
        <meta
          name='description'
          content='Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously.'
        />;
      </Head>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Animated background layers */}
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float' />
        <div className='absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow' />
        <div className='absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast' />
        <div className='absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid' />
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]'>
          <div className='twinkle-field absolute inset-0' />        </div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="text-2xl font-bold tracking-wide">
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</Link></Link>
          </div>
          <div className="hidden gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</Link></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</Link></Link>
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</Link></Link>
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</Link></Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>
          <div className='hidden gap-6 md:flex'>
            <Link href='/'>
              <a className='text-white/80 hover:text-white'>Home</a>
            </Link>
            <Link href='/automation'>
              <a className='text-white/80 hover:text-white'>Automations</a>
            </Link>
            <Link href='/newsroom'>
              <a className='text-white/80 hover:text-white'>Newsroom</a>
            </Link>
            <Link href='/contact'>
              <a className='text-white/80 hover:text-white'>Contact</a>
            </Link>          </div>
        </nav>
      </header>
      {/* Hero */}
      <main className='relative z-10'>
        <section className='mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24'>
          <div className='text-center'>            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md'
            >
              <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />              Autonomous agents running continuous improvements
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className='mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl'
            >
              <span className='gradient-text'>
                Autonomous Cloud Automations
              </span>            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='mx-auto mt-5 max-w-3xl text-lg text-white/80'
            >
              Self-improving, cloud-native agents that invent, generate, and run
              new automation factories—fixing, optimizing, and syncing changes
              to the repository continuously.            </motion.p>
      {/* Hero */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="text-center">
<<<<<<< HEAD
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Autonomous agents running continuous improvements
      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</Link></Link>
          </div>
          <div className="hidden gap-6 md:flex">
            <Link href="/"><a className="text-white/80 hover:text-white">Home</Link></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</Link></Link>
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</Link></Link>
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</Link></Link>
          </div>
        </nav>
      </header>
      {/* Hero */}
      <main className='relative z-10'>
        <section className='mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24'>
          <div className='text-center'>            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md'
            >
              <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />              Autonomous agents running continuous improvements
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className='mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl'
            >
              <span className='gradient-text'>
                Autonomous Cloud Automations
              </span>            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
                className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'>;
                Live Meta Factory;
              </a>;
            </motion && motion.div>;
            {/* Quick stats */}
            <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4'>;
              {[;
                ['24/7', 'Autonomous'],;
                ['Main', 'Direct Sync'],;
                ['0 Ops', 'Cloud‑Native'],;
                ['Safety', 'Guardrails'],;
              ].map(([k, v]) => (                <motion&& motion.div
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Cloud Automations</a></Link>
            </div>

            {/* Live metrics strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7Autonomous'];
                ['MainDirect Sync'];
                ['0 OpsCloud‑Native'];
                ['SafetyGuardrails']].map(([k, v]) => (
                <motion.div
=======
      <header className='relative z-10'>;
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>;
          <div className='text-2xl font-bold tracking-wide'>;
            <Link href='/'>;
              <a className='bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon'>;
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
export default /**
 * FrontLanding - Function description
 */
function FrontLanding() {
  return (
    <div className='relative min - h-screen overflow - hidden bg - slate - 950 text - white'>;
      <Head>;
        <title > Zion — Autonomous Cloud Automations</title>;
        <meta;
          name='description';
          content='Futuristic, cloud - native autonomous automations that innovate, optimize, and sync changes to the repo continuously.';
        />;
      </Head>;
      {/* Animated background layers */}
      <div aria - hidden className='pointer - events - none absolute inset - 0 -z - 10'>;
        <div className='absolute -top - 24 -left - 24 h-[38rem] w-[38rem] rounded - full bg - fuchsia - 500 / 20 blur - 3xl animate - float' />;
        <div className='absolute top - 1/4 -right - 32 h-[30rem] w-[30rem] rounded - full bg - cyan - 400 / 20 blur - 3xl animate - float - slow' />;
        <div className='absolute bottom - 0 left - 1/4 h-[26rem] w-[26rem] rounded - full bg - violet - 400 / 10 blur - 2xl animate - float - fast' />;
        <div className='absolute inset - 0 opacity-[0.08] [background:radial - gradient (circle_at_center, rgba (255, 255, 255, 0.35)_0, rgba (255, 255, 255, 0)_60%), linear - gradient (90deg, rgba (255, 255, 255, 0.12)_1px, transparent_1px), linear - gradient (0deg, rgba (255, 255, 255, 0.12)_1px, transparent_1px)] bg-[size:100%_100%, 3rem_3rem, 3rem_3rem] animate - grid' />;
        <div className='absolute inset - 0 [mask - image:radial - gradient (ellipse_at_center, white, transparent_70%)]'>;
          <div className='twinkle - field absolute inset - 0' />        </div>;
      </div>;
      {/* Header */}
      <header className='relative z - 10'>;
        <nav className='mx - auto flex max - w-7xl items - center justify - between px - 6 py - 6'>;
          <div className='text - 2xl font - bold tracking - wide'>;
            <Link href='/'>;
              <a className='bg - gradient - to - r from - fuchsia - 400 via - violet - 400 to - cyan - 400 bg - clip - text text - transparent drop - shadow - neon'>;
                Zion;
              </a>;
            </Link>;
          </div>;


              transition={{ duration: 0 && 0.6 }}
              className='mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md'>;
              <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0 && 0.9)]' />              Autonomous agents running continuous improvements;
            </motion && motion.div>;
            <motion&& motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.7, delay: 0 && 0.05 }}
              className='mt-6 text-5xl font-extrabold leading-[1 && 1.05] tracking-tight md:text-6xl'>;
              <span className='gradient-text'>;
                Autonomous Cloud Automations;
              </span>            </motion && motion.h1>;
            <motion&& motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.7, delay: 0 && 0.1 }}
              className='mx-auto mt-5 max-w-3xl text-lg text-white/80'>;
              Self-improving, cloud-native agents that invent, generate, and run;
              new automation factories—fixing, optimizing, and syncing changes;
              to the repository continuously.            </motion && motion.p>;
            <motion&& motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className='hidden gap - 6 md:flex'>;
            <Link href='/'>;
              <a className='text - white / 80 hover:text - white'>Home</a>;
            </Link>;
            <Link href='/automation'>;
              <a className='text - white / 80 hover:text - white'>Automations</a>;
            </Link>;
            <Link href='/newsroom'>;
              <a className='text - white / 80 hover:text - white'>Newsroom</a>;
            </Link>;
            <Link href='/contact'>;
              <a className='text - white / 80 hover:text - white'>Contact</a>;
            </Link>          </div>;
        </nav>;
      </header>;
      {/* Hero */}
      <main className='relative z - 10'>;
        <section className='mx - auto max - w-7xl px - 6 pt - 10 pb - 16 md:pt - 16 md:pb - 24'>;
          <div className='text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 10 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className='mx - auto inline - flex items - center gap - 2 rounded - full border border - white / 15 bg - white / 5 px - 3 py - 1 text - xs text - white / 70 backdrop - blur - md';
            >;
              <span className='h - 2 w - 2 animate - pulse rounded - full bg - emerald - 400 shadow-[0_0_12px_rgba (52, 211, 153, 0.9)]' />              Autonomous agents running continuous improvements;
            </motion.div>;
            <motion.h1;
              initial={{ opacity: 0, coordinate_y: 8 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className='mt - 6 text - 5xl font - extrabold leading-[1.05] tracking - tight md:text - 6xl';
            >;
              <span className='gradient - text'>;
                Autonomous Cloud Automations;
              </span>            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, coordinate_y: 8 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='mx - auto mt - 5 max - w-3xl text - lg text - white / 80';
            >;
              Self - improving, cloud - native agents that invent, generate, and run;
              new automation factories—fixing, optimizing, and syncing changes;
              to the repository continuously.            </motion.p>;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='mt - 8 flex flex - wrap justify - center gap - 3';
            >;
              <Link href='/automation'>;
                <a className='rounded - xl bg - gradient - to - r from - fuchsia - 500 to - cyan - 500 px - 6 py - 3 font - semibold shadow-[0_0_30px_rgba (34, 211, 238, 0.35)] hover:shadow-[0_0_40px_rgba (34, 211, 238, 0.6)] transition - shadow'>;
                  Explore Automations;
                </a>;
              </Link>;
              <a;
                href='https://github.com / Zion - Holdings / zion.app / actions / workflows / autonomous - meta.yml';
                target='_blank';
                rel='noopener';
                className='rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10';
              >;
                Live Meta Factory;
              </a>;
            </motion.div>;
            {/* Quick stats */}
            <div className='mt - 8 grid grid - cols - 2 gap - 3 sm:grid - cols - 4'>;
              {[;
                ['24 / 7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails'],
              ].map (([k, v]) => (                <motion.div;
<<<<<<< HEAD

              className='mx-auto mt-5 max-w-3xl text-lg text-white/80'
            >
              Self-improving, cloud-native agents that invent, generate, and run
              new automation factories—fixing, optimizing, and syncing changes
              to the repository continuously.            </motion.p>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="text-center">
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 10 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Autonomous agents running continuous improvements
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
            {/* Quick stats */}
            <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {[
                ['24/7', 'Autonomous']
                ['Main', 'Direct Sync']
                ['0 Ops', 'Cloud‑Native']
                ['Safety', 'Guardrails']
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails'],
<<<<<<< HEAD
<<<<<<< HEAD
              ].map(([k, v]) => (                <motion.div
=======

              ].map(([k, v]) => (                <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              ].map(([k, v]) => (                <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={k}
                  initial={{ opacity: 0, coordinate_y: 6 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  transition={{ duration: 0.5 }}
=======


              ))}
            </div>

            {/* Futuristic marquee */}
            <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
              <div className="marquee">
                <div className="marquee__track">
                  {[
                    'Autonomous Agents',
                    'Repo Sync to Main',
                    'Zero‑Ops Cloud',
                    'Safety Guardrails',
                    'A11y + Performance',
                    'Observability',
                    'SEO Automation',
                    'Design Evolution',
                  ].flatMap((label) => [label, label]).map((label, idx) => (
                    <span key={`${label}-${idx}`} className="mx-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

              {

        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' };
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' };
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' }].map((f) => (
              <motion.article

                key={f.title}
            </div>;
          </div>;
        </section>;

        {/* Features */}
        <section className='mx-auto max-w-7xl px-6 pb-14'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Features;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>;
            {[;
              {;
                title: 'Self‑Improving',;
                desc: 'Agents continuously analyze, invent, and evolve automations.',;
              },;
              {;
                title: 'Repo Sync',;
                desc: 'Changes are committed and pushed automatically to main.',;
              },;
              {;
                title: 'Zero Ops',;
                desc: 'Runs fully in the cloud—no servers or manual intervention.',;
              },;
              {;
                title: 'Safety‑First',;
                desc: 'Conservative edits with logs, reports, and guardrails.',;
              },;
              {;
                title: 'Scalable',;
                desc: 'Generates domain‑specific factories on demand.',;
              },;
              {;
                title: 'Observability',;
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',;
              },;
            ].map(f => (              <motion&& motion.article
                key={f && f.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                title: 'Observability',
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',
              },
            ].map (function => (              <motion.article;
<<<<<<< HEAD
                  className='glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left'
                >
                  <div className='text-lg font-bold text-white'>{k}</div>
                  <div className='text-xs text-white/70'>{v}</div>                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

<<<<<<< HEAD
                 {/* Showcase */}
         <motion.section
           id="showcase"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className="mx-auto max-w-7xl px-6 pb-14"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase: Features, Capabilities, Benefits</h2>
           <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

=======
        {/* AUTO-GENERATED: FRONT_AD_START */

<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Features, Capabilities & Benefits</h2>
  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">Automation Hub</h3><p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows.</p></a></Link>
            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">SEO Audit</h3><p className="mt-1 text-sm text-white/75">Continuous on‑site improvements and artifacts.</p></a></Link>
            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">AI Trends</h3><p className="mt-1 text-sm text-white/75">Signals that inspire new factories.</p></a></Link>
            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">Site Health</h3><p className="mt-1 text-sm text-white/75">A11y, performance, and link integrity.</p></a></Link>
            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">Newsroom</h3><p className="mt-1 text-sm text-white/75">Autonomous updates and product evolution.</p></a></Link>
            <Link href="/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"><div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" /><h3 className="text-lg font-semibold">Front</h3><p className="mt-1 text-sm text-white/75">Explore more</p></a></Link>

  </div>
</section>
/* AUTO-GENERATED: FRONT_AD_END */}

        {/* Showcase */}
        <motion.section
          id="showcase"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Showcase: Features, Capabilities, Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Jump into highlighted areas of the platform. Every card links to a deep section or dedicated page.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> origin/chore/front-automation
            <Link href="#features">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Explore Features</h3></div>
                <p className="mt-1 text-sm text-white/75">Self‑improving systems, composable factories, observability and more.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#capabilities">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Cpu className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Browse Capabilities</h3></div>
                <p className="mt-1 text-sm text-white/75">Design evolution, SEO, a11y, performance, refactors, and policy.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#benefits">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">See Benefits</h3></div>
                <p className="mt-1 text-sm text-white/75">Momentum, quality, safety, and measurable outcomes.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#feature-map">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Feature Map</h3></div>
                <p className="mt-1 text-sm text-white/75">A quick overview of what you can explore right now.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="#guardrails">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Guardrails</h3></div>
                <p className="mt-1 text-sm text-white/75">Defense‑in‑depth checks and safety before shipping.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><h3 className="text-lg font-semibold">Automation Hub</h3></div>
                <p className="mt-1 text-sm text-white/75">Factories, agents, and live workflows in one place.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>
          </div>
        </motion.section>

<<<<<<< HEAD

=======
>>>>>>> origin/chore/futuristic-automations

        {/* Floating Quick-Nav Dock */}
        <aside className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
          <nav aria-label="Quick section navigation" className="space-y-2">
            {[
              ['#command-center', 'Command'],
              ['#feature-map', 'Map'],
              ['#engines', 'Engines'],
              ['#suites', 'Suites'],
              ['#capabilities', 'Capabilities'],
              ['#use-cases', 'Use Cases'],
              ['#pillars', 'Pillars'],
              ['#benefits', 'Benefits'],
              ['#templates', 'Templates'],
              ['#demos', 'Demos'],
              ['#highlights', 'Highlights'],
              ['#cases', 'Cases'],
              ['#reports', 'Reports'],
              ['#guardrails', 'Guardrails'],
              ['#roadmap', 'Docs'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md hover:border-cyan-400/40 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Engines: Alternative Automation Runtimes */}
        <motion.section
          id="engines"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Engines (Beyond GitHub Actions)</h2>

          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">We run outside GitHub Actions using scheduled cloud functions and orchestrators. Explore the engines below.</p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/.netlify/functions/front-enhancer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Netlify Scheduled Functions</div>
              <p className="mt-1 text-sm text-white/75">Cron-like cloud jobs that run every 20 minutes to enhance the front experience.</p>
              <div className="mt-3 text-xs text-cyan-300/90">View logs via Netlify →</div>
            </a>
            <a
              href="https://github.com/Zion-Holdings/zion.app/tree/main/automation"
              target="_blank" rel="noopener"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Local Orchestrators</div>
              <p className="mt-1 text-sm text-white/75">Node-based orchestrators that can run on any scheduler or platform.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Browse orchestration scripts ↗</div>
            </a>
            <a
              href="/automation"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover"
            >
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-lg font-semibold">Autonomous Cloud Orchestrator</div>
              <p className="mt-1 text-sm text-white/75">End-to-end agents launching factories and syncing safe diffs to main.</p>
              <div className="mt-3 text-xs text-cyan-300/90">Open Automation Hub →</div>
            </a>
          </div>
        </motion.section>

        {/* Command Center */}
        <section id="command-center" className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Command Center</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Automation Hub', desc: 'Runbooks, factories, and live autonomous agents.', href: '/automation' },
              { title: 'Site Health', desc: 'A11y, performance, and link‑health dashboards.', href: '/site-health' },
              { title: 'SEO Audit', desc: 'Continuous on‑site SEO scans with proposed diffs.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Intelligence signals from the AI/cloud ecosystem.', href: '/reports/ai-trends' },
              { title: 'Newsroom', desc: 'Curated updates and product evolution highlights.', href: '/newsroom' },
              { title: 'Cloud Automations', desc: 'Netlify scheduled functions powering jobs 24/7.', href: '/automation' },
              { title: 'Docs', desc: 'Technical notes and guides for the platform.', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
              { title: 'AI Changelog', desc: 'Summarized autonomous changes and highlights.', href: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md', external: true }
            ].map((card) => (
              <article key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 holo tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                {card.external ? (
                  <a href={card.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                ) : (
                  <Link href={card.href as string}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Netlify Automations */}
        <motion.section
          id="netlify-automations"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Netlify Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Zero‑ops scheduled functions power background tasks that improve the site and ship small, safe diffs to main.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              { label: 'Homepage Advertiser', desc: 'Curates and updates the home explore section.', href: '/.netlify/functions/homepage_advertiser' },
              { label: 'Cloud Orchestrator', desc: 'Runs fast improvement cycle and git sync.', href: '/.netlify/functions/cloud_orchestrator' },
              { label: 'Sitemap Runner', desc: 'Keeps sitemap fresh for SEO visibility.', href: '/.netlify/functions/sitemap_runner' },
            ].map((f) => (
              <a key={f.label} href={f.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{f.label}</div>
                <div className="mt-1 text-sm text-white/75">{f.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Trigger <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Feature Spotlight */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Spotlight</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">A quick tour of the most impactful capabilities — each card links to a deep dive.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Automation Hub', desc: 'Factories, agents, and live workflows', href: '/automation' },
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuous on‑site SEO improvements', href: '/reports/seo' },
              { Icon: Gauge, title: 'Site Health', desc: 'A11y, performance, and link integrity', href: '/site-health' },
              { Icon: Globe, title: 'AI Trends Radar', desc: 'Signals that inspire new automations', href: '/reports/ai-trends' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Safe, incremental diffs shipped continuously', href: '/automation' },
              { Icon: ShieldCheck, title: 'Guardrails', desc: 'Defense‑in‑depth quality gates', href: '/site-health' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Outcome Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcome‑Focused Benefits</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Choose an outcome and jump to the relevant systems that make it happen.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Grow organic traffic', desc: 'On‑site SEO improvements, better metadata, richer links', href: '/reports/seo' },
              { label: 'Improve UX quality', desc: 'A11y fixes, performance gains, resilient links', href: '/site-health' },
              { label: 'Reduce engineering toil', desc: 'Automated upgrades, refactors, and maintenance', href: '/automation' },
              { label: 'Ship faster with confidence', desc: 'Small safe diffs synced to main', href: '/automation' },
              { label: 'Stay compliant & accessible', desc: 'Policy guardrails and WCAG checks', href: '/site-health' },
              { label: 'Learn from market signals', desc: 'AI + cloud trends to guide strategy', href: '/reports/ai-trends' },
            ].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-fuchsia-400/30">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="text-sm text-white/80"><span className="font-semibold text-white">{b.label}</span> — {b.desc} <span className="ml-1 text-cyan-300/90">→</span></span>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Suites */}
        <motion.section
          id="suites"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Suites</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Quick Fixes', desc: 'Build rescue, sitemap/robots, security remediation', href: '/automation' },
              { title: 'Deep Maintenance', desc: 'Orchestrated smoke tests and link checks', href: '/automation' },
              { title: 'Marketing & SEO', desc: 'Content factories and on‑site optimizations', href: '/automation' },
              { title: 'Content Curation', desc: 'Homepage promos generated continuously', href: '/automation' },
              { title: 'Dependency Upgrades', desc: 'Minor/patch bumps with safe auto‑merge', href: '/automation' },
              { title: 'Live Workflows', desc: 'Observe pipelines running 24/7', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { title: 'Site Health', desc: 'A11y, performance, link checks dashboards', href: '/site-health' },
              { title: 'AI SEO Auditor', desc: 'Continuous on‑site audits with safe proposed diffs', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signal scanning to inspire new factories', href: '/reports/ai-trends' },
            ].map((suite) => (
              <article key={suite.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{suite.title}</h3>
                <p className="mt-1 text-sm text-white/75">{suite.desc}</p>
                {suite.href && (
                  suite.external ? (
                    <a href={suite.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a>
                  ) : (
                    <Link href={suite.href}><a className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 underline">Open</a></Link>
                  )
                )}
              </article>
            ))}
          </div>
        </motion.section>

        {/* Superpowers */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Superpowers</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { Icon: Rocket, title: 'Generative Factories', desc: 'Spins up domain‑specific automation factories that build for you.' },
              { Icon: ShieldCheck, title: 'Safety by Design', desc: 'Layered validations — type checks, builds, a11y, links, and more.' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Small, reviewable edits committed and pushed continuously.' },
            ].map(({ Icon, title, desc }) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/75">{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Get Started */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Get Started in Minutes</h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4">
            <Link href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">1. Explore Automations</span></div>
                <p className="mt-1 text-xs text-white/75">See live autonomous suites and workflows.</p>
              </a>
            </Link>
            <Link href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Search className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">2. Run SEO Audit</span></div>
                <p className="mt-1 text-xs text-white/75">Get prioritized improvements and artifacts.</p>
              </a>
            </Link>
            <Link href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Gauge className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">3. Check Site Health</span></div>
                <p className="mt-1 text-xs text-white/75">A11y, performance, and link health dashboards.</p>
              </a>
            </Link>
            <Link href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300" /><span className="text-sm font-semibold">4. Track AI Trends</span></div>
                <p className="mt-1 text-xs text-white/75">Stay ahead with intelligence signals.</p>
              </a>
            </Link>
          </div>
        </motion.section>
=======


              ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  className='glow - card rounded - xl border border - white / 10 bg - white / 5 px - 4 py - 3 text - left';
                >;
                  <div className='text - lg font - bold text - white'>{k}</div>;
                  <div className='text - xs text - white / 70'>{v}</div>                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Features */}
<<<<<<< HEAD
        <section className='mx-auto max-w-7xl px-6 pb-14'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Features
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'Self‑Improving'
                desc: 'Agents continuously analyze, invent, and evolve automations.'
              }
              {
                title: 'Repo Sync'
                desc: 'Changes are committed and pushed automatically to main.'
              }
              {
                title: 'Zero Ops'
                desc: 'Runs fully in the cloud—no servers or manual intervention.'
              }
              {
                title: 'Safety‑First'
                desc: 'Conservative edits with logs, reports, and guardrails.'
              }
              {
                title: 'Scalable'
                desc: 'Generates domain‑specific factories on demand.'
              }
              {
                title: 'Observability'
                desc: 'Dashboards, reports, and GitHub Actions artifacts.'
              }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                title: 'Self‑Improving',
                desc: 'Agents continuously analyze, invent, and evolve automations.',
              },
              {
                title: 'Repo Sync',
                desc: 'Changes are committed and pushed automatically to main.',
              },
              {
                title: 'Zero Ops',
                desc: 'Runs fully in the cloud—no servers or manual intervention.',
              },
              {
                title: 'Safety‑First',
                desc: 'Conservative edits with logs, reports, and guardrails.',
              },
              {
                title: 'Scalable',
                desc: 'Generates domain‑specific factories on demand.',
              },
              {
                title: 'Observability',
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',
              },
<<<<<<< HEAD
            ].map(f => (              <motion.article
=======

            ].map(f => (              <motion.article
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={f.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ duration: 0.6 }}

            ))}

                className='group glow - card relative overflow - hidden rounded - 2xl border border - white / 10 bg - white / 5 p - 5 backdrop - blur - md hover:border - cyan - 400 / 30';
              >;
                <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - fuchsia - 500 / 0 via - cyan - 400 / 10 to - fuchsia - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100' />;
                <h3 className='text - lg font - semibold'>{f.title}</h3>;
                <p className='mt - 1 text - sm text - white / 75'>{f.desc}</p>              </motion.article>))}
          </div>;
        </section>;
        {/* Capabilities */}
        <section className='mx - auto max - w-7xl px - 6 pb - 14'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Capabilities;
          </h2>;
          <div className='mt - 6 grid grid - cols - 1 gap - 5 md:grid - cols - 3'>;
=======
        <section className='mx - auto max - w-7xl px - 6 pb - 14'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Features;
          </h2>;
          <div className='mt - 6 grid grid - cols - 1 gap - 5 md:grid - cols - 2 lg:grid - cols - 3'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {[;

              {

<<<<<<< HEAD

                title: 'Code Quality & Refactors',
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',
              },
              {
                title: 'Performance & A11y',
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',
              },
              {
                title: 'Content & SEO',
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',
              },
            ].map(c => (              <motion.article

                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl'
              >
                <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl' />
                <h3 className='text-lg font-semibold'>{c.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{c.desc}</p>              </motion.article>
            ))}
          </div>
        </section>
        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Benefits
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>
            {[

              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',

            ].map(b => (              <motion.div
                key={b}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className='text-sm text-white/80'>{b}</span>              </motion.div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'

            <motion.h1
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
            >
              <span className="gradient-text">Autonomous Cloud Automations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80"
            >
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>
            </motion.div>
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7Autonomous'],
                ['MainDirect Sync'],
                ['0 OpsCloud‑Native'],
                ['SafetyGuardrails']].map(([k, v]) => (
                <motion.div;
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function FrontLanding(req, res) {
  try {
  return (;
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">;
      <Head>;
        <title>Zion — Autonomous Cloud Automations</title>;
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />;
      </Head>;
      {/* Animated background layers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">;
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />;
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />;
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />;
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />;
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">;
          <div className="twinkle-field absolute inset-0" />;
        </div>;
      </div>;
      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <header className="relative z-10">;
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">;
          <div className="text-2xl font-bold tracking-wide">;
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</a></Link>;
          </div>;
          <div className="hidden gap-6 md:flex">;
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>;
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>;
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</a></Link>;
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</a></Link>;
          </div>;
        </nav>;
      </header>;
      {/* Hero */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <main className="relative z-10">;
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">;
          <div className="text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 10 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md";
            >;
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;
              Autonomous agents running continuous improvements;
            </motion.div>;
            <motion.h1;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl";
            >;
              <span className="gradient-text">Autonomous Cloud Automations</span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80";
            >;
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3";
            >;
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>;
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>;
            </motion.div>;
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">;
              {[;
                ['24/7Autonomous'],;
                ['MainDirect Sync'],;
                ['0 OpsCloud‑Native'],;
                ['SafetyGuardrails']].map(([k, v]) => (;
                <motion.div;
                  key={k  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left"
                >
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' };
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' };
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' }].map((f) => (
              <motion.article

                key={f.title}
=======
            </div>;
          </div>;
        </section>;

        {/* Features */}
        <section className='mx-auto max-w-7xl px-6 pb-14'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Features;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>;
            {[;
              {;
                title: 'Self‑Improving',;
                desc: 'Agents continuously analyze, invent, and evolve automations.',;
              },;
              {;
                title: 'Repo Sync',;
                desc: 'Changes are committed and pushed automatically to main.',;
              },;
              {;
                title: 'Zero Ops',;
                desc: 'Runs fully in the cloud—no servers or manual intervention.',;
              },;
              {;
                title: 'Safety‑First',;
                desc: 'Conservative edits with logs, reports, and guardrails.',;
              },;
              {;
                title: 'Scalable',;
                desc: 'Generates domain‑specific factories on demand.',;
              },;
              {;
                title: 'Observability',;
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',;
              },;
            ].map(f => (              <motion&& motion.article
                key={f && f.title}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
=======
                title: 'Observability',
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',
              },
            ].map (function => (              <motion.article;
=======

                title: 'Self‑Improving',
                desc: 'Agents continuously analyze, invent, and evolve automations.',
              },
              {
                title: 'Repo Sync',
                desc: 'Changes are committed and pushed automatically to main.',
              },
              {
                title: 'Zero Ops',
                desc: 'Runs fully in the cloud—no servers or manual intervention.',
              },
              {
                title: 'Safety‑First',
                desc: 'Conservative edits with logs, reports, and guardrails.',
              },
              {
                title: 'Scalable',
                desc: 'Generates domain‑specific factories on demand.',
              },
              {
                title: 'Observability',
                desc: 'Dashboards, reports, and GitHub Actions artifacts.',
              },

            ].map(f => (              <motion.article
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                key={f.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30'
              >
                <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
                <h3 className='text-lg font-semibold'>{f.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{f.desc}</p>              </motion.article>
            ))}
          </div>
<<<<<<< HEAD
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Outcomes</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            Tangible, measurable wins delivered by autonomous cloud agents.
          </p>
          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" />
            <div className="marquee">
              <div className="marquee__track">
                {[
                  { label: 'Accessibility fixes', href: '/site-health' },
                  { label: 'Performance boosts', href: '/site-health' },
                  { label: 'SEO improvements', href: '/reports/seo' },
                  { label: 'Safer main merges', href: '/automation' },
                  { label: 'Cleaner codebase', href: '/automation' },
                  { label: 'Better content curation', href: '/newsroom' },
                  { label: 'Operational visibility', href: '/site-health' },
                  { label: 'Experiment velocity', href: '/automation' },
                ]
                  .flatMap((item) => [item, item])
                  .map((item, idx) => (
                    <Link key={`${item.label}-${idx}`} href={item.href}>
                      <a className="mx-3 my-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {item.label}
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Map */}
        <motion.section
          id="feature-map"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Map</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">
            A fast overview of what you can explore right now across the platform.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Code Quality & Refactors'
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.'
              }
              {
                title: 'Performance & A11y'
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.'
              }
              {
                title: 'Content & SEO'
                desc: 'Curates content, updates promotions, and tunes metadata for reach.'
              }
            ].map(c => (              <motion.article

                title: 'Code Quality & Refactors',
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',
              },
              {
                title: 'Performance & A11y',
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',
              },
              {
                title: 'Content & SEO',
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',
              },
            ].map(c => (              <motion.article
=======
        <section className='mx-auto max-w-7xl px-6 pb-14'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Capabilities;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>;
            {[;
              {;
                title: 'Code Quality & Refactors',;
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',;
              },;
              {;
                title: 'Performance & A11y',;
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',;
              },;
              {;
                title: 'Content & SEO',;
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',;
              },;
            ].map(c => (              <motion&& motion.article
                key={c && c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                title: 'Content & SEO',
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',
              },
            ].map (c => (              <motion.article;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={c.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ duration: 0.6 }}

            ))}

          </div>;
        </section>;

        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Benefits;
          </h2>;
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>;
            {[;
              '24/7 progress without human intervention',;
              'Rapid feedback loop with safe, incremental edits',;
              'Continuous delivery directly to main branch',;
              'Fewer regressions via layered checks and reports',;
            ].map(b => (              <motion&& motion.div

<<<<<<< HEAD
                transition={{ duration: 0.6 }}
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl'
              >
                <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl' />
                <h3 className='text-lg font-semibold'>{c.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{c.desc}</p>              </motion.article>
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
        {/* AUTO: catalog injection for automated advertising */}
        {/* AUTO:FRONT_INDEX_DIRECTORY_START */

<section id="auto-catalog" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Catalog</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Auto‑discovered features, capabilities, and resources. Kept fresh by in‑repo Node tools.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Hub</div><div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/automation#features"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Automation Features</div><div className="mt-1 text-sm text-white/75">Deep dive into what agents can do</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/automation#capabilities"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Capabilities</div><div className="mt-1 text-sm text-white/75">What the platform can automate</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/automation#benefits"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Benefits</div><div className="mt-1 text-sm text-white/75">Outcomes and ROI from autonomous agents</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/automation#feature-factories"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Feature Factories</div><div className="mt-1 text-sm text-white/75">Generators for product features</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Site Health</div><div className="mt-1 text-sm text-white/75">A11y, performance, and link dashboards</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI SEO Auditor</div><div className="mt-1 text-sm text-white/75">Continuous on‑site SEO improvements</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Trends Radar</div><div className="mt-1 text-sm text-white/75">Signals that inspire new automations</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Newsroom</div><div className="mt-1 text-sm text-white/75">Curated updates and product evolution highlights</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Front Systems Hub</div><div className="mt-1 text-sm text-white/75">Curated, futuristic front experience</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div></a></Link>
          <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Docs & Guides</div><div className="mt-1 text-sm text-white/75">Technical notes and architecture</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">AI Changelog</div><div className="mt-1 text-sm text-white/75">Summarized autonomous changes</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Live Pipelines</div><div className="mt-1 text-sm text-white/75">CI logs & artifacts 24/7</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>
          <a href="https://ziontechgroup.com" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover neon-ring"><div className="text-base font-semibold">Zion Cloud</div><div className="mt-1 text-sm text-white/75">Deployments and cloud platform</div><div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div></a>

  </div>
</section>
/* AUTO:FRONT_INDEX_DIRECTORY_END */}
=======
        /* AUTO-GENERATED: FRONT_UPDATER_START */

<section id="auto-highlights" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto Highlights</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">Automation Hub</div>
                  <div className="mt-1 text-sm text-white/75">Factories & live workflows</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>

            <Link href="/site-health"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">Site Health</div>
                  <div className="mt-1 text-sm text-white/75">A11y, performance, link checks</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>

            <Link href="/reports/seo"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">SEO Audit</div>
                  <div className="mt-1 text-sm text-white/75">On-site improvements & artifacts</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>

            <Link href="/reports/ai-trends"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">AI Trends</div>
                  <div className="mt-1 text-sm text-white/75">Signals that inspire new factories</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>

            <Link href="/newsroom"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">Newsroom</div>
                  <div className="mt-1 text-sm text-white/75">Autonomous updates & evolution</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>

            <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">Live Pipelines</div>
                  <div className="mt-1 text-sm text-white/75">CI logs & artifacts</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">Documentation</div>
                  <div className="mt-1 text-sm text-white/75">Technical notes & guides</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="text-base font-semibold">AI Changelog</div>
                  <div className="mt-1 text-sm text-white/75">Summarized autonomous changes</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

  </div>
</section>
/* AUTO-GENERATED: FRONT_UPDATER_END */
>>>>>>> origin/chore/futuristic-front-automation

        {/* Platform Modules */}
        <motion.section
           id="modules"
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className="mx-auto max-w-7xl px-6 pb-16"
         >
           <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Platform Modules</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              '24/7 progress without human intervention'
              'Rapid feedback loop with safe, incremental edits'
              'Continuous delivery directly to main branch'
              'Fewer regressions via layered checks and reports'
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
            ].map(b => (              <motion.div
=======
=======
                className='relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl';
              >;
                <div className='absolute right - 0 top - 0 h - 24 w - 24 rounded - bl-[4rem] bg - cyan - 400 / 10 blur - 2xl' />;
                <h3 className='text - lg font - semibold'>{c.title}</h3>;
                <p className='mt - 1 text - sm text - white / 75'>{c.desc}</p>              </motion.article>))}
          </div>;
        </section>;
        {/* Benefits */}
        <section className='mx - auto max - w-7xl px - 6 pb - 20'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Benefits;
          </h2>;
          <div className='mx - auto mt - 6 max - w-4xl grid grid - cols - 1 gap - 3 md:grid - cols - 2'>;
            {[;
              '24 / 7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
            ].map (boolean => (              <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={b}
                initial={{ opacity: 0, coordinate_y: 6 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                transition={{ duration: 0.5 }}
=======


            ))}

          </div>;
        </section>;


        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion&& motion.div
            initial={{ opacity: 0, scale: 0 && 0.98 }}
=======
                className='flex items - start gap - 3 rounded - xl border border - white / 10 bg - white / 5 p - 4 backdrop - blur - md';
              >;
                <span className='mt - 1 inline - block h - 2.5 w - 2.5 rounded - full bg - emerald - 400 shadow-[0_0_12px_rgba (52, 211, 153, 0.9)]' />;
                <span className='text - sm text - white / 80'>{b}</span>              </motion.div>))}
          </div>;
        </section>;
        {/* CTA */}
        <section className='mx - auto max - w-7xl px - 6 pb - 24'>          <motion.div;
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <motion.div
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className='text-sm text-white/80'>{b}</span>              </motion.div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'
            <motion.h1
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
            >
              <span className="gradient-text">Autonomous Cloud Automations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80"
            >
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>
            </motion.div>
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7Autonomous'],
                ['MainDirect Sync'],
                ['0 OpsCloud‑Native'],
                ['SafetyGuardrails']].map(([k, v]) => (
                <motion.div;
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function FrontLanding(req, res) {
  try {
  return (;
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">;
      <Head>;
        <title>Zion — Autonomous Cloud Automations</title>;
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />;
      </Head>;
      {/* Animated background layers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">;
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />;
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />;
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />;
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />;
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">;
          <div className="twinkle-field absolute inset-0" />;
        </div>;
      </div>;
      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <header className="relative z-10">;
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">;
          <div className="text-2xl font-bold tracking-wide">;
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</a></Link>;
          </div>;
          <div className="hidden gap-6 md:flex">;
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>;
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>;
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</a></Link>;
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</a></Link>;
          </div>;
        </nav>;
      </header>;
      {/* Hero */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <main className="relative z-10">;
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">;
          <div className="text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 10 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md";
            >;
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;
              Autonomous agents running continuous improvements;
            </motion.div>;
            <motion.h1;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl";
            >;
              <span className="gradient-text">Autonomous Cloud Automations</span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80";
            >;
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3";
            >;
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>;
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>;
            </motion.div>;
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">;
              {[;
                ['24/7Autonomous'],;
                ['MainDirect Sync'],;
                ['0 OpsCloud‑Native'],;
                ['SafetyGuardrails']].map(([k, v]) => (;
                <motion.div;
                  key={k  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left"
                >
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI SEO Auditor', desc: 'Continuously scans pages and proposes SEO improvements with safe diffs.' },
              { title: 'Design Beautifier', desc: 'Upgrades UI components with modern, cohesive visual language.' },
              { title: 'Content Curator', desc: 'Surfaces and promotes high‑value content with links and metadata.' },
              { title: 'Performance Tuner', desc: 'Optimizes bundles, images, and scripts for faster loads.' },
              { title: 'A11y Guardian', desc: 'Catches and fixes accessibility issues before they ship.' },
              { title: 'Growth Experiments', desc: 'Spins up micro‑experiments and measures impact automatically.' },
            ].map((u) => (
              <article key={u.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-fuchsia-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-violet-400/10 to-cyan-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-1 text-sm text-white/75">{u.desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <div className="neon-divider mx-auto mb-8 h-px w-full max-w-5xl" />
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live Impact</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: 'Workflows', value: '1,200+', href: 'https://github.com/Zion-Holdings/zion.app/actions', external: true },
              { label: 'Commits Synced', value: '800+', href: '/automation' },
              { label: 'Automated Edits', value: '3,500+', href: '/automation' },
              { label: 'Uptime', value: '99.95%', href: '/site-health' },
              { label: 'A11y Checks', value: '20k+', href: '/site-health' },
              { label: 'SEO Fixes', value: '4.2k+', href: '/reports/seo' },
            ].map((item) => (
              item.external ? (
                <a key={item.label} href={item.href as string} target="_blank" rel="noopener" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                  <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                  <div className="mt-1 text-xs text-white/70">{item.label}</div>
                </a>
              ) : (
                <Link key={item.label} href={item.href as string}>
                  <a className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur hover:border-cyan-400/30">
                    <div className="text-2xl font-extrabold tracking-tight">{item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

=======
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Capabilities */}
        <section className='mx-auto max-w-7xl px-6 pb-14'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Capabilities
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {[
              {

=======

                title: 'Code Quality & Refactors',
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',
              },
              {
                title: 'Performance & A11y',
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',
              },
              {
                title: 'Content & SEO',
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',
              },
            ].map(c => (              <motion.article

                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl'
              >
                <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl' />
                <h3 className='text-lg font-semibold'>{c.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{c.desc}</p>              </motion.article>
            ))}
          </div>
        </section>
        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Benefits
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>
            {[

              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
<<<<<<< HEAD
              'Higher velocity with automated maintenance',
              'Reduced costs via zero‑ops and automated QA',
              'Consistent design language and UX quality',
              'Transparent artifacts and live workflow logs',
              'Faster experiment velocity with measurable impact',
              'Improved search visibility via continuous SEO',
              'Happier users thanks to performance & a11y wins',
              'Lower operational risk through guardrails',
              'Improved discoverability via deep indexing and SEO',
              'Happier engineers with less toil and more creation',
              'Confident shipping through automated guardrails',
              'Predictable quality gates and SLOs upheld automatically',
              'Auditability for compliance with full traceability',
              'Happier teams: less toil, more product value',
              'Automated dependency upgrades and security scans',
              'Clear analytics and downloadable artifacts for every run',
              'Composable factories accelerate new initiatives',
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm text-white/80">{b}</span>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            ].map(b => (              <motion.div
                key={b}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className='text-sm text-white/80'>{b}</span>              </motion.div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'
            <motion.h1
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
            >
              <span className="gradient-text">Autonomous Cloud Automations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80"
            >
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>
            </motion.div>
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7Autonomous'],
                ['MainDirect Sync'],
                ['0 OpsCloud‑Native'],
                ['SafetyGuardrails']].map(([k, v]) => (
                <motion.div;
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function FrontLanding(req, res) {
  try {
  return (;
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">;
      <Head>;
        <title>Zion — Autonomous Cloud Automations</title>;
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />;
      </Head>;
      {/* Animated background layers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">;
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />;
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />;
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />;
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />;
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">;
          <div className="twinkle-field absolute inset-0" />;
        </div>;
      </div>;
      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <header className="relative z-10">;
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">;
          <div className="text-2xl font-bold tracking-wide">;
            <Link href="/"><a className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</a></Link>;
          </div>;
          <div className="hidden gap-6 md:flex">;
            <Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link>;
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>;
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Newsroom</a></Link>;
            <Link href="/contact"><a className="text-white/80 hover:text-white">Contact</a></Link>;
          </div>;
        </nav>;
      </header>;
      {/* Hero */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <main className="relative z-10">;
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">;
          <div className="text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 10 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md";
            >;
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />;
              Autonomous agents running continuous improvements;
            </motion.div>;
            <motion.h1;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl";
            >;
              <span className="gradient-text">Autonomous Cloud Automations</span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.7, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto mt-5 max-w-3xl text-lg text-white/80";
            >;
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ delay: 0.2, duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mt-8 flex flex-wrap justify-center gap-3";
            >;
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>;
              <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a>;
            </motion.div>;
            {/* Quick stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">;
              {[;
                ['24/7Autonomous'],;
                ['MainDirect Sync'],;
                ['0 OpsCloud‑Native'],;
                ['SafetyGuardrails']].map(([k, v]) => (;
                <motion.div;
                  key={k  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left"
                >
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' }].map((f) => (
              <motion.article
                key={f.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </motion.article>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Capabilities */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' };
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' };
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' }].map((c) => (
              <motion.article
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                key={c.title}
=======
          </div>;
        </section>;

        {/* Capabilities */}
        <section className='mx-auto max-w-7xl px-6 pb-14'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Capabilities;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-3'>;
            {[;
              {;
                title: 'Code Quality & Refactors',;
                desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.',;
              },;
              {;
                title: 'Performance & A11y',;
                desc: 'Optimizes bundles, assets, and accessibility with continuous checks.',;
              },;
              {;
                title: 'Content & SEO',;
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',;
              },;
            ].map(c => (              <motion&& motion.article
                key={c && c.title}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
=======
                title: 'Content & SEO',
                desc: 'Curates content, updates promotions, and tunes metadata for reach.',
              },
            ].map (c => (              <motion.article;
                key={c.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                viewport={{ once: true }}

=======
                transition={{ duration: 0.6 }}

            ))}

          </div>;
        </section>;

        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Benefits;
          </h2>;
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>;
            {[;
              '24/7 progress without human intervention',;
              'Rapid feedback loop with safe, incremental edits',;
              'Continuous delivery directly to main branch',;
              'Fewer regressions via layered checks and reports',;
            ].map(b => (              <motion&& motion.div

=======
                className='relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 10 to - white / 5 p - 6 backdrop - blur - xl';
              >;
                <div className='absolute right - 0 top - 0 h - 24 w - 24 rounded - bl-[4rem] bg - cyan - 400 / 10 blur - 2xl' />;
                <h3 className='text - lg font - semibold'>{c.title}</h3>;
                <p className='mt - 1 text - sm text - white / 75'>{c.desc}</p>              </motion.article>))}
          </div>;
        </section>;
        {/* Benefits */}
        <section className='mx - auto max - w-7xl px - 6 pb - 20'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Benefits;
          </h2>;
          <div className='mx - auto mt - 6 max - w-4xl grid grid - cols - 1 gap - 3 md:grid - cols - 2'>;
            {[;
              '24 / 7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
            ].map (boolean => (              <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                key={b}
                initial={{ opacity: 0, coordinate_y: 6 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}


            ))}

          </div>;
        </section>;


        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion&& motion.div
            initial={{ opacity: 0, scale: 0 && 0.98 }}
=======
                className='flex items - start gap - 3 rounded - xl border border - white / 10 bg - white / 5 p - 4 backdrop - blur - md';
              >;
                <span className='mt - 1 inline - block h - 2.5 w - 2.5 rounded - full bg - emerald - 400 shadow-[0_0_12px_rgba (52, 211, 153, 0.9)]' />;
                <span className='text - sm text - white / 80'>{b}</span>              </motion.div>))}
          </div>;
        </section>;
        {/* CTA */}
        <section className='mx - auto max - w-7xl px - 6 pb - 24'>          <motion.div;
            initial={{ opacity: 0, scale: 0.98 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}


        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href="/services"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          </motion.div>
<<<<<<< HEAD
        </section>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* AUTO-GENERATED: FRONT_FUTURIZER_START */}

        {/* Explore more */}
        <section className='mx-auto max-w-7xl px-6 pb-16'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Explore more;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>;
            <Link href='/services/ai-seo-auditor'>;
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>;
                <span className='text-white/90'>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='animated - border relative overflow - hidden rounded - 3xl border border - white / 10 bg - gradient - to - r from - fuchsia - 600 / 20 via - violet - 600 / 20 to - cyan - 600 / 20 p - 8 text - center backdrop - blur - xl';
          >;
            <h3 className='text - 2xl font - bold'>;
              Ready to build with autonomous cloud agents?;
            </h3>;
            <p className='mx - auto mt - 2 max - w-2xl text - white / 80'>;
              Scale development with a tireless fleet of self‑improving;
              automations.;
            </p>;
            <div className='mt - 6 flex flex - wrap justify - center gap - 3'>;
              <Link href='/services'>;
                <a className='rounded - xl bg - white / 90 px - 6 py - 3 font - semibold text - slate - 900 hover:bg - white'>;
                  Get Started;
                </a>;
              </Link>;
              <Link href='/automation'>;
                <a className='rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10'>;
                  View Automations;
                </a>;
              </Link>            </div>;
          </motion.div>;
        </section>;
        {/* Explore more */}
        <section className='mx - auto max - w-7xl px - 6 pb - 16'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Explore more;
          </h2>;
          <div className='mt - 6 grid grid - cols - 1 gap - 4 sm: grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4'>;
            <Link href='/services / ai - seo - auditor'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Repo sync to main with safe diffs</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Zero‑ops, cloud‑native runtime</span>
            </li>

                  Customer Support Chatbot — reduce response time;
                </span>;
              </a>;
            </Link>;

            <Link href='/services / landing - page - generator'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Landing Page Generator — launch pages instantly;
                </span>;
              </a>;
            </Link>;

            <Link href='/services / price - intelligence - service'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Price Intelligence — market‑aware pricing;
                </span>;
              </a>;
            </Link>;
            <Link href='/automation'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Automation Status — live agents & reports;
                </span>;
              </a>;
            </Link>;
            <Link href='/newsroom'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Newsroom — latest autonomous updates;
                </span>;
              </a>;
            </Link>;

            <Link href='/site - health'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Site Health — audits & insights;
                </span>;
              </a>;
            </Link>;
            <Link href='/contact'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Contact — discuss your use‑case;
                </span>;
              </a>;
            </Link>          </div>;
        </section>;
      </main>;


<<<<<<< HEAD

          </motion.div>
        </section>
        {/* Explore more */}
            transition={{ duration: 0 && 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'>;
            <h3 className='text-2xl font-bold'>;
              Ready to build with autonomous cloud agents?;
            </h3>;
            <p className='mx-auto mt-2 max-w-2xl text-white/80'>;
              Scale development with a tireless fleet of self‑improving;
              automations.;
            </p>;
            <div className='mt-6 flex flex-wrap justify-center gap-3'>;
              <Link href='/services'>;
                <a className='rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white'>;
                  Get Started;
                </a>;
              </Link>;
              <Link href='/automation'>;
                <a className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'>;
                  View Automations;
                </a>;
              </Link>            </div>;
          </motion && motion.div>;
        </section>;
        {/* Explore more */}
        <section className='mx-auto max-w-7xl px-6 pb-16'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Explore more;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>;
            <Link href='/services/ai-seo-auditor'>;
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>;
                <span className='text-white/90'>;
            className='animated - border relative overflow - hidden rounded - 3xl border border - white / 10 bg - gradient - to - r from - fuchsia - 600 / 20 via - violet - 600 / 20 to - cyan - 600 / 20 p - 8 text - center backdrop - blur - xl';
          >;
            <h3 className='text - 2xl font - bold'>;
              Ready to build with autonomous cloud agents?;
            </h3>;
            <p className='mx - auto mt - 2 max - w-2xl text - white / 80'>;
              Scale development with a tireless fleet of self‑improving;
              automations.;
            </p>;
            <div className='mt - 6 flex flex - wrap justify - center gap - 3'>;
              <Link href='/services'>;
                <a className='rounded - xl bg - white / 90 px - 6 py - 3 font - semibold text - slate - 900 hover:bg - white'>;
                  Get Started;
                </a>;
              </Link>;
              <Link href='/automation'>;
                <a className='rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10'>;
                  View Automations;
                </a>;
              </Link>            </div>;
          </motion.div>;
        </section>;
        {/* Explore more */}
        <section className='mx - auto max - w-7xl px - 6 pb - 16'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Explore more;
          </h2>;
          <div className='mt - 6 grid grid - cols - 1 gap - 4 sm: grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4'>;
            <Link href='/services / ai - seo - auditor'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  AI SEO Auditor — automate SEO improvements;
                </span>;
              </a>;
            </Link>;
            <Link href='/services / customer - support - chatbot'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Customer Support Chatbot — reduce response time;
                </span>;
              </a>;
            </Link>;
            <Link href='/services / landing - page - generator'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Landing Page Generator — launch pages instantly;
                </span>;
              </a>;
            </Link>;
            <Link href='/services / price - intelligence - service'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Price Intelligence — market‑aware pricing;
                </span>;
              </a>;
            </Link>;
            <Link href='/automation'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Automation Status — live agents & reports;
                </span>;
              </a>;
            </Link>;
            <Link href='/newsroom'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Newsroom — latest autonomous updates;
                </span>;
              </a>;
            </Link>;
            <Link href='/site - health'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Site Health — audits & insights;
                </span>;
              </a>;
            </Link>;
            <Link href='/contact'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;
                  Contact — discuss your use‑case;
                </span>;
              </a>;
            </Link>          </div>;
        </section>;
      </main>;
              <Link href="/services"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</Link></Link>
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</Link></Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Capabilities</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Code quality and refactors</span>
            </li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );

}
<<<<<<< HEAD
=======

<<<<<<< HEAD
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Observability and analytics</span>
            </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-lg font-semibold">Benefits</div>
              <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">24/7 progress without manual ops</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Faster feedback with small edits</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Higher confidence via layered checks</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-sm text-white/80">Links to hubs, reports, and docs</span>
            </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link key="Automation Hub" href="/automation">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Automation Hub</div>
                <div className="mt-1 text-sm text-white/75">Factories, agents, and live workflows</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Site Health" href="/site-health">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Site Health</div>
                <div className="mt-1 text-sm text-white/75">A11y, performance, and link integrity</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="SEO Audit" href="/reports/seo">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">SEO Audit</div>
                <div className="mt-1 text-sm text-white/75">Continuous on‑site improvements and artifacts</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="AI Trends" href="/reports/ai-trends">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">AI Trends</div>
                <div className="mt-1 text-sm text-white/75">Signals inspiring new factories and experiments</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <Link key="Newsroom" href="/newsroom">
              <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Newsroom</div>
                <div className="mt-1 text-sm text-white/75">Autonomous updates and product evolution</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </Link>

            <a key="Documentation" href="https://github.com/Zion-Holdings/zion.app/tree/main/docs" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Documentation</div>
              <div className="mt-1 text-sm text-white/75">Technical notes and guides</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="AI Changelog" href="https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">AI Changelog</div>
              <div className="mt-1 text-sm text-white/75">Summarized autonomous changes and highlights</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a key="Live Pipelines" href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Live Pipelines</div>
              <div className="mt-1 text-sm text-white/75">Observe CI pipelines, logs, and artifacts</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>
{/* AUTO-GENERATED: FRONT_FUTURIZER_END */}
{/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-bold tracking-wide">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <Link href="/automation"><a>Automations</a></Link>
                <Link href="/newsroom"><a>Newsroom</a></Link>
                <Link href="/site-health"><a>Site Health</a></Link>
                <a href="https://github.com/Zion-Holdings/zion.app" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Agents Gallery */}
        <motion.section
          id="agents"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">AI Agents Gallery</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Meet the autonomous agents powering your outcomes. Each card links to a live system.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Search, title: 'AI SEO Auditor', desc: 'Continuously improves on‑site SEO with safe diffs.', href: '/reports/seo' },
              { Icon: Link2, title: 'Link Healer', desc: 'Finds and fixes broken links with dashboards.', href: '/site-health' },
              { Icon: Palette, title: 'Design Beautifier', desc: 'Evolves UI with cohesive, futuristic patterns.', href: '/newsroom' },
              { Icon: Gauge, title: 'Performance Tuner', desc: 'Optimizes bundles and runtime for speed.', href: '/site-health' },
              { Icon: Layers, title: 'Factory Composer', desc: 'Chains automations into higher‑order workflows.', href: '/automation' },
              { Icon: GitBranch, title: 'Main Sync', desc: 'Ships small, safe diffs to main continuously.', href: '/automation' },
            ].map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Capabilities Matrix */}
        <motion.section
          id="capability-matrix"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities Matrix</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore a broader catalog of Zion capabilities. Each tile links to a live hub, report, or workflow.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: 'Autonomous Agents', desc: 'Self‑improving cloud workers', href: '/automation' },
              { title: 'Repo Sync to Main', desc: 'Safe, continuous delivery', href: '/automation' },
              { title: 'AI SEO Auditor', desc: 'On‑site improvements daily', href: '/reports/seo' },
              { title: 'AI Trends Radar', desc: 'Signals for new factories', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance, links', href: '/site-health' },
              { title: 'Guardrails', desc: 'Defense‑in‑depth quality', href: '/site-health' },
              { title: 'Design Evolution', desc: 'Cohesive futuristic UI', href: '/newsroom' },
              { title: 'Observability', desc: 'Dashboards & artifacts', href: '/site-health' },
              { title: 'Analytics', desc: 'Outcomes & insights', href: '/site-health' },
              { title: 'Link Integrity', desc: 'Broken link healing', href: '/site-health' },
              { title: 'Factory Composer', desc: 'Higher‑order workflows', href: '/automation' },
              { title: 'Docs & Changelog', desc: 'Technical notes & AI log', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs', external: true },
            ].map((item) => (
              item.external ? (
                <a key={item.title} href={item.href as string} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
                </a>
              ) : (
                <Link key={item.title} href={item.href as string}>
                  <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                    <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
                  </a>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Benefits Directory */}
        <motion.section
          id="benefits-directory"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Benefits Directory</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Outcome‑focused advantages with direct links to the systems that deliver them.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '24/7 Progress', desc: 'Always‑on autonomous delivery', href: '/automation' },
              { label: 'Safe Incremental Diffs', desc: 'Small, reviewable changes', href: '/automation' },
              { label: 'Zero‑Ops Cloud‑Native', desc: 'No servers to babysit', href: '/automation' },
              { label: 'Layered Quality Checks', desc: 'Guardrails & audits', href: '/site-health' },
              { label: 'Faster Iteration Loops', desc: 'Shorten idea‑to‑impact', href: '/newsroom' },
              { label: 'SEO Visibility Gains', desc: 'Continuous improvements', href: '/reports/seo' },
            ].map((b) => (
              <Link key={b.label} href={b.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-pulse" />
                    <h3 className="text-base font-semibold">{b.label}</h3>
                  </div>
                  <p className="mt-1 text-sm text-white/75">{b.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Explore <span aria-hidden>→</span></div>
                </a>
              </Link>
            ))}
          </div>
        </motion.section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* AUTO-GENERATED: FRONT_ADS_START */}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Explore more */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/services/ai-seo-auditor"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI SEO Auditor — automate SEO improvements</span></a></Link>
            <Link href="/services/customer-support-chatbot"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Customer Support Chatbot — reduce response time</span></a></Link>
            <Link href="/services/landing-page-generator"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Landing Page Generator — launch pages instantly</span></a></Link>
            <Link href="/services/price-intelligence-service"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Price Intelligence — market‑aware pricing</span></a></Link>
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Status — live agents & reports</span></a></Link>
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
            <Link href="/contact"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Contact — discuss your use‑case</span></a></Link>
          </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </section>
        {/* Explore more */}
        <section className='mx-auto max-w-7xl px-6 pb-16'>;
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>;
            Explore more;
          </h2>;
          <div className='mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>;
            <Link href='/services/ai-seo-auditor'>;
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>;
                <span className='text-white/90'>;
=======
            className='animated - border relative overflow - hidden rounded - 3xl border border - white / 10 bg - gradient - to - r from - fuchsia - 600 / 20 via - violet - 600 / 20 to - cyan - 600 / 20 p - 8 text - center backdrop - blur - xl';
          >;
            <h3 className='text - 2xl font - bold'>;
              Ready to build with autonomous cloud agents?;
            </h3>;
            <p className='mx - auto mt - 2 max - w-2xl text - white / 80'>;
              Scale development with a tireless fleet of self‑improving;
              automations.;
            </p>;
            <div className='mt - 6 flex flex - wrap justify - center gap - 3'>;
              <Link href='/services'>;
                <a className='rounded - xl bg - white / 90 px - 6 py - 3 font - semibold text - slate - 900 hover:bg - white'>;
                  Get Started;
                </a>;
              </Link>;
              <Link href='/automation'>;
                <a className='rounded - xl border border - white / 20 bg - white / 5 px - 6 py - 3 font - semibold backdrop - blur - md hover:bg - white / 10'>;
                  View Automations;
                </a>;
              </Link>            </div>;
          </motion.div>;
        </section>;
        {/* Explore more */}
        <section className='mx - auto max - w-7xl px - 6 pb - 16'>;
          <h2 className='text - center text - 2xl font - bold tracking - wide text - white / 90'>;
            Explore more;
          </h2>;
          <div className='mt - 6 grid grid - cols - 1 gap - 4 sm: grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 4'>;
            <Link href='/services / ai - seo - auditor'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  AI SEO Auditor — automate SEO improvements;
                </span>;
              </a>;
            </Link>;

            <Link href='/services / customer - support - chatbot'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Customer Support Chatbot — reduce response time;
                </span>;
              </a>;
            </Link>;

            <Link href='/services / landing - page - generator'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Landing Page Generator — launch pages instantly;
                </span>;
              </a>;
            </Link>;

            <Link href='/services / price - intelligence - service'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Price Intelligence — market‑aware pricing;
                </span>;
              </a>;
            </Link>;
            <Link href='/automation'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Automation Status — live agents & reports;
                </span>;
              </a>;
            </Link>;
            <Link href='/newsroom'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Newsroom — latest autonomous updates;
                </span>;
              </a>;
            </Link>;

            <Link href='/site - health'>;
              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Site Health — audits & insights;
                </span>;
              </a>;
            </Link>;
            <Link href='/contact'>;

              <a className='bg - white / 5 hover:bg - white / 10 rounded - lg p - 4 transition - colors border border - white / 10'>;
                <span className='text - white / 90'>;

                  Contact — discuss your use‑case;
                </span>;
              </a>;
            </Link>          </div>;
        </section>;
      </main>;


=======

    </div>;
  );

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/services/ai-seo-auditor"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI SEO Auditor — automate SEO improvements</span></a></Link>
            <Link href="/services/customer-support-chatbot"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Customer Support Chatbot — reduce response time</span></a></Link>
            <Link href="/services/landing-page-generator"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Landing Page Generator — launch pages instantly</span></a></Link>
            <Link href="/services/price-intelligence-service"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Price Intelligence — market‑aware pricing</span></a></Link>
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Status — live agents & reports</span></a></Link>
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
            <Link href="/contact"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Contact — discuss your use‑case</span></a></Link>
          </div>
        </section>
<<<<<<< HEAD
        {/* AUTO-GENERATED: FRONT_ADS_END */}
<<<<<<< HEAD

        {/* Feature Highlights (new) */}
        <motion.section
          id="feature-highlights"
=======
        {/* Automation Schedulers */}
        <motion.section
          id="schedulers"
>>>>>>> origin/chore/netlify-automations-futuristic-home
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
          className="mx-auto max-w-7xl px-6 pb-14"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Feature Highlights</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore deep links across the app that showcase our capabilities and benefits.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'SEO Audit', desc: 'Continuous on‑site improvements and artifacts.', href: '/reports/seo' },
              { title: 'AI Trends', desc: 'Signals that inspire new automation factories.', href: '/reports/ai-trends' },
              { title: 'Site Health', desc: 'A11y, performance and link integrity.', href: '/site-health' },
              { title: 'Automation Hub', desc: 'Factories, agents and live workflows.', href: '/automation' },
              { title: 'Newsroom', desc: 'Autonomous updates and product evolution.', href: '/newsroom' },
              { title: 'Front Systems Hub', desc: 'Futuristic templates, effects and layouts.', href: '/main/front' },
            ].map((card) => (
              <a key={card.title} href={card.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/75">{card.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            ))}
          </div>
        </motion.section>
=======
>>>>>>> origin/chore/futuristic-automations

=======
        {/* AUTO-GENERATED: FRONT_UPDATER_START */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore Features, Capabilities, Benefits</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/features"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Features</div>
              <div className="mt-1 text-sm text-white/75">Futuristic modules and templates</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/capabilities"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Capabilities</div>
              <div className="mt-1 text-sm text-white/75">What the system can do across domains</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/benefits"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Benefits</div>
              <div className="mt-1 text-sm text-white/75">Outcomes and value delivered</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
          </div>
        </section>
        {/* AUTO-GENERATED: FRONT_UPDATER_END */}
>>>>>>> origin/chore/futuristic-home-and-netlify-automations
=======
          className="mx-auto max-w-7xl px-6 pb-16"
        >
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Schedulers</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Explore live Netlify scheduled functions powering autonomous updates.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/homepage-automation" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Homepage Automation</div>
              <div className="mt-1 text-sm text-white/75">Updates index explore section and promos.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Run <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Maintenance Scheduler</div>
              <div className="mt-1 text-sm text-white/75">SaaS, links, and promo routines every 30m.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Run <span aria-hidden>↗</span></div>
            </a>
            <a href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-base font-semibold">Marketing Scheduler</div>
              <div className="mt-1 text-sm text-white/75">Newsroom, OG images, and assets every 6h.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Run <span aria-hidden>↗</span></div>
            </a>
          </div>
        </motion.section>
>>>>>>> origin/chore/netlify-automations-futuristic-home
      </main>
      {/* Cloud Automations Callout */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-6 text-center backdrop-blur-xl">
          <h3 className="text-xl font-bold">Cloud Automations — Netlify Scheduled Functions</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">Automations now run natively in the cloud without GitHub Actions. Explore live function endpoints and logs.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a href="/.netlify/functions/homepage-scheduler" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold backdrop-blur-md hover:bg-white/10">Homepage Scheduler</a>
            <a href="/.netlify/functions/automation-scheduler" target="_blank" rel="noopener" className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold backdrop-blur-md hover:bg-white/10">Automation Scheduler</a>
          </div>
        </div>
      </section>
      
      {/* End Cloud Automations Callout */}
      {/* Back to top */}
      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-4 z-40 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
=======
      </main>
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
    </div>);
;
            className="animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl";
          >;
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>;
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>;
            <div className="mt-6 flex flex-wrap justify-center gap-3">;
              <Link href="/services"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>;
              <Link href="/automation"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">View Automations</a></Link>;
            </div>;
          </motion.div>;
        </section>;
        {/* Explore more */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
}

    </div>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="mx-auto max-w-7xl px-6 pb-16">;
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>;
          <div className="mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">;
            <Link href="/services/ai-seo-auditor"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI SEO Auditor — automate SEO improvements</span></a></Link>;
            <Link href="/services/customer-support-chatbot"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Customer Support Chatbot — reduce response time</span></a></Link>;
            <Link href="/services/landing-page-generator"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Landing Page Generator — launch pages instantly</span></a></Link>;
            <Link href="/services/price-intelligence-service"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Price Intelligence — market‑aware pricing</span></a></Link>;
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Status — live agents & reports</span></a></Link>;
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>;
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>;
            <Link href="/contact"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Contact — discuss your use‑case</span></a></Link>;
          </div>;
        </section>;
      </main>;
    </div>;
  );
}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

    </div>);
;

=======
        <section className="mx-auto max-w-7xl px-6 pb-16">;
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>;
          <div className="mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">;
            <Link href="/services/ai-seo-auditor"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI SEO Auditor — automate SEO improvements</span></a></Link>;
            <Link href="/services/customer-support-chatbot"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Customer Support Chatbot — reduce response time</span></a></Link>;
            <Link href="/services/landing-page-generator"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Landing Page Generator — launch pages instantly</span></a></Link>;
            <Link href="/services/price-intelligence-service"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Price Intelligence — market‑aware pricing</span></a></Link>;
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Status — live agents & reports</span></a></Link>;
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>;
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>;
            <Link href="/contact"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Contact — discuss your use‑case</span></a></Link>;
          </div>;
        </section>;
      </main>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
