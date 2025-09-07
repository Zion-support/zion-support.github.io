import Link from 'next/link
import { GradientHeading } from './GradientHeading
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs
import { Button } from './ui/button
import { fireEvent } from '@/lib/analytics
import {
  // TODO: Implement
}
  Users;
  Zap;
  Settings;
  MessageSquare;
  Sparkles;
  ArrowRight;
  BarChart3;
  Plus;
  HelpCircle;
} from 'lucide-react
export function FeaturesGuideSection() {
  const features = [
    {import Link from "next/link"""
import { GradientHeading } from "./GradientHeading"""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"""
import { Button } from "./ui/button"""
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react
import { Zap } from 'lucide-react
    {


        'Navigate to the AI Matcher page from the homepage or marketplace',
        'Fill in your project requirements and specifications',
        'Review the AI-recommended matches tailored to your needs',
        'Connect with matched talents or services directly',']
      ],
      link: '/match',
      buttonText: 'Try AI Matcher',
    },
      id: 'talent-directory',
      title: 'Talent Directory',
      description:
        'Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.',
      icon: <Users className='h-10 w-10 text-zion-purple' />,

      icon: <Zap className='h-10 w-10 text-zion-cyan' />,

      icon: <Settings className='h-10 w-10 text-zion-purple' />,

      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />,
</BarChart3>
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />,

      icon: <Plus className='h-10 w-10 text-zion-cyan' />,

      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />,

    <section className='py-20 bg-zion-blue-dark'>
</section>
      <div className='container mx-auto px-4'>
</div>
        <div className='text-center mb-12'>
          <GradientHeading>Your Complete Guide to Zion
          <p className='text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto'>
</p>
        <Tabs defaultValue='ai-matcher' className='w-full max-w-5xl mx-auto'>

          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8'>

              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'              >                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan""
"
      icon: <Users className="h-10 w-10 text-zion-purple" />,"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,"
      icon: <Settings className="h-10 w-10 text-zion-purple" />,"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,"
</BarChart3>"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,"
    <section className="py-20 bg-zion-blue-dark">"
</section>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-12">"
          <GradientHeading>Your Complete Guide to Zion"
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">"
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">"
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">"

                value={feature.id}"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan""
              >
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,"

      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;"
      icon: <Users className="h-10 w-10 text-zion-purple" />,;"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;"
      icon: <Settings className="h-10 w-10 text-zion-purple" />,;"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;"
      icon: <Users className='h-10 w-10 text-zion-purple' />

      icon: <Zap className='h-10 w-10 text-zion-cyan' />

      icon: <Settings className='h-10 w-10 text-zion-purple' />

      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />

      icon: <Plus className='h-10 w-10 text-zion-cyan' />

      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />




      id: "ai-matcher",""
      title: "AI Matcher",""
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",""
      icon: <Sparkles className = "h-10 w-10 text-zion-cyan" />,"
      icon: <Users className="h-10 w-10 text-zion-purple" />"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />"
      icon: <Settings className="h-10 w-10 text-zion-purple" />"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />"
      icon: <Sparkles className='h-10 w-10 text-zion-cyan' />,;

      icon: <Users className='h-10 w-10 text-zion-purple' />,;

      icon: <Zap className='h-10 w-10 text-zion-cyan' />,;

      icon: <Settings className='h-10 w-10 text-zion-purple' />,;

      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />,;
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />,;

      icon: <Plus className='h-10 w-10 text-zion-cyan' />,;

      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />,;

    <section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Your Complete Guide to Zion;
          <p className='text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto'>;
          </p>;
        </div>;
        <Tabs defaultValue='ai-matcher' className='w-full max-w-5xl mx-auto'>;

          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8'>;

                key={feature && feature.id}
                value={feature && feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'>                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";"
      icon: <Sparkles className='h - 10 w - 10 text - zion - cyan' />,

      icon: <Users className='h - 10 w - 10 text - zion - purple' />,

      icon: <Zap className='h - 10 w - 10 text - zion - cyan' />,

      icon: <Settings className='h - 10 w - 10 text - zion - purple' />,

      icon: <BarChart3 className='h - 10 w - 10 text - zion - cyan' />,
      icon: <MessageSquare className='h - 10 w - 10 text - zion - purple' />,

      icon: <Plus className='h - 10 w - 10 text - zion - cyan' />,

      icon: <HelpCircle className='h - 10 w - 10 text - zion - purple' />,

    <section className='py - 20 bg - zion - blue - dark'>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 12'>;
          <GradientHeading > Your Complete Guide to Zion;
          <p className='text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto'>;
        <Tabs default_value='ai - matcher' className='w - full max - w-5xl mx - auto'>;

          <TabsList className='grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8'>;

                className='data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan'              >                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";"
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,"
      icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,"
      icon: <Settings className="h - 10 w - 10 text - zion - purple" />,"
      icon: <BarChart3 className="h - 10 w - 10 text - zion - cyan" />,"
      icon: <MessageSquare className="h - 10 w - 10 text - zion - purple" />,"
      icon: <Plus className="h - 10 w - 10 text - zion - cyan" />,"
      icon: <HelpCircle className="h - 10 w - 10 text - zion - purple" />,"

              
          
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">"



              
    <section className="py - 20 bg - zion - blue - dark">;"
      <div className="container mx - auto px - 4">;"
        <div className="text - center mb - 12">;"
          <GradientHeading > Your Complete Guide to Zion;"
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;"
        </div>;"
        <Tabs default_value="ai - matcher" className="w - full max - w-5xl mx - auto">;"
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8">;"

                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";"
              >;

              ))}
          ;"
          <TabsList className='grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1'>;



            <TabsContent key={feature.id} value={feature.id} className='mt - 8'>;

              <div className='bg - zion - blue rounded - lg border border - zion - blue - light p - 6 md:p - 8 flex flex - col md:flex - row gap - 8'>;
                <div className='md:w - 1/3 flex flex - col items - center md:items - start'>;
                  <div className='bg - zion - blue - dark p - 4 rounded - xl mb - 4'>;
                  <h3 className='text - 2xl font - bold text - white mb - 3'>;
</h3>
                  </h3>;
                  <p className='text - zion - slate - light mb - 6'>;
            <TabsContent key={feature.id} value={feature.id} className="mt-8">"
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">"
                <div className="md:w-1/3 flex flex-col items-center md:items-start">"
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">"
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>""
                  <p className="text-zion-slate-light mb-6">{feature.description}</p>"
                  <Button;"
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                    asChild;

                    <Link href={feature.link}>
                      <ArrowRight className="ml-2 h-4 w-4" />"

                    
                  
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">"
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>""
                  <ol className="list-decimal list-inside space-y-3 pl-4">"
</ol>"
                      <li key={idx} className="text-zion-slate-light">"
</li>"
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>""
    <section className="py-20 bg-zion-blue-dark">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-12">;"
          <GradientHeading>Your Complete Guide to Zion;"
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;"
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">;"
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">;"

                value={feature && feature.id}"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;"

              ;
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1'>;



            <TabsContent key={feature && feature.id} value={feature && feature.id} className='mt-8'>;

              <div className='bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8'>;
                <div className='md:w-1/3 flex flex-col items-center md:items-start'>;
                  <div className='bg-zion-blue-dark p-4 rounded-xl mb-4'>;
                  <h3 className='text-2xl font-bold text-white mb-3'>;
                  <p className='text-zion-slate-light mb-6'>;
                  <Button;
                    className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'                    asChild>;

                    <Link href={feature && feature.link}>;

                      <ArrowRight className='ml-2 h-4 w-4' />                  <h3 className="text-2xl font-bold text-white mb-3">{feature && feature.title}</h3>;"
                  <p className="text-zion-slate-light mb-6">{feature && feature.description}</p>;"
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"

                      <ArrowRight className='ml-2 h-4 w-4' />;

                <div className='md:w-2/3 bg-zion-blue-dark p-6 rounded-lg'>;
                  <h4 className='text-xl font-semibold text-white mb-4'>;
</h4>
                  </h4>;
                  <ol className='list-decimal list-inside space-y-3 pl-4'>;
</ol>
                      <li key={idx} className='text-zion-slate-light'>;
</li>
                        <span className='text-zion-cyan mr-2'>{idx + 1}.</span>                        {instruction}                ;
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;"
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;""
                  <ol className="list-decimal list-inside space-y-3 pl-4">;"
                      <li key={idx} className="text-zion-slate-light">;"
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;"
                      </li>;
                  </ol>;
            variant='outline
            className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10
            asChild>;

            <Link;
              href='/marketplace'              onClick={() => fireEvent('explore_marketplace_click')}

            
        


        
        <div className="mt-12 text-center">"
            variant="outline"""
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10""

            <Link;"
              href="/marketplace"""
              onClick={() => fireEvent('explore_marketplace_click')}


            
          
              <ArrowRight className='ml-2 h-4 w-4' />                          <ArrowRight className="ml-2 h-4 w-4" />;"

    </section>;
                    className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple'                    as_child;

                    <Link href={feature.link}>;

                      <ArrowRight className='ml - 2 h - 4 w - 4' />                  <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>;"
                  <p className="text - zion - slate - light mb - 6">{feature.description}</p>;"
                    className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"

                      <ArrowRight className='ml - 2 h - 4 w - 4' />;

                <div className='md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg'>;
                  <h4 className='text - xl font - semibold text - white mb - 4'>;
                  <ol className='list - decimal list - inside space - y-3 pl - 4'>;
                      <li key={idx} className='text - zion - slate - light'>;
                        <span className='text - zion - cyan mr - 2'>{idx + 1}.</span>                        {instruction}
                <div className="md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg">;"
                  <h4 className="text - xl font - semibold text - white mb - 4">How to Use</h4>;""
                  <ol className="list - decimal list - inside space - y-3 pl - 4">;"
                      <li key={idx} className="text - zion - slate - light">;"
                        <span className="text - zion - cyan mr - 2">{idx + 1}.</span>;"
                      </li>))}
        <div className='mt - 12 text - center'>;
            variant='outline';
            className='border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10';
            as_child;

              href='/marketplace'              on_click={() => fire_event ('explore_marketplace_click')}

              <ArrowRight className='ml - 2 h - 4 w - 4' />                          <ArrowRight className="ml - 2 h - 4 w - 4" />;"

    </section>);"