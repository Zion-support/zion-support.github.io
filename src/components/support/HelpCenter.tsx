import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HelpCategoryList } from './HelpCategoryList'
import { HelpArticleList } from './HelpArticleList'
import { HelpArticleView } from './HelpArticleView'
import { HELP_CATEGORIES } from './help-content'
import React, { useState } from 'react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { HelpCategoryList } from './HelpCategoryList';
import { HelpArticleList } from './HelpArticleList';
import { HelpArticleView } from './HelpArticleView';
import { HELP_CATEGORIES } from './help - content';
import { Search } from 'lucide-react';
export default /**
 * HelpCenter - Function description
 */
function HelpCenter() {
  const [selected_category, setSelectedCategory] = useState < string | null>(null);
  const [selected_article, setSelectedArticle] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ('');
  const handleCategorySelect = (category_id: string) =>: any {
    setSelectedCategory (category_id);
    setSelectedArticle (null);
  const handleBackToCategories = () =>: any {
    setSelectedCategory (null);
    setSelectedArticle (null);

  }
  const handleBackToArticles = () =>: any {
    setSelectedArticle (null);
  }



                  <div>
                    <h3 className='font-medium text-zion-cyan mb-2'>
                      How does the AI matching work?
                    </h3>
                    <p className='text-zion-slate-light'>
                      Our AI matching algorithm analyzes your requirements and
                      preferences to match you with the most compatible talent
                      or services. The process takes into account skills
                      experience, availability, and past performance to ensure
                      optimal results.
                    </p>
                  </div>

            </TabsContent>;

            <TabsContent value='faq'>;
              <div className='bg-zion-blue-light/20 rounded-lg p-6'>;
                <h2 className='text-xl font-semibold mb-4'>;
                  Frequently Asked Questions;
                </h2>;

                <div className='space-y-6'>;
                  <div>;
                    <h3 className='font-medium text-zion-cyan mb-2'>;
                      How does the AI matching work?;
                    </h3>;
                    <p className='text-zion-slate-light'>;
                      Our AI matching algorithm analyzes your requirements and;
                      preferences to match you with the most compatible talent;
                      or services. The process takes into account skills,;
            <TabsContent value='articles'>;
              {!selected_category && !selected_article && (
                <HelpCategoryList;
                  categories={HELP_CATEGORIES}
                  onCategorySelect={handleCategorySelect}
                  search_query={search_query}                />)}
              {selected_category && !selected_article && (
                <>;
                  <Button;
                    variant='ghost';
                    on_click={handleBackToCategories}
                    className='mb - 4';
                  >;
                    ← All Categories;
                  </Button>;
                  <HelpArticleList;
                    category_id={selected_category}
                    onArticleSelect={handleArticleSelect}
                    search_query={search_query}                  />;
                </>)}
              {selected_article && (
                <>;
                  <Button;
                    variant='ghost';
                    on_click={handleBackToArticles}
                    className='mb - 4'                  >;
                    ← Back to Articles;
                  </Button>;
                  <HelpArticleView article_id={selected_article} />;
                </>)}
            </TabsContent>;
            <TabsContent value='faq'>;
              <div className='bg - zion - blue - light / 20 rounded - lg p - 6'>;
                <h2 className='text - xl font - semibold mb - 4'>;
                  Frequently Asked Questions;
                </h2>;
                <div className='space - y-6'>;
                  <div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How does the AI matching work?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      Our AI matching algorithm analyzes your requirements and;
                      preferences to match you with the most compatible talent;
                      or services. The process takes into account skills,

                      experience, availability, and past performance to ensure;
                      optimal results.;
                    </p>;
                  </div>;

                  <div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How do I hire someone on Zion?;
                    </h3>;
                    <p className='text - zion - slate - light'>;

                      To hire talent on Zion, post a job or project, review;
                      matches or applications, interview candidates through our;
                      platform, and extend an offer. Our secure payment system;
                      protects both parties throughout the engagement.;
                    </p>;
                  </div>;

                  <div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      What are the payment terms?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      Zion offers flexible payment options including;
                      milestone - based payments, hourly rates, or fixed project;

                      fees. Funds are held in escrow until deliverables are;
                      approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;

                  <div>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                      How do I contact support?;
                    </h3>;
                    <p className='text - zion - slate - light'>;
                      You can reach our support team through the chat widget at;
                      the bottom right of any page, by emailing;
                      support@ziontechgroup.com, or by scheduling a call with;

                      our team through the Contact tab.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;


            
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
                  <p className="text-zion-slate-light mb-4">
                    Our support team is available 24/7 to assist you with any questions or issues.


                    
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />


                  <form className='space-y-4'>
                    <Button className='w-full bg-zion-cyan hover:bg-zion-cyan/80'>



    </>);
}

      </div>
    </>
  )
