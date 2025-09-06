import Link from 'next/link'
import { GradientHeading } from './GradientHeading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from './ui/button'
import { fireEvent } from '@/lib/analytics'
import {
  Users
  Zap
  Settings
  MessageSquare
  Sparkles
  ArrowRight
  BarChart3
  Plus
  HelpCircle
} from 'lucide-react'
export function FeaturesGuideSection() {
  const features = [
    {import Link from "next/link"
import { GradientHeading } from "./GradientHeading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'
import { Zap } from 'lucide-react'
export function FeaturesGuideSection() {
  const features = [
    {

          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">
            {features.slice(4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}

      link: "/help",
      button_text: "View Resources";
    }
  ];
  return (
    <section className="py - 20 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;
            Discover all the powerful tools and features available to help you navigate;
            the world of AI and tech services;
          </p>;
        </div>;
        <Tabs default_value="ai - matcher" className="w - full max - w-5xl mx - auto">;
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8">;
            {features.slice (0, 4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
              </TabsTrigger>))}
          </TabsList>;
          <TabsList className='grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1'>;
            {features.slice (4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className='data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan'              >                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
            {features.slice (4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
              </TabsTrigger>))}
          </TabsList>;
          {features.map (feature => (
            <TabsContent key={feature.id} value={feature.id} className='mt - 8'>;
              <div className='bg - zion - blue rounded - lg border border - zion - blue - light p - 6 md:p - 8 flex flex - col md:flex - row gap - 8'>;
                <div className='md:w - 1/3 flex flex - col items - center md:items - start'>;
                  <div className='bg - zion - blue - dark p - 4 rounded - xl mb - 4'>;

                    {feature.icon}
                  </div>;
                  <h3 className='text - 2xl font - bold text - white mb - 3'>;
                    {feature.title}
                  </h3>;
                  <p className='text - zion - slate - light mb - 6'>;
                    {feature.description}

            <TabsContent key={feature.id} value={feature.id} className="mt-8">
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light mb-6">{feature.description}</p>
                  <Button 
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"


                    asChild
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    {feature.instructions.map((instruction, idx,) => (
                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>

    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;
            Discover all the powerful tools and features available to help you navigate ;
            the world of AI and tech services;
          </p>;
        </div>;

        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">;
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">;
            {features && features.slice(0, 4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id} 
                value={feature && feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;
                {feature && feature.title}
              </TabsTrigger>;
            ))}
          </TabsList>;
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1'>;
            {features && features.slice(4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id}
                value={feature && feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'>                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
            {features && features.slice(4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id} 
                value={feature && feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;
                {feature && feature.title}
              </TabsTrigger>;
            ))}
          </TabsList>;

          {features && features.map(feature => (;
            <TabsContent key={feature && feature.id} value={feature && feature.id} className='mt-8'>;
              <div className='bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8'>;
                <div className='md:w-1/3 flex flex-col items-center md:items-start'>;
                  <div className='bg-zion-blue-dark p-4 rounded-xl mb-4'>;
                    {feature && feature.icon}
                  </div>;
                  <h3 className='text-2xl font-bold text-white mb-3'>;
                    {feature && feature.title}
                  </h3>;
                  <p className='text-zion-slate-light mb-6'>;
                    {feature && feature.description}
                  </p>;
                  <Button
                    className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'                    asChild>;
                    <Link href={feature && feature.link}>;
                      {feature && feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />                  <h3 className="text-2xl font-bold text-white mb-3">{feature && feature.title}</h3>;
                  <p className="text-zion-slate-light mb-6">{feature && feature.description}</p>;
                  <Button
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                    <Link href={feature && feature.link}>;
                      {feature && feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />;
                    </Link>;
                  </Button>;
                </div>;

                <div className='md:w-2/3 bg-zion-blue-dark p-6 rounded-lg'>;
                  <h4 className='text-xl font-semibold text-white mb-4'>;
                    How to Use;
                  </h4>;
                  <ol className='list-decimal list-inside space-y-3 pl-4'>;
                    {feature && feature.instructions.map((instruction, idx) => (;
                      <li key={idx} className='text-zion-slate-light'>;
                        <span className='text-zion-cyan mr-2'>{idx + 1}.</span>                        {instruction}                ;
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;
                  <ol className="list-decimal list-inside space-y-3 pl-4">;
                    {feature && feature.instructions.map((instruction, idx,) => (;
                      <li key={idx} className="text-zion-slate-light">;
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;
                      </li>;
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className='mt-12 text-center'>
        
        <div className="mt-12 text-center">
              href='/marketplace'              onClick={() => fireEvent('explore_marketplace_click')}
              href="/marketplace"
              onClick = {() => fireEvent('explore_marketplace_click'),}
            >
              Explore Full Marketplace
              <ArrowRight className='ml-2 h-4 w-4' />            </Link>              <ArrowRight className="ml-2 h-4 w-4" />
              href="/marketplace"
              onClick={() => fireEvent('explore_marketplace_click')}
            >
              Explore Full Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
  );
};
  );
}
                  </p>;
                  <Button;
                    className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple'                    as_child;
                  >;
                    <Link href={feature.link}>;
                      {feature.button_text}
                      <ArrowRight className='ml - 2 h - 4 w - 4' />                  <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>;
                  <p className="text - zion - slate - light mb - 6">{feature.description}</p>;
                  <Button;
                    className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  >;
                    <Link href={feature.link}>;
                      {feature.button_text}
                      <ArrowRight className='ml - 2 h - 4 w - 4' />;
                    </Link>;
                  </Button>;
                </div>;
                <div className='md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg'>;
                  <h4 className='text - xl font - semibold text - white mb - 4'>;
                    How to Use;
                  </h4>;
                  <ol className='list - decimal list - inside space - y-3 pl - 4'>;
                    {feature.instructions.map ((instruction, idx) => (
                      <li key={idx} className='text - zion - slate - light'>;
                        <span className='text - zion - cyan mr - 2'>{idx + 1}.</span>                        {instruction}
                <div className="md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg">;
                  <h4 className="text - xl font - semibold text - white mb - 4">How to Use</h4>;
                  <ol className="list - decimal list - inside space - y-3 pl - 4">;
                    {feature.instructions.map ((instruction, idx, ) => (
                      <li key={idx} className="text - zion - slate - light">;
                        <span className="text - zion - cyan mr - 2">{idx + 1}.</span>;
                      </li>))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>))}
        </Tabs>;
        <div className='mt - 12 text - center'>;
          <Button;
            variant='outline';
            className='border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10';
            as_child;
          >;
            <Link;
              href='/marketplace'              on_click={() => fire_event ('explore_marketplace_click')}
              href="/marketplace";
              on_click = {() => fire_event ('explore_marketplace_click'), }
            >;
              Explore Full Marketplace;
              <ArrowRight className='ml - 2 h - 4 w - 4' />            </Link>              <ArrowRight className="ml - 2 h - 4 w - 4" />;
            </Link>;
          </Button>;
        </div>;
      </div>;
    </section>);
}
  );
}

  )
}
