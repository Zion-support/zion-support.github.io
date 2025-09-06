
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebounce } from '@/hooks/useDebounce'
import { GradientHeading } from '@/components/GradientHeading'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select
  SelectValue
  SelectTrigger
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { BlogPost } from '@/types/blog'
import { generateRandomBlogPost } from '@/utils/generateRandomBlogPost'
import { BLOG_POSTS } from '@/data/blog-posts'

import { Search } from 'lucide-react'
import { fetchWithRetry  } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { useState, useEffect } from "react",
import Link from "next/link",
import { useRouter } from "next/router",
import { useDebounce } from "@/hooks/useDebounce",
import { GradientHeading } from "@/components/GradientHeading",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { BlogPost } from "@/types/blog",
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost",
import { BLOG_POSTS } from "@/data/blog-posts",
import { Search } from 'lucide-react'
import { fetchWithRetry } from '@/utils/fetchWithRetry',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',


  logInfo('BlogPage rendering. Initial BLOG_POSTS:', { data: initialPosts }),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("All Categories"),
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts]),
  const query = useDebounce(searchQuery, 300),
  const [isLoading, setIsLoading] = useState(false),
  const router = useRouter(),


        setPosts(data)
      } catch (err) {


    },

    fetchPosts()
  }, [query]),

  // Filter blog posts based on selected category only.
  // Search filtering is handled server-side.
  const filteredPosts = posts.filter(post => {
    const matchesCategory =

            )
import { useState, useEffect } from "react",;
import Link from "next/link",;
import { useRouter } from "next/router",;
import { useDebounce } from "@/hooks/useDebounce",;
import { GradientHeading } from "@/components/GradientHeading",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { BlogPost } from "@/types/blog",;
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost",;
import { BLOG_POSTS } from "@/data/blog-posts",;
                        src={post.featuredImage}
                        alt={post.featuredImageAlt |post.title}
                        className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        onError={e => {
                          const target = e.currentTarget as HTMLImageElement
                          target.src = '/images/blog-placeholder.svg' }}
                        />;
                        <span className='text-sm text-white'>;
                          {post && post.author.name}
                        </span>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p-6 pt-0'>;
                      <span className='text-zion-cyan group-hover:text-zion-purple'>;
                      </p>;
                      <div className='flex items - center'>;
                        <img;
                          src={post.author.avatar_url}
                          alt={post.author.name}
                          className='w - 8 h - 8 rounded - full mr - 2';
                          on_error={e => {
                            const target = e.current_target as HTMLImageElement;
                            target.src = '/images / blog - placeholder.svg';
                          }}
                        />;
                        <span className='text - sm text - white'>;
                          {post.author.name}
                        </span>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p - 6 pt - 0'>;
                      <span className='text - zion - cyan group - hover:text - zion - purple'>;
                        Read More →;
                      </span>;
                    </CardFooter>;
                  </Link>;


                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <span className="text-zion-cyan group-hover:text-zion-purple">Read More →</span>
                  </CardFooter>
                  </Link>
                </Card>
          {!isLoading && filteredPosts.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {filteredPosts.map((post) => (;
                <Card;
                  key={post.id}
                  asChild;
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 group-hover:shadow-lg";
                >;
                  <Link href={`/blog/${post.slug}`} className="block group">;
                  <div className="aspect-[16/9] relative overflow-hidden">;
                    <img;
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      className="object-cover w-full h-full hover: scale-105 transition-transform duration-300";
                      onError={(e) => {;
                        const target = e.currentTarget as HTMLImageElement,;
                        target.src = "/images/blog-placeholder.svg";
                      }}
                    />;
                  </div>;
                  <CardContent className="p-6">;
                    <div className="flex items-center justify-between mb-3">;
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">;
                        {post.category}
                      </span>;
                      <div className="text-xs text-zion-slate-light">;
                        {post.publishedDate} • {post.readTime}
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3">;
                      {post.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 line-clamp-3">;
                      {post.excerpt}
                    </p>;
                    <div className="flex items-center">;
                      <img;
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2";
                        onError={(e) => {;
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "/images/blog-placeholder.svg";
                        }}
                      />;
                      <span className="text-sm text-white">{post.author.name}</span>;
                    </div>;
                  </CardContent>;
                  <CardFooter className="p-6 pt-0">;
                    <span className="text-zion-cyan group-hover:text-zion-purple">Read More →</span>;
                  </CardFooter>;
                  </Link>;
                </Card>;



                  </div>;
                {/* comment */}";
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">;";
                  <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>;";
                  <p className="text-gray-300 mb-4">;
                    Get the latest technology insights delivered to your inbox.;
                  </p>;";
                  <div className="space-y-3">;
                    <input"
                      type="email""
                      placeholder="Enter your email""
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500">;
                   />;";
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">;
    <>";
      <SEO title="&quot;Blog" - Zion Tech Group | Technology Insights & Industry News & quot;";
        description="&quot;Stay" updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group & apos;s expert team.&quot;";
        keywords="&quot;technology" blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news & quot>;
    />&quot;";
        title = "Blog - Zion Tech Group | Technology Insights & Industry News;
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group & apos;s expert team.;
        keywords = "technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news;
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group"s expert team. ";
        keywords="technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news" />;
      ";
      <div className="&quot;min - h-screen" bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 & quot;>;
        {/* comment */}&quot;";
        <section className="&quot;py - 20" bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 & quot;>&quot;
          <div className="&quot;container" mx - auto px - 4&quot;>&quot;";
            <motion.div, ";
initial = "{{" opacity: 0, coordinate_y: 20 }}";
              animate="{{" opacity: 1, coordinate_y: 0 }}";
              transition="{{" duration: 0.8   }}";
              className="text - center max - w-4xl mx - auto">";
              <h1 className="text - 5xl md: text - 6xl font - bold text - white mb - 6">,
                Technology Insights, ";
transition="{{" duration: 0.8 }}";
              className="&quot;text - center" max - w-4xl mx - auto & quot;
            >&quot;";
              <h1 className="&quot;text - 5xl" md: text - 6xl font - bold text - white mb - 6&quot, >;
                Technology Insights & quot,
              </h1>",
              <p class_name = "&quot, text - xl" text - gray - 300 mb - 8&quot, >;
                Stay ahead of the curve with expert insights on AI, quantum computing,
                cybersecurity, and the latest technology trends shaping our future.&quot;";
              <p class_name = "text - xl text - gray - 300 mb - 8">;
                Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends shaping our future.;
              </p>";
              <div className="&quot;flex" flex - wrap justify - center gap - 4&quot;>;
                {categories.slice (0, 4).map ((category, index) => (&quot}";
                  <span key = "{category.name}
                    className="&quot;px - 4" py - 2 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - sm & quot>;
                  >;
                    {category.name}&quot;
                  </span>))}
              </div>;
            </motion.div>;
          </div>;
        </section>;
";
        <div className="container mx - auto px - 4 py - 16">;";
          <div class_name = "grid grid - cols - 1 lg: grid - cols - 4 gap - 12">,
            {/* comment */}";
            <div className="lg: col - span - 3">,
              {/* comment */}
              {featured_posts.length > 0 && (";
                <section className="mb - 16">;";
                  <h2 className="text - 3xl font - bold text - white mb - 8 flex items - center">;";
                    <TrendingUp className="w - 8 h - 8 mr - 3 text - blue - 400"  />;
                    Featured Articles;
                  </h2>;";
                  <div class_name = "grid grid - cols - 1 md: grid - cols - 2 gap - 8">,
                    {featured_posts.map ((post, index) => (
                      <motion.article;";
        <div className="&quot;container" mx - auto px - 4 py - 16 & quot;>&quot;
          <div className="&quot;grid" grid - cols - 1 lg: grid - cols - 4 gap - 12 & quot, >;
            {/* comment */}&quot;";
            <div className="&quot;lg:" col - span - 3&quot, >";
        <div class_name = "container mx - auto px - 4 py - 16">";
          <div className="grid grid - cols - 1 lg: grid - cols - 4 gap - 12">,
            {/* comment */}";
            <div className="lg: col - span - 3">,
              {/* comment */}
              {featured_posts.length > 0 && (&quot}";
                <section className="&quot;mb - 16 & quot;">&quot;
                  <h2 className="&quot;text - 3xl" font - bold text - white mb - 8 flex items - center & quot;>&quot;
                    <TrendingUp className="&quot;w - 8" h - 8 mr - 3 text - blue - 400 & quot;       />;
                    Featured Articles & quot;
                  </h2>";
                  <div className="&quot;grid" grid - cols - 1 md: grid - cols - 2 gap - 8&quot, >;
                    {featured_posts.map ((post, index) => (&quot}
                      <motion.article, ";
key = "{post.id}
                        initial="{{" opacity: 0, coordinate_y: 20 }}";
                        animate="{{" opacity: 1, coordinate_y: 0 }}";
                        transition="{{" duration: 0.8, delay: index * 0.1 }}">;
                        className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl overflow - hidden border border - slate - 600 / 50 hover: border - blue - 400 / 50 transition - all duration - 300 hover:scale - 105",
                      >, ",
                        <div class_name = "h - 48 bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 flex items - center justify - center">, ";
                          <div className="text - 6xl opacity - 20">, ";
                            {post.category === "AI & Machine Learning" && <Brain  />}";
                            {post.category === "Quantum Computing" && <Atom  />}";
                            {post.category === "Micro SaaS" && <Rocket  />}";
                            {post.category === "Cybersecurity" && <Shield  />}
                          </div>;
                        </div>;";
                        <div className="p - 6">;";
                          <div className="flex items - center gap - 4 mb - 3">;";
                            <span className="px - 3 py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs">;
                              {post.category}
                            </span>;";
                            <span className="text - yellow - 400 text - xs font - medium">Featured</span>;
                          </div>;";
                          <h3 class_name = "{"text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors">, ";
                            <Link to="{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>;";
                          <p className=""text - gray - 300" mb - 4 line - clamp - 3"}>{post.excerpt}</p>;";
                          <div className="flex items - center justify - between text - sm text - gray - 400">;";
                            <div className="flex items - center gap - 4">;";
                              <span className="flex items - center">;";
                                <User className="w - 4 h - 4 mr - 1"  />;
                                {post.author}
                              </span>;";
                              <span className="flex items - center">;";
                                <Calendar className="w - 4 h - 4 mr - 1"  />;
                                {new Date (post.date).toLocaleDateString ()}
                              </span>;
                            </div>;";
                            <span className="flex items - center">;";
                              <Clock className="w - 4 h - 4 mr - 1"  />;
                              {post.read_time}
                            </span>;
                          </div>;
                      </motion.article>;";
                        className="&quot;bg - gradient - to - br" from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl overflow - hidden border border - slate - 600 / 50 hover:border - blue - 400 / 50 transition - all duration - 300 hove, r: scale - 105 & quot;
                      >&quot;";
                        <div className="&quot;h - 48" bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 flex items - center justify - center & quot;>&quot,
                          <div className="&quot, text - 6xl" opacity - 20 & quot, >",
                            {post.category === &quot, AI & Machine Learning & quot, &&"}&quot <Brain  />}";
                            {post.category === &quot;Quantum Computing & quot; &&"}&quot <Atom  />}";
                            {post.category === &quot;Micro SaaS & quot; &&"}&quot <Rocket  />}";
                            {post.category === &quot;Cybersecurity & quot; &&"}&quot <Shield  />}
                          </div>;
                        </div>";
                        <div className="&quot;p - 6&quot;">&quot;
                          <div className="&quot;flex" items - center gap - 4 mb - 3&quot;>&quot;
                            <span className="&quot;px - 3" py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs & quot;>;
                              {post.category}&quot;
                            </span>";
                            <span className="&quot;text - yellow - 400" text - xs font - medium & quot;>Featured & quot </span>;
                          </div>";
                          <h3 className="&quot;text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors & quot, >&quot,
                            <Link to = "{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>";
                          <p className="&quot;text - gray - 300" mb - 4 line - clamp - 3&quot;>{post.excerpt}&quot </p>";
                          <div className="&quot;flex" items - center justify - between text - sm text - gray - 400 & quot;>&quot;
                            <div className="&quot;flex" items - center gap - 4&quot;>&quot;
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <User className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {post.author}&quot;
                              </span>";
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <Calendar className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {new Date (post.date).toLocaleDateString ()}&quot;
                              </span>;
                            </div>";
                            <span className="&quot;flex" items - center & quot;>&quot;
                              <Clock className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                              {post.read_time}&quot;
                            </span>;
                          </div>;
                      </motion.article>))}
                  </div>;
                </section>)}
              {/* comment */}
              <section>;";
                <h2 className="text - 3xl font - bold text - white mb - 8">Latest Articles</h2>;";
                <div className="space - y-8">;
                  {regular_posts.map ((post, index) => (
                    <motion.article>;
              <section>";
                <h2 className="&quot;text - 3xl" font - bold text - white mb - 8&quot;>Latest Articles & quot </h2>";
                <div className="&quot;space - y-8 & quot;">;
                  {regular_posts.map ((post, index) => (&quot}
                    <motion.article, ";
key = "{post.id}
                      initial="{{" opacity: 0, coordinate_y: 20 }}";
                      animate="{{" opacity: 1, coordinate_y: 0 }}";
                      transition="{{" duration: 0.8, delay: index * 0.1 }}";
                      className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - blue - 400 / 50 transition - all duration - 300">;
                    >, ";
                      <div className="flex flex - col md:flex - row gap - 6">, ",
                        <div class_name = "md:w - 48 h - 32 bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 rounded - lg flex items - center justify - center flex - shrink - 0">, ";
                          <div className="text - 4xl opacity - 20">, ";
                            {post.category === "AI & Machine Learning" && <Brain  />}";
                            {post.category === "Quantum Computing" && <Atom  />}";
                            {post.category === "Micro SaaS" && <Rocket  />}";
                            {post.category === "Cybersecurity" && <Shield  />}";
                            {post.category === "Digital Transformation" && <Globe  />}";
                            {post.category === "Cloud Computing" && <Code  />}
                          </div>;
                        </div>;";
                        <div className="flex - 1">;";
                          <div className="flex items - center gap - 4 mb - 3">;";
                            <span className="px - 3 py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs">;
                              {post.category}
                            </span>;
                          </div>;";
                          <h3 class_name = "{"text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors">, ";
                            <Link to="{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>;";
                          <p className=""text - gray - 300" mb - 4"}>{post.excerpt}</p>;";
                          <div className="flex items - center justify - between">;";
                            <div className="flex items - center gap - 4 text - sm text - gray - 400">;";
                              <span className="flex items - center">;";
                                <User className="w - 4 h - 4 mr - 1"  />;
                                {post.author}
                              </span>;";
                              <span className="flex items - center">;";
                                <Calendar className="w - 4 h - 4 mr - 1"  />;
                                {new Date (post.date).toLocaleDateString ()}
                              </span>;";
                              <span className="flex items - center">;";
                                <Clock className="{"w - 4" h - 4 mr - 1"  />;
                                {post.read_time}
                              </span>;
                            </div>;
                            <Link;";
                              to = "{"/blog/${post.id}"}
                              className=""flex" items - center text - blue - 400 hover:text - blue - 300 transition - colors"}>;
                            >;
                              Read More;";
                              <ArrowRight className="w - 4 h - 4 ml - 1"  />;
                            </Link>;
                          </div>;
                    </motion.article>;";
                      className="&quot;bg - gradient - to - br" from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - blue - 400 / 50 transition - all duration - 300 & quot,
                    >&quot, ",
                      <div className="&quot;flex" flex - col md: flex - row gap - 6&quot, >&quot,
                        <div className="&quot, m, d: " w - 48 h - 32 bg - gradient - to - br from - blue - 500 / 20 to - purple - 500 / 20 rounded - lg flex items - center justify - center flex - shrink - 0&quot;>&quot,
                          <div className="&quot, text - 4xl" opacity - 20 & quot, >",
                            {post.category === &quot, AI & Machine Learning & quot, &&"}&quot <Brain  />}";
                            {post.category === &quot;Quantum Computing & quot; &&"}&quot <Atom  />}";
                            {post.category === &quot;Micro SaaS & quot; &&"}&quot <Rocket  />}";
                            {post.category === &quot;Cybersecurity & quot; &&"}&quot <Shield  />}";
                            {post.category === &quot;Digital Transformation & quot; &&"}&quot <Globe  />}";
                            {post.category === &quot;Cloud Computing & quot; &&"}&quot <Code  />}
                          </div>;
                        </div>";
                        <div className="&quot;flex - 1&quot;">&quot;
                          <div className="&quot;flex" items - center gap - 4 mb - 3&quot;>&quot;
                            <span className="&quot;px - 3" py - 1 bg - blue - 600 / 20 border border - blue - 400 / 30 rounded - full text - blue - 300 text - xs & quot;>;
                              {post.category}&quot;
                            </span>;
                          </div>";
                          <h3 className="&quot;text - xl" font - bold text - white mb - 3 hover: text - blue - 400 transition - colors & quot, >&quot,
                            <Link to = "{"/blog/${post.id}"}">{post.title}</Link>;
                          </h3>";
                          <p className="&quot;text - gray - 300" mb - 4&quot;>{post.excerpt}&quot </p>";
                          <div className="&quot;flex" items - center justify - between & quot;>&quot;
                            <div className="&quot;flex" items - center gap - 4 text - sm text - gray - 400 & quot;>&quot;
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <User className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {post.author}&quot;
                              </span>";
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <Calendar className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {new Date (post.date).toLocaleDateString ()}&quot;
                              </span>";
                              <span className="&quot;flex" items - center & quot;>&quot;
                                <Clock className="&quot;w - 4" h - 4 mr - 1&quot;       />;
                                {post.read_time}&quot;
                              </span>;
                            </div>";
                            <Link to = "{"/blog/${post.id}"}"">;
                              className="&quot;flex" items - center text - blue - 400 hover: text - blue - 300 transition - colors & quot, ";
                              class_name = ""flex" items - center text - blue - 400 hover: text - blue - 300 transition - colors">,
                              Read More & quot, ",
                              <ArrowRight className="&quot;w - 4" h - 4 ml - 1&quot,       />&quot,
                            </Link>;
                          </div>;
                    </motion.article>))}
                </div>;
              </section>;
            </div>;
            {/* comment */}";
            <div className="lg: col - span - 1">;";
              <div className="sticky top - 8 space - y-8">;";
            <div className="&quot, lg:col - span - 1&quot, ">&quot, ",
              <div class_name = "&quot, sticky" top - 8 space - y-8 & quot, >;
                {/* comment */}&quot;";
                <div className="&quot;bg - gradient - to - br" from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 & quot;>&quot;
                  <h3 className="&quot;text - xl" font - bold text - white mb - 4&quot;>Categories & quot </h3>";
                  <div className="&quot;space - y-3 & quot;">;
                    {categories.map ((category, index) => (&quot}";
                      <Link key = "{category.name}"">;
                        to="{"/blog / category/${category.name.toLowerCase ().replace (/\s+/g, " &apos;-&apos)}"}";
                        className="&quot;flex" items - center justify - between p - 3 rounded - lg hover: bg - slate - 700 / 50 transition - colors group & quot>;
                      >&quot;&apos;";
                        <div className="&quot, flex" items - center & quot, >&quot, ",
                          <category.icon className="&quot;w - 5" h - 5 text - blue - 400 mr - 3 group - hover: text - blue - 300 & quot, />&quot, ";
                          <span className="&quot, text - gray - 300" group - hove, r: text - white & quot, >{category.name}&quot </span>";
            <div class_name = "lg: col - span - 1">";
              <div className="sticky top - 8 space - y-8">,
                {/* comment */}";
                <div className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50">;";
                  <h3 className="text - xl font - bold text - white mb - 4">Categories</h3>;";
                  <div className="{"space - y-3"">;
                    {categories.map ((category, index) => (
                      <Link;";
                        key = "{category.name}
                        to="{"/blog / category/${category.name.toLowerCase ().replace (/\s+/g, " "-")}"}";
                        className=""flex" items - center justify - between p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors group"}>;
                      >;";
                        <div className="flex items - center">;";
                          <category.icon class_name = "w - 5 h - 5 text - blue - 400 mr - 3 group - hover: text - blue - 300" />, ";
                          <span className="text - gray - 300 group - hover:text - white">{category.name}</span>;
                        </div>;";
                        <span className="{"text - sm" text - gray - 400">{category.count}</span>;
                      </Link>;";
                        to = "{"/blog / category/${category.name.toLowerCase ().replace (/\s+/g, " "-')}"}";
                        className=""flex" items - center justify - between p - 3 rounded - lg hover: bg - slate - 700 / 50 transition - colors group"}
                      >";
                        <div className="flex items - center">";
                          <category.icon className="w - 5 h - 5 text - blue - 400 mr - 3 group - hover: text - blue - 300" />",
                          <span className="text - gray - 300 group - hover:text - white">{category.name}</span>;
                        </div>";
                        <span className="&quot;text - sm" text - gray - 400 & quot;>{category.count}&quot </span>;
                      </Link>))}
                  </div>;
                {/* comment */}";
                <div className="bg - gradient - to - br from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 6 border border - blue - 400 / 30">;";
                  <h3 className="text - xl font - bold text - white mb - 4">Stay Updated</h3>;";
                  <p className="text - gray - 300 mb - 4">;
                    Get the latest technology insights delivered to your inbox.;
                  </p>;";
                  <div className="space - y-3">;
                    <input;";
                      type="email";";
                      placeholder="Enter your email";";
                      className="w - full px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - blue - 500">;
                  />;";
                    <button className="w - full px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 200">;

                      Subscribe;
                    </button>;
                  </div>;
    </>";



                <div className="&quot;bg - gradient - to - br" from - blue - 600 / 20 to - purple - 600 / 20 rounded - xl p - 6 border border - blue - 400 / 30 & quot;>&quot;
                  <h3 className="&quot;text - xl" font - bold text - white mb - 4&quot;>Stay Updated & quot </h3>";
                  <p className="&quot, text - gray - 300" mb - 4&quot, >;
                    Get the latest technology insights delivered to your inbox.&quot,
                  </p>",
                  <div className="&quot;space - y-3 & quot;">&quot,
                    <input type="&quot;email & quot;
                      placeholder="&quot;Enter" your email & quot;";
                      className="&quot;w - full" px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - blue - 500 & quot, >;
                  />&quot, ";
                    <button class_name = "&quot, w - full" px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hove, r: to - purple - 700 transition - all duration - 200 & quot, >;
                      Subscribe & quot, ";
                      type="email;
                      placeholder="Enter your email;
                      className="w - full px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - blue - 500" />";
                    <button className="w - full px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 200">;
                      Subscribe,
                    </button>;
                  </div>;
</>),
  )})))))))));
}

;

                variant="outline"
;
