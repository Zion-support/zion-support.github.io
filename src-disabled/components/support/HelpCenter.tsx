<<<<<<< HEAD


=======
import { Search } from 'lucide-react''
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Search } from 'lucide-react'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCategoryList } from './HelpCategoryList';
import { HelpArticleList } from './HelpArticleList';
import { HelpArticleView } from './HelpArticleView';
import { HELP_CATEGORIES } from './help-content';
import { Search } from 'lucide-react';

origin/cursor/automate-test-improve-and-merge-code-2533
export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState('')'
  const handleCategorySelect = (categoryId:,  string) => {,
    setSelectedCategory(categoryId)
    setSelectedArticle(null)
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { HELP_CATEGORIES } from './help - content';
export default /**
 * HelpCenter - Function description
 */
function HelpCenter() {
  const [selected_category, setSelectedCategory] = useState < string | null>(null);,
  const [selected_article, setSelectedArticle] = useState < string | null>(null);,
  const [search_query, setSearchQuery] = useState ('');
  const handleCategorySelect = (category_id:,  string) =>: any {,
    setSelectedCategory (category_id);
    setSelectedArticle (null);
  }
<<<<<<< HEAD

  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId)
  }

=======
  const handleArticleSelect = (articleId:,  string) => {,
    setSelectedArticle(articleId)
  }
export default /**
 * HelpCenter - Function description
import { Search } from 'lucide-react
export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
</string>
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [selected_category, setSelectedCategory] = useState < string | null>(null);
  const [selected_article, setSelectedArticle] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ();
  const handleCategorySelect = (category_id: string) =>: any {
  // TODO: Implement
}
    setSelectedCategory (category_id);
    setSelectedArticle (null);
  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId)

export default /**
 * HelpCenter - Function description;
pr-12325
 */
function HelpCenter() {
  const [selected_category, setSelectedCategory] = useState < string | null>(null),
  const [selected_article, setSelectedArticle] = useState < string | null>(null),
  const [search_query, setSearchQuery] = useState (""),"
  const handleCategorySelect = (category_id: string, ) =>: any {
    setSelectedCategory (category_id),
    setSelectedArticle (null);
  },
  const handleArticleSelect = (article_id: string, ) =>: any {
    setSelectedArticle (article_id);
  },
  const handleBackToCategories = () =>: any {
    setSelectedCategory (null);
    setSelectedArticle (null);
  }
  const handleBackToArticles = () =>: any {
    setSelectedArticle (null);
  }
  // TODO: Implement
    setSelectedCategory (category_id),
  },
  // TODO: Implement
    setSelectedArticle (article_id);
  // TODO: Implement
    setSelectedCategory (null);

  // TODO: Implement
pr-12325



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
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
  // TODO: Implement
})
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);
pr-12325
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
          <div className="relative mb-8">"
            <Input placeholder="Search for help articles...""
              value={searchQuery}
              onChange={(e) = /> setSearchQuery(e.target.value)}
              className="pl-10""
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />"
          </div>
          <Tabs defaultValue="articles" className="mb-8">"
            <TabsList className="w-full grid grid-cols-3 mb-6">"
              <TabsTrigger value="articles">Articles</TabsTrigger>"
              <TabsTrigger value="faq">FAQ</TabsTrigger>"
              <TabsTrigger value="contact">Contact Us</TabsTrigger>"
            </TabsList>
            <TabsContent value="articles">"
              {!selectedCategory && !selectedArticle && (
                <HelpCategoryList
                  categories={HELP_CATEGORIES}


          <div className="relative mb-8">
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Tabs defaultValue="articles" className="mb-8">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
            <TabsContent value="articles">
              {!selectedCategory && !selectedArticle && (
                <HelpCategoryList 
                  categories={HELP_CATEGORIES} 
import React, { useState } from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { HelpCategoryList } from "./HelpCategoryList",;
import { HelpArticleList } from "./HelpArticleList",;
import { HelpArticleView } from "./HelpArticleView",;
import { HELP_CATEGORIES } from "./help-content",;
<<<<<<< HEAD

import { Search } from 'lucide-react';
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  const handleArticleSelect = (articleId: string) => {;
=======
export default function HelpCenter() {;,
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;,
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;,
  const [searchQuery, setSearchQuery] = useState(""),;
  const handleCategorySelect = (categoryId:,  string) => {;,
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  const handleArticleSelect = (articleId:,  string) => {;,

export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId);
    setSelectedArticle(null);
  };

  const handleArticleSelect = (articleId: string) => {;
    setSelectedArticle(articleId);
  };

  return (
    <>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;
          <p className='text-zion-slate-light mb-6'>;
            Find answers to common questions or get in touch with our support;
            team.;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setSelectedArticle(articleId);
  },;
  const handleBackToCategories = () => {;
    setSelectedCategory(null),;
    setSelectedArticle(null);
  };
  const handleBackToArticles = () => {;
    setSelectedArticle(null);
  };
  return (;
<<<<<<< HEAD

=======
    <>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;
          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;
          </p>;
          <div className='relative mb-8'>;
            <Input placeholder='Search for help articles...''
              value={searchQuery}
              onChange={e = /> setSearchQuery(e && e.target.value)}
              className='pl-10'            />;
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />;
          </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;

          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;
          </p>;
<<<<<<< HEAD

=======
          <div className='relative mb - 8'>;
            <Input ;
              placeholder="Search for help articles...";
              value={searchQuery}
              onChange={(e) = /> setSearchQuery(e.target.value)}
          <div className="relative mb-8">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Input;
              placeholder="Search for help articles...";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10";
            />;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
          </div>;

          <Tabs default_value='articles' className='mb - 8'>;
            <TabsList className='w - full grid grid - cols - 3 mb - 6'>;
              <TabsTrigger value='articles'>Articles</TabsTrigger>;
              <TabsTrigger value='faq'>FAQ</TabsTrigger>;
              <TabsTrigger value='contact'>Contact Us</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Tabs defaultValue="articles" className="mb-8">;
            <TabsList className="w-full grid grid-cols-3 mb-6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
                <HelpCategoryList;
          <div className="relative mb-8">"
</div>
            <Input;"
              placeholder="Search for help articles...""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />"

          <Tabs defaultValue="articles" className="mb-8">"
            <TabsList className="w-full grid grid-cols-3 mb-6">"
              <TabsTrigger value="articles">Articles""
              <TabsTrigger value="faq">FAQ""
              <TabsTrigger value="contact">Contact Us"
            <TabsContent value="articles">"

                <HelpCategoryList;
                  categories={HELP_CATEGORIES} "
import React, { useState } from "react",;""
import { Input } from "@/components/ui/input",;""
import { Button } from "@/components/ui/button",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { HelpCategoryList } from "./HelpCategoryList",;""
import { HelpArticleList } from "./HelpArticleList",;""
import { HelpArticleView } from "./HelpArticleView",;""
import { HELP_CATEGORIES } from "./help-content",;""
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;

  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;
    <>;
      <div className="container mx-auto px-4 py-8">;"
</div>"
        <div className="max-w-4xl mx-auto">;"
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;"
</h1>
          </h1>;"
          <p className="text-zion-slate-light mb-6">;"
</p>
          </p>;"
          <div className='relative mb-8'>;
            <Input;
              placeholder='Search for help articles...
              onChange={e => setSearchQuery(e && e.target.value)}

            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />;

          </div>;
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='max - w-4xl mx - auto'>;
          <h1 className='text - 3xl font - bold mb - 2 bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent'>;
          </h1>;
          <p className='text - zion - slate - light mb - 6'>;
          </p>;
          <div className='relative mb - 8'>;
              placeholder="Search for help articles...";"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;"

          </div>;"
          <Tabs default_value='articles' className='mb - 8'>;

            <TabsList className='w - full grid grid - cols - 3 mb - 6'>;

              <TabsTrigger value='articles'>Articles;
              <TabsTrigger value='faq'>FAQ;
              <TabsTrigger value='contact'>Contact Us;
            ;
          <Tabs defaultValue="articles" className="mb-8">;"
            <TabsList className="w-full grid grid-cols-3 mb-6">;"
              <TabsTrigger value="articles">Articles;""
              <TabsTrigger value="faq">FAQ;""
              <TabsTrigger value="contact">Contact Us;"
            ;"
            <TabsContent value="articles">;"

pr-12325
                  categories={HELP_CATEGORIES} ;
<<<<<<< HEAD


                <>





                <>

=======
                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}                />
              )}
              {selectedCategory && !selectedArticle && (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <>
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {selectedCategory && !selectedArticle && (;
                <>;


                  <Button
                    variant='ghost''
                    onClick={handleBackToCategories}
<<<<<<< HEAD

                    className='mb-4'

=======
                    className='mb-4''
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >
                    ← All Categories
                  </Button>
                  <HelpArticleList
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}                  />
                </>

              )}
<<<<<<< HEAD

=======
              {selectedArticle && (;
                <>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Button
                    variant='ghost''
                    onClick={handleBackToArticles}

<<<<<<< HEAD
                    className='mb-4'                  >

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {selectedCategory && !selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToCategories}
                    className="mb-4"
                  >
                    ← All Categories
                  </Button>
                  <HelpArticleList 
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />;
                </>;
              )}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
                    className="mb-4"
                  >
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    ← Back to Articles
                  </Button>
                  <HelpArticleView articleId={selectedArticle} />
                </>
              )}
            </TabsContent>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <TabsContent value="faq">
              <div className="bg-zion-blue-light/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
<<<<<<< HEAD


=======
                  <div>
                    <h3 className='font-medium text-zion-cyan mb-2'>
                      How do I hire someone on Zion?
                    </h3>
                    <p className='text-zion-slate-light'>
                      To hire talent on Zion, post a job or project, review
                      matches or applications, interview candidates through our
                      platform, and extend an offer. Our secure payment system
                      protects both parties throughout the engagement.
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>
                    <p className="text-zion-slate-light">
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.
                    </p>
                  </div>
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>
                    <p className="text-zion-slate-light">
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.
                    </p>
                  </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>
                    <p className="text-zion-slate-light">
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.
                    </p>
                  </div>


                  <Button;
                    onClick={handleBackToArticles}
                    className='mb-4'                  >

                    variant="ghost""
                    onClick={handleBackToCategories}"
                    className="mb-4""

                    searchQuery={searchQuery}
                  />;

                </>;)

              {selectedArticle && (
                    onClick={handleBackToArticles}"

                  <HelpArticleView articleId={selectedArticle} />



            <TabsContent value="faq">"
              <div className="bg-zion-blue-light/20 rounded-lg p-6">"
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>""
                <div className="space-y-6">"
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>""
                    <p className="text-zion-slate-light">"
pr-12325




                  <div>
<<<<<<< HEAD


=======
                    <h3 className='font-medium text-zion-cyan mb-2'>
                      What are the payment terms?
                    </h3>
                    <p className='text-zion-slate-light'>
                      Zion offers flexible payment options including
                      milestone-based payments, hourly rates, or fixed project
                      fees. Funds are held in escrow until deliverables are
                      approved, ensuring security for both clients and talent.
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>
                    <p className="text-zion-slate-light">
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.
                    </p>
                  </div>
<<<<<<< HEAD
=======
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>""
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>
                    <p className="text-zion-slate-light">
                      Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent.
                    </p>
                  </div>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3>
                    <p className="text-zion-slate-light">
                      You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>""


                    <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3>""

            <TabsContent value='faq'>;

              <div className='bg-zion-blue-light/20 rounded-lg p-6'>;
                <h2 className='text-xl font-semibold mb-4'>;
</h2>
                </h2>;
                <div className='space-y-6'>;
                  <div>;
                    <h3 className='font-medium text-zion-cyan mb-2'>;
</h3>
                    </h3>;
                    <p className='text-zion-slate-light'>;
            <TabsContent value='articles'>;

                  categories={HELP_CATEGORIES}
                  search_query={search_query}                />)}

pr-12325
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
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </svg>
                      </div>
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                        support@ziontechgroup.com
<<<<<<< HEAD


                      </Link>
                    </div>


=======
                      </a>
                      </Link>
                    </div>
<<<<<<< HEAD
                    <div className='flex items-center'>
                      <div className='bg-zion-purple/10 p-2 rounded-full mr-3'>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
<<<<<<< HEAD




=======
                        </svg>
                      <span className='text-zion-slate-light'>
                        +1 302 464 0950
                      </span>
                    </div>
                  </div>
                    
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </svg>
                      </div>
                      <span className="text-zion-slate-light">+1 302 464 0950</span>
                    </div>
                  </div>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light">
                    Open Live Chat
                  </Button>
                </div>
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2>
                  <p className="text-zion-slate-light mb-4">
                    We value your input and are constantly looking to improve our platform.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <Input
<<<<<<< HEAD

                        placeholder="Subject"
                      />

=======
                        placeholder="Subject""
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black"",
                        placeholder="Your feedback or suggestion""
                      />
                    </div>
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">",
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black"
                        placeholder="Your feedback or suggestion"
                      <Input placeholder='Subject' />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>
                    <div>
                      <textarea
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black"
                        placeholder="Your feedback or suggestion"
                      />
                    </div>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">
                      Submit Feedback
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
<<<<<<< HEAD


=======
                          fill='currentColor'>;
                          <path d='M2 3a1 1 0 011-1h2 && 1h2.153a1 1 0 01 && 01.986.836l && 836l.74 4 && 4.435a1 1 0 01-.54 1 && 1.06l-1 && 1.548.773a11 && 773a11.037 11 && 11.037 0 006 && 006.105 6 && 6.105l.774-1 && 1.548a1 1 0 011 && 011.059-.54l4 && 54l4.435.74a1 1 0 01 && 01.836.986V17a1 1 0 01-1 1h-2C7 && 2C7.82 18 2 12 && 12.18 2 5V3z' />;
                        </svg>;
                      </div>;
                      <span className='text-zion-slate-light'>;
            <TabsContent value='contact'>;
              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
                <div className='bg - zion - blue - light / 20 rounded - lg p - 6'>;
                  <h2 className='text - xl font - semibold mb - 4'>;
                    Contact Support;
                  </h2>;
                  <p className='text - zion - slate - light mb - 4'>;
                    Our support team is available 24 / 7 to assist you with any;
                    questions or issues.;
      </div>
    </>
  )
;
              {selectedArticle && (;
                <>;
                  <Button;
                    variant="ghost";
                    onClick={handleBackToArticles}
                    className="mb-4";
                  >;
                    ← Back to Articles;
                  </Button>;
                  <HelpArticleView articleId={selectedArticle} />;
                </>;
              )}
            </TabsContent>;
            <TabsContent value="faq">;
              <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>;
                <div className="space-y-6">;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>;
                    <p className="text-zion-slate-light">;
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>;
                    <p className="text-zion-slate-light">;
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>;
                    <p className="text-zion-slate-light">;
                      Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3>;
                    <p className="text-zion-slate-light">;
                      You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;
            <TabsContent value="contact">;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
                <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    Our support team is available 24/7 to assist you with any questions or issues.;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </p>;
                  <div className="space-y-4">;
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />;
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />;
                        </svg>;
                      </div>;
<<<<<<< HEAD


=======
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">;",
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">;
                        support@ziontechgroup.com;
                      </a>;
                    </div>;
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />;
                        </svg>;
                      </div>;

                      <span className='text - zion - slate - light'>;
                        +1 302 464 0950;
                      </span>;
                    </div>;
                  </div>;
                  <Button className='w - full mt - 6 bg - zion - purple hover:bg - zion - purple - light'>;',
                    Open Live Chat;
                  </Button>;
                </div>;
                <div className='bg - zion - blue - light / 20 rounded - lg p - 6'>;
                  <h2 className='text - xl font - semibold mb - 4'>;
                    Feedback & Suggestions;
                  </h2>;
                  <p className='text - zion - slate - light mb - 4'>;
                    We value your input and are constantly looking to improve;
                    our platform.;
                  </p>;
                  <form className='space - y-4'>;
                    <div>;
                      <Input placeholder='Your email' />;
                    </div>;
                    <div>;
                      <Input placeholder='Subject' />;
                    </div>;
                    <div>;
<<<<<<< HEAD

=======
                      <textarea;
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black";,
                        placeholder="Your feedback or suggestion";
                      />;
                    </div>;
                    <Button className='w - full bg - zion - cyan hover:bg - zion - cyan / 80'>;',
                      <span className="text-zion-slate-light">+1 302 464 0950</span>;
                    </div>;
                  </div>;
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light">;
                    Open Live Chat;
                  </Button>;
                </div>;
                <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                  <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    We value your input and are constantly looking to improve our platform.;
                  </p>;
                  <form className="space-y-4">;
                    <div>;
                      <Input;
                        placeholder="Your email";
                      />;
                    </div>;
                    <div>;
                      <Input;
                        placeholder="Subject";
                      />;
                    </div>;
                    <div>;
                      <textarea;
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black";
                        placeholder="Your feedback or suggestion";
                      />;
                    </div>;
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      Submit Feedback;
                    </Button>;
                  </form>;
                </div>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
    </>);
}
      </div>
    </>
<<<<<<< HEAD


=======
  )
}}}}}}})))
    </>;
  );
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533

                    category_id={selected_category}
                    search_query={search_query}                  />;

                </>)}
              {selected_article && (
                    on_click={handleBackToArticles}
                    className='mb - 4'                  >;

                  <HelpArticleView article_id={selected_article} />;
)

              <div className='bg - zion - blue - light / 20 rounded - lg p - 6'>;
                <h2 className='text - xl font - semibold mb - 4'>;
                <div className='space - y-6'>;
                    <h3 className='font - medium text - zion - cyan mb - 2'>;
                    <p className='text - zion - slate - light'>;
            <TabsContent value="contact">"
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">"
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>""
                  <p className="text-zion-slate-light mb-4">"
                  <div className="space-y-4">"
                    <div className="flex items-center">"
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">"
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">"
</svg>"
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />"
</path>"
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />"
</path>
                        </svg>
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">"
</a>
                      </a>;
                    <div className='flex items-center'>;
                      <div className='bg-zion-purple/10 p-2 rounded-full mr-3'>;
                        <svg;
                          xmlns='http://www.w3.org/2000/svg
                          className='h-5 w-5 text-zion-purple
                          viewBox='0 0 20 20
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />"
                      <span className="text-zion-slate-light">+1 302 464 0950</span>"


                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light">"

                  <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2>""
                  <form className="space-y-4">"
</form>
                        placeholder="Your email""
                      />

                        placeholder="Subject""

                      <textarea;"
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black"""
                        placeholder="Your feedback or suggestion""
</textarea>


                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">"

                          <path d='M2 3a1 1 0 011-1h2 && 1h2.153a1 1 0 01 && 01.986.836l && 836l.74 4 && 4.435a1 1 0 01-.54 1 && 1.06l-1 && 1.548.773a11 && 773a11.037 11 && 11.037 0 006 && 006.105 6 && 6.105l.774-1 && 1.548a1 1 0 011 && 011.059-.54l4 && 54l4.435.74a1 1 0 01 && 01.836.986V17a1 1 0 01-1 1h-2C7 && 2C7.82 18 2 12 && 12.18 2 5V3z' />;
                        </svg>;
                      <span className='text-zion-slate-light'>;
</span>
            <TabsContent value='contact'>;

              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
                  <p className='text - zion - slate - light mb - 4'>;
                  <div className="space-y-4">;"
                    <div className="flex items-center">;"
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;"
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;"
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />;"
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />;"
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">;"
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />;"
                      <span className='text - zion - slate - light'>;
                      </span>;
                  <Button className='w - full mt - 6 bg - zion - purple hover:bg - zion - purple - light'>;

                  <form className='space - y-4'>;
                      <Input placeholder='Your email' />;

                      <Input placeholder='Subject' />;


                      <textarea;
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-black";""
                        placeholder="Your feedback or suggestion";"
                    <Button className='w - full bg - zion - cyan hover:bg - zion - cyan / 80'>;

                  </form>;
    </>);

    </>
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba
