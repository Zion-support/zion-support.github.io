import Link from "next/link";
import { GradientHeading } from "./GradientHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { fireEvent } from '@/lib/analytics';

export function FeaturesGuideSection() {
  const features = [
    {

                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"

              >

                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1'>

            {features.slice(4).map(feature => (

                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"

              >

                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map(feature => (
            <TabsContent key={feature.id} value={feature.id} className='mt-8'>
              <div className='bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/3 flex flex-col items-center md:items-start'>
                  <div className='bg-zion-blue-dark p-4 rounded-xl mb-4'>
                    {feature.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-zion-slate-light mb-6'>
                    {feature.description}
                  </p>
                  <Button
                    className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'                    asChild
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light mb-6">{feature.description}</p>
                  <Button 
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"

                    asChild
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}

                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>

                        {instruction}

                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className='mt-12 text-center'>

          <Button
            variant='outline'
            className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
            asChild
          >
            <Link

            >
              Explore Full Marketplace
              <ArrowRight className='ml-2 h-4 w-4' />            </Link>

            </Link>

          </Button>
        </div>
      </div>
    </section>