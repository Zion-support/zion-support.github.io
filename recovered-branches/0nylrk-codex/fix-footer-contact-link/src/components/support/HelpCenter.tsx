<<<<<<< HEAD

=======
<<<<<<< HEAD
import { Search } from "lucide-react";
export default function HelpCenter() {};
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);"
  const [searchQuery, setSearchQuery] = useState("");
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCategoryList } from "./HelpCategoryList";
import { HelpArticleList } from "./HelpArticleList";
import { HelpArticleView } from "./HelpArticleView";
import { HELP_CATEGORIES } from "./help-content";
import { AppLayout } from "@/layout/AppLayout";
import { Search } from "lucide-react";
export default function HelpCenter() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState($2);
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory($2);
    setSelectedArticle(null)
  },
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {HelpCategoryList} from "./HelpCategoryList";
import {HelpArticleList} from "./HelpArticleList";
import {HelpArticleView} from "./HelpArticleView";
import {HELP_CATEGORIES} from "./help-content";
import {AppLayout} from "@/layout/AppLayout";
import {Search} from "lucide-react";
export default function HelpCenter() {;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("");"
import React, { useState } from "react","
import { Input } from "@/components/ui/input","
import { Button } from "@/components/ui/button","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { HelpCategoryList } from "./HelpCategoryList","
import { HelpArticleList } from "./HelpArticleList","
import { HelpArticleView } from "./HelpArticleView","
import { HELP_CATEGORIES } from "./help-content","
import { AppLayout } from "@/layout/AppLayout","
import { Search } from "lucide-react",export default function HelpCenter() {"
  }
  const handleCategorySelect = ("categoryId": string) => {
    }
=======
  const [searchQuery, setSearchQuery] = useState("");
import React, { useState } from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { HelpCategoryList } from "./HelpCategoryList",
import { HelpArticleList } from "./HelpArticleList",
import { HelpArticleView } from "./HelpArticleView",
import { HELP_CATEGORIES } from "./help-content",
import { AppLayout } from "@/layout/AppLayout",
import { Search } from "lucide-react",
export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState(""),

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (categoryId: string) => {
>>>>>>> origin/chore/fix-lint-and-merge
    setSelectedCategory(categoryId),
    setSelectedArticle(null)
  },
  
  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId)
  },
>>>>>>> merged-prs-20250907-203621
  
  const handleArticleSelect = $2;
  const handleBackToCategories = () => {
<<<<<<< HEAD
    setSelectedCategory($2);
    setSelectedArticle(null)
  },
  
  const handleBackToArticles = $2;
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-zion-slate-light mb-6">
            Find answers to common questions or get in touch with our support
            team.
          </p>

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
=======
    setSelectedCategory(null),
    setSelectedArticle(null)
  },
  
  const handleBackToArticles = () => {
    setSelectedArticle(null)
  },

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {HelpCategoryList} from "./HelpCategoryList";
import {HelpArticleList} from "./HelpArticleList";
import {HelpArticleView} from "./HelpArticleView";
import {HELP_CATEGORIES} from "./help-content";
import {AppLayout} from "@/layout/AppLayout";
import {Search} from "lucide-react";
export default function HelpCenter() {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleCategorySelect = (categoryId: string) => {
    (setSelectedCategory(categoryId), setSelectedArticle(null));
  }
  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId);
  }
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
  }
  const handleBackToArticles = () => {
    setSelectedArticle(null);
  }



import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {HelpCategoryList} from "./HelpCategoryList";
import {HelpArticleList} from "./HelpArticleList";
import {HelpArticleView} from "./HelpArticleView";
import {HELP_CATEGORIES} from "./help-content";
import {AppLayout} from "@/layout/AppLayout";
import {Search} from "lucide-react";
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
import React, { useState } from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { HelpCategoryList } from "./HelpCategoryList",
import { HelpArticleList } from "./HelpArticleList",
import { HelpArticleView } from "./HelpArticleView",
import { HELP_CATEGORIES } from "./help-content",
import { AppLayout } from "@/layout/AppLayout",
import { Search } from "lucide-react",
export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState(""),

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
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {HelpCategoryList} from "./HelpCategoryList";
import {HelpArticleList} from "./HelpArticleList";
import {HelpArticleView} from "./HelpArticleView";
import {HELP_CATEGORIES} from "./help-content";
import {AppLayout} from "@/layout/AppLayout";
import {Search} from "lucide-react";
export default function HelpCenter() {;
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId),
    setSelectedArticle(null)
  },
  
  const handleArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId)
  },
  
  const handleBackToCategories = () => {
    setSelectedCategory(null),
    setSelectedArticle(null)
  },
  
  const handleBackToArticles = () => {
    setSelectedArticle(null)
  },
  

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Help Center;
          </h1>"
          <p className="text-zion-slate-light mb-6">
            Find answers to common questions or get in touch with our support;
            team.
          </p>
<<<<<<< HEAD
"
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="relative mb-8">
            <Input"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}"
              className="pl-10"
            />"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
<<<<<<< HEAD
"
          <Tabs defaultValue="articles" className="mb-8">"
            <TabsList className="w-full grid grid-cols-3 mb-6">"
              <TabsTrigger value="articles">Articles</TabsTrigger>"
              <TabsTrigger value="faq">FAQ</TabsTrigger>"
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
<<<<<<< HEAD
import { Input } from "@/components/ui/input";"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { HelpCategoryList } from "./HelpCategoryList",;"
import { HelpArticleList } from "./HelpArticleList",;"
import { HelpArticleView } from "./HelpArticleView",;"
import { HELP_CATEGORIES } from "./help-content",;"
import { AppLayout } from "@/layout/AppLayout",;"
import { Search } from "lucide-react",;"
=======

                  categories={HELP_CATEGORIES}
                <HelpCategoryList 
                  categories={HELP_CATEGORIES} 

>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { HelpCategoryList } from "./HelpCategoryList",;
import { HelpArticleList } from "./HelpArticleList",;
import { HelpArticleView } from "./HelpArticleView",;
import { HELP_CATEGORIES } from "./help-content",;
import { AppLayout } from "@/layout/AppLayout",;
import { Search } from "lucide-react",;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  const handleArticleSelect = (articleId: string) => {;
<<<<<<< HEAD
=======
    setSelectedArticle(articleId);
  },;
  const handleBackToCategories = () => {;
    setSelectedCategory(null),;

  const handleBackToArticles = () => {;
    setSelectedArticle(null)
};
  return (;

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Tabs defaultValue="articles" className="mb-8">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
<<<<<<< HEAD
<TabsContent value="articles">
              {!selectedCategory && !selectedArticle && (
<HelpCategoryList
                  categories={HELP_CATEGORIES}
                <HelpCategoryList
                  categories={HELP_CATEGORIES}
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
import { AppLayout } from "@/layout/AppLayout",;
import { Search } from "lucide-react",;
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
=======
            <TabsContent value="articles">
              {!selectedCategory && !selectedArticle && (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import { Input  } from '@/components / ui / input';
import { Button  } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { HelpCategoryList  } from './HelpCategoryList';
import { HelpArticleList  } from './HelpArticleList';
import { HelpArticleView  } from './HelpArticleView';
import { HELP_CATEGORIES  } from './help - content';
import { AppLayout  } from '@/layout / AppLayout';
import { Search  } from './lucide-react';
export default /**
 * HelpCenter - Function description
 */
function HelpCenter() {
  const [selected_category, setSelectedCategory] = useState < string | null>(null);
  const [selected_article, setSelectedArticle] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ("");
;
  const handleCategorySelect = (category_id: string) =>: any {
    (setSelectedCategory (category_id), setSelectedArticle (null));
  }
;
  const handleArticleSelect = (article_id: string) =>: any {
    setSelectedArticle (article_id);
  }
;
  const handleBackToCategories = () =>: any {
    setSelectedCategory (null);
    setSelectedArticle (null);
  }
;
  const handleBackToArticles = () =>: any {
    setSelectedArticle (null);
  }
;
  return (
    <AppLayout>;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="max - w-4xl mx - auto">;
          <h1 className="text - 3xl font - bold mb - 2 bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;
            Help Center;
          </h1>;
          <p className="text - zion - slate - light mb - 6">;
            Find answers to common questions or get in touch with our support;
            team.;
          </p>;
          <div className="relative mb - 8">;
            <Input;
              placeholder="Search for help articles...";
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
              className="pl - 10";
            />;
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400" />;
          </div>;
          <Tabs default_value="articles" className="mb - 8">;
            <TabsList className="w - full grid grid - cols - 3 mb - 6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
            <TabsContent value="articles">;
              {!selected_category && !selected_article && (
                <HelpCategoryList;
                  categories={HELP_CATEGORIES}
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  };
  const handleArticleSelect = (articleId: string) => {;
    setSelectedArticle(articleId);
  };
  const handleBackToCategories = () => {;
    setSelectedCategory(null);
    setSelectedArticle(null);
  };
  const handleBackToArticles = () => {;
    setSelectedArticle(null);
  };
  return (
<<<<<<< HEAD

import React, { useState } from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { HelpCategoryList } from "./HelpCategoryList",;
import { HelpArticleList } from "./HelpArticleList",;
import { HelpArticleView } from "./HelpArticleView",;
import { HELP_CATEGORIES } from "./help-content",;
import { AppLayout } from "@/layout/AppLayout",;
import { Search } from "lucide-react",;
;
export default function HelpCenter() {;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null),;
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  const handleCategorySelect = (categoryId:string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  ;
  const handleArticleSelect = (articleId:string) => {;
    setSelectedArticle(articleId);
  },;
  ;
  const handleBackToCategories = () => {;
    setSelectedCategory(null),;
    setSelectedArticle(null),;
  },;
  ;
  const handleBackToArticles = () => {;
    setSelectedArticle(null),;
  },;
  ;
  return (;
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  const handleArticleSelect = (articleId: string) => {;
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <AppLayout>;
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
<<<<<<< HEAD
          ;
>>>>>>> merged-prs-20250907-203621
          <div className="relative mb-8">;
            <Input;
              placeholder="Search for help articles...";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
=======
=======

          ;
          <div className="relative mb-8">;
            <Input;
              placeholder="Search for help articles...";
              value={searchQuery}
<<<<<<< HEAD
              onChange={(e) => setSearchQuery(e.target.value)}

=======
              onChange={(e) => setSearchQuery(e && e.target.value)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              className="pl-10";
            />;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
          <Tabs defaultValue="articles" className="mb-8">;
            <TabsList className="w-full grid grid-cols-3 mb-6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
                <HelpCategoryList;
                  categories={HELP_CATEGORIES} ;
                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}
                />
              )}
<<<<<<< HEAD

=======
=======

<<<<<<< HEAD
                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}
                />
=======
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <HelpCategoryList
                  categories={HELP_CATEGORIES} 

                <HelpCategoryList 
                  categories={HELP_CATEGORIES} 

                  onCategorySelect={handleCategorySelect}


              


              
>>>>>>> merged-prs-20250907-203621
              {selectedCategory && !selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToCategories}
                    className="mb-4"
                  >
                    ← All Categories
                  </Button>
<<<<<<< HEAD
                  <HelpArticleList
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />
                </>
              )}
              {selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
=======

<<<<<<< HEAD
                  onCategorySelect={handleCategorySelect}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {selectedCategory && !selectedArticle && (;
                <>;
                  <Button
                    variant="ghost"
                    onClick={handleBackToCategories}
                    className="mb-4">;
                    ← All Categories;
                  </Button>;

<<<<<<< HEAD
                  <HelpArticleList 

                  <HelpArticleList
            ;
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
                <HelpCategoryList ;
                  categories={HELP_CATEGORIES} ;
                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}
                />;
              )}
              ;
              {selectedCategory && !selectedArticle && (;
                <>;
                  <Button;
                    variant="ghost";
                    onClick={handleBackToCategories}
                    className="mb-4";
                  >;
                    ← All Categories;
                  </Button>;
                  <HelpArticleList ;
=======
                  <HelpArticleList
=======

                  <HelpArticleList 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />;
                </>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              )}

                <HelpCategoryList
                  categories={HELP_CATEGORIES}
                  onCategorySelect={handleCategorySelect}
                  searchQuery={searchQuery}
                />
              )}

<<<<<<< HEAD
=======
              


              {selectedArticle && (
                <>
<<<<<<< HEAD

              {selectedArticle && (;
                <>;
=======
=======

              {selectedArticle && (;
                <>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
                    className="mb-4">;
<<<<<<< HEAD
              ;
              {selectedArticle && (;
                <>;
                  <Button;
                    variant="ghost";
                    onClick={handleBackToArticles}
                    className="mb-4";
                  >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    ← Back to Articles;

                  </Button>;
                  <HelpArticleView articleId={selectedArticle} />;
                </>;
              )}

<<<<<<< HEAD
            </TabsContent>
"
            <TabsContent value="faq">"
              <div className="bg-zion-blue-light/20 rounded-lg p-6">"
                <h2 className="text-xl font-semibold mb-4">
                  Frequently Asked Questions;
                </h2>
=======

<<<<<<< HEAD
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<HelpArticleList
                  <HelpArticleList
                  <HelpArticleList 
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />
                </>
              )}
              
              {selectedArticle && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
>>>>>>> merged-prs-20250907-203621
                    className="mb-4"
                  >
                    ← Back to Articles
                  </Button>
                  <HelpArticleView articleId={selectedArticle} />
                </>
              )}
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value="faq">
=======
<TabsContent value="faq">
>>>>>>> merged-prs-20250907-203621
              <div className="bg-zion-blue-light/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Frequently Asked Questions
                </h2>
<<<<<<< HEAD
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How does the AI matching work?
                    </h3>
                    <p className="text-zion-slate-light">
                      Our AI matching algorithm analyzes your requirements and
                      preferences to match you with the most compatible talent
                      or services. The process takes into account skills
                      experience, availability, and past performance to ensure
                      optimal results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How do I hire someone on Zion?
                    </h3>
                    <p className="text-zion-slate-light">
                      To hire talent on Zion, post a job or project, review
                      matches or applications, interview candidates through our
                      platform, and extend an offer. Our secure payment system
                      protects both parties throughout the engagement.
                    </p>
                  </div>
=======
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
=======
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-6">
                  <div>"
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How does the AI matching work?
                    </h3>"
                    <p className="text-zion-slate-light">
<<<<<<< HEAD

=======
                      Our AI matching algorithm analyzes your requirements and
                      preferences to match you with the most compatible talent
<<<<<<< HEAD
or services. The process takes into account skills
=======
                      or services. The process takes into account skills
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      experience, availability, and past performance to ensure
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      optimal results.
                  <Button;"
                    variant="ghost""
                    onClick={handleBackToArticles}"
                    className="mb-4">;"
</Button>
                  </Button>;
                  <HelpArticleView articleId={selectedArticle} />;
</HelpArticleView>
                </>;)
              )}
            </TabsContent>
"
            <TabsContent value="faq">"
</TabsContent>"
              <div className="bg-zion-blue-light/20 rounded-lg p-6">"
</div>"
                <h2 className="text-xl font-semibold mb-4">"
</h2>
                </h2>
"
                <div className="space-y-6">"
</div>
                  <div>
</div>"
                    <h3 className="font-medium text-zion-cyan mb-2">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light">"
</p>
                    </p>
                  </div>
<<<<<<< HEAD

                  <div>"
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How do I hire someone on Zion?
                    </h3>"
                    <p className="text-zion-slate-light">
<<<<<<< HEAD
                      To hire talent on Zion, post a job or project, review;
                      matches or applications, interview candidates through our;
                      platform, and extend an offer. Our secure payment system;
                      protects both parties throughout the engagement.
</div>"
                    <h3 className="font-medium text-zion-cyan mb-2">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light">"
</p>
                    </p>
                  </div>

                  <div>"
                    <h3 className="font-medium text-zion-cyan mb-2">
                      What are the payment terms?
                    </h3>"
                    <p className="text-zion-slate-light">
                      Zion offers flexible payment options including;
                      milestone-based payments, hourly rates, or fixed project;
                      fees. Funds are held in escrow until deliverables are;
                      approved, ensuring security for both clients and talent.
</div>"
                    <h3 className="font-medium text-zion-cyan mb-2">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light">"
</p>
                    </p>
                  </div>

                  <div>"
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How do I contact support?
                    </h3>"
                    <p className="text-zion-slate-light">
                      You can reach our support team through the chat widget at;
                      the bottom right of any page, by emailing;
                      support@ziontechgroup.com, or by scheduling a call with;
                      our team through the Contact tab.
</div>"
                    <h3 className="font-medium text-zion-cyan mb-2">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light">"
</p>

=======
                      To hire talent on Zion, post a job or project, review
                      matches or applications, interview candidates through our
                      platform, and extend an offer. Our secure payment system
                      protects both parties throughout the engagement.
                    </p>
                  </div>
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">
                      What are the payment terms?
                    </h3>
                    <p className="text-zion-slate-light">
                      Zion offers flexible payment options including
                      milestone-based payments, hourly rates, or fixed project
                      fees. Funds are held in escrow until deliverables are
                      approved, ensuring security for both clients and talent.
                    </p>
                  </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How do I contact support?
                    </h3>
                    <p className="text-zion-slate-light">
                      You can reach our support team through the chat widget at
                      the bottom right of any page, by emailing
                      support@ziontechgroup.com, or by scheduling a call with
                      our team through the Contact tab.
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Support
                  </h2>
                  <p className="text-zion-slate-light mb-4">
                    Our support team is available 24/7 to assist you with any
                    questions or issues.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-zion-purple"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
=======
<<<<<<< HEAD
"
            <TabsContent value="contact">"
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">"
                <div className="bg-zion-blue-light/20 rounded-lg p-6">"
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Support;
                  </h2>"
                  <p className="text-zion-slate-light mb-4">
                    Our support team is available 24/7 to assist you with any;
                    questions or issues.
                  </p>
"
                  <div className="space-y-4">"
                    <div className="flex items-center">"
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg"
                          xmlns="http://www.w3.org/2000/svg""
                          className="h-5 w-5 text-zion-purple""
                          viewBox="0 0 20 20""
                          fill="currentColor"
                        >"
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />"
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <a"
                        href="mailto:support@ziontechgroup.com""
                        className="text-zion-cyan hover:underline"
                      >

  );

}

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Support
                  </h2>
                  <p className="text-zion-slate-light mb-4">
                    Our support team is available 24/7 to assist you with any
                    questions or issues.
                  </p>
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-zion-purple"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
>>>>>>> merged-prs-20250907-203621
                      <a
                        href="mailto:support@ziontechgroup.com"
                        className="text-zion-cyan hover:underline"
                      >
                        support@ziontechgroup.com
<<<<<<< HEAD
                      </Link>
                    </div>
=======
<<<<<<< HEAD
                      </Link>
                    </div>

=======
                      </a>
                    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    <div className="flex items-center">
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-zion-purple"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="text-zion-slate-light">
                        +1 302 464 0950
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light">
                    Open Live Chat
                  </Button>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                <div className="bg-zion-blue-light/20 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Feedback & Suggestions
                  </h2>
                  <p className="text-zion-slate-light mb-4">
                    We value your input and are constantly looking to improve
                    our platform.
                  </p>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your email" />
                    </div>
                    <div>
                      <Input placeholder="Subject" />
                    </div>
                    <div>
                      <textarea
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-white"
                        placeholder="Your feedback or suggestion"
                      />
                    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">
                      Submit Feedback
                    </Button>
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
  );
}
  )
;
              {selectedArticle && (;
                <>;
                  <Button;
                    variant="ghost";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </TabsContent>;
            ;
            <TabsContent value="faq">;
              <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>;
                ;
                <div className="space-y-6">;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>;
                    <p className="text-zion-slate-light">;
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.;
                    </p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>;
                    <p className="text-zion-slate-light">;
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.;
                    </p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>;
                    <p className="text-zion-slate-light">;
                      Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3>;
                    <p className="text-zion-slate-light">;
                      You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;
            ;
            <TabsContent value="contact">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                  <h2 className="text-xl font-semibold mb-4">Contact Support</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    Our support team is available 24/7 to assist you with any questions or issues.;
                  </p>;
                  ;
                  <div className="space-y-4">;
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />;
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />;
                        </svg>;
                      </div>;
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">;
                        support@ziontechgroup.com;
                      </a>;
                    </div>;
                    ;
                    <div className="flex items-center">;
                      <div className="bg-zion-purple/10 p-2 rounded-full mr-3">;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zion-purple" viewBox="0 0 20 20" fill="currentColor">;
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />;
                        </svg>;
                      </div>;
                      <span className="text-zion-slate-light">+1 302 464 0950</span>;
                    </div>;
                  </div>;
                  ;
                  <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light">;
                    Open Live Chat;
                  </Button>;
                </div>;
                ;
                <div className="bg-zion-blue-light/20 rounded-lg p-6">;
                  <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    We value your input and are constantly looking to improve our platform.;
                  </p>;
                  ;
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
                      <textarea ;
                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-white";
                        placeholder="Your feedback or suggestion";
                      />;
                    </div>;
                    ;
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80">;
                      Submit Feedback;
                    </Button>;
                  </form>;
                </div>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </AppLayout>);
}    </AppLayout>);
}
<<<<<<< HEAD

    </AppLayout>;
  );}
 export default function HelpCenter () {};
  const [selectedCategory, setSelectedCategory] = useState<string | null> (null);
<<<<<<< HEAD
const [selectedArticle, setSelectedArticle] = useState<string | null> (null);
const [searchQuery, setSearchQuery] = useState ("");"
  }
=======
const [selectedArticle, setSelectedArticle] = useState<string | null> (null);"
const [searchQuery, setSearchQuery] = useState ("");
const handleCategorySelect = (categoryId: string) => {}
>>>>>>> origin/chore/fix-lint-and-merge
  setSelectedCategory (categoryId);
setSelectedArticle (null) 
};
<<<<<<< HEAD
  }
=======
const handleArticleSelect = (articleId: string) => {}
  setSelectedArticle (articleId) 
};
const handleBackToCategories = () => {}
>>>>>>> origin/chore/fix-lint-and-merge
  setSelectedCategory (null);
setSelectedArticle (null) 
};
<<<<<<< HEAD
  }
  setSelectedArticle (null)
};
> <Input className="pl-10" /> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> </div> <Tabs defaultValue=" articles"className="mb-8"> <TabsList className="w-full grid grid-cols-3 mb-6"> <TabsTrigger value=" articles">Articles</TabsTrigger> <TabsTrigger value=" faq">FAQ</TabsTrigger> <TabsTrigger value=" contact">Contact Us</TabsTrigger> </TabsList> <HelpCategoryList categories= {"
  }
  HELP CATEGORIES
}onCategorySelect= {
  }
  handleCategorySelect
}searchQuery= {
  }
  searchQuery
} />)
}{
  }
  selectedCategory && !selectedArticle && (<> <Button variant=" ghost"onClick= {"
  }
  handleBackToCategories
}className="mb-4"> ← All Categories </Button> <HelpArticleList categoryId= {"
  }
  selectedCategory
}onArticleSelect= {
  }
  handleArticleSelect
}searchQuery= {
  }
  searchQuery
} /> </>)
}{
  }
  selectedArticle && (<> <Button variant=" ghost"onClick= {"
  }
  handleBackToArticles
}className="mb-4"> ← Back to Articles </Button> <HelpArticleView articleId= {"
  }
  selectedArticle
} /> </>)
}</TabsContent> <TabsContent value=" faq"> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2> <div className="space-y-6"> <div> <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3> <p className="text-zion-slate-light"> Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3> <p className="text-zion-slate-light"> To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3> <p className="text-zion-slate-light"> Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3> <p className="text-zion-slate-light"> You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab. </p> </div> </div> </div> </TabsContent> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Contact Support</h2> <p className="text-zion-slate-light mb-4"> Our support team is available 24/7 to assist you with any questions or issues. </p> <div className="space-y-4"> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" "http"://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /> <path d=" M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /> </svg> </div> <a href=""mailto":support@ziontechgroup.com"className="text-zion-cyan "hover":underline"> support@ziontechgroup.com </Link> </div> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" "http"://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /> </svg> </div> <span className="text-zion-slate-light">+1 302 464 0950</span> </div> </div> <Button className="w-full mt-6 bg-zion-purple "hover":bg-zion-purple-light"> Open Live Chat </Button> </div> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2> <p className="text-zion-slate-light mb-4"> We value your input and are constantly looking to improve our platform. </p> <form className="space-y-4"> <div> <Input placeholder=" Your email" /> </div> <div> <Input placeholder=" Subject" /> </div> <div> <textarea className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-white"placeholder=" Your feedback or suggestion" /> </div> <Button className="w-full bg-zion-cyan "hover":bg-zion-cyan/80"> Submit Feedback </Button> </form> </div> </div> </TabsContent> </Tabs> </div> </div> </AppLayout>)"
}
);
=======
const handleBackToArticles = () => {}
  setSelectedArticle (null) 
};"
> <Input className="pl-10"/> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/> </div> <Tabs defaultValue=" articles"className="mb-8"> <TabsList className="w-full grid grid-cols-3 mb-6"> <TabsTrigger value=" articles">Articles</TabsTrigger> <TabsTrigger value=" faq">FAQ</TabsTrigger> <TabsTrigger value=" contact">Contact Us</TabsTrigger> </TabsList> <HelpCategoryList categories= {}
  HELP CATEGORIES;
}onCategorySelect= {}
  handleCategorySelect;
}searchQuery= {}
  searchQuery;
}/>) 
}{"
  selectedCategory && !selectedArticle && (<> <Button variant=" ghost"onClick= {}
  handleBackToCategories "
}className="mb-4"> ← All Categories </Button> <HelpArticleList categoryId= {}
  selectedCategory;
}onArticleSelect= {}
  handleArticleSelect;
}searchQuery= {}
  searchQuery;
}/> </>) 
}{"
  selectedArticle && (<> <Button variant=" ghost"onClick= {}
  handleBackToArticles "
}className="mb-4"> ← Back to Articles </Button> <HelpArticleView articleId= {}
  selectedArticle;
}/> </>) "
}</TabsContent> <TabsContent value=" faq"> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2> <div className="space-y-6"> <div> <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3> <p className="text-zion-slate-light"> Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3> <p className="text-zion-slate-light"> To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3> <p className="text-zion-slate-light"> Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3> <p className="text-zion-slate-light"> You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab. </p> </div> </div> </div> </TabsContent> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Contact Support</h2> <p className="text-zion-slate-light mb-4"> Our support team is available 24/7 to assist you with any questions or issues. </p> <div className="space-y-4"> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" http://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/> <path d=" M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/> </svg> </div> <a href="mailto:support@ziontechgroup.com"className="text-zion-cyan hover:underline"> support@ziontechgroup.com </Link> </div> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" http://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/> </svg> </div> <span className="text-zion-slate-light">+1 302 464 0950</span> </div> </div> <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light"> Open Live Chat </Button> </div> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2> <p className="text-zion-slate-light mb-4"> We value your input and are constantly looking to improve our platform. </p> <form className="space-y-4"> <div> <Input placeholder=" Your email"/> </div> <div> <Input placeholder=" Subject"/> </div> <div> <textarea className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-white"placeholder=" Your feedback or suggestion"/> </div> <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80"> Submit Feedback </Button> </form> </div> </div> </TabsContent> </Tabs> </div> </div> </AppLayout>) 
});
>>>>>>> origin/chore/fix-lint-and-merge
}

=======
<<<<<<< HEAD
    </AppLayout>;
  );}
 export default function HelpCenter () {
  const [selectedCategory, setSelectedCategory] = useState<string | null> (null);
const [selectedArticle, setSelectedArticle] = useState<string | null> (null);
const [searchQuery, setSearchQuery] = useState ("");
const handleCategorySelect = (categoryId: string) => {
  setSelectedCategory (categoryId);
setSelectedArticle (null) 
};
const handleArticleSelect = (articleId: string) => {
  setSelectedArticle (articleId) 
};
const handleBackToCategories = () => {
  setSelectedCategory (null);
setSelectedArticle (null) 
};
const handleBackToArticles = () => {
  setSelectedArticle (null) 
};
> <Input className="pl-10"/> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/> </div> <Tabs defaultValue=" articles"className="mb-8"> <TabsList className="w-full grid grid-cols-3 mb-6"> <TabsTrigger value=" articles">Articles</TabsTrigger> <TabsTrigger value=" faq">FAQ</TabsTrigger> <TabsTrigger value=" contact">Contact Us</TabsTrigger> </TabsList> <HelpCategoryList categories= {
  HELP CATEGORIES 
}onCategorySelect= {
  handleCategorySelect 
}searchQuery= {
  searchQuery 
}/>) 
}{
  selectedCategory && !selectedArticle && (<> <Button variant=" ghost"onClick= {
  handleBackToCategories 
}className="mb-4"> ← All Categories </Button> <HelpArticleList categoryId= {
  selectedCategory 
}onArticleSelect= {
  handleArticleSelect 
}searchQuery= {
  searchQuery 
}/> </>) 
}{
  selectedArticle && (<> <Button variant=" ghost"onClick= {
  handleBackToArticles 
}className="mb-4"> ← Back to Articles </Button> <HelpArticleView articleId= {
  selectedArticle 
}/> </>) 
}</TabsContent> <TabsContent value=" faq"> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2> <div className="space-y-6"> <div> <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3> <p className="text-zion-slate-light"> Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3> <p className="text-zion-slate-light"> To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3> <p className="text-zion-slate-light"> Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent. </p> </div> <div> <h3 className="font-medium text-zion-cyan mb-2">How do I contact support?</h3> <p className="text-zion-slate-light"> You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through the Contact tab. </p> </div> </div> </div> </TabsContent> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Contact Support</h2> <p className="text-zion-slate-light mb-4"> Our support team is available 24/7 to assist you with any questions or issues. </p> <div className="space-y-4"> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" http://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/> <path d=" M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/> </svg> </div> <a href="mailto:support@ziontechgroup.com"className="text-zion-cyan hover:underline"> support@ziontechgroup.com </Link> </div> <div className="flex items-center"> <div className="bg-zion-purple/10 p-2 rounded-full mr-3"> <svg xmlns=" http://www.w3.org/2000/svg"className="h-5 w-5 text-zion-purple"viewBox=" 0 0 20 20"fill=" currentColor"> <path d=" M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/> </svg> </div> <span className="text-zion-slate-light">+1 302 464 0950</span> </div> </div> <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-light"> Open Live Chat </Button> </div> <div className="bg-zion-blue-light/20 rounded-lg p-6"> <h2 className="text-xl font-semibold mb-4">Feedback & Suggestions</h2> <p className="text-zion-slate-light mb-4"> We value your input and are constantly looking to improve our platform. </p> <form className="space-y-4"> <div> <Input placeholder=" Your email"/> </div> <div> <Input placeholder=" Subject"/> </div> <div> <textarea className="w-full min-h-[120px] px-3 py-2 rounded-md border border-zion-blue-light bg-zion-blue/20 text-white"placeholder=" Your feedback or suggestion"/> </div> <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80"> Submit Feedback </Button> </form> </div> </div> </TabsContent> </Tabs> </div> </div> </AppLayout>) 
}
);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;

}
<<<<<<< HEAD
;
=======
>>>>>>> merged-prs-20250907-203621
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
