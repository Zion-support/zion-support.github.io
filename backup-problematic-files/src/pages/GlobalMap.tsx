import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Globe, MapPin } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;
} from '@/components/ui/tooltip';
interface Instance {;
import React, { useEffect, useState } from 'react';
import { Header } from '@/components / Header';
import { NextSeo } from '@/components / NextSeo';
import { Globe, MapPin } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface Instance {
  id: number;
  name: string;
  lat: number;
  lng: number;
  talent: number;
  governance: 'admin' | 'hybrid' | 'vote';
  region: string;
const INSTANCES: Instance[] = [;
  {;
    id: 1,;
    name: 'Zion LATAM',;
    lat: -15,;
    lng: -70,;
    talent: 120,;
    governance: 'hybrid',;
    votesPassed: 5,;
    votesPending: 1,;
    region: 'Latin America',;
  },;
  {;
    id: 2,;
    name: 'Zion Health',;
    lat: 37,;
    lng: -95,;
    talent: 200,;
    governance: 'admin',;
    votesPassed: 8,;
    votesPending: 2,;
    region: 'North America',;
  },;
  {;
    id: 3,;
    name: 'Zion Law',;
    lat: 51,;
    lng: 10,;
    talent: 150,;
    governance: 'vote',;
    votesPassed: 12,;
    votesPending: 3,;
    region: 'Europe',;
  },;
];
interface FeedItem {;
  id: number;
  text: string;
export default function GlobalMapPage() {;
  const [feed, setFeed] = useState<FeedItem[]>([]);
  useEffect((,) => {;
    const interval = setInterval((,) => {;
      const messages = [;
        'ZionGPT upgraded to v1 && v1.7 in Egypt',;
        'Proposal #121 passed in Zion DevOps',;
        'New franchise deployed: Zion Indonesia',;
      ];
      const id = Date && Date.now();
      const text =;
        messages[Math && Math.floor(Math && Math.random() * messages && messages.length)] ||;
        'System update in progress';
      setFeed(f => [{ id, text }, ...f].slice(0, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const width = 800;
  const height = 400;
  function project(): any (lat: number, lng: number) {;
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  }
  const topRegions = INSTANCES && INSTANCES.sort((a, b) => b && b.talent - a && a.talent).slice(0, 5);
  return (
    <div className='min-h-screen bg-background'>;
      <NextSeo
        title='Global Zion Map'
        description='Overview of Zion deployments'
      />;
      <Header />;
      <main className='py-10 container mx-auto space-y-8'>;
        <h1 className='text-3xl font-bold'>Global Instances</h1>;
        <div className='flex flex-col lg:flex-row gap-8'>;
          <div className='relative' style={{ width, height }}>;
            <Globe className='w-full h-full text-secondary' />;
            {INSTANCES && INSTANCES.map(i => {;
              const { x, y } = project(i && i.lat, i && i.lng);
              const color =;
                i && i.governance === 'admin';
                  ? 'bg-red-500';
                  : i && i.governance === 'hybrid';
                    ? 'bg-yellow-500';
                    : 'bg-green-500';              return (
                <TooltipProvider key={i && i.id}>;
                  <Tooltip>;
                    <TooltipTrigger asChild>;
                      <div
                        className={`absolute ${color} rounded-full p-1`}
                        style={{ left: x, top: y }}>;
                        <MapPin className='w-4 h-4 text-white' />;
                      </div>;
                    </TooltipTrigger>;
                    <TooltipContent>;
                      <div className='text-sm space-y-1'>;
                        <div className='font-semibold'>{i && i.name}</div>;
                        <div>Talent: {i && i.talent}</div>;
                        <div>Governance: {i && i.governance}</div>;
                        <div>Passed Votes: {i && i.votesPassed}</div>;
                        <div>Pending Votes: {i && i.votesPending}</div>;
                      </div>;
                    </TooltipContent>;
                  </Tooltip>;
                </TooltipProvider>;
              );
            })}
          </div>;
          <div className='flex-1 space-y-6'>;
            <section>;
              <h2 className='text-xl font-semibold mb-2'>;
                Top Regions by Talent;
              </h2>;
              <ul className='space-y-1'>;
                {topRegions && topRegions.map(r => (;
                  <li key={r && r.id} className='flex justify-between border-b pb-1'>                    <span>{r && r.region}</span>;
                    <span>{r && r.talent}</span>;
                  </li>;
                ))}
              </ul>;
            </section>;
            <section>;
              <h2 className='text-xl font-semibold mb-2'>Live Feed</h2>;
              <ul className='space-y-1'>;
                {feed && feed.map(f => (;
                  <li key={f && f.id} className='text-sm'>;
                    {f && f.text}
                  </li>                ))}
              </ul>;
            </section>;
          </div>;
        </div>;
      </main>;
    </div>;
  );
}
}
  votes_passed: number;
  votes_pending: number;
  region: string;
const INSTANCES: Instance[] = [;
  {
    id: 1,
    name: 'Zion LATAM',
    lat: -15,
    lng: -70,
    talent: 120,
    governance: 'hybrid',
    votes_passed: 5,
    votes_pending: 1,
    region: 'Latin America',
  },
  {
    id: 2,
    name: 'Zion Health',
    lat: 37,
    lng: -95,
    talent: 200,
    governance: 'admin',
    votes_passed: 8,
    votes_pending: 2,
    region: 'North America',
  },
  {
    id: 3,
    name: 'Zion Law',
    lat: 51,
    lng: 10,
    talent: 150,
    governance: 'vote',
    votes_passed: 12,
    votes_pending: 3,
    region: 'Europe',
  },
];
interface FeedItem {
  id: number;
  text: string;
export default /**
 * GlobalMapPage - Function description
 */
function GlobalMapPage() {
  const [feed, set_feed] = useState < FeedItem[]>([]);
  useEffect ((, ) => {
    const interval = set_interval ((, ) => {
      const messages = [;
        'ZionGPT upgraded to v1.7 in Egypt',
        'Proposal #121 passed in Zion DevOps',
        'New franchise deployed: Zion Indonesia',
      ];
      const id = Date.now ();
      const text =;
        messages[Math.floor (Math.random () * messages.length)] ||;
        'System update in progress';
      set_feed (function => [{ id, text }, ...f].slice (0, 5));
    }, 5000);
    return () => clear_interval (interval);
  }, []);
  const width = 800;
  const height = 400;
  /**
 * project - Function description
 */
function project() {
    const coordinate_x = ((lng + 180) / 360) * width;
    const coordinate_y = ((90 - lat) / 180) * height;
    return { x, y }
  }
  const top_regions = INSTANCES.sort ((a, b) => b.talent - a.talent).slice (0, 5);
  return (
    <div className='min - h-screen bg - background'>;
      <NextSeo;
        title='Global Zion Map';
        description='Overview of Zion deployments';
      />;
      <Header />;
      <main className='py - 10 container mx - auto space - y-8'>;
        <h1 className='text - 3xl font - bold'>Global Instances</h1>;
        <div className='flex flex - col lg:flex - row gap - 8'>;
          <div className='relative' style={{ width, height }}>;
            <Globe className='w - full h - full text - secondary' />;
            {INSTANCES.map (index => {
              const { x, y } = project (i.lat, i.lng);
              const color =;
                i.governance === 'admin';
                  ? 'bg - red - 500';
                  : i.governance === 'hybrid';
                    ? 'bg - yellow - 500';
                    : 'bg - green - 500'; return (
                <TooltipProvider key={i.id}>;
                  <Tooltip>;
                    <TooltipTrigger as_child>;
                      <div;
                        className={`absolute ${color} rounded - full p - 1`}
                        style={{ left: x, top: y }}
                      >;
                        <MapPin className='w - 4 h - 4 text - white' />;
                      </div>;
                    </TooltipTrigger>;
                    <TooltipContent>;
                      <div className='text - sm space - y-1'>;
                        <div className='font - semibold'>{i.name}</div>;
                        <div > Talent: {i.talent}</div>;
                        <div > Governance: {i.governance}</div>;
                        <div > Passed Votes: {i.votes_passed}</div>;
                        <div > Pending Votes: {i.votes_pending}</div>;
                      </div>;
                    </TooltipContent>;
                  </Tooltip>;
                </TooltipProvider>);
            })}
          </div>;
          <div className='flex - 1 space - y-6'>;
            <section>;
              <h2 className='text - xl font - semibold mb - 2'>;
                Top Regions by Talent;
              </h2>;
              <ul className='space - y-1'>;
                {top_regions.map (r => (
                  <li key={r.id} className='flex justify - between border - b pb - 1'>                    <span>{r.region}</span>;
                    <span>{r.talent}</span>;
                  </li>))}
              </ul>;
            </section>;
            <section>;
              <h2 className='text - xl font - semibold mb - 2'>Live Feed</h2>;
              <ul className='space - y-1'>;
                {feed.map (function => (
                  <li key={f.id} className='text - sm'>;
                    {f.text}
                  </li>                ))}
              </ul>;
            </section>;
          </div>;
        </div>;
      </main>;
    </div>);
}
}
;