})
      // Check condition;
if (?.error) {) {}
  $2;
}

      logErrorToProduction('Error generating content:', { data: error }),
      toast({}
        title: 'Generation Failed','
        description: error instanceof Error ? error.message : 'Failed to generate content. Please try again.','
        variant: 'destructive'

import { Textarea } from '@/components/ui/textarea';

  return ('
    <div className='space-y-6'>'
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>
        <CardHeader>'
          <CardTitle className='flex items-center text-white'>'
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />
            AI Listing Optimizer;
          </CardTitle>

          </p>
        </CardHeader>'
        <CardContent className='space-y-4'>'
          <div className='space-y-2'>'
            <label htmlFor='title' className='text-sm font-medium text-zion-slate-light'>Title</label>

              id='title'
              value={title}'
              onChange={(e) => handleInputChange(e, 'title')}'
              placeholder='Enter your product or service title''
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}
            />

              id='category'

              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service'
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='keyFeatures' className='text-sm font-medium text-zion-slate-light'>Key Features (Optional)</label>
            <Textarea

              id='keyFeatures'
              value={keyFeatures}'
              onChange={(e) => handleInputChange(e, 'keyFeatures')}'
              placeholder='Briefly describe the main features or benefits''
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
              disabled={isLoading}
            />

              id='targetAudience'

              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder='e.g. Developers, Marketers, Startups'
              className='bg-zion-blue border border-zion-blue-light text-white'
;
      setGeneratedContent((data as any)?.generated || null),;
      toast({;

        variant: 'destructive',;
      });
      return;
    }

    setIsLoading(true);

    try {;
      const { data, error } = await supabase && supabase.functions.invoke(;'
        'ai-listing-generator',;
        {;
          body: { title, category, keyFeatures, targetAudience },;
        });

      if (error) {;
        throw new Error(error && error.message);
      }

      if ((data as any)?.error) {;
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null);

          error instanceof Error;
            ? error && error.message;'
            : 'Failed to generate content. Please try again.',;'
        variant: 'destructive',;

      });
    } finally {;
      setIsLoading(false);
    }

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;

      });
    }

import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client',;
import { Badge } from '@/components/ui/badge';
import {logErrorToProduction} from '@/utils/productionLogger';
interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number
  },
  keyPoints: string[]
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
origin/cursor/automate-test-improve-and-merge-code-2533
  }
}
export function AIListingGenerator({ onApplyGenerated, initialValues;

      <Card className='border border-zion-blue-light bg-zion-blue-dark'>;

              htmlFor='title''
              className='text-sm font-medium text-zion-slate-light'>;
              Title;
            </label>;

              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;

              htmlFor='category''
              className='text-sm font-medium text-zion-slate-light'>;
              Category;
            </label>;

              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;

              htmlFor='keyFeatures''
              className='text-sm font-medium text-zion-slate-light'>;
              Key Features (Optional);
            </label>;

              className='bg-zion-blue border border-zion-blue-light text-white min-h-20';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;

              htmlFor='targetAudience''
              className='text-sm font-medium text-zion-slate-light'>;
              Target Audience (Optional);
            </label>;

              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}
            />;
          </div>;
          <Button;
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2''
import React, { useState } from 'react',
import { useToast } from '@/hooks/use-toast',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Textarea } from '@/components/ui/textarea',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import Skeleton from '@/components/ui/skeleton',
import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client',
import { Badge } from '@/components/ui/badge',
import {logErrorToProduction} from '@/utils/productionLogger',
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
import React, { useState } from 'react',;
import { useToast } from '@/hooks/use-toast',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import Skeleton from '@/components/ui/skeleton',;
import { Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client',;
import { Badge } from '@/components/ui/badge',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  },;
  keyPoints: string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;
    title?: string,;
    category?: string,;
    keyFeatures?: string,;
    targetAudience?: string;
  }
}

            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (

                <Sparkles className='h-4 w-4 mr-2' />
                Generate Optimized Content

              </>
            )}
          </Button>
        </CardContent>
      </Card>

          <CardHeader>
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />

            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />

          </CardHeader>

            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'>;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) : (;
              <>;'
                <Sparkles className='h-4 w-4 mr-2' />;
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;

        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>;
          <CardHeader>;'
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />;

                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />;
              ))}
            </div>;'
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />;'
            <div className='space-y-2'>;
              {[...Array(3)].map((_, i) => (;
                <Skeleton'
    <div className='space - y-6'>;'
      <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
        <CardHeader>;'
          <CardTitle className='flex items - center text - white'>;'
            <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;
            AI Listing Optimizer;
          </CardTitle>;'
          <p className='text - sm text - zion - slate - light'>;
            Provide basic information and let AI generate optimized,
            SEO - friendly content for your listing;
          </p>;
        </CardHeader>;'
        <CardContent className='space - y-4'>;'
          <div className='space - y-2'>;
            <label;'
              html_for='title';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Title;
            </label>;

              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='category';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Category;
            </label>;

              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='key_features';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Key Features (Optional);
            </label>;
            <Textarea;'
              id='key_features';

              className='bg - zion - blue border border - zion - blue - light text - white min - h-20';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='target_audience';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Target Audience (Optional);
            </label>;

              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}
            />;
          </div>;
          <Button;
            on_click={handle_generate}
            disabled={is_loading || !title || !category}'
            className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;'
                <Sparkles className='h - 4 w - 4 mr - 2' />;
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
      {is_loading && ('
        <Card className='border border - zion - blue - light bg - zion - blue - dark overflow - hidden'>;
          <CardHeader>;'
            <Skeleton className='h - 8 w - 3/4 bg - zion - blue - light / 20' />;
          </CardHeader>;'
          <CardContent className='space - y-4'>;'
            <Skeleton className='h - 32 w - full bg - zion - blue - light / 20' />;'
            <div className='flex flex - wrap gap - 2'>;

              {[...Array (3)].map ((_, i) => (
                <Skeleton;

                  className='h - 6 w - full bg - zion - blue - light / 20';
                />              ))}
            </div>;
          </CardContent>;
          <CardContent className='space-y-4'>'
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />'
            <div className='flex flex-wrap gap-2'>'
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />'
              ))}
            </div>
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />'
            <div className='space-y-2'>'
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-full bg-zion-blue-light/20' />'

          <CardContent className='space-y-4'>

            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />

            <div className='flex flex-wrap gap-2'>
              {[...Array(5)].map((_, i) => ('
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />
              ))}
            </div>'
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />'
            <div className='space-y-2'>
              {[...Array(3)].map((_, i) => ('
                <Skeleton key={i} className='h-6 w-full bg-zion-blue-light/20' />
              ))}
            </div>;
          </CardContent>;

          <CardContent className='space-y-4'>
            <div>'
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>Description</h3>'
              <p className='text-white'>{generatedContent.description}</p>

            </div>

                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}
              </p>
            </div>

        <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
          <CardHeader>;'
            <CardTitle className='text-white'>Generated Content</CardTitle>;
          </CardHeader>;'
          <CardContent className='space-y-4'>;
            <div>;'
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Description;
              </h3>;'
              <p className='text-white'>{generatedContent && generatedContent.description}</p>;
            </div>;

              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Tags;
              </h3>;'
              <div className='flex flex-wrap gap-2'>;
                {generatedContent && generatedContent.tags.map((tag, index) => (                  <Badge key={index}>{tag}</Badge>;

            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>Suggested Price Range</h3>

              <p className='text-white'>${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>

            </div>

            <div>;

              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Suggested Price Range;
              </h3>;'
              <p className='text-white'>;
                ${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - $;
                {generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}
              </p>;
            </div>;

              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Key Selling Points;
              </h3>;'
              <ul className='list-disc pl-5 text-white space-y-1'>;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>;

                ))}

        </Card>)}
      {generated_content && !is_loading && ('
        <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
          <CardHeader>;'
            <CardTitle className='text - white'>Generated Content</CardTitle>;
          </CardHeader>;'
          <CardContent className='space - y-4'>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Description;
              </h3>;'
              <p className='text - white'>{generated_content.description}</p>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Tags;
              </h3>;'
              <div className='flex flex - wrap gap - 2'>;
                {generated_content.tags.map ((tag, index) => (                  <Badge key={index}>{tag}</Badge>))}
              </div>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Suggested Price Range;
              </h3>;'
              <p className='text - white'>;
                ${generated_content.suggested_price.min.to_fixed (2)} - $;
                {generated_content.suggested_price.max.to_fixed (2)}
              </p>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Key Selling Points;
              </h3>;'
              <ul className='list - disc pl - 5 text - white space - y-1'>;
                {generated_content.key_points.map ((point, index) => (                  <li key={index}>{point}</li>))}

              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;

            <Button;
              onClick={handleApply}'
              className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'
            >

              Apply to My Listing

              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </CardFooter>
        </Card>
      )}

  value: string ;
}, field: string) => {;
  switch (field) {;'
  case 'title': setTitle (e.target.value);

  if (!title |!category) {

            <Button;

              <ArrowRight className='ml - 2 h - 4 w - 4' />;
            </Button>;
          </CardFooter>;
        </Card>)}
    </div>);

  toast ({

  return;

    </div>;
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
  target: {;,
  value: string ;

  switch (field) {;
  case 'title': setTitle (e && e.target.value);
break;';
case 'category': setCategory (e && e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e && e.target.value);
  case 'title': setTitle (e.target.value);
break;';
case 'category': setCategory (e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e.target.value);
origin/cursor/automate-test-improve-and-merge-code-2533
break;';

case 'targetAudience': const handleGenerate = async () => {;
  if (!title || !category) {;
  toast ({;
  return;
}setIsLoading (true);'
}catch (error) {';'
  logErrorToProduction ('Error generating content:', {;
  data: error ;
});
toast ({;

  ;
origin/cursor/automate-test-improve-and-merge-code-2533
}finally {;

};
const handleApply = () => {;
  if (generatedContent &&,  onApplyGenerated) {;
  onApplyGenerated (generatedContent);

  ;
origin/cursor/automate-test-improve-and-merge-code-2533

}''  );

};
  );

  data: error;
});

toast ({
}finally {
  setIsLoading (false)
}
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent)
toast ({
}
<CardHeader> <CardTitle className='flex items-center text-white' > <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className='space-y-4' > <div className='space-y-2' > <label htmlFor='title' className='text-sm font-medium text-zion-slate-light' >Title</label> <Input /> </div> <div className='space-y-2' > <label htmlFor='category' className='text-sm font-medium text-zion-slate-light' >Category</label> <Input /> </div> <div className='space-y-2' > <label htmlFor='keyFeatures' className='text-sm font-medium text-zion-slate-light' >Key Features (Optional) </label> <Textarea /> </div> <div className='space-y-2' > <label htmlFor='targetAudience' className='text-sm font-medium text-zion-slate-light' >Target Audience (Optional) </label> <Input > {'
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className='h-4 w-4 mr-2' /> Generate Optimized Content </>) '
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' /> </CardHeader>) )
}</div> </CardContent> </Card>) '
}<CardHeader> <CardTitle className='text-white' >Generated Content</CardTitle> </CardHeader> <CardContent className='space-y-4' > <div> <h3 className='text-sm font-medium text-zion-slate-light mb-2' >Description</h3> <p className='text-white' > {
  generatedContent.description
}</p> </div> <div>) )
}</div> </div> <div>) ) '
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className='ml-2 h-4 w-4' /> </Button> </CardFooter> </Card>)
}</div>)
}''  )
}
  )
}
    </div>;
  );

}

  setIsLoading (false);
}

const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2

}
  onApplyGenerated (generated_content);
toast ({}
}

  generated_content.description;
}</p> </div> <div>) );'
}</div> </div> <div>) ) ';'
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className='ml - 2 h - 4 w - 4' /> </Button> </CardFooter> </Card>);
}</div>);''
}''  );
});