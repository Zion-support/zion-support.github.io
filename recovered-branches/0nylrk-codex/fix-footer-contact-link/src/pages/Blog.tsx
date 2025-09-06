
import {useState} from "react";
import {Link} from "react-router-dom";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {SEO} from "@/components/SEO";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import {BlogPost} from "@/types/blog";
import {Search} from "lucide-react";
import { useState } from "react",
import { Link } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { BlogPost } from "@/types/blog";
import { Search } from "lucide-react";
// Sample blog data - in a real app this would come from an API or CMS
const BLOG_POSTS: BlogPost[] = [
  {
import { BlogPost } from "@/types/blog",
import { Search } from "lucide-react",
// Sample blog data - in a real app this would come from an API or CMS
const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-trends-2025",
    title: "10 Emerging AI Trends to Watch in 2025",
    slug: "ai-trends-2025",
    excerpt: "From multimodal AI to neuromorphic computing, discover the technologies that will shape the artificial intelligence landscape in 2025.",
    content: `<p>As we move further into 2025, artificial intelligence continues to evolve at an unprecedented pace. This article explores the most significant trends that are reshaping the AI landscape this year.</p>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




    content: `<p>As we move further into 2025, artificial intelligence continues to evolve at an unprecedented pace. This article explores the most significant trends that are reshaping the AI landscape this year.</p>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
<h2>1. Multimodal AI Systems</h2>
<p>Unlike traditional AI models that process single data types (text, images, or audio), multimodal systems can handle and interpret multiple data formats simultaneously. This creates more human-like understanding capabilities and enables more sophisticated applications across industries.</p>
<h2>2. Neuromorphic Computing</h2>
<p>Taking inspiration from the human brain's neural structure, neuromorphic computing represents a fundamental shift in how AI processes information. These systems consume significantly less power while delivering enhanced performance for complex tasks.</p>
<h2>3. Federated Learning at Scale</h2>
<p>Privacy concerns continue to drive adoption of federated learning approaches, where models are trained across multiple devices without exchanging raw data. In 2025, we're seeing enterprise-scale deployments that maintain privacy while delivering powerful insights.</p>
<h2>4. Quantum AI</h2>
<p>The convergence of quantum computing and AI is beginning to yield practical applications. While still in early stages, quantum-enhanced machine learning algorithms are demonstrating superior performance for specific optimization and pattern recognition problems.</p>
<h2>5. AI for Climate Solutions</h2>
<p>AI systems designed specifically to address climate challenges are gaining traction. From optimizing energy networks to modeling climate scenarios, these specialized tools are becoming essential in sustainability efforts.</p>`;
    author: {

      name: "Dr. Alicia Zhang"
      title: "AI Research Director"
      avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"
    }
    publishedDate: "Apr 15, 2025";
    readTime: "5 min read"
    category: "Trends"
    tags: ["AI", "Technology Trends", "Machine Learning", "Future Tech"];
    featuredImage: "https://images.unsplash.com/photo-1677442135026-f00ef565c4be?auto=format&fit=crop&w=1200&h=630"
    isFeatured: true
  }
  {
    id: "optimize-ai-listings"
    title: "How to Optimize Your AI Service Listings for Maximum Visibility"
    slug: "optimize-ai-listings"
    excerpt: "Learn the key strategies for optimizing your AI products and services on Zion marketplace to attract more potential clients."
    content: `<p>In the competitive AI marketplace, standing out is essential. This comprehensive guide shares proven strategies to optimize your AI service listings and attract more qualified leads.</p>
<<<<<<< HEAD

      name: "Dr. Alicia Zhang"
      title: "AI Research Director"
      avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"
    }
    publishedDate: "Apr 15, 2025";
    readTime: "5 min read"
    category: "Trends"
    tags: ["AI", "Technology Trends", "Machine Learning", "Future Tech"];
    featuredImage: "https://images.unsplash.com/photo-1677442135026-f00ef565c4be?auto=format&fit=crop&w=1200&h=630"
    isFeatured: true
  }
  {
    id: "optimize-ai-listings"
    title: "How to Optimize Your AI Service Listings for Maximum Visibility"
    slug: "optimize-ai-listings"
    excerpt: "Learn the key strategies for optimizing your AI products and services on Zion marketplace to attract more potential clients."
    content: `<p>In the competitive AI marketplace, standing out is essential. This comprehensive guide shares proven strategies to optimize your AI service listings and attract more qualified leads.</p>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
<h2>Crafting an Irresistible Service Title</h2>
<p>Your title is the first element potential clients see. It should be specific, include relevant keywords, and clearly communicate your unique value proposition. Avoid generic terms and focus on the specific problems you solve or results you deliver.</p>
<h2>Compelling Service Descriptions That Convert</h2>
<p>Beyond explaining features, your description should emphasize benefits and outcomes. Use client-centered language, incorporate relevant technical terms for searchability, and structure your content with headers and bullet points for easy scanning.</p>
<h2>Showcase Your Expertise with Case Studies</h2>
<p>Nothing builds credibility like proven results. Include mini case studies that highlight specific problems you've solved, the approach you took, and quantifiable outcomes you achieved. This transforms abstract services into concrete value.</p>
<h2>Strategic Pricing and Package Structure</h2>
<p>Consider offering tiered packages that cater to different client needs and budgets. Clearly differentiate what's included in each tier, and consider adding value-based pricing elements that tie your compensation to client results.</p>
<h2>Leveraging Reviews and Testimonials</h2>
<p>Social proof is powerful. Actively request detailed reviews from satisfied clients, and feature the most compelling testimonials prominently in your listing. Respond professionally to all feedback, including any critical reviews.</p>`;
    author: {
      name: "Marcus Johnson"
      title: "Marketing Strategist"
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
<h2>Energy-Efficient Hardware Selection</h2>
<p>The foundation of any green IT strategy begins with your hardware choices. Modern processors, storage solutions, and networking equipment can deliver significant performance improvements while consuming less power. Look for Energy Star ratings and power usage effectiveness (PUE) metrics when evaluating options.</p>
<h2>Optimizing Cooling Systems</h2>
<p>Cooling typically represents 40% of data center energy consumption. Implementing hot/cold aisle containment, raising ambient temperature setpoints within ASHRAE guidelines, and deploying liquid cooling for high-density racks can dramatically reduce this energy burden.</p>
<h2>Renewable Energy Integration</h2>
<p>Many organizations are now leveraging on-site renewable generation or virtual power purchase agreements (VPPAs) to offset their carbon footprint. These approaches not only reduce emissions but can provide long-term cost stability as energy markets fluctuate.</p>
<h2>Workload Optimization and Consolidation</h2>
<p>Right-sizing infrastructure and implementing dynamic workload management ensures computing resources are used efficiently. Modern orchestration tools can automatically balance workloads to maximize utilization while powering down unused capacity.</p>
<h2>Measuring and Reporting Impact</h2>
<p>Implementing comprehensive monitoring and establishing environmental KPIs creates accountability and identifies opportunities for improvement. Many organizations now include sustainability metrics in their regular performance reporting alongside traditional IT measurements.</p>`;
    author: {
      name: "Sophia Chen"
      title: "Sustainability Engineer"
      avatarUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&h=200"

    },
    publishedDate: "Apr 5, 2025",
    readTime: "6 min read",
    category: "Sustainability",
    tags: ["Green IT", "Sustainability", "Data Centers", "Energy Efficiency"],
    featuredImage: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=1200&h=630"
  },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  {
    id: "ai-talent-acquisition"
    title: "Winning the AI Talent War: Recruitment Strategies for 2025"
    slug: "ai-talent-acquisition"
    excerpt: "How forward-thinking companies are attracting and retaining scarce AI talent in an increasingly competitive market."
    content: `<p>The demand for skilled AI professionals continues to outpace supply, creating intense competition among employers. This article examines effective strategies for attracting and retaining top AI talent in today's challenging market.</p>
<h2>Beyond Compensation: What AI Talent Really Wants</h2>
<p>While competitive salaries are essential, today's AI professionals are equally motivated by challenging problems, access to cutting-edge infrastructure, and opportunities to publish and contribute to the field. Creating an environment that balances practical applications with research opportunities can be a major differentiator.</p>
<h2>Building Internal Talent Pipelines</h2>
<p>Forward-thinking organizations are creating robust upskilling programs to develop AI capabilities within their existing workforce. Structured mentorship, educational stipends, and dedicated learning time can transform motivated employees into valuable AI contributors.</p>
<h2>Creating Compelling AI Missions</h2>
<p>Top AI talent is increasingly mission-driven, seeking roles where their work creates meaningful impact. Articulating how your AI initiatives address important challenges—whether in sustainability, healthcare, education, or other domains—can be a powerful recruitment tool.</p>
<h2>Remote-First Talent Strategies</h2>
<p>The most successful AI employers have embraced truly global talent strategies, creating distributed teams that leverage expertise regardless of location. This approach requires investing in collaboration tools, asynchronous workflows, and inclusive management practices.</p>
<h2>Retention Through Growth Paths</h2>
<p>Create clear advancement opportunities that don't force technical experts into management tracks. Dual-ladder career paths that equally value technical depth and leadership skills ensure AI professionals can progress while playing to their strengths.</p>`;
    author: {
      name: "Elena Rodriguez"
      title: "Head of AI Talent"
      avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200"

  {
    id: "ai-compute-optimization"
    title: "AI Compute Optimization: Balancing Performance and Cost"
    slug: "ai-compute-optimization"
    excerpt: "Strategies for optimizing AI infrastructure costs while maintaining model performance and development velocity."
    content: `<p>As AI models grow in complexity, so do their computational requirements. This practical guide explores strategies for optimizing AI infrastructure for the optimal balance between performance, cost, and development efficiency.</p>
<h2>Right-sizing Compute Resources</h2>
<p>Many organizations overprovision computing resources for AI workloads. Implementing proper benchmarking and profiling helps identify true requirements and eliminate waste. Consider different compute profiles for development, training, and inference stages.</p>
<h2>Model Compression Techniques</h2>
<p>Recent advances in quantization, pruning, and knowledge distillation allow teams to reduce model size without significant performance loss. These compressed models require less compute for inference and can often run on less expensive hardware.</p>
<h2>Strategic Cloud vs. On-Premise Decisions</h2>
<p>While cloud platforms offer flexibility, organizations with consistent AI workloads often benefit from hybrid approaches. Analyze workload patterns to determine which components should remain in the cloud and which warrant dedicated hardware investments.</p>
<h2>Training Efficiency Optimization</h2>
<p>Implementing techniques like mixed precision training, gradient accumulation, and efficient hyperparameter optimization can significantly reduce training time and costs. Modern frameworks provide many of these optimizations with minimal configuration.</p>
<h2>Inference Serving Architecture</h2>
<p>The deployment architecture for AI models dramatically impacts both performance and cost. Consider batching strategies, hardware acceleration options, and scaling policies that align with your application's latency requirements and traffic patterns.</p>`;
    author: {
      name: "Michael Wong"
      title: "ML Infrastructure Architect"
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200"

  "All Categories";
  "Trends";
  "Marketing";
  "Sustainability";
  "Ethics";
  "Recruitment";
  "Infrastructure";
];


    },
    publishedDate: "Mar 15, 2025",
    readTime: "6 min read",
    category: "Infrastructure",
    tags: ["AI Infrastructure", "Cost Optimization", "Machine Learning", "Computing"],
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630"
  }
],


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <>
      <SEO
        title="Blog - AI & Tech Insights"
        description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation."
        keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT"
        canonical="https://app.ziontechgroup.com/blog"
      />
      <Header />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts && featuredPosts.length > 0 && (;
            <div className="mb-16">;
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                <div className="aspect-video overflow-hidden rounded-lg">;
                  <img
                    src={featuredPosts[0].featuredImage} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    alt={featuredPosts[0].title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />;
                </div>;
                <div className="flex flex-col justify-center">;
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">;
                    {featuredPosts[0].category}
                  </span>;
                  <h3 className="text-3xl font-bold text-white mb-4">;
                    {featuredPosts[0].title}
                  </h3>;
                  <p className="text-zion-slate-light mb-6">;
                    {featuredPosts[0].excerpt}

                  </p>;
                  <div className="flex items-center mb-6">;
                    <img
                      src={featuredPosts[0].author && author.avatarUrl} 
                      alt={featuredPosts[0].author && author.name}

                      className="w-10 h-10 rounded-full mr-3"
                    />;
                    <div>;
                      <p className="text-white font-medium">{featuredPosts[0].author && author.name}</p>;
                      <p className="text-sm text-zion-slate-light">;
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}

                      </p>;
                    </div>;
                  </div>;

                  <Button
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">;
                    <Link to={`/blog/${featuredPosts[0].slug}`}>;
                      Read Article;
                    </Link>;
                  </Button>;
                </div>;
              </div>;



          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white";
                />;
              </div>;

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <SelectValue placeholder="Select Category" />;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {CATEGORIES && CATEGORIES.map((category) => (;
                    <SelectItem key={category} value={category} className="text-white">;

                      {category}
                    </SelectItem>;
                  ))}

            </div>)}
          {/* Filters and Search */}
          <div className="bg - zion - blue - dark rounded - lg p - 6 mb - 8 border border - zion - blue - light">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate" />;
                <Input;
                  type="text";
                  placeholder="Search articles...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="pl - 10 bg - zion - blue border border - zion - blue - light text - white";
                />;
              </div>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;
                  <SelectValue placeholder="Select Category" />;
                </SelectTrigger>;
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                  {CATEGORIES.map ((category) => (
                    <SelectItem key={category} value={category} className="text - white">;
                      {category}
                    </SelectItem>))}
                </SelectContent>;
              </Select>;
            </div>;
          </div>;
          {/* Blog Posts Grid */}
          {filtered_posts.length > 0 ? (
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {filtered_posts.map ((post) => (
                <Card;
                  key={post.id}
                  className="bg - zion - blue - dark border border - zion - blue - light hover:border - zion - purple transition - all duration - 300";
                >;
                  <div className="aspect-[16 / 9] relative overflow - hidden">;
                    <img;
                      src={post.featured_image}
                      alt={post.title}
                      className="object - cover w - full h - full hover:scale - 105 transition - transform duration - 300";
                    />;
                  </div>;
                  <CardContent className="p - 6">;
                    <div className="flex items - center justify - between mb - 3">;
                      <span className="text - xs text - zion - cyan bg - zion - blue px - 3 py - 1 rounded - full">;

                        {post.category}
                      </span>;
                      <div className="text - xs text - zion - slate - light">;
                        {post.published_date} • {post.read_time}
                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 3">;
                      {post.title}
                    </h3>;
                    <p className="text - zion - slate - light mb - 4 line - clamp - 3">;
                      {post.excerpt}

                </SelectContent>;
              </Select>;
            </div>;
          </div>;

          {/* Blog Posts Grid */}
          {filteredPosts && filteredPosts.length > 0 ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {filteredPosts && filteredPosts.map((post) => (;
                <Card
                  key={post && post.id} 
                  className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300">;
                  <div className="aspect-[16/9] relative overflow-hidden">;
                    <img
                      src={post && post.featuredImage} 
                      alt={post && post.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />;
                  </div>;
                  <CardContent className="p-6">;
                    <div className="flex items-center justify-between mb-3">;
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">;
                        {post && post.category}
                      </span>;
                      <div className="text-xs text-zion-slate-light">;
                        {post && post.publishedDate} • {post && post.readTime}
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3">;
                      {post && post.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 line-clamp-3">;
                      {post && post.excerpt}
                    </p>;
                    <div className="flex items-center">;
                      <img
                        src={post && post.author.avatarUrl} 
                        alt={post && post.author.name} 
                        className="w-8 h-8 rounded-full mr-2"
                      />;
                      <span className="text-sm text-white">{post && post.author.name}</span>;
                    </div>;
                  </CardContent>;
                  <CardFooter className="p-6 pt-0">;
                    <Button
                      variant="link" 

                      className="text-zion-cyan p-0 hover:text-zion-purple"
                      asChild>;
                      <Link to={`/blog/${post && post.slug}`}>;
=======
                    </p>;
                    <div className="flex items - center">;
                      <img;
                        src={post.author.avatar_url}
                        alt={post.author.name}
                        className="w - 8 h - 8 rounded - full mr - 2";
                      />;
                      <span className="text - sm text - white">{post.author.name}</span>;
                    </div>;
                  </CardContent>;
                  <CardFooter className="p - 6 pt - 0">;
                    <Button;
                      variant="link";
                      className="text - zion - cyan p - 0 hover:text - zion - purple";
                      as_child;
                    >;
                      <Link to={`/blog/${post.slug}`}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                        Read More →;
                      </Link>;
                    </Button>;
                  </CardFooter>;


                  setSearchQuery(""),


                  setSelectedCategory("All Categories")
=======
            </div>;
          ) : (;
            <div className="text-center py-16">;
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>;
              <Button
                variant="outline"
                onClick={() => {

                  setSelectedCategory("All Categories")
                }}
                }}

                }}

                  setSearchQuery(""),
                  setSelectedCategory("All Categories")
                }}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
                    </p>;
                    <div className="flex items-center">;
                      <img;
                        src={post.author.avatarUrl} ;
                        alt={post.author.name} ;
                        className="w-8 h-8 rounded-full mr-2";
                      />;
                      <span className="text-sm text-white">{post.author.name}</span>;
                    </div>;
                  </CardContent>;
                  <CardFooter className="p-6 pt-0">;
                    <Button;
                      variant="link";
                      className="text-zion-cyan p-0 hover:text-zion-purple";
                      asChild;
                    >;
                      <Link to={`/blog/${post.slug}`}>;
                        Read More →;
                      </Link>;
                    </Button>;
                  </CardFooter>;
                </Card>;
              ))}
            </div>;
          ) : (;
            <div className="text-center py-16">;
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>;
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>;
              <Button;
                variant="outline";
                onClick={() => {;
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
<<<<<<< HEAD
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
