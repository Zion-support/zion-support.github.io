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
import { Search } from "lucide-react",export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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
    return (
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

          <div className="relative mb-8">
            <Input"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}"
              className="pl-10"
            />"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Tabs defaultValue="articles" className="mb-8">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
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
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  },;
  const handleArticleSelect = (articleId: string) => {;
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;
          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;
          </p>;
          ;
          <div className="relative mb-8">;
            <Input;
              placeholder="Search for help articles...";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10";
            />;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
          </div>;
          ;
          <Tabs defaultValue="articles" className="mb-8">;
            <TabsList className="w-full grid grid-cols-3 mb-6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;
            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
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

                  <div>
                    <h3 className="font-medium text-zion-cyan mb-2">
                      How do I contact support?
                    </h3>
                    <p className="text-zion-slate-light">
                      You can reach our support team through the chat widget at
                      the bottom right of any page, by emailing
                      support@ziontechgroup.com, or by scheduling a call with
                      our team through the Contact tab.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

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
